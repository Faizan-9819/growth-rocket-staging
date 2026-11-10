"use client";

import Image from "next/image";
import Link from "next/link";
import { RevealGroup, RevealItem } from "../features/FeatureReveal";
import ButtonF from "../components/ui/ButtonF";
import { useIndustryCopy } from "./copy";
import { useLanguage } from "../i18n/LanguageProvider";
import { localizedHref } from "../i18n/locale-href";
import { templatesFor } from "./IndustryDesigns";

function openLeadForm() {
  window.dispatchEvent(new CustomEvent("open-lead-form"));
}

/* Lime tick drawn as a rotated corner, matching `.in-hero-benefits li:before`. */
function Tick({ color }: { color: string }) {
  return (
    <span
      aria-hidden
      className={`absolute top-[8px] left-[2px] h-[6px] w-[10px] -rotate-45 border-b-[1.5px] border-l-[1.5px] ${color}`}
    />
  );
}

export default function IndustryHero() {
  const { HERO, JUMP_LINKS, DESIGNS } = useIndustryCopy();
  /* IndustryDesigns hides itself when the industry has no templates yet, so
     its jump link goes too. */
  const hasDesigns = templatesFor(DESIGNS.templateCategories).length > 0;
  const jumpLinks = hasDesigns
    ? JUMP_LINKS
    : JUMP_LINKS.filter((link) => link.href !== "#industry-designs");
  const { locale } = useLanguage();

  return (
    <>
      <section
        aria-labelledby="industry-title"
        className="mx-3.5 mb-[14px] overflow-hidden rounded-[13px] bg-[#0a0516] text-white"
      >
        {/* The copy starts on the `.fix` rail's left edge, like every section
            below, while the photo still runs to the card's right edge. The
            padding % resolves against the card (100vw - 28px of margin), and
            `.fix` is 90% of the page below 1440px and 1320px centred above,
            so relative to the card its left edge is 5% - 12.6px, then
            (100% - 1320px) / 2. Stacked, that formula leaves the copy almost
            touching the card (under 5px at 375px), so both sides take the 5%
            inset the `.fix` rail has inside every card below instead. */}
        <div className="flex min-h-[540px] items-stretch max-[900px]:min-h-0 max-[900px]:flex-col">
          <RevealGroup eager className="w-[60%] py-[52px] pr-[clamp(24px,4.5vw,65px)] pl-[calc(5%-12.6px)] max-[900px]:w-full max-[900px]:py-[38px] max-[900px]:pr-[5%] max-[900px]:pl-[5%] max-[600px]:py-[32px] min-[1440px]:pl-[calc((100%-var(--content-width))/2)]">
            <RevealItem
              as="p"
              className="mb-[21px] font-sans text-[10px] font-semibold tracking-[0.12em] text-[#ccc5d8]"
            >
              {HERO.kicker}
            </RevealItem>

            <RevealItem>
              <h1
                id="industry-title"
                className="font-bricolage text-[clamp(39px,4.35vw,64px)] leading-[1.04] font-semibold tracking-[-0.045em] max-[900px]:text-[43px] max-[600px]:text-[42px]"
              >
                {HERO.heading}
                <br />
                <span className="text-[#e4fa65]">{HERO.headingAccent}</span>
              </h1>
            </RevealItem>

            <ul className="mt-[25px] w-full max-w-[530px] text-[#d2ccdc]">
              {HERO.benefits.map((benefit, index) => (
                <RevealItem
                  as="li"
                  key={benefit}
                  className={`relative pl-[24px] text-[15px] leading-[1.6] max-[900px]:text-[14px] ${
                    index === 0 ? "" : "mt-[12px]"
                  }`}
                >
                  <Tick color="border-[#e4fa65]" />
                  {benefit}
                </RevealItem>
              ))}
            </ul>

            <RevealItem className="mt-[28px] flex flex-wrap items-center gap-[24px]">
              <ButtonF
                variant="lime"
                label
                arrowSize={17}
                onClick={openLeadForm}
                className="shrink-0 justify-between text-[12px] md:text-[14px]"
              >
                {HERO.primaryCta.label}
              </ButtonF>
              <ButtonF
                href={localizedHref(HERO.textLink.href, locale)}
                variant="link"
                arrowSize={14}
                className="gap-[7px] font-sans text-[13px] font-medium"
              >
                <span className="underline underline-offset-[6px]">
                  {HERO.textLink.label}
                </span>
              </ButtonF>
            </RevealItem>

            <RevealItem className="mt-[27px] flex flex-wrap items-center gap-[14px] font-sans text-[14px] leading-[1.5] text-[#d2ccdc] max-[600px]:gap-[10px] max-[600px]:text-[12px]">
              <span className="whitespace-nowrap">{HERO.meta[0]}</span>
              <span
                aria-hidden
                className="text-[24px] leading-none text-[#e4fa65]"
              >
                ✳
              </span>
              {/* The source's `.compact-price-summary`: the price, with the
                  one-time fee on its own line beneath it. */}
              <span className="whitespace-nowrap">
                {HERO.meta[1]}
                <br />
                {HERO.fee}
              </span>
            </RevealItem>

            {/* `.in-hero-copy .launch-condition`: margin 12px 0 0, max-width
                620px, 12px/1.5, in the meta row's own muted tone. */}
            <RevealItem
              as="p"
              className="mt-[12px] max-w-[620px] font-sans text-[12px] leading-[1.5] text-[#d2ccdc]"
            >
              {HERO.footnote}
            </RevealItem>
          </RevealGroup>

          <figure className="relative m-0 w-[40%] min-w-0 max-[900px]:h-[300px] max-[900px]:w-full">
            <Image
              src={HERO.image}
              alt={HERO.photoAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 40vw"
              /* Crop comes from the page copy: the electrician photo has a
                 tuned position, the other industries' photos are centred. */
              className={`object-cover ${HERO.imagePosition ?? "object-center"}`}
            />
          </figure>
        </div>
      </section>

      {/* Breadcrumb and jump nav sit between the hero and the first band. */}
      <nav
        aria-label={HERO.breadcrumbLabel}
        className="fix flex gap-[12px] pt-[35px] pb-[20px] font-sans text-[12px] text-[#777080]"
      >
        <Link href={localizedHref("/", locale)}>{HERO.breadcrumbHome}</Link>
        <span aria-hidden>/</span>
        <span aria-current="page" className="text-[#0a0516]">
          {HERO.breadcrumbCurrent}
        </span>
      </nav>

      <nav
        aria-label={HERO.jumpLabel}
        className="fix flex flex-wrap items-center gap-[27px] border-y border-[#dfdce3] py-[16px] font-sans text-[12px]"
      >
        <span className="mr-auto text-[#807888]">{HERO.jumpLabel}</span>
        {jumpLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="cursor-pointer transition-colors hover:text-[#5b2dce]"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}
