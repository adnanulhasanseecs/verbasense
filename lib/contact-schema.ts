import { z } from "zod";

const phoneRegex = /^[\d\s+().-]{7,25}$/;

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Full name is required"),
  phone: z
    .string()
    .trim()
    .refine((s) => !s || phoneRegex.test(s), {
      message: "Enter a valid phone number",
    }),
  organization: z.string().trim().min(1, "Organization is required"),
  designation: z.string().trim().min(1, "Designation is required"),
  country: z
    .string()
    .trim()
    .min(1, "Select a country")
    .regex(/^[A-Z]{2}$/, "Select a valid country"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .min(20, "Message must be at least 20 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export function parseContactForm(input: unknown) {
  return contactFormSchema.safeParse(input);
}
