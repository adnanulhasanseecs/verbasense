import { FadeInSection } from "@/components/cjis/fade-in-section";
import { Heading } from "@/components/cjis/heading";
import { Section } from "@/components/cjis/section";
import { problemStatement } from "@/lib/constants";

export function ProblemStatementSection() {
  return (
    <Section id="problem" surface="muted" className="border-y border-border/70">
      <FadeInSection>
        <Heading level={2} className="max-w-3xl text-balance">
          Most critical conversations still disappear into fragmented workflows
        </Heading>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
          {problemStatement}
        </p>
      </FadeInSection>
    </Section>
  );
}
