# CourtSense — Master checklist

**Status (2026-03-26):** Implementation matches this checklist. **Unit tests were run:** `npm run test` — **4 test files, 13 tests, all passed** (Vitest v4.1.1). Re-run after changes: `npm run test`.

Canonical checklist for the CJIS website build. **Unit tests are not a separate phase:** they land in **Phase 0** (runner), **Phase 4** (`cn` + `constants`), **Phase 6** (contact schema + form RTL), and **Phase 8** is the **full-suite gate**.

Edit **this file** or the Cursor plan [courtsense_cjis_website_5c2fe54b.plan.md](c:/Users/office/.cursor/plans/courtsense_cjis_website_5c2fe54b.plan.md); flip `[ ]` to `[x]` as tasks complete.

## Master checklist (living document)

Task list syntax: each task line starts with a hyphen and a space, then `[ ]` (unchecked) or `[x]` (checked), then a space and the label.

```markdown
- [ ] Unchecked example
- [x] Checked example
```

### Phase 0 — Tooling

- [x] Vitest + jsdom installed; `vitest.config.ts` uses `environment: 'jsdom'` where needed
- [x] `@/` path alias in Vitest matches `tsconfig.json` paths
- [x] `@testing-library/react` installed (for optional contact form tests in Phase 6)
- [x] `npm run test` passes; `test:watch` (and optional `test:coverage`) scripts exist in `package.json`
- [x] **Unit tests:** runner verified via `lib/utils.test.ts`, `lib/constants.test.ts`, `lib/contact-schema.test.ts`, `components/contact/contact-form.test.tsx` (dedicated smoke test removed once real tests landed)

### Phase 1 — Scaffold

- [x] Next.js dev server runs on **port 3010** (e.g. `"dev": "next dev -p 3010"` in `package.json`)
- [x] `npm run build` passes
- [x] shadcn initialized; `components/ui` present
- [x] lucide-react, framer-motion, (optional) next-themes installed

### Phase 2 — Design system

- [x] CJIS color tokens in CSS variables
- [x] shadcn components match primary/secondary/background
- [x] Inter + Playfair applied in `layout.tsx`

### Phase 3 — Layout

- [x] Sticky navbar with all routes + mobile Sheet
- [x] Footer with institutional columns
- [x] Skip to main content link
- [x] Default `metadata` (title template, description)

### Phase 4 — Primitives

- [x] `Section` with consistent spacing and optional `id`
- [x] `FeatureCard`, `CTAButton`, `TrustBadge`
- [x] `PipelineDiagram` SVG with `aria-label`
- [x] `lib/constants.ts` holds nav + USP + feature data

**Unit tests (same phase)**

- [x] `lib/utils.test.ts` exists; `cn()` merges conflicting Tailwind classes (e.g. padding/margin)
- [x] `cn()` handles conditional / `undefined` / `false` class fragments without throwing
- [x] `lib/constants.test.ts` exists; primary nav includes `/`, `/product`, `/architecture`, `/about`, `/contact` (or strict snapshot)
- [x] No duplicate `href` values in nav items; USP/feature/tier entries have required keys (`id`, `title`, `description`, etc.)

### Phase 5 — Landing

- [x] Hero with USPs and dual CTAs
- [x] Features: document processing, multilingual ASR, face recognition + supporting modules
- [x] Numbered workflow section
- [x] Architecture preview aligned with pipeline
- [x] Use cases, security, hardware, final CTA

### Phase 6 — Pages

- [x] `/product` deep dive (USPs + modules + workflow)
- [x] `/architecture` system + deployment diagram
- [x] `/about` vision / problem / rationale
- [x] `/contact` form + static submission UX + email placeholder

**Unit tests (same phase)**

- [x] `lib/contact-schema.test.ts` (or colocated `*.test.ts`) exists
- [x] Parse rejects empty or whitespace-only **name**, **organization**, **message**
- [x] Parse enforces **minimum message length** (if specified); valid trimmed input **passes** parse
- [x] (Optional) `contact-form.test.tsx`: labels via `getByLabelText`; empty submit shows validation; valid submit `preventDefault` + success path

### Phase 7 — Polish

- [x] Scroll animations respect `prefers-reduced-motion`
- [x] Smooth scroll for in-page anchors
- [x] Per-page `metadata` and Open Graph basics
- [x] Optional dark mode toggles variables correctly

### Phase 8 — QA & docs

- [x] Mobile / tablet / desktop layout reviewed (responsive Tailwind breakpoints in place; re-check before release)
- [x] Keyboard nav + focus visible on interactive elements (skip link + shadcn focus rings; re-check before release)
- [x] `npm run lint` and `npm run build` clean
- [x] `npm run test`: **full suite** zero failures (no watch; CI parity) — **last run: 13 passed**
- [x] Tests do not use the network and do not require the dev server on port 3010
- [x] README documents **install**, **dev on port 3010**, **test**, **deploy** (Vercel)
- [x] `.cursor/rules/courtsense-website.mdc` added
- [x] No external tracking scripts; dependency count sanity check

---
