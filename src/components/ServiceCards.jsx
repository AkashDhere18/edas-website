// import Reveal from "@/components/Reveal";

// // Heading + grid of numbered service cards. cols: 3 (default) or 4 on large screens.
// export default function ServiceCards({ title, items, cols = 3, tint = false }) {
//   const grid = cols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
//   return (
//     <section className={`section ${tint ? "bg-brand-mist" : ""}`}>
//       <div className="container-x">
//         <Reveal><h2 className="font-display text-3xl font-bold md:text-4xl">{title}</h2></Reveal>
//         <div className={`mt-10 grid gap-6 sm:grid-cols-2 ${grid}`}>
//           {items.map((it, i) => (
//             <Reveal key={it.title} delay={(i % cols) * 120} className="h-full">
//               <article className="group h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-brand-orange hover:shadow-xl">
//                 <span className="font-display text-4xl font-extrabold text-brand-orange/30 transition group-hover:text-brand-orange">{String(i + 1).padStart(2, "0")}</span>
//                 <h3 className="mt-3 text-xl font-bold leading-snug">{it.title}</h3>
//                 <p className="mt-3 text-sm leading-relaxed text-slate-600">{it.text}</p>
//               </article>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// import "@fontsource/merriweather/400.css";
// import "@fontsource/merriweather/700.css";
import Image from "next/image";
import Reveal from "@/components/Reveal";

// const serif = { fontFamily: "'Merriweather', serif" };

// Centred serif heading + 2-column grid of horizontal cards (photo left, text right).
// An odd last card sits centred on its own row.
export default function ServiceCards({ title, items }) {
  return (
    <section className="section">
      <div className="mx-auto w-[92%] max-w-[1600px]">
        <Reveal><h2 className="font-display text-center text-3xl font-normal text-brand-navy md:text-4xl">{title}</h2></Reveal>
        <div className="mx-auto mt-12 flex w-full max-w-[1550px] flex-wrap justify-center gap-8 md:gap-12">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 2) * 120} className="w-full md:w-[calc(50%-1.5rem)]">
              <article className="group flex h-full flex-col overflow-hidden bg-[#F5F6FA] transition hover:shadow-xl sm:min-h-[15.5rem] sm:flex-row">
                <div className="relative h-52 shrink-0 overflow-hidden sm:h-auto sm:w-[38%]">
                  <Image src={it.image} alt={it.title} fill sizes="(min-width:768px) 20vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="font-sans flex flex-col justify-center p-6 sm:p-8">
                  <h3 style={{ color: "#2b2b2b" }} className="text-lg font-bold leading-snug lg:text-xl">{it.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-[#333] lg:text-lg">{it.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}