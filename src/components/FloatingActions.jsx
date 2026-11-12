"use client";
import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { site } from "@/data/site";
export default function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`grid h-11 w-11 place-items-center rounded-full bg-brand-navy text-white shadow-lg transition ${show ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <ArrowUp size={18} />
      </button>
      <a
        href={`https://wa.me/${site.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
