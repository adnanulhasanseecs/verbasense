import { FadeInSection } from "@/components/cjis/fade-in-section";
import { PlatformVerticalFeatureGrid } from "@/components/vip/platform-vertical-feature-grid";
import { PlatformPageIntro } from "@/components/layout/platform-page-intro";
import { PlatformSubHero } from "@/components/layout/platform-sub-hero";
import { Section } from "@/components/cjis/section";
import { brandAssets } from "@/lib/brand-assets";
import { courtsenseProductName } from "@/lib/constants";
import { judicialPlatformFeatures } from "@/lib/platform-vertical-features";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CourtSense",
  description:
    "CourtSense on VerbaSense: courtroom transcription, evidence-aligned records, and secure judicial workflows.",
};

export default function JudicialPlatformPage() {
  return (
    <>
      <PlatformSubHero
        imageSrc={brandAssets.judicialPlatformHero}
        alt="CourtSense judicial proceedings"
        priority
      />
      <PlatformPageIntro
        eyebrow="Platform"
        title="CourtSense"
        intro={`${courtsenseProductName} is the judicial vertical on VerbaSense VIP—purpose-built for courts, tribunals, and justice institutions that require an accurate, defensible record.`}
      />
      <PlatformVerticalFeatureGrid content={judicialPlatformFeatures} />
      <Section>
        <FadeInSection>
          <p className="max-w-3xl text-sm text-muted-foreground">
            Deployment follows your security model: on-premise appliances, private
            cloud tenancy, or approved hybrid connectivity. Integration with
            identity providers and case management systems is scoped during technical
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
