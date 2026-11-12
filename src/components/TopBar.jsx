import { Mail, Phone } from "lucide-react";
import { site } from "@/data/site";
export default function TopBar() {
  return (
    <div className="bg-linear-to-r from-brand-plum to-brand-navy text-xs text-white">
      <div className="container-x flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2">
        <p className="font-medium tracking-wide">
          <span className="text-brand-orange">●</span> Turnkey contracting &amp; real estate advisory across Mumbai, Pune &amp; Western
          Maharashtra
        </p>
        <div className="hidden items-center gap-5 sm:flex">
          <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 hover:text-brand-orange">
            <Mail size={13} />
            {site.email}
          </a>
          <a href="tel:+919975135552" className="inline-flex items-center gap-1.5 hover:text-brand-orange">
            <Phone size={13} />
            +91 99751 35552
          </a>
        </div>
      </div>
    </div>
  );
}
