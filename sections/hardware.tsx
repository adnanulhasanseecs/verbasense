import { FadeInSection } from "@/components/cjis/fade-in-section";
import { SectionHeader } from "@/components/cjis/section-header";
import { Section } from "@/components/cjis/section";

export function HardwareSection() {
  return (
    <Section
      id="hardware"
      surface="muted"
      className="border-t border-border"
    >
      <FadeInSection>
        <SectionHeader
          eyebrow="Deployment"
          title="Hardware & infrastructure"
          titleId="hardware-heading"
          description="The system is optimized for enterprise-grade AI infrastructure:"
        />
        <ul className="mt-6 max-w-3xl list-inside list-disc space-y-2 text-muted-foreground">
          <li>
            GPU-accelerated processing (
            <strong className="font-medium text-foreground">NVIDIA A6000</strong>
            ,{" "}
            <strong className="font-medium text-foreground">RTX 4090</strong> /{" "}
            <strong className="font-medium text-foreground">5090</strong> class)
          </li>
          <li>
            Recommended deployment on server-grade GPUs (e.g.{" "}
            <strong className="font-medium text-foreground">L40S</strong>)
          </li>
          <li>High-availability architecture for uninterrupted courtroom operations</li>
        </ul>
        <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
          Sizing and redundancy are finalized during technical discovery with your IT
          and security teams.
        </p>
      </FadeInSection>
    </Section>
  );
}
