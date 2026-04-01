import { CtaButton } from "@/components/cjis/cta-button";
import { SectionHeader } from "@/components/cjis/section-header";
import { Section } from "@/components/cjis/section";

export function LandingCtaSection() {
  return (
    <Section
      id="cta"
      surface="muted"
      className="border-t border-border bg-[linear-gradient(180deg,var(--background)_0%,var(--muted)_100%)]"
    >
      <div className="shadow-gold-soft relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-card p-10 text-center ring-1 ring-brand-navy/5 dark:ring-white/10 md:p-12">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-brand-gold/80 to-transparent"
          aria-hidden
        />
        <SectionHeader
          eyebrow="Engage"
          title="Request Technical Demonstration"
          titleId="cta-heading"
          description="Discuss deployment, security boundaries, and vertical fit for courts, agencies, or enterprise programs."
          className="mx-auto max-w-xl text-center [&_h2]:mx-auto"
        />
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <CtaButton href="/contact">Contact the team</CtaButton>
          <CtaButton href="/platform" variant="outline">
            Review the platform
          </CtaButton>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          See how VerbaSense operates in real-world deployments.
        </p>
      </div>
    </Section>
  );
}
