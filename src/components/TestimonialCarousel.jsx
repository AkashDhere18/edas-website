"use client";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Horizontal snap carousel with prev/next buttons (swipe on touch devices).
export default function TestimonialCarousel({ items }) {
  const track = useRef(null);
  const scroll = (dir) => {
    const el = track.current; if (!el) return;
    const card = el.querySelector("article");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 320) + 24), behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div ref={track} className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((t, i) => (
          <article key={i} className="w-[290px] shrink-0 snap-start rounded-3xl border border-slate-100 bg-white p-7 text-center shadow-sm transition hover:shadow-xl sm:w-[340px]">
            <Image src="/images/logo.png" alt="EDAS" width={461} height={164} className="mx-auto h-9 w-auto" />
            <div className="relative mx-auto mt-6 h-24 w-24 overflow-hidden rounded-full ring-4 ring-brand-orange/30">
              <Image src={t.photo} alt={t.name} fill sizes="96px" className="object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-bold">{t.name}</h3>
            <p className="text-sm text-slate-500">{t.role}</p>
            <p className="mt-2 inline-block rounded-full bg-brand-mist px-3 py-1 text-xs font-semibold text-brand-orange">Since {t.since}</p>
            <p className="mt-5 text-sm leading-relaxed text-slate-600">&ldquo;{t.quote}&rdquo;</p>
          </article>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        <button onClick={() => scroll(-1)} aria-label="Previous testimonials" className="grid h-11 w-11 place-items-center rounded-full bg-brand-navy text-white transition hover:bg-brand-orange"><ChevronLeft size={20} /></button>
        <button onClick={() => scroll(1)} aria-label="Next testimonials" className="grid h-11 w-11 place-items-center rounded-full bg-brand-navy text-white transition hover:bg-brand-orange"><ChevronRight size={20} /></button>
      </div>
    </div>
  );
}
