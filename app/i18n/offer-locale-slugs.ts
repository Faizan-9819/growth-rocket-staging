/**
 * EN offer slug → NL URL slug. Mirrors blog-locale-slugs.ts: localizedHref()
 * reads this so the Navbar language switch, footer links and the Dutch
 * first-visit redirect land on the offer's real URL in the other language.
 * Kept as a plain map so client bundles don't pull in the offer content
 * (app/lib/offers.ts).
 */
export const NL_OFFER_SLUGS: Record<string, string> = {
  "offer-1": "aanbieding-1",
  "offer-2": "aanbieding-2",
  "offer-3": "aanbieding-3",
  "offer-4": "aanbieding-4",
  "offer-5": "aanbieding-5",
  "offer-6": "aanbieding-6",
  "offer-7": "aanbieding-7",
  "offer-8": "aanbieding-8",
  "offer-9": "aanbieding-9",
};

const EN_OFFER_SLUGS: Record<string, string> = Object.fromEntries(
  Object.entries(NL_OFFER_SLUGS).map(([en, nl]) => [nl, en]),
);

export const OFFERS_BASE = { en: "/offers", nl: "/nl/aanbiedingen" } as const;

/**
 * Translate an offers path (/offers[/slug], /nl/aanbiedingen[/slug] or the
 * redirected /nl/offers[/slug], with either language's slug) into `to`'s URL.
 * Returns null for any other path.
 */
export function translateOfferPath(
  pathname: string,
  to: "en" | "nl",
): string | null {
  const match = pathname.match(
    /^(?:\/offers|\/nl\/aanbiedingen|\/nl\/offers)(?:\/([^/]+))?\/?$/,
  );
  if (!match) return null;
  const slug = match[1];
  if (!slug) return OFFERS_BASE[to];
  const enSlug = EN_OFFER_SLUGS[slug] ?? slug;
  return to === "nl"
    ? `${OFFERS_BASE.nl}/${NL_OFFER_SLUGS[enSlug] ?? enSlug}`
    : `${OFFERS_BASE.en}/${enSlug}`;
}
