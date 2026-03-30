import { FadeInSection } from "@/components/cjis/fade-in-section";
import { Heading } from "@/components/cjis/heading";
import { SectionHeader } from "@/components/cjis/section-header";
import { Section } from "@/components/cjis/section";
import { useCases } from "@/lib/constants";

export function UseCasesSection() {
  return (
    <Section id="use-cases" surface="muted">
      <FadeInSection>
        <SectionHeader
          eyebrow="Who it serves"
          title="Use cases"
          titleId="use-cases-heading"
          titleClassName="max-w-2xl"
          description="Designed for apex and high courts, distributed hearings, and administrative teams that manage the official record."
          className="max-w-2xl"
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {useCases.map((u) => (
            <article
              key={u.id}
              className="rounded-2xl border border-border/80 bg-card p-7 shadow-[0_1px_0_0_rgb(0_0_0_/0.04)] transition-shadow hover:shadow-md dark:shadow-[0_1px_0_0_rgb(255_255_255_/0.04)]"
            >
              <Heading level={3} className="text-lg">
                {u.title}
              </Heading>
              <p className="mt-2 text-sm text-muted-foreground">
                {u.description}
              </p>
            </article>
          ))}
        </div>
      </FadeInSection>
    </Section>
  );
}
