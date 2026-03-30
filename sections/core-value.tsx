import { FadeInSection } from "@/components/cjis/fade-in-section";
import { SectionHeader } from "@/components/cjis/section-header";
import { Section } from "@/components/cjis/section";
import { coreValueProposition } from "@/lib/constants";

export function CoreValueSection() {
  return (
    <Section id="value-proposition" surface="elevated">
      <FadeInSection>
        <SectionHeader
          eyebrow="Why CourtSense"
          title="Core value proposition"
          titleId="value-heading"
        />
        <blockquote className="mt-10 max-w-3xl border-l-4 border-brand-gold pl-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
          {coreValueProposition}
        </blockquote>
      </FadeInSection>
    </Section>
  );
}
