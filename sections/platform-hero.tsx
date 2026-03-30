import { CtaButton } from "@/components/cjis/cta-button";
import { brandAssets } from "@/lib/brand-assets";
import { homeHeroBandHeadline } from "@/lib/constants";

export function PlatformHeroSection() {
  return (
    <section className="border-b border-border">
      {/* Height from min/max only (no tight aspect-ratio) so artwork is not over-cropped; object-top keeps header/logo in frame. */}
      <div className="relative w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={brandAssets.hero}
          alt=""
          width={2400}
          height={1000}
          className="block w-full max-h-[min(88vh,920px)] min-h-[260px] object-cover object-top md:min-h-[380px] lg:min-h-[460px]"
          decoding="async"
          fetchPriority="high"
        />
      </div>
      <div className="border-t border-border/60 bg-muted/25">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <h1 className="max-w-5xl text-pretty font-heading text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl md:text-2xl">
            {homeHeroBandHeadline}
          </h1>
          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:justify-start">
            <CtaButton href="/contact" variant="accent">
              Request demo
            </CtaButton>
            <CtaButton href="/platform" variant="outline">
              Explore platform
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
