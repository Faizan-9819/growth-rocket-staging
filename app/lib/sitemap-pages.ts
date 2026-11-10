import { getPageCopy } from "../components/sections/design/page-copy";
import { designsHref, INDUSTRY_SLUGS, templateHref } from "../designs/design-routes";
import { templates } from "../designs/templates-data";
import { localizedHref } from "../i18n/locale-href";
import { getAllBlogEntries, getNlTranslations, urlSlugFor } from "./blog-content";
import { OFFERS_INDEXABLE, getOffers, offerHref } from "./offers";
import { SITE_URL } from "./seo";

type Locale = "en" | "nl";

/**
 * One page in both languages; each locale's sitemap lists its own URL. `nl`
 * is left out for a page with no Dutch version (an untranslated blog post, a
 * design without Dutch copy) — its /nl URL only shows the English page, which
 * canonicalises to the EN URL, so it doesn't belong in the Dutch sitemap.
 */
type SitemapPage = {
  en: string;
  nl?: string;
  priority: string;
  changefreq: string;
  lastmod?: string;
};

/**
 * EN paths of the non-blog, non-design pages. Their NL URL comes from
 * localizedHref — the same EN→NL slug map the Navbar and every link use — so
 * a renamed NL page is picked up here without touching this file.
 */
const STATIC_PAGES: Array<[path: string, priority: string, changefreq: string]> = [
  ["/", "1.0", "weekly"],
  ["/industry/website-for-electricians", "0.9", "weekly"],
  ["/industry/website-for-plumbers", "0.9", "weekly"],
  ["/industry/website-for-cleaning-businesses", "0.9", "weekly"],
  ["/industry/website-for-consultants", "0.9", "weekly"],
  ["/industry/website-for-accountants", "0.9", "weekly"],
  ["/industry/website-for-hair-salons", "0.9", "weekly"],
  ["/industry/coaching-website", "0.9", "weekly"],
  ["/industry/website-for-healthcare-professionals", "0.9", "weekly"],
  ["/industry/website-for-handyman-businesses", "0.9", "weekly"],
  ["/industry/website-for-professional-services", "0.9", "weekly"],
  ["/features", "0.9", "monthly"],
  ["/pricing", "0.9", "monthly"],
  ["/design", "0.8", "monthly"],
  ["/about", "0.7", "monthly"],
  ["/partner-network", "0.7", "monthly"],
  ["/blog", "0.8", "daily"],
  ["/contact", "0.7", "monthly"],
  // The legal pages are on legal.getgrowthrocket.com, with their own sitemap
  // (app/legal-sitemap.xml); www only redirects them there.
];

async function getSitemapPages(): Promise<SitemapPage[]> {
  const staticPages = STATIC_PAGES.map(([path, priority, changefreq]) => ({
    en: path,
    nl: localizedHref(path, "nl"),
    priority,
    changefreq,
  }));

  const industryPages = Object.keys(INDUSTRY_SLUGS).map((category) => ({
    en: designsHref("en", category),
    nl: designsHref("nl", category),
    priority: "0.7",
    changefreq: "monthly",
  }));

  const designPages = templates.map((template) => ({
    en: templateHref(template, "en"),
    nl: getPageCopy(template, "nl") ? templateHref(template, "nl") : undefined,
    priority: "0.6",
    changefreq: "monthly",
  }));

  // EN and NL entries of a post share `blog.slug`; the URL uses each
  // locale's own slug. Hidden posts are already left out, and so is the NL
  // URL of a post with no Dutch translation.
  const [enPosts, nlPosts] = await Promise.all([
    getAllBlogEntries("en"),
    getNlTranslations(),
  ]);
  const nlBySlug = new Map(nlPosts.map((entry) => [entry.blog.slug, entry]));
  const blogPages = enPosts.map((entry) => {
    const nl = nlBySlug.get(entry.blog.slug);
    const { published, updated } = entry.blog;
    return {
      en: `/blog/${urlSlugFor(entry)}`,
      nl: nl ? `/nl/blog/${urlSlugFor(nl)}` : undefined,
      priority: "0.7",
      changefreq: "monthly",
      lastmod: (updated ?? published)?.slice(0, 10),
    };
  });

  // Offers are listed only once their content is real (OFFERS_INDEXABLE).
  const offerPages: SitemapPage[] = OFFERS_INDEXABLE
    ? [
        {
          en: "/offers",
          nl: localizedHref("/offers", "nl"),
          priority: "0.6",
          changefreq: "weekly",
        },
        ...getOffers().map((offer) => ({
          en: offerHref(offer, "en"),
          nl: offerHref(offer, "nl"),
          priority: "0.6",
          changefreq: "weekly",
        })),
      ]
    : [];

  return [
    ...staticPages,
    ...industryPages,
    ...designPages,
    ...blogPages,
    ...offerPages,
  ];
}

const abs = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

/**
 * The <urlset> for one locale. No `<xhtml:link>` hreflang alternates: every
 * page already declares its EN and NL alternates in its <head>, and an element
 * in the XHTML namespace makes browsers render the file as run-together text
 * instead of the XML tree /sitemap.xml shows.
 */
export async function buildSitemapXml(locale: Locale): Promise<string> {
  const pages = await getSitemapPages();
  const urls = pages.flatMap((page) => {
    const path = page[locale];
    if (!path) return [];
    const lines = [
      `    <loc>${abs(path)}</loc>`,
      ...(page.lastmod ? [`    <lastmod>${page.lastmod}</lastmod>`] : []),
      `    <changefreq>${page.changefreq}</changefreq>`,
      `    <priority>${page.priority}</priority>`,
    ];
    return `  <url>\n${lines.join("\n")}\n  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
}
