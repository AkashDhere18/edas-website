"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { slides } from "@/data/site";
export default function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = useCallback((n) => setI((n + slides.length) % slides.length), []);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [paused]);
  return (
    <section
      className="relative h-[78vh] min-h-[520px] w-full overflow-hidden bg-brand-navy"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {slides.map((s, idx) => (
        <div
          key={s.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "pointer-events-none opacity-0"}`}
          aria-hidden={idx !== i}
        >
          <Image
            src={s.image}
            alt=""
            fill
            priority={idx === 0}
            sizes="100vw"
            className={`object-cover transition-transform duration-[7000ms] ${idx === i ? "scale-105" : "scale-100"}`}
          />
          <div className="absolute inset-0 bg-linear-to-r from-brand-navy/95 via-brand-navy/70 to-brand-plum/30" />
          <div className="container-x relative flex h-full items-center">
            {idx === i && (
              <div className="max-w-2xl text-white">
                <span className="eyebrow animate-fadeUp">{s.kicker}</span>
                <h1 className="animate-fadeUp font-display text-4xl font-bold leading-tight text-white! sm:text-5xl lg:text-6xl [animation-delay:.1s]">
                  {s.title}
                </h1>
                <p className="mt-5 max-w-xl animate-fadeUp text-base text-slate-200 sm:text-lg [animation-delay:.25s]">{s.text}</p>
                <Link href={s.href} className="btn btn-primary mt-8 animate-fadeUp [animation-delay:.4s]">
                  {s.cta} <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}

      <button
        onClick={() => go(i - 1)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-brand-orange md:grid"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => go(i + 1)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-brand-orange md:grid"
      >
        <ChevronRight />
      </button>

      <div className="absolute bottom-7 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, n) => (
          <button
            key={n}
            onClick={() => go(n)}
            aria-label={`Go to slide ${n + 1}`}
            className={`h-1.5 rounded-full transition-all ${n === i ? "w-10 bg-brand-orange" : "w-4 bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
