// ---------------------------------------------------------------
// All static website content lives here. Edit this file only.
// Items marked PLACEHOLDER must be replaced with real client data.
// ---------------------------------------------------------------
export const site = {
  name: "EDAS Projects Private Limited",
  short: "EDAS",
  tagline: "Innovate | Build | Inspire",
  descriptor: "Real Estate Advisory Services",
  whatsapp: "919975135552",
  email: "Operations@edasprojects.com",
  offices: [
    {
      label: "Mumbai Office",
      lines: ["Office No 01 & 02, Sai Datta Apartment,", "Near Ruparel College, Bal Govind Das Road,", "Dadar, Mumbai – 400028"],
      email: "Shailesh.dhere@edasprojects.com",
      phone: "+91 99751 35552",
    },
    {
      label: "Western Maharashtra Office",
      lines: [
        "Office No 105 & 106, 1st Floor, Imperial Square,",
        "Ramaudyan Road, Near ACS College,",
        "Miraj–Pandharpur Highway, Miraj, Sangli – 416410",
      ],
      email: "Operations@edasprojects.com",
      phone: "+91 87679 56623",
    },
  ],
  gst: "27AAICE4972E2ZG",
  social: { linkedin: "#", instagram: "#", facebook: "#", youtube: "#" }, // PLACEHOLDER links
};
export const nav = [
  { label: "Home", href: "/"},
  { label: "About Us", href: "/about" },
  // {
  //   label: "Services",
  //   href: "/services",
  //   children: [
  //     { label: "Real Estate Advisory", href: "/services/real-estate-advisory", note: "Strategic insight for every stage of a project" },
  //     { label: "Turnkey Solutions", href: "/services/turnkey-solutions", note: "Design to handover under one accountable team" },
  //   ],
  // },
  { label: "Real Estate Advisory", href: "/real-estate-advisory" },
  { label: "Turnkey Solutions", href: "/turnkey-solutions" },
  { label: "Careers", href: "/careers" },
];
export const slides = [
  {
    image: "/images/hero-2.jpg",
    kicker: "Turnkey Solutions",
    title: "One partner. Every step.",
    text: "Design, approvals, engineering, procurement and construction under a single accountable team.",
    href: "/turnkey-solutions",
    cta: "Explore Turnkey Solutions",
  },
  {
    image: "/images/hero-1.jpg",
    kicker: "Real Estate Advisory",
    title: "Strategic insight. Operational precision.",
    text: "Advisory that maximises project value and removes risk from real estate decisions.",
    href: "/real-estate-advisory",
    cta: "Explore Advisory",
  },
  {
    image: "/images/about.jpg",
    kicker: "Innovate | Build | Inspire",
    title: "Redefining value and innovation.",
    text: "Efficient, high-quality delivery for developers and corporates — on time and within budget.",
    href: "/about",
    cta: "About EDAS",
  },
];
// PLACEHOLDER numbers – confirm with client before launch
export const stats = [
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 2, suffix: "", label: "Regional offices" },
  { value: 1.5, suffix: "M+", label: "Sq. ft. built", decimals: 1 },
  { value: 100, suffix: "+", label: "Professionals" },
  { value: 10, suffix: "+", label: "Cities & towns" },
  { value: 4, suffix: "", label: "Service verticals" },
];
export const businesses = [
  {
    title: "Real Estate Advisory",
    href: "/real-estate-advisory",
    image: "/images/advisory.jpg",
    text: "Feasibility reviews, project strategy and delivery advisory that protect returns and de-risk decisions for developers and landowners.",
  },
  {
    title: "Turnkey Solutions",
    href: "/turnkey-solutions",
    image: "/images/turnkey.jpg",
    text: "End-to-end contracting for residential, commercial and industrial projects — efficient, cost-effective and delivered on time.",
  },
];
export const capabilities = [
  { title: "General Contracting", text: "Turnkey construction for residential, commercial and industrial projects." },
  { title: "Waterproofing Solutions", text: "Basements, terraces, podiums and wet areas — new build and rehabilitation." },
  { title: "Specialised Services", text: "Structural retrofitting, façade works and safety upgrades for redevelopment." },
  { title: "Fabrication & Infrastructure", text: "Roads, utilities and industrial structures built robust and scalable." },
];
export const projects = [
  {
    title: "Hotel Project, Rudhva–Jath",
    meta: "G+7 Hotel · 52,000 sq. ft. · 16 months",
    tag: "Western Maharashtra",
    image: "/images/p-hotel.jpg",
  },
  {
    title: "Imperial Heights",
    meta: "G+8 Residential · 28,000 sq. ft. · 24 months",
    tag: "Western Maharashtra",
    image: "/images/p-heights.jpg",
  },
  { title: "Private Villas, Alibaug", meta: "Villas & gated community · 40,000+ sq. ft.", tag: "Alibaug", image: "/images/p-villa.jpg" },
  { title: "Coworking Spaces, BKC", meta: "Turnkey interior contractor", tag: "Mumbai", image: "/images/p-cowork.jpg" },
  { title: "L N K, Talegaon", meta: "Office & industrial · 1,25,000 sq. ft. · 18 months", tag: "Pune", image: "/images/p-site.jpg" },
];
export const why = [
  { title: "Client-first approach", text: "Decades of combined expertise focused on long-term client value." },
  { title: "Timely execution", text: "Structured, transparent processes that keep every project on schedule and on budget." },
  {
    title: "Innovation & sustainability",
    text: "Modern methods and sustainable practices from boutique interiors to large-scale infrastructure.",
  },
];
export const insights = [
  { title: "Your plot, your villa: EDAS × Veda Montezza, Alibaug", tag: "Project", image: "/images/p-villa.jpg" },
  { title: "Warm shell explained: what's in scope, what isn't", tag: "Guide", image: "/images/about.jpg" },
  { title: "The 4-step pre-construction journey", tag: "Process", image: "/images/p-hotel.jpg" },
];
export const contactCategories = ["Real Estate Advisory", "Turnkey Solutions", "Careers", "General Enquiry"];
