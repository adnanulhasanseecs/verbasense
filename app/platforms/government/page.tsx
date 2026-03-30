import { FadeInSection } from "@/components/cjis/fade-in-section";
import { PlatformVerticalFeatureGrid } from "@/components/vip/platform-vertical-feature-grid";
import { PlatformPageIntro } from "@/components/layout/platform-page-intro";
import { PlatformSubHero } from "@/components/layout/platform-sub-hero";
import { Section } from "@/components/cjis/section";
import { brandAssets } from "@/lib/brand-assets";
import { governmentPlatformFeatures } from "@/lib/platform-vertical-features";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GovSense",
  description:
    "GovSense on VerbaSense: policy discussions, committee tracking, and compliance-oriented records within sovereign or agency-controlled infrastructure.",
};

export default function GovernmentPlatformPage() {
  return (
    <>
      <PlatformSubHero
        imageSrc={brandAssets.governmentPlatformHero}
        alt="GovSense public-sector meeting intelligence"
        priority
      />
      <PlatformPageIntro
        eyebrow="Platform"
        title="GovSense"
        intro="Agencies and legislatures use GovSense on VerbaSense where the conversational record must support policy continuity, oversight, and statutory obligations—without routing sensitive material through unmanaged SaaS."
      />
      <PlatformVerticalFeatureGrid content={governmentPlatformFeatures} />
      <Section>
        <FadeInSection>
          <p className="max-w-3xl text-sm text-muted-foreground">
            Sovereign deployment, accredited data centers, and air-gapped options are
            supported where policy requires. CourtSense remains available as the
            specialized judicial offering on the same platform when courts and
            justice ministries standardize on VerbaSense.
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
