// // import PageStub from "@/components/PageStub";
// // export const metadata = { title: "Careers" };
// // export default function Page() {
// //   return <PageStub title="Careers" />;
// // }
// import Image from "next/image";
// import PageHero from "@/components/PageHero";
// import Reveal from "@/components/Reveal";
// import TestimonialCarousel from "@/components/TestimonialCarousel";
// import ContactSection from "@/components/ContactSection";
// import NewsletterBand from "@/components/NewsletterBand";
// import { careersHero, whyJoin, culture, training, testimonials, careersContacts } from "@/data/careers";
// import { locations } from "@/data/contact";

// export const metadata = {
//   title: "Careers",
//   description: "Build your career with EDAS Projects — real estate advisory and turnkey solutions. Learn about our culture, training and growth opportunities.",
// };

// export default function CareersPage() {
//   return (
//     <>
//       {/* 1. Banner */}
//       <PageHero title={careersHero.title} image={careersHero.image} serif={false}>{careersHero.tagline}</PageHero>

//       {/* 2. Why Join EDAS (text + wide image; Sila shows a video here) */}
//       {/* <section className="section">
//         <div className="container-x">
//           <Reveal className="mx-auto max-w-3xl text-center">
//             <h2 className="font-display text-3xl font-bold md:text-4xl">{whyJoin.title}</h2>
//             <div className="mt-6 space-y-4 leading-relaxed">{whyJoin.paragraphs.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}</div>
//           </Reveal>
//           <Reveal delay={150}>
//             <Image src={whyJoin.image} alt="EDAS team at work" width={1600} height={800} className="mx-auto mt-12 h-72 w-full max-w-5xl rounded-3xl object-cover shadow-xl md:h-[26rem]" />
//           </Reveal>
//         </div>
//       </section> */}
//       <section className="section overflow-x-clip">
//         <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
//           <Reveal direction="left">
//             <span className="eyebrow">Careers at EDAS</span>
//             <h2 className="font-display text-3xl font-bold md:text-4xl">{whyJoin.title}</h2>
//             <div className="mt-6 space-y-4 leading-relaxed">{whyJoin.paragraphs.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}</div>
//           </Reveal>
//           <Reveal direction="right" delay={150}>
//             <Image src={whyJoin.image} alt="EDAS team at work" width={1000} height={800} className="h-80 w-full rounded-3xl object-cover shadow-xl md:h-[26rem] lg:h-[30rem]" />
//           </Reveal>
//         </div>
//       </section>

//       {/* 3. Our Culture: mosaic gallery (1 large + 4 small) */}
//       <section className="section bg-brand-mist">
//         <div className="container-x">
//           <Reveal className="mx-auto max-w-2xl text-center">
//             <h2 className="font-display text-3xl font-bold md:text-4xl">{culture.title}</h2>
//             <p className="mt-4">{culture.subtitle}</p>
//           </Reveal>
//           <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
//             {culture.photos.map((src, i) => (
//               <Reveal key={src + i} delay={i * 100} className={i === 0 ? "col-span-2 row-span-2" : ""}>
//                 <div className={`group relative overflow-hidden rounded-2xl ${i === 0 ? "h-72 md:h-full md:min-h-[26rem]" : "h-40 md:h-full md:min-h-[12.5rem]"}`}>
//                   <Image src={src} alt="EDAS culture" fill sizes={i === 0 ? "(min-width:768px) 50vw, 100vw" : "(min-width:768px) 25vw, 50vw"} className="object-cover transition duration-700 group-hover:scale-105" />
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 4. Training and Skill Development: 5 cards (3 + 2 centred) */}
//       <section className="section">
//         <div className="container-x">
//           <Reveal className="mx-auto max-w-2xl text-center">
//             <h2 className="font-display text-3xl font-bold md:text-4xl">{training.title}</h2>
//             <p className="mt-4">{training.subtitle}</p>
//           </Reveal>
//           <div className="mt-10 flex flex-wrap justify-center gap-6">
//             {training.items.map((it, i) => (
//               <Reveal key={it.title} delay={(i % 3) * 120} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
//                 <article className="group h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-brand-orange hover:shadow-xl">
//                   <span className="font-display text-4xl font-extrabold text-brand-orange/30 transition group-hover:text-brand-orange">{String(i + 1).padStart(2, "0")}</span>
//                   <h3 className="mt-3 text-xl font-bold leading-snug">{it.title}</h3>
//                   <p className="mt-3 text-sm leading-relaxed text-slate-600">{it.text}</p>
//                 </article>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 5. Employee Testimonials: carousel */}
//       <section className="section overflow-hidden bg-brand-mist">
//         <div className="container-x">
//           <Reveal className="mx-auto max-w-2xl text-center">
//             <h2 className="font-display text-3xl font-bold md:text-4xl">{testimonials.title}</h2>
//             <p className="mt-4">{testimonials.subtitle}</p>
//           </Reveal>
//           <Reveal delay={120} className="mt-10"><TestimonialCarousel items={testimonials.items} /></Reveal>
//         </div>
//       </section>

//       {/* 6. Contact our team */}
//       <ContactSection contacts={careersContacts} locations={locations} />

//       {/* 7. Newsletter */}
//       {/* <NewsletterBand /> */}
//     </>
//   );
// }

import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CultureVideo from "@/components/CultureVideo";
import ContactSection from "@/components/ContactSection";
import NewsletterBand from "@/components/NewsletterBand";
import { careersHero, whyJoin, culture, training, testimonials, careersContacts } from "@/data/careers";
import { locations } from "@/data/contact";

export const metadata = {
  title: "Careers",
  description: "Build your career with EDAS Projects — real estate advisory and turnkey solutions. Learn about our culture, training and growth opportunities.",
};

export default function CareersPage() {
  return (
    <>
      {/* 1. Banner */}
      <PageHero title={careersHero.title} image={careersHero.image} serif={false}>{careersHero.tagline}</PageHero>

      {/* 2. Why Join EDAS: text left, image right (Sila shows a video here) */}
      <section className="section overflow-x-clip">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left">
            <span className="eyebrow">Careers at EDAS</span>
            <h2 className="font-display text-3xl font-bold md:text-4xl">{whyJoin.title}</h2>
            <div className="mt-6 space-y-4 leading-relaxed">{whyJoin.paragraphs.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}</div>
          </Reveal>
          <Reveal direction="right" delay={150}>
            <CultureVideo />
          </Reveal>
        </div>
      </section>

      {/* 2b. Culture video (Sila shows a video under the Why Join text) */}
      {/* <CultureVideo /> */}

      {/* 3. Our Culture: mosaic gallery (1 large + 4 small) */}
      <section className="section bg-brand-mist">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">{culture.title}</h2>
            <p className="mt-4">{culture.subtitle}</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
            {culture.photos.map((src, i) => (
              <Reveal key={src + i} delay={i * 100} className={i === 0 ? "col-span-2 row-span-2" : ""}>
                <div className={`group relative overflow-hidden rounded-2xl ${i === 0 ? "h-72 md:h-full md:min-h-[26rem]" : "h-40 md:h-full md:min-h-[12.5rem]"}`}>
                  <Image src={src} alt="EDAS culture" fill sizes={i === 0 ? "(min-width:768px) 50vw, 100vw" : "(min-width:768px) 25vw, 50vw"} className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Training and Skill Development: 5 cards (3 + 2 centred) */}
      <section className="section">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">{training.title}</h2>
            <p className="mt-4">{training.subtitle}</p>
          </Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {training.items.map((it, i) => (
              <Reveal key={it.title} delay={(i % 3) * 120} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                <article className="group h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-brand-orange hover:shadow-xl">
                  <span className="font-display text-4xl font-extrabold text-brand-orange/30 transition group-hover:text-brand-orange">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-xl font-bold leading-snug">{it.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{it.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Employee Testimonials: carousel */}
      <section className="section overflow-hidden bg-brand-mist">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">{testimonials.title}</h2>
            <p className="mt-4">{testimonials.subtitle}</p>
          </Reveal>
          <Reveal delay={120} className="mt-10"><TestimonialCarousel items={testimonials.items} /></Reveal>
        </div>
      </section>

      {/* 6. Contact our team */}
      <ContactSection contacts={careersContacts} locations={locations} />

      {/* 7. Newsletter */}
      <NewsletterBand />
    </>
  );
}


