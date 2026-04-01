import { CtaButton } from "@/components/cjis/cta-button";
import { brandAssets } from "@/lib/brand-assets";
import {
  heroAuthorityLine,
  heroOutcomeLine,
  heroSupportingLine,
  heroTitle,
} from "@/lib/constants";
import Image from "next/image";

export function PlatformHeroSection() {
  return (
    <section className="border-b border-border">
      <div className="relative w-full overflow-hidden bg-brand-navy">
        <Image
          src={brandAssets.hero}
          alt="VerbaSense platform hero visual"
          width={2400}
          height={1350}
          priority
          unoptimized
          className="h-auto w-full object-contain object-top"
          sizes="100vw"
        />
      </div>
      <div className="border-t border-border/60 bg-muted/25">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <h1 className="max-w-4xl text-pretty font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {heroTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {heroSupportingLine}
          </p>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/90 sm:text-lg">
            {heroOutcomeLine}
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/85 sm:text-base">
            {heroAuthorityLine}
          </p>
          <div className="mt-8 h-px w-full max-w-3xl bg-border/70" aria-hidden />
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Unified platform engine across judicial, enterprise, and government
            environments—deployed on-premise, private cloud, or approved hybrid.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 sm:justify-start">
            <CtaButton href="/contact" variant="accent">
              Request Technical Demonstration
            </CtaButton>
            <CtaButton href="/platform" variant="outline">
              Explore Platform
            </CtaButton>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Suitable for judicial, enterprise, and government deployments.
          </p>
        </div>
      </div>
    </section>
  );
}
