import type { Metadata } from "next";
import { NL_OFFER_SLUGS, OFFERS_BASE } from "../i18n/offer-locale-slugs";
import { SITE_URL, socialMeta, toAbsoluteUrl } from "./seo";

/**
 * Offers — a listing (/offers, /nl/aanbiedingen) and one detail page per
 * offer. Unlike the blog, every offer has the same shape, so they live here as
 * typed data rather than a folder of modules each. Each offer carries both
 * languages, so a real translation is a text edit.
 *
 * The content is dummy for now: titles and body copy are lorem ipsum (in both
 * languages), everything else is real EN/NL copy. When real offers arrive,
 * replace the copy below, set real NL slugs in app/i18n/offer-locale-slugs.ts
 * and flip OFFERS_INDEXABLE.
 */

export type OfferLocale = "en" | "nl";

export type OfferSection = {
  /** Anchor id, same in both languages: the TOC links to it. */
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type OfferCopy = {
  title: string;
  /** 1–2 sentences, used on cards and as the hero lead. */
  excerpt: string;
  /** Short chip label, e.g. "Limited time". */
  badge: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  sections: OfferSection[];
};

export type Offer = {
  /** The EN slug ("offer-1"). It is also the pairing key between languages. */
  slug: string;
  /** Public path. */
  image: string;
  /** ISO date, "2026-12-31". */
  validUntil: string;
  en: OfferCopy;
  nl: OfferCopy;
};

/** false while the content is dummy: noindex, and left out of sitemap + llms.txt. */
export const OFFERS_INDEXABLE = false;

/* ------------------------------------------------------------------ */
/* Dummy copy                                                          */
/* ------------------------------------------------------------------ */

/** 40–70 words each; offers pick from this pool at different offsets. */
const LOREM_PARAGRAPHS = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus, posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla, vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
  "Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod, donec sed odio dui et fusce dapibus tellus.",
  "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
  "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit.",
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet, cras justo odio dapibus ac facilisis in egestas eget quam.",
  "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
  "Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis est non commodo luctus, nisi erat porttitor ligula.",
  "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
];

/** 5–10 words each. */
const LOREM_BULLETS = [
  "Lorem ipsum dolor sit amet consectetur",
  "Adipiscing elit sed do eiusmod tempor incididunt",
  "Ut labore et dolore magna aliqua",
  "Quis nostrud exercitation ullamco laboris nisi ut aliquip",
  "Duis aute irure dolor in reprehenderit",
  "Excepteur sint occaecat cupidatat non proident sunt",
  "Culpa qui officia deserunt mollit anim",
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
  "Neque porro quisquam est qui dolorem",
  "Ut enim ad minima veniam quis nostrum",
  "Temporibus autem quibusdam et aut officiis debitis",
  "Itaque earum rerum hic tenetur sapiente delectus",
];

const SECTION_HEADINGS: Record<
  OfferLocale,
  Record<"overview" | "included" | "how-it-works" | "conditions" | "next-steps", string>
> = {
  en: {
    overview: "Overview",
    included: "What's included",
    "how-it-works": "How it works",
    conditions: "Conditions",
    "next-steps": "Next steps",
  },
  nl: {
    overview: "Overzicht",
    included: "Wat je krijgt",
    "how-it-works": "Zo werkt het",
    conditions: "Voorwaarden",
    "next-steps": "Volgende stappen",
  },
};

/** The same five sections for every offer, its lorem rotated by `n`. */
function loremSections(n: number, locale: OfferLocale): OfferSection[] {
  const p = (k: number) => LOREM_PARAGRAPHS[(n * 3 + k) % LOREM_PARAGRAPHS.length];
  const b = (k: number) => LOREM_BULLETS[(n * 5 + k) % LOREM_BULLETS.length];
  const h = SECTION_HEADINGS[locale];
  return [
    { id: "overview", heading: h.overview, paragraphs: [p(0), p(1)] },
    {
      id: "included",
      heading: h.included,
      paragraphs: [p(2)],
      bullets: [b(0), b(1), b(2), b(3)],
    },
    { id: "how-it-works", heading: h["how-it-works"], paragraphs: [p(3), p(4)] },
    {
      id: "conditions",
      heading: h.conditions,
      paragraphs: [p(5)],
      bullets: [b(4), b(5), b(6)],
    },
    { id: "next-steps", heading: h["next-steps"], paragraphs: [p(6)] },
  ];
}

type OfferSeed = {
  title: string;
  /** 15–25 words. */
  excerpt: string;
  image: string;
  validUntil: string;
  badge: Record<OfferLocale, string>;
  alt: Record<OfferLocale, string>;
};

const BADGE = {
  limited: { en: "Limited time", nl: "Tijdelijk aanbod" },
  new: { en: "New", nl: "Nieuw" },
  popular: { en: "Popular", nl: "Populair" },
} as const;

/** In display order; offer N gets slug `offer-N`. */
const SEEDS: OfferSeed[] = [
  {
    title: "Lorem ipsum dolor sit amet",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/industry-pages-img/plumber-1.webp",
    validUntil: "2026-12-31",
    badge: BADGE.limited,
    alt: { en: "Plumber at work", nl: "Loodgieter aan het werk" },
  },
  {
    title: "Consectetur adipiscing elit sed do",
    excerpt:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.",
    image: "/industry-pages-img/cleaning-1.webp",
    validUntil: "2026-12-31",
    badge: BADGE.new,
    alt: { en: "Cleaner at work", nl: "Schoonmaker aan het werk" },
  },
  {
    title: "Eiusmod tempor incididunt ut labore",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.",
    image: "/industry-pages-img/hair-1.webp",
    validUntil: "2026-12-31",
    badge: BADGE.popular,
    alt: { en: "Hairdresser at work", nl: "Kapper aan het werk" },
  },
  {
    title: "Dolore magna aliqua ut enim",
    excerpt:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut.",
    image: "/industry-pages-img/accountant-1.webp",
    validUntil: "2027-01-31",
    badge: BADGE.limited,
    alt: { en: "Accountant at work", nl: "Accountant aan het werk" },
  },
  {
    title: "Ad minim veniam quis nostrud",
    excerpt:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa.",
    image: "/industry-pages-img/coach-1.webp",
    validUntil: "2027-01-31",
    badge: BADGE.new,
    alt: { en: "Coach at work", nl: "Coach aan het werk" },
  },
  {
    title: "Exercitation ullamco laboris nisi",
    excerpt:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.",
    image: "/industry-pages-img/consultant-1.webp",
    validUntil: "2027-01-31",
    badge: BADGE.popular,
    alt: { en: "Consultant at work", nl: "Consultant aan het werk" },
  },
  {
    title: "Aliquip ex ea commodo consequat",
    excerpt:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius.",
    image: "/industry-pages-img/handyman-1.webp",
    validUntil: "2027-02-28",
    badge: BADGE.limited,
    alt: { en: "Handyman at work", nl: "Klusjesman aan het werk" },
  },
  {
    title: "Duis aute irure dolor in reprehenderit",
    excerpt:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    image: "/industry-pages-img/healthcare-1.webp",
    validUntil: "2027-02-28",
    badge: BADGE.new,
    alt: {
      en: "Healthcare professional at work",
      nl: "Zorgverlener aan het werk",
    },
  },
  {
    title: "Voluptate velit esse cillum dolore",
    excerpt:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.",
    image: "/industry-pages-img/professional-service-1.webp",
    validUntil: "2027-02-28",
    badge: BADGE.popular,
    alt: {
      en: "Business professional at work",
      nl: "Zakelijk dienstverlener aan het werk",
    },
  },
];

const SEO_SUFFIX: Record<OfferLocale, string> = {
  en: "Growth Rocket Offers",
  nl: "Growth Rocket Aanbiedingen",
};

function buildCopy(seed: OfferSeed, n: number, locale: OfferLocale): OfferCopy {
  return {
    title: seed.title,
    excerpt: seed.excerpt,
    badge: seed.badge[locale],
    imageAlt: seed.alt[locale],
    seoTitle: `${seed.title} | ${SEO_SUFFIX[locale]}`,
    seoDescription: seed.excerpt,
    sections: loremSections(n, locale),
  };
}

export const OFFERS: Offer[] = SEEDS.map((seed, i) => ({
  slug: `offer-${i + 1}`,
  image: seed.image,
  validUntil: seed.validUntil,
  en: buildCopy(seed, i, "en"),
  nl: buildCopy(seed, i, "nl"),
}));

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

/** The offers in display order. */
export function getOffers(): Offer[] {
  return OFFERS;
}

/** The offer's URL slug in `locale`. */
export function offerSlug(offer: Offer, locale: OfferLocale): string {
  return locale === "nl" ? (NL_OFFER_SLUGS[offer.slug] ?? offer.slug) : offer.slug;
}

/** `/offers/<en>` or `/nl/aanbiedingen/<nl>`. */
export function offerHref(offer: Offer, locale: OfferLocale): string {
  return `${OFFERS_BASE[locale]}/${offerSlug(offer, locale)}`;
}

/** The offer at `slug` in `locale` (NL matches the NL slug only). */
export function getOfferBySlug(slug: string, locale: OfferLocale): Offer | null {
  return OFFERS.find((offer) => offerSlug(offer, locale) === slug) ?? null;
}

/** The next `count` offers after `slug` (EN slug), wrapping to the start. */
export function getOtherOffers(slug: string, count = 3): Offer[] {
  const index = OFFERS.findIndex((offer) => offer.slug === slug);
  const others: Offer[] = [];
  for (let k = 1; k < OFFERS.length && others.length < count; k++) {
    others.push(OFFERS[(index + k + OFFERS.length) % OFFERS.length]);
  }
  return others;
}

/** "31 Dec 2026" / "31 dec. 2026" (short), "31 December 2026" / "31 december 2026" (long). */
export function formatOfferDate(
  iso: string,
  locale: OfferLocale,
  month: "short" | "long",
): string {
  return new Intl.DateTimeFormat(locale === "nl" ? "nl-NL" : "en-GB", {
    day: "numeric",
    month,
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

/** UI strings shared by the listing, cards and detail page (copy deck, §12). */
export const OFFER_UI = {
  en: {
    eyebrow: "Offers",
    heroLead: "Current",
    heroAccent: "offers.",
    lead: "Limited-time deals on websites and business tools for small businesses. Pick an offer to see what's included and send us an enquiry.",
    gridEyebrow: "All offers",
    gridHeading: "Latest offers",
    count: (n: number) => `${n} offers`,
    validUntil: (date: string) => `Valid until ${date}`,
    viewOffer: "View offer",
    breadcrumbRoot: "Offers",
    breadcrumbLabel: "Breadcrumb",
    heroCta: "Enquire about this offer",
    tocHeading: "In this offer",
    backLink: "All offers",
    enquiryHeading: "Interested in this offer?",
    enquirySubline: "Leave your details and we'll get in touch about this offer.",
    moreEyebrow: "More offers",
    moreHeading: "Other offers",
    moreAccent: "worth a look.",
    moreButton: "View all offers",
  },
  nl: {
    eyebrow: "Aanbiedingen",
    heroLead: "Actuele",
    heroAccent: "aanbiedingen.",
    lead: "Tijdelijke aanbiedingen op websites en bedrijfstools voor kleine bedrijven. Kies een aanbieding om te zien wat je krijgt en stuur ons een aanvraag.",
    gridEyebrow: "Alle aanbiedingen",
    gridHeading: "Nieuwste aanbiedingen",
    count: (n: number) => `${n} aanbiedingen`,
    validUntil: (date: string) => `Geldig tot ${date}`,
    viewOffer: "Bekijk aanbieding",
    breadcrumbRoot: "Aanbiedingen",
    breadcrumbLabel: "Kruimelpad",
    heroCta: "Vraag deze aanbieding aan",
    tocHeading: "In deze aanbieding",
    backLink: "Alle aanbiedingen",
    enquiryHeading: "Interesse in deze aanbieding?",
    enquirySubline:
      "Laat je gegevens achter, dan nemen we contact met je op over deze aanbieding.",
    moreEyebrow: "Meer aanbiedingen",
    moreHeading: "Bekijk ook deze",
    moreAccent: "aanbiedingen.",
    moreButton: "Alle aanbiedingen bekijken",
  },
} as const;

/** Listing-page metadata copy (§10). */
export const OFFERS_LISTING_SEO = {
  en: {
    title: "Offers for Small Businesses | Growth Rocket",
    description: OFFER_UI.en.lead,
  },
  nl: {
    title: "Aanbiedingen voor kleine bedrijven | Growth Rocket",
    description: OFFER_UI.nl.lead,
  },
} as const;

/* ------------------------------------------------------------------ */
/* Metadata (shared by the four routes)                                */
/* ------------------------------------------------------------------ */

const NOINDEX = OFFERS_INDEXABLE ? {} : { robots: { index: false, follow: true } };

/** /offers and /nl/aanbiedingen. */
export function buildOffersListingMetadata(locale: OfferLocale): Metadata {
  const { title, description } = OFFERS_LISTING_SEO[locale];
  const path = OFFERS_BASE[locale];
  return {
    title,
    description,
    ...socialMeta(title, description, path),
    alternates: {
      canonical: `${SITE_URL}${path}`,
      languages: {
        en: `${SITE_URL}${OFFERS_BASE.en}`,
        nl: `${SITE_URL}${OFFERS_BASE.nl}`,
      },
    },
    ...NOINDEX,
  };
}

/** One offer's page; the share image is the offer's own photo. */
export function buildOfferMetadata(offer: Offer, locale: OfferLocale): Metadata {
  const { seoTitle: title, seoDescription: description, imageAlt } = offer[locale];
  const path = offerHref(offer, locale);
  const social = socialMeta(title, description, path);
  const image = { url: toAbsoluteUrl(offer.image), alt: imageAlt };
  return {
    title,
    description,
    openGraph: { ...social.openGraph, images: [image] },
    twitter: { ...social.twitter, images: [image] },
    alternates: {
      canonical: `${SITE_URL}${path}`,
      languages: {
        en: `${SITE_URL}${offerHref(offer, "en")}`,
        nl: `${SITE_URL}${offerHref(offer, "nl")}`,
      },
    },
    ...NOINDEX,
  };
}
