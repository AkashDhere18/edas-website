"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export default function LeadershipGrid({ people }) {
  const [active, setActive] = useState(null);
  const [shown, setShown] = useState(false); // drives the open animation

  const open = (i) => { setActive(i); requestAnimationFrame(() => requestAnimationFrame(() => setShown(true))); };
  const close = () => { setShown(false); setTimeout(() => setActive(null), 250); };

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => e.key === "Escape" && close();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [active]);

  const p = active !== null ? people[active] : null;

  return (
    <>
      <div className="grid grid-cols-2 gap-x-5 gap-y-9 md:grid-cols-3 lg:grid-cols-4">
        {people.map((person, i) => (
          <button key={i} onClick={() => open(i)} className="group text-left" aria-label={`View profile of ${person.name}`}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-brand-mist">
              <Image src={person.photo} alt={person.name} fill sizes="(min-width:1024px) 22vw, 45vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-brand-navy/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 translate-y-2 rounded-full bg-brand-orange px-3 py-1 text-xs font-semibold text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">View profile</span>
            </div>
            <h3 className="mt-3 text-base font-bold transition group-hover:text-brand-orange">{person.name}</h3>
            <p className="text-sm text-slate-500">{person.role}</p>
          </button>
        ))}
      </div>

      {p && createPortal(
        <div className="fixed inset-0 z-[60] grid place-items-center p-4" role="dialog" aria-modal="true" aria-label={p.name}>
          <div onClick={close} className={`absolute inset-0 bg-brand-navy/80 backdrop-blur-sm transition-opacity duration-300 ${shown ? "opacity-100" : "opacity-0"}`} />
          <div className={`relative grid max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl transition duration-300 md:grid-cols-5 ${shown ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-95 opacity-0"}`}>
            <div className="relative aspect-[4/5] md:col-span-2 md:aspect-auto md:min-h-[22rem]">
              <Image src={p.photo} alt={p.name} fill sizes="(min-width:768px) 30vw, 90vw" className="object-cover" />
            </div>
            <div className="p-7 md:col-span-3 md:p-9">
              <h3 className="font-display text-2xl font-bold">{p.name}</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-brand-orange">{p.role}</p>
              <p className="mt-5 leading-relaxed">{p.bio}</p>
            </div>
            <button onClick={close} aria-label="Close" className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-brand-navy shadow transition hover:bg-brand-orange hover:text-white"><X size={18} /></button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
