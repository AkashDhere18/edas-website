// import PageStub from "@/components/PageStub";
// export const metadata = { title: "About Us" };
// export default function Page() {
//   return <PageStub title="About Us" />;
// }
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone, ShieldCheck, Clock, Lightbulb } from "lucide-react";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import LeadershipGrid from "@/components/LeadershipGrid";
import Timeline from "@/components/Timeline";
import ContactForm from "@/components/ContactForm";
import { businesses, capabilities, insights, projects, site, stats, why } from "@/data/site";
import { aboutIntro, aboutServices, aboutNumbers, values, founders, team, journey } from "@/data/about";

export const metadata = {
  title: "About Us",
  description: "Learn about EDAS Projects — our mission, values, founders, leadership team and journey in real estate advisory and turnkey solutions.",
};

export default function AboutPage() {
  return (
    <>
      {/* 1. Intro */}
      {/* <section className="section pb-10 md:pb-12">
        <div className="container-x">
          <Reveal><h1 className="font-display text-5xl font-bold md:text-7xl">{aboutIntro.title}</h1></Reveal>
          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            <Reveal delay={100} className="lg:col-span-6"><p className="font-display text-xl font-semibold leading-snug text-brand-plum md:text-2xl">{aboutIntro.lead}</p></Reveal>
            <Reveal delay={200} className="lg:col-span-6"><p className="leading-relaxed">{aboutIntro.text}</p></Reveal>
          </div>
          <Reveal delay={150}>
            <Image src={aboutIntro.image} alt="EDAS project site" width={1600} height={700} priority className="mt-12 h-72 w-full rounded-3xl object-cover md:h-[26rem]" />
          </Reveal>
        </div>
      </section> */}
      <section>
        <div className="relative flex h-72 items-center justify-center overflow-hidden bg-brand-navy md:h-96">
          <Image src={aboutIntro.image} alt="" fill priority sizes="100vw" className="object-cover object-[center_35%]" />
          <div className="absolute inset-0 bg-black/55" />
          <h1 className="font-display relative animate-fadeUp text-4xl font-bold tracking-tight text-white! md:text-5xl">About Us</h1>
        </div>
        <div className="border-b border-slate-100 bg-white">
          <Reveal className="mx-auto max-w-5xl px-5 py-14 text-center md:py-16">
            <p className="text-slate-800  font-display text-base leading-[1.9] md:text-lg">
              EDAS is a <strong className="font-bold">real estate advisory and turnkey solutions</strong> company — unifying strategic insight and end-to-end delivery under one accountable team. We are driven by a commitment to excellence in every project. Our mission is to deliver exceptional client value through strategic insight, operational precision and continuous innovation. EDAS is more than a service provider — we are a trusted partner, setting new benchmarks with reliable, impactful and cost-effective solutions tailored to the evolving needs of our clients.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Services */}
      <section className="section pt-8 md:pt-12">
        <div className="container-x">
          <Reveal><h2 className="font-display text-3xl font-bold md:text-4xl">Services</h2></Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {aboutServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 150}>
                <Link href={s.href} className="group relative block overflow-hidden rounded-3xl bg-brand-navy">
                  <Image src={s.image} alt={s.title} width={900} height={500} className="h-64 w-full object-cover opacity-70 transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white!">{s.title}</h3>
                      <p className="mt-1 text-sm text-slate-200">{s.note}</p>
                    </div>
                    <ArrowRight className="shrink-0 text-brand-orange transition group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Numbers */}
      <section className="bg-linear-to-br from-brand-navy to-brand-plum py-14 text-white">
        <div className="container-x grid items-center gap-8 md:grid-cols-3">
          <Reveal><h2 className="font-display text-3xl font-bold text-white!">EDAS in numbers</h2></Reveal>
          {aboutNumbers.map((n, i) => (
            <Reveal key={n.label} delay={(i + 1) * 150}>
              <div className="md:border-l md:border-white/20 md:pl-8">
                <p className="whitespace-nowrap font-display text-5xl font-bold text-white"><Counter value={n.value} suffix={n.suffix} decimals={n.decimals} /></p>
                <p className="mt-2 text-xs uppercase tracking-widest text-slate-300">{n.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. Values */}
      <section className="section">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Our Values</span>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Innovate. Build. Inspire.</h2>
            <p className="mt-4">The principles that shape how we work with our clients, partners and each other.</p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 150}>
                <div className="h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-brand-orange hover:shadow-xl">
                  <span className="font-display text-5xl font-extrabold text-brand-orange/25">0{i + 1}</span>
                  <h3 className="mt-3 text-2xl font-bold">{v.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-brand-orange">{v.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Founder & Co-Founder messages (photo + message, alternating sides) */}
      <section className="section overflow-x-clip bg-brand-mist">
        <div className="container-x space-y-16 md:space-y-24">
          {founders.map((f, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={f.name} className="grid items-center gap-8 md:grid-cols-12 md:gap-14">
                <Reveal direction={flip ? "right" : "left"} className={`md:col-span-4 ${flip ? "md:order-2" : ""}`}>
                  <div className="relative mx-auto aspect-square w-full max-w-65 overflow-hidden rounded-3xl shadow-xl">
                    <Image src={f.photo} alt={f.name} fill sizes="260px" className="object-cover object-top" />
                  </div>
                </Reveal>
                <Reveal direction={flip ? "left" : "right"} delay={150} className={`md:col-span-7 ${flip ? "md:order-1" : ""}`}>
                  {/* <span className="eyebrow">{f.tag}&apos;s Message</span> */}
                  <span className="block font-display text-7xl font-extrabold leading-none text-brand-orange/30" aria-hidden>&ldquo;</span>
                  <p className="-mt-4 text-lg leading-relaxed">{f.text}</p>
                  <p className="mt-6 font-display text-xl font-bold text-brand-navy">{f.name}</p>
                  <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">{f.role}</p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Leadership team */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Our People</span>
            <h2 className="mb-10 font-display text-3xl font-bold md:text-4xl">Meet our Leadership Team</h2>
          </Reveal>
          <Reveal delay={100}><LeadershipGrid people={team} /></Reveal>
        </div>
      </section>

      {/* 7. Our Journey */}
      <section className="section overflow-x-clip bg-brand-mist">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Milestones</span>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Our Journey</h2>
            <p className="mb-10 mt-4 inline-block rounded-full bg-brand-navy px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">Most recent</p>
          </Reveal>
          <Timeline items={journey} />
        </div>
      </section>

      {/* 8. Contact */}
      <section id="contact" className="section bg-brand-mist">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="eyebrow">Get in touch</span>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Contact our team</h2>
            <p className="mt-4">Share your requirement and we&apos;ll get back to you shortly.</p>
            <div className="mt-8 space-y-5 text-sm">
              <a href={`mailto:${site.email}`} className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-navy text-white">
                  <Mail size={18} />
                </span>
                <span>
                  <b className="block text-brand-navy">Business enquiries</b>
                  {site.email}
                </span>
              </a>
              <a href="tel:+919975135552" className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-navy text-white">
                  <Phone size={18} />
                </span>
                <span>
                  <b className="block text-brand-navy">Call us</b>+91 99751 35552
                </span>
              </a>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-8 lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

