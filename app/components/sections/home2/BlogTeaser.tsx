// "use client";
// import { useCallback, useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import useEmblaCarousel from "embla-carousel-react";
// import Reveal from "../../Reveal";
// import ArrowIcon from "../../ui/ArrowIcon";
// import EyebrowLabel from "../../ui/EyebrowLabel";
// import { useLanguage } from "../../../i18n/LanguageProvider";
// import { localizedHref } from "../../../i18n/locale-href";
// import type { Translation } from "../../../i18n/config";
//
// const POSTS: { title: Translation; image: string }[] = [
//   {
//     title: {
//       en: "Getting an electrician website built in 7 days",
//       nl: "Elektricienwebsite laten maken in 7 dagen",
//     },
//     image: "/home/blog-elektricien-7-dagen.jpg",
//   },
//   {
//     title: {
//       en: "From lecture hall to first client: starting your business right after graduating",
//       nl: "Van collegezaal naar eerste klant: zo start je direct na je studie je eerste bedrijf",
//     },
//     image: "/home/blog-eerste-bedrijf.jpg",
//   },
//   {
//     title: {
//       en: "A professional website that convinces customers. Tools that keep your business running",
//       nl: "Een professionele website die klanten overtuigt. Tools die je bedrijf draaiende houden",
//     },
//     image: "/home/blog-schoonmaak.jpg",
//   },
//   {
//     title: {
//       en: "How long does it take to get an electrician website built?",
//       nl: "Hoe lang duurt het om een elektricienwebsite te laten maken?",
//     },
//     image: "/home/blog-hoelang-elektricienwebsite.jpg",
//   },
// ];
//
// function ArrowButton({
//   dir,
//   disabled,
//   onClick,
// }: {
//   dir: "prev" | "next";
//   disabled: boolean;
//   onClick: () => void;
// }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       disabled={disabled}
//       aria-label={dir === "prev" ? "Previous" : "Next"}
//       className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[var(--color-slate-200)] bg-white text-[var(--color-haiti)] transition-colors hover:bg-[var(--color-violet-98)] disabled:pointer-events-none disabled:opacity-40"
//     >
//       {dir === "prev" ? (
//         <ChevronLeft size={18} strokeWidth={2.25} />
//       ) : (
//         <ChevronRight size={18} strokeWidth={2.25} />
//       )}
//     </button>
//   );
// }
//
// export default function BlogTeaser() {
//   const { t, locale } = useLanguage();
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     align: "start",
//     loop: true,
//   });
//
//   const [canPrev, setCanPrev] = useState(false);
//   const [canNext, setCanNext] = useState(false);
//
//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setCanPrev(emblaApi.canScrollPrev());
//     setCanNext(emblaApi.canScrollNext());
//   }, [emblaApi]);
//
//   useEffect(() => {
//     if (!emblaApi) return;
//     onSelect();
//     emblaApi.on("select", onSelect);
//     emblaApi.on("reInit", onSelect);
//   }, [emblaApi, onSelect]);
//
//   const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
//   const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
//
//   return (
//     <section className="relative overflow-hidden rounded-[28px] bg-[var(--color-violet-98)] fix-wide py-[50px] lg:py-28 flex flex-col gap-5 lg:gap-11">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-8 items-end">
//         <div className="flex flex-col gap-3.5 max-w-140">
//           <EyebrowLabel align="left">
//             {t({ en: "Blog", nl: "Blog" })}
//           </EyebrowLabel>
//           <h2 className="m-0 font-poppins font-bold text-[clamp(28px,3.2vw,40px)] leading-[1.12] tracking-[-1px] text-[var(--color-haiti)]">
//             {t({
//               en: "Discover the latest articles",
//               nl: "Ontdek de laatste artikelen",
//             })}
//           </h2>
//         </div>
//         <div className="flex gap-[10px] justify-self-end">
//           <ArrowButton dir="prev" disabled={!canPrev} onClick={scrollPrev} />
//           <ArrowButton dir="next" disabled={!canNext} onClick={scrollNext} />
//         </div>
//       </div>
//
//       <div className="overflow-hidden pb-1" ref={emblaRef}>
//         <div className="flex -ml-5">
//           {POSTS.concat(POSTS).map((post, i) => (
//             <div
//               key={`${post.title.en}-${i}`}
//               className="shrink-0 w-full pl-5 sm:w-1/3"
//             >
//               <Reveal
//                 delay={Math.min(i * 0.05, 0.2)}
//                 className="flex h-full flex-col gap-4 rounded-[26px] border border-[var(--color-mist)] bg-white p-5 pb-[26px]"
//               >
//                 <div className="relative rounded-[18px] overflow-hidden h-[190px]">
//                   <Image
//                     src={post.image}
//                     alt={t(post.title)}
//                     fill
//                     sizes="(max-width: 640px) 100vw, 380px"
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="flex flex-1 flex-col gap-3 px-[6px]">
//                   <h3
//                     className="m-0 text-[20px] font-semibold leading-[1.25] tracking-[-0.3px] font-poppins text-[var(--color-haiti)]"
//                     dangerouslySetInnerHTML={{ __html: t(post.title) }}
//                   ></h3>
//                   <Link
//                     href={localizedHref("/blog", locale)}
//                     className="arrow-cta mt-auto inline-flex items-center gap-[8px] self-start font-poppins text-[14px] font-semibold text-[var(--color-violet-42)]"
//                   >
//                     {t({ en: "Read more", nl: "Lees meer" })}
//                     <ArrowIcon direction="right" size={14} />
//                   </Link>
//                 </div>
//               </Reveal>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

/**
 * Ported from `section#guides.legacy-blog` — the "Helpful ideas for your next
 * step." fold in grsolidvariant.html.
 *
 * The source sheet paints this fold three times over, so the values below are
 * the *resolved* ones rather than what the first `.legacy-blog` rules say:
 *
 * - The fold is deep `#0a0516` on white text. The base rule sets lavender
 *   `#f5f3ff` and a later colour block repeats it, but the last block that
 *   touches the fold flips it to `var(--gr-deep)!important`.
 * - The "FROM THE BLOG" eyebrow is dropped: `.legacy-section-head>div>p` is
 *   `display:none!important` further down the sheet. The head then collapses to
 *   a single full-width column (`grid-template-columns:1fr!important`), so the
 *   headline is all that is left of it.
 * - The headline is Bricolage 600 at `clamp(40px,4vw,58px)` / 1.1 / -.04em from
 *   the shared `.legacy-section-head h2` rule, and holds one line
 *   (`white-space:nowrap`) until the 760px step releases it.
 *
 * Content is the real blog: the newest posts from the blog registry, loaded by
 * the server page and passed down through Home2Client in both locales, so the
 * cards follow the language switch. Each card is the shared `BlogCard` — the
 * same dark card, lime hover flip and link to the post that the "more
 * articles" carousel on a post page runs.
 *
 * The carousel behaves like Examples: an Embla loop that advances one card
 * every 5s, only ever forward, paused on hover, with the arrow pair in the head
 * from `md` up and under the cards below that. The track is repeated until it
 * holds at least six slides, which is what Embla needs to loop three-per-view
 * without rewinding.
 *
 * The source sheet is desktop-first with max-width steps at 900px and 760px;
 * those are inverted into min-width steps here.
 */

"use client";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";
import BlogCard from "../../blog/BlogCard";
import ButtonF from "../../ui/ButtonF";
import { localizedHref } from "../../../i18n/locale-href";
import { useLanguage } from "../../../i18n/LanguageProvider";
import type { HomeBlogPosts } from "../../../lib/blog-posts";
import { useCarouselAutoplay } from "./useCarouselAutoplay";

/* Fewest slides the looping track may hold: three in view plus three to wrap. */
const MIN_SLIDES = 6;

/* No disabled state: the carousel loops, so both directions are always live. */
function ArrowButton({
  dir,
  onClick,
}: {
  dir: "prev" | "next";
  onClick: () => void;
}) {
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={
        dir === "prev"
          ? t({ en: "Previous articles", nl: "Vorige artikelen" })
          : t({ en: "Next articles", nl: "Volgende artikelen" })
      }
      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/[0.12] bg-[#151021] text-white transition-colors hover:bg-[#1f1830]"
    >
      {dir === "prev" ? (
        <ChevronLeft size={18} strokeWidth={2.25} />
      ) : (
        <ChevronRight size={18} strokeWidth={2.25} />
      )}
    </button>
  );
}

export default function BlogTeaser({ posts }: { posts?: HomeBlogPosts }) {
  const { t, locale } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });
  const hoverPause = useCarouselAutoplay(emblaApi);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const list = (locale === "nl" ? posts?.nl : posts?.en) ?? [];
  if (list.length === 0) return null;

  const copies = Math.ceil(MIN_SLIDES / list.length);
  const slides = Array.from({ length: copies }, () => list).flat();

  return (
    <section
      id="guides"
      aria-labelledby="guides-heading"
      className="relative overflow-hidden rounded-[13px] bg-[#0a0516] py-[56px] text-white md:py-[80px]"
    >
      <div className="fix">
        {/* `.legacy-blog .legacy-section-head` is `align-items:center`; the
            right-hand column here holds the carousel arrows. Below `md` that
            column is dropped and the pair moves under the cards. */}
        <RevealGroup className="grid grid-cols-1 items-center md:grid-cols-[1fr_auto] md:gap-[42px]">
          <RevealItem>
            <h2
              id="guides-heading"
              className="m-0 font-bricolage text-[clamp(40px,4vw,58px)] font-semibold leading-[1.1] tracking-[-0.04em] text-white md:whitespace-nowrap"
            >
              {t({
                en: "Helpful ideas for your next step.",
                nl: "Praktische tips om verder te komen.",
              })}
            </h2>
          </RevealItem>

          <RevealItem className="hidden gap-[10px] md:flex md:justify-self-end">
            <ArrowButton dir="prev" onClick={scrollPrev} />
            <ArrowButton dir="next" onClick={scrollNext} />
          </RevealItem>
        </RevealGroup>

        {/* The group wraps the viewport rather than being Embla's track, as in
            Examples: Embla moves the track with its own `transform`, which a
            motion.div there would overwrite.

            The viewport is padded by one gutter (20px) all round and pulled
            back out, so the hover glow on an edge card isn't clipped while the
            cards stay aligned to `.fix`. */}
        <RevealGroup stagger={0.05}>
          <div
            className="mt-[24px] -mx-[20px] -mb-[16px] overflow-hidden p-[20px]"
            ref={emblaRef}
            {...hoverPause}
          >
            {/* Gutters are slide padding against the track's -20px margin, not
                a flex `gap`, which Embla's loop drops at the wrap point. */}
            <div className="-ml-[20px] flex">
              {slides.map((post, i) => (
                <div
                  key={`${post.slug}-${i}`}
                  className="min-w-0 flex-none basis-full pl-[20px] sm:basis-1/2 lg:basis-1/3"
                >
                  <RevealItem media className="h-full">
                    <BlogCard post={post} titleOnly />
                  </RevealItem>
                </div>
              ))}
            </div>
          </div>
        </RevealGroup>

        {/* Phones only: the arrow pair under the cards at the right edge,
            since the head has no room for it. */}
        <div className="mt-[20px] flex justify-end gap-[10px] md:hidden">
          <ArrowButton dir="prev" onClick={scrollPrev} />
          <ArrowButton dir="next" onClick={scrollNext} />
        </div>

        <div className="mt-[24px] flex justify-center md:mt-[36px]">
          <ButtonF
            href={localizedHref("/blog", locale)}
            variant="lime"
            arrowSize={18}
            className="px-[18px]"
          >
            {t({ en: "View all", nl: "Bekijk alles" })}
          </ButtonF>
        </div>
      </div>
    </section>
  );
}
