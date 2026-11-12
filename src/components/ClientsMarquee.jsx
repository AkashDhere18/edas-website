import Image from "next/image";
import Reveal from "@/components/Reveal";

// Slow auto-scrolling client row (pauses on hover, stops for reduced-motion users).
export default function ClientsMarquee({ clients, title = "Our Clients" }) {
  const row = [...clients, ...clients]; // duplicated for a seamless loop
  return (
    <section className="section overflow-hidden bg-brand-mist">
      <style>{`
        @keyframes edas-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .edas-marquee { animation: edas-marquee 35s linear infinite; }
        .edas-marquee-wrap:hover .edas-marquee { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .edas-marquee { animation: none; } }
      `}</style>
      <div className="container-x"><Reveal><h2 className="font-display text-3xl text-center font-bold md:text-4xl">{title}</h2></Reveal></div>
      <div className="edas-marquee-wrap mt-10">
        <div className="edas-marquee flex w-max gap-5 px-3">
          {row.map((c, i) => (
            <div key={i} className="grid h-24 w-56 shrink-0 place-items-center rounded-2xl border border-slate-200 bg-white px-4 text-center shadow-sm">
              {c.logo ? <Image src={c.logo} alt={c.name} width={160} height={64} className="max-h-14 w-auto object-contain" /> : <span className="font-display text-sm font-semibold text-brand-navy/70">{c.name}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
