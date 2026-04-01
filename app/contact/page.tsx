import { ContactForm } from "@/components/contact/contact-form";
import { Heading } from "@/components/cjis/heading";
import { Section } from "@/components/cjis/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact VerbaSense for technical discussions, platform demonstrations, and deployment inquiries across judicial, enterprise, and government programs.",
};

export default function ContactPage() {
  return (
    <Section className="py-16 md:py-24" containerClassName="max-w-xl">
      <Heading level={1}>Get in Touch</Heading>
      <p className="mt-4 text-muted-foreground">
        For technical discussions, system demonstrations, or deployment inquiries,
        please reach out to our team.
      </p>
      <p className="mt-3 text-sm text-muted-foreground">
        Email:{" "}
        <a
          href="mailto:info@verbasense.io"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          info@verbasense.io
        </a>
      </p>
      <div className="mt-10">
        <ContactForm />
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        Our team will respond promptly to coordinate a detailed discussion based on
        your requirements.
      </p>
    </Section>
  );
}
