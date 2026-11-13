// ---------------------------------------------------------------
// Careers page content. Everything marked PLACEHOLDER must be replaced with real client content.
// Photos: swap the paths for real photos (e.g. /images/culture/site-visit.jpg).
// ---------------------------------------------------------------
export { advisoryContacts as careersContacts } from "@/data/advisory";

export const careersHero = {
  title: "Careers",
  image: "/images/p-cowork.jpg",
  tagline: "Build your career with EDAS.",
};

export const whyJoin = {
  title: "Why Join EDAS",
  paragraphs: [
    "At EDAS, every project is a chance to learn, lead and make a visible difference. We combine strategic real estate advisory with hands-on turnkey delivery, so our people work across the full life of a project — from first feasibility study to final handover.",
    "We are a growing team that values ownership, honest communication and quality workmanship. Whether you are an engineer on site, an advisory analyst or part of our support functions, you will work alongside experienced professionals who invest in your growth.",
  ],
  image: "/images/about.jpg", // Sila shows a culture video here
};

// PLACEHOLDER photos – 1 large + 4 small
export const culture = {
  title: "Our Culture",
  subtitle: "A glimpse of life at EDAS — on site, in the office and in between.",
  photos: ["/images/p-site.jpg", "/images/p-heights.jpg", "/images/p-cowork.jpg", "/images/p-hotel.jpg", "/images/p-villa.jpg"],
};

// DRAFT copy – confirm programmes with the client
export const training = {
  title: "Training and Skill Development",
  subtitle: "We invest in our people so they can grow with every project.",
  items: [
    { title: "Onboarding Programme", text: "A structured start that introduces new joiners to EDAS's processes, safety standards, systems and project teams." },
    { title: "Site & Safety Training", text: "Regular on-site training on construction practices, quality checks and safety compliance for every role." },
    { title: "Technical Skill Development", text: "Hands-on learning in estimation, planning, contracts, waterproofing and specialised construction methods." },
    { title: "Leadership Development", text: "Mentoring and responsibility for high-potential team members preparing to lead sites, projects and teams." },
    { title: "Continuous Learning", text: "Workshops, industry exposure and cross-functional assignments that keep skills sharp as projects evolve." },
  ],
};

// PLACEHOLDER testimonials – replace with real employee quotes. Photos: /public/images/team/member-XX.jpg
export const testimonials = {
  title: "Employee Testimonials",
  subtitle: "Real stories from the people building EDAS.",
  items: [
  {
    name: "Abid Ali",
    role: "Projects",
    since: "20XX",
    photo: "/images/abid-ali.png",
    quote: "At EDAS, every site teaches me something new. I've learned how to manage teams, materials and timelines together, and the trust my seniors place in me has helped me grow with confidence.",
  },
  {
    name: "Darshan Bhabuje",
    role: "Projects",
    since: "20XX",
    photo: "/images/darshan-bhaubuje.png",
    quote: "What I value most at EDAS is the hands-on exposure. From reading drawings to solving problems on site, I get to be part of the full journey of a project, and seeing a finished handover makes it all worth it.",
  },
  {
    name: "Nilesh Kumbhar",
    role: "Alibaug Projects",
    since: "20XX",
    photo: "/images/nilesh-kumbhar.png",
    quote: "Leading projects in Alibaug has given me real ownership. EDAS trusts its people to take responsibility, and that freedom, backed by strong support from the team, has helped me grow both professionally and personally.",
  },
  {
    name: "Vishal Wandare",
    role: "Admin",
    since: "20XX",
    photo: "/images/vishal-wandare.png",
    quote: "Working behind the scenes at EDAS, I've seen how good coordination keeps every team moving. The work culture is supportive and organised, and I'm proud to play a part in keeping things running smoothly every day.",
  },
  {
    name: "Pralhad Kharat",
    role: "CPB Projects",
    since: "20XX",
    photo: "/images/pralhad-kharat.png",
    quote: "EDAS gave me the chance to handle projects with real responsibility from day one. Working alongside experienced people, I've learned to focus on quality, discipline on site, and delivering what we promise to our clients.",
  },
]
  // Array.from({ length: 6 }, (_, i) => ({
  //   name: "Employee Name",
  //   role: "Designation",
  //   since: "20XX",
  //   photo: `/images/member-${String(i + 1).padStart(2, "0")}.jpg`,
  //   quote: "Placeholder testimonial. Replace this with a short, genuine quote from an EDAS team member about their experience, learning and growth at the company.",
  // })),
};
// {
//     name: "Abid Ali",
//     role: "Designation",
//     since: "20XX"
//     photo: "/images/abid-ali.png",
//     quote: "Placeholder testimonial. Replace this with a short, genuine quote from an EDAS team member about their experience, learning and growth at the company.",
//   },