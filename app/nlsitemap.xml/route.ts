import { buildSitemapXml } from "../lib/sitemap-pages";

// Built from local data only, so it is prerendered at build time.
export const dynamic = "force-static";

export async function GET() {
  return new Response(await buildSitemapXml("nl"), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
