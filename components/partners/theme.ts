/**
 * The /home2 design language, as class strings shared by every partner fold:
 * Bricolage display type, Inter copy, the 13px fold radius, flat `#5b2dce`
 * violet, `#e4fa65` lime and the deep `#0a0516` surface. Fold surfaces sit
 * inside HomeShell (see app/partner-network/page.tsx), so each section is a
 * rounded card on white the way home2's are.
 */

export const FOLD = "rounded-[13px] py-[56px] lg:py-[88px]";

export const H2 =
  "m-0 font-bricolage text-[clamp(36px,4vw,56px)] font-semibold leading-[1.1] tracking-[-0.04em]";

export const LEAD = "font-sans text-[17px] leading-[1.7]";

/* Body copy colours: light folds / dark folds. */
export const MUTED = "text-[#625a70]";
export const MUTED_DARK = "text-[#c9c2d4]";

/* CTAs are ButtonF (app/components/ui/ButtonF): `variant="violet"` or
   `variant="lime"` at `size="lg"`. */

/** home2 WhyUs card: lavender `#f5f3ff` tile, `#0a0516` ink, and its lift
 *  hover (4px rise, `#ebe6ff` fill; 300ms expo-out on enter, 380ms
 *  ease-in-out on leave). No box shadow, by request. */
export const CARD_LIGHT =
  "rounded-[13px] border border-white/[0.34] bg-[#f5f3ff] text-[#0a0516] translate-y-0 scale-100 transition-[background-color,border-color,translate,scale] duration-380 ease-in-out hover:-translate-y-1 hover:border-white/[0.46] hover:bg-[#ebe6ff] hover:duration-300 hover:ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-[background-color,border-color] motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100";

/** Icon tile: lime on violet, as in WhyUs. */
export const ICON_TILE =
  "grid size-[40px] shrink-0 place-items-center rounded-[13px] bg-[#e4fa65] text-[#5b2dce]";
