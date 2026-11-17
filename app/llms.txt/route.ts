import { EUR_EN } from "@/pricing";
import { templateHref } from "../designs/design-routes";
import { templates } from "../designs/templates-data";
import { getAllBlogEntries, urlSlugFor } from "../lib/blog-content";
import { CONTACT_INFO } from "../lib/contact";
import { legalHref } from "../lib/legal";
import { OFFERS_INDEXABLE, getOffers, offerHref } from "../lib/offers";
import { SITE_URL } from "../lib/seo";

// Built from local data only, so it is prerendered at build time.
export const dynamic = "force-static";

/**
 * /llms.txt (llmstxt.org): a plain-Markdown summary of the site for AI
 * assistants and answer engines. Built from the same data as the sitemaps, so
 * a new design or blog post is listed without editing this file.
 */
export async function GET() {
  const posts = await getAllBlogEntries("en");
  const url = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;
  // Offers are listed only once their content is real (OFFERS_INDEXABLE).
  const offersSection = OFFERS_INDEXABLE
    ? `## Offers

${getOffers()
  .map(
    (offer) =>
      `- [${offer.en.title}](${url(offerHref(offer, "en"))}): ${offer.en.seoDescription}`,
  )
  .join("\n")}

`
    : "";

  const body = `# Growth Rocket

> Growth Rocket is a complete online business system for small businesses and trades: a professional website plus Growth Rocket Hub for enquiries, appointments, a contact book, quotes and invoices. Hosting, SSL, maintenance and support are included. One package: ${EUR_EN.yearlyOrMonthly}, plus a one-time ${EUR_EN.onboarding} onboarding fee (excl. VAT).

Growth Rocket is run by ${CONTACT_INFO.company}, ${CONTACT_INFO.addressLines.join(", ")}. Sales: ${CONTACT_INFO.emails[0]} · Support: ${CONTACT_INFO.emails[1]} · Phone and WhatsApp: ${CONTACT_INFO.phone}. The site is available in English and in Dutch (under /nl).

## Main pages

- [Home](${url("/")}): What Growth Rocket is and who it is for.
- [Features](${url("/features")}): The website, appointments, enquiries, quotes and invoices, the contact book and support.
- [Pricing](${url("/pricing")}): ${EUR_EN.yearlyOrMonthly}, plus ${EUR_EN.onboarding} onboarding, excl. VAT.
- [Website designs](${url("/design")}): Website designs by industry, each adapted to the customer's business.
- [Website for electricians](${url("/industry/website-for-electricians")}): The package for electrical businesses.
- [Website for plumbers](${url("/industry/website-for-plumbers")}): The package for plumbing businesses.
- [Website for cleaning businesses](${url("/industry/website-for-cleaning-businesses")}): The package for cleaning companies.
- [Website for consultants](${url("/industry/website-for-consultants")}): The package for consultants.
- [Website for accountants](${url("/industry/website-for-accountants")}): The package for accountancy practices.
- [Website for hair salons](${url("/industry/website-for-hair-salons")}): The package for hairdressers and salons.
- [Website for coaches](${url("/industry/coaching-website")}): The package for coaches.
- [Website for healthcare professionals](${url("/industry/website-for-healthcare-professionals")}): The package for healthcare practices.
- [Website for handyman businesses](${url("/industry/website-for-handyman-businesses")}): The package for handyman businesses.
- [Website for professional services](${url("/industry/website-for-professional-services")}): The package for professional service firms.
- [About](${url("/about")}): The company behind Growth Rocket.
- [Partner network](${url("/partner-network")}): Refer small businesses and earn a €200 one-time commission per website that goes live.
- [Contact](${url("/contact")}): Talk to the team about the package and setup.

## Website designs

${templates
  .map(
    (t) =>
      `- [${t.title}](${url(templateHref(t, "en"))}): ${t.subtitle} website design.`,
  )
  .join("\n")}

## Blog

${posts
  .map(
    (entry) =>
      `- [${entry.blog.title}](${url(`/blog/${urlSlugFor(entry)}`)}): ${entry.seo.description}`,
  )
  .join("\n")}

${offersSection}## Dutch

- [Growth Rocket in het Nederlands](${url("/nl")}): The Dutch version of the site, with its own pages, designs and blog.

## Optional

- [English sitemap](${url("/ensitemap.xml")})
- [Dutch sitemap](${url("/nlsitemap.xml")})
- [Privacy policy](${legalHref("/privacy-policy")})
- [Terms and conditions](${legalHref("/terms-and-conditions")})
- [Data processing agreement](${legalHref("/dpa")})
- [Cookie policy](${legalHref("/cookie-policy")})
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
