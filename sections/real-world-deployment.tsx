import { FadeInSection } from "@/components/cjis/fade-in-section";
import { Heading } from "@/components/cjis/heading";
import { SectionHeader } from "@/components/cjis/section-header";
import { Section } from "@/components/cjis/section";
import { deploymentCapabilityPoints } from "@/lib/constants";

export function RealWorldDeploymentSection() {
  return (
    <Section id="real-world-deployment" surface="elevated">
      <FadeInSection>
        <SectionHeader
          eyebrow="Proof of capability"
          title="Real-world deployment readiness"
          titleId="real-world-deployment-heading"
          description="Built for the conditions teams face in production, not ideal lab audio."
          className="max-w-3xl"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {deploymentCapabilityPoints.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <Heading level={3} className="text-lg">
                {item.title}
              </Heading>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </FadeInSection>
    </Section>
  );
}
