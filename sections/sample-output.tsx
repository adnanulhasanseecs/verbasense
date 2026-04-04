import { FadeInSection } from "@/components/cjis/fade-in-section";
import { Heading } from "@/components/cjis/heading";
import { SectionHeader } from "@/components/cjis/section-header";
import { Section } from "@/components/cjis/section";
import { sampleOutput } from "@/lib/constants";

export function SampleOutputSection() {
  return (
    <Section id="sample-output" surface="muted">
      <FadeInSection>
        <SectionHeader
          eyebrow="Output preview"
          title="Sample output"
          titleId="sample-output-heading"
          description="Illustrative format: transcript, summary, and actionable outcomes generated from one session."
          className="max-w-3xl"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:col-span-2">
            <Heading level={3} className="text-lg">
              Transcript with speakers
            </Heading>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {sampleOutput.transcript.map((line) => (
                <li key={`${line.speaker}-${line.text}`} className="rounded-lg bg-muted/45 p-3">
                  <span className="font-semibold text-foreground">{line.speaker}:</span>{" "}
                  {line.text}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <Heading level={3} className="text-lg">
              Summary
            </Heading>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {sampleOutput.summary}
            </p>
            <Heading level={3} className="mt-6 text-base">
              Action items
            </Heading>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {sampleOutput.actions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </FadeInSection>
    </Section>
  );
}
