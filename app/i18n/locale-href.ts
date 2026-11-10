import type { Locale } from "./config";
import { translateDesignsPath } from "../designs/design-routes";
import { translateBlogPath } from "./blog-locale-slugs";
import { translateOfferPath } from "./offer-locale-slugs";

const NL_PREFIX = "/nl";

// Pages whose slug changes between EN and NL. Each NL slug is its page's folder
// under app/nl; the old NL slugs redirect to these (next.config.ts).
const NL_SLUG_MAP: Record<string, string> = {
  "/industry/website-for-electricians": "/branche/website-voor-elektriciens",
  // The industry pages (app/industry): one per Audience card / page-copy doc.
  "/industry/website-for-plumbers": "/branche/website-voor-loodgieters",
  "/industry/website-for-cleaning-businesses": "/branche/website-voor-schoonmaakbedrijven",
  "/industry/website-for-consultants": "/branche/website-voor-consultants",
  "/industry/website-for-accountants": "/branche/website-voor-accountants",
  "/industry/website-for-hair-salons": "/branche/website-voor-kapsalons",
  "/industry/coaching-website": "/branche/website-voor-coaches",
  "/industry/website-for-healthcare-professionals": "/branche/website-voor-zorgverleners",
  "/industry/website-for-handyman-businesses": "/branche/website-voor-klusbedrijven",
  "/industry/website-for-professional-services":
    "/branche/website-voor-zakelijke-dienstverleners",
  "/partner-network": "/partnernetwerk",
  "/about": "/over-ons",
  "/features": "/functies",
  "/pricing": "/prijzen",
  // The legal pages keep their English slug under /nl (/nl/privacy-policy),
  // as the legal documents link to them, so they aren't listed here.
};

const EN_SLUG_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(NL_SLUG_MAP).map(([en, nl]) => [nl, en])
);

export function stripLocalePrefix(pathname: string): string {
  if (!pathname) return "/";
  if (pathname === NL_PREFIX) return "/";
  if (pathname.startsWith(`${NL_PREFIX}/`)) {
    return pathname.slice(NL_PREFIX.length) || "/";
  }
  return pathname;
}

export function localizedHref(href: string, locale: Locale): string {
  if (!href) return href;
  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  ) {
    return href;
  }

  // Translate only the path; any ?query or #anchor rides along unchanged
  // (/about#team → /nl/over-ons#team, /#voorwie → /nl#voorwie).
  const cut = href.search(/[?#]/);
  if (cut > 0) return localizedHref(href.slice(0, cut), locale) + href.slice(cut);

  // The designs section translates its base and industry segment
  // (/designs/electrician ↔ /nl/ontwerpen/elektricien), not just the prefix.
  const designs = translateDesignsPath(href, locale);
  if (designs) return designs;

  // Translated blog posts have their own NL slug (/blog/electrician-website-
  // checklist ↔ /nl/blog/website-checklist-elektriciens).
  const blog = translateBlogPath(href, locale);
  if (blog) return blog;

  // Offers have their own NL base and slugs (/offers/offer-1 ↔ /nl/aanbiedingen/aanbieding-1).
  const offer = translateOfferPath(href, locale);
  if (offer) return offer;

  if (locale !== "nl") {
    // Going to EN — strip /nl prefix and map NL slugs back to EN slugs
    const stripped = stripLocalePrefix(href);
    return EN_SLUG_MAP[stripped] ?? stripped;
  }

  if (!href.startsWith("/")) return href;
  if (href === "/") return NL_PREFIX;
  if (href.startsWith(`${NL_PREFIX}/`) || href === NL_PREFIX) return href;

  // Map EN slugs to their NL equivalents before prefixing
  const nlSlug = NL_SLUG_MAP[href] ?? href;
  return `${NL_PREFIX}${nlSlug}`;
}
