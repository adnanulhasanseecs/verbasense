import { FadeInSection } from "@/components/cjis/fade-in-section";
import { Heading } from "@/components/cjis/heading";
import { Section } from "@/components/cjis/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "VerbaSense legal references for Privacy Policy and Terms of Service.",
};

export default function LegalPage() {
  return (
    <>
      <Section className="border-b border-border pb-12 pt-12" surface="elevated">
        <Heading level={1}>Legal</Heading>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          This page provides standard legal references for privacy, data handling,
          service usage, and acceptable use. Final contractual language is agreed
          during procurement and onboarding.
        </p>
      </Section>

      <Section id="privacy-policy">
        <FadeInSection>
          <Heading level={2}>Privacy Policy</Heading>
          <div className="mt-6 max-w-4xl space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              VerbaSense processes data under customer direction and according to
              agreed deployment boundaries (on-premise, private cloud, or approved
              hybrid environments). We do not sell personal data.
            </p>
            <p>
              Access controls, encryption, and audit trails are configured to align
              with institutional security policy. Retention periods and deletion
              schedules are customer-defined and documented during implementation.
            </p>
            <p>
              For operational support, only authorized personnel may access diagnostic
              metadata necessary to maintain service continuity. Any elevated access
              is governed by least-privilege procedures and logged for review.
            </p>
          </div>
        </FadeInSection>
      </Section>

      <Section id="terms-of-service" surface="muted">
        <FadeInSection>
          <Heading level={2}>Terms of Service</Heading>
          <div className="mt-6 max-w-4xl space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              VerbaSense services are provided for authorized institutional use under
              signed commercial agreements. Customers are responsible for lawful data
              ingestion, user access governance, and policy compliance.
            </p>
            <p>
              Platform capabilities, service levels, and support commitments are
              defined in the applicable order form and master agreement. Unauthorized
              reverse engineering, abuse, or security circumvention is prohibited.
            </p>
            <p>
              Product updates may improve security, reliability, and model quality
              without reducing agreed controls. Material legal terms, including
              liability, indemnity, and jurisdiction, are governed by the signed
              contract.
            </p>
          </div>
        </FadeInSection>
      </Section>
    </>
  );
}
