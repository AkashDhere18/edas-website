import nodemailer from "nodemailer";

// All SMTP settings come from environment variables (see .env.local.example). Nothing secret lives in code.
export const smtpConfigured = () => Boolean(process.env.SMTP_HOST && process.env.MAIL_TO);

let transporter;
function getTransporter() {
  if (!transporter) {
    const user = process.env.SMTP_USER;
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true", // true for port 465, false for 587 (STARTTLS)
      auth: user ? { user, pass: process.env.SMTP_PASS } : undefined,
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });
  }
  return transporter;
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
const stamp = () => new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" }) + " IST";
const subjectSafe = (s) => String(s).replace(/[\r\n]+/g, " ").slice(0, 150);

function table(rows) {
  return `<table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;color:#222;width:100%;max-width:640px">${rows
    .map(([k, v, pre]) => `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;background:#f4f6fb;font-weight:bold;width:150px;vertical-align:top">${esc(k)}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;${pre ? "white-space:pre-wrap;" : ""}">${esc(v) || "—"}</td></tr>`)
    .join("")}</table>`;
}

export async function sendContactMail(d, meta) {
  const rows = [
    ["Name", d.name], ["Email", d.email], ["Phone", d.phone], ["Category", d.category], ["Location", d.location],
    ["Message", d.message, true], ["Received", stamp()], ["IP address", meta.ip],
  ];
  await getTransporter().sendMail({
    from: process.env.MAIL_FROM || process.env.SMTP_USER,
    to: process.env.MAIL_TO,
    replyTo: { name: d.name, address: d.email },
    subject: subjectSafe(`[EDAS Website] New enquiry: ${d.category} – ${d.name}`),
    text: rows.map(([k, v]) => `${k}: ${v || "-"}`).join("\n"),
    html: table(rows),
  });
}

export async function sendNewsletterMail(d, meta) {
  const rows = [["Email", d.email], ["Received", stamp()], ["IP address", meta.ip]];
  await getTransporter().sendMail({
    from: process.env.MAIL_FROM || process.env.SMTP_USER,
    to: process.env.MAIL_TO,
    subject: subjectSafe("[EDAS Website] New newsletter subscriber"),
    text: rows.map(([k, v]) => `${k}: ${v || "-"}`).join("\n"),
    html: table(rows),
  });
}
