// Optional Cloudflare Turnstile (free CAPTCHA alternative). Active only when TURNSTILE_SECRET_KEY is set.
// Fails CLOSED: if the verification service can't be reached, the submission is refused (503), never silently allowed.
export const turnstileRequired = () => Boolean(process.env.TURNSTILE_SECRET_KEY);

export async function verifyTurnstile(token, ip) {
  if (typeof token !== "string" || !token || token.length > 2048) return { ok: false, reason: "missing" };
  const body = new URLSearchParams({ secret: process.env.TURNSTILE_SECRET_KEY, response: token });
  if (ip && ip !== "unknown") body.set("remoteip", ip);
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 5000);
  try {
    const url = process.env.TURNSTILE_VERIFY_URL || "https://challenges.cloudflare.com/turnstile/v0/siteverify";
    const res = await fetch(url, { method: "POST", body, signal: ctrl.signal });
    const json = await res.json();
    return json && json.success === true ? { ok: true } : { ok: false, reason: "failed" };
  } catch {
    return { ok: false, reason: "unavailable" };
  } finally {
    clearTimeout(timer);
  }
}
