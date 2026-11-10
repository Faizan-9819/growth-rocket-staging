import { LEGAL_ORIGIN } from "../lib/legal";

export const dynamic = "force-static";

/** robots.txt of legal.getgrowthrocket.com (proxy.ts serves it there),
    pointing crawlers at the legal sitemap. */
export function GET() {
  const body = `User-Agent: *
Allow: /

Sitemap: ${LEGAL_ORIGIN}/sitemap.xml
`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
