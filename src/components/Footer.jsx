import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { Facebook, Instagram, Linkedin, Youtube } from "./SocialIcons";
import { nav, site } from "@/data/site";
const quick = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const service = [
  { label: "Real Estate Advisory", href: "/real-estate-advisory" },
  { label: "Turnkey Solutions", href: "/turnkey-solutions" },
]
export default function Footer() {
  // const services = nav.find((n) => n.children).children;
  const socials = [
    { Icon: Linkedin, href: site.social.linkedin, label: "LinkedIn" },
    { Icon: Instagram, href: site.social.instagram, label: "Instagram" },
    { Icon: Facebook, href: site.social.facebook, label: "Facebook" },
    { Icon: Youtube, href: site.social.youtube, label: "YouTube" },
  ];
  return (
    <footer className="relative overflow-hidden bg-brand-navy text-slate-300">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-plum/60 blur-3xl" />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Image src="/images/logo-white.png" alt="EDAS" width={461} height={164} className="h-14 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Delivering exceptional client value through strategic insight, operational precision and continuous innovation.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-brand-orange"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white!">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {quick.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brand-orange">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white!">Our Services</h4>
          <ul className="space-y-3 text-sm">
            {service.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brand-orange">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6 text-sm md:col-span-2 lg:col-span-4">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white!">Our Offices</h4>
          {site.offices.map((o) => (
            <div key={o.label} className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand-orange" />
              <div>
                <p className="font-semibold text-white">{o.label}</p>
                <p className="leading-relaxed">{o.lines.join(" ")}</p>
              </div>
            </div>
          ))}
          <div className="space-y-2">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-brand-orange">
              <Mail size={16} className="text-brand-orange" />
              {site.email}
            </a>
            <a href="tel:+919975135552" className="flex items-center gap-3 hover:text-brand-orange">
              <Phone size={16} className="text-brand-orange" />
              +91 99751 35552
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved. · GST {site.gst}
          </p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-brand-orange">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-orange">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
