import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone, ShieldCheck, Clock, Lightbulb } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import Counter from "@/components/Counter";
import ContactForm from "@/components/ContactForm";
import ClientsMarquee from "@/components/ClientsMarquee";
import { businesses, capabilities, insights, projects, site, stats, why } from "@/data/site";
import { clients, } from "@/data/advisory";

const whyIcons = [ShieldCheck, Clock, Lightbulb];
export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Intro */}
      <section className="section">
        <div className="container-x grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Welcome to EDAS</span>
            <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">
              A trusted partner for real estate advisory and turnkey delivery.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed lg:col-span-7">
            <p>
              At EDAS, we are driven by a commitment to excellence in every project. Our mission is to deliver exceptional client value
              through strategic insight, operational precision and continuous innovation.
            </p>
            <p>
              Specialising in end-to-end contracting, we focus on efficiency, superior quality and timely execution — so every project is
              delivered to the highest standard, on time and within budget.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 font-semibold text-brand-orange hover:text-brand-navy">
              Know more about us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Counters */}
      <section className="bg-linear-to-br from-brand-navy to-brand-plum py-14 text-white">
        <div className="container-x grid grid-cols-2 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <div key={s.label} className="px-3 text-center lg:border-r lg:border-white/15 lg:last:border-0">
              <p className="whitespace-nowrap font-display text-4xl font-bold text-white md:text-5xl">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-slate-300">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clients wall (PLACEHOLDER logos) */}
      {/* <section className="section bg-brand-mist py-14!">
        <div className="container-x">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[.22em] text-brand-navy">
            Trusted by developers &amp; corporates
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {["/images/OBEROIRLTY.png", "/images/hoal.avif", "/images/veda-white.webp", "/images/SUNTECK.png", ].map((n,i) => (
              <div
                key={n}
                className="grid h-20 place-items-center rounded-xl border border-dashed border-slate-300 bg-white text-xs font-medium text-slate-400"
              >
                {n}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="section bg-brand-mist py-14!">
        <div className="container-x">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[.22em] text-brand-navy">
            Trusted by developers &amp; corporates
          </p>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { name: "Oberoi Realty", logo: "/images/OBEROIRLTY.png" },
              { name: "HOABL", logo: "/images/hoal.avif" },
              { name: "Veda", logo: "/images/veda-white.webp" },
              { name: "Sunteck", logo: "/images/SUNTECK.png" },
            ].map((c) => (
              <div
                key={c.name}
                className="grid h-24 place-items-center rounded-xl border border-slate-200 bg-[#354872b9] px-5 shadow-sm"
              >
                <div className="relative h-14 w-full">
                  <Image src={c.logo} alt={c.name} fill sizes="(min-width:1024px) 200px, 45vw" className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <ClientsMarquee clients={clients} /> */}

      {/* Our Businesses */}
      <section className="section">
        <div className="container-x">
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow">Our Services</span>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Two businesses. One standard of excellence.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {businesses.map((b) => (
              <Link key={b.title} href={b.href} className="group relative block overflow-hidden rounded-3xl bg-brand-navy">
                <Image
                  src={b.image}
                  alt={b.title}
                  width={900}
                  height={560}
                  className="h-80 w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <h3 className="font-display text-2xl font-bold text-white!">{b.title}</h3>
                  <p className="mt-2 max-w-md text-sm text-slate-200">{b.text}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange">
                    Learn more <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <h3 className="mb-6 mt-16 font-display text-xl font-bold">Turnkey capabilities</h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c, n) => (
              <div
                key={c.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-orange hover:shadow-lg"
              >
                <span className="font-display text-3xl font-extrabold text-brand-orange/30">0{n + 1}</span>
                <h4 className="mt-2 text-lg font-bold">{c.title}</h4>
                <p className="mt-2 text-sm text-slate-500">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="section bg-brand-mist">
        <div className="container-x">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Portfolio</span>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Featured projects</h2>
            </div>
            {/* <Link href="/services/turnkey-solutions" className="btn btn-outline">
              View all projects
            </Link> */}
          </div>
          <div className="flex snap-x gap-6 overflow-x-auto pb-4 [scrollbar-width:thin]">
            {projects.map((p) => (
              <article key={p.title} className="w-[300px] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-sm sm:w-[340px]">
                <div className="relative">
                  <Image src={p.image} alt={p.title} width={680} height={440} className="h-52 w-full object-cover" />
                  <span className="absolute left-3 top-3 rounded-full bg-brand-orange px-3 py-1 text-[11px] font-semibold text-white">
                    {p.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{p.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Vision + Why EDAS */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <Image src="/images/about.jpg" alt="EDAS project site" width={800} height={620} className="rounded-3xl object-cover" />
            <div className="absolute -bottom-6 -right-2 rounded-2xl bg-brand-plum px-6 py-5 text-white shadow-xl sm:right-6">
              <p className="font-display text-lg font-bold text-white!">Innovate | Build | Inspire</p>
            </div>
          </div>
          <div>
            <span className="eyebrow">Our Vision</span>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Setting new standards for project delivery.</h2>
            <p className="mt-4">
              Sustainable growth, streamlined processes and cutting-edge solutions — with a shared focus on long-term client value and
              strategic market expansion.
            </p>
            <ul className="mt-8 space-y-5">
              {why.map((w, n) => {
                const Icon = whyIcons[n];
                return (
                  <li key={w.title} className="flex gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-navy text-white">
                      <Icon size={22} />
                    </span>
                    <div>
                      <h4 className="font-bold">{w.title}</h4>
                      <p className="text-sm text-slate-500">{w.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <Link href="/about" className="btn btn-primary mt-8">
              Meet the team
            </Link>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="relative overflow-hidden bg-brand-plum py-16 text-white">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl" />
        <div className="container-x relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-white! md:text-4xl">Your next big move.</h2>
            <p className="mt-2 max-w-xl text-slate-200">
              Join a team that builds with precision and purpose. Explore engineering, site and advisory opportunities at EDAS.
            </p>
          </div>
          <Link href="/careers" className="btn btn-primary">
            Explore opportunities <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Insights */}
      <section className="section">
        <div className="container-x">
          <div className="mb-10">
            <span className="eyebrow">Latest Insights</span>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Discover our latest updates.</h2>
          </div>
          <div className="grid gap-7 md:grid-cols-3">
            {insights.map((p) => (
              <Link
                href="#"
                key={p.title}
                className="group block overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={600}
                    height={380}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">{p.tag}</span>
                  <h3 className="mt-2 text-lg font-bold leading-snug group-hover:text-brand-orange">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
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
