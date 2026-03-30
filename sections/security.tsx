import { FadeInSection } from "@/components/cjis/fade-in-section";
import { Heading } from "@/components/cjis/heading";
import { SectionHeader } from "@/components/cjis/section-header";
import { Section } from "@/components/cjis/section";
import { TrustBadge } from "@/components/cjis/trust-badge";
import {
  securityClosing,
  securityIntro,
  securityPoints,
  whoItsFor,
} from "@/lib/constants";

export function SecuritySection() {
  return (
    <Section id="security-deployment" surface="elevated">
      <FadeInSection>
        <div className="flex flex-wrap gap-2">
          <TrustBadge>On-prem & hybrid</TrustBadge>
          <TrustBadge>AES-256 + TLS</TrustBadge>
          <TrustBadge>RBAC</TrustBadge>
          <TrustBadge>Audit logs</TrustBadge>
        </div>
        <SectionHeader
          className="mt-6"
          eyebrow="Trust & control"
          title="Security & Deployment"
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
        <div className="mt-10 rounded-2xl border border-border bg-card p-7">
          <Heading level={3} className="text-base">
            Who it&apos;s for
          </Heading>
          <ul className="mt-4 grid gap-3 text-sm text-muted-foreground md:grid-cols-3">
            {whoItsFor.map((item) => (
              <li key={item} className="rounded-xl bg-muted/50 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </FadeInSection>
    </Section>
  );
}
