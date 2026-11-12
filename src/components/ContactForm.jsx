"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { contactCategories } from "@/data/site";
// The only dynamic part of the site. Posts to /api/contact.
export default function ContactForm() {
  const [state, setState] = useState("idle");
  async function onSubmit(e) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!r.ok) throw new Error();
      setState("ok");
      e.target.reset();
    } catch {
      setState("err");
    }
  }
  const field =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-hidden transition placeholder:text-slate-400 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20";
  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <input name="name" required placeholder="Full name *" className={field} autoComplete="name" />
      <input name="email" type="email" required placeholder="Email address *" className={field} autoComplete="email" />
      <input name="phone" type="tel" placeholder="Phone number" className={field} autoComplete="tel" />
      <select name="category" required defaultValue="" className={field}>
        <option value="" disabled>
          Select category *
        </option>
        {contactCategories.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
      <input name="location" placeholder="Project location (city / town)" className={`${field} sm:col-span-2`} />
      <textarea name="message" rows={4} required placeholder="How can we help? *" className={`${field} sm:col-span-2`} />
      <label className="flex items-start gap-3 text-xs text-slate-500 sm:col-span-2">
        <input type="checkbox" name="consent" required className="mt-0.5 accent-[#DC7F44]" />I agree to be contacted by EDAS regarding my
        enquiry.
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button disabled={state === "sending"} className="btn btn-primary disabled:opacity-60">
          {state === "sending" ? "Sending…" : "Send Message"} <Send size={16} />
        </button>
        {state === "ok" && <p className="text-sm font-medium text-emerald-600">Thank you — we&apos;ll be in touch shortly.</p>}
        {state === "err" && (
          <p className="text-sm font-medium text-red-600">Something went wrong. Please try again or email us directly.</p>
        )}
      </div>
    </form>
  );
}
