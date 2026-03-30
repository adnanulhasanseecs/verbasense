"use client";

import { brandAssets } from "@/lib/brand-assets";
import { cn } from "@/lib/utils";

const variants = {
  nav: {
    src: brandAssets.logoNav,
    cropClass:
      "relative flex shrink-0 items-center justify-start min-w-0 max-w-[min(100%,280px)]",
    imgClass:
      "h-9 w-auto max-h-9 object-contain object-left md:h-12 md:max-h-12 lg:h-14 lg:max-h-[3.5rem]",
  },
  hero: {
    src: brandAssets.logoNav,
    cropClass: "relative w-full max-w-[min(100%,320px)]",
    imgClass: "h-auto w-full object-contain object-left",
  },
  footer: {
    src: brandAssets.logoFooter,
    cropClass:
      "relative flex shrink-0 items-center justify-start min-w-0 max-w-[240px]",
    imgClass:
      "h-8 w-auto max-h-8 object-contain object-left md:h-10 md:max-h-10",
  },
} as const;

/**
 * Native <img> avoids next/image optimization (Sharp) which can return 400 for some WebP/PNG inputs.
 */
export function BrandLogo({
  variant,
  className,
  priority,
}: {
  variant: keyof typeof variants;
  className?: string;
  priority?: boolean;
}) {
  const v = variants[variant];
  return (
    <div className={cn(v.cropClass, className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={v.src}
        alt="VerbaSense Intelligence Platform"
        width={240}
        height={72}
        className={v.imgClass}
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
      />
    </div>
  );
}
