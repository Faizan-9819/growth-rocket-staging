/**
 * EN blog slug → NL URL slug, for every post whose Dutch URL differs from its
 * English one (the NL entry's `localizedSlug` in content/nl/blogs/<slug>/blog.ts).
 * Posts not listed here use the same slug in both languages.
 *
 * localizedHref() reads this so the Navbar language switch, and any link
 * passed through it, lands on the post's real URL in the other language.
 * Kept as a plain map so client bundles don't pull in the blog content.
 */
export const NL_BLOG_SLUGS: Record<string, string> = {
  "10-how-to-write-an-about-us-page-for-an-electrician":
    "10-zo-schrijf-je-een-over-ons-pagina-voor-een-elektricien",
  "11-how-growth-rocket-gets-your-electrician-website-live-in-7-days":
    "11-elektricienwebsite-laten-maken",
  "3-diy-vs-done-for-you-website-for-an-electrician-which-one-fits-you":
    "3-website-zelf-maken-of-laten-maken-de-eerlijke-vergelijking-voor-elektriciens",
  "6-mobile-website-for-electricians": "mobiele-website-voor-elektriciens",
  "7-elements-of-a-high-converting-electrician-homepage":
    "de-7-elementen-van-een-elektricien-homepage-die-aanvragen-oplevert",
  "8-electrician-website-examples-that-actually-win-customers":
    "8-voorbeelden-van-elektricienwebsites-die-klanten-opleveren",
  "electrician-website-build-timeline": "hoe-lang-duurt-een-elektricien-website",
  "electrician-website-checklist": "website-checklist-elektriciens",
  "electrician-website-cost-netherlands":
    "kosten-website-voor-elektricien-in-nederland",
  "mobile-website-for-electricians-a-practical-guide-to-getting-it-right":
    "mobielvriendelijke-elektricien-website-de-praktische-gids-om-het-goed-te-doen",
  "wordpress-vs-waas-website-for-electrician-businesses-an-honest-comparison":
    "wordpress-of-een-website-abonnement-de-eerlijke-vergelijking-voor-elektriciens",
};

const EN_BLOG_SLUGS: Record<string, string> = Object.fromEntries(
  Object.entries(NL_BLOG_SLUGS).map(([en, nl]) => [nl, en]),
);

/**
 * Translate a blog post path (/blog/<slug> or /nl/blog/<slug>, either
 * language's slug) into `to`'s URL. Returns null for any other path.
 */
export function translateBlogPath(
  pathname: string,
  to: "en" | "nl",
): string | null {
  const match = pathname.match(/^(?:\/nl)?\/blog\/([^/]+)\/?$/);
  if (!match) return null;
  const enSlug = EN_BLOG_SLUGS[match[1]] ?? match[1];
  return to === "nl"
    ? `/nl/blog/${NL_BLOG_SLUGS[enSlug] ?? enSlug}`
    : `/blog/${enSlug}`;
}
