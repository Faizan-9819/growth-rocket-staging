// "use client";
// import Image from "next/image";
// import useEmblaCarousel from "embla-carousel-react";
// import { useCallback } from "react";
// import Reveal from "../../Reveal";
// import EyebrowLabel from "../../ui/EyebrowLabel";
// import { useLanguage } from "../../../i18n/LanguageProvider";
// import type { Translation } from "../../../i18n/config";
// import { withBreaks } from "@/app/lib/withBreaks";

// function ArrowButton({
//   dir,
//   onClick,
// }: {
//   dir: "prev" | "next";
//   onClick: () => void;
// }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       aria-label={dir === "prev" ? "Previous" : "Next"}
//       className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-slate-200)] bg-white font-poppins text-[18px] text-[var(--color-haiti)] transition-colors hover:bg-[var(--color-violet-98)]"
//     >
//       {dir === "prev" ? "‹" : "›"}
//     </button>
//   );
// }

// const TRADES: { name: Translation; image: string }[] = [
//   {
//     name: { en: "Electrician", nl: "Elektricien" },
//     image:
//       "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Plumber", nl: "Loodgieter" },
//     image:
//       "https://images.unsplash.com/photo-1676210134188-4c05dd172f89?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Cleaning company", nl: "Schoonmaakbedrijf" },
//     image:
//       "https://images.unsplash.com/photo-1686178827149-6d55c72d81df?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Consultant", nl: "Consultant" },
//     image:
//       "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Accountant", nl: "Accountant" },
//     image:
//       "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Hairdresser / salon", nl: "Kapper / salon" },
//     image:
//       "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Coach", nl: "Coach" },
//     image:
//       "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Healthcare professional", nl: "Zorgprofessional" },
//     image:
//       "https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Handyman business", nl: "Klusbedrijf" },
//     image:
//       "https://images.unsplash.com/photo-1646640381839-02748ae8ddf0?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Business service provider", nl: "Zakelijke dienstverlener" },
//     image:
//       "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=70",
//   },
// ];

// export default function Audience() {
//   const { t } = useLanguage();
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     align: "start",
//     dragFree: true,
//     containScroll: "trimSnaps",
//   });

//   const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
//   const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

//   return (
//     <section
//       id="voorwie"
//       className="relative overflow-hidden rounded-[28px] bg-white py-[50px] lg:pt-28 lg:pb-24 flex flex-col gap-2"
//     >
//       <div className="fix-wide grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
//         <div className="flex flex-col gap-4 max-w-140">
//           <EyebrowLabel align="left">
//             {t({ en: "Who it's for", nl: "Voor wie" })}
//           </EyebrowLabel>
//           <h2 className="m-0 font-poppins font-bold text-[clamp(28px,3.2vw,40px)] leading-[1.12] tracking-[-1px] text-[var(--color-haiti)]">
//             {withBreaks(
//               t({
//                 en: "Built for entrepreneurs like you.",
//                 nl: "Gemaakt voor ondernemers zoals jij.",
//               }),
//             )}
//           </h2>
//         </div>
//         <Reveal
//           delay={0.1}
//           className="self-start justify-self-end pt-[0px] max-w-95"
//         >
//           <p className="m-0 text-[16px] leading-[1.6] text-[var(--color-dolphin)] ">
//             {t({
//               en: "Different businesses, the same basics: coming across as professional, welcoming customers, planning appointments, keeping client details, and sending quotes and invoices.",
//               nl: "Andere bedrijven, dezelfde basis: professioneel overkomen, klanten ontvangen, afspraken plannen, klantgegevens bijhouden, offertes en facturen versturen.",
//             })}
//           </p>
//         </Reveal>
//       </div>

//       <div className="fix-wide overflow-hidden pt-[8px] pb-7" ref={emblaRef}>
//         <div className="flex gap-4">
//           {TRADES.map((trade, i) => (
//             <Reveal
//               key={trade.name.en}
//               delay={Math.min(i * 0.04, 0.3)}
//               className="relative shrink-0 w-[82%] sm:w-[220px] h-[300px] rounded-[26px] overflow-hidden flex flex-col justify-end p-[22px]"
//             >
//               <Image
//                 src={trade.image}
//                 alt={t(trade.name)}
//                 fill
//                 sizes="(max-width: 640px) 82vw, 220px"
//                 className="object-cover"
//               />
//               <span
//                 aria-hidden
//                 className="absolute inset-x-0 bottom-0 h-[55%]"
//                 style={{
//                   background:
//                     "linear-gradient(180deg, rgba(10,5,22,0), rgba(10,5,22,0.78))",
//                 }}
//               />
//               <span className="relative font-poppins text-[19px] font-semibold text-white">
//                 {t(trade.name)}
//               </span>
//             </Reveal>
//           ))}
//         </div>
//       </div>

//       <div className="fix-wide flex items-center justify-end gap-[10px]">
//         <ArrowButton dir="prev" onClick={scrollPrev} />
//         <ArrowButton dir="next" onClick={scrollNext} />
//       </div>
//     </section>
//   );
// }

//
//
//

// "use client";
// import Image from "next/image";
// import useEmblaCarousel from "embla-carousel-react";
// import { useCallback, useEffect, useState } from "react";
// import Reveal from "../../Reveal";
// import EyebrowLabel from "../../ui/EyebrowLabel";
// import { useLanguage } from "../../../i18n/LanguageProvider";
// import type { Translation } from "../../../i18n/config";
// import { withBreaks } from "@/app/lib/withBreaks";

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
//       className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-slate-200)] bg-white font-poppins text-[18px] text-[var(--color-haiti)] transition-colors hover:bg-[var(--color-violet-98)] disabled:pointer-events-none disabled:opacity-40"
//     >
//       {dir === "prev" ? "‹" : "›"}
//     </button>
//   );
// }

// const TRADES: { name: Translation; image: string }[] = [
//   {
//     name: { en: "Electrician", nl: "Elektricien" },
//     image:
//       "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Plumber", nl: "Loodgieter" },
//     image:
//       "https://images.unsplash.com/photo-1676210134188-4c05dd172f89?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Cleaning company", nl: "Schoonmaakbedrijf" },
//     image:
//       "https://images.unsplash.com/photo-1686178827149-6d55c72d81df?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Consultant", nl: "Consultant" },
//     image:
//       "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Accountant", nl: "Accountant" },
//     image:
//       "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Hairdresser / salon", nl: "Kapper / salon" },
//     image:
//       "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Coach", nl: "Coach" },
//     image:
//       "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Healthcare professional", nl: "Zorgprofessional" },
//     image:
//       "https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Handyman business", nl: "Klusbedrijf" },
//     image:
//       "https://images.unsplash.com/photo-1646640381839-02748ae8ddf0?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Business service provider", nl: "Zakelijke dienstverlener" },
//     image:
//       "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=70",
//   },
// ];

// export default function Audience() {
//   const { t } = useLanguage();
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     align: "start",
//     dragFree: true,
//     containScroll: "trimSnaps",
//   });

//   const [canPrev, setCanPrev] = useState(false);
//   const [canNext, setCanNext] = useState(false);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setCanPrev(emblaApi.canScrollPrev());
//     setCanNext(emblaApi.canScrollNext());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     onSelect();
//     emblaApi.on("select", onSelect);
//     emblaApi.on("reInit", onSelect);
//   }, [emblaApi, onSelect]);

//   const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
//   const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

//   return (
//     <section
//       id="voorwie"
//       className="relative overflow-hidden rounded-[28px] bg-white py-[50px] lg:pt-28 lg:pb-24 flex flex-col gap-2"
//     >
//       <div className="fix-wide grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
//         <div className="flex flex-col gap-4 max-w-140">
//           <EyebrowLabel align="left">
//             {t({ en: "Who it's for", nl: "Voor wie" })}
//           </EyebrowLabel>
//           <h2 className="m-0 font-poppins font-bold text-[clamp(28px,3.2vw,40px)] leading-[1.12] tracking-[-1px] text-[var(--color-haiti)]">
//             {withBreaks(
//               t({
//                 en: "Built for entrepreneurs like you.",
//                 nl: "Gemaakt voor ondernemers zoals jij.",
//               }),
//             )}
//           </h2>
//         </div>
//         <Reveal
//           delay={0.1}
//           className="self-start justify-self-end pt-[0px] max-w-95"
//         >
//           <p className="m-0 text-[16px] leading-[1.6] text-[var(--color-dolphin)] ">
//             {t({
//               en: "Different businesses, the same basics: coming across as professional, welcoming customers, planning appointments, keeping client details, and sending quotes and invoices.",
//               nl: "Andere bedrijven, dezelfde basis: professioneel overkomen, klanten ontvangen, afspraken plannen, klantgegevens bijhouden, offertes en facturen versturen.",
//             })}
//           </p>
//         </Reveal>
//       </div>

//       {/* Mobile: unchanged drag carousel */}
//       <div className="fix-wide pt-[8px] pb-7 sm:hidden">
//         <div className="overflow-hidden" ref={emblaRef}>
//           <div className="flex gap-4">
//             {TRADES.map((trade, i) => (
//               <Reveal
//                 key={trade.name.en}
//                 delay={Math.min(i * 0.04, 0.3)}
//                 className="relative shrink-0 w-full sm:w-[220px] h-[300px] rounded-[26px] overflow-hidden flex flex-col justify-end p-[22px]"
//               >
//                 <Image
//                   src={trade.image}
//                   alt={t(trade.name)}
//                   fill
//                   sizes="(max-width: 640px) 100vw, 220px"
//                   className="object-cover"
//                 />
//                 <span
//                   aria-hidden
//                   className="absolute inset-x-0 bottom-0 h-[55%]"
//                   style={{
//                     background:
//                       "linear-gradient(180deg, rgba(10,5,22,0), rgba(10,5,22,0.78))",
//                   }}
//                 />
//                 <span className="relative font-poppins text-[19px] font-semibold text-white">
//                   {t(trade.name)}
//                 </span>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="fix-wide flex items-center justify-center gap-[10px] sm:hidden">
//         <ArrowButton dir="prev" disabled={!canPrev} onClick={scrollPrev} />
//         <ArrowButton dir="next" disabled={!canNext} onClick={scrollNext} />
//       </div>

//       {/* Tablet/desktop: auto-sliding marquee, pauses on hover. Same left
//           start as before; right side bleeds to the section's own edge. */}
//       <div className="hidden sm:block group fix-start overflow-hidden mt-5 pt-[8px] pb-7">
//         <div className="flex w-max gap-4 [animation:gr-ticker_45s_linear_infinite] group-hover:[animation-play-state:paused]">
//           {TRADES.concat(TRADES).map((trade, i) => (
//             <div
//               key={`${trade.name.en}-${i}`}
//               className="relative shrink-0 w-[220px] h-[300px] rounded-[26px] overflow-hidden flex flex-col justify-end p-[22px]"
//             >
//               <Image
//                 src={trade.image}
//                 alt={t(trade.name)}
//                 fill
//                 sizes="220px"
//                 className="object-cover"
//               />
//               <span
//                 aria-hidden
//                 className="absolute inset-x-0 bottom-0 h-[55%]"
//                 style={{
//                   background:
//                     "linear-gradient(180deg, rgba(10,5,22,0), rgba(10,5,22,0.78))",
//                 }}
//               />
//               <span className="relative font-poppins text-[19px] font-semibold text-white">
//                 {t(trade.name)}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

//
"use client";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";
import EyebrowLabel from "../../ui/EyebrowLabel";
import { useLanguage } from "../../../i18n/LanguageProvider";
import type { Translation } from "../../../i18n/config";
import { localizedHref } from "../../../i18n/locale-href";
import { withBreaks } from "@/app/lib/withBreaks";
import { AUDIENCE_ANCHOR } from "./anchors";

/* BlogTeaser's round arrow, repainted for this white fold: the lavender tile
   home2's light cards use, flipping to the brand violet on hover. */
function ArrowButton({
  dir,
  disabled = false,
  onClick,
}: {
  dir: "prev" | "next";
  disabled?: boolean;
  onClick: () => void;
}) {
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={
        dir === "prev"
          ? t({ en: "Previous", nl: "Vorige" })
          : t({ en: "Next", nl: "Volgende" })
      }
      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#ded8e7] bg-[#f5f3ff] text-[#0a0516] transition-colors hover:border-[#5b2dce] hover:bg-[#5b2dce] hover:text-white disabled:pointer-events-none disabled:opacity-40"
    >
      {dir === "prev" ? (
        <ChevronLeft size={18} strokeWidth={2.25} />
      ) : (
        <ChevronRight size={18} strokeWidth={2.25} />
      )}
    </button>
  );
}

/* Desktop strip geometry: a 220px card plus its 16px `mr-4`. */
const CARD_STEP = 236;

/* Strip card label. The card is a fixed 220px with 22px padding, which leaves
   176px — and "Schoonmaakbedrijven" is one 206px word at 19px, so it can't wrap
   and was clipped by the card. Dutch labels drop to 16px (~173px for that word);
   all of them rather than just that one, so the strip's labels stay one size.
   The mobile carousel's cards are wider, so its labels keep 19px. */
const STRIP_LABEL_SIZE = { en: "text-[19px]", nl: "text-[16px]" } as const;

/* The six trades of Growth-Rocket-Homepage(-NL)-Standalone.html's
   `.legacy-people`. */
const TRADES: { name: Translation; image: string; href?: string }[] = [
  {
    name: { en: "Electricians", nl: "Elektriciens" },
    image: "/home2/elec.jpg",
    href: "/industry/website-for-electricians",
  },
  {
    name: { en: "Plumbers", nl: "Loodgieters" },
    image: "/home2/plumber.jpg",
    href: "/industry/website-for-plumbers",
  },
  {
    name: { en: "Cleaning services", nl: "Schoonmaakbedrijven" },
    image: "/home2/cleaning.jpg",
    href: "/industry/website-for-cleaning-businesses",
  },
  {
    name: { en: "Consultants", nl: "Adviseurs" },
    image: "/home2/consultant.jpg",
    href: "/industry/website-for-consultants",
  },
  {
    name: { en: "Accountants", nl: "Accountants" },
    image: "/home2/accountant.jpg",
    href: "/industry/website-for-accountants",
  },
  {
    name: { en: "Beauty & wellbeing", nl: "Beauty en welzijn" },
    image: "/home2/hairdresser].jpg",
    href: "/industry/website-for-hair-salons",
  },
];

/* One full run of TRADES: the distance after which the repeated strip repeats
   itself, so any offset can be wrapped back into (-MARQUEE_PERIOD, 0]. */
const MARQUEE_PERIOD = CARD_STEP * TRADES.length;

/* Desktop strip motion, all in px and seconds. The speed is pinned to the pace
   the strip ran at with its original ten cards (one 2360px run per 45s, as the
   CSS loop ran), so trimming the list to six didn't slow the marquee down. */
const AUTO_SPEED = (CARD_STEP * 10) / 45;
const AUTO_EASE = 0.35; // time constant for speeding up / slowing to a hover stop
const FLING_DECAY = 0.4; // time constant for the coast after a released drag
const FLING_MAX = 4000; // velocity cap, so a flick can't spin the strip wildly
const DRAG_THRESHOLD = 5; // movement past this turns a press into a drag
const NUDGE_EASE = 0.12; // time constant for an arrow's one-card glide (~0.5s)

export default function Audience() {
  const { t, locale } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  /* Desktop strip: one rAF loop owns the offset, so auto-scroll, drag, the
     post-drag coast and the arrows are a single motion rather than a CSS
     animation fighting a JS transform. The offset lives in a closure, never in
     React state, so nothing re-renders while the strip moves.

     - Auto-scroll eases to a stop on hover and back up on leave, instead of
       the instant freeze `animation-play-state` gave.
     - Pressing catches the strip where it is; dragging moves it 1:1 with the
       pointer; releasing hands the pointer's recent velocity to a decaying
       fling that blends back into the auto-scroll.
     - An arrow queues a one-card step in `pendingNudge`, which the loop eases
       out on top of the auto-scroll. Clicks stack, and since the offset wraps
       every MARQUEE_PERIOD the strip never runs out in either direction.
     - A press that turned into a drag swallows the click that follows, so
       dragging across a card doesn't open its link.
     - The loop only runs while the strip is on screen (and not `display:none`
       below `sm`). */
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pendingNudge = useRef(0);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let x = 0;
    let rendered = NaN;
    let autoV = -AUTO_SPEED;
    let flingV = 0;
    let hovered = false;
    let pointerId: number | null = null;
    let dragging = false;
    let suppressClick = false;
    let startX = 0;
    let lastX = 0;
    let samples: { t: number; x: number }[] = [];
    let raf = 0;
    let last = 0;

    const wrap = (v: number) => {
      const r = v % MARQUEE_PERIOD;
      return r > 0 ? r - MARQUEE_PERIOD : r;
    };

    const tick = (now: number) => {
      // Clamped so a dropped frame or a backgrounded tab doesn't jump the strip.
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
      last = now;
      if (pointerId === null) {
        const target = hovered || reducedMotion.matches ? 0 : -AUTO_SPEED;
        autoV += (target - autoV) * (1 - Math.exp(-dt / AUTO_EASE));
        flingV *= Math.exp(-dt / FLING_DECAY);
        if (Math.abs(flingV) < 1) flingV = 0;
        x = wrap(x + (autoV + flingV) * dt);
      }
      const nudge = pendingNudge.current;
      if (nudge) {
        let step = reducedMotion.matches
          ? nudge
          : nudge * (1 - Math.exp(-dt / NUDGE_EASE));
        if (Math.abs(nudge - step) < 0.5) step = nudge;
        pendingNudge.current = nudge - step;
        x = wrap(x + step);
      }
      if (x !== rendered) {
        track.style.transform = `translate3d(${x}px,0,0)`;
        rendered = x;
      }
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
      last = 0;
    };
    const io = new IntersectionObserver(([entry]) =>
      entry.isIntersecting ? start() : stop(),
    );
    io.observe(viewport);

    /* Velocity over the last ~100ms of movement. A pointer that sat still
       before letting go releases with none, so a careful drag doesn't drift. */
    const releaseVelocity = (t: number) => {
      const first = samples[0];
      const latest = samples[samples.length - 1];
      if (!first || t - latest.t > 50 || latest.t <= first.t) return 0;
      const v = ((latest.x - first.x) / (latest.t - first.t)) * 1000;
      return Math.max(-FLING_MAX, Math.min(FLING_MAX, v));
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerId !== pointerId) return;
      x = wrap(x + e.clientX - lastX);
      lastX = e.clientX;
      samples.push({ t: e.timeStamp, x: e.clientX });
      while (samples.length > 2 && e.timeStamp - samples[0].t > 100) {
        samples.shift();
      }
      if (!dragging && Math.abs(e.clientX - startX) > DRAG_THRESHOLD) {
        dragging = true;
        /* Captured only once it's a real drag: capturing on press would
           retarget the click of a plain tap away from the card's link. */
        try {
          viewport.setPointerCapture(e.pointerId);
        } catch {}
      }
    };

    const onUp = (e: PointerEvent) => {
      if (e.pointerId !== pointerId) return;
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      pointerId = null;
      if (dragging) {
        dragging = false;
        suppressClick = true;
        if (e.type === "pointerup" && !reducedMotion.matches) {
          flingV = releaseVelocity(e.timeStamp);
        }
      }
    };

    const onDown = (e: PointerEvent) => {
      if (pointerId !== null || (e.pointerType === "mouse" && e.button !== 0)) {
        return;
      }
      pointerId = e.pointerId;
      startX = lastX = e.clientX;
      samples = [{ t: e.timeStamp, x: e.clientX }];
      // Catch the strip: a coasting fling or arrow glide stops, and
      // auto-scroll restarts from rest once it's let go.
      flingV = 0;
      autoV = 0;
      pendingNudge.current = 0;
      suppressClick = false;
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
      window.addEventListener("pointercancel", onUp);
    };

    const onClick = (e: MouseEvent) => {
      if (!suppressClick) return;
      suppressClick = false;
      e.preventDefault();
      e.stopPropagation();
    };

    // Hover pause is for a mouse/pen resting on the strip; touch has no hover.
    const onEnter = (e: PointerEvent) => {
      if (e.pointerType !== "touch") hovered = true;
    };
    const onLeave = (e: PointerEvent) => {
      if (e.pointerType !== "touch") hovered = false;
    };

    viewport.addEventListener("pointerdown", onDown);
    viewport.addEventListener("pointerenter", onEnter);
    viewport.addEventListener("pointerleave", onLeave);
    viewport.addEventListener("click", onClick, true);

    return () => {
      stop();
      io.disconnect();
      viewport.removeEventListener("pointerdown", onDown);
      viewport.removeEventListener("pointerenter", onEnter);
      viewport.removeEventListener("pointerleave", onLeave);
      viewport.removeEventListener("click", onClick, true);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, []);

  return (
    <section
      // The navbar's "Who It’s For" anchor, in each page's own language
      // (#who-its-for on /, #voorwie on /nl).
      id={AUDIENCE_ANCHOR[locale]}
      className="relative rounded-[28px] bg-white py-[50px] lg:pt-28 lg:pb-24 flex flex-col gap-2"
    >
      {/* `.legacy-section-head` from grsolidvariant.html: a `1fr
          minmax(260px,420px)` grid with a 42px gap, bottom-aligned, collapsing
          to one column with an 18px gap at the source's 900px step (`md:` is
          the nearest one this project defines). */}
      <RevealGroup className="fix grid grid-cols-1 items-start gap-[18px] md:grid-cols-[1fr_minmax(260px,420px)] md:items-end md:gap-[42px]">
        <RevealItem className="flex flex-col gap-4">
          {/* <EyebrowLabel align="left">
            {t({ en: "Who it's for", nl: "Voor wie" })}
          </EyebrowLabel> */}
          {/* Copy and type both come from `.legacy-who .legacy-section-head h2`
              in grsolidvariant.html: Bricolage 600 at clamp(40px,4vw,58px),
              1.1 line-height and -0.04em tracking (the "One typography and
              control language" block wins over the earlier 43px rule), on
              #0a0516 — which is what `--color-haiti` holds. The line break is
              the source's own `<br>`; nothing there pins the heading to one
              line, so it wraps on its own when the column gets narrow. */}
          <h2 className="m-0 font-bricolage font-semibold text-[clamp(40px,4vw,58px)] leading-[1.1] tracking-[-0.04em] text-[var(--color-haiti)]">
            {withBreaks(
              t({
                en: "Built for businesses<br/>like yours.",
                nl: "Voor bedrijven<br/>zoals dat van jou.",
              }),
            )}
          </h2>
        </RevealItem>
        <div>
          {/* The fold's second column in the source. Five rules in
              grsolidvariant.html hit it, all at the same specificity, so each
              property is settled by the last one to declare it:

                `.legacy-section-head p`   font:700 11px Inter; ls .13em; #5b21b6
                `.legacy-section-head>p`   margin:0 0 4px; #6b6580; font:16px/1.6 Inter
                `.legacy-section-head p`   font-size:12px; letter-spacing:.1em
                `.legacy-section-head>p`   font-size:16px; line-height:1.6
                `.legacy-section-head p`   color:var(--gr-brand-ink)

              leaving Inter 400 16px/1.6, 0.1em tracking and #5b2dce. The two
              surprises are both spill from rules written for the eyebrow: the
              `font` shorthand never resets `letter-spacing`, so the 0.1em
              survives, and the last colour rule is a descendant selector that
              reaches this paragraph as well. `--gr-brand-ink` is redefined
              further down the sheet, so it resolves to #5b2dce, not #5b219f. */}
          <RevealItem
            as="p"
            className="m-0 mb-[4px] font-sans text-[16px] leading-[1.6] tracking-[0.1em] text-[#5b2dce]"
          >
            {t({
              en: "For small businesses that want to look professional, stay organised and focus on growth, with less time spent on everyday admin.",
              nl: "Voor kleine bedrijven die professioneel voor de dag willen komen, overzicht willen houden en willen groeien. Met minder tijd kwijt aan de dagelijkse administratie.",
            })}
          </RevealItem>
        </div>
      </RevealGroup>
      {/*  */}
      {/* Mobile: drag carousel */}
      <div className="fix-wide pt-[8px] pb-7 sm:hidden">
        <div className="overflow-hidden" ref={emblaRef}>
          {/* The per-card `delay` the slides used to carry is now the group's
              stagger — a tight one, because only the first card is on screen
              and the rest arrive by swipe. */}
          <RevealGroup stagger={0.05} className="flex gap-4">
            {TRADES.map((trade) => (
              <RevealItem
                media
                key={trade.name.en}
                className="relative shrink-0 w-full sm:w-[220px] h-[300px] rounded-[26px] overflow-hidden flex flex-col justify-end p-[22px] cursor-pointer"
              >
                <Image
                  src={trade.image}
                  alt={t(trade.name)}
                  fill
                  sizes="(max-width: 640px) 100vw, 220px"
                  className="object-cover"
                />
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-[55%]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,5,22,0), rgba(10,5,22,0.78))",
                  }}
                />
                <span className="relative font-bricolage text-[19px] font-semibold text-white">
                  {t(trade.name)}
                </span>
                {trade.href && (
                  <Link
                    href={localizedHref(trade.href, locale)}
                    aria-label={t(trade.name)}
                    className="absolute inset-0 z-10"
                  >
                    {/* Anchor text for crawlers; an empty overlay link
                        reads as a link with no text. */}
                    <span className="sr-only">{t(trade.name)}</span>
                  </Link>
                )}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>

      <div className="fix-wide flex items-center justify-center gap-[10px] sm:hidden">
        <ArrowButton dir="prev" disabled={!canPrev} onClick={scrollPrev} />
        <ArrowButton dir="next" disabled={!canNext} onClick={scrollNext} />
      </div>

      {/* Tablet/desktop: auto-sliding marquee, pauses on hover.
          `fix-start` only provides the left offset — the nested div does the
          clipping, so its left edge sits exactly at the left margin and cards
          disappear there instead of running into the gutter. */}
      {/* <div className="hidden sm:block group mt-5 ml-[max(20px,calc((100%_-_var(--content-width))_/_2))] md:ml-[max(0px,calc((100%_-_var(--content-width))_/_2))]">
        <div className="overflow-hidden pt-[8px]">
          <div className="flex w-max gap-4 [animation:gr-ticker_45s_linear_infinite] group-hover:[animation-play-state:paused]">
            {TRADES.concat(TRADES).map((trade, i) => (
              <div
                key={`${trade.name.en}-${i}`}
                className="relative shrink-0 w-[220px] h-[300px] rounded-[26px] overflow-hidden flex flex-col justify-end p-[22px]"
              >
                <Image
                  src={trade.image}
                  alt={t(trade.name)}
                  fill
                  sizes="220px"
                  className="object-cover"
                />
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-[55%]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,5,22,0), rgba(10,5,22,0.78))",
                  }}
                />
                <span className="relative font-poppins text-[19px] font-semibold text-white">
                  {t(trade.name)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      {/* Desktop marquee runs edge to edge: `full-bleed` cancels HomeShell's
          side padding + max-width centering so the strip starts at the
          viewport's left edge and bleeds off the right. The section drops its
          own `overflow-hidden` for this — the inner div below still clips the
          ticker, so nothing else escapes. */}
      <div className="hidden sm:block mt-5 full-bleed">
        {/* Drag surface. `touch-pan-y` leaves vertical page scrolling to the
            browser on tablets while horizontal swipes drive the strip. */}
        <div
          ref={viewportRef}
          className="overflow-hidden pt-[8px] select-none touch-pan-y"
        >
          {/* Two rules keep the wrap seamless:
              1. Spacing is `mr-4` on each card, never a flex `gap` — a gap
                 leaves no space after the last card, so one run would be 16px
                 short of MARQUEE_PERIOD and the strip would hitch every lap.
              2. Four copies: the strip is full-bleed and one run is only
                 ~1416px, so the track has to cover a run plus the whole
                 viewport (up to ~4250px wide) or a wide monitor would see
                 empty track at the wrap point. */}
          <div
            ref={trackRef}
            className="flex w-max will-change-transform backface-hidden"
          >
            {[...TRADES, ...TRADES, ...TRADES, ...TRADES].map((trade, i) => (
              <div
                key={`${trade.name.en}-${i}`}
                aria-hidden={i >= TRADES.length}
                className="relative shrink-0 mr-4 w-[220px] h-[300px] rounded-[26px] overflow-hidden flex flex-col justify-end p-[22px] cursor-pointer"
              >
                <Image
                  src={trade.image}
                  alt={t(trade.name)}
                  fill
                  sizes="220px"
                  // The repeats scroll in from off-screen; decoding them lazily
                  // mid-animation drops frames, so the strip's images load up
                  // front (all 30 cards share the same 10 files).
                  loading="eager"
                  // Native image drag would hijack the pointer mid-drag.
                  draggable={false}
                  className="object-cover"
                />
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-[55%]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,5,22,0), rgba(10,5,22,0.78))",
                  }}
                />
                <span
                  className={`relative font-bricolage ${STRIP_LABEL_SIZE[locale]} font-semibold text-white`}
                >
                  {t(trade.name)}
                </span>
                {/* Repeats are aria-hidden, so their links leave the tab order
                    too. Links can't be natively dragged here, since that would
                    cancel the strip drag. */}
                {trade.href && (
                  <Link
                    href={localizedHref(trade.href, locale)}
                    aria-label={t(trade.name)}
                    tabIndex={i >= TRADES.length ? -1 : undefined}
                    draggable={false}
                    className="absolute inset-0 z-10"
                  >
                    <span className="sr-only">{t(trade.name)}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tablet/desktop arrows, centred under the strip. Each click queues a
          one-card glide — see `pendingNudge` above. */}
      <div className="fix mt-[20px] hidden justify-center gap-[10px] sm:flex">
        <ArrowButton
          dir="prev"
          onClick={() => (pendingNudge.current += CARD_STEP)}
        />
        <ArrowButton
          dir="next"
          onClick={() => (pendingNudge.current -= CARD_STEP)}
        />
      </div>
    </section>
  );
}
