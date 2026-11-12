import { site } from "@/data/site";
export { advisoryContacts as contactContacts } from "@/data/advisory";


// 28 states + 8 union territories (for the "Select location" dropdown)
export const locations = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
  "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
];

export const contactHero = {
  title: "Contact Us",
  image: "/images/about.jpg",
  tagline: "Tell us about your project — we'll take it from here.",
};

// "Connect with us today" cards. type: "email" | "address"
export const connectCards = [
  { type: "email", label: "Business Development", value: "Operations@edasprojects.com" },
  { type: "email", label: "Work With Us", value: "Operations@edasprojects.com" }, // confirm careers email with client
  { type: "address", label: site.offices[0].label, value: site.offices[0].lines.join(" ") },
  { type: "address", label: site.offices[1].label, value: site.offices[1].lines.join(" ") },
];

export const presenceLine = "Other locations: projects delivered across Mumbai, Pune, Alibaug & Western Maharashtra";

// Map embeds. For an exact pin, open the office in Google Maps -> Share -> Embed a map -> copy the src URL here.
export const maps = [
  { label: "Mumbai Office", src: "https://www.google.com/maps?q=Sai+Datta+Apartment,+Bal+Govind+Das+Road,+Dadar,+Mumbai+400028&output=embed" },
  { label: "Western Maharashtra Office", src: "https://www.google.com/maps?q=Imperial+Square,+Ramaudyan+Road,+Miraj,+Sangli+416410&output=embed" },
];

export const socials = [
  { name: "LinkedIn", href: site.social.linkedin },
  { name: "Instagram", href: site.social.instagram },
  { name: "Facebook", href: site.social.facebook },
  { name: "YouTube", href: site.social.youtube },
];
