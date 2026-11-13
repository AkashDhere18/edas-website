// import { NextResponse } from "next/server";
// // Contact form endpoint — validates and accepts the submission.
// // TODO: wire up delivery (Nodemailer / Resend / SMTP) using env vars.
// export async function POST(req) {
//   const body = await req.json().catch(() => null);
//   const { name, email, message, category } = body ?? {};
//   if (!name || !email || !message || !category || !/^\S+@\S+\.\S+$/.test(email)) {
//     return NextResponse.json({ ok: false, error: "Invalid input" }, { status: 400 });
//   }
//   console.log("[contact]", { name, email, category });
//   return NextResponse.json({ ok: true });
// }
import { NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { validateContact, validateNewsletter } from "@/lib/validation";
import { rateLimit } from "@/lib/rateLimit";
import { smtpConfigured, sendContactMail, sendNewsletterMail } from "@/lib/mailer";
import { turnstileRequired, verifyTurnstile } from "@/lib/turnstile";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 20_000;
const MIN_FILL_MS = 2_500;            // humans need more than 2.5 s to fill a form
const MAX_AGE_MS = 24 * 3600_000;     // form page opened more than 24 h ago -> ask to reload
const ATTEMPTS = { limit: 15, windowMs: 10 * 60_000 };   // every POST, per IP
const SENDS = { limit: 5, windowMs: 60 * 60_000 };       // emails actually sent, per IP
const DEDUPE_MS = 10 * 60_000;

const recent = new Map(); // fingerprint -> time (blocks double-clicks / repeated identical submissions)

const reply = (body, status = 200, headers) => NextResponse.json(body, { status, headers });
const fail = (error, status, extra = {}, headers) => reply({ ok: false, error, ...extra }, status, headers);

function clientIp(req) {
  return req.headers.get("x-forwarded-for")?.split(",")[0].trim() || req.headers.get("x-real-ip") || "unknown";
}

// Blocks cross-site browser posts. A request from another website's page has a different Origin.
function originAllowed(req) {
  const origin = req.headers.get("origin");
  if (!origin) return true; // non-browser clients (curl) don't send it; they are handled by the other defences
  let host;
  try { host = new URL(origin).host; } catch { return false; }
  const own = req.headers.get("x-forwarded-host") || req.headers.get("host");
  if (host === own) return true;
  const extra = (process.env.ALLOWED_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean);
  return extra.some((o) => { try { return new URL(o).host === host; } catch { return false; } });
}

const fingerprint = (...parts) => createHash("sha256").update(parts.join("::")).digest("hex");
function seenRecently(fp, now) {
  for (const [k, t] of recent) if (now - t > DEDUPE_MS) recent.delete(k);
  if (recent.has(fp)) return true;
  recent.set(fp, now);
  return false;
}

export async function POST(req) {
  const now = Date.now();
  const ip = clientIp(req);

  if (!originAllowed(req)) return fail("Request not allowed.", 403);
  if (!(req.headers.get("content-type") || "").toLowerCase().startsWith("application/json")) return fail("Unsupported content type.", 415);
  if (Number(req.headers.get("content-length") || 0) > MAX_BODY_BYTES) return fail("Request too large.", 413);

  const a = rateLimit(`attempt:${ip}`, ATTEMPTS.limit, ATTEMPTS.windowMs, now);
  if (!a.ok) return fail("Too many attempts. Please try again later.", 429, { retryAfter: a.retryAfter }, { "Retry-After": String(a.retryAfter) });

  let raw;
  try {
    const text = await req.text();
    if (Buffer.byteLength(text) > MAX_BODY_BYTES) return fail("Request too large.", 413);
    raw = JSON.parse(text);
  } catch {
    return fail("Invalid request.", 400);
  }
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return fail("Invalid request.", 400);

  const type = raw.type === "newsletter" ? "newsletter" : raw.type === "contact" ? "contact" : null;
  if (!type) return fail("Invalid request.", 400);

  // Honeypot: real people never see this field. Bots fill it. Pretend success so the bot moves on.
  if (typeof raw.company_website === "string" && raw.company_website.trim() !== "") return reply({ ok: true });

  // Time trap: submitted impossibly fast, or with a missing/forged timestamp.
  const elapsed = now - Number(raw.startedAt);
  if (!Number.isFinite(elapsed) || elapsed < MIN_FILL_MS || elapsed > MAX_AGE_MS) {
    return fail("Please review the form and try again.", 400, { reload: elapsed > MAX_AGE_MS });
  }

  // Cloudflare Turnstile (only when configured)
  if (turnstileRequired()) {
    const t = await verifyTurnstile(raw.turnstileToken, ip);
    if (!t.ok) {
      if (t.reason === "unavailable") return fail("Verification service is unavailable. Please try again in a moment.", 503);
      return fail("Verification failed. Please complete the check and try again.", 400, { verify: true });
    }
  }

  // Validation (server side, always)
  const result = type === "contact" ? validateContact(raw) : validateNewsletter(raw);
  if (!result.valid) return fail("Please correct the highlighted fields.", 400, { fieldErrors: result.errors });
  const d = result.data;

  // Same person pressing twice / replaying the same message: succeed quietly, send only once.
  const fp = type === "contact" ? fingerprint(type, d.email, d.category, d.message) : fingerprint(type, d.email);
  if (seenRecently(fp, now)) return reply({ ok: true });

  const s = rateLimit(`send:${ip}`, SENDS.limit, SENDS.windowMs, now);
  if (!s.ok) {
    recent.delete(fp);
    return fail("Too many messages from your network. Please try again later.", 429, { retryAfter: s.retryAfter }, { "Retry-After": String(s.retryAfter) });
  }

  // Not configured: fine in development (logs to terminal), a hard error in production (never pretend it was sent).
  if (!smtpConfigured()) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[contact] SMTP not configured; development mode, message NOT emailed:\n", d);
      return reply({ ok: true, dev: true });
    }
    console.error("[contact] SMTP_HOST / MAIL_TO are not set. Message could not be delivered.");
    recent.delete(fp);
    return fail("We couldn't send your message right now. Please email us directly.", 500);
  }

  try {
    if (type === "contact") await sendContactMail(d, { ip });
    else await sendNewsletterMail(d, { ip });
  } catch (err) {
    console.error("[contact] Sending failed:", err?.code || err?.name, err?.message);
    recent.delete(fp);
    return fail("We couldn't send your message right now. Please try again or email us directly.", 502);
  }

  return reply({ ok: true });
}

