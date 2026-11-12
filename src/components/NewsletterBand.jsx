"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

// Subscribe band shown just above the footer. Sends through the same /api/contact endpoint as the contact form.
export default function NewsletterBand() {
  const [state, setState] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    setState("sending");
    const email = new FormData(e.currentTarget).get("email");
    try {
      const r = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Newsletter subscriber", email, category: "General Enquiry", message: "Please subscribe this email to EDAS updates." }),
      });
      if (!r.ok) throw new Error();
      setState("ok"); e.target.reset();
    } catch { setState("err"); }
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
          <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
            <input name="email" type="email" required placeholder="Enter your email address" aria-label="Email address"
              className="w-full flex-1 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm text-white outline-hidden placeholder:text-slate-300 focus:border-brand-orange" />
            <button disabled={state === "sending"} className="btn btn-primary shrink-0 disabled:opacity-60">{state === "sending" ? "Sending…" : "Subscribe Now"} <ArrowRight size={16} /></button>
          </form>
          {state === "ok" && <p className="mt-3 text-sm text-emerald-300">Thank you for subscribing.</p>}
          {state === "err" && <p className="mt-3 text-sm text-red-300">Something went wrong. Please try again.</p>}
        </div>
      </div>
    </section>
  );
}
