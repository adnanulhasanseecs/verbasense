/**
 * VerbaSense VIP assets under public/brand/.
 * Run: node scripts/convert-vip-assets.mjs after adding PNG sources.
 */
export const brandAssets = {
  hero: "/brand/hero-image-vip.webp",
  logoNav: "/brand/verbaSense-Logo-transparent.webp",
  logoFooter: "/brand/verbaSense-Logo-transparent.webp",
  /** CourtSense / judicial platform page hero. */
  judicialPlatformHero: "/brand/hero-cjis.webp",
  enterprisePlatformHero: "/brand/enterpriseSense-vip.webp",
  governmentPlatformHero: "/brand/govSense-vip.webp",
} as const;

/** Vertical solution cards: same art as each platform hero (brand/visual continuity). */
export const verticalCardHeroImage: Record<
  "judicial" | "enterprise" | "government",
  string
> = {
  judicial: brandAssets.judicialPlatformHero,
  enterprise: brandAssets.enterprisePlatformHero,
  government: brandAssets.governmentPlatformHero,
};
