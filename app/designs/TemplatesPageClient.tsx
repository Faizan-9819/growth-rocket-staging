"use client";

import { usePathname } from "next/navigation";
import { useState, type CSSProperties } from "react";
import type { Locale } from "../i18n/config";
import { categoryFromDesignsPath, designsHref } from "./design-routes";
import { RevealGroup, RevealItem } from "../features/FeatureReveal";
import CategoryFilter from "./CategoryFilter";
import DesignsFold from "./DesignsFold";
import FeaturedTemplatesGrid from "./FeaturedTemplatesGrid";
import ListingHeadSync from "./ListingHeadSync";
import { getIndustryCopy } from "./industry-copy";
import ArrowIcon from "../components/ui/ArrowIcon";
import { lenisScrollTo } from "../components/LenisProvider";

const GRID_ID = "designs-grid";

/* The industry heading's arrow: the contact CTA's ink circle in miniature.
   `--disc` is the one knob: the diameter, a little over the heading's cap
   height, with the arrow at half of it, so both scale with the heading. The
   arrow sits in an absolutely positioned layer, which leaves the disc with no
   in-flow content: an inline-block like that rests its bottom edge on the
   baseline. `vertical-align` then lowers it by half of what it gains over
   1cap, keeping it centred on the capitals. */
const ARROW_DISC = {
  "--disc": "1.15cap",
  position: "relative",
  display: "inline-block",
  width: "var(--disc)",
  height: "var(--disc)",
  marginLeft: "0.2em",
  verticalAlign: "calc((1cap - var(--disc)) / 2)",
  borderRadius: "9999px",
  background: "#0a0516",
  color: "#e4fa65",
} as CSSProperties;
const ARROW_DISC_CENTER: CSSProperties = {
  position: "absolute",
  inset: 0,
  display: "grid",
  placeItems: "center",
};

/* ------------------------------------------------------------------ */
/*  PREVIOUS GALLERY — kept for reference, replaced by                 */
/*  `section#designs.designs-gallery` from Growth Rocket Designs.html. */
/* ------------------------------------------------------------------ */
/*
  <>
    <CategoryFilter
      selectedCategory={selectedCategory}
      onCategoryChange={setSelectedCategory}
    />

    <section className="fix pt-[32px] lg:pt-[40px] pb-[88px] md:pb-[120px]">
      <div className="mb-[28px] flex flex-col gap-[6px] sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-[28px] font-extrabold tracking-[-0.28px] leading-[43.4px] text-[#0d0b1f]">
            Latest designs
          </h2>
        </div>
      </div>

      <FeaturedTemplatesGrid selectedCategory={selectedCategory} />
    </section>
  </>
*/

/**
 * `section#designs.designs-gallery`:
 *
 *   .designs-gallery  padding-top 0 (the lime filter band sits flush against
 *                     the fold's top edge), white surface
 *   .designs-heading  flex, align-items end, justify-content space-between,
 *                     gap 30px, margin 66px 0 32px; column at 900px,
 *                     46px/26px margins at 600px
 *   h2                clamp(36px,4vw,58px), inheriting the fold heading's
 *                     .94 line-height and -.065em tracking
 */
export default function TemplatesPageClient({
  locale,
  initialCategory = "all",
}: {
  locale: Locale;
  initialCategory?: string;
}) {
  /* The selected industry lives in the URL (/designs/<industry>). Picking one
     swaps the URL with history.pushState rather than a router navigation, so
     the grid crossfades in place instead of the whole page remounting; Next
     syncs pushState into usePathname, which is what drives the filter and
     keeps back/forward working. */
  const pathname = usePathname();
  const [fallbackCategory, setFallbackCategory] = useState(initialCategory);
  const selectedCategory =
    categoryFromDesignsPath(pathname ?? "") ?? fallbackCategory;
  const headings = getIndustryCopy(selectedCategory, locale)?.headings;

  function setSelectedCategory(category: string) {
    setFallbackCategory(category);
    window.history.pushState(null, "", designsHref(locale, category));
    // Once the grid has crossfaded out (0.4s exit in FeaturedTemplatesGrid),
    // glide to where the cards start, stopping 220px above them so the fixed
    // navbar (76px) clears with room to spare. Looked up by id so it still
    // finds the grid if the route re-rendered.
    window.setTimeout(() => {
      lenisScrollTo(document.getElementById(GRID_ID), {
        offset: -220,
        duration: 1.8,
        // easeInOutCubic: eases in and out instead of Lenis's default
        // fast start, so the glide reads as one smooth motion.
        easing: (t: number) =>
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
      });
    }, 450);
  }

  return (
    /* The filter band goes through `bleed` so it runs to the card's edges,
       while the heading and grid sit on the rail inside it.

       `max-sm:px-0!` drops the fold's phone inset for this fold only.
       DesignsFold carries it as a floor so copy never touches a COLOURED card
       edge (the hero and the CTA), but this card is white on a white page, so
       the inset is invisible padding that only pushes the heading and the grid
       22px inside the hero/CTA card edges they should line up with. Without it
       the rail sits on the card's own edge — 14px off the viewport, the same
       gutter `.newfix-card` gives every fold and the same 14px the page uses
       between them. The `!` is needed because this lands in the same Tailwind
       layer as the base `max-sm:px-[22px]` it has to beat. */
    <DesignsFold
      id="designs"
      className="bg-white pt-0! text-[#0a0516] max-sm:px-0!"
      bleed={
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          locale={locale}
        />
      }
    >
      {/* The filter changes the URL in place; this keeps the tab title, meta
          description, canonical and share tags matching it. */}
      <ListingHeadSync locale={locale} />
      <RevealGroup className="mt-[66px] mb-[32px] flex items-end justify-between gap-[30px] max-lg:flex-col max-lg:items-start max-sm:mt-[46px] max-sm:mb-[26px]">
        <RevealItem>
          <h2 className="font-bricolage text-[clamp(36px,4vw,58px)] leading-[0.94] font-semibold tracking-[-0.065em]">
            {headings
              ? headings.latest
              : locale === "nl"
                ? "Nieuwste ontwerpen"
                : "Latest designs"}{" "}
            <span aria-hidden style={ARROW_DISC}>
              <span style={ARROW_DISC_CENTER}>
                <ArrowIcon direction="down" size="calc(var(--disc) * 0.5)" />
              </span>
            </span>
          </h2>
        </RevealItem>
      </RevealGroup>

      {/* The grid stays outside the reveal: its own `AnimatePresence`
          crossfade already plays it in, and re-keys it on every category
          change — a scroll reveal on top would fight that. */}
      <div id={GRID_ID}>
        <FeaturedTemplatesGrid
          selectedCategory={selectedCategory}
          locale={locale}
        />
      </div>
    </DesignsFold>
  );
}
