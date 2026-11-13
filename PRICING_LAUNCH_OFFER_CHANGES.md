# Launch price changes: €490/year for the first 100 customers

The yearly price is shown as **~~€690~~ €490/year**. €690 is the normal price and is crossed out. €490 is the launch price for the first 100 customers.
The monthly price (€69) is unchanged everywhere.

Each change below covers English and Dutch. The Dutch pages (`/nl`, `/nl/prijzen`) use the same components, so you only edit each file once.

| # | Where on the site | File |
|---|---|---|
| 1 | Home page, first section (hero) | `app/components/sections/home2/Hero2.tsx` |
| 2 | Home page, lime summary bar under the two cards | `app/components/sections/home2/Solution.tsx` |
| 3 | Home page, dark section "Your website. Your business tools." | `app/components/sections/home2/PricingTeaser.tsx` |
| 4 | Pricing page, price card (Annually tab only) | `app/components/sections/pricing/BillingCard.tsx` |

---

## 1. Hero: `Hero2.tsx`

**Result:** `✳ ~~€690~~ €490/year + €290 one-time setup`, and under it: *Launch price for the first 100 customers only*

### a) Add fields to the `HERO_COPY` type

Replace the single `price: string;` with:

```ts
    /** Text before the yearly price. Empty now that the monthly price is no longer shown here. */
    price: string;
    /** Yearly list price, shown crossed out. */
    priceWas: string;
    /** Yearly launch price that replaces it. */
    priceNow: string;
    /** Who the launch price is for, shown under the price line. */
    offer: string;
```

### b) Copy

`en`: replace `price: "€69/month or €690/year",` with:

```ts
    price: "",
    priceWas: "€690",
    priceNow: "€490/year",
    offer: "Launch price for the first 100 customers only",
```

`nl`: replace `price: "€69/maand of €690/jaar",` with:

```ts
    price: "",
    priceWas: "€690",
    priceNow: "€490/jaar",
    offer: "Introductieprijs alleen voor de eerste 100 klanten",
```

(`fee` stays: `"+ €290 one-time setup"` / `"+ €290 eenmalige opstartkosten"`.)

### c) Markup: the price line

Replace:

```tsx
<span>
  {copy.price}{" "}
  <span className="font-normal text-[#c9c2d4]">
    {copy.fee}
  </span>
</span>
```

with:

```tsx
<span>
  {copy.price ? <>{copy.price} </> : null}
  <s className="font-normal text-[#c9c2d4] decoration-[#c9c2d4]">
    {copy.priceWas}
  </s>{" "}
  <span className="text-[#e4fa65]">{copy.priceNow}</span>{" "}
  <span className="font-normal text-[#c9c2d4]">{copy.fee}</span>
  <span className="mt-[2px] block text-[13px] font-medium text-[#e4fa65]">
    {copy.offer}
  </span>
</span>
```

---

## 2. Lime summary bar: `Solution.tsx`

**Result:** `From ~~€690~~ €490 / year`, and under it: *First 100 customers only*. The "Explore the package" button stays.

In the package summary bar at the bottom of the section, replace the `€69 / month` price `<p>`:

```tsx
<p className="m-0 font-sans text-[14px] leading-[1.3] whitespace-nowrap">
  <span className="block">{t({ en: "From ", nl: "Vanaf " })}</span>
  <strong className="font-bricolage text-[28px] font-semibold tracking-[-0.05em] md:text-[42px]">
    €69
  </strong>
  <span>{t({ en: " / month", nl: " / maand" })}</span>
</p>
```

with:

```tsx
{/* The yearly list price (€690) is crossed out; €490 is the launch
    price for the first 100 customers, noted under it. */}
<p className="m-0 font-sans text-[14px] leading-[1.3] whitespace-nowrap">
  <span className="block">{t({ en: "From ", nl: "Vanaf " })}</span>
  <s className="mr-[6px] font-bricolage text-[18px] font-medium text-[#625a70] md:text-[24px]">
    €690
  </s>
  <strong className="font-bricolage text-[28px] font-semibold tracking-[-0.05em] md:text-[42px]">
    €490
  </strong>
  <span>{t({ en: " / year", nl: " / jaar" })}</span>
  <span className="block text-[14px] font-semibold text-[#5b2dce] md:text-[15px]">
    {t({
      en: "First 100 customers only",
      nl: "Alleen voor de eerste 100 klanten",
    })}
  </span>
</p>
```

---

## 3. Dark pricing section: `PricingTeaser.tsx`

**Result:**

```
FROM
~~€690~~
€490 / year
First 100 customers only
[View full pricing ↗]
```

In the right-hand price `RevealGroup`, keep the `FROM` item and change everything after it to:

```tsx
{/* Yearly list price, crossed out: the launch price below
    replaces it for the first 100 customers. */}
<RevealItem className="col-span-full mt-[6px]">
  <s className="font-bricolage text-[24px] leading-none font-semibold tracking-[-0.02em] text-[#c9c2d4] decoration-[2px] min-[761px]:text-[28px]">
    €690
  </s>
</RevealItem>

<RevealItem>
  <strong className="font-bricolage text-[66px] leading-[0.88] font-bold tracking-[-0.025em] text-[#e4fa65] min-[761px]:text-[clamp(58px,5.4vw,86px)]">
    €490
  </strong>
</RevealItem>

<RevealItem className="self-end">
  <small className="mb-[0.48em] block font-sans text-[14px] leading-none font-semibold text-[#c9c2d4]">
    {t({ en: "/ year", nl: "/ jaar" })}
  </small>
</RevealItem>

{/* The offer note and the CTA are not wrapped in RevealItem, so they
    always render and never wait on the staggered fade-in. */}
<p className="col-span-full m-0 mt-[6px] font-sans text-[15px] leading-[1.3] font-semibold text-[#e4fa65]">
  {t({
    en: "First 100 customers only",
    nl: "Alleen voor de eerste 100 klanten",
  })}
</p>

<div className="col-span-full w-full min-[761px]:w-auto">
  <ButtonF
    href={localizedHref("/pricing", locale)}
    variant="lime"
    arrowSize={18}
    className="mt-[14px] flex w-full justify-center min-[761px]:w-fit"
  >
    {t({ en: "View full pricing", nl: "Bekijk de prijzen" })}
  </ButtonF>
</div>
```

> Keep the "View full pricing" button **outside** a `RevealItem`. When it was inside one, it sometimes didn't appear on the page.

---

## 4. Pricing page card: `BillingCard.tsx` (Annually tab only)

**Result on the Annually tab:**

```
~~€690~~
€490 / year
First 100 customers only
+ €290 one-time onboarding fee
That's €40.83 a month, billed annually.
Save €338 compared with 12 monthly payments.
[Get started with Growth Rocket ↗]
€490 per year for your first two years, then €690 per year from year three. Billed annually. All prices exclude VAT.
```

**The Monthly tab is not changed.**

### a) Add two optional fields to `Plan`

```ts
type Plan = {
  old: string;
  current: string;
  period: string;
  detail: string;
  saving: string;
  /** Who the price is for, shown under it. Annual launch price only. */
  offer?: string;
  /** Small print under the CTA. Annual launch price only. */
  terms?: string;
};
```

### b) Copy: only the `annual` entries

`en.billing.annual`:

```ts
annual: {
  old: "€690",
  current: "€490",
  period: "/ year",
  detail: "That’s €40.83 a month, billed annually.",
  saving: "Save €338 compared with 12 monthly payments.",
  offer: "First 100 customers only",
  terms:
    "€490 per year for your first two years, then €690 per year from year three. Billed annually. All prices exclude VAT.",
},
```

`nl.billing.annual`:

```ts
annual: {
  old: "€690",
  current: "€490",
  period: "/ jaar",
  detail: "Dat is €40,83 per maand, jaarlijks gefactureerd.",
  saving: "Je bespaart €338 ten opzichte van 12 maandbetalingen.",
  offer: "Alleen voor de eerste 100 klanten",
  terms:
    "€490 per jaar voor je eerste twee jaar, daarna €690 per jaar vanaf het derde jaar. Jaarlijks betaald. Alle prijzen zijn exclusief btw.",
},
```

(The old values were `old: "€990"`, `current: "€690"`, `€57.50` / `€57,50` a month, and a `€138` saving.)

### c) Markup

Directly after the `<div>` that holds `{plan.current}` and `{plan.period}`, add:

```tsx
{plan.offer ? (
  <p className="mt-[12px] mb-0 font-sans text-[15px] leading-[1.3] font-semibold text-[#e4fa65]">
    {plan.offer}
  </p>
) : null}
```

Directly after the closing `</ButtonF>` ("Get started with Growth Rocket"), add:

```tsx
{plan.terms ? (
  <p className="mt-[16px] mb-0 font-sans text-[13px] leading-[1.55] text-[#c9c2d4]">
    {plan.terms}
  </p>
) : null}
```

---

## Still showing €690/year (not changed yet)

These places still use the old price. Decide whether each one should mention the launch offer:

- **"Save 17%" badge** on the Annually button in `BillingCard.tsx`. At €490 the saving is about 41%.
- **Monthly tab line** in `BillingCard.tsx`: "Save €138 a year when you choose annual billing" (with €490 it would be €338).
- **Meta title and description** of the pricing pages: `app/pricing/page.tsx`, `app/nl/prijzen/page.tsx`.
- **Pricing FAQs**: `app/components/sections/pricing/faqs.ts`.
- **Industry pages**: `app/industry/*/data.ts`, `app/industry/shared.ts`, `IndustryBillingCard.tsx`.
- **Blog content**: `content/**/blog.ts`, `faq.ts`, `components/blogs/**`, `app/components/blog/BlogPricingCard.tsx`.
- **Terms and conditions**: `app/terms-and-conditions/page.tsx`.
