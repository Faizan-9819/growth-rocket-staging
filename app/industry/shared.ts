/* Copy every industry page shares word for word: prices, the Hub card, the
   package bar, launch steps, call band and closing CTA. The approved industry
   page documents (content/seprate-pages/) all repeat these from the
   electrician page, so they live here once. Each industry's data.ts spreads
   these blocks in and adds its own lines.

   Prices come from /pricing. Running text quotes the euro prices through
   EUR_EN / EUR_NL (CurrencyProvider shows them in the visitor's currency); the
   price blocks hold "{token}" placeholders (pricing/view.ts) that their
   components fill in the visitor's currency. */

import { EUR_EN, EUR_NL } from "@/pricing";
import type { FeatureIconName } from "../components/sections/featureIcons";
import type { Locale } from "../i18n/config";
import type { IndustryCopy, OfferFeature } from "./types";


/* Same icon per row in both locales, so only the labels are written out. */
const WEBSITE_ICONS: FeatureIconName[] = [
  "pages",
  "mobileSeo",
  "video",
  "forms",
  "domain",
  "hosting",
  "maintenance",
];
const HUB_ICONS: FeatureIconName[] = [
  "leads",
  "booking",
  "customers",
  "quotes",
  "invoices",
  "support",
];

function withIcons(labels: string[], icons: FeatureIconName[]): OfferFeature[] {
  return labels.map((label, index) => ({ label, icon: icons[index] }));
}

/* Default photos (the electrician page's). Other industries pass their own
   via `industryImages()`. */
export const HERO_IMAGE = "/electricians/hero-distribution-board.webp";
export const LOCAL_IMAGE = "/electricians/placeholder.webp";

/* Crop tuned for the electrician hero photo: keeps the hands, screwdriver
   and breakers on the right and his head clear of the top edge. */
const HERO_IMAGE_POSITION = "object-[75%_25%]";

export type IndustryImages = {
  /** Hero photo (the "-1" image). */
  hero: string;
  /** "Your services. … Your website." section photo (the "-2" image). */
  local: string;
};

/** Paths to an industry's photos in public/industry-pages-img. */
export function industryImages(
  heroFile: string,
  localFile: string,
): IndustryImages {
  return {
    hero: `/industry-pages-img/${heroFile}`,
    local: `/industry-pages-img/${localFile}`,
  };
}

/** The "Discuss a bespoke setup" mail link, with the industry in its subject. */
export function bespokeHref(subject: string): string {
  return `mailto:sales@getgrowthrocket.com?subject=${encodeURIComponent(subject)}`;
}

const CALL_HREF =
  "mailto:sales@getgrowthrocket.com?subject=Book%20a%20call%20about%20Growth%20Rocket";

type SharedCopy = Pick<
  IndustryCopy,
  "JUMP_LINKS" | "BILLING" | "BILLING_UI" | "SETUP_FEE" | "LAUNCH" | "CALL" | "CLOSE"
> & {
  HERO: Pick<
    IndustryCopy["HERO"],
    | "headingAccent"
    | "primaryCta"
    | "meta"
    | "fee"
    | "footnote"
    | "image"
    | "breadcrumbLabel"
    | "breadcrumbHome"
    | "jumpLabel"
  >;
  OFFER: Pick<
    IndustryCopy["OFFER"],
    "heading" | "headingAccent" | "hub" | "package"
  > & {
    website: Pick<
      IndustryCopy["OFFER"]["website"],
      "headingHighlight" | "sub" | "foot" | "features"
    >;
  };
  WORKFLOW: Pick<IndustryCopy["WORKFLOW"], "listLabel" | "stepLabel">;
  LOCAL: Pick<IndustryCopy["LOCAL"], "image">;
  PRICING: Pick<
    IndustryCopy["PRICING"],
    "headingLines" | "headingAccent" | "includes" | "smallLead" | "cta"
  > & { smallLinkLabel: string };
  DESIGNS: Pick<IndustryCopy["DESIGNS"], "headingAccent">;
  FAQ: Pick<IndustryCopy["FAQ"], "intro">;
  GUIDE: Pick<IndustryCopy["GUIDE"], "readLabel">;
};

/* ---------- EN ---------- */

const en: SharedCopy = {
  HERO: {
    headingAccent: "With a system for the business behind it.",
    primaryCta: { label: "Get Growth Rocket", href: "#industry-pricing" },
    meta: ["Online within 7 working days*", EUR_EN.monthlyOrYearly],
    fee: `Plus ${EUR_EN.onboarding} one-time onboarding fee.`,
    footnote:
      "* The timeframe starts once we receive all required information and materials and depends on timely approvals.",
    image: HERO_IMAGE,
    breadcrumbLabel: "Breadcrumb",
    breadcrumbHome: "Home",
    jumpLabel: "On this page",
  },

  JUMP_LINKS: [
    { href: "#industry-package", label: "What’s included" },
    { href: "#industry-local", label: "Your local presence" },
    { href: "#industry-designs", label: "Website designs" },
    { href: "#industry-pricing", label: "Pricing" },
    { href: "#industry-faq", label: "Questions" },
  ],

  OFFER: {
    heading: "Your website, business tools",
    headingAccent: "and technical care. Included.",
    website: {
      headingHighlight: "website",
      sub: "We design it. We build it. We look after it.",
      foot: "Built for you. Looked after for you.",
      features: withIcons(
        [
          "8–10 pages, built for your business",
          "Mobile-friendly & SEO-ready",
          "30-second business video",
          "Enquiry & contact forms",
          "Your own domain name",
          "Hosting & SSL included",
          "Maintenance & updates",
        ],
        WEBSITE_ICONS,
      ),
    },
    hub: {
      headingHighlight: "Growth Rocket Hub",
      headingTail: ", your business tools in one place.",
      sub: "From your first enquiry to your invoice.",
      foot: "Your everyday work. All in one place.",
      features: withIcons(
        [
          "Inquiry Management",
          "Online appointment booking",
          "Customer & contact records",
          "Create & send quotes",
          "Create & send invoices",
          "Help & support requests",
        ],
        HUB_ICONS,
      ),
    },
    package: {
      eyebrow: "TWO PARTS. ONE COMPLETE PACKAGE.",
      heading: "Your website + your business tools.",
      priceLead: "From",
      price: "{monthly}",
      pricePeriod: " / month",
      pricePeriodYearly: " / year",
      cta: { label: "Explore the package", href: "/pricing" },
    },
  },

  WORKFLOW: {
    listLabel: "Example customer journey",
    stepLabel: "Step",
  },

  LOCAL: { image: LOCAL_IMAGE },

  PRICING: {
    headingLines: ["Your website.", "Your business system."],
    headingAccent: "All looked after.",
    includes: [
      "A professional website tailored to your business",
      "Growth Rocket Hub for everyday business tasks",
      "Hosting, SSL, maintenance and support",
    ],
    smallLead: "Need additional pages or custom functionality? ",
    smallLinkLabel: "Discuss a bespoke setup",
    cta: { label: "Start with Growth Rocket" },
  },

  /* The two states the [data-billing] switch toggles between. */
  BILLING: {
    annual: {
      old: "{yearlyWas}",
      current: "{yearly}",
      period: "/ year",
      detail: "That’s {yearlyPerMonth} a month, billed annually.",
      saving: "Save {annualSaving} compared with 12 monthly payments.",
    },
    monthly: {
      old: "{monthlyWas}",
      current: "{monthly}",
      period: "/ month",
      detail: "Billed monthly.",
      saving: "Save {annualSaving} a year when you choose annual billing.",
    },
  },

  /* The billing switch's own labels. */
  BILLING_UI: {
    groupLabel: "Choose billing period",
    annually: "Annually",
    saveBadge: "Save {savingPercent}",
    monthly: "Monthly",
    billedAnnually: "Billed annually.",
  },

  SETUP_FEE: {
    amount: "+ {onboarding}",
    label: "one-time onboarding fee",
  },

  DESIGNS: { headingAccent: "Make it your own." },

  LAUNCH: {
    headingLead: "Online within ",
    headingAccent: "7 working days*.",
    headingTail: "Without the tech headache.",
    intro: "Four clear steps. We do the setup, you have the say.",
    steps: [
      {
        num: "01",
        title: "Tell us your story.",
        body: "Your services, your customers, your ideas. We get to know what makes your business yours.",
        owner: "YOU + US",
      },
      {
        num: "02",
        title: "We bring it to life.",
        body: "We design and build your website and set up your enquiry forms and appointments.",
        owner: "WE TAKE IT FROM HERE",
      },
      {
        num: "03",
        title: "Make it feel right.",
        body: "Take a look, tell us what you think, and we make the final adjustments together.",
        owner: "YOUR SIGN-OFF",
      },
      {
        num: "04",
        title: "You’re open online.",
        body: "Your website goes live on your own domain, tested and connected to your Growth Rocket Hub.",
        owner: "READY FOR BUSINESS",
      },
    ],
    small:
      "* The timeframe starts once we receive all required information and materials and depends on timely approvals.",
  },

  CALL: {
    headingLead: "Start with the complete",
    headingAccent: "Growth Rocket",
    headingTail: " package.",
    introLead:
      "Your professional website, Growth Rocket Hub, hosting, maintenance and support.",
    /* The source ends the sentence above; there is no bolded price after it. */
    introStrong: "",
    priceLabel: "FROM",
    price: "{monthly}",
    pricePeriod: "/ month",
    pricePeriodYearly: "/ year",
    cta: { label: "Book a call", href: CALL_HREF },
  },

  FAQ: { intro: "Clear answers before you get started." },

  GUIDE: { readLabel: "Read the guide" },

  CLOSE: {
    heading: "Great at your trade.",
    headingAccent: "Ready for your next chapter.",
    bodyLines: [
      "Your professional website. Your connected business system.",
      "A team to keep the technical side running.",
    ],
    cta: { label: "Get Growth Rocket", href: "#industry-pricing" },
  },
};

/* ---------- NL ---------- */

const nl: SharedCopy = {
  HERO: {
    headingAccent: "Met een systeem voor het bedrijf erachter.",
    primaryCta: { label: "Kies Growth Rocket", href: "#industry-pricing" },
    meta: ["Binnen 7 werkdagen online*", EUR_NL.monthlyOrYearly],
    fee: `Plus ${EUR_NL.onboarding} eenmalige opstartkosten.`,
    footnote:
      "* De termijn begint zodra we alle benodigde informatie en materialen hebben ontvangen en is afhankelijk van tijdige goedkeuring.",
    image: HERO_IMAGE,
    breadcrumbLabel: "Broodkruimelnavigatie",
    breadcrumbHome: "Home",
    jumpLabel: "Op deze pagina",
  },

  JUMP_LINKS: [
    { href: "#industry-package", label: "Wat je krijgt" },
    { href: "#industry-local", label: "Lokaal zichtbaar" },
    { href: "#industry-designs", label: "Websiteontwerpen" },
    { href: "#industry-pricing", label: "Prijzen" },
    { href: "#industry-faq", label: "Vragen" },
  ],

  OFFER: {
    heading: "Je website, met alles om je dagelijkse werk te regelen.",
    headingAccent: "En technisch beheer, voor je geregeld.",
    website: {
      headingHighlight: "website",
      sub: "Wij ontwerpen, bouwen en onderhouden je website.",
      foot: "Voor jou gemaakt. Voor jou onderhouden.",
      features: withIcons(
        [
          "8–10 pagina’s voor jouw bedrijf",
          "Mobielvriendelijk en klaar voor SEO",
          "Bedrijfsvideo van 30 seconden",
          "Aanvraag- en contactformulieren",
          "Je eigen domeinnaam",
          "Inclusief hosting en SSL",
          "Onderhoud en updates",
        ],
        WEBSITE_ICONS,
      ),
    },
    hub: {
      headingHighlight: "Growth Rocket Hub",
      headingTail: ", alles om je dagelijkse werk te regelen op één plek.",
      sub: "Van de eerste aanvraag tot de factuur.",
      foot: "Je dagelijkse werk. Alles op één plek.",
      features: withIcons(
        [
          "Aanvragen beheren",
          "Online afspraken boeken",
          "Klanten en contacten beheren",
          "Offertes maken en versturen",
          "Facturen maken en versturen",
          "Supportverzoeken indienen",
        ],
        HUB_ICONS,
      ),
    },
    package: {
      eyebrow: "TWEE ONDERDELEN. ÉÉN PAKKET.",
      heading: "Je website, met alles om je dagelijkse werk te regelen.",
      priceLead: "Vanaf",
      price: "{monthly}",
      pricePeriod: " / maand",
      pricePeriodYearly: " / jaar",
      cta: { label: "Bekijk het pakket", href: "/pricing" },
    },
  },

  WORKFLOW: {
    listLabel: "Voorbeeld van een klanttraject",
    stepLabel: "Stap",
  },

  LOCAL: { image: LOCAL_IMAGE },

  PRICING: {
    headingLines: ["Jouw website.", "Jouw complete online businesssysteem."],
    headingAccent: "Alles voor je geregeld.",
    includes: [
      "Een professionele website op maat voor je bedrijf",
      "Growth Rocket Hub voor je dagelijkse bedrijfsvoering",
      "Hosting, SSL, onderhoud en ondersteuning",
    ],
    smallLead: "Extra pagina’s of specifieke functies nodig? ",
    smallLinkLabel: "Bespreek de mogelijkheden voor maatwerk",
    cta: { label: "Start met Growth Rocket" },
  },

  BILLING: {
    annual: {
      old: "{yearlyWas}",
      current: "{yearly}",
      period: "/ jaar",
      detail: "Dat is {yearlyPerMonth} per maand, jaarlijks gefactureerd.",
      saving: "Je bespaart {annualSaving} ten opzichte van 12 maandbetalingen.",
    },
    monthly: {
      old: "{monthlyWas}",
      current: "{monthly}",
      period: "/ maand",
      detail: "Maandelijks gefactureerd.",
      saving: "Bespaar {annualSaving} per jaar als je jaarlijks betaalt.",
    },
  },

  BILLING_UI: {
    groupLabel: "Kies je betaalperiode",
    annually: "Jaarlijks",
    saveBadge: "Bespaar {savingPercent}",
    monthly: "Maandelijks",
    billedAnnually: "Jaarlijks gefactureerd.",
  },

  SETUP_FEE: {
    amount: "+ {onboarding}",
    label: "eenmalige opstartkosten",
  },

  DESIGNS: { headingAccent: "Maak het helemaal van jou." },

  LAUNCH: {
    headingLead: "Binnen ",
    headingAccent: "7 werkdagen online*.",
    headingTail: "Zonder technisch gedoe.",
    intro: "Vier heldere stappen. Wij regelen het, jij bepaalt.",
    steps: [
      {
        num: "01",
        title: "Vertel ons je verhaal.",
        body: "Je diensten, je klanten, je ideeën. We leren jou en je bedrijf kennen.",
        owner: "Jij + wij",
      },
      {
        num: "02",
        title: "Wij bouwen je website.",
        body: "We ontwerpen en bouwen je website en richten je aanvraagformulieren en afspraken in.",
        owner: "Wij gaan aan de slag",
      },
      {
        num: "03",
        title: "Samen de puntjes op de i.",
        body: "Bekijk het resultaat en laat ons weten wat je ervan vindt. Samen maken we de laatste aanpassingen.",
        owner: "Jouw akkoord",
      },
      {
        num: "04",
        title: "Je website gaat live.",
        body: "Je website gaat live op je eigen domein, getest en gekoppeld aan je Growth Rocket Hub.",
        owner: "Klaar voor je klanten",
      },
    ],
    small:
      "* De termijn begint zodra we alle benodigde informatie en materialen hebben ontvangen en is afhankelijk van tijdige goedkeuring.",
  },

  CALL: {
    headingLead: "Kies het",
    headingAccent: "Growth Rocket",
    headingTail: " pakket.",
    introLead:
      "Je professionele website, Growth Rocket Hub, hosting, onderhoud en ondersteuning.",
    introStrong: "",
    priceLabel: "VANAF",
    price: "{monthly}",
    pricePeriod: "/ maand",
    pricePeriodYearly: "/ jaar",
    cta: { label: "Plan een gesprek", href: CALL_HREF },
  },

  FAQ: { intro: "Heldere antwoorden op je vragen." },

  GUIDE: { readLabel: "Lees de tips" },

  CLOSE: {
    heading: "Sterk in je vak.",
    headingAccent: "Klaar voor de volgende stap.",
    bodyLines: [
      "Je professionele website. Je complete online businesssysteem.",
      "Een team dat de techniek voor je regelt.",
    ],
    cta: { label: "Kies Growth Rocket", href: "#industry-pricing" },
  },
};

export const SHARED: Record<Locale, SharedCopy> = { en, nl };

/** The lines each industry writes itself; everything else comes from SHARED. */
export type IndustrySpecificCopy = {
  HERO: Pick<
    IndustryCopy["HERO"],
    "kicker" | "heading" | "benefits" | "textLink" | "photoAlt" | "breadcrumbCurrent"
  >;
  INTRO: IndustryCopy["INTRO"];
  OFFER: Pick<IndustryCopy["OFFER"], "intro"> & {
    website: Pick<IndustryCopy["OFFER"]["website"], "headingLead" | "headingTail">;
  };
  WORKFLOW: Pick<
    IndustryCopy["WORKFLOW"],
    "headingParts" | "start" | "steps" | "note"
  >;
  LOCAL: Omit<IndustryCopy["LOCAL"], "image">;
  /** `bespokeSubject` is the subject line of the bespoke-setup mail link. */
  PRICING: Pick<IndustryCopy["PRICING"], "intro"> & { bespokeSubject: string };
  DESIGNS: Omit<IndustryCopy["DESIGNS"], "headingAccent">;
  FAQ: Omit<IndustryCopy["FAQ"], "intro">;
  FAQ_ITEMS: IndustryCopy["FAQ_ITEMS"];
  GUIDE: Omit<IndustryCopy["GUIDE"], "readLabel">;
};

/** One locale's full page copy: the shared blocks plus the industry's own. */
export function buildIndustryCopy(
  locale: Locale,
  own: IndustrySpecificCopy,
  images?: IndustryImages,
): IndustryCopy {
  const shared = SHARED[locale];
  const { smallLinkLabel, ...pricing } = shared.PRICING;
  const heroImage = images
    ? { image: images.hero, imagePosition: "object-center" }
    : { imagePosition: HERO_IMAGE_POSITION };
  return {
    HERO: { ...shared.HERO, ...own.HERO, ...heroImage },
    JUMP_LINKS: shared.JUMP_LINKS,
    INTRO: own.INTRO,
    OFFER: {
      ...shared.OFFER,
      ...own.OFFER,
      website: { ...shared.OFFER.website, ...own.OFFER.website },
    },
    WORKFLOW: { ...shared.WORKFLOW, ...own.WORKFLOW },
    LOCAL: {
      ...shared.LOCAL,
      ...own.LOCAL,
      ...(images ? { image: images.local } : {}),
    },
    PRICING: {
      ...pricing,
      intro: own.PRICING.intro,
      smallLink: {
        label: smallLinkLabel,
        href: bespokeHref(own.PRICING.bespokeSubject),
      },
    },
    BILLING: shared.BILLING,
    BILLING_UI: shared.BILLING_UI,
    SETUP_FEE: shared.SETUP_FEE,
    DESIGNS: { ...shared.DESIGNS, ...own.DESIGNS },
    LAUNCH: shared.LAUNCH,
    CALL: shared.CALL,
    FAQ: { ...shared.FAQ, ...own.FAQ },
    FAQ_ITEMS: own.FAQ_ITEMS,
    GUIDE: { ...shared.GUIDE, ...own.GUIDE },
    CLOSE: shared.CLOSE,
  };
}
