import Reveal from "@/components/Reveal";

// Vertical timeline: single column on mobile, alternating left/right on desktop
export default function Timeline({ items }) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-0 h-full w-px bg-brand-navy/20 md:left-1/2" aria-hidden />
      <ol className="space-y-8">
        {items.map((it, i) => {
          const left = i % 2 === 0;
          return (
            <li key={i} className="relative pl-12 md:grid md:grid-cols-2 md:gap-14 md:pl-0">
              <span className="absolute left-4 top-6 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-4 border-white bg-brand-orange shadow md:left-1/2" aria-hidden />
              <Reveal direction={left ? "left" : "right"} className={left ? "md:col-start-1 md:text-right" : "md:col-start-2"}>
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-lg">
                  <p className="font-display text-xl font-bold text-brand-orange">{it.date}</p>
                  <p className="mt-1 text-sm leading-relaxed">{it.text}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
