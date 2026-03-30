import { LandingCtaSection } from "@/sections/landing-cta";
import { PlatformEngineZigzagSection } from "@/sections/platform-engine-zigzag";
import { PlatformHeroSection } from "@/sections/platform-hero";
import { PlatformOverviewSection } from "@/sections/platform-overview";
import { VerticalSolutionsSection } from "@/sections/vertical-solutions";
import { WhyVerbaSenseSection } from "@/sections/why-verbasense";

export default function HomePage() {
  return (
    <>
      <PlatformHeroSection />
      <PlatformOverviewSection />
      <VerticalSolutionsSection />
      <WhyVerbaSenseSection />
      <PlatformEngineZigzagSection />
      <LandingCtaSection />
    </>
  );
}
