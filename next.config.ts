import type { NextConfig } from "next";

/* No `typescript.ignoreBuildErrors`: the project type-checks cleanly, so a
   build with a type error should fail rather than ship. And no
   NODE_TLS_REJECT_UNAUTHORIZED override — it was for the old Cloudways
   WordPress backend, which nothing fetches from any more, and it switched off
   certificate checks for every server-side request. */
const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    // Local images: any path without a query string (the default), plus the
    // feature thumbnails with their cache-busting version (THUMB_VERSION in
    // app/features/data.ts — keep the two in step).
    localPatterns: [
      { pathname: "/**", search: "" },
      { pathname: "/features/thumbnails/**", search: "?v=2" },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.getgrowthrocket.com",
      },
    ],
  },
  async redirects() {
    return [
      // The DPA moved to /dpa (and /nl/dpa). These run before proxy.ts, so
      // the old URL is renamed on whichever host it was asked for.
      {
        source: "/data-processing-agreement",
        destination: "/dpa",
        permanent: true,
      },
      {
        source: "/nl/data-processing-agreement",
        destination: "/nl/dpa",
        permanent: true,
      },
      {
        source: "/blogs",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blogs/:slug*",
        destination: "/blog/:slug*",
        permanent: true,
      },
      {
        source: "/cookie-policy-eu",
        destination: "/cookie-policy",
        permanent: true,
      },
      {
        source: "/cookie-policy-eu/",
        destination: "/cookie-policy",
        permanent: true,
      },
      {
        source: "/fr/cookie-policy-eu",
        destination: "/cookie-policy",
        permanent: true,
      },
      {
        source: "/fr/cookie-policy-eu/",
        destination: "/cookie-policy",
        permanent: true,
      },
      {
        source: "/nl/blog/electrician-website-for-more-calls",
        destination: "/blog/electrician-website-for-more-calls",
        permanent: true,
      },
      {
        source: "/nl/blog/electrician-website-for-more-calls/",
        destination: "/blog/electrician-website-for-more-calls/",
        permanent: true,
      },
      {
        source: "/ggr-electrician",
        destination: "/industry/website-for-electricians",
        permanent: true,
      },
      {
        source: "/ggr-electrician/",
        destination: "/industry/website-for-electricians",
        permanent: true,
      },
      // /home2 is retired in favour of the root home page. Temporary (307)
      // rather than permanent, so browsers don't cache it if /home2 returns.
      {
        source: "/home2",
        destination: "/",
        permanent: false,
      },
      {
        source: "/home2/",
        destination: "/",
        permanent: false,
      },
      {
        source: "/nl/home2",
        destination: "/nl",
        permanent: false,
      },
      {
        source: "/nl/home2/",
        destination: "/nl",
        permanent: false,
      },
      {
        source: "/nl/about",
        destination: "/nl/over-ons",
        permanent: true,
      },
      {
        source: "/nl/about/",
        destination: "/nl/over-ons",
        permanent: true,
      },
      // NL pages renamed to Dutch slugs (allpageurls.xlsx, NL-URL-CHANGES.md).
      // EN URLs are unchanged. Designs with their own NL slug redirect from
      // their old URL in app/nl/ontwerpen/[industry]/[slug] instead.
      // No trailing-slash variants: Next strips the slash (308) before custom
      // redirects run, so `/nl/features/` reaches this rule as `/nl/features`.
      // The legal pages went the other way: their Dutch URLs use the English
      // slug, as the legal documents link to them, and the Dutch slugs they
      // had before redirect there.
      ...[
        ["/nl/features", "/nl/functies"],
        ["/nl/pricing", "/nl/prijzen"],
        ["/nl/offers", "/nl/aanbiedingen"],
        ["/nl/privacybeleid", "/nl/privacy-policy"],
        ["/nl/cookiebeleid", "/nl/cookie-policy"],
        ["/nl/algemene-voorwaarden", "/nl/terms-and-conditions"],
        ["/nl/colofon", "/nl/imprint"],
      ].map(([from, to]) => ({ source: from, destination: to, permanent: true })),
      // An offer under the EN base on the Dutch site; the NL detail page then
      // turns an EN slug into its NL slug.
      {
        source: "/nl/offers/:slug",
        destination: "/nl/aanbiedingen/:slug",
        permanent: true,
      },
      // Industry pages moved under /industry (EN) and /nl/branche (NL).
      ...[
        ["/website-for-electricians", "/industry/website-for-electricians"],
        ["/website-for-plumbers", "/industry/website-for-plumbers"],
        ["/website-for-cleaning-businesses", "/industry/website-for-cleaning-businesses"],
        ["/website-for-consultants", "/industry/website-for-consultants"],
        ["/website-for-accountants", "/industry/website-for-accountants"],
        ["/website-for-hair-salons", "/industry/website-for-hair-salons"],
        ["/website-for-coaches", "/industry/coaching-website"],
        ["/website-for-healthcare-professionals", "/industry/website-for-healthcare-professionals"],
        ["/website-for-handyman-businesses", "/industry/website-for-handyman-businesses"],
        ["/website-for-professional-services", "/industry/website-for-professional-services"],
        ["/nl/website-voor-elektriciens", "/nl/branche/website-voor-elektriciens"],
        ["/nl/website-voor-loodgieters", "/nl/branche/website-voor-loodgieters"],
        ["/nl/website-voor-schoonmaakbedrijven", "/nl/branche/website-voor-schoonmaakbedrijven"],
        ["/nl/website-voor-consultants", "/nl/branche/website-voor-consultants"],
        ["/nl/website-voor-accountants", "/nl/branche/website-voor-accountants"],
        ["/nl/website-voor-kappers-en-salons", "/nl/branche/website-voor-kapsalons"],
        ["/nl/website-voor-coaches", "/nl/branche/website-voor-coaches"],
        ["/nl/website-voor-zorgverleners", "/nl/branche/website-voor-zorgverleners"],
        ["/nl/website-voor-klusbedrijven", "/nl/branche/website-voor-klusbedrijven"],
        ["/nl/website-voor-zakelijke-dienstverleners", "/nl/branche/website-voor-zakelijke-dienstverleners"],
        // EN slugs under /nl (old language-switch targets) go straight to NL.
        ["/nl/website-for-electricians", "/nl/branche/website-voor-elektriciens"],
      ].map(([from, to]) => ({ source: from, destination: to, permanent: true })),
    ];
  },
};

export default nextConfig;
