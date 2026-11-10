# Clone `electricians.html` → Next.js + Tailwind + Framer Motion

## Objective

Rebuild `newpages/electricians.html` as the new **`/website-for-electricians`**
route (and **`/nl/website-voor-elektriciens`**), replacing what is there today.

**All copy comes from the HTML, letter by letter.** Design is borrowed from
existing pages; content never is. If a string in your output does not exist in
`electricians.html`, it is wrong.

---

## 1. Read these first

### The source file

`newpages/electricians.html` is ~610 KB (~370 KB once images are stripped).
Strip the base64 data URIs into a scratch copy before reading:

```bash
awk '{ gsub(/data:image\/[^")'"'"' ]{200,}/, "[[BASE64]]"); print }' \
  "newpages/electricians.html" > "$SCRATCH/elec_stripped.html"
```

Then pretty-print the markup block so it is readable:

```bash
awk 'NR>=1917 && NR<=1946' "$SCRATCH/elec_stripped.html" \
  | sed 's/></>\n</g' > "$SCRATCH/elec_markup.txt"
```

| What | Where (in the stripped copy) |
| --- | --- |
| Page markup — all 12 sections | lines **1917–1946** |
| `:root` palette (first pass) | line **239** |
| `:root` palette (**final — this one wins**) | line **299** |
| `.industry-page` / `.in-*` section CSS | grep the selectors |
| Interactive scripts | lines **1950–2076** |

`<body class="industry-page">` — a single class, no second override class.

Use `Grep` with `multiline: true` for CSS rules. Lines are minified and can be
thousands of characters long, so grep for the selector rather than reading the
line.

### ⚠️ The page rewrites itself at runtime

Two `<script>` blocks run on load. Read them (lines 1950–2076) **before**
building, and reproduce their *result*, not the static markup:

| Script | Effect |
| --- | --- |
| `activateTab()` + `audiences` | Audience tabs swap image, category, heading, description |
| `[data-billing]` handler | Billing toggle rewrites price, period, detail and saving |
| `[data-offer-version]` | Offer layout A/B switch |
| `projects` map | Project label swapping |
| `featureDetails` loop | Rewrites `.feature-copy` paragraphs and list items |
| Nav "Designs" injector | Appends a nav link — **ignore**, the navbar is not yours |

The `featureDetails` loop **does** apply here (`.feature-copy` appears 27 times
in the markup), so the copy it assigns is the real copy. Verify each section
against the post-script state.

### The repo files you must reuse

| File | Why |
| --- | --- |
| `app/components/sections/pricing/BillingCard.tsx` | **Screenshot 1** — the tabbed price card |
| `app/components/sections/home2/Solution.tsx` | **Screenshot 2** — the two duo cards (`CARD_SHELL`) |
| `app/components/sections/home2/FaqAccordion.tsx` | FAQ styling for the Questions section |
| `app/components/sections/featureIcons.ts` | The shared feature-row glyphs |
| `app/components/ui/ArrowIcon.tsx` | The arrow SVG — never re-draw it |
| `app/globals.css` **~line 608** | `.arrow-cta` — the hover lift + arrow swap |
| `app/globals.css` **lines 166–177** | `.fix` container primitive |
| `app/features/FeatureReveal.tsx` | `RevealGroup` / `RevealItem` / `RevealWords` |
| `app/features/animationStyle.md` | How the animation switch works |
| `app/features/page.tsx` | Route pattern: server `page.tsx` + client shell |

---

## 2. Navbar and footer — do not build them

The source HTML ships its own `<header class="legacy-nav">` and
`<footer class="legacy-footer">`. **Ignore both.**

The repo's `Navbar` and `Footer` are already rendered by `app/layout.tsx`, and
`/features` relies on that. Build only the `<main>` content, exactly as
`app/features/FeaturesClient.tsx` does.

Do not port the source's skip link, mobile menu, language button or ticker
strip.

---

## 3. Page structure — 12 sections

In source order (line numbers are in the stripped copy):

| # | Source selector | Suggested component |
| --- | --- | --- |
| 1 | `section.in-hero.in-panel` | `ElecHero.tsx` |
| 2 | `section.in-open.in-intro` | `ElecIntro.tsx` |
| 3 | `#industry-package .offer-section` | `ElecOffer.tsx` — **duo cards, screenshot 2** |
| 4 | `#industry-workflow .in-workflow-cards` | `ElecWorkflow.tsx` |
| 5 | `#industry-local .in-personalised` | `ElecLocal.tsx` |
| 6 | `#industry-pricing .in-pricing` | `ElecPricing.tsx` — **billing card, screenshot 1** |
| 7 | `#industry-designs .in-dark-designs` | `ElecDesigns.tsx` |
| 8 | `#industry-launch .how-section` | `ElecLaunch.tsx` |
| 9 | `#industry-call .pricing-teaser-section` | `ElecCall.tsx` |
| 10 | `#industry-faq .in-faq` | `ElecFaq.tsx` — **home2 FAQ styling** |
| 11 | `#industry-guide .in-planning-blogs` | `ElecGuide.tsx` |
| 12 | `section.in-panel.in-close` | `ElecClose.tsx` |

Preserve every `id` — the in-page anchors depend on them: `#industry-package`,
`#industry-workflow`, `#industry-local`, `#industry-pricing`,
`#industry-designs`, `#industry-launch`, `#industry-call`, `#industry-faq`,
`#industry-guide`.

Sections 8 and 11 repeat a card three times each — build one component and map
over a typed array. Do not copy-paste.

### Route files

```
app/website-for-electricians/page.tsx            → server component, metadata
app/website-for-electricians/ElectricianClient.tsx → "use client" shell
app/website-for-electricians/<Section>.tsx       → one per section
app/website-for-electricians/data.ts             → all copy, typed
app/nl/website-voor-elektriciens/page.tsx        → NL metadata, same client
```

Delete the current `BrandProofSec.tsx` and `PillarSec.tsx` once nothing imports
them. Check first — do not leave dead files, and do not delete anything another
route still uses.

**NL uses the English page for now.** Import the same client component (as
`app/nl/website-voor-elektriciens/page.tsx` already does) and give it Dutch
`metadata` only. Do not translate the body copy.

---

## 4. Buttons — reuse the existing system

### The arrow

Every CTA arrow is `ArrowIcon` from `app/components/ui/ArrowIcon.tsx`. Never
re-draw the path `M1 13L13 1M13 1H5M13 1V9`, and never substitute a different
glyph — the source's `↗`, `→` and `▶` characters are all replaced by
`ArrowIcon`.

The hover swap is driven by **`.arrow-cta`** in `globals.css`, which applies the
same two-slot animation `.btn` uses:

```
slot one → translate(var(--tx-out), var(--ty-out)), opacity 0
slot two → translate(0, 0), opacity 1
transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)
```

### The pattern to copy

The yellow-section CTA in `BillingCard.tsx:133-139` is the reference:

```tsx
<a
  href="#contact"
  className="arrow-cta mt-[10px] flex min-h-[46px] w-fit items-center justify-between gap-[8px] rounded-full border border-transparent bg-[#e4fa65] px-[16px] py-[11px] font-sans text-[12px] leading-[1.35] font-semibold text-[#0a0516] transition-colors hover:bg-white md:min-h-[52px] md:px-[20px] md:py-[14px] md:text-[14px]"
>
  Get started with Growth Rocket
  <ArrowIcon direction="up-right" size={18} />
</a>
```

**Geometry to match** (pill, from the existing pages — not the source HTML):

| Property | Value |
| --- | --- |
| Radius | `rounded-full` |
| Min height | `46px` → `52px` at `md` |
| Padding | `16px / 11px` → `20px / 14px` at `md` |
| Font | `font-sans`, `600`, `12px` → `14px` at `md` |
| Arrow size | `18` |
| Border | `1px solid transparent` |

Take **colours** from the electricians page, geometry and motion from the
pattern above. `ArrowIcon` accepts a `size` prop for use outside `<Button>`.

---

## 5. The three borrowed components

Clone the **design**; fill with **source copy**.

### 5a. Billing card — screenshot 1

Source: `app/components/sections/pricing/BillingCard.tsx`.

The electricians page has the same annual/monthly toggle driven by
`[data-billing]`. Its numbers match: `€990` → `€690` / year, `+ €290` one-time
onboarding, `€69` / month. Confirm every string against the source's
`[data-price-*]` and `[data-billing-*]` nodes and its FAQ answer ("What will I
pay to get started?"), which states the same figures.

Keep: the `#262626` pill track, white selected state, lime `Save 17%` badge, the
`#ed6acb` strike rule on the old price, `aria-live="polite"` on the price block.

Reuse the component if the copy is genuinely identical; otherwise copy it into
the route and swap only the strings. **Do not edit the pricing page's own copy.**

### 5b. Duo cards — screenshot 2

Source: `app/components/sections/home2/Solution.tsx` (`CARD_SHELL`, `FeatureIcon`).

Two side-by-side cards with a `+` medallion between them:

- **Left** — deep `#0a0516`, lime accent on the highlighted word
- **Right** — purple `#5b2dce`, white icon tiles
- Feature rows separated by `border-t border-[#ffffff29]`, each with an icon
  tile and a label

Source content is under `#industry-package` — `#website-heading`
("Your **website**, made for your electrical business.") and `#hub-heading`.
Take the rows from the source's `.feature-copy` lists, **after** the
`featureDetails` script has rewritten them.

Reuse `FEATURE_ICON_PATHS` from `app/components/sections/featureIcons.ts` rather
than inlining new SVGs.

### 5c. FAQ — home2 styling

Source: `app/components/sections/home2/FaqAccordion.tsx`.

It already accepts an `items` prop:

```tsx
export default function FaqAccordion({
  onBookClick,
  items,
}: { onBookClick?: () => void; items?: FaqEntry[] } = {})
```

So pass the electricians questions and change nothing else:

```ts
import type { FaqEntry } from "@/app/lib/faqs";

export const ELECTRICIAN_FAQS: FaqEntry[] = [
  {
    question: { en: "Is Growth Rocket just an electrician website?", nl: "…" },
    answer: { paragraphs: [{ en: "Your professional website is one part…", nl: "…" }] },
  },
  // …7 total
];
```

`FaqEntry` / `FaqAnswer` are exported from `app/lib/faqs.ts:301-309`. Entries are
`Translation` objects (`{ en, nl }`) — for now put the English string in both
fields, since NL reuses the English page.

The source has **7** questions under `#industry-faq`. Copy all seven verbatim,
including the heading "Questions from **electrical businesses.**" and the
sub-line "Clear answers before you get started."

Keep the component's one-open-at-a-time behaviour and its sticky left column.

---

## 6. Hard constraints

### CSS

- **No edits to `app/globals.css`.** `.arrow-cta`, `.btn`, `.fix` are consumed
  as-is.
- **No new `.css` / `.module.css` files.**
- **No inline `style={{ }}`**, except a background `url()` for an extracted
  image where no Tailwind arbitrary value works. Prefer `next/image`.
- **No `<style jsx>`, no `dangerouslySetInnerHTML`.**

### Layout

- **No CSS Grid.** No `grid`, `grid-cols-*`, `col-span-*`, `row-span-*`,
  `grid-flow-*`, `place-items-*`. The source uses `display: grid` on `.in-hero`,
  `.in-faq` and the offer section — rebuild those with **flexbox**.
  *(Note: the borrowed `FaqAccordion` uses grid internally. Reusing it unchanged
  is fine — the rule governs the markup you write.)*
- **No `flex-1`, `flex-auto`, `flex-[0.5]`, `basis-*`.** Size every flex child
  with an explicit width: `w-[52%]`, `w-1/2`, `w-full`. `shrink-0` / `grow-0`
  are fine as guards.
- **Containers use `.fix`** — full-bleed `<section>` + inner `<div className="fix">`.
  No `max-w-7xl`, no `container`, no `mx-auto` as a section's centering
  mechanism. `max-w-*` is allowed only as a text measure *inside* a container.

### Code quality

- TypeScript throughout, typed props, **no `any`**.
- All copy in a typed `data.ts`, not inline in JSX.
- No dead code, no commented-out blocks, no `TODO`s, no unused imports.
- Semantic HTML: exactly one `<h1>` (the hero), `<h2>` per section. Keep all
  section `id`s.
- Meaningful names — `ElecPricing`, not `Section6`.
- Sparse comments, matching the repo's density.

---

## 7. Fonts

Same two families as every other page, already wired in `app/layout.tsx`:

- **Bricolage Grotesque** → all headings — `font-bricolage`
- **Inter** → body, buttons, nav — `font-sans`

**Never** declare `font-family`. **Never** add a Google Fonts `<link>`.

Source heading scale — verify each section's own clamp before using it:

```css
h1 / section h2 → clamp values live in the .in-* rules; read them
```

---

## 8. Colour palette

From the source's **final** `:root` (line 299 overrides line 239 — both are
unscoped, so the later one wins):

```
--in-ink:     #0a0516   (deep)
--in-purple:  #5b2dce   (brand — NOT #5b219f)
--in-lime:    #e4fa65
--in-gray:    #eeeef0
--gr-text-muted:         #625a70
--gr-text-inverse-muted: #c9c2d4
--gr-line:               #ded8e7
```

`--gr-brand-ink` and `--gr-brand-surface` also resolve to **`#5b2dce`** at line
299. Do not use `#5b219f` or the gradient from line 239 — they are overridden.

Prefer an existing theme token where the hex matches exactly (`--color-haiti` is
`#0a0516`); verify before substituting.

---

## 9. Section shells

```css
.in-panel { border-radius: 13px; padding: 60px clamp(24px,5vw,80px); margin-bottom: 14px }
.in-open  { padding: 66px clamp(24px,5vw,80px) }
.in-open  { padding-inline: max(80px, calc((100vw - 1350px)/2)) }   /* wider rule */
.in-hero  { background: var(--in-ink); color: white; min-height: 540px; padding: 0 }
.in-close { background: var(--in-lime); display: flex; justify-content: space-between }
```

Narrow overrides (verify the exact breakpoints in the source):

```css
.in-panel { padding: 34px 22px }
.in-open  { padding: 44px 22px }
.in-hero  { padding: 0; min-height: 0 }   /* single column */
.in-faq   { gap: 35px }
.in-close { gap: 25px }
```

Let `.fix` own the horizontal rhythm; keep the source's vertical padding and the
`13px` radius. Do not apply both the source's horizontal padding and `.fix` —
that double-insets the content.

---

## 10. Responsive behaviour

Extract every `@media` from the source and express it with Tailwind prefixes.
Breakpoints are **custom** — use arbitrary variants (`max-[900px]:`,
`max-[600px]:`) to land on the same pixel values rather than substituting
Tailwind's `sm:` / `md:` where that would shift the layout.

---

## 11. Animation

Use the shared system in `app/features/FeatureReveal.tsx` — do not write new
variants:

```tsx
<RevealGroup className="w-[52%]">
  <RevealItem as="p">{kicker}</RevealItem>
  <h2><RevealWords text={heading} accent={accent} accentClassName={accentCls} /></h2>
  <RevealItem as="p">{intro}</RevealItem>
</RevealGroup>
```

Add the page-level switch, exactly as `app/features/page.tsx` does:

```tsx
const animationStyle: AnimationStyle = "stagger";  // or "simple"
…
<ElectricianClient animationStyle={animationStyle} />
```

and wrap the client shell's tree in `<AnimationStyleProvider value={animationStyle}>`.
Set the same value in **both** locale routes. Full reference:
`app/features/animationStyle.md`.

All components already honour `useReducedMotion()`.

---

## 12. Images

Source images are inlined base64. Extract each to `public/electricians/` as a
real file and reference with `next/image`, with explicit `width`/`height` (or
`fill` with a sized parent) so nothing shifts.

Note the audience-tab script references `assets/<name>.webp` paths that **do not
exist** in this repo — those are dead links in the source. Extract the inlined
images instead, and if a tab image genuinely has no asset, say so rather than
inventing one.

---

## 13. Definition of done

- [ ] Route renders all 12 sections in source order with original `id`s
- [ ] **Every string traceable to `electricians.html`** — no home2 / pricing /
      features copy anywhere
- [ ] Navbar and footer come from `app/layout.tsx`; none built here
- [ ] Billing card matches screenshot 1; duo cards match screenshot 2; FAQ uses
      home2 styling
- [ ] All arrows are `ArrowIcon`; all CTAs carry `.arrow-cta`; pill geometry
      matches §4
- [ ] Zero `globals.css` edits, zero new CSS files, zero inline `style`
- [ ] Zero `grid` / `col-span` / `flex-1` / `basis-*` in **your** markup
- [ ] Every section container is `.fix`
- [ ] `font-bricolage` headings, `font-sans` body; no `font-family` declared
- [ ] `#5b2dce` used as brand purple (not `#5b219f`)
- [ ] `/website-for-electricians` and `/nl/website-voor-elektriciens` both 200
- [ ] Old `BrandProofSec.tsx` / `PillarSec.tsx` removed if now unused
- [ ] `npx tsc --noEmit` clean, `npx eslint app` clean, `npx next build` succeeds
- [ ] Compared against the source at 1920 / 1280 / 900 / 600 / 375 px
