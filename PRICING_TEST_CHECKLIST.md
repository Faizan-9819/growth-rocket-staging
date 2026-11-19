# Growth Rocket — geo pricing test (localhost)

You are testing the Growth Rocket website running locally at
**http://localhost:3000**. The site shows prices in the visitor's currency.
Your job: open each page below in each currency, compare what you see with
the expected values, and report every difference.

Do not change any code or settings. Only look, click where told, and report.

## How the currency is chosen

On localhost there is no real location, so the currency is picked by adding
`?country=XX` to the URL:

| Add to URL      | Currency shown         |
| --------------- | ---------------------- |
| `?country=DE`   | Euro (€) — Europe      |
| `?country=GB`   | Pound (£) — UK         |
| `?country=US`   | Dollar ($) — rest of world |
| `?country=IN`   | Rupee (₹) — India      |
| `?country=auto` | Back to default (€ on localhost) |

Rules for testing:

1. **Always put `?country=XX` on every URL you open**, so each page is tested
   in the intended currency.
2. After a page loads, **wait 2–3 seconds** before reading prices. Pages first
   show euros and then switch to the chosen currency; a brief € flash is
   normal. Only the settled state counts.
3. Scroll through the whole page; prices appear in several sections.
4. Read the browser tab title too (it contains a price on some pages).

## The pricing rules being tested

| Currency | Monthly | Yearly | Onboarding | Launch offer (first 100 customers) | Struck-through "was" prices |
| -------- | ------- | ------ | ---------- | ----------------------------------- | --------------------------- |
| € EUR    | €69 (was €99) | €690 (was €990) | €290 | **Yes**: €490/year, €690 struck through | **Yes** |
| £ GBP    | £69     | £690   | £290       | No                                  | No                          |
| $ USD    | $75     | $750   | $290       | No                                  | No                          |
| ₹ INR    | **None — yearly only** | ₹65,000 | ₹19,000 | No                     | No                          |

Derived figures:

| Figure                               | EUR     | GBP     | USD     | INR            |
| ------------------------------------ | ------- | ------- | ------- | -------------- |
| Yearly ÷ 12 ("That's … a month")     | €57.50  | £57.50  | $62.50  | **not shown**  |
| Saving vs 12 monthly payments        | €138    | £138    | $150    | **not shown**  |
| Save badge on billing switch         | 17%     | 17%     | 17%     | **no switch**  |
| First year (yearly + onboarding)     | €980    | £980    | $1,040  | ₹84,000        |
| Three years                          | €2,484  | £2,484  | $2,700  | ₹1,95,000      |

General failures to look for on **every** page:

- A **€ sign** anywhere on a GB, US or IN page in Growth Rocket's own prices.
- Text like `{monthly}`, `{yearly}`, `null`, `undefined` or `NaN`.
- Growth Rocket's own prices showing odd converted numbers, e.g. **£58,
  £577, £242, £409, $76, $763, $321, $542, ₹7,187, ₹71,869, ₹30,206,
  ₹51,037**. These mean a price was converted by exchange rate instead of
  using the fixed price — always a bug.
- On **IN**: any Growth Rocket **monthly** price, a Monthly/Annually switch,
  "per month" figures for Growth Rocket, "First 100 customers", or a
  struck-through price.
- On **GB / US**: "First 100 customers", "Launch price", or a struck-through
  price.

---

## Page 1 — Pricing page

URLs:
- http://localhost:3000/pricing?country=DE
- http://localhost:3000/pricing?country=GB
- http://localhost:3000/pricing?country=US
- http://localhost:3000/pricing?country=IN

### Price card (black card on the right of the yellow section)

**DE** — Annually selected (default):
- Switch shows "Annually · Save 17%" and "Monthly"
- €690 struck through, then **€490 / year**
- "First 100 customers only"
- "+ €290 one-time onboarding fee"
- "That's €40.83 a month, billed annually."
- "Save €338 compared with 12 monthly payments."
- Small print: "€490 per year for your first two years, then €690 per year from year three. Billed annually. All prices exclude VAT."

**DE** — click **Monthly**:
- €99 struck through, then **€69 / month**
- "+ €290 one-time onboarding fee", "Billed monthly.", "Save €138 a year when you choose annual billing."

**GB** — Annually:
- Switch shows "Annually · Save 17%" and "Monthly"
- **£690 / year**, nothing struck through, no "First 100 customers"
- "+ £290 one-time onboarding fee"
- "That's £57.50 a month, billed annually."
- "Save £138 compared with 12 monthly payments."
- Small print: "Billed annually. All prices exclude VAT."

**GB** — click **Monthly**: **£69 / month**, nothing struck through, "Save £138 a year when you choose annual billing."

**US** — same as GB but: **$750 / year**, "$62.50 a month", "Save $150", "+ $290"; Monthly: **$75 / month**, "Save $150 a year…".

**IN**:
- **No Annually/Monthly switch at all**
- **₹65,000 / year**, nothing struck through, no offer line
- "+ ₹19,000 one-time onboarding fee"
- "Billed annually." (no per-month figure, no saving line)
- Small print: "Billed annually. All prices exclude VAT."

### FAQ on the pricing page (open the questions)

"How much does Growth Rocket cost?"
- DE: "Growth Rocket costs €69 per month, or €690 per year with annual billing, plus a one-time €290 onboarding fee. … Annual billing works out at €57.50 per month and saves €138 compared with 12 monthly payments. Both options include …"
- GB: same with £69 / £690 / £290 / £57.50 / £138
- US: same with $75 / $750 / $290 / $62.50 / $150
- IN: "Growth Rocket costs ₹65,000 per year, plus a one-time ₹19,000 onboarding fee. Prices exclude VAT. The package includes your website, …" — **no** monthly price, **no** "Both options"

"What does the onboarding fee cover?"
- IN must say "…in addition to **your annual subscription**…" (not "monthly or annual")

"Is annual or monthly billing better value?"
- DE / GB / US: present, with that currency's numbers and "about 17%"
- IN: **this question must not exist**

### Tab title
- DE "…Pricing: €690/Year…", GB "£690/Year", US "$750/Year", IN "₹65,000/Year"

---

## Page 2 — Home page

URLs: http://localhost:3000/?country=DE (then GB, US, IN)

Hero (top, the three "✳" points):
- DE: €690 struck through, **€490/year**, "+ €290 one-time setup", "Launch price for the first 100 customers only"
- GB: **£690/year** "+ £290 one-time setup" — no struck price, no launch line
- US: **$750/year** "+ $290 one-time setup" — no struck price, no launch line
- IN: **₹65,000/year** "+ ₹19,000 one-time setup" — no struck price, no launch line

"Your website + your business tools." block ("From …"):
- DE: From €690 (struck) **€490** / year, "First 100 customers only"
- GB: From **£690** / year — US: **$750** / year — IN: **₹65,000** / year (no struck price, no offer line)

"FROM … / year — View full pricing" block (if present): same pattern as above.

Any "From €69 per month" line (e.g. "One system. One subscription. From …"):
- DE "From €69 per month." · GB "From £69 per month." · US "From $75 per month." · IN "From ₹65,000 per year."

Tab title:
- DE "…From €69/Month" · GB "£69/Month" · US "$75/Month" · IN "**₹65,000/Year**"

---

## Page 3 — Industry page (electricians)

URLs: http://localhost:3000/industry/website-for-electricians?country=DE (then GB, US, IN)

Hero, under the buttons:
- DE "€69 per month or €690 per year", "Plus €290 one-time onboarding fee."
- GB "£69 per month or £690 per year", "Plus £290 …"
- US "$75 per month or $750 per year", "Plus $290 …"
- IN "**₹65,000 per year**", "Plus ₹19,000 one-time onboarding fee."

Package bar ("Your website + your business tools. From …"):
- DE From **€69** / month · GB **£69** / month · US **$75** / month · IN From **₹65,000 / year**

Pricing section intro sentence:
- DE / GB / US: "…with an annual or monthly subscription and a one-time onboarding fee."
- IN: "…with **an annual subscription** and a one-time onboarding fee."

Price card:
- DE: €990 struck, **€690 / year**, "+ €290", "That's €57.50 a month…", "Save €138…"; Monthly: €99 struck, **€69 / month**
- GB: **£690 / year** (no strike), "+ £290", "£57.50 a month", "Save £138"; Monthly: **£69 / month**
- US: **$750 / year**, "+ $290", "$62.50 a month", "Save $150"; Monthly: **$75 / month**
- IN: **no switch**, **₹65,000 / year**, "+ ₹19,000", "Billed annually.", no saving line

Dark "call" band near the bottom ("FROM … / month"):
- DE FROM €69 / month · GB £69 / month · US $75 / month · IN FROM **₹65,000 / year**

FAQ "What will I pay to get started?":
- DE: "Annual billing is €690 per year plus €290 one-time onboarding: €980 for the first year … Monthly billing is €69 per month plus the same onboarding fee. Annual billing saves €138 compared with 12 monthly payments."
- GB: £690, £290, **£980**, £69, £138
- US: $750, $290, **$1,040**, $75, $150
- IN: "Annual billing is ₹65,000 per year plus ₹19,000 one-time onboarding: **₹84,000** for the first year before any separately agreed extras." — and **nothing** about monthly billing or savings

Repeat a quick check (hero line + price card + call band) on 2 more industry
pages, e.g.:
- http://localhost:3000/industry/website-for-plumbers?country=IN
- http://localhost:3000/industry/coaching-website?country=GB

And the Dutch version (Dutch number format, e.g. "£57,50"):
- http://localhost:3000/nl/branche/website-voor-elektriciens?country=IN — hero "₹65,000 per jaar", intro "Je betaalt per jaar, plus eenmalige opstartkosten.", no switch on the card

---

## Page 4 — Design page

URLs: http://localhost:3000/designs/voltguard-electrical-inspection-website?country=DE (then GB, US, IN)

Price card in the "package" section — same values as the industry price card
above (DE €990 struck/€690, GB £690, US $750, IN ₹65,000 with no switch),
followed by "Prices exclude VAT."

FAQ "What does the package cost?" / "The Growth Rocket package costs …":
- DE "€69 per month or €690 per year, plus a €290 one-time onboarding fee"
- IN "₹65,000 per year, plus a ₹19,000 one-time onboarding fee"

---

## Page 5 — Blog: WordPress vs WaaS

URLs: http://localhost:3000/blog/wordpress-vs-waas-website-for-electrician-businesses-an-honest-comparison?country=DE (then GB, US, IN)

"WaaS: a realistic three-year cost" box:

| Line | DE | GB | US | IN |
| ---- | -- | -- | -- | -- |
| Subscription · … , all-in | €69/mo | £69/mo | $75/mo | **₹65,000/yr** |
| … / 3 yrs | €2,484 | £2,484 | $2,700 | ₹1,95,000 |
| Onboarding · one-off | €290 | £290 | $290 | ₹19,000 |
| Three-year total ≈ | €2,750 | £2,750 | $3,000 | ₹2,14,000 |

Comparison table, WaaS "Ongoing cost":
- DE "€69/month (€690/year), all-in" · GB "£69/month (£690/year)…" · US "$75/month ($750/year)…" · IN "**₹65,000/year, all-in**"

Click **"Show assumptions"**: the WaaS line reads
- DE "WaaS: €69/mo (€690/yr), all-in; €290 one-off onboarding." · IN "WaaS: ₹65,000/yr, all-in; ₹19,000 one-off onboarding."

Cost explorer table, row "WaaS" (12 / 24 / 36 mo):
- DE €1,118 / €1,946 / €2,774
- GB £1,118 / £1,946 / £2,774
- US $1,190 / $2,090 / $2,990
- IN ₹84,000 / ₹1,49,000 / ₹2,14,000

Note: WordPress figures in this blog (freelancer build, hosting, maintenance)
are other companies' prices and are **meant** to be converted at the exchange
rate, so they will be uneven numbers like £1,252. That is correct.

---

## Page 6 — Blog: electrician website cost

URLs: http://localhost:3000/blog/electrician-website-cost-netherlands?country=DE (then IN)

- DE "Professional: €690 per year or €69 per month" · IN "Professional: **₹65,000 per year**"
- DE "Spread monthly, that's €57.50 — one fixed yearly price of €690, without …" · IN "**One fixed yearly price of ₹65,000**, without …"
- Growth Rocket rows: DE "€690 per year, plus a one-time €290 onboarding fee" · IN "₹65,000 per year, plus a one-time ₹19,000 onboarding fee"
- Blog sidebar card (right side, wide screens only): DE "From €69 / month, + €290 one-time onboarding" · IN "From **₹65,000 / year**, + ₹19,000 one-time onboarding"

Other providers' prices (DIY builders, freelancers, agencies) convert by
exchange rate — uneven numbers are expected there.

---

## Page 7 — Terms and conditions

URLs: http://localhost:3000/terms-and-conditions?country=DE (then GB, IN)

Section "3. Subscription pricing and payment", table "Payment options":
- DE rows: "Monthly payments · €69 per month · 12 months" and "Annual payment · €690 per year, paid in advance · 12 months"; "one-time onboarding fee of €290"
- GB: £69 per month, £690 per year, £290
- IN: **only** the "Annual payment · ₹65,000 per year, paid in advance" row (the Monthly row is hidden); "one-time onboarding fee of ₹19,000"; the bold line "Monthly payments spread the cost…" is **hidden**

General legal wording elsewhere in the terms that mentions monthly payments
is expected and not a failure.

---

## Page 8 — Dutch pricing page

URLs: http://localhost:3000/nl/prijzen?country=DE (then GB, IN)

- DE: same as Page 1 in Dutch ("Jaarlijks · Bespaar 17%", €490 / jaar, "Alleen voor de eerste 100 klanten", "Dat is €40,83 per maand…")
- GB: £690 / jaar, "Dat is £57,50 per maand, jaarlijks gefactureerd.", "Je bespaart £138…" (Dutch decimal comma is correct)
- IN: no switch, ₹65,000 / jaar, "+ ₹19,000 eenmalige opstartkosten", "Jaarlijks gefactureerd."
- Tab title: DE "€690 per jaar", GB "£690 per jaar", IN "₹65,000 per jaar"

---

## Not failures (expected behaviour)

- A brief flash of € before the page switches currency.
- Other companies' prices in blog posts converted to uneven numbers.
- A blog example showing "€[actual]" / "€[actueel bedrag]" (a template placeholder, not a price).
- €200 partner commission and €100 DPA limit converting by exchange rate.
- On localhost without `?country=…`, everything is in € (localhost has no location).

---

## How to report

For each page, give a table:

| Page | Country | Section | Expected | Actually seen | Pass / Fail |
| ---- | ------- | ------- | -------- | ------------- | ----------- |

Then list every **Fail** separately with the exact URL, the section, the exact
text you saw, and a screenshot if you can. End with a one-line summary:
"X checks passed, Y failed."
