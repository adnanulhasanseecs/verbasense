import { FadeInSection } from "@/components/cjis/fade-in-section";
import { PlatformVerticalFeatureGrid } from "@/components/vip/platform-vertical-feature-grid";
import { PlatformPageIntro } from "@/components/layout/platform-page-intro";
import { PlatformSubHero } from "@/components/layout/platform-sub-hero";
import { Section } from "@/components/cjis/section";
import { brandAssets } from "@/lib/brand-assets";
import { enterprisePlatformFeatures } from "@/lib/platform-vertical-features";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EnterpriseSense",
  description:
    "EnterpriseSense on VerbaSense: board and executive meeting intelligence, action tracking, and decision logging with enterprise security.",
};

export default function EnterprisePlatformPage() {
  return (
    <>
      <PlatformSubHero
        imageSrc={brandAssets.enterprisePlatformHero}
        alt="EnterpriseSense board and executive intelligence"
        priority
      />
      <PlatformPageIntro
        eyebrow="Platform"
        title="EnterpriseSense"
        intro="EnterpriseSense applies VerbaSense to boards, executive committees, and regulated enterprises that need faithful records of high-stakes conversation—without storing sensitive audio in consumer-grade tools."
      />
      <PlatformVerticalFeatureGrid content={enterprisePlatformFeatures} />
      <Section>
        <FadeInSection>
          <p className="max-w-3xl text-sm text-muted-foreground">
            Deployment follows your security model: on-premise appliances, private
            cloud tenancy, or approved hybrid connectivity. Integration with
            identity providers and document systems is scoped during technical
            discovery.
          </p>
          <p className="mt-8 text-sm">
            <Link
              href="/platform"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Platform overview
            </Link>
            {" · "}
            <Link
              href="/contact"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Contact
            </Link>
          </p>
        </FadeInSection>
      </Section>
    </>
  );
}
