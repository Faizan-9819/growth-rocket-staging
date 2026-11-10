import type { Metadata } from "next";
import type { BlogPost } from "./blog-posts";
import { LEGAL_ORIGIN, isLegalPath } from "./legal";

export const SITE_URL = "https://www.getgrowthrocket.com";

/** The absolute URL of a site path — on legal.getgrowthrocket.com for the
    legal pages, www for everything else. */
function pageUrl(path: string) {
  if (isLegalPath(path)) return `${LEGAL_ORIGIN}${path}`;
  return `${SITE_URL}${path === "/" ? "" : path}`;
}
export const DEFAULT_OG_IMAGE = `${SITE_URL}/figma/hero-dashboard.png`;

export function toAbsoluteUrl(url: string) {
  if (!url) return DEFAULT_OG_IMAGE;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`;
}

/**
 * Open Graph + Twitter tags for a page. Next merges metadata shallowly, so a
 * page without its own `openGraph`/`twitter` inherits the root layout's (the
 * home page text). Spread this into each page's metadata alongside its title
 * and description so link previews and SEO tools see the right copy.
 *
 * Setting `openGraph` also drops the image inherited from app/opengraph-image,
 * so it is listed again here (same route, size and alt as that file). NL
 * pages get the Dutch card, app/nl/opengraph-image.
 */
const SHARE_IMAGE = {
  en: {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "Growth Rocket - Not just a website. A complete business system.",
  },
  nl: {
    url: "/nl/opengraph-image",
    width: 1200,
    height: 630,
    alt: "Growth Rocket - Meer dan een website. Een compleet systeem voor jouw bedrijf.",
  },
};

export function socialMeta(
  title: string,
  description: string,
  path: string,
): Pick<Metadata, "openGraph" | "twitter"> {
  const nl = path === "/nl" || path.startsWith("/nl/");
  const image = SHARE_IMAGE[nl ? "nl" : "en"];
  return {
    openGraph: {
      type: "website",
      url: pageUrl(path),
      siteName: "Growth Rocket",
      locale: nl ? "nl_NL" : "en_US",
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function buildPageSchema(
  path: string,
  name: string,
  description: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: pageUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: "Growth Rocket",
      url: SITE_URL,
    },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Growth Rocket",
    url: SITE_URL,
    logo: `${SITE_URL}/figma/icons/logos/logoblack.svg`,
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Growth Rocket",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/blog?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildFaqJsonLdFromItems(
  items: ReadonlyArray<{ question: string; answer: string }>,
) {
  if (items.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * `urlSlugs.nl` is null for a post with no Dutch translation: its /nl URL
 * only falls back to the English article, so neither page claims a Dutch
 * alternate and the /nl page canonicalises to the English one.
 */
export function buildBlogPostingMetadata(
  post: BlogPost,
  locale: "en" | "nl" = "en",
  urlSlugs?: { en: string; nl: string | null },
): Metadata {
  const title = post.title;
  const hasNl = urlSlugs ? urlSlugs.nl !== null : true;
  const enSlug = urlSlugs?.en ?? post.slug;
  const nlSlug = urlSlugs?.nl ?? post.slug;
  const canonicalPath =
    locale === "nl" && hasNl ? `/nl/blog/${nlSlug}` : `/blog/${enSlug}`;
  const canonical = `${SITE_URL}${canonicalPath}`;
  const enUrl = `${SITE_URL}/blog/${enSlug}`;
  const nlUrl = `${SITE_URL}/nl/blog/${nlSlug}`;
  const image = toAbsoluteUrl(post.coverImage);

  return {
    title,
    description: post.description,
    alternates: {
      canonical,
      languages: hasNl ? { en: enUrl, nl: nlUrl } : { en: enUrl },
    },
    openGraph: {
      title,
      description: post.description,
      url: canonical,
      type: "article",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.description,
      images: [image],
    },
  };
}

/** A listing page and the items it lists — the designs overview and each
    industry's filtered view. */
export function buildCollectionPageSchema(
  path: string,
  name: string,
  description: string,
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    isPartOf: {
      "@type": "WebSite",
      name: "Growth Rocket",
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: `${SITE_URL}${item.path}`,
      })),
    },
  };
}
