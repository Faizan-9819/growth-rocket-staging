"use client";

import { usePathname } from "next/navigation";
// FooterTest (./sections/home2/FooterTest) is a sitemap version of Footer2 with
// the same props; to use it, swap this import and the one in Home2Client.
import Footer2 from "./sections/home2/Footer2";

/**
 * Routes that take the footer from here but not its contact fold — the legal
 * boilerplate, which has no business closing on a sales pitch; /contact, which
 * is already the page that CTA points at; /about, which ends on `AboutClosing`
 * (about.css paints `.about-closing` lime, the same lime the contact fold uses)
 * so the two would read as one fold that repeated itself; and the /designs
 * index, which ends on `DesignsCta` — lime again, and already a "start with
 * Growth Rocket" pitch of its own; and /industry/website-for-electricians, which closes
 * on its own `ElecClose` and call folds; and /features, which ends on
 * `FeaturesCta` — lime once more, with its own pricing and sales CTAs.
 * Everything else gets it.
 *
 * This list exists because a page rendered into the layout's footer slot has no
 * way to pass `showContactCta` down; routes that mount {@link Footer2} directly
 * (home2) pass the prop instead.
 */
const NO_CONTACT_CTA = new Set([
  "/about",
  "/over-ons",
  "/contact",
  "/design",
  "/designs",
  "/ontwerpen",
  "/features",
  "/functies",
  "/industry/website-for-electricians",
  "/branche/website-voor-elektriciens",
  // The other industry pages share its layout, so they close the same way.
  "/industry/website-for-plumbers",
  "/branche/website-voor-loodgieters",
  "/industry/website-for-cleaning-businesses",
  "/branche/website-voor-schoonmaakbedrijven",
  "/industry/website-for-consultants",
  "/branche/website-voor-consultants",
  "/industry/website-for-accountants",
  "/branche/website-voor-accountants",
  "/industry/website-for-hair-salons",
  "/branche/website-voor-kapsalons",
  "/industry/coaching-website",
  "/branche/website-voor-coaches",
  "/industry/website-for-healthcare-professionals",
  "/branche/website-voor-zorgverleners",
  "/industry/website-for-handyman-businesses",
  "/branche/website-voor-klusbedrijven",
  "/industry/website-for-professional-services",
  "/branche/website-voor-zakelijke-dienstverleners",
  // The legal pages: their Dutch URLs use the same slugs under /nl.
  "/privacy-policy",
  "/imprint",
  "/cookie-policy",
  "/terms-and-conditions",
  "/dpa",
]);

/**
 * Prefixes whose pages opt out the same way. `/designs/<slug>` is a dynamic
 * route, so it cannot be listed above by name: each design page ends on
 * `DesignClose`, which dentalcare.css paints lime (`.dc-close{background:
 * var(--dc-green)}`) — the same lime as the contact fold, so the two would read
 * as one fold that repeated itself, exactly as on /about. NL translates the
 * design base to /ontwerpen, so it is listed alongside the EN ones.
 */
const NO_CONTACT_CTA_PREFIXES = [
  "/designs/",
  "/design/",
  "/ontwerpen/",
  // An offer's detail page carries its own enquiry form, so a contact fold
  // under it would repeat the call to action. The /offers listing keeps it.
  "/offers/",
  "/aanbiedingen/",
];

/** Routes whose contact fold carries the partner copy (EN and NL slugs). */
const PARTNER_ROUTES = new Set(["/partner-network", "/partnernetwerk"]);

/**
 * The root layout's footer slot.
 *
 * home2 ships {@link Footer2} itself as the last fold inside HomeShell, so this
 * stands down there rather than printing a second copy underneath. Everywhere
 * else it supplies what HomeShell would have: the 14px page gutter and the
 * shared content rail, so the footer card sits inset from the viewport edge the
 * way it does on home2 instead of running full-bleed with its radius pinned to
 * the corners. Footer2 brings its own loop strip and contact fold along either
 * way.
 */
export default function SiteFooter() {
  const pathname = usePathname() || "/";
  if (pathname === "/" || pathname === "/nl") return null;

  // The NL routes are the same pages behind a locale prefix, so they match on
  // the unprefixed path rather than being listed twice.
  const route = pathname.startsWith("/nl/")
    ? pathname.slice(3)
    : pathname === "/nl"
      ? "/"
      : pathname;

  const hideContactCta =
    NO_CONTACT_CTA.has(route) ||
    NO_CONTACT_CTA_PREFIXES.some((prefix) => route.startsWith(prefix));

  // /partner-network (NL: /partnernetwerk) closes on the contact fold carrying
  // its own partner pitch instead of the generic one.
  const contactVariant = PARTNER_ROUTES.has(route) ? "partner" : "default";

  return (
    <div className="bg-white px-3.5 pb-3.5">
      <div className="mx-auto max-w-473">
        <Footer2
          showContactCta={!hideContactCta}
          contactVariant={contactVariant}
        />
      </div>
    </div>
  );
}
