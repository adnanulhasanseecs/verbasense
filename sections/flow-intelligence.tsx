import { FadeInSection } from "@/components/cjis/fade-in-section";
import { SectionHeader } from "@/components/cjis/section-header";
import { Section } from "@/components/cjis/section";
import Image from "next/image";

export function FlowIntelligenceSection() {
  return (
    <Section id="flow-intelligence" surface="elevated">
      <FadeInSection>
        <SectionHeader
          eyebrow="Pipeline"
          title="From Conversation to Structured Intelligence"
          titleId="flow-intelligence-heading"
          description="VerbaSense transforms real-world interactions into structured, actionable outputs through a seamless processing pipeline."
          className="max-w-4xl"
        />
        <div className="relative z-10 mt-10 mx-auto w-full max-w-5xl overflow-hidden rounded-2xl bg-muted/25 p-3 ring-1 ring-brand-gold/30 shadow-gold-image">
          <Image
            src="/brand/flow-vip.webp"
            alt="VerbaSense processing pipeline from conversation capture to structured outputs"
            width={2200}
            height={1200}
            unoptimized
            className="h-auto w-full rounded-xl object-contain"
            sizes="(max-width: 1024px) 100vw, 1200px"
            priority={false}
          />
        </div>
      </FadeInSection>
    </Section>
  );
}

