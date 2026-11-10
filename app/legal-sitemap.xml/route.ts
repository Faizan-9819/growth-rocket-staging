import { LEGAL_ORIGIN, legalSitemapPaths } from "../lib/legal";

// Built from local data only, so it is prerendered at build time.
export const dynamic = "force-static";

/**
 * The sitemap of legal.getgrowthrocket.com: only the legal pages, EN and NL.
 * proxy.ts serves it as /sitemap.xml on that host; www's own sitemaps leave
 * these pages out.
 */
export function GET() {
  const urls = legalSitemapPaths()
    .map(
      (path) => `  <url>
    <loc>${LEGAL_ORIGIN}${path}</loc>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
