// import "@fontsource/merriweather/400.css";
// import "@fontsource/merriweather/700.css";
import Image from "next/image";
import Reveal from "@/components/Reveal";

// Inner-page hero: full-width photo banner with centred serif title, then a centred serif intro paragraph.
// Usage: <PageHero title="..." image="/images/x.jpg">intro text</PageHero>
export default function PageHero({ title, image, children }) {
  return (
    <section>
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-brand-navy md:h-96">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover object-[center_35%]" />
        <div className="absolute inset-0 bg-black/55" />
        <h1  className="font-display relative animate-fadeUp px-5 text-center text-4xl font-normal tracking-tight text-white! md:text-5xl">{title}</h1>
      </div>
      <div className="border-b border-slate-100 bg-white">
        <Reveal className="mx-auto max-w-5xl px-5 py-14 text-center md:py-16">
          <p className="font-display text-base leading-[1.85] text-slate-800 md:text-xl md:leading-[1.8]">{children}</p>
        </Reveal>
      </div>
    </section>
  );
}
