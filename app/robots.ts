import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [
      `${SITE_URL}/ensitemap.xml`,
      `${SITE_URL}/nlsitemap.xml`,
    ],
    // No `host`: the Host directive is non-standard (Yandex-only) and Google
    // Search Console flags it as "Rule ignored by Googlebot". The preferred
    // domain comes from the canonical tags and the www redirect instead.
  };
}
