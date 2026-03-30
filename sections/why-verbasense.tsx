import { FadeInSection } from "@/components/cjis/fade-in-section";
import { Heading } from "@/components/cjis/heading";
import { SectionHeader } from "@/components/cjis/section-header";
import { Section } from "@/components/cjis/section";
import { whyVerbaSensePoints } from "@/lib/constants";

export function WhyVerbaSenseSection() {
  return (
    <Section id="why-verbasense" surface="elevated">
      <FadeInSection>
        <SectionHeader
          eyebrow="Why VerbaSense"
          title="Built for institutions that cannot afford ambiguity"
          titleId="why-vip-heading"
          description="From courtrooms to cabinet rooms, the requirement is the same: faithful capture, clear accountability, and systems that respect legal and policy boundaries."
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {whyVerbaSensePoints.map((p) => (
            <li
              key={p.id}
              className="shadow-gold-soft rounded-2xl border border-border bg-card p-7"
            >
              <Heading level={3} className="text-base">
                {p.title}
              </Heading>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </li>
          ))}
        </ul>
      </FadeInSection>
    </Section>
  );
}
