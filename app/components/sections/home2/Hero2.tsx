"use client";
import { useEffect, useRef } from "react";
import ButtonF from "../../ui/ButtonF";
import { watchHalfVisible } from "../../../lib/half-visible";
import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";
import { useLanguage } from "../../../i18n/LanguageProvider";
import type { Locale } from "../../../i18n/config";

/* Copy from Growth-Rocket-Homepage(-NL)-Standalone.html. */
const HERO_COPY: Record<
  Locale,
  {
    lead: string;
    phrases: string[];
    phrasesLabel: string;
    tail: string;
    start: string;
    link: string;
    audience: string;
    /** Monthly option, before the yearly one: "€69/month or". */
    price: string;
    /** Yearly list price, drawn struck through. */
    priceWas: string;
    /** Yearly launch price that replaces it. */
    priceNow: string;
    /** Who the launch price is for, under the price line. */
    offer: string;
    /** Follows the price on the same line, muted: "+ €290 one-time setup". */
    fee: string;
    /** Without its asterisk — that is drawn as a lime superscript. */
    launch: string;
    /** One entry per line, broken where the design breaks it. */
    footnote: string[];
    imageAlt: string;
  }
> = {
  en: {
    lead: "Not just a website.",
    phrases: [
      "An appointment system",
      "A quote desk",
      "An invoice book",
      "A front desk",
      "A complete system",
    ],
    phrasesLabel:
      "An appointment system, a quote desk, an invoice book, a front desk and a complete system",
    tail: "for your business.",
    start: "Get Growth Rocket",
    link: "See what’s included",
    audience: "Built for small businesses",
    price: "€69/month or",
    priceWas: "€690",
    priceNow: "€490/year",
    offer: "Launch price for the first 100 customers only",
    fee: "+ €290 one-time setup",
    launch: "Online within 7 working days",
    footnote: [
      "* Starts when we receive all required information and materials.",
      "Timely approvals are needed to meet the timeframe.",
    ],
    imageAlt:
      "Small business owners at work: an electrician, a doctor, a plumber, a cleaner, a consultant, a hairdresser and a solar installer",
  },
  nl: {
    lead: "Meer dan een website.",
    phrases: [
      "Een afsprakensysteem",
      "Een offerteloket",
      "Een factuurboek",
      "Een receptie",
      "Een compleet systeem",
    ],
    phrasesLabel:
      "Een afsprakensysteem, een offerteloket, een factuurboek, een receptie en een compleet systeem",
    tail: "voor jouw bedrijf.",
    start: "Start met Growth Rocket",
    link: "Bekijk wat je krijgt",
    audience: "Voor kleine bedrijven",
    price: "€69/maand of",
    priceWas: "€690",
    priceNow: "€490/jaar",
    offer: "Introductieprijs alleen voor de eerste 100 klanten",
    fee: "+ €290 eenmalige opstartkosten",
    launch: "Binnen 7 werkdagen online",
    footnote: [
      "* De termijn start na ontvangst van alle benodigde informatie en materialen.",
      "Tijdige goedkeuring is nodig om de planning te halen.",
    ],
    imageAlt:
      "Ondernemers aan het werk: een elektricien, een arts, een loodgieter, een schoonmaker, een consultant, een kapper en een zonnepanelenmonteur",
  },
};

const PHRASE_HOLD_MS = 2400;
const PHRASE_FADE_MS = 250;

/* Out and back-in keyframes of the source's `.is-changing` transition
   (opacity .24s ease, transform .24s ease, translateY(-12px)). */
const PHRASE_HIDDEN: Keyframe = { opacity: 0, transform: "translateY(-12px)" };
const PHRASE_SHOWN: Keyframe = { opacity: 1, transform: "translateY(0)" };
const PHRASE_TIMING: KeyframeAnimationOptions = {
  duration: 240,
  easing: "ease",
  fill: "forwards",
};

function HeroPhraseRotator({ phrases }: { phrases: string[] }) {
  const boxRef = useRef<HTMLSpanElement>(null);
  const phraseRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    const h1 = box?.closest("h1");
    if (!box || !h1) return;
    const fit = () => {
      h1.style.fontSize = "";
      const base = parseFloat(getComputedStyle(h1).fontSize);
      const avail =
        box.clientWidth - parseFloat(getComputedStyle(box).paddingRight);
      const widest = Math.max(
        ...Array.from(
          box.querySelectorAll<HTMLElement>("[data-phrase-measure]"),
          (m) => m.offsetWidth,
        ),
      );
      if (widest > avail && avail > 0)
        h1.style.fontSize = `${Math.floor(base * (avail / widest) * 0.98)}px`;
    };
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(h1.parentElement ?? h1);
    document.fonts?.ready.then(fit);
    return () => {
      observer.disconnect();
      h1.style.fontSize = "";
    };
  }, []);

  useEffect(() => {
    const el = phraseRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    let current = 0;
    let timer: number;
    let animation: Animation | undefined;
    const advance = () => {
      animation = el.animate([PHRASE_SHOWN, PHRASE_HIDDEN], PHRASE_TIMING);
      timer = window.setTimeout(() => {
        current = (current + 1) % phrases.length;
        el.textContent = phrases[current];
        animation = el.animate([PHRASE_HIDDEN, PHRASE_SHOWN], PHRASE_TIMING);
        timer = window.setTimeout(advance, PHRASE_HOLD_MS);
      }, PHRASE_FADE_MS);
    };
    timer = window.setTimeout(advance, PHRASE_HOLD_MS);
    return () => {
      window.clearTimeout(timer);
      animation?.cancel();
    };
  }, [phrases]);

  return (
    <span
      ref={boxRef}
      aria-hidden
      className="relative my-[-0.15em] block overflow-x-visible overflow-y-clip py-[0.15em] whitespace-nowrap pr-[0.12em] italic text-[#e4fa65]"
    >
      <span ref={phraseRef} className="block">
        {phrases[0]}
      </span>
      {phrases.map((phrase) => (
        <span
          key={phrase}
          data-phrase-measure
          className="invisible absolute left-0 top-0 whitespace-nowrap"
        >
          {phrase}
        </span>
      ))}
    </span>
  );
}

export default function Hero2({ onStartClick }: { onStartClick?: () => void }) {
  const { locale } = useLanguage();
  const copy = HERO_COPY[locale];
  const videoRef = useRef<HTMLVideoElement>(null);

  // The video plays only while at least half of it is on screen. Muted is
  // set here too: browsers only allow muted video to start on its own.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    return watchHalfVisible(video, (visible) => {
      if (visible) video.play().catch(() => {});
      else video.pause();
    });
  }, []);

  return (
    <section id="home" className="">
      <div className=" grid grid-cols-1 lg:grid-cols-[minmax(0,max(55%,720px))_minmax(0,1fr)] min-[1600px]:grid-cols-[minmax(0,max(58%,820px))_minmax(0,1fr)] gap-0 overflow-hidden rounded-[13px]">
        {/* Left: copy panel */}

        <div className="fix-left lg:pl-[max(clamp(32px,5vw,86px),calc((100vw-43px)/2-var(--content-width)/2))]! relative flex items-center overflow-hidden rounded-t-[13px] lg:rounded-l-[13px] lg:rounded-tr-none bg-[#0a0516] min-h-[480px] xs:min-h-[510px] lg:min-h-[650px] py-[70px]">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-[120px] -top-[130px] h-[410px] w-[410px] rounded-full bg-[#5b2dce] opacity-[0.18] blur-[110px]"
          />

          <RevealGroup
            eager
            className="relative w-full max-w-[700px] lg:pr-[24px] [container-type:inline-size]"
          >
            <RevealItem>
              <h1
                aria-label={`${copy.lead} ${copy.phrasesLabel} ${copy.tail}`}
                className="m-0 font-bricolage text-[min(36px,9cqw)] xs:text-[62px] font-semibold leading-[1.05] tracking-[-0.06em] text-white"
              >
                <span aria-hidden className="block whitespace-nowrap">
                  {copy.lead}
                </span>
                <HeroPhraseRotator phrases={copy.phrases} />
                <span aria-hidden className="block whitespace-nowrap">
                  {copy.tail}
                </span>
              </h1>
            </RevealItem>

            <RevealItem className="mt-[30px] flex flex-wrap items-center gap-[18px]">
              <ButtonF
                variant="violet"
                size="sm"
                arrow="right"
                onClick={onStartClick}
                className="px-[20px]"
              >
                {copy.start}
              </ButtonF>

              {/* The package fold (Solution, `#oplossing`) — the source's
                  `#product`. */}
              <ButtonF
                href="#oplossing"
                native
                variant="link"
                arrow="right"
                className="gap-[8px] border-b border-white/55 font-sans text-[14px] font-semibold text-white"
              >
                {copy.link}
              </ButtonF>
            </RevealItem>

            {/* `p.system-hero-meta` from Growth-Rocket-Homepage-Standalone.html:
                three short points stacked one below another, each led by a
                lime ✳ bullet. */}
            {/* The three points: one size, white at 600, the price's one-time
                fee muted on the same line and the launch point's asterisk a
                lime superscript. Each keeps its lime ✳ bullet. */}
            <RevealItem
              as="div"
              className="mt-[22px] flex flex-col gap-[12px] font-sans text-[15px] leading-[1.5] font-semibold text-white min-[1600px]:text-[16px]"
            >
              <div className="flex items-center gap-[10px]">
                <span
                  aria-hidden
                  className="text-[18px] leading-none text-[#e4fa65]"
                >
                  ✳
                </span>
                {copy.audience}
              </div>
              <div className="flex items-start gap-[10px]">
                <span
                  aria-hidden
                  className="text-[18px] leading-[1.35] text-[#e4fa65]"
                >
                  ✳
                </span>
                <span>
                  {copy.price}{" "}
                  <s className="font-normal text-[#c9c2d4] decoration-[#c9c2d4]">
                    {copy.priceWas}
                  </s>{" "}
                  <span className="text-[#e4fa65]">{copy.priceNow}</span>{" "}
                  <span className="font-normal text-[#c9c2d4]">
                    {copy.fee}
                  </span>
                  <span className="mt-[2px] block text-[13px] font-medium text-[#e4fa65]">
                    {copy.offer}
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-[10px]">
                <span
                  aria-hidden
                  className="text-[18px] leading-none text-[#e4fa65]"
                >
                  ✳
                </span>
                <span>
                  {copy.launch}
                  <sup className="ml-[1px] align-super text-[0.75em] leading-none text-[#e4fa65]">
                    *
                  </sup>
                </span>
              </div>
            </RevealItem>

            {/* The launch condition, under a hairline: two lines, broken
                where the design breaks them. */}
            <RevealItem
              as="p"
              className="mt-[22px] max-w-[620px] border-t border-white/10 pt-[18px] font-sans text-[13px] leading-[1.6] text-[#c9c2d4]"
            >
              {copy.footnote.map((line, i) => (
                <span key={line} className="block">
                  {line}
                  {i < copy.footnote.length - 1 ? " " : null}
                </span>
              ))}
            </RevealItem>
          </RevealGroup>
        </div>

        {/* Right: video panel — a muted loop, played and paused by the
            effect above; the poster is its first frame, shown until then. */}
        <div className="relative overflow-hidden rounded-b-[13px] lg:rounded-r-[13px] lg:rounded-bl-none bg-[#e7e1f5] min-h-[480px] lg:min-h-[650px]">
          <video
            ref={videoRef}
            src="/home/gr-banner.mp4"
            poster="/home/gr-banner-poster.jpg"
            aria-label={copy.imageAlt}
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover object-[50%_25%]"
          />
        </div>
      </div>
    </section>
  );
}
