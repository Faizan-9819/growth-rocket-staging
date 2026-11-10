import type { Locale } from "../i18n/config";

/**
 * URL scheme for the designs section, per locale:
 *
 *   EN  /design                     NL  /nl/ontwerpen
 *       /design/<industry>              /nl/ontwerpen/<branche>
 *       /design/<industry>/<design>     /nl/ontwerpen/<branche>/<design>
 *
 * EN listing and detail pages all live under the singular /design base
 * (app/design/…); the old /designs, /designs/<industry> and
 * /designs/<industry>/<design> URLs redirect there. Custom detail paths
 * (CUSTOM_DETAIL_PATHS) keep their own /designs/<slug> URL.
 *
 * A design can also have its own detail URL in a locale, set by its approved
 * page-copy document — see CUSTOM_DETAIL_PATHS. Its pattern URL then
 * redirects to it.
 *
 * Design slugs are brand names (dentalcare, sparkfix…) and stay the same in
 * both languages; the base and the industry segment are translated.
 *
 * Kept free of templates-data so client bundles (Navbar, LanguageToggle) can
 * import it without pulling in every template.
 */
export const DESIGNS_BASE: Record<Locale, string> = {
  en: "/design",
  nl: "/nl/ontwerpen",
};

/** Base of a single design's page. */
export const DESIGN_DETAIL_BASE: Record<Locale, string> = {
  en: "/design",
  nl: "/nl/ontwerpen",
};

/** Keyed by `Template.category`. */
export const INDUSTRY_SLUGS: Record<string, Record<Locale, string>> = {
  Cleaning: { en: "cleaning", nl: "schoonmaak" },
  dentist: { en: "dentist", nl: "tandarts" },
  electrician: { en: "electrician", nl: "elektricien" },
  logistics: { en: "logistics", nl: "logistiek" },
  physiotherapy: { en: "physiotherapy", nl: "fysiotherapie" },
  plumber: { en: "plumber", nl: "loodgieter" },
  "real-estate": { en: "real-estate", nl: "makelaar" },
  salon: { en: "salon", nl: "kapsalon" },
  solar: { en: "solar", nl: "zonnepanelen" },
};

export function industrySlug(category: string, locale: Locale): string {
  return INDUSTRY_SLUGS[category]?.[locale] ?? category.toLowerCase();
}

export function categoryFromIndustrySlug(
  slug: string,
  locale: Locale,
): string | undefined {
  const decoded = decodeURIComponent(slug).toLowerCase();
  return Object.keys(INDUSTRY_SLUGS).find(
    (category) => INDUSTRY_SLUGS[category][locale] === decoded,
  );
}

/** Listing URL — all designs, or one industry when `category` is given. */
export function designsHref(locale: Locale, category?: string): string {
  const base = DESIGNS_BASE[locale];
  if (!category || category === "all") return base;
  return `${base}/${industrySlug(category, locale)}`;
}

/**
 * Designs whose detail page has its own URL in a locale, instead of the
 * /design/<industry>/<design> pattern. Keyed by design slug; `category` is
 * repeated here so this file stays free of templates-data. A locale left out
 * keeps the pattern URL.
 *
 * A custom EN path is served by app/designs/[industry] (one segment under
 * /designs), and the pattern URL 308-redirects to it.
 *
 * A custom NL path is /nl/ontwerpen/<segment>, with no industry segment (the
 * segment is the NL slug from allpageurls.xlsx, not the design slug). It is
 * served by app/nl/ontwerpen/[industry], and app/nl/ontwerpen/[industry]/[slug]
 * 308-redirects the old /nl/ontwerpen/<branche>/<segment> and
 * /nl/ontwerpen/<branche>/<design> URLs to it.
 */
export const CUSTOM_DETAIL_PATHS: Record<
  string,
  { category: string } & Partial<Record<Locale, string>>
> = {
  shinesquad: {
    category: "Cleaning",
    en: "/designs/shinesquad-home-cleaning-website",

    nl: "/nl/ontwerpen/shinesquad-website-thuisschoonmaak",
  },
  sunharbor: {
    category: "solar",
    en: "/designs/sunharbor-solar-installer-website",

    nl: "/nl/ontwerpen/sunharbor-website-zonnepaneleninstallateur",
  },
  "trim-and-trend": {
    category: "salon",
    en: "/designs/trim-and-trend-hair-salon-website",

    nl: "/nl/ontwerpen/trim-and-trend-website-kapsalon",
  },
  primeabode: {
    category: "real-estate",
    en: "/designs/primeabode-real-estate-website",

    nl: "/nl/ontwerpen/primeabode-website-makelaar",
  },
  circuitpro: {
    category: "electrician",
    en: "/designs/circuitpro-electrical-contractor-website",

    nl: "/nl/ontwerpen/circuitpro-website-elektrotechnisch-installateur",
  },
  crystalclean: {
    category: "Cleaning",
    en: "/designs/crystalclean-commercial-cleaning-website",

    nl: "/nl/ontwerpen/crystalclean-website-bedrijfsschoonmaak",
  },
  flowguard: {
    category: "plumber",
    en: "/designs/flowguard-heating-engineer-website",

    nl: "/nl/ontwerpen/flowguard-website-cv-monteur",
  },
  physiotherapy: {
    category: "physiotherapy",
    en: "/designs/physiocare-physiotherapy-website",

    nl: "/nl/ontwerpen/physiocare-website-fysiotherapeut",
  },
  pipeworks: {
    category: "plumber",
    en: "/designs/pipeworks-plumber-website",

    nl: "/nl/ontwerpen/pipeworks-website-loodgieter",
  },
  sparkfix: {
    category: "electrician",
    en: "/designs/sparkfix-electrician-website",

    nl: "/nl/ontwerpen/sparkfix-website-elektricien",
  },
  swiftline: {
    category: "logistics",
    en: "/designs/swiftline-logistics-website",

    nl: "/nl/ontwerpen/swiftline-website-logistiekbedrijf",
  },
  voltguard: {
    category: "electrician",
    en: "/designs/voltguard-electrical-inspection-website",

    nl: "/nl/ontwerpen/voltguard-website-elektrakeuring",
  },
  aquafix: {
    category: "plumber",
    en: "/designs/aquafix-emergency-plumber-website",

    nl: "/nl/ontwerpen/aquafix-website-spoedloodgieter",
  },
  drainpro: {
    category: "plumber",
    en: "/designs/drainpro-drainage-company-website",

    nl: "/nl/ontwerpen/drainpro-website-ontstoppingsbedrijf",
  },
  flowmaster: {
    category: "plumber",
    en: "/designs/flowmaster-bathroom-installer-website",

    nl: "/nl/ontwerpen/flowmaster-website-badkamerinstallateur",
  },
};

/** A design's detail URL under the /design/<industry>/<design> pattern. */
export function patternTemplateHref(
  template: { slug: string; category: string },
  locale: Locale,
): string {
  return `${DESIGN_DETAIL_BASE[locale]}/${industrySlug(template.category, locale)}/${template.slug}`;
}

/** A design's detail URL: its custom path where it has one, else the pattern. */
export function templateHref(
  template: { slug: string; category: string },
  locale: Locale,
): string {
  return (
    CUSTOM_DETAIL_PATHS[template.slug]?.[locale] ??
    patternTemplateHref(template, locale)
  );
}

/** The design whose custom detail path (in any locale) is `pathname`. */
export function designFromCustomPath(
  pathname: string,
): { slug: string; category: string } | null {
  for (const [slug, paths] of Object.entries(CUSTOM_DETAIL_PATHS)) {
    if (paths.en === pathname || paths.nl === pathname) {
      return { slug, category: paths.category };
    }
  }
  return null;
}

/**
 * The design whose custom NL segment is `segment`, whatever industry segment
 * the URL carried (the old /nl/ontwerpen/<branche>/<segment> URLs).
 */
export function designFromNlCustomSegment(
  segment: string,
): { slug: string; category: string } | null {
  for (const [slug, paths] of Object.entries(CUSTOM_DETAIL_PATHS)) {
    if (paths.nl === `${DESIGNS_BASE.nl}/${segment}`) {
      return { slug, category: paths.category };
    }
  }
  return null;
}

/** Which locale's designs section `pathname` is in, if any. */
export function designsLocale(pathname: string): Locale | null {
  return designsSection(pathname)?.locale ?? null;
}

/** The locale and matched base (listing or detail) of a designs path. */
function designsSection(
  pathname: string,
): { locale: Locale; base: string } | null {
  for (const locale of ["nl", "en"] as const) {
    for (const base of [DESIGNS_BASE[locale], DESIGN_DETAIL_BASE[locale]]) {
      if (pathname === base || pathname.startsWith(`${base}/`)) {
        return { locale, base };
      }
    }
  }
  return null;
}

/**
 * Category selected by a designs listing/detail path ("all" on the bare base).
 */
export function categoryFromDesignsPath(pathname: string): string | null {
  const custom = designFromCustomPath(pathname);
  if (custom) return custom.category;
  const section = designsSection(pathname);
  if (!section) return null;
  const [industry] = pathname
    .slice(section.base.length)
    .split("/")
    .filter(Boolean);
  if (!industry) return "all";
  return categoryFromIndustrySlug(industry, section.locale) ?? null;
}

/**
 * Translate a designs path into `to`'s URL scheme. Returns null when
 * `pathname` is not inside the designs section.
 */
export function translateDesignsPath(
  pathname: string,
  to: Locale,
): string | null {
  const custom = designFromCustomPath(pathname);
  if (custom) return templateHref(custom, to);

  const section = designsSection(pathname);
  if (!section) return null;
  const from = section.locale;
  const [industry, design] = pathname
    .slice(section.base.length)
    .split("/")
    .filter(Boolean);
  if (!industry) return DESIGNS_BASE[to];

  const category = categoryFromIndustrySlug(industry, from);
  // A known design goes to its URL in `to`, custom path included.
  if (design && category) return templateHref({ slug: design, category }, to);
  const translated = category ? industrySlug(category, to) : industry;
  const base = design ? DESIGN_DETAIL_BASE[to] : DESIGNS_BASE[to];
  return [base, translated, design].filter(Boolean).join("/");
}
