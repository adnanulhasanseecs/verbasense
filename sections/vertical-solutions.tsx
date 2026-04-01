import { FadeInSection } from "@/components/cjis/fade-in-section";
import { SectionHeader } from "@/components/cjis/section-header";
import { Section } from "@/components/cjis/section";
import { VerticalCard } from "@/components/vip/vertical-card";
import { verticalSolutions } from "@/lib/constants";
import type { VerticalId } from "@/components/vip/vertical-card";

export function VerticalSolutionsSection() {
  return (
    <Section id="solutions" surface="muted" className="pt-10 md:pt-14">
      <FadeInSection>
        <SectionHeader
          eyebrow="Solutions"
          title="Choose your solution line"
          titleId="vertical-solutions-heading"
          description="Use these deployment-ready paths to navigate directly to the solution that matches your operating environment."
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
