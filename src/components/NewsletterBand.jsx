"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { validateNewsletter } from "@/lib/validation";
import Turnstile, { SITE_KEY } from "@/components/Turnstile";

// Subscribe band shown just above the footer. Uses the same secure /api/contact endpoint (type "newsletter").
export default function NewsletterBand() {
  const startedAt = useRef(Date.now());
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => { startedAt.current = Date.now(); }, []);

  async function onSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;
    const fd = new FormData(formRef.current);
    const { valid, errors } = validateNewsletter({ email: fd.get("email") });
    if (!valid) { setError(errors.email); setStatus("idle"); setNotice(""); return; }
    if (SITE_KEY && !token) { setError(""); setStatus("err"); setNotice("Please complete the verification check."); return; }

    setError(""); setNotice(""); setStatus("sending");
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 20000);
    try {
      const res = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" }, signal: ctrl.signal,
        body: JSON.stringify({ type: "newsletter", email: fd.get("email"), company_website: fd.get("company_website") || "", startedAt: startedAt.current, turnstileToken: token }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) { formRef.current.reset(); setStatus("ok"); setNotice("Thank you for subscribing."); startedAt.current = Date.now(); }
      else {
        if (json.fieldErrors?.email) setError(json.fieldErrors.email);
        setStatus("err");
        setNotice(res.status === 429 ? "Too many attempts. Please try again later." : json.reload ? "Please refresh the page and try again." : json.error || "Something went wrong. Please try again.");
      }
    } catch { setStatus("err"); setNotice("Network problem. Please try again."); }
    finally { clearTimeout(timer); if (SITE_KEY) setResetKey((k) => k + 1); }
  }

  return (
    <section className="relative overflow-hidden bg-linear-to-r from-brand-plum to-brand-navy py-14 text-white">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl" />
      <div className="container-x relative grid items-center gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold text-white!">Stay in the loop.</h2>
          <p className="mt-2 max-w-md text-slate-200">Get project updates, insights and news from EDAS straight to your inbox.</p>
        </div>
        <div>
          <form ref={formRef} onSubmit={onSubmit} noValidate className="flex flex-col gap-3 sm:flex-row">
            <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
              <label>Company website<input type="text" name="company_website" tabIndex={-1} autoComplete="off" /></label>
            </div>
            <input name="email" type="email" maxLength={254} placeholder="Enter your email address" aria-label="Email address" autoComplete="email"
              aria-invalid={error ? true : undefined} onChange={() => { if (error) setError(""); }}
              className={`w-full flex-1 rounded-full border bg-white/10 px-6 py-3 text-sm text-white outline-hidden placeholder:text-slate-300 focus:border-brand-orange ${error ? "border-red-300" : "border-white/30"}`} />
            <button disabled={status === "sending"} className="btn btn-primary shrink-0 disabled:cursor-not-allowed disabled:opacity-60">
              {status === "sending" ? "Sending…" : "Subscribe Now"} <ArrowRight size={16} />
            </button>
          </form>
          <Turnstile onToken={setToken} resetKey={resetKey} />
          {error && <p role="alert" className="mt-3 text-sm text-red-300">{error}</p>}
          <p role="status" aria-live="polite" className={`mt-3 text-sm ${status === "ok" ? "text-emerald-300" : "text-red-300"}`}>{notice}</p>
        </div>
      </div>
    </section>
  );
}
