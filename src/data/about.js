// ---------------------------------------------------------------
// About Us page content. Items marked PLACEHOLDER need real client data.
// ---------------------------------------------------------------

export const aboutIntro = {
  title: "About Us.",
  lead: "EDAS is a real estate advisory and turnkey solutions company — unifying strategic insight and end-to-end delivery under one accountable team.",
  text: "We are driven by a commitment to excellence in every project. Our mission is to deliver exceptional client value through strategic insight, operational precision and continuous innovation. EDAS is more than a service provider — we are a trusted partner, setting new benchmarks with reliable, impactful and cost-effective solutions tailored to the evolving needs of our clients.",
  image: "/images/about.jpg",
};

export const aboutServices = [
  { title: "Real Estate Advisory", note: "Strategic insight for every stage of a project", href: "/real-estate-advisory", image: "/images/advisory.jpg" },
  { title: "Turnkey Solutions", note: "Design to handover under one accountable team", href: "/turnkey-solutions", image: "/images/turnkey.jpg" },
];

// PLACEHOLDER numbers – confirm with client
export const aboutNumbers = [
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 1.5, suffix: "M+", label: "Sq. ft. built", decimals: 1 },
];

export const values = [
  { title: "Innovate", tagline: "Stay ahead of the game", text: "We bring modern methods, smart planning and sustainable thinking to every project we take on." },
  { title: "Build", tagline: "Quality in every detail", text: "Efficient execution, superior workmanship and timely delivery — on time and within budget." },
  { title: "Inspire", tagline: "Make every interaction count", text: "Transparent, client-first partnerships that create long-term value and lasting trust." },
];

// PLACEHOLDER founders – replace names, roles and messages.
// To use a real photo: replace the file in /public/images/team/ with the SAME file name (portrait, ~800x1000 JPG).
export const founders = [
  {  name: "Sailesh Dhere", role: "Founder", photo: "/images/shailesh-dhere.png",tag: "Founder", text: "20+ years in real estate strategy and construction management. Formerly with Edelweiss, Oberoi Realty, SILA, and Capacite, delivering residential, commercial, and mixed-use projects." },
  {  name: "Nilesh Dhere", role: "Co-Founder - EDAS-Projects", photo: "/images/NileshDhere.png",tag: "Co-Founder", text: "Placeholder message. Replace this with a short message from the co-founder about how EDAS delivers value to its clients and partners." },
  {  name: "Prayag Agarwal", role: "Co-Founder - EDAS-Asset Advisor's", photo: "/images/prayag-agarwal.png",tag: "Co-Founder", text: "20+ years in banking and structured credit. Formerly with IndusInd Bank, YES Bank, Edelweiss, CRISIL, and L&T Finance, focused on real estate lending and credit underwriting." },
];

// PLACEHOLDER team – replace names, roles and bios. Photos: /public/images/team/member-01.jpg ... member-12.jpg (same file names)
// const names = ["Abid Ali","Akash Yadav", "Aushitosh Hiremath"];
// export const team = Array.from({ length: 12 }, (_, i) => ({
//   name: `${names[0]} ${i + 1}`,
//   role: "Designation",
//   photo: `/images/member-${String(i + 1).padStart(2, "0")}.png`,
//   bio: "Placeholder biography. Add 3–4 lines about experience, expertise and role at EDAS.",
// }));
export const team = [
  {
    name: "Radhika Suryawanshi",
    role: "Architect",
    photo: "/images/radhika-suryawanshi.png",
    bio: "updating soon",
    // bio: "Radhika leads design development at EDAS, turning client briefs into practical, good-looking spaces. Her work covers space planning, concept design, working drawings and material selection for residential and commercial projects. She works closely with the projects team so every design can actually be built, and is delivered as intended.",
  },
  {
    name: "Rohan Gurav",
    role: "Architect",
    photo: "/images/rohan-gurav.png",
    bio: "updating soon",
    // bio: "Rohan handles architectural planning and design coordination across EDAS’s turnkey projects. He prepares detailed drawings and layouts that follow local building rules. He also makes sure civil, MEP and interior teams work from the same plan. His focus is on designs that make good use of space and stay within budget.",
  },
  {
    name: "Sapana Dhere",
    role: "Designation",
    photo: "/images/sapana-dhere.png",
    bio: "updating soon",
  },
  {
    name: "Pralhad Kharat",
    role: "CPB Projects",
    photo: "/images/pralhad-kharat.png",
    bio: "Pralhad manages execution of EDAS’s CPB projects, from site handover to final completion. He coordinates contractors, vendors and site supervisors so work stays on schedule and meets EDAS’s quality standards. His hands-on site experience helps him solve problems quickly and keep clients updated at every stage.",
  },
  {
    name: "Sachin Hingmire",
    role: "Projects",
    photo: "/images/sachin-hingmire.png",
    bio: "Sachin oversees site execution on EDAS projects. His work covers planning work schedules, monitoring daily progress, and checking quality against approved drawings and BOQs. He coordinates civil, electrical and finishing work so it happens in the right order. He makes sure each project is handed over on time and within budget.",
  },
  {
    name: "Abid Ali",
    role: "Projects",
    photo: "/images/abid-ali.png",
    bio: "Abid supports execution of turnkey projects, managing on-site teams and keeping work moving according to plan. He tracks materials, labour and progress so the site runs without delays or wastage. He also communicates regularly between the site and the management team.",
  },
  {
    name: "Nilesh Kumbhar",
    role: "Alibaug Projects",
    photo: "/images/nilesh-kumbhar.png",
    bio: "Nilesh leads EDAS’s projects in the Alibaug region, handling execution from planning through final handover. He knows the local area, its vendors and its site conditions, which helps keep work on schedule. He is the main point of contact for clients and teams on Alibaug sites.",
  },
  {
    name: "Aushitosh Hiremath",
    role: "Real Estate Advisory",
    photo: "/images/aushitosh-hiremath.png",
    bio: "updating soon",
  },
  {
    name: "Akash Yadav",
    role: "Steel Projects",
    photo: "/images/akash-yadav.png",
    bio: "Akash manages EDAS’s steel and structural projects, including fabrication, erection and site coordination. He makes sure steel work follows approved designs and safety standards and is finished on schedule. He works with fabricators and site teams to deliver strong, durable structures.",
  },
  {
    name: "Darshan Bhaubuje",
    role: "Projects",
    photo: "/images/darshan-bhaubuje.png",
    bio: "Darshan handles site coordination and execution on EDAS projects, supervising daily work and checking that it matches design and quality requirements. He works closely with contractors and suppliers to resolve on-site issues quickly. He keeps every stage of the project moving towards a smooth handover.",
  },
  {
    name: "Saurabh Kamble",
    role: "Projects",
    photo: "/images/saurabh-kamble.png",
    bio: "Saurabh supports EDAS’s project execution team with site supervision, progress tracking and quality checks. He makes sure materials and work at each site follow the approved specifications. His attention to detail on site helps EDAS deliver finished projects that clients can trust.",
  },
  {
    name: "Vishal Wandare",
    role: "Admin",
    photo: "/images/vishal-wandare.png",
    bio: "Vishal manages EDAS’s administrative operations, including office coordination, documentation and internal processes. He supports the projects and advisory teams with scheduling, records and logistics so they can focus on delivery. His work keeps everyday operations at EDAS organised and running smoothly.",
  },
  {
    name: "Suraj Ghodke",
    role: "Accounts",
    photo: "/images/suraj-ghodke.png",
    bio: "Suraj manages accounts and financial records at EDAS, including billing, payments, vendor accounts and project cost tracking. He keeps records accurate and payments on time for every project. His work supports EDAS’s commitment to transparency with clients and partners.",
  }
  // Copy one block per person, then change name, role, photo and bio
];

// PLACEHOLDER timeline – newest first. Replace the years and text with real milestones.
export const journey = [
  { date: "20XX", text: "Placeholder: a recent milestone, such as a major project completed or a new office opened." },
  { date: "20XX", text: "Placeholder: expansion into a new city or service line." },
  { date: "20XX", text: "Placeholder: first large commercial or residential turnkey project delivered." },
  { date: "20XX", text: "Placeholder: Western Maharashtra office established in Miraj." },
  { date: "20XX", text: "Placeholder: Mumbai office established in Dadar." },
  { date: "20XX", text: "Placeholder: EDAS Projects Pvt. Ltd. founded." },
];
