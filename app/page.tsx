import { LandingCtaSection } from "@/sections/landing-cta";
import { PlatformEngineZigzagSection } from "@/sections/platform-engine-zigzag";
import { PlatformHeroSection } from "@/sections/platform-hero";
import { PlatformOverviewSection } from "@/sections/platform-overview";
import { ProblemStatementSection } from "@/sections/problem-statement";
import { FlowIntelligenceSection } from "@/sections/flow-intelligence";
import { RealWorldDeploymentSection } from "@/sections/real-world-deployment";
import { SampleOutputSection } from "@/sections/sample-output";
import { SecuritySection } from "@/sections/security";
import { VerticalSolutionsSection } from "@/sections/vertical-solutions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VerbaSense Intelligence Platform",
  description:
    "VerbaSense Intelligence Platform converts high-stakes meetings, proceedings, and documents into structured, actionable intelligence for judicial, enterprise, and government teams.",
};

export default function HomePage() {
  return (
    <>
      <PlatformHeroSection />
      <ProblemStatementSection />
      <FlowIntelligenceSection />
      <PlatformOverviewSection />
      <RealWorldDeploymentSection />
      <PlatformEngineZigzagSection />
      <SampleOutputSection />
      <VerticalSolutionsSection />
      <SecuritySection />
      <LandingCtaSection />
    </>
  );
}
