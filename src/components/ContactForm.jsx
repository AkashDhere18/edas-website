// "use client";
// import { useState } from "react";
// import { Send } from "lucide-react";
// import { contactCategories } from "@/data/site";
// // The only dynamic part of the site. Posts to /api/contact.
// export default function ContactForm() {
//   const [state, setState] = useState("idle");
//   async function onSubmit(e) {
//     e.preventDefault();
//     setState("sending");
//     const data = Object.fromEntries(new FormData(e.currentTarget));
//     try {
//       const r = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });
//       if (!r.ok) throw new Error();
//       setState("ok");
//       e.target.reset();
//     } catch {
//       setState("err");
//     }
//   }
//   const field =
//     "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-hidden transition placeholder:text-slate-400 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20";
//   return (
//     <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
//       <input name="name" required placeholder="Full name *" className={field} autoComplete="name" />
//       <input name="email" type="email" required placeholder="Email address *" className={field} autoComplete="email" />
//       <input name="phone" type="tel" placeholder="Phone number" className={field} autoComplete="tel" />
//       <select name="category" required defaultValue="" className={field}>
//         <option value="" disabled>
//           Select category *
//         </option>
//         {contactCategories.map((c) => (
//           <option key={c}>{c}</option>
//         ))}
//       </select>
//       <input name="location" placeholder="Project location (city / town)" className={`${field} sm:col-span-2`} />
//       <textarea name="message" rows={4} required placeholder="How can we help? *" className={`${field} sm:col-span-2`} />
//       <label className="flex items-start gap-3 text-xs text-slate-500 sm:col-span-2">
//         <input type="checkbox" name="consent" required className="mt-0.5 accent-[#DC7F44]" />I agree to be contacted by EDAS regarding my
//         enquiry.
//       </label>
//       <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
//         <button disabled={state === "sending"} className="btn btn-primary disabled:opacity-60">
//           {state === "sending" ? "Sending…" : "Send Message"} <Send size={16} />
//         </button>
//         {state === "ok" && <p className="text-sm font-medium text-emerald-600">Thank you — we&apos;ll be in touch shortly.</p>}
//         {state === "err" && (
//           <p className="text-sm font-medium text-red-600">Something went wrong. Please try again or email us directly.</p>
//         )}
//       </div>
//     </form>
//   );
// }
"use client";
import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { CATEGORIES, LIMITS, validateContact } from "@/lib/validation";
import Turnstile, { SITE_KEY } from "@/components/Turnstile";

const FIELD_ORDER = ["name", "email", "phone", "category", "location", "message", "consent"];

// Reads the current values from the <form> element.
function readValues(form) {
  const fd = new FormData(form);
  const v = Object.fromEntries(fd);
  v.consent = fd.get("consent") === "on";
  return v;
}

function Err({ id, msg }) {
  return msg ? <p id={id} role="alert" className="mt-1.5 text-xs font-medium text-red-600">{msg}</p> : null;
}

// Pass `locations` (array of strings) to show a "Select location" dropdown instead of a free-text field.
export default function ContactForm({ locations }) {
  const formRef = useRef(null);
  const startedAt = useRef(Date.now());
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | ok | err
  const [notice, setNotice] = useState("");
  const [msgLen, setMsgLen] = useState(0);
  const [token, setToken] = useState("");
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => { startedAt.current = Date.now(); }, []);

  const validateOne = (name) => {
    if (!formRef.current || !FIELD_ORDER.includes(name)) return;
    const { errors: all } = validateContact(readValues(formRef.current));
    setErrors((prev) => ({ ...prev, [name]: all[name] }));
  };
  const onBlur = (e) => validateOne(e.target.name);
  const onChange = (e) => {
    if (e.target.name === "message") setMsgLen(e.target.value.length);
    if (errors[e.target.name]) validateOne(e.target.name); // clear the error as soon as it's fixed
    if (status === "ok" || status === "err") { setStatus("idle"); setNotice(""); }
  };

  async function onSubmit(e) {
    e.preventDefault();
    if (status === "sending") return; // blocks double clicks
    const form = formRef.current;
    const values = readValues(form);

    const { valid, errors: errs } = validateContact(values);
    if (!valid) {
      setErrors(errs);
      setStatus("idle");
      setNotice("");
      const first = FIELD_ORDER.find((f) => errs[f]);
      form.elements.namedItem(first)?.focus();
      return;
    }
    if (SITE_KEY && !token) {
      setStatus("err");
      setNotice("Please complete the verification check below before sending.");
      return;
    }

    setErrors({});
    setStatus("sending");
    setNotice("");
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 20000);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...values, company_website: values.company_website || "", startedAt: startedAt.current, turnstileToken: token }),
        signal: ctrl.signal,
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        form.reset();
        setMsgLen(0);
        setStatus("ok");
        setNotice("Thank you! Your message has been sent. We'll get back to you shortly.");
        startedAt.current = Date.now();
      } else {
        if (json.fieldErrors) {
          setErrors(json.fieldErrors);
          form.elements.namedItem(FIELD_ORDER.find((f) => json.fieldErrors[f]))?.focus();
        }
        setStatus("err");
        setNotice(
          res.status === 429 ? `Too many attempts. Please try again in ${Math.max(1, Math.ceil((json.retryAfter || 60) / 60))} minute(s).`
          : json.reload ? "This page has been open for a long time. Please refresh it and try again."
          : json.error || "Something went wrong. Please try again."
        );
      }
    } catch {
      setStatus("err");
      setNotice("Network problem — your message was not sent. Please check your connection and try again.");
    } finally {
      clearTimeout(timer);
      if (SITE_KEY) setResetKey((k) => k + 1); // a Turnstile token works once
    }
  }

  const field = (name) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-800 outline-hidden transition placeholder:text-slate-400 focus:ring-2 ${
      errors[name] ? "border-red-400 focus:border-red-500 focus:ring-red-200" : "border-slate-200 focus:border-brand-orange focus:ring-brand-orange/20"
    }`;
  const aria = (name) => ({ "aria-invalid": errors[name] ? true : undefined, "aria-describedby": errors[name] ? `err-${name}` : undefined });
  const sending = status === "sending";

  return (
    <form ref={formRef} onSubmit={onSubmit} onBlur={onBlur} onChange={onChange} noValidate className="grid gap-4 sm:grid-cols-2">
      {/* Honeypot: invisible to people, bots fill it in. Do not remove. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label>Company website<input type="text" name="company_website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div>
        <input name="name" placeholder="Full name *" maxLength={LIMITS.nameMax} autoComplete="name" className={field("name")} {...aria("name")} />
        <Err id="err-name" msg={errors.name} />
      </div>
      <div>
        <input name="email" type="email" placeholder="Email address *" maxLength={LIMITS.emailMax} autoComplete="email" className={field("email")} {...aria("email")} />
        <Err id="err-email" msg={errors.email} />
      </div>
      <div>
        {/* <input name="phone" type="tel" inputMode="tel" placeholder="Phone number" maxLength={LIMITS.phoneMax} autoComplete="tel" className={field("phone")} {...aria("phone")} /> */}
        <input name="phone" type="tel" inputMode="numeric" placeholder="Phone number (10 digits)" maxLength={LIMITS.phoneMax} autoComplete="tel-national" className={field("phone")} {...aria("phone")} />
        <Err id="err-phone" msg={errors.phone} />
      </div>
      <div>
        <select name="category" defaultValue="" className={field("category")} {...aria("category")}>
          <option value="" disabled>Select category *</option>
          {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
        </select>
        <Err id="err-category" msg={errors.category} />
      </div>
      <div className="sm:col-span-2">
        {locations ? (
          <select name="location" defaultValue="" className={field("location")} {...aria("location")}>
            <option value="" disabled>Select location</option>
            {locations.map((l) => <option key={l}>{l}</option>)}
          </select>
        ) : (
          <input name="location" placeholder="Project location (city / town)" maxLength={LIMITS.locationMax} className={field("location")} {...aria("location")} />
        )}
        <Err id="err-location" msg={errors.location} />
      </div>
      <div className="sm:col-span-2">
        <textarea name="message" rows={4} placeholder="How can we help? *" maxLength={LIMITS.messageMax} className={field("message")} {...aria("message")} />
        <div className="mt-1 flex items-start justify-between gap-3">
          <Err id="err-message" msg={errors.message} />
          <span className="ml-auto text-xs text-slate-400">{msgLen}/{LIMITS.messageMax}</span>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 text-xs text-slate-500">
          <input type="checkbox" name="consent" className="mt-0.5 accent-[#DC7F44]" {...aria("consent")} />
          I agree to be contacted by EDAS regarding my enquiry.
        </label>
        <Err id="err-consent" msg={errors.consent} />
      </div>

      <Turnstile onToken={setToken} resetKey={resetKey} />

      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" disabled={sending} className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60">
          {sending ? "Sending…" : "Send Message"} <Send size={16} />
        </button>
        <p role="status" aria-live="polite" className={`text-sm font-medium ${status === "ok" ? "text-emerald-600" : "text-red-600"}`}>{notice}</p>
      </div>
    </form>
  );
}

