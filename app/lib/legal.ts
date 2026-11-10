import { localizedHref } from "../i18n/locale-href";

/**
 * The legal pages live on their own subdomain, legal.getgrowthrocket.com,
 * and the rest of the site on www. proxy.ts enforces it in both directions:
 * a legal page asked for on www goes to legal, and anything else asked for on
 * legal goes to www. Their canonicals, the sitemaps and every link to them
 * use the legal URLs below.
 *
 * Local development and Vercel preview hosts are left alone, so every page
 * keeps working on localhost.
 */

export const LEGAL_HOST = "legal.getgrowthrocket.com";
export const LEGAL_ORIGIN = `https://${LEGAL_HOST}`;
export const MAIN_ORIGIN = "https://www.getgrowthrocket.com";
/** The hosts that serve the main site (the bare domain redirects to www). */
export const MAIN_HOSTS = ["www.getgrowthrocket.com", "getgrowthrocket.com"];

/** The legal pages by their EN path. Each one's NL path is its localizedHref
    (/privacy-policy → /nl/privacy-policy, /dpa → /nl/dpa). */
export const LEGAL_PAGES = [
  "/terms-and-conditions",
  "/dpa",
  "/privacy-policy",
  "/cookie-policy",
  "/imprint",
] as const;

/** Legal pages whose Dutch URL still shows the English text (proxy.ts serves
    /nl/dpa from /dpa until a Dutch DPA exists). Dutch links use the /nl URL
    all the same, but the sitemap lists only the English page, which is the
    canonical one. */
const NO_DUTCH_TEXT = new Set<string>(["/dpa"]);

const LEGAL_PATHS = new Set<string>(
  LEGAL_PAGES.flatMap((path) => [path, localizedHref(path, "nl")]),
);

/** Whether a pathname is one of the legal pages, in either language. */
export function isLegalPath(pathname: string): boolean {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return LEGAL_PATHS.has(path);
}

/** The absolute URL of a legal page in a locale, e.g.
    legalHref("/privacy-policy", "nl") → https://legal…/nl/privacy-policy. */
export function legalHref(enPath: string, locale: "en" | "nl" = "en"): string {
  return `${LEGAL_ORIGIN}${localizedHref(enPath, locale)}`;
}

/** Every legal URL that has its own content, for the legal sitemap. */
export function legalSitemapPaths(): string[] {
  return LEGAL_PAGES.flatMap((path) =>
    NO_DUTCH_TEXT.has(path) ? [path] : [path, localizedHref(path, "nl")],
  );
}
