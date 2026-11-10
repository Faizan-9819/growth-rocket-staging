# Industry pages — implementation plan

Build one landing page per industry, using the same layout as
`/website-for-electricians`. Only the copy changes. Nothing has been implemented
yet; this file is the plan to review first.

## Goal

- Same layout, components, section order, anchors, animation and styling as
  [app/website-for-electricians/](app/website-for-electricians/).
- Copy comes from the PDFs in [content/seprate-pages/](content/seprate-pages/).
  Each PDF has an English version followed by a Dutch one.
- Images: we don't have industry photos yet, so every page uses the electrician
  images:
  - Hero: `/electricians/hero-distribution-board.webp`
  - Local presence: `/electricians/placeholder.webp`

  Alt text still comes from each PDF ("Image alt text" table at the end). When
  real photos arrive, update the alt text to match them.
- Each page is published in EN and NL, as electricians is
  (`/website-for-electricians` and `/nl/website-voor-elektriciens`).

## Pages to build

The 9 content files and the routes they map to. The EN routes follow the
electrician convention: a root-level `/website-for-…`. The docs suggest these
routes too, apart from plumbers (see open question 2). The NL slugs are
proposals, because every doc says "confirm before publishing".

| # | Source PDF | EN route | NL route (proposed) | Audience card |
|---|---|---|---|---|
| 02 | Plumbers | `/website-for-plumbers` | `/nl/website-voor-loodgieters` | Plumbers |
| 03 | Cleaning Businesses | `/website-for-cleaning-businesses` | `/nl/website-voor-schoonmaakbedrijven` | Cleaning services |
| 04 | Consultants | `/website-for-consultants` | `/nl/website-voor-consultants` | Consultants |
| 05 | Accountants | `/website-for-accountants` | `/nl/website-voor-accountants` | Accountants |
| 06 | Hairdressers and Salons | `/website-for-hair-salons` | `/nl/website-voor-kappers-en-salons` | Beauty & wellbeing |
| 07 | Coaches | `/website-for-coaches` | `/nl/website-voor-coaches` | — (no card) |
| 08 | Healthcare Professionals | `/website-for-healthcare-professionals` | `/nl/website-voor-zorgverleners` | — (no card) |
| 09 | Handyman Businesses | `/website-for-handyman-businesses` | `/nl/website-voor-klusbedrijven` | — (no card) |
| 10 | Professional Services | `/website-for-professional-services` | `/nl/website-voor-zakelijke-dienstverleners` | — (no card) |

[Audience.tsx](app/components/sections/home2/Audience.tsx) has 6 cards:
Electricians (already done) plus the 5 cards marked above. Docs 07–10 have no
card (see open question 1).

## Architecture

### Current state

- `ElectricianClient.tsx` renders 12 section components (`ElecHero` …
  `ElecClose`).
- Every section reads its copy through `useElecCopy()`, which returns
  `ELEC_COPY[locale]` from [data.ts](app/website-for-electricians/data.ts). The
  copy type is `ElecCopy`.
- There are four electrician-specific values that are not copy:
  1. Hero image path ([ElecHero.tsx:129](app/website-for-electricians/ElecHero.tsx#L129))
  2. Local-presence image path ([ElecLocal.tsx:17](app/website-for-electricians/ElecLocal.tsx#L17))
  3. The design templates, filtered by `category === "electrician"`
     ([ElecDesigns.tsx:11](app/website-for-electricians/ElecDesigns.tsx#L11))
  4. Guide card hrefs, which point to electrician blog posts (inside `data.ts`)

### Proposed change: one shared layout plus a copy file per industry

We don't want 9 copies of the 17 component files, so the copy becomes a value
passed in from outside rather than an import:

1. **Move the section components into a shared folder**, `app/industry/`:
   - `ElecHero` becomes `IndustryHero`, `ElecOffer` becomes `IndustryOffer`,
     and so on.
   - `ElectricianClient` becomes `IndustryClient`.
   - Markup and classes are not changed.
2. **Add a copy context**, `IndustryCopyProvider` and `useIndustryCopy()`, to
   replace `useElecCopy()`. `IndustryClient` takes a `copy: Record<Locale,
   IndustryCopy>` prop and provides `copy[locale]`.
3. **`IndustryCopy` = today's `ElecCopy` type, with a few additions:**
   - `HERO.image`, `HERO.imageClass` (object-position) and `LOCAL.image`. Every
     page sets these to the electrician images for now.
   - `DESIGNS.templateCategories: string[]`, which replaces the hard-coded
     `"electrician"` filter.
   - `GUIDE.cards[].href` becomes optional. A card without an href renders
     without the "Read the guide" link, so no dead links (the docs require
     this).
4. **Shared copy goes in `app/industry/shared.ts`.** These blocks are
   identical on every page:
   - the Hub card
   - `BILLING`, `BILLING_UI` and `SETUP_FEE`
   - `LAUNCH`
   - `CALL`
   - `CLOSE`
   - the pricing ticks
   - hero price/meta/footnote
   - the package bar

   Each industry file spreads these in, so a price change is made in one place.
   While transcribing, check each doc's "shared" sections against these values
   and flag any difference rather than silently overwriting it.
5. **Electricians moves onto the shared layout:**
   - `app/website-for-electricians/data.ts` keeps its copy and exports it as
     `IndustryCopy`.
   - Both electrician `page.tsx` files render `<IndustryClient
     copy={ELEC_COPY} />`.
   - The page must render pixel-identical to today. Check this before building
     any new page.
6. **Per-industry folder.** Each industry gets a folder in the same shape as
   electricians:

   ```
   app/website-for-plumbers/
     data.ts      // PLUMBER_COPY: Record<Locale, IndustryCopy>
     page.tsx     // metadata + JsonLd + <IndustryClient copy={PLUMBER_COPY} />
   app/nl/website-voor-loodgieters/
     page.tsx     // NL metadata, same client
   ```

## Content mapping: PDF section to copy key

Every PDF uses the same 14-block structure. The tables have three columns:
"Electrician reference", then the industry EN or NL copy. **Take the industry
column only.**

| PDF section | Copy key | Notes |
|---|---|---|
| SEO head (Title / Meta description) | `page.tsx` `TITLE` / `DESCRIPTION` | EN and NL separately |
| 1. Hero | `HERO` | Eyebrow becomes `kicker` (uppercase in EN, as electricians is). H1 line 1 becomes `heading`; line 2 becomes `headingAccent`. Support lines become `benefits[]`. Button 2 becomes `textLink.label`. Skip the sign-off lines ("You take care of… / We take care of…"): the electrician page doesn't render them, and the layout stays the same |
| 2. Breadcrumb | `HERO.breadcrumbCurrent` | |
| 3. On-page nav | `JUMP_LINKS` | Same five links as electricians |
| 4. Problem intro | `INTRO` | `/` in the H2 means a line break, so use the `headingAccent` array |
| 5. What's included | `OFFER` | Intro, website card H3 (split into lead/highlight/tail like electricians), subline, 7 items, footer. Hub card and package bar are shared |
| 6. Workflow | `WORKFLOW` | H2 becomes `headingParts`; Scenario becomes `start`. Steps 1–3 become `steps[].lines`, with `/` as the line breaks. Use `**bold**` on the same phrase positions electricians bolds. Note becomes `note` |
| 7. Local presence | `LOCAL` | H2 lines, paragraph becomes `intro`, list items 1–8 become `checks`, closing line becomes `small`, local photo alt becomes `photoAlt` |
| 8. Pricing | `PRICING` | Only the intro differs; the rest is shared |
| 9. Website designs | `DESIGNS` | H2 lines, paragraph, caption becomes `small`, plus `templateCategories` (see below) |
| 10. Launch | `LAUNCH` (shared) | |
| 11. Package CTA band | `CALL` (shared) | |
| 12. FAQ | `FAQ` + `FAQ_ITEMS` | Question and answer only; ignore the "Search query" column. The item count varies by doc. FAQ JSON-LD is already built from `FAQ_ITEMS`, so it matches the visible answers, as the docs require |
| 13. Guides | `GUIDE` | H2, subline, 3 cards (label becomes `topic`, plus title and summary). No `href` until the article exists |
| 14. Closing CTA | `CLOSE` (shared) | |
| Footer | — | The site footer is already shared; no change |
| Image alt text | `HERO.photoAlt`, `LOCAL.photoAlt` | |

Extraction tip: run `pdftotext` on the PDFs. It's available in Git Bash. It
gives text, but the table columns come out interleaved, so check each value
against the PDF.

### Designs section per industry

`ElecDesigns` renders real templates from
[templates-data.ts](app/designs/templates-data.ts), filtered by category.
Categories that exist today:

| Industry | `templateCategories` | Templates today |
|---|---|---|
| Plumbers | `["plumber"]` | 5 |
| Cleaning | `["Cleaning"]` | 2 |
| Hair & salons | `["salon"]` | 1 |
| Healthcare | `["dentist", "physiotherapy"]` | 2 |
| Consultants, Accountants, Coaches, Handyman, Professional services | — | 0 |

Hero "Explore … designs" link:
- Industries with templates link to `/design/<industry-slug>`.
- Industries without templates link to `/design`.

For industries with 0 templates, see open question 4.

## Wiring per page (checklist)

For each new industry:

- [ ] `app/website-for-<x>/data.ts` with EN and NL copy
- [ ] `app/website-for-<x>/page.tsx`, built from the electrician `page.tsx`:
  - metadata: title, description, `socialMeta`
  - canonical + hreflang `alternates`
  - `buildPageSchema` + FAQ JSON-LD
  - `animationStyle = "stagger"`
- [ ] `app/nl/website-voor-<x>/page.tsx` (NL title/description; the canonical
      is the NL URL)
- [ ] [locale-href.ts](app/i18n/locale-href.ts): add the EN-to-NL slug to
      `NL_SLUG_MAP`
- [ ] [SiteFooter.tsx](app/components/SiteFooter.tsx): add both slugs to
      `NO_CONTACT_CTA`. The page closes on its own CTA, as electricians does
- [ ] [sitemap-pages.ts](app/lib/sitemap-pages.ts): add to `STATIC_PAGES`
      (`0.9`, `weekly`)
- [ ] [llms.txt/route.ts](app/llms.txt/route.ts): add a line
- [ ] [Audience.tsx](app/components/sections/home2/Audience.tsx): add `href` to
      the matching card. The mobile and desktop links are already wired to
      `trade.href`

## Order of work

1. **Refactor.** Move to `app/industry/` and add the copy context. Electricians
   uses the shared layout.
   - Check: `/website-for-electricians` and `/nl/website-voor-elektriciens` look
     identical to before.
   - Check: `npm run build` and lint pass.
2. **Pilot: Plumbers.** It has the most templates and the full doc. Do EN and
   NL, and all the wiring. Review it together before doing the rest.
3. **Remaining 8 industries.** Same steps, one commit per industry.
4. **QA.**
   - Build and lint.
   - Visit every page in EN and NL, on desktop and mobile.
   - Check the jump links and anchors.
   - Check the language toggle goes to the correct page.
   - Check the Audience cards link correctly.
   - Check there are no dead guide or design links.
   - Spot-check copy against the PDFs: prices, the "7 working days" condition,
     FAQs.

## Open questions (need a decision before implementing)

1. **Docs 07–10 (Coaches, Healthcare, Handyman, Professional services) have no
   Audience card.** Build their pages anyway (recommended; they are reachable
   from the sitemap and links), and/or add cards for them to `Audience.tsx`?
   New cards would need images; the electrician image could be used as a
   placeholder.
2. **Plumbers URL.** The plumbers doc says `/industry/website-for-plumbers`;
   every other doc and the live electricians page use the root-level
   `/website-for-…`. Recommendation: `/website-for-plumbers`, for consistency.
3. **NL slugs.** Every doc says "confirm the Dutch production URL before
   publishing". Are the proposed slugs in the table OK?
4. **Designs section for industries with no templates** (consultants,
   accountants, coaches, handyman, professional services). Options:
   - (a) Recommended: show the doc's named design cards as non-clickable
     placeholders in the same grid, using the electrician image, with the
     caption. This matches the handyman doc's own instruction.
   - (b) Show the electrician templates. Not recommended, because it's the
     wrong industry.
   - (c) Hide the section. This changes the layout.
5. **Guide cards.** None of the new industries' guide articles exist yet. The
   recommendation is to show the cards with their copy but no link. The
   alternative is to hide the Guide section until the articles exist.

## Status: implemented

The open questions were settled with the recommended options:

1. All 9 pages are built. The 5 matching Audience cards link to their page.
   Coaches, Healthcare, Handyman and Professional services have pages but no
   card yet.
2. Plumbers lives at `/website-for-plumbers`.
3. The NL slugs in the table above are used. They are still unconfirmed.
4. Industries with no templates show the doc's design names as unlinked
   placeholder cards with the electrician photo. Professional services shows
   the real SwiftLine / PrimeAbode / SunHarbor templates its doc names.
   Healthcare shows the DentalCare and PhysioCare templates; its doc's own
   designs (NutriPoint, MindHaven, TalkWell) don't exist yet.
5. Guide cards have no links until their articles exist.

Where things are:

- Shared layout: [app/industry/](app/industry/).
  - `IndustryClient` is the page.
  - `IndustryRoute` provides the metadata and JSON-LD.
  - `shared.ts` holds the shared copy and `buildIndustryCopy`.
  - `types.ts` holds the copy contract.
- Each industry has `app/website-for-<x>/data.ts` plus the two `page.tsx`
  routes.

Copy differences from the shared blocks: the EN closing CTA reads "Great at
what you do." on Consultants, Accountants, Coaches, Healthcare and
Professional services, as their docs say. Each of those files overrides it
locally.
