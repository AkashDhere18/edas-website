import { Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

// Reusable "Contact our team" block. Pass `contacts` to show labelled email blocks (like Sila).
const defaultContacts = [{ label: "Business enquiries", email: site.email }];

export default function ContactSection({ id = "contact", contacts = defaultContacts }) {
  return (
    <section id={id} className="section bg-brand-mist">
      <div className="container-x grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="eyebrow">Get in touch</span>
          <h2 className="font-display text-3xl font-bold md:text-4xl">Contact our team</h2>
          <p className="mt-4">Share your requirement and we&apos;ll get back to you shortly.</p>
          <div className="mt-8 space-y-5 text-sm">
            {contacts.map((c) => (
              <a key={c.label} href={`mailto:${c.email}`} className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-navy text-white"><Mail size={18} /></span>
                <span><b className="block text-brand-navy">{c.label}</b>{c.email}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-8 lg:col-span-3"><ContactForm /></div>
      </div>
    </section>
  );
}
