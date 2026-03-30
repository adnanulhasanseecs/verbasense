import type { ContactFormValues } from "@/lib/contact-schema";
import { Resend } from "resend";

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}

export async function sendContactInquiry(values: ContactFormValues) {
  const resendApiKey = requiredEnv("RESEND_API_KEY");
  const to = requiredEnv("CONTACT_TO_EMAIL");
  const from = requiredEnv("CONTACT_FROM_EMAIL");
  const resend = new Resend(resendApiKey);

  const subject = `New inquiry from ${values.name} (${values.organization})`;
  const plainText = [
    "New inquiry received from VerbaSense contact form",
    "",
    `Name: ${values.name}`,
    `Organization: ${values.organization}`,
    `Designation: ${values.designation}`,
    `Country: ${values.country}`,
    `Phone: ${values.phone || "N/A"}`,
    "",
    "Message:",
    values.message,
  ].join("\n");

  await resend.emails.send({
    from,
    to: [to],
    subject,
    text: plainText,
    html: `
      <h2>New inquiry received</h2>
      <p><strong>Name:</strong> ${escapeHtml(values.name)}</p>
      <p><strong>Organization:</strong> ${escapeHtml(values.organization)}</p>
      <p><strong>Designation:</strong> ${escapeHtml(values.designation)}</p>
      <p><strong>Country:</strong> ${escapeHtml(values.country)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(values.phone || "N/A")}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(values.message).replace(/\n/g, "<br/>")}</p>
    `,
  });
}

function escapeHtml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
