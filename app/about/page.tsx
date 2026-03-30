import { FadeInSection } from "@/components/cjis/fade-in-section";
import { Heading } from "@/components/cjis/heading";
import { Section } from "@/components/cjis/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";
import { Compass, Expand, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "VerbaSense vision: institutional intelligence for courts, enterprises, and government—with CourtSense as the judicial vertical.",
};

const pillars = [
  {
    icon: Eye,
    title: "Vision",
    body:
      "Institutions should benefit from speech and document intelligence without surrendering custody of sensitive conversations or weakening the integrity of the record.",
  },
  {
    icon: Compass,
    title: "Platform philosophy",
    body:
      "One engine, multiple verticals: shared transcription, understanding, and extraction services—configured for judicial formality, enterprise governance, or public-sector policy rules.",
  },
  {
    icon: Expand,
    title: "Expansion strategy",
    body:
      "CourtSense established the bar for courtroom-grade capture and retention. VerbaSense extends that foundation to boards, agencies, and committees that impose similar demands on accuracy and accountability.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <Section
        className="relative overflow-hidden border-b border-border pb-14 pt-14"
        surface="elevated"
      >
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-gold/15 blur-3xl dark:bg-brand-gold/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-brand-navy/10 blur-3xl dark:bg-brand-navy/25"
          aria-hidden
        />
        <FadeInSection>
          <Heading level={1}>About VerbaSense</Heading>
          <p className="relative mt-4 max-w-3xl text-lg text-muted-foreground">
            VerbaSense Intelligence Platform supports institutions where conversations
            become binding record—courts, enterprises, and government. CourtSense
            remains our dedicated judicial offering on the same core services.
          </p>
        </FadeInSection>
      </Section>

      <Section className="py-14">
        <FadeInSection>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, body }) => (
              <Card
                key={title}
                className="border-border/80 bg-card/80 shadow-[0_24px_60px_-28px_rgb(15_23_42_/0.28)] backdrop-blur-sm dark:bg-card/60"
              >
                <CardHeader className="pb-2">
                  <div className="mb-3 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeInSection>
      </Section>

      <Section surface="muted" className="border-t border-border py-14">
        <FadeInSection>
          <Heading level={2} className="text-2xl">
            Institutional tone, engineering discipline
          </Heading>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            We communicate in plain, formal language suited to procurement, judicial
            administration, and board governance. Product decisions favor clarity,
            auditability, and long-term operability over novelty.
          </p>
        </FadeInSection>
      </Section>
    </>
  );
}
