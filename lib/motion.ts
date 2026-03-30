/** Framer Motion defaults that respect reduced-motion preferences. */

/**
 * Do not animate `opacity` from 0 here: Framer applies that state on SSR/hydration, so if
 * `whileInView` never runs (IO quirks, layout, or JS issues), entire sections stay invisible.
 * Subtle Y motion only — content remains readable at rest.
 */
export const fadeInView = {
  initial: { y: 14 },
  whileInView: { y: 0 },
  viewport: { once: true, amount: 0.01, margin: "0px 0px 120px 0px" },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
} as const;

export const staticBlock = {
  initial: false,
  animate: {},
} as const;
