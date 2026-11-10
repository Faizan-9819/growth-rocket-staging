# Offers — implementation plan

Build a new content type, **Offers**, that works like the blog: a listing page and a detail page per offer, in English and Dutch, linked from the footer. The content is dummy for now (9 offers, lorem ipsum titles and body, existing site photos), so the plumbing and design can be reviewed on staging before real offers are written.

Everything below was taken from this codebase. Follow the existing patterns and reuse the components named here; do not invent new colours, fonts, radii or layouts.

---

## 0. Before you start

- Read `AGENTS.md`. This is **Next.js 16**: APIs differ from older versions. Read the relevant guide in `node_modules/next/dist/docs/` before writing code. Two that matter here:
  - `01-app/03-api-reference/02-components/image.md`: `priority` on `next/image` is **deprecated**. For the above-the-fold image use `loading="eager"` and `fetchPriority="high"`.
  - `01-app/03-api-reference/03-file-conventions/02-route-segment-config/dynamicParams.md`.
- Page `params` are a Promise: `({ params }: { params: Promise<{ slug: string }> })`, then `const { slug } = await params;`. See `app/nl/blog/[slug]/page.tsx`.
- Don't change how the blog, legal pages or any existing page behave. Where this plan extends a shared component, the new prop must default to today's behaviour.
- When finished, `npm run build` must pass with no type errors.

---

## 1. URLs

| Page | English | Dutch |
|---|---|---|
| Listing | `/offers` | `/nl/aanbiedingen` |
| Detail | `/offers/offer-1` … `/offers/offer-9` | `/nl/aanbiedingen/aanbieding-1` … `/nl/aanbiedingen/aanbieding-9` |

Dutch wording: **Offers = "Aanbiedingen"**, one offer = **"Aanbieding"**. Do **not** use "Offertes": on this site that means *quotes* (the footer already has "Offertes en facturen" for the quotes feature).

The language switch in the navbar must swap between matching pages, for example `/offers/offer-3` ↔ `/nl/aanbiedingen/aanbieding-3` and `/offers` ↔ `/nl/aanbiedingen` (see §4).

---

## 2. Files

### Create

| File | Purpose |
|---|---|
| `app/lib/offers.ts` | Offer types, the 9 dummy offers (EN + NL), helpers, `OFFERS_INDEXABLE` flag |
| `app/i18n/offer-locale-slugs.ts` | EN ↔ NL slug map and `translateOfferPath()` (client-safe, no content) |
| `app/components/offers/OfferCard.tsx` | Card for the listing grid (light) and the "more offers" row (dark) |
| `app/components/offers/OffersListing.tsx` | Listing page body, shared by EN and NL |
| `app/components/offers/OfferDetail.tsx` | Detail page body, shared by EN and NL |
| `app/components/offers/OfferEnquiryCard.tsx` | Right-hand enquiry card wrapping `LeadEnquiryForm` |
| `app/offers/page.tsx` | EN listing route |
| `app/offers/[slug]/page.tsx` | EN detail route |
| `app/nl/aanbiedingen/page.tsx` | NL listing route |
| `app/nl/aanbiedingen/[slug]/page.tsx` | NL detail route |

### Modify

| File | Change |
|---|---|
| `app/i18n/locale-href.ts` | Call `translateOfferPath()` (§4) |
| `app/components/sections/home2/Footer2.tsx` | Add the "Offers" link (§9) |
| `app/components/SiteFooter.tsx` | No contact fold under offer **detail** pages (§9) |
| `app/components/LeadEnquiryForm.tsx` | Optional props `columns`, `messagePrefix`, `extraTags` (§8) |
| `components/blogs/shared/BlogToc.tsx` | Optional prop `visibilityClassName` (§7.3) |
| `next.config.ts` | Redirect `/nl/offers…` to `/nl/aanbiedingen…` (§4) |
| `app/lib/sitemap-pages.ts`, `app/llms.txt/route.ts` | List offers **only when** `OFFERS_INDEXABLE` is true (§10) |

---

## 3. Data — `app/lib/offers.ts`

The blog stores each post as a folder of modules (`content/blogs/<slug>/…`) because every post has its own components. Offers are uniform, so keep them as **typed data in one file**. Each offer holds both languages, so a real translation is just a text edit later.

```ts
export type OfferSection = {
  /** Anchor id, same in both languages: the TOC links to it. */
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type OfferCopy = {
  title: string;
  excerpt: string;   // 1–2 sentences, used on cards and as the hero lead
  badge: string;     // short chip label, e.g. "Limited time"
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  sections: OfferSection[];
};

export type Offer = {
  /** The EN slug ("offer-1"). It is also the pairing key between languages. */
  slug: string;
  image: string;       // public path
  validUntil: string;  // ISO date, "2026-12-31"
  en: OfferCopy;
  nl: OfferCopy;
};

/** false while the content is dummy: noindex, and left out of sitemap + llms.txt. */
export const OFFERS_INDEXABLE = false;

export const OFFERS: Offer[] = [ /* 9 offers, see below */ ];
```

Helpers (in the same file):

- `getOffers(): Offer[]` returns the offers in display order.
- `getOfferBySlug(slug: string, locale: "en" | "nl"): Offer | null`. For `"nl"` it matches the NL slug from `offer-locale-slugs.ts`.
- `offerSlug(offer, locale)` and `offerHref(offer, locale)` return `/offers/<en>` or `/nl/aanbiedingen/<nl>`.
- `getOtherOffers(slug, count = 3)` returns the next `count` offers after this one, wrapping around to the start.
- `formatOfferDate(iso, locale, month: "short" | "long")` uses `Intl.DateTimeFormat`, `en-GB` or `nl-NL`, with `timeZone: "UTC"` so the date never shifts. Examples: "31 Dec 2026" / "31 dec. 2026" (short), "31 December 2026" / "31 december 2026" (long).

### The 9 dummy offers

Titles and body text are **lorem ipsum in both languages** (to be replaced with real copy later). Everything else, such as badges, section headings, alt text, metadata and UI labels, is real EN/NL copy.

The images are existing site photos in `public/industry-pages-img/`. Don't add new image files.

| slug (EN) | NL slug | Title (both languages) | Image | Badge EN / NL | Valid until | Alt EN / NL |
|---|---|---|---|---|---|---|
| offer-1 | aanbieding-1 | Lorem ipsum dolor sit amet | `/industry-pages-img/plumber-1.webp` | Limited time / Tijdelijk aanbod | 2026-12-31 | Plumber at work / Loodgieter aan het werk |
| offer-2 | aanbieding-2 | Consectetur adipiscing elit sed do | `/industry-pages-img/cleaning-1.webp` | New / Nieuw | 2026-12-31 | Cleaner at work / Schoonmaker aan het werk |
| offer-3 | aanbieding-3 | Eiusmod tempor incididunt ut labore | `/industry-pages-img/hair-1.webp` | Popular / Populair | 2026-12-31 | Hairdresser at work / Kapper aan het werk |
| offer-4 | aanbieding-4 | Dolore magna aliqua ut enim | `/industry-pages-img/accountant-1.webp` | Limited time / Tijdelijk aanbod | 2027-01-31 | Accountant at work / Accountant aan het werk |
| offer-5 | aanbieding-5 | Ad minim veniam quis nostrud | `/industry-pages-img/coach-1.webp` | New / Nieuw | 2027-01-31 | Coach at work / Coach aan het werk |
| offer-6 | aanbieding-6 | Exercitation ullamco laboris nisi | `/industry-pages-img/consultant-1.webp` | Popular / Populair | 2027-01-31 | Consultant at work / Consultant aan het werk |
| offer-7 | aanbieding-7 | Aliquip ex ea commodo consequat | `/industry-pages-img/handyman-1.webp` | Limited time / Tijdelijk aanbod | 2027-02-28 | Handyman at work / Klusjesman aan het werk |
| offer-8 | aanbieding-8 | Duis aute irure dolor in reprehenderit | `/industry-pages-img/healthcare-1.webp` | New / Nieuw | 2027-02-28 | Healthcare professional at work / Zorgverlener aan het werk |
| offer-9 | aanbieding-9 | Voluptate velit esse cillum dolore | `/industry-pages-img/professional-service-1.webp` | Popular / Populair | 2027-02-28 | Business professional at work / Zakelijk dienstverlener aan het werk |

Each offer gets the same five sections. The ids and headings are fixed; the body is lorem ipsum.

| id | Heading EN | Heading NL | Body |
|---|---|---|---|
| `overview` | Overview | Overzicht | 2 paragraphs |
| `included` | What's included | Wat je krijgt | 1 paragraph + 4 bullets |
| `how-it-works` | How it works | Zo werkt het | 2 paragraphs |
| `conditions` | Conditions | Voorwaarden | 1 paragraph + 3 bullets |
| `next-steps` | Next steps | Volgende stappen | 1 paragraph |

Use varied lorem ipsum of 40–70 words per paragraph and 5–10 words per bullet, so the page reads like a real article.

- `excerpt`: one lorem sentence of 15–25 words.
- `seoTitle`: EN `"<title> | Growth Rocket Offers"`, NL `"<title> | Growth Rocket Aanbiedingen"`.
- `seoDescription`: the excerpt.

---

## 4. URL translation — `app/i18n/offer-locale-slugs.ts`

This mirrors `app/i18n/blog-locale-slugs.ts`. Keep it a plain map: `localizedHref` runs in client bundles (navbar, footer), so this file must not import the offer content.

```ts
export const NL_OFFER_SLUGS: Record<string, string> = {
  "offer-1": "aanbieding-1",
  // … through offer-9
};
const EN_OFFER_SLUGS = Object.fromEntries(
  Object.entries(NL_OFFER_SLUGS).map(([en, nl]) => [nl, en]),
);

export const OFFERS_BASE = { en: "/offers", nl: "/nl/aanbiedingen" } as const;

/** /offers[/slug] or /nl/aanbiedingen[/slug] (either language's slug) → `to`'s URL; null for any other path. */
export function translateOfferPath(pathname: string, to: "en" | "nl"): string | null {
  const match = pathname.match(/^(?:\/offers|\/nl\/aanbiedingen|\/nl\/offers)(?:\/([^/]+))?\/?$/);
  if (!match) return null;
  const slug = match[1];
  if (!slug) return OFFERS_BASE[to];
  const enSlug = EN_OFFER_SLUGS[slug] ?? slug;
  return to === "nl"
    ? `${OFFERS_BASE.nl}/${NL_OFFER_SLUGS[enSlug] ?? enSlug}`
    : `${OFFERS_BASE.en}/${enSlug}`;
}
```

`app/lib/offers.ts` reads the NL slugs from `NL_OFFER_SLUGS`, so they live in one place.

**`app/i18n/locale-href.ts`:** in `localizedHref()`, right after the `translateBlogPath` block, add:

```ts
// Offers have their own NL base and slugs (/offers/offer-1 ↔ /nl/aanbiedingen/aanbieding-1).
const offer = translateOfferPath(href, locale);
if (offer) return offer;
```

That one change covers:
- the navbar language switch;
- footer links;
- the first-visit redirect for Dutch browsers in `proxy.ts`, which calls `localizedHref`;
- the sitemap.

**`next.config.ts`:** add two entries to the existing permanent-redirect list near the `/nl/features` ones:

- `["/nl/offers", "/nl/aanbiedingen"]`
- `{ source: "/nl/offers/:slug", destination: "/nl/aanbiedingen/:slug", permanent: true }`

The NL detail page then turns an EN slug into its NL slug (§7.1).

---

## 5. Brand reference (use exactly these)

This is the /home2 design language, which the blog already uses. Wrap each page's `<main>` in the `blog-theme` class. It repoints the CSS tokens that `BlogToc` and `BlogProse` use to the current palette, and makes every heading Bricolage (see `app/globals.css`, "Blog theme").

**Colours**

| Use | Value |
|---|---|
| Deep fold background, headings on light | `#0a0516` |
| Card on a deep fold | `#151021`, border `white/[0.12]` |
| Primary violet (buttons, links, accents on light) | `#5b2dce` |
| Lime accent (dots, highlights and CTAs on dark) | `#e4fa65` |
| Light card / wash | `#f5f3ff`, hover `#ebe6ff`, border `#ded8e7`, hover border `#c9bff0` |
| Chip on light | bg `#ede8fb`, text `#5b2dce` |
| Image placeholder tint | `#ece7f6` |
| Body text on light | `#625a70` (stronger `#554c64`, muted `#8b8398`) |
| Body text on dark | `#c9c2d4` |

**Type.** Bricolage for display (`font-bricolage`, `font-semibold`); Inter for copy (`font-sans`). Never Poppins, and never another font.

| Element | Classes |
|---|---|
| H1 (page masthead) | `font-bricolage text-[clamp(38px,4.3vw,64px)] font-semibold leading-[1.04] tracking-[-0.055em]` |
| H2 (fold heading) | `font-bricolage text-[clamp(32px,3.4vw,48px)] font-semibold leading-[1.1] tracking-[-0.04em]` |
| Card title | `font-bricolage text-[20px] font-semibold leading-[1.2] tracking-[-0.03em]` |
| Eyebrow on dark | `font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-[#e4fa65]`, led by `<i className="h-[7px] w-[7px] rounded-full bg-[#e4fa65]" />` |
| Eyebrow on light | the same, but `tracking-[0.07em] text-[#5b2dce]` (dot stays lime) |
| Lead paragraph | `font-sans text-[clamp(15px,1.25vw,18px)] leading-[1.6]` |
| Article body | `BlogProse` (h2 26→30px violet, paragraphs 19px / 31px ink) |
| Small / meta | 12–14px `font-sans` |

**Shape and layout**

- **Page shell:** every page sits in `HomeShell` (`app/components/sections/home2/HomeShell.tsx`). It provides the white page, a 14px gutter, 12px between folds and space for the fixed navbar.
- **Folds:** each fold is a section with `rounded-[13px]` and `py-[48px] md:py-[64px]` (`md:py-[80px]` for the closing deep fold), with the content inside `<div className="fix">`, the shared content rail.
- **Radius:** 13px on folds, cards and images. Pills and chips use `rounded-full`. Use no other radii.
- **Sticky offset:** 104px from the top (`top-[104px]`), the same as the blog's table of contents.

**Components to reuse:**
- `ButtonF` (`app/components/ui/ButtonF.tsx`):
  - `variant="violet"` on light folds; `variant="lime"` on deep folds;
  - `variant="link"` with `arrow="right"` for "View offer →";
  - add `native` for `#anchor` links;
  - arrow directions include `"right"`, `"up-right"` and `"down-right"`.
- `next/image` with `fill` and a correct `sizes`, and `Link` from `next/link`.
- `JsonLd`, `BlogToc`, `BlogProse`, `LeadEnquiryForm` and `HomeShell`.

---

## 6. Listing page — `/offers` and `/nl/aanbiedingen`

The route files are thin server components, like `app/blog/page.tsx`. Each exports its `metadata` (§10) and renders `<JsonLd …/>` plus `<OffersListing locale="en|nl" />`. `OffersListing` can be a server component; it takes `locale` as a prop and needs no client hooks.

Structure inside `<main className="blog-theme relative min-h-screen">` → `<HomeShell>`:

**Fold 1: deep masthead.** Copy it from `BlogLandingClient` (the section labelled `blog-hero-heading`):
- `section`: `overflow-hidden rounded-[13px] bg-[#0a0516] py-[48px] text-white md:py-[64px]`
- eyebrow on dark;
- H1 with the last word in lime: EN "Current **offers.**", NL "Actuele **aanbiedingen.**";
- lead paragraph `mt-[18px] max-w-[620px] … text-[#c9c2d4]`.

**Fold 2: white grid.**
- `section`: `rounded-[13px] bg-white py-[48px] text-[#0a0516] md:py-[64px]`.
- Header row: `flex flex-wrap items-end justify-between gap-[14px]`.
  - On the left: an eyebrow on light, then an H2.
  - On the right, the count: `m-0 font-sans text-[13px] text-[#8b8398]`.
- Grid: `mt-[28px] grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-[22px]` holding all 9 `OfferCard tone="light"`.
- No search, filters or pagination for 9 items. If more than 9 offers are added later, add pagination the way `BlogLandingClient` does (nine per page).

The site's contact fold and footer come from `SiteFooter` automatically. Keep the contact fold on the listing page.

### `OfferCard`, `tone="light"` (listing)

Mirror `PostCard` in `app/components/blog/BlogLandingClient.tsx`. The whole card is one `Link` to `offerHref(offer, locale)`:

- **Link:** `arrow-cta-host group flex h-full flex-col overflow-hidden rounded-[13px] border border-[#ded8e7] bg-[#f5f3ff] transition-[background-color,border-color,translate,box-shadow] duration-380 ease-in-out hover:-translate-y-1 hover:border-[#c9bff0] hover:bg-[#ebe6ff] hover:shadow-[0_22px_46px_rgba(10,5,22,0.14)] motion-reduce:hover:translate-y-0`.
- **Image box:** `relative h-[180px] overflow-hidden bg-[#ece7f6] lg:h-[218px]`. Inside it, `Image fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover"`, with `alt` set to `imageAlt`.
- **Body:** `flex flex-1 flex-col gap-[12px] p-[22px]`, containing:
  - the badge chip: `inline-flex w-max items-center gap-[7px] rounded-full bg-[#ede8fb] px-[12px] py-[6px] font-sans text-[11px] font-bold tracking-[0.06em] text-[#5b2dce] uppercase`, with a 5px dot `bg-current opacity-70`;
  - the title (`h3`, card title style, `line-clamp-3 text-[#0a0516]`);
  - the excerpt (`line-clamp-2 font-sans text-[14px] leading-[1.6] text-[#625a70]`).
- **Footer row:** `mt-auto flex items-center justify-between gap-[10px] border-t border-[#ded8e7] pt-[14px]`.
  - Left: "Valid until 31 Dec 2026", `font-sans text-[12px] text-[#8b8398]`.
  - Right: `ButtonF as="span" variant="link" arrow="right" arrowSize={14} className="gap-[6px] font-sans text-[13px] font-semibold text-[#5b2dce]"`, labelled "View offer".

### `OfferCard`, `tone="dark"` (detail page, "more offers")

Mirror the default (not `titleOnly`) layout of `app/components/blog/BlogCard.tsx`:
- `#151021` card, `white/[0.12]` border and a lime hover with its glow;
- `aspect-[1.28/1]` image;
- "Valid until …" in place of the date and reading time;
- the title, excerpt, and a lime "View offer" link that turns violet on hover.

Copy the classes and the 300ms transitions as they are.

---

## 7. Detail page — `/offers/[slug]` and `/nl/aanbiedingen/[slug]`

### 7.1 Routes

**EN (`app/offers/[slug]/page.tsx`):**
- `generateStaticParams` returns the 9 EN slugs;
- `export const dynamicParams = false;`;
- `generateMetadata` builds the metadata (§10);
- the page renders `<OfferDetail offer={…} locale="en" />` and calls `notFound()` if the slug is unknown.

**NL (`app/nl/aanbiedingen/[slug]/page.tsx`):** `generateStaticParams` returns the 9 NL slugs. **Do not** set `dynamicParams = false` here. In the page:
- an EN slug (`/nl/aanbiedingen/offer-3`) calls `permanentRedirect()` to its NL URL, as `app/nl/blog/[slug]/page.tsx` does;
- any other unknown slug calls `notFound()`;
- `generateMetadata` returns `{}` for an unknown slug.

### 7.2 Layout

The page has three folds inside `<main className="blog-theme relative min-h-screen overflow-x-clip text-[#0a0516]">` → `<HomeShell>`. This is the same skeleton as `app/components/blog/BlogPostView.tsx`.

**Fold 1: deep hero with the big image.**
- `section`: `overflow-hidden rounded-[13px] bg-[#0a0516] py-[48px] text-white md:py-[64px]`, then `<div className="fix">`.
- **Breadcrumb** (`nav aria-label`): "Offers / <title>", `font-sans text-[13px] text-[#c9c2d4]`. The first crumb links to the listing (hover `text-white`). The title crumb is `text-white/90 line-clamp-1`.
- **Eyebrow** on dark (`mt-[22px]`) showing the badge.
- **H1** (masthead style, `mt-[18px] max-w-[900px] text-white`).
- **Lead** paragraph: the excerpt, `mt-[18px] max-w-[680px] text-[#c9c2d4]`.
- **Row** `mt-[26px] flex flex-wrap items-center gap-[14px]`, containing:
  - `ButtonF href="#offer-enquiry" native variant="lime" size="sm" arrow="down-right"` labelled "Enquire about this offer";
  - a meta pill `rounded-full border border-white/[0.18] px-[14px] py-[8px] font-sans text-[13px] text-[#c9c2d4]` reading "Valid until 31 December 2026" (long date).
- **Big image:**
  - box: `relative mt-[36px] overflow-hidden rounded-[13px] bg-[#151021] aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] md:mt-[44px]`;
  - `<Image fill sizes="(min-width: 1440px) 1320px, 90vw" className="object-cover" loading="eager" fetchPriority="high" alt={imageAlt} />`.

**Fold 2: white body with three columns.**
- `section`: `rounded-[13px] bg-white py-[48px] md:py-[64px]`, then `<div className="fix">`.
- Row: `flex flex-col gap-[40px] lg:flex-row xl:gap-[48px]`. Don't add `items-start`: the side columns must stretch to the row's height or their sticky content won't stick.

| Width | Columns |
|---|---|
| below `lg` (<1024px) | One column: article, then the enquiry card (full width). No TOC. |
| `lg` to `xl` | Article (`flex-1`) and the enquiry card (`lg:w-[320px]`). No TOC: three columns are too cramped here. |
| `xl` and up (≥1280px) | TOC (`xl:w-[196px]`), article (`flex-1`) and enquiry card (`xl:w-[340px]`). |

**Fold 3: deep "more offers".** Copy the "More articles" fold of `BlogPostView`:
- `section`: `overflow-hidden rounded-[13px] bg-[#0a0516] py-[56px] text-white md:py-[80px]`.
- Header: eyebrow "More offers", then an H2 with a line break: EN "Other offers" / lime "worth a look.", NL "Bekijk ook deze" / lime "aanbiedingen.".
- `ButtonF variant="violet" size="sm"` labelled "View all offers", linking to the listing.
- Below: `grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3`, with `getOtherOffers(slug, 3)` as `OfferCard tone="dark"`.

### 7.3 Table of contents

Reuse `BlogToc` from `components/blogs/shared/BlogToc.tsx`. Its `entries` are the offer's sections (`{ id, label: heading }`). Labels go through `dangerouslySetInnerHTML`, so HTML-escape the headings first, the way `escapeHtml` in `app/components/legal/LegalDocument.tsx` does.

- `heading`: EN "In this offer", NL "In deze aanbieding".
- `widthClassName="xl:w-[196px]"`.
- **BlogToc change:** add an optional prop `visibilityClassName` with default `"hidden lg:block lg:flex-none"`, which is exactly today's classes on its `<aside>`. Use it in place of those hard-coded classes. Offers pass `visibilityClassName="hidden xl:block xl:flex-none"`. The blog and legal pages pass nothing, so they don't change.

### 7.4 Article column

`<article className="min-w-0 flex-1">`. For each section, render `BlogProse` (`components/blogs/shared/BlogProse.tsx`) with `id`, `heading` (escaped) and `paragraphs`. It already sets `scroll-mt-24` and the article type sizes.

When a section has `bullets`, render a list right after its `BlogProse`, inside a `max-w-[720px]` box:
- `ul`: `mt-6 flex flex-col gap-3`;
- each `li`: `flex gap-3 font-sans text-[19px] leading-[31px] text-[#0a0516]`, with a violet dot `mt-[12px] h-[8px] w-[8px] flex-none rounded-full bg-[#5b2dce]`.

Close the article with a back link `mt-12`: `ButtonF variant="link" arrow="right"` labelled "All offers", linking to the listing, `font-sans text-[14px] font-semibold text-[#5b2dce]`.

### 7.5 Enquiry card — `OfferEnquiryCard` (client component)

This mirrors the site's "Let's connect" modal (`app/components/LeadForm.tsx`): a violet header bar over a form that scrolls on its own, with the submit button pinned at the bottom.

```tsx
<aside id="offer-enquiry" className="w-full scroll-mt-[104px] lg:w-[320px] lg:flex-none xl:w-[340px]">
  <div className="flex flex-col overflow-hidden rounded-[13px] border border-[#ded8e7] bg-white shadow-[0_22px_46px_rgba(10,5,22,0.10)] lg:sticky lg:top-[104px] lg:max-h-[calc(100vh-128px)]">
    {/* Header */}
    <div className="shrink-0 bg-[#5b2dce] px-[22px] py-[18px]">
      <h2 className="m-0 font-bricolage text-[22px] font-semibold leading-[1.15] tracking-[-0.03em] text-white">…</h2>
      <p className="m-0 mt-[6px] font-sans text-[13px] leading-[1.5] text-white/80">…</p>
    </div>
    {/* Fields scroll on their own from lg up; the submit button stays pinned. */}
    <div className="toc-scroll min-h-0 flex-1 px-[22px] pt-[18px] lg:overflow-y-auto" data-lenis-prevent>
      <LeadEnquiryForm
        idPrefix={`offer-${offer.slug}`}
        columns={1}
        stickySubmit
        submitLabel={{ en: "Send enquiry", nl: "Aanvraag versturen" }}
        messagePrefix={`Offer: ${copy.title} (${absoluteOfferUrl})`}
        extraTags={["Offer"]}
      />
    </div>
  </div>
</aside>
```

- `data-lenis-prevent` lets the wheel scroll the form instead of the page. The site uses Lenis smooth scrolling; see `LenisProvider`.
- `toc-scroll` gives it the site's thin scrollbar.
- `absoluteOfferUrl` is `https://www.getgrowthrocket.com` followed by `offerHref(offer, locale)`.

On mobile the card follows the article. The hero's "Enquire about this offer" button jumps to it (`#offer-enquiry`).

---

## 8. `LeadEnquiryForm` changes (`app/components/LeadEnquiryForm.tsx`)

Add three optional props. Without them the form must behave exactly as today.

1. **`columns?: 1 | 2`**, default `2`. With `1`:
   - the field grid stays `grid-cols-1` at every width, instead of switching to `lg:grid-cols-2`;
   - the two `lg:col-span-2` items lose that class. A col-span in a one-column grid creates a stray second column. Today the two items are the "Do you have a website?" `fieldset` and the message field;
   - the `fieldset` keeps its stacked mobile layout at every width (drop its `lg:flex … lg:items-center` row).
2. **`messagePrefix?: string`.** When set, the message sent is `` `${messagePrefix}\n\n${formData.message}` ``, so the team can see which offer the enquiry came from.
3. **`extraTags?: string[]`.** Appended to the request's `tags` (`["Website", "Enquiry", ...extraTags]`).
   - Keep `source: "PUBLIC_ENQUIRY"`. Don't invent a new source value: the API may reject it.
   - If the API rejects unknown tags, drop `extraTags`. The `messagePrefix` alone is enough.

Leave everything else unchanged, including validation, the honeypot and time trap (`HoneypotField`, `isLikelyBot`), `fireLeadConversion()`, and the success state.

---

## 9. Footer

**`app/components/sections/home2/Footer2.tsx`:** in `COLUMNS`, in the "Company" / "Bedrijf" column, add a link right after Blog:

```ts
{ label: { en: "Offers", nl: "Aanbiedingen" }, href: "/offers" },
```

Hrefs in that file are always the EN path; `localizedHref` turns it into `/nl/aanbiedingen` on Dutch pages once §4 is done.

**`app/components/SiteFooter.tsx`:** add `"/offers/"` and `"/aanbiedingen/"` to `NO_CONTACT_CTA_PREFIXES`. That component already strips `/nl`. The detail page has its own enquiry form, so a second contact fold under it would repeat the call to action. The listing page keeps the contact fold.

---

## 10. SEO

**Metadata.** Set it on all four routes, following `app/blog/page.tsx` and `app/nl/blog/page.tsx`:
- `title` and `description`;
- `...socialMeta(title, description, path)` from `app/lib/seo.ts`;
- `alternates.canonical` (an absolute URL) and `alternates.languages` with both `en` and `nl` absolute URLs.

Details:
- **Listing:**
  - EN title "Offers for Small Businesses | Growth Rocket", with description equal to the EN lead (§12);
  - NL title "Aanbiedingen voor kleine bedrijven | Growth Rocket", with the NL lead.
- **Detail:** `seoTitle` and `seoDescription` from the offer. Override `openGraph.images` and `twitter.images` with the offer image, using `toAbsoluteUrl(offer.image)` from `seo.ts`.
- **While `OFFERS_INDEXABLE` is `false`:** add `robots: { index: false, follow: true }` to all four routes.

**JSON-LD.** Use the `JsonLd` component:
- listing: `buildCollectionPageSchema(path, name, description, items)`, with the items being the 9 offers (name and path);
- detail: `buildPageSchema(path, title, description)`.

**Sitemap and llms.txt.** Only when `OFFERS_INDEXABLE` is `true`:
- in `app/lib/sitemap-pages.ts`, add the listing (`en: "/offers"`, `nl: localizedHref("/offers", "nl")`) and one entry per offer (EN and NL URLs), with priority `0.6` and `changefreq` `"weekly"`;
- in `app/llms.txt/route.ts`, add an "## Offers" list like the "## Blog" one.

While the flag is `false` (dummy content), neither file lists offers.

---

## 11. Accessibility and polish

- One `h1` per page. Fold headings are `h2`; card titles are `h3`.
- Every image has a meaningful `alt` in the page's language (from `imageAlt`).
- Cards are a single `Link`. Don't nest other links or buttons inside them. That is why the "View offer" `ButtonF` is `as="span"`.
- Hover lifts respect `motion-reduce` (see the card classes).
- Check widths 360, 768, 1024, 1280 and 1440:
  - no horizontal scroll at any width;
  - the TOC only appears from 1280px;
  - from 1024px the enquiry card stays in view while you scroll, and its submit button is always reachable.
- Optional: the scroll-in animation used elsewhere (`RevealGroup` / `RevealItem` from `app/features/FeatureReveal`) can wrap the masthead and grid.

---

## 12. Copy deck (UI strings)

| Key | EN | NL |
|---|---|---|
| Footer link | Offers | Aanbiedingen |
| Listing eyebrow | Offers | Aanbiedingen |
| Listing H1 | Current **offers.** | Actuele **aanbiedingen.** |
| Listing lead | Limited-time deals on websites and business tools for small businesses. Pick an offer to see what's included and send us an enquiry. | Tijdelijke aanbiedingen op websites en bedrijfstools voor kleine bedrijven. Kies een aanbieding om te zien wat je krijgt en stuur ons een aanvraag. |
| Grid eyebrow | All offers | Alle aanbiedingen |
| Grid H2 | Latest offers | Nieuwste aanbiedingen |
| Count | `${n} offers` | `${n} aanbiedingen` |
| Card date | Valid until {date} | Geldig tot {date} |
| Card link | View offer | Bekijk aanbieding |
| Breadcrumb root | Offers | Aanbiedingen |
| Hero CTA | Enquire about this offer | Vraag deze aanbieding aan |
| Hero meta pill | Valid until {date} | Geldig tot {date} |
| TOC heading | In this offer | In deze aanbieding |
| Back link | All offers | Alle aanbiedingen |
| Enquiry header | Interested in this offer? | Interesse in deze aanbieding? |
| Enquiry subline | Leave your details and we'll get in touch about this offer. | Laat je gegevens achter, dan nemen we contact met je op over deze aanbieding. |
| Submit | Send enquiry | Aanvraag versturen |
| More eyebrow | More offers | Meer aanbiedingen |
| More H2 | Other offers / **worth a look.** | Bekijk ook deze / **aanbiedingen.** |
| More button | View all offers | Alle aanbiedingen bekijken |

**Bold** means the lime (`#e4fa65`) part of a heading on a deep fold. The Dutch copy uses informal "je", like the rest of the NL site.

---

## 13. Acceptance checklist

**Pages**
- [ ] `/offers` shows the deep masthead and a white fold with a 3×3 grid of 9 cards, followed by the site's contact fold and footer.
- [ ] `/nl/aanbiedingen` shows the same page with every UI string in Dutch.
- [ ] `/offers/offer-1` … `offer-9` and `/nl/aanbiedingen/aanbieding-1` … `9` show the hero with breadcrumb, badge, title, lead, CTA, validity pill and big image; then TOC, article and enquiry card; then "more offers" (3 cards).
- [ ] Offer detail pages show no contact fold above the footer.
- [ ] TOC links glide to their sections, and the active section is highlighted while scrolling.

**Enquiry form**
- [ ] The form in the card is one column and submits.
- [ ] A submitted enquiry's message starts with "Offer: <title> (<url>)".
- [ ] The contact page and the "Let's connect" modal look and behave as before.

**Language switching**
- [ ] The navbar language switch on `/offers/offer-4` goes to `/nl/aanbiedingen/aanbieding-4`, and back.
- [ ] The footer shows "Offers" (EN) or "Aanbiedingen" (NL), linking to the matching listing.

**Redirects and 404s**
- [ ] `/nl/offers` redirects to `/nl/aanbiedingen`.
- [ ] `/nl/aanbiedingen/offer-2` redirects to `/nl/aanbiedingen/aanbieding-2`.
- [ ] Unknown slugs return 404.

**SEO**
- [ ] Each route's `<head>` has its own title, description, canonical and en/nl alternates, plus `noindex` while `OFFERS_INDEXABLE` is `false`.
- [ ] Offers are absent from `/sitemap.xml`, `/nlsitemap.xml` and `/llms.txt` while the flag is `false`.

**Other pages and build**
- [ ] Blog posts, the blog listing and the legal pages look and behave exactly as before. This checks the default of the `BlogToc` prop.
- [ ] `npm run build` passes.

---

## 14. Out of scope

- No navbar link (footer only).
- No CMS or admin for offers. Content stays in `app/lib/offers.ts`.
- No new images, colours, fonts or dependencies.
- No changes to the enquiry API, its `source` value, or the booking and partner forms.
- When real content arrives:
  - replace the lorem ipsum in `app/lib/offers.ts`;
  - set real slugs in `offer-locale-slugs.ts`;
  - set `OFFERS_INDEXABLE = true`.
