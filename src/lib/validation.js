// ---------------------------------------------------------------
// Shared validation: used by the browser (instant feedback) AND the API route (the real gate).
// Never trust the browser: the server always re-validates everything.
// No imports here so it runs anywhere.
// ---------------------------------------------------------------

export const CATEGORIES = ["Real Estate Advisory", "Turnkey Solutions", "Careers", "General Enquiry"];

export const LIMITS = {
  nameMin: 2, nameMax: 80,
  emailMax: 254,
  phoneMax: 12,
  locationMax: 100,
  messageMin: 10, messageMax: 2000,
  maxLinksInMessage: 2,
};

// control characters except \t \n \r (blocks null bytes, header-injection tricks, unicode line separators)
const CONTROL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F\u2028\u2029]/g;

export const oneLine = (v) => (typeof v === "string" ? v.replace(CONTROL, "").replace(/\s+/g, " ").trim() : "");
export const multiLine = (v) =>
  typeof v === "string" ? v.replace(CONTROL, "").replace(/\r\n?/g, "\n").replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim() : "";
const isTrue = (v) => v === true || (typeof v === "string" && ["true", "on", "yes", "1"].includes(v.toLowerCase()));

const NAME_RE = /^[\p{L}\p{M}][\p{L}\p{M} .'’-]*$/u;
const LOCATION_RE = /^[\p{L}\p{N} .,'’&()\/-]+$/u;
const EMAIL_RE = /^[A-Za-z0-9.!#$%&'*+\/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*\.[A-Za-z]{2,}$/;

const countLinks = (s) => (s.match(/https?:\/\/|www\./gi) || []).length;

export function emailError(email) {
  if (!email) return "Please enter your email address.";
  if (email.length > LIMITS.emailMax) return "That email address is too long.";
  const [local = ""] = email.split("@");
  if (!EMAIL_RE.test(email) || local.length > 64 || email.includes("..") || local.startsWith(".") || local.endsWith(".")) {
    return "Please enter a valid email address.";
  }
  return "";
}

/** Validates + normalises the contact form. Returns { valid, errors: {field: message}, data } */
export function validateContact(raw = {}) {
  const data = {
    name: oneLine(raw.name),
    email: oneLine(raw.email).toLowerCase(),
    phone: oneLine(raw.phone),
    category: oneLine(raw.category),
    location: oneLine(raw.location),
    message: multiLine(raw.message),
    consent: isTrue(raw.consent),
  };
  const errors = {};

  if (!data.name) errors.name = "Please enter your name.";
  else if (data.name.length < LIMITS.nameMin) errors.name = "Name is too short.";
  else if (data.name.length > LIMITS.nameMax) errors.name = `Name must be under ${LIMITS.nameMax} characters.`;
  else if (!NAME_RE.test(data.name)) errors.name = "Name can only contain letters, spaces, dots, hyphens and apostrophes.";

  const ee = emailError(data.email);
  if (ee) errors.email = ee;

  // if (data.phone) {
  //   const digits = data.phone.replace(/\D/g, "");
  //   if (data.phone.length > LIMITS.phoneMax || !/^\+?[\d ()-]+$/.test(data.phone) || digits.length < 7 || digits.length > 15) {
  //     errors.phone = "Please enter a valid phone number (7–15 digits).";
  //   }
  // }

  // Phone is optional, but if given it must be exactly 10 digits (one space allowed, e.g. "99751 35552").
  if (data.phone) {
    const compact = data.phone.replace(/ /g, "");
    if (!/^\d+$/.test(compact)) errors.phone = "Phone number can contain digits only.";
    else if (compact.length !== 10) errors.phone = "Phone number must be exactly 10 digits.";
    else if (!/^[6-9]/.test(compact)) errors.phone = "Please enter a valid 10-digit mobile number.";
    else data.phone = compact; // store/send it normalised
  }

  if (!data.category) errors.category = "Please select a category.";
  else if (!CATEGORIES.includes(data.category)) errors.category = "Please select a valid category.";

  if (data.location) {
    if (data.location.length > LIMITS.locationMax || !LOCATION_RE.test(data.location)) errors.location = "Please enter a valid location.";
  }

  if (!data.message) errors.message = "Please tell us how we can help.";
  else if (data.message.length < LIMITS.messageMin) errors.message = `Message is too short (minimum ${LIMITS.messageMin} characters).`;
  else if (data.message.length > LIMITS.messageMax) errors.message = `Message must be under ${LIMITS.messageMax} characters.`;
  else if (!/\p{L}/u.test(data.message)) errors.message = "Please write your message in words.";
  else if (countLinks(data.message) > LIMITS.maxLinksInMessage) errors.message = "Please remove extra links from your message.";

  if (!data.consent) errors.consent = "Please tick the box to let us contact you.";

  return { valid: Object.keys(errors).length === 0, errors, data };
}

/** Newsletter box: email only */
export function validateNewsletter(raw = {}) {
  const data = { email: oneLine(raw.email).toLowerCase() };
  const errors = {};
  const ee = emailError(data.email);
  if (ee) errors.email = ee;
  return { valid: Object.keys(errors).length === 0, errors, data };
}
