"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, MessageCircle } from "lucide-react";
import { nav, site } from "@/data/site";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  useEffect(() => {
    setOpen(false);
    setSub(false);
  }, [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const active = (href) => path === href || (href !== "/" && path.startsWith(href));
  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? "shadow-[0_6px_24px_-12px_rgba(53,72,114,.35)]" : "border-b border-slate-100"}`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" aria-label="EDAS home" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="EDAS – Real Estate Advisory Services"
            width={461}
            height={164}
            priority
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition hover:text-brand-orange ${active(item.href) ? "text-brand-orange" : "text-brand-navy"}`}
                  aria-haspopup="true"
                >
                  {item.label} <ChevronDown size={15} className="transition group-hover:rotate-180 group-focus-within:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-2xl border-t-4 border-brand-orange bg-white shadow-2xl ring-1 ring-slate-100">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block border-b border-slate-100 px-5 py-4 last:border-0 hover:bg-brand-mist"
                      >
                        <span className="block text-sm font-semibold text-brand-navy">{c.label}</span>
                        <span className="mt-0.5 block text-xs text-slate-500">{c.note}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition hover:text-brand-orange ${active(item.href) ? "text-brand-orange" : "text-brand-navy"}`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366] text-white transition hover:scale-105"
          >
            <MessageCircle size={20} />
          </a>
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-full text-brand-navy lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-100 bg-white lg:hidden">
          <nav className="container-x flex flex-col py-3" aria-label="Mobile">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-slate-100">
                  <button
                    onClick={() => setSub(!sub)}
                    className="flex w-full items-center justify-between py-4 text-left font-semibold text-brand-navy"
                    aria-expanded={sub}
                  >
                    {item.label} <ChevronDown size={18} className={`transition ${sub ? "rotate-180" : ""}`} />
                  </button>
                  {sub && (
                    <div className="mb-3 ml-3 flex flex-col border-l-2 border-brand-orange pl-4">
                      {item.children.map((c) => (
                        <Link key={c.href} href={c.href} className="py-2.5 text-sm text-slate-600 hover:text-brand-orange">
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.label} href={item.href} className="border-b border-slate-100 py-4 font-semibold text-brand-navy">
                  {item.label}
                </Link>
              ),
            )}
            <div className="flex items-center gap-3 py-5">
              <Link href="/contact" className="btn btn-primary flex-1">
                Contact Us
              </Link>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="grid h-11 w-11 place-items-center rounded-full bg-[#25D366] text-white"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
