/* The copy contract for an industry landing page (/industry/website-for-electricians,
   /industry/website-for-plumbers, …). Every page renders the same IndustryClient
   layout; only the copy passed to it changes. Each industry keeps its EN and
   NL copy in its own route folder's `data.ts`, and the blocks every page
   shares (pricing, launch steps, Hub card…) come from ./shared.

   A plain module (no "use client"), so server pages can read the copy too,
   for metadata and FAQ JSON-LD. */

import type { FeatureIconName } from "../components/sections/featureIcons";
import type { Locale } from "../i18n/config";

export type OfferFeature = { label: string; icon: FeatureIconName };

export type ScenarioStep = {
  step?: string;
  lines: string[];
};

type Link = { label: string; href: string };

export type IndustryCopy = {
  HERO: {
    kicker: string;
    heading: string;
    headingAccent: string;
    benefits: string[];
    primaryCta: Link;
    textLink: Link;
    meta: string[];
    fee: string;
    footnote: string;
    /* Hero photo, from public/industry-pages-img/<industry>-1.webp (the
       electrician page keeps its own photo). */
    image: string;
    /** Tailwind object-position class for the hero crop. */
    imagePosition?: string;
    photoAlt: string;
    breadcrumbLabel: string;
    breadcrumbHome: string;
    breadcrumbCurrent: string;
    jumpLabel: string;
  };
  JUMP_LINKS: { href: string; label: string }[];
  INTRO: {
    heading: string;
    /* Two lines inside the accent span. */
    headingAccent: [string, string];
    paragraphs: string[];
  };
  OFFER: {
    heading: string;
    headingAccent: string;
    intro: string;
    website: {
      headingLead: string;
      headingHighlight: string;
      headingTail: string;
      sub: string;
      foot: string;
      features: OfferFeature[];
    };
    hub: {
      headingHighlight: string;
      headingTail: string;
      sub: string;
      foot: string;
      features: OfferFeature[];
    };
    package: {
      eyebrow: string;
      heading: string;
      priceLead: string;
      /** "{monthly}" — or the yearly price, without monthly billing. */
      price: string;
      pricePeriod: string;
      /** The period after the yearly price, without monthly billing. */
      pricePeriodYearly: string;
      cta: Link;
    };
  };
  WORKFLOW: {
    headingParts: string[];
    listLabel: string;
    stepLabel: string;
    start: string;
    /* `**text**` marks the bold runs. */
    steps: ScenarioStep[];
    note: string;
  };
  LOCAL: {
    heading: string;
    headingAccent: string;
    intro: string;
    checks: string[];
    small: string;
    image: string;
    photoAlt: string;
  };
  PRICING: {
    headingLines: string[];
    headingAccent: string;
    intro: string;
    includes: string[];
    smallLead: string;
    smallLink: Link;
    cta: { label: string };
  };
  /* Price lines hold "{token}" placeholders from /pricing (pricing/view.ts),
     filled in the visitor's currency by IndustryBillingCard. */
  BILLING: Record<
    "annual" | "monthly",
    {
      old: string;
      current: string;
      period: string;
      detail: string;
      saving: string;
    }
  >;
  BILLING_UI: {
    groupLabel: string;
    annually: string;
    saveBadge: string;
    monthly: string;
    /** The annual detail line for a currency without per-month figures. */
    billedAnnually: string;
  };
  SETUP_FEE: { amount: string; label: string };
  DESIGNS: {
    heading: string;
    headingAccent: string;
    intro: string;
    small: string;
    /* `Template.category` values from app/designs/templates-data.ts whose
       templates fill the grid. */
    templateCategories: string[];
    /* The service label the page copy gives a template, keyed by template
       slug (e.g. pipeworks → "General plumbing"). Replaces the card's
       industry subtitle on this page only. */
    templateSubtitles?: Record<string, string>;
    /* Shown, unlinked, when no template matches `templateCategories`: the
       design names the page copy lists, until those designs exist. */
    placeholders?: { title: string; subtitle: string }[];
  };
  LAUNCH: {
    headingLead: string;
    headingAccent: string;
    headingTail: string;
    intro: string;
    steps: { num: string; title: string; body: string; owner: string }[];
    small: string;
  };
  CALL: {
    headingLead: string;
    headingAccent: string;
    headingTail: string;
    introLead: string;
    introStrong: string;
    priceLabel: string;
    /** "{monthly}" — or the yearly price, without monthly billing. */
    price: string;
    pricePeriod: string;
    /** The period after the yearly price, without monthly billing. */
    pricePeriodYearly: string;
    cta: Link;
  };
  FAQ: { heading: string; headingAccent: string; intro: string };
  FAQ_ITEMS: ReadonlyArray<{ question: string; answer: string }>;
  GUIDE: {
    heading: string;
    headingAccent: string;
    intro: string;
    /* A card without `href` renders without its link: guides that aren't
       published yet must not point anywhere. */
    cards: {
      num: string;
      topic: string;
      title: string;
      body: string;
      href?: string;
    }[];
    readLabel: string;
  };
  CLOSE: {
    heading: string;
    headingAccent: string;
    bodyLines: [string, string];
    cta: Link;
  };
};

export type IndustryCopyByLocale = Record<Locale, IndustryCopy>;


/** Everything one industry route needs: its URLs, SEO head and page copy. */
export type IndustryPageDef = {
  /** Full paths, e.g. "/industry/website-for-plumbers" and "/nl/branche/website-voor-loodgieters". */
  paths: Record<Locale, string>;
  seo: Record<Locale, { title: string; description: string }>;
  copy: IndustryCopyByLocale;
};
