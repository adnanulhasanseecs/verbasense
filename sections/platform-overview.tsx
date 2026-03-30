import { FadeInSection } from "@/components/cjis/fade-in-section";
import { SectionHeader } from "@/components/cjis/section-header";
import { Section } from "@/components/cjis/section";
import { PlatformFeatureGrid } from "@/components/vip/platform-feature-grid";
import { platformEngineFeatures } from "@/lib/constants";

export function PlatformOverviewSection() {
  return (
    <Section id="platform-overview" surface="elevated">
      <FadeInSection>
        <SectionHeader
          eyebrow="Platform"
          title="Core intelligence engine"
          titleId="platform-engine-heading"
          description="VerbaSense provides a shared foundation for speech, understanding, extraction, and retrieval—deployed once, applied across judicial, enterprise, and government programs."
          className="max-w-3xl"
        />
        <PlatformFeatureGrid
          features={platformEngineFeatures}
          className="mt-14"
        />
      </FadeInSection>
    </Section>
  );
}
