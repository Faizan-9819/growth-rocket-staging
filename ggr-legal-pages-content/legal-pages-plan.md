# Legal pages update: instructions

These are instructions for whoever implements the change, a person or an AI. Follow them as written. The decisions were made by the site owner on 27 Oct 2026, so don't reopen them. If something here doesn't match the code, stop and ask instead of guessing.

The work has three parts:

- **A.** Replace the privacy policy, cookie policy and imprint (English and Dutch) with the new texts in this folder, in the same layout as the DPA and Terms pages.
- **B.** Move the Dutch legal pages to the URLs the new documents use.
- **C.** Make the site's cookie and consent behaviour match what the new policies say.

Not part of this task: the text of the DPA and of the Terms (English or Dutch). Their files are touched only for the URL changes in part B.

---

## 1. Rules for the text

1. **The six Word files in this folder are the source of truth.** Their extracted text is in `extracted/*.md`, made with `extracted/docx2md.py`, which uses Python's standard library only: `py -I extracted/docx2md.py <file.docx> <out.md>`. If an extracted file and its Word file ever disagree, the Word file wins.
2. **Copy the text word for word.** Don't rewrite, shorten, summarise, reorder, merge or "improve" any sentence. The only allowed changes are listed in section 4.
3. **Each language uses its own document.** English pages use the English documents; Dutch pages use the `-nl` documents. Never translate one from the other.
4. **Keep the document's structure.** Same section numbers and titles, same order, every bullet and every table row.

## 2. Pages, documents and URLs

All legal pages live on `https://legal.getgrowthrocket.com`.

| Page | Source documents | English URL (unchanged) | English file | **New** Dutch URL | Dutch file (move to) | Old Dutch URL: 308 redirect to the new one |
|---|---|---|---|---|---|---|
| Privacy policy | `final-doc-for-privacy-policy.docx`, `-nl.docx` | `/privacy-policy` | `app/privacy-policy/page.tsx` | `/nl/privacy-policy` | `app/nl/privacy-policy/page.tsx` (from `app/nl/privacybeleid/`) | `/nl/privacybeleid` |
| Cookie policy | `final-doc-for-cookie-policy.docx`, `-nl.docx` | `/cookie-policy` | `app/cookie-policy/page.tsx` | `/nl/cookie-policy` | `app/nl/cookie-policy/page.tsx` (from `app/nl/cookiebeleid/`) | `/nl/cookiebeleid` |
| Imprint | `final-doc-for-imprint.docx`, `-nl.docx` | `/imprint` | `app/imprint/page.tsx` | `/nl/imprint` | `app/nl/imprint/page.tsx` (from `app/nl/colofon/`) | `/nl/colofon` |
| Terms (URL only, text unchanged) | none | `/terms-and-conditions` | `app/terms-and-conditions/page.tsx` | `/nl/terms-and-conditions` | `app/nl/terms-and-conditions/page.tsx` (from `app/nl/algemene-voorwaarden/`) | `/nl/algemene-voorwaarden` |
| DPA (unchanged) | none | `/dpa` | `app/dpa/page.tsx` | `/nl/dpa` (same) | served from `/dpa` by `proxy.ts` | none |

The Dutch documents link to `/nl/privacy-policy`, `/nl/cookie-policy`, `/nl/terms-and-conditions` and `/nl/dpa`. They don't name a Dutch imprint URL, so `/nl/imprint` follows the same pattern. This was decided by the owner.

## 3. Layout: copy the DPA page

Use `app/dpa/page.tsx` as the template for all six pages.

- **Page shell:** `<main className="min-h-screen bg-white pt-22">`, then `JsonLd` with `buildPageSchema(<path>, <title>, <description>)`, then `LegalHero`, then `LegalDocument`.
- **Contents heading:** `LegalDocument tocHeading="Contents"` on English pages and `tocHeading="Inhoudsopgave"` on Dutch pages. The contents column is built automatically from each `Section`'s title.
- **Shared blocks:** import `LegalHero`, `Section`, `Sub`, `Ul`, `Table`, `B`, `Mail` and `LINK_CLASS` from `app/components/legal/LegalContent.tsx`. Delete each page's own copies of `Section`, `Ul`, `Sub`, its custom hero and its "Last updated" block. In `app/privacy-policy/page.tsx`, also delete the whole commented-out old policy at the top of the file.
- **Imprint width:** the imprint pages pass a custom `className` to `LegalDocument` (`md:max-w-[1400px] …`). Remove it so they match the other pages.

How the Word content maps onto these blocks:

| In the document | On the page |
|---|---|
| The first line ("# Privacy Policy", "# Cookiebeleid" …) | The hero, not a section (see the titles below) |
| A numbered heading ("# 1. Who we are") | `<Section title="1. Who we are">`, with the exact heading text |
| A bold lead-in line on its own (cookie §3 "**Strictly necessary** (always on)", "**Analytics** (only if you accept)" …) | `<Sub>` |
| A bullet list | `<Ul items={[…]} />` |
| A table | `<Table head={[…]} rows={[…]} />` with the default width. The header texts are exactly the document's |
| An email address | `<Mail email="…" />` |
| A phone number | `<a href="tel:+31857444176" className={LINK_CLASS}>+31 85 744 4176</a>` |
| A legal-site URL | A same-tab link to that path, using the **new** URLs from section 2 |
| An outside URL (autoriteitpersoonsgegevens.nl, policies.google.com, privacy.microsoft.com, www.getgrowthrocket.com) | A link that opens in a new tab (`target="_blank" rel="noopener noreferrer"`) |
| "Cookie settings" / "Cookie-instellingen" | A button that calls `openCookiePreferences()` from `app/components/CookieConsent.tsx`, styled with `LINK_CLASS` |

Hero titles and the date line:

| Page | Hero title (EN) | Hero title (NL) | Date line under the title (EN / NL) |
|---|---|---|---|
| Privacy | Privacy Policy | Privacyverklaring | Last updated: 28-10-2026 · Version 1.0 / Laatst bijgewerkt: 28-10-2026 · Versie 1.0 |
| Cookies | Cookie Policy | Cookiebeleid | Last updated: 28-10-2026 · Version 1.0 / Laatst bijgewerkt: 28-10-2026 · Versie 1.0 |
| Imprint | Imprint | Colofon | none |

- **Date line:** add an optional prop to `LegalHero`, for example `meta?: string`, shown as a small line under the `h1` (about `text-[14px] text-white/60`). The DPA and Terms don't pass it, so they stay as they are.
- **Imprint opening line:** the document's full title ("Growth Rocket Imprint and Company Information" / "Growth Rocket colofon en bedrijfsgegevens") becomes the first line of the content: a `<Sub>` before section 1.
- **Meta titles and descriptions:** keep the existing strings. The owner asked not to change legal page titles. Only canonicals, language links and paths change (section 5).

## 4. Allowed text changes (only these)

**4.1 Missing spaces from the Word files.** All are in the English documents; the Dutch documents have none.

| Document | Line in `extracted/` | Written as | Correct to |
|---|---|---|---|
| privacy (EN) | 25 | `available athttps://legal.getgrowthrocket.com/dpa` | `available at https://legal.getgrowthrocket.com/dpa` |
| privacy (EN) | 55 | `described above.We also receive` | `described above. We also receive` |
| privacy (EN) | 61 | `processing locations are athttps://…` | `processing locations are at https://…` |
| privacy (EN) | 65 | `privacy information.Google Analytics:` | `privacy information. Google Analytics:` |
| privacy (EN) | 89 | `outside the EEA.Google (Analytics, Ads and YouTube):` | `outside the EEA. Google (Analytics, Ads and YouTube):` |
| privacy (EN) | 135 | `To object, emailsupport@getgrowthrocket.com.` | `To object, email support@getgrowthrocket.com.` |
| cookie (EN) | 15 | `remain blocked.No Google or Microsoft` | `remain blocked. No Google or Microsoft` |

**4.2 Bold.** The Word files bold some entire paragraphs and bullets. On the page, keep bold only for:
- the right-to-object paragraph in privacy §7 (EN "Your right to object (Art. 21 GDPR)…", and the matching NL paragraph), shown in full in `<B>`;
- the short labels that open a bullet, for example "India.", "Platform providers.", "Website tools and other providers.", "WhatsApp Ireland Limited / Meta", "Authorities, courts and professional advisers", "A buyer or successor", and their NL equivalents;
- the qualifiers in the privacy purposes table: "only if you opted in", "only if you accept analytics cookies", "only if you accept marketing cookies", "only when you click to play one" (NL equivalents);
- the cookie §3 category lead-ins, which become `<Sub>` (section 3).

Everything else that is bold in the Word files is set as normal text.

**4.3 Long bullets with labelled parts become sub-points, same words.**
- **Privacy §4, the Google bullet:** the intro sentence, then a nested list: "Google Analytics: …", "Google Ads conversion measurement: …", "YouTube: …".
- **Privacy §5, the "Website tools and other providers" bullet:** the intro sentence, then a nested list: Google (Analytics, Ads and YouTube), Microsoft (Clarity), Meta (WhatsApp and Facebook/Instagram lead forms), Vercel, SignRequest, Bookings.
- Do the same at the same places in the Dutch privacy policy.

## 5. URL changes: exact edits

1. **Move the Dutch page folders with `git mv`:** `app/nl/privacybeleid` → `app/nl/privacy-policy`, `app/nl/cookiebeleid` → `app/nl/cookie-policy`, `app/nl/colofon` → `app/nl/imprint`, `app/nl/algemene-voorwaarden` → `app/nl/terms-and-conditions`.
2. **`app/i18n/locale-href.ts`:** remove these four entries from `NL_SLUG_MAP`: `/privacy-policy`, `/terms-and-conditions`, `/cookie-policy`, `/imprint`. Without them, `localizedHref()` maps `/privacy-policy` to `/nl/privacy-policy`. `app/lib/legal.ts` (`LEGAL_PATHS`, `legalHref`, `legalSitemapPaths`) then follows automatically; update only its comment examples.
3. **`next.config.ts`, the `NL pages renamed to Dutch slugs` block:** it currently redirects the new URLs to the old ones (`["/nl/privacy-policy", "/nl/privacybeleid"]` …). Remove those four legal pairs, keep `/nl/features` and `/nl/pricing`, and add the reverse permanent redirects:
   - `/nl/privacybeleid` → `/nl/privacy-policy`
   - `/nl/cookiebeleid` → `/nl/cookie-policy`
   - `/nl/algemene-voorwaarden` → `/nl/terms-and-conditions`
   - `/nl/colofon` → `/nl/imprint`
4. **The four moved Dutch pages:** update `alternates.canonical`, `alternates.languages.nl`, the `socialMeta(…)` path and the `buildPageSchema(…)` path to the new URLs.
5. **The English privacy, cookie, imprint and terms pages:** update `alternates.languages.nl` to the new Dutch URLs.
6. **Links inside page content that use old Dutch URLs:** change them to the new ones, for example `href="/nl/privacybeleid"` in the Dutch terms page. Search the whole repo for `privacybeleid`, `cookiebeleid`, `algemene-voorwaarden` and `colofon`. Only ordinary Dutch words in body text may remain.
7. **`app/components/SiteFooter.tsx`, `NO_CONTACT_CTA`:** remove `"/privacybeleid"`, `"/colofon"`, `"/cookiebeleid"` and `"/algemene-voorwaarden"`. The new URLs are already covered by the English entries, because the footer compares paths without `/nl`.
8. **`app/components/sections/home2/Footer2.tsx`:** change the Dutch footer label `Impressum` to `Colofon`. The links come from `legalHref()` and need no change.
9. **Leave as is:** the cookie banner and `llms.txt` (both use `legalHref()`), and the legal sitemap (`legalSitemapPaths()`). After the change, check that they show the new URLs.

## 6. Consent behaviour: make the site match the policies

This is what the site does today, from a check on 23 Oct with a fresh browser on the live site:
- Google Analytics, Microsoft Clarity and Google Ads load and set cookies before any choice, and still do after "Reject".
- Google Tag Manager loads on every visit (`app/components/Analytics.tsx`).
- The Google Ads tag loads unconditionally (`app/layout.tsx`).

Each item below quotes what the new policies promise and what has to change.

**6.1 Nothing from Google or Microsoft before consent or after rejection.** The policies say: "No Google or Microsoft scripts load and no data is sent to them before you consent."
- `app/layout.tsx`: remove the unconditional Google Ads tag (the `gtag/js` `<Script>` and the inline `gads-base` script) and the GTM `<noscript>` iframe.
- `app/components/Analytics.tsx`: load Google Tag Manager (and the Ads tag) only after the visitor has accepted analytics or marketing. Before GTM loads, push Google Consent Mode defaults (everything denied) to `dataLayer`, then an update matching the choice:
  - analytics → `analytics_storage`
  - marketing → `ad_storage`, `ad_user_data`
  - `ad_personalization` stays denied
- **In the GTM container (outside this repo, needs GTM admin access):**
  - GA4 and Clarity tags require analytics consent;
  - the Google Ads conversion and conversion-linker tags require marketing consent;
  - remarketing and ad personalisation are off;
  - there are no enhanced conversions.
- **Before removing the unconditional tags:** comments in the code say they exist "for Google verification". Make sure Google site ownership is verified another way first (DNS record or Search Console).

**6.2 Only two optional categories.** The policies list "analytics" and "marketing", plus "strictly necessary", which is always on. Remove the "Functional" toggle and its `functional` field from `app/components/CookieConsent.tsx` and `Analytics.tsx`.

**6.3 Remember the choice for 6 months, then ask again.** In `CookieConsent.tsx`:
- set the consent cookie's `max-age` to 6 months;
- store the time of the choice and the policy version (`1.0`);
- on load, treat a choice older than 6 months, or made under an older policy version, as no choice, so the banner shows again.

**6.4 Withdrawal.** The policy says: "the affected analytics or advertising tools stop loading immediately, and we delete their cookies that are set on our domain."
- After a withdrawal, delete `_ga`, `_ga_*`, `_gid`, `_gat*`, `_gcl_*`, `_clck` and `_clsk` on our domain, and `_gcl_ls` in local storage. Today `_clck` and `_clsk` are missing from that list.
- Reload the page so the scripts already loaded stop.
- Cookies on the providers' own domains can't be removed by us; the policy says so too.

**6.5 Consent records, kept 5 years.** The policy says: "We keep a record of your cookie choices (your choice, the date and time, the policy version, and a pseudonymous consent ID) … for five years."
- Generate a random consent ID (UUID), keep it with the stored choice, and send `{ consentId, choice, timestamp, policyVersion }` to a server endpoint on every choice and change.
- **Blocked:** the marketing site has no database. The owner must decide where these records are stored, for example an endpoint on the Growth Rocket API. Build the browser side so it posts to a configurable endpoint, and leave the endpoint as an open item (section 8).

**6.6 A notice before YouTube loads.** The policy says: "Before a video loads, we show a notice explaining that it is provided by YouTube (Google Ireland Limited), which may set cookies and collect viewing data. The video only loads, from youtube-nocookie.com, when you choose to load it."
- In the `/features` video popup (`app/features/VideoLightbox.tsx`, `app/components/ui/YouTubeEmbed.tsx`) and the design pages' video tabs (`app/components/sections/design/DesignSystem.tsx`): clicking a video preview first shows the notice with a "Load video" / "Video laden" button. Only that button loads the youtube-nocookie iframe.
- Notice text, EN: "This video is provided by YouTube (Google Ireland Limited), which may set cookies and collect viewing data."
- Notice text, NL: "Deze video wordt aangeboden door YouTube (Google Ireland Limited), dat cookies kan plaatsen en kijkgegevens kan verzamelen."
- `YouTubeEmbed.tsx` also loads YouTube's player script (`https://www.youtube.com/iframe_api`) for its muted-autoplay fallback. That may only happen after "Load video".

**6.7 Google Ads conversions, only with marketing consent.** The policies say: "contact-form submissions or phone-number clicks".
- Fire the conversion only when marketing consent is granted, both when the lead-enquiry form is submitted successfully (`app/components/LeadEnquiryForm.tsx`) and when any `a[href^="tel:"]` is clicked. One document-level click listener is enough for the phone links.
- **Open, ask the owner** (section 8):
  - `app/components/BookingForm.tsx` currently fires a conversion on booking. The policy doesn't mention bookings, so either remove it, or keep it and have the policy updated.
  - The conversion currency in `app/components/Analytics.tsx` is `"INR"`. Confirm whether it should be EUR.

**6.8 Cookies the policy doesn't list.** After 6.1–6.7, check again with a fresh browser. Today the site also sets Google's `IDE` and `test_cookie` (doubleclick.net) and Microsoft's `SRM_B`, `MR`, `ANONCHK` and `SM` (via Clarity's Bing sync). Each must either stop (for example by turning off ad personalisation) or be added to the policy by the owner. Don't edit the policy text yourself.

## 7. Checks before calling it done

- `npm run build` passes.
- On the legal host, all ten legal URLs (5 English, 5 Dutch) return 200.
- The old Dutch URLs return 308 to the new ones, and asking for a legal URL on www redirects to the legal host.
- Every page shows its own language. The contents column lists every section, and anchor links work, including `/dpa#5-sub-processors` and `/nl/dpa#5-sub-processors`.
- Each page's text matches its document, section by section, with only the changes in section 4.
- The legal sitemap, canonicals, language links, footer links and cookie-banner links all use the new URLs.
- In a fresh browser, consent behaves as promised:
  - before a choice, and after "Reject": no request to any Google or Microsoft domain, and no `_ga`, `_gcl_*`, `_clck` or `_clsk` cookies;
  - after accepting analytics only: Google Analytics and Clarity only;
  - after accepting marketing only: Google Ads only;
  - after withdrawing: the cookies are gone and the tools stop;
  - a stored choice older than 6 months brings the banner back;
  - nothing is requested from YouTube before "Load video".

## 8. Open items for the owner

These block only the parts named.

1. **Where consent records are stored (6.5).** The browser side is built to post to a configurable endpoint.
2. **The booking-form conversion and the INR currency (6.7).**
3. **Cookies the policy doesn't list (6.8):** turn them off, or add them to the policy.
4. **Google site verification by another method**, before removing the unconditional tags (6.1).
5. **Settings outside the site, to confirm in the dashboards:**
   - Clarity masks form fields;
   - Google Analytics keeps data for 14 months;
   - Clarity keeps recordings for 30 days (up to 9 months for marked recordings, heatmaps and summary statistics).
