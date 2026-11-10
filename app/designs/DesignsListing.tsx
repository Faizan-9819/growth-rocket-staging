import type { Locale } from "../i18n/config";
import JsonLd from "../components/JsonLd";
import { buildCollectionPageSchema } from "../lib/seo";
import DesignsCta from "./DesignsCta";
import DesignsHero from "./DesignsHero";
import TemplatesPageClient from "./TemplatesPageClient";
import { designsHref, templateHref } from "./design-routes";
import { templates } from "./templates-data";
import {
  AnimationStyleProvider,
  type AnimationStyle,
} from "../features/FeatureReveal";

/* Scroll-reveal style for this page. See app/features/animationStyle.md.
   "stagger" — children rise, scale and un-blur in sequence.
   "simple"  — the original fade + 24px rise, whole blocks at once. */
const animationStyle: AnimationStyle = "stagger";

/**
 * `.designs-page main{display:grid;gap:14px;padding-top:14px}` — three stacked
 * folds on the page's own white, 14px apart.
 *
 * `leading-[1.65]` restates the source's `body{line-height:1.65}`. Tailwind's
 * preflight puts 1.5 on <html>, so without this every paragraph that inherits
 * its leading in the source (the card subtitles, the filter label, the closing
 * copy) would sit tighter here than in the design. Headings and the folds that
 * set their own line-height override it as usual.
 */
export default function DesignsListing({
  locale,
  category = "all",
  title,
  description,
}: {
  locale: Locale;
  category?: string;
  /** The page's meta title and description, named in its schema. */
  title: string;
  description: string;
}) {
  const listed =
    category === "all"
      ? templates
      : templates.filter((t) => t.category === category);

  return (
    <AnimationStyleProvider value={animationStyle}>
      {/* CollectionPage + ItemList of the designs this view shows. */}
      <JsonLd
        data={buildCollectionPageSchema(
          designsHref(locale, category),
          title,
          description,
          listed.map((t) => ({ name: t.title, path: templateHref(t, locale) })),
        )}
      />
      <main
        id="main"
        className="relative flex min-h-screen flex-col gap-[14px] bg-white pt-[14px] pb-[14px] text-[16px] leading-[1.65] text-[#0a0516]"
      >
        <DesignsHero locale={locale} />
        <TemplatesPageClient locale={locale} initialCategory={category} />
        <DesignsCta locale={locale} />
      </main>
    </AnimationStyleProvider>
  );
}
