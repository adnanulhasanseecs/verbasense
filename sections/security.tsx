import { FadeInSection } from "@/components/cjis/fade-in-section";
import { Heading } from "@/components/cjis/heading";
import { SectionHeader } from "@/components/cjis/section-header";
import { Section } from "@/components/cjis/section";
import { TrustBadge } from "@/components/cjis/trust-badge";
import { securityClosing, securityIntro, securityPoints } from "@/lib/constants";

export function SecuritySection() {
  return (
    <Section id="security" surface="elevated">
      <FadeInSection>
        <div className="flex flex-wrap gap-2">
          <TrustBadge>On-prem & hybrid</TrustBadge>
          <TrustBadge>Encryption</TrustBadge>
          <TrustBadge>RBAC</TrustBadge>
          <TrustBadge>Audit logs</TrustBadge>
        </div>
        <SectionHeader
          className="mt-6"
          eyebrow="Trust & control"
          title="Security"
          titleId="security-heading"
          description={securityIntro}
        />
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {securityPoints.map((s) => (
            <li
              key={s.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <Heading level={3} className="text-base">
                {s.title}
              </Heading>
              <p className="mt-2 text-sm text-muted-foreground">
                {s.description}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-3xl text-sm text-muted-foreground">
          {securityClosing}
        </p>
      </FadeInSection>
    </Section>
  );
}
