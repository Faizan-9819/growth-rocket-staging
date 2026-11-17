# Pricing

Every Growth Rocket price on the site is set in this folder. Change a number
here and every page follows: pricing cards, page copy, FAQs, page titles,
blog mentions and the terms.

| File     | Currency | Who sees it                                   |
| -------- | -------- | --------------------------------------------- |
| `eur.ts` | € EUR    | Europe (all of it except the UK)              |
| `gbp.ts` | £ GBP    | UK, Channel Islands, Isle of Man, Gibraltar   |
| `usd.ts` | $ USD    | Every other country                           |
| `inr.ts` | ₹ INR    | India                                         |

Which country gets which currency is set in `app/lib/currency.ts`.

## What each file holds

```ts
monthly: { price: 69, was: 99 },   // or null: yearly billing only
yearly: { price: 690, was: 990 },  // `was` = struck-through price, optional
onboarding: 290,                   // one-time onboarding fee
launchOffer: { yearly: 490, customers: 100, years: 2 }, // or null: no offer
```

- **`monthly: null`** (INR): the billing switch, monthly prices, per-month
  figures and monthly-only text are left out everywhere.
- **`was`**: leave it out and no struck-through price is shown.
- **`launchOffer: null`**: the "first 100 customers" price is not shown; the
  regular yearly price is shown instead.

Everything else the copy quotes is worked out from these numbers in
`view.ts`: the yearly price per month (€57.50), the saving against 12 monthly
payments (€138, "17%"), the first-year total (€980), three years (€2,484),
and the offer's per-month price and saving.

## How the site uses it

- **The euro prices are the copy's own.** Text is written with `EUR_EN` /
  `EUR_NL` from `index.ts` instead of typing prices:
  `` `Growth Rocket costs ${EUR_EN.monthlyOrYearly}, plus a ${EUR_EN.onboarding} one-time onboarding fee.` ``
  Pages render in euros on the server, so that is also what search engines
  see.
- **Price cards and price blocks** (pricing page, industry and design pages,
  home page, blog sidebar) hold `"{token}"` placeholders such as
  `"Save {annualSaving} a year"` and fill them in the visitor's currency with
  `usePriceView` and `fillPrices`. A line quoting a figure the currency
  doesn't have is dropped.
- **Everywhere else**, `app/components/CurrencyProvider.tsx` rewrites the
  page's text for visitors shown another currency: each phrase from
  `phrases.ts` becomes the same phrase in their prices, then each lone euro
  figure that is one of ours becomes that figure. Euro amounts that aren't
  our prices (a freelancer's rates in a blog post) convert at the day's
  exchange rate.

## Adding copy that mentions a price

1. Write it with `EUR_EN` / `EUR_NL`, never a typed `€` amount.
2. If it mentions monthly billing, use a phrase from `phrases.ts` (or add
   one), so a yearly-only currency gets a version without monthly. A whole
   block that only makes sense with monthly billing can carry
   `data-monthly-only` instead; it is hidden for yearly-only currencies.

## Checking

Open any page with `?country=GB`, `?country=US`, `?country=IN` or
`?country=DE` to see it in that currency; `?country=auto` goes back to the
visitor's IP.
