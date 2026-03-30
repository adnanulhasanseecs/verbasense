import { CtaButton } from "@/components/cjis/cta-button";
import { brandAssets } from "@/lib/brand-assets";
import { heroSupportingLine, heroTitle } from "@/lib/constants";
import Image from "next/image";

export function PlatformHeroSection() {
  return (
    <section className="border-b border-border">
      <div className="relative h-[100svh] w-full overflow-hidden md:h-[min(88vh,920px)]">
        <Image
          src={brandAssets.hero}
          alt="VerbaSense platform hero visual"
          fill
          priority
          unoptimized
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="border-t border-border/60 bg-muted/25">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <h1 className="max-w-4xl text-pretty font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {heroTitle}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {heroSupportingLine}
          </p>
          <div className="mt-8 h-px w-full max-w-3xl bg-border/70" aria-hidden />
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Unified platform engine across judicial, enterprise, and government
            environments—deployed on-premise, private cloud, or approved hybrid.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:justify-start">
            <CtaButton href="/contact" variant="accent">
              Request Technical Demo
            </CtaButton>
            <CtaButton href="/platform" variant="outline">
              Explore Platform
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
