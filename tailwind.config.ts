import type { Config } from "tailwindcss";

/**
 * CourtSense CJIS — Tailwind v4 scans imports from source.
 * Color tokens, brand.* utilities, and semantic aliases are defined in `app/globals.css`
 * (`@theme inline`, `:root`, `.dark`). This file documents content paths for tooling.
 */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
} satisfies Config;
