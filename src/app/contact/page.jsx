// import PageStub from "@/components/PageStub";
// export const metadata = { title: "Contact Us" };
// export default function Page() {
//   return <PageStub title="Contact Us" />;
// }
import { Mail, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import OfficeMap from "@/components/OfficeMap";
// import NewsletterBand from "@/components/NewsletterBand";
import { Facebook, Instagram, Linkedin, Youtube } from "@/components/SocialIcons";
import { site } from "@/data/site";
import { contactHero, connectCards, presenceLine, locations, maps, socials, contactContacts } from "@/data/contact";
// import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with EDAS Projects — real estate advisory and turnkey solutions. Offices in Mumbai and Western Maharashtra.",
};

const socialIcon = { LinkedIn: Linkedin, Instagram: Instagram, Facebook: Facebook, YouTube: Youtube };

export default function ContactPage() {
  const office = site.offices[0];
  return (
    <>
      {/* 1. Banner + tagline */}
      <PageHero title={contactHero.title} image={contactHero.image} serif={false}>{contactHero.tagline}</PageHero>

      {/* 2. Form */}
      <section className="section">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Fill out the form below to get started</h2>
          </Reveal>
          <Reveal delay={120} className="mx-auto mt-10 max-w-3xl">
            <div className="rounded-3xl bg-brand-mist p-6 shadow-sm ring-1 ring-slate-100 sm:p-10"><ContactForm locations={locations} /></div>
            {/* <ContactSection contacts={contactContacts} /> */}
          </Reveal>
        </div>
      </section>

      {/* 3. Connect with us today */}
      <section className="section bg-brand-mist">
        <div className="container-x">
          <Reveal className="text-center"><h2 className="font-display text-3xl font-bold md:text-4xl">Connect with us today</h2></Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {connectCards.map((c, i) => (
              <Reveal key={c.label} delay={i * 100} className="h-full">
                <div className="h-full rounded-3xl border border-slate-100 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand-orange hover:shadow-xl">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-navy text-white">{c.type === "email" ? <Mail size={22} /> : <MapPin size={22} />}</span>
                  <h3 className="mt-5 text-lg font-bold">{c.label}</h3>
                  {c.type === "email"
                    ? <a href={`mailto:${c.value}`} className="mt-2 block break-words text-sm text-slate-600 hover:text-brand-orange">{c.value}</a>
                    : <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.value}</p>}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <h4 className="font-display text-lg font-semibold">{presenceLine}</h4>
            <p className="mb-4 mt-6 text-sm font-semibold uppercase tracking-widest text-brand-orange">Follow us</p>
            <div className="flex justify-center gap-3">
              {socials.map((s) => { const Icon = socialIcon[s.name]; return (
                <a key={s.name} href={s.href} aria-label={s.name} className="grid h-11 w-11 place-items-center rounded-full bg-brand-navy text-white transition hover:bg-brand-orange"><Icon /></a>
              ); })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Map */}
      <section className="section pb-10 md:pb-12">
        <div className="container-x"><Reveal><OfficeMap maps={maps} /></Reveal></div>
      </section>

      {/* 5. Corporate office */}
      {/* <section className="pb-16 md:pb-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Corporate Office</h2>
            <p className="mt-5 leading-relaxed">{office.lines.join(" ")}</p>
            <p className="mt-3 text-sm"><a href={`mailto:${office.email}`} className="hover:text-brand-orange">{office.email}</a> · <a href="tel:+919975135552" className="hover:text-brand-orange">{office.phone}</a></p>
          </Reveal>
        </div>
      </section> */}

      {/* 6. Follow us on social */}
      <section className="section bg-brand-mist py-14!">
        <div className="container-x">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Follow us on social</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {socials.map((s) => { const Icon = socialIcon[s.name]; return (
                <a key={s.name} href={s.href} className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navy shadow-sm ring-1 ring-slate-200 transition hover:bg-brand-navy hover:text-white"><Icon width={16} height={16} />{s.name}</a>
              ); })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Newsletter */}
      {/* <NewsletterBand /> */}
    </>
  );
}
