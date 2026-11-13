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
  {  name: "Sailesh Dhere", role: "Founder", photo: "/images/founder.jpg", text: "Placeholder message. Replace this with a short message from the founder about EDAS's vision, values and commitment to clients. Two or three short paragraphs work best." },
  {  name: "Nilesh Dhere", role: "Co-Founder - EDAS-Projects", photo: "/images/NileshDhere.png", text: "Placeholder message. Replace this with a short message from the co-founder about how EDAS delivers value to its clients and partners." },
  {  name: "Prayag Agarwal", role: "Co-Founder - EDAS-Asset Advisor's", photo: "/images/co-founder.jpg", text: "Placeholder message. Replace this with a short message from the co-founder about how EDAS delivers value to its clients and partners." },
];

// PLACEHOLDER team – replace names, roles and bios. Photos: /public/images/team/member-01.jpg ... member-12.jpg (same file names)
const names = ["Abid Ali","Akash Yadav", "Aushitosh Hiremath"];
// export const team = Array.from({ length: 12 }, (_, i) => ({
//   name: `${names[0]} ${i + 1}`,
//   role: "Designation",
//   photo: `/images/member-${String(i + 1).padStart(2, "0")}.png`,
//   bio: "Placeholder biography. Add 3–4 lines about experience, expertise and role at EDAS.",
// }));
export const team = [
  {
    name: "Abid Ali",
    role: "Designation",
    photo: "/images/abid-ali.png",
    bio: "Add 3–4 lines about experience, expertise and role at EDAS.",
  },
  {
    name: "Akash Yadav",
    role: "Designation",
    photo: "/images/akash-yadav.png",
    bio: "Add 3–4 lines about experience, expertise and role at EDAS.",
  },
  {
    name: "Aushitosh Hiremath",
    role: "Designation",
    photo: "/images/aushitosh-hiremath.png",
    bio: "Add 3–4 lines about experience, expertise and role at EDAS.",
  },
  {
    name: "Darshan Bhaubuje",
    role: "Designation",
    photo: "/images/darshan-bhaubuje.png",
    bio: "Add 3–4 lines about experience, expertise and role at EDAS.",
  },
  {
    name: "Sapana Dhere",
    role: "Designation",
    photo: "/images/sapana-dhere.png",
    bio: "Add 3–4 lines about experience, expertise and role at EDAS.",
  },
  {
    name: "Radhika Suryawanshi",
    role: "Designation",
    photo: "/images/radhika-suryawanshi.png",
    bio: "Add 3–4 lines about experience, expertise and role at EDAS.",
  },
  {
    name: "Nilesh Kumbhar",
    role: "Designation",
    photo: "/images/nilesh-kumbhar.png",
    bio: "Add 3–4 lines about experience, expertise and role at EDAS.",
  },
  {
    name: "Vishal Wandare",
    role: "Designation",
    photo: "/images/vishal-wandare.png",
    bio: "Add 3–4 lines about experience, expertise and role at EDAS.",
  },
  {
    name: "Pralhad Kharat",
    role: "Designation",
    photo: "/images/pralhad-kharat.png",
    bio: "Add 3–4 lines about experience, expertise and role at EDAS.",
  },
  {
    name: "Rohan Gurav",
    role: "Designation",
    photo: "/images/rohan-gurav.png",
    bio: "Add 3–4 lines about experience, expertise and role at EDAS.",
  },
  {
    name: "Sachin Hingmire",
    role: "Designation",
    photo: "/images/sachin-hingmire.png",
    bio: "Add 3–4 lines about experience, expertise and role at EDAS.",
  },
  {
    name: "Saurabh Kamble",
    role: "Designation",
    photo: "/images/saurabh-kamble.png",
    bio: "Add 3–4 lines about experience, expertise and role at EDAS.",
  },
  {
    name: "Suraj Ghodke",
    role: "Designation",
    photo: "/images/suraj-ghodke.png",
    bio: "Add 3–4 lines about experience, expertise and role at EDAS.",
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
