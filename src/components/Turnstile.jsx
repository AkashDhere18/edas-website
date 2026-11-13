"use client";
import { useEffect, useRef } from "react";

// Cloudflare Turnstile widget. Renders only when NEXT_PUBLIC_TURNSTILE_SITE_KEY is set.
// Call onToken(token) when solved, onToken("") when expired/failed. Change `resetKey` to reset after a submit.
export const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

let scriptPromise;
function loadScript() {
  if (typeof window === "undefined") return Promise.reject();
  if (window.turnstile) return Promise.resolve();
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      s.async = true;
      s.onload = resolve;
      s.onerror = () => { scriptPromise = undefined; reject(); };
      document.head.appendChild(s);
    });
  }
  return scriptPromise;
}

export default function Turnstile({ onToken, resetKey = 0 }) {
  const box = useRef(null);
  const widget = useRef(null);

  useEffect(() => {
    if (!SITE_KEY) return;
    let cancelled = false;
    loadScript().then(() => {
      if (cancelled || !box.current || widget.current != null) return;
      widget.current = window.turnstile.render(box.current, {
        sitekey: SITE_KEY,
        callback: (t) => onToken(t),
        "expired-callback": () => onToken(""),
        "error-callback": () => onToken(""),
      });
    }).catch(() => onToken(""));
    return () => { cancelled = true; if (widget.current != null && window.turnstile) { window.turnstile.remove(widget.current); widget.current = null; } };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (resetKey && widget.current != null && window.turnstile) { onToken(""); window.turnstile.reset(widget.current); }
  }, [resetKey]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!SITE_KEY) return null;
  return <div ref={box} className="sm:col-span-2" />;
}
