import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import {
  buildFaqJsonLdFromItems,
  buildPageSchema,
  socialMeta,
} from "../lib/seo";
import HomeShell from "../components/sections/home2/HomeShell";
import DesignHero from "../components/sections/design/DesignHero";
import DesignCrumb from "../components/sections/design/DesignCrumb";
import DesignPreview from "../components/sections/design/DesignPreview";
import DesignBenefits from "../components/sections/design/DesignBenefits";
import DesignPersonal from "../components/sections/design/DesignPersonal";
import DesignSystem from "../components/sections/design/DesignSystem";
import DesignPackage from "../components/sections/design/DesignPackage";
import DesignLaunch from "../components/sections/design/DesignLaunch";
import DesignFaq from "../components/sections/design/DesignFaq";
import DesignRelated from "../components/sections/design/DesignRelated";
import DesignClose from "../components/sections/design/DesignClose";
import { getDesignCopy } from "../components/sections/design/copy";
import { getPageCopy } from "../components/sections/design/page-copy";
import type { Locale } from "../i18n/config";
import { templateHref } from "./design-routes";
import { templates, type Template } from "./templates-data";

/* Taller captures for DesignPersonal's scrolling frame, by template slug, kept
   at public/templates/parallax/<slug>.png. The template's own `img` stays its
   card still everywhere else. A template missing here keeps the plain still. */
const PERSONAL_PARALLAX_IMG: Record<
  string,
  { src: string; width: number; height: number }
> = {
  dentalcare: { src: "/templates/parallax/dentalcare.png", width: 540, height: 610 },
  shinesquad: { src: "/templates/parallax/shinesquad.png", width: 540, height: 610 },
  primeabode: { src: "/templates/parallax/primeabode.png", width: 540, height: 610 },
  "trim-and-trend": { src: "/templates/parallax/trim-and-trend.png", width: 540, height: 610 },
  swiftline: { src: "/templates/parallax/swiftline.png", width: 540, height: 610 },
  pipeworks: { src: "/templates/parallax/pipeworks.png", width: 540, height: 610 },
  sparkfix: { src: "/templates/parallax/sparkfix.png", width: 540, height: 610 },
  physiotherapy: { src: "/templates/parallax/physiotherapy.png", width: 540, height: 610 },
  crystalclean: { src: "/templates/parallax/crystalclean.png", width: 540, height: 610 },
  sunharbor: { src: "/templates/parallax/sunharbor.png", width: 540, height: 610 },
  aquafix: { src: "/templates/parallax/aquafix.png", width: 540, height: 610 },
  voltguard: { src: "/templates/parallax/voltguard.png", width: 540, height: 610 },
  flowmaster: { src: "/templates/parallax/flowmaster.png", width: 540, height: 610 },
  drainpro: { src: "/templates/parallax/drainpro.png", width: 540, height: 610 },
  circuitpro: { src: "/templates/parallax/circuitpro.png", width: 540, height: 610 },
  flowguard: { src: "/templates/parallax/flowguard.png", width: 540, height: 610 },
};

export function buildDesignMetadata(
  template: Template,
  locale: Locale,
): Metadata {
  const { nouns } = getDesignCopy(template);
  const origin = "https://www.getgrowthrocket.com";
  const enUrl = `${origin}${templateHref(template, "en")}`;
  const nlUrl = `${origin}${templateHref(template, "nl")}`;
  /* A design without Dutch page copy (dentalcare) shows its English page at
     its /nl URL, so neither page declares a Dutch alternate — that would be a
     language mismatch — and the /nl URL canonicalises to the English one. */
  const hasNl = hasDutchPage(template);
  const metaLocale: Locale = locale === "nl" && hasNl ? "nl" : "en";
  const seo = getPageCopy(template, metaLocale)?.seo;

  const title =
    seo?.title ??
    `${template.title} | ${template.subtitle} Website Design & Business Tools | Growth Rocket`;
  const description =
    seo?.description ??
    `Explore ${template.title}: a professional ${template.subtitle.toLowerCase()} website design with appointments, enquiries, Growth Rocket Hub and ongoing technical support. Built for ${nouns.sector}.`;

  return {
    title,
    description,
    ...socialMeta(title, description, templateHref(template, metaLocale)),
    alternates: hasNl
      ? {
          canonical: locale === "nl" ? nlUrl : enUrl,
          languages: { en: enUrl, nl: nlUrl },
        }
      : { canonical: enUrl, languages: { en: enUrl } },
  };
}

/** Whether a design has approved Dutch page copy, i.e. a real Dutch page. */
export function hasDutchPage(template: Template): boolean {
  return Boolean(getPageCopy(template, "nl"));
}

/**
 * /designs/[industry]/[slug] (and /nl/ontwerpen/[industry]/[slug]) — the port of dentalcare.html.
 *
 * dentalcare.html is one design's page; this is the route all of them share, so
 * the folds below are written against the copy model in
 * `components/sections/design/copy.ts` rather than against dental words. The
 * `dentalcare` slug renders the reference file's exact strings; every other
 * template gets the same folds in its own vocabulary. See that file for how the
 * two fit together.
 *
 * Every fold carries dentalcare.css's own values — surfaces, type scale,
 * spacing and breakpoints — rather than this site's fold vocabulary. That
 * stylesheet is written in three passes (a base cut, a "second cut" and a final
 * conversion-focused pass) which repeatedly restate the same rules, so each
 * component's header lists the values that actually win.
 *
 * Fold for fold against the source:
 *
 *   .dc-hero                 DesignHero
 *   nav.dc-crumb             DesignCrumb     (its own white bar between the
 *                                             hero and the preview, as
 *                                             `.dc-main>.dc-crumb` paints it)
 *   .dc-preview              DesignPreview   (a live iframe, not the source's
 *                                             hand-drawn mock — see there)
 *   .dc-benefits  .dc-open   DesignBenefits
 *   .dc-personal  .dc-panel  DesignPersonal
 *   .dc-system    .dc-panel  DesignSystem
 *   .dc-package   .dc-panel  DesignPackage   (+ DesignBillingCard)
 *   .dc-launch    .dc-open   DesignLaunch
 *   .dc-faq       .dc-panel  DesignFaq       (native <details>, as the source)
 *   .dc-related   .dc-open   DesignRelated   (real sibling templates, not the
 *                                             source's two concept previews)
 *   .dc-close     .dc-panel  DesignClose
 *
 * `.dc-panel` folds are 13px-radius cards; `.dc-open` folds set no radius and
 * no background, so they sit straight on the page's white.
 *
 * `HomeShell` stands in for `.dc-main{margin:0 8px}` plus `.dc-panel{
 * margin-bottom:14px}` — a near-full-bleed column with a uniform gap, which is
 * the same macro-layout and also what /home2, /pricing and /about use. Every
 * fold then takes its horizontal spacing from the shared `.fix` rail instead of
 * the source's `clamp(24px,5vw,80px)` inset and its 1350px centring rail above
 * 1550px. That is the one deliberate departure from dentalcare.css, and it is
 * what keeps all eleven folds on one set of margins and lines this page up with
 * the rest of the site.
 *
 * The source's `.footer-loop-strip` and `footer.legacy-footer` are not ported:
 * they are `FooterLoopStrip` and `Footer2`, which the root layout already
 * mounts through `SiteFooter`, so they arrive under `DesignClose` along with
 * the shared contact CTA.
 */
export default function DesignDetail({
  template,
  locale,
}: {
  template: Template;
  locale: Locale;
}) {
  const copy = getDesignCopy(template);
  const { business, audienceOne } = copy.nouns;
  /* The approved page copy, where the template has one (see
     content/design-pages/<slug>.md). Without it every fold renders the
     generated copy and its own built-in text, as before. */
  const page = getPageCopy(template, locale);

  /* Related designs: siblings in the same category first. A template that is
     alone in its category (SunHarbor, SwiftLine, PrimeAbode…) would otherwise
     show an empty fold, so it falls back to one design from each of the next
     few categories instead. The previous page padded the row with "coming
     soon" placeholders; showing three real designs is better than showing one
     real one and two that do not exist. */
  const RELATED_COUNT = 3;
  const sameCategory = templates.filter(
    (t) =>
      t.slug !== template.slug &&
      t.category.toLowerCase() === template.category.toLowerCase(),
  );

  let related = sameCategory.slice(0, RELATED_COUNT);
  let relatedHeading: readonly string[] = page?.related.heading ?? [
    "Another look for",
    `your ${business}.`,
  ];
  let relatedIntro =
    page?.related.intro ??
    `More ${template.subtitle.toLowerCase()} designs in the same package. Every one of them is built, connected and maintained the same way.`;

  if (related.length === 0) {
    const seen = new Set([template.category.toLowerCase()]);
    const fallback: typeof templates = [];
    for (const t of templates) {
      if (fallback.length >= RELATED_COUNT) break;
      const cat = t.category.toLowerCase();
      if (seen.has(cat)) continue;
      seen.add(cat);
      fallback.push(t);
    }
    related = fallback;
    /* An approved page copy is written for the page as it is, fallback
       included, so its heading and intro still win here. */
    relatedHeading = page?.related.heading ?? ["Designs for", "other trades."];
    relatedIntro =
      page?.related.intro ??
      "This is the only design in its category for now. Here is what the same package looks like for other kinds of business.";
  }

  const faqs = page?.faq.items ?? copy.faqs;
  const faqSchema = buildFaqJsonLdFromItems(faqs);

  return (
    <main className="relative min-h-screen">
      <JsonLd
        data={buildPageSchema(
          templateHref(template, locale),
          template.title,
          page?.seo.description ?? template.tagline,
        )}
      />
      {faqSchema && <JsonLd data={faqSchema} />}

      <HomeShell>
        <DesignHero
          title={template.title}
          label={page?.hero.label ?? copy.heroLabel}
          subline={page?.hero.subline ?? copy.heroSubline}
          business={business}
          description={
            page && {
              text: page.hero.description,
              highlight: page.hero.highlight,
            }
          }
        />

        <DesignCrumb title={template.title} locale={locale} copy={page?.crumb} />

        <DesignPreview
          href={template.href}
          title={template.title}
          copy={page?.preview}
        />

        <DesignBenefits
          heading={
            page?.benefits.heading ?? {
              lead: copy.benefitsHeading[0],
              accent: copy.benefitsHeading[1],
              breakBefore: true,
            }
          }
          intro={page?.benefits.intro ?? copy.benefitsIntro}
          benefits={page?.benefits.cards ?? copy.benefits}
        />

        <DesignPersonal
          title={template.title}
          business={business}
          img={
            template.slug === "dentalcare"
              ? "/temp-details/dentalcare-specific.png"
              : template.img
          }
          parallaxImg={PERSONAL_PARALLAX_IMG[template.slug]}
          items={page?.personal.items ?? copy.personalList}
          copy={page?.personal}
        />

        <DesignSystem
          business={business}
          audienceOne={audienceOne}
          copy={page?.system}
        />

        <DesignPackage title={template.title} copy={page?.package} />

        <DesignLaunch business={business} copy={page?.launch} />

        <DesignFaq
          title={template.title}
          faqs={faqs}
          copy={page?.faq}
          locale={locale}
        />

        <DesignRelated
          heading={relatedHeading}
          intro={relatedIntro}
          templates={related}
          locale={locale}
          cardSubtitles={page?.related.cardSubtitles}
        />

        <DesignClose
          title={template.title}
          business={business}
          copy={page?.close}
        />
      </HomeShell>
    </main>
  );
}
