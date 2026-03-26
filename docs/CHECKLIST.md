# CourtSense — Master checklist

Canonical checklist for the CJIS website build. **Unit tests are not a separate phase:** add them in **Phase 0** (smoke), **Phase 4** (`cn` + `constants`), **Phase 6** (contact schema + optional form RTL), and treat **Phase 8** as the **full-suite gate**.

Edit **this file** or the Cursor plan [courtsense_cjis_website_5c2fe54b.plan.md](c:/Users/office/.cursor/plans/courtsense_cjis_website_5c2fe54b.plan.md); flip `[ ]` to `[x]` as tasks complete.

## Master checklist (living document)

Task list syntax: each task line starts with a hyphen and a space, then `[ ]` (unchecked) or `[x]` (checked), then a space and the label.

```markdown
- [ ] Unchecked example
- [x] Checked example
```

### Phase 0 — Tooling

- [ ] Vitest + jsdom installed; `vitest.config.ts` uses `environment: 'jsdom'` where needed
- [ ] `@/` path alias in Vitest matches `tsconfig.json` paths
- [ ] `@testing-library/react` installed (for optional contact form tests in Phase 6)
- [ ] `npm run test` passes; `test:watch` (and optional `test:coverage`) scripts exist in `package.json`
- [ ] **Unit test:** at least one **smoke test** so the runner is verified (remove or narrow as Phase 4/6 tests land)

### Phase 1 — Scaffold

- [ ] Next.js dev server runs on **port 3008** (e.g. `"dev": "next dev -p 3008"` in `package.json`)
- [ ] `npm run build` passes
- [ ] shadcn initialized; `components/ui` present
- [ ] lucide-react, framer-motion, (optional) next-themes installed

### Phase 2 — Design system

- [ ] CJIS color tokens in CSS variables
- [ ] shadcn components match primary/secondary/background
- [ ] Inter + Playfair applied in `layout.tsx`

### Phase 3 — Layout

- [ ] Sticky navbar with all routes + mobile Sheet
- [ ] Footer with institutional columns
- [ ] Skip to main content link
- [ ] Default `metadata` (title template, description)

### Phase 4 — Primitives

- [ ] `Section` with consistent spacing and optional `id`
- [ ] `FeatureCard`, `CTAButton`, `TrustBadge`
- [ ] `PipelineDiagram` SVG with `aria-label`
- [ ] `lib/constants.ts` holds nav + USP + feature data

**Unit tests (same phase)**

- [ ] `lib/utils.test.ts` exists; `cn()` merges conflicting Tailwind classes (e.g. padding/margin)
- [ ] `cn()` handles conditional / `undefined` / `false` class fragments without throwing
- [ ] `lib/constants.test.ts` exists; primary nav includes `/`, `/product`, `/architecture`, `/about`, `/contact` (or strict snapshot)
- [ ] No duplicate `href` values in nav items; USP/feature/tier entries have required keys (`id`, `title`, `description`, etc.)

### Phase 5 — Landing

- [ ] Hero with USPs and dual CTAs
- [ ] Features: document processing, multilingual ASR, face recognition + supporting modules
- [ ] Numbered workflow section
- [ ] Architecture preview aligned with pipeline
- [ ] Use cases, security, hardware, final CTA

### Phase 6 — Pages

- [ ] `/product` deep dive (USPs + modules + workflow)
- [ ] `/architecture` system + deployment diagram
- [ ] `/about` vision / problem / rationale
- [ ] `/contact` form + static submission UX + email placeholder

**Unit tests (same phase)**

- [ ] `lib/contact-schema.test.ts` (or colocated `*.test.ts`) exists
- [ ] Parse rejects empty or whitespace-only **name**, **organization**, **message**
- [ ] Parse enforces **minimum message length** (if specified); valid trimmed input **passes** parse
- [ ] (Optional) `contact-form.test.tsx`: labels via `getByLabelText`; empty submit shows validation; valid submit `preventDefault` + success path

### Phase 7 — Polish

- [ ] Scroll animations respect `prefers-reduced-motion`
- [ ] Smooth scroll for in-page anchors
- [ ] Per-page `metadata` and Open Graph basics
- [ ] Optional dark mode toggles variables correctly

### Phase 8 — QA & docs

- [ ] Mobile / tablet / desktop layout reviewed
- [ ] Keyboard nav + focus visible on interactive elements
- [ ] `npm run lint` and `npm run build` clean
- [ ] `npm run test`: **full suite** zero failures (no watch; CI parity)
- [ ] Tests do not use the network and do not require the dev server on port 3008
- [ ] README documents **install**, **dev on port 3008**, **test**, **deploy** (Vercel)
- [ ] `.cursor/rules/courtsense-website.mdc` added
- [ ] No external tracking scripts; dependency count sanity check

---
