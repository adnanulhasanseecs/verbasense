import { FadeInSection } from "@/components/cjis/fade-in-section";
import { Heading } from "@/components/cjis/heading";
import { SectionHeader } from "@/components/cjis/section-header";
import { Section } from "@/components/cjis/section";
import { TrustBadge } from "@/components/cjis/trust-badge";
import { securityClosing, securityIntro, securityPoints } from "@/lib/constants";

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
          title="Built for Secure and Controlled Environments"
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
        <div className="mt-8 rounded-2xl border border-border bg-card p-7">
          <Heading level={3} className="text-base">
            Advanced Security (Cloud Deployments)
          </Heading>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Supports identity-based access mechanisms such as workload identity
            and managed service authentication, eliminating static credentials.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            For non-technical teams, this means fewer hidden access keys, lower
            risk of accidental exposure, and clear proof of which service
            touched which record at each step.
          </p>
        </div>
      </FadeInSection>
    </Section>
  );
}
