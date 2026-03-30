import { FadeInSection } from "@/components/cjis/fade-in-section";
import { SectionHeader } from "@/components/cjis/section-header";
import { Section } from "@/components/cjis/section";
import { VerticalCard } from "@/components/vip/vertical-card";
import { verticalSolutions } from "@/lib/constants";
import type { VerticalId } from "@/components/vip/vertical-card";

export function VerticalSolutionsSection() {
  return (
    <Section id="solutions" surface="muted">
      <FadeInSection>
        <SectionHeader
          eyebrow="Solutions"
          title="Vertical solutions"
          titleId="vertical-solutions-heading"
          description="The same engine, configured for the governance, terminology, and retention rules of your institution—CourtSense, EnterpriseSense, or GovSense."
          className="max-w-3xl"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {verticalSolutions.map((v) => (
            <VerticalCard
              key={v.id}
              title={v.title}
              description={v.description}
              href={v.href}
              verticalId={v.id as VerticalId}
            />
          ))}
        </div>
      </FadeInSection>
    </Section>
  );
}
