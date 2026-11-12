"use client";
import { useState } from "react";

// Google map with a switch between offices.
export default function OfficeMap({ maps }) {
  const [i, setI] = useState(0);
  return (
    <div>
      {maps.length > 1 && (
        <div className="mb-5 flex flex-wrap justify-center gap-3">
          {maps.map((m, n) => (
            <button key={m.label} onClick={() => setI(n)} aria-pressed={n === i}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${n === i ? "bg-brand-navy text-white" : "bg-white text-brand-navy ring-1 ring-slate-200 hover:ring-brand-orange"}`}>
              {m.label}
            </button>
          ))}
        </div>
      )}
      <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
        <iframe key={maps[i].src} title={`Map — ${maps[i].label}`} src={maps[i].src} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[380px] w-full border-0 md:h-[460px]" allowFullScreen />
      </div>
    </div>
  );
}
