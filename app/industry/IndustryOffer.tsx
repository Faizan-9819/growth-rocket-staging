"use client";

import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { RevealGroup, RevealItem } from "../features/FeatureReveal";
import {
  FEATURE_ICON_PATHS,
  type FeatureIconName,
} from "../components/sections/featureIcons";
import IndustrySection from "./IndustrySection";
import ButtonF from "../components/ui/ButtonF";
import { useIndustryCopy, type OfferFeature } from "./copy";
import { useLanguage } from "../i18n/LanguageProvider";
import { usePriceView } from "../components/CurrencyProvider";
import { fillPrices } from "@/pricing";
import { localizedHref } from "../i18n/locale-href";

/* Card shell, header, rows, foot note and the `+` medallion all mirror home2's
   Solution.tsx class for class, so the two pages read the same. */
const CARD_SHELL =
  "flex h-full min-w-0 flex-col rounded-[13px] px-[18px] pt-6 text-white " +
  "2xs:px-[23px] 2xs:pt-7 md:px-[25px] lg:px-[34px] lg:pt-[35px]";

function FeatureIcon({ name }: { name: FeatureIconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="h-[23px] w-[23px]"
    >
      {FEATURE_ICON_PATHS[name]}
    </svg>
  );
}

function OfferCard({
  heading,
  sub,
  features,
  foot,
  tone,
  headerIcon,
}: {
  heading: ReactNode;
  sub: string;
  features: OfferFeature[];
  foot: string;
  tone: "ink" | "purple";
  headerIcon: ReactNode;
}) {
  const isInk = tone === "ink";
  const headerIconClass = isInk
    ? "rotate-[-7deg] bg-[#e4fa65] text-[#0a0516]"
    : "rotate-[7deg] bg-white text-[#5b2dce]";
  const featureIconClass = isInk ? "bg-[#ffffff0d]" : "bg-white/[0.12]";

  return (
    <article
      className={`${CARD_SHELL} ${isInk ? "bg-[#0a0516]" : "bg-[#5b2dce]"}`}
    >
      <header>
        <div className="flex items-center justify-between gap-[13px] md:gap-3 lg:gap-5">
          <h3 className="m-0 font-bricolage text-[28px] font-semibold leading-[1.14] tracking-[-0.035em] 2xs:text-[31px] md:text-[30px] lg:text-[33px]">
            {heading}
          </h3>
          <span
            className={`grid h-[39px] w-[39px] flex-shrink-0 place-items-center rounded-[13px] 2xs:h-12 2xs:w-12 md:h-[49px] md:w-[49px] lg:h-[52px] lg:w-[52px] ${headerIconClass}`}
          >
            {headerIcon}
          </span>
        </div>
        <p
          className={`mt-[15px] mb-[22px] font-sans text-[16px] leading-[1.7] md:mb-[23px] ${
            isInk ? "text-[#c9c2d4]" : "text-white/[0.88]"
          }`}
        >
          {sub}
        </p>
      </header>

      <ul className="m-0 list-none p-0">
        {features.map((feature) => (
          <li
            key={feature.label}
            className="flex items-center gap-[15px] border-t border-[#ffffff29] py-[14px]"
          >
            <span
              className={`grid h-[38px] w-[38px] flex-shrink-0 place-items-center rounded-[13px] text-[#e4fa65] ${featureIconClass}`}
            >
              <FeatureIcon name={feature.icon} />
            </span>
            <h4 className="m-0 font-bricolage text-[18px] font-medium leading-[1.18] tracking-[-0.02em] 2xs:text-[21px] lg:text-[18px]">
              {feature.label}
            </h4>
          </li>
        ))}
      </ul>

      <p className="m-0 flex items-center gap-[10px] border-t border-white/25 pt-[17px] pb-[19px] font-sans text-[13px] font-medium text-[#e4fa65] md:gap-[13px] lg:text-[14px]">
        <span aria-hidden className="text-[23px] leading-none md:text-[27px]">
          ✳
        </span>
        {foot}
      </p>
    </article>
  );
}

export default function IndustryOffer() {
  const { OFFER } = useIndustryCopy();
  const { locale } = useLanguage();
  // "From {monthly} / month", or the yearly price without monthly billing.
  const view = usePriceView(locale);
  const monthlyPrice = fillPrices(OFFER.package.price, view);
  const packagePrice = monthlyPrice ?? view.yearly;
  const packagePeriod =
    monthlyPrice === null
      ? OFFER.package.pricePeriodYearly
      : OFFER.package.pricePeriod;
  return (
    <IndustrySection
      id="industry-package"
      className="bg-[#e4fa65] text-[#0a0516]"
      labelledBy="offer-heading"
    >
      <RevealGroup>
        <div className="mb-[36px] flex items-end gap-[60px] max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-[20px]">
          <RevealItem className="w-[58%] max-[900px]:w-full">
            <h2
              id="offer-heading"
              className="font-bricolage text-[clamp(34px,3.7vw,52px)] leading-[1.08] font-semibold tracking-[-0.045em]"
            >
              {OFFER.heading}
              <br />
              <span className="text-[#5b2dce]">{OFFER.headingAccent}</span>
            </h2>
          </RevealItem>
          <RevealItem
            as="p"
            className="w-[42%] font-sans text-[15px] leading-[1.6] text-[#43482d] max-[900px]:w-full"
          >
            {OFFER.intro}
          </RevealItem>
        </div>
      </RevealGroup>

      <RevealGroup delay={0.08} className="relative">
        <div className="flex items-stretch gap-[22px] max-[900px]:flex-col max-[900px]:gap-0">
          <RevealItem className="w-1/2 max-[900px]:w-full">
            <OfferCard
              tone="ink"
              heading={
                <>
                  {OFFER.website.headingLead}
                  <span className="text-[#e4fa65]">
                    {OFFER.website.headingHighlight}
                  </span>
                  {OFFER.website.headingTail}
                </>
              }
              sub={OFFER.website.sub}
              features={OFFER.website.features}
              foot={OFFER.website.foot}
              headerIcon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.65"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                  className="h-6 w-6 2xs:h-7 2xs:w-7 md:h-[29px] md:w-[29px] lg:h-8 lg:w-8"
                >
                  <rect x="2" y="4" width="20" height="16" rx="3" />
                  <path d="M2 9h20M6 6.5h.1M9 6.5h.1M7 14h10M7 17h6" />
                </svg>
              }
            />
          </RevealItem>

          {/* The `+` joining the cards, sized as on home2's Solution. Side by
              side it is centred on the gap in both axes; stacked it drops into
              the flow and straddles the two cards. */}
          <RevealItem className="relative z-[1] mx-auto my-[-8px] w-max min-[901px]:absolute min-[901px]:top-1/2 min-[901px]:left-1/2 min-[901px]:mx-0 min-[901px]:my-0 min-[901px]:-translate-x-1/2 min-[901px]:-translate-y-1/2">
            <span
              aria-hidden
              className="grid h-[74px] w-[74px] place-items-center rounded-full border-[6px] border-[#e4fa65] bg-[#0a0516] text-[#e4fa65] md:h-[68px] md:w-[68px] lg:h-[76px] lg:w-[76px]"
            >
              <Plus size={38} strokeWidth={2.5} />
            </span>
          </RevealItem>

          <RevealItem className="w-1/2 max-[900px]:w-full">
            <OfferCard
              tone="purple"
              heading={
                <>
                  <span className="text-[#e4fa65]">
                    {OFFER.hub.headingHighlight}
                  </span>
                  {OFFER.hub.headingTail}
                </>
              }
              sub={OFFER.hub.sub}
              features={OFFER.hub.features}
              foot={OFFER.hub.foot}
              headerIcon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.65"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                  className="h-6 w-6 2xs:h-7 2xs:w-7 md:h-[29px] md:w-[29px] lg:h-8 lg:w-8"
                >
                  <rect x="8" y="8" width="8" height="8" rx="2" />
                  <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l3 3m8 8 3 3M19 5l-3 3m-8 8-3 3" />
                </svg>
              }
            />
          </RevealItem>
        </div>
      </RevealGroup>

      {/* "Two parts. One complete package." strip. */}
      <RevealGroup delay={0.12}>
        <RevealItem className="mt-[30px] flex items-center justify-between gap-[20px] max-[900px]:flex-col max-[900px]:items-start">
          <div className="flex items-center gap-[20px]">
            <span
              aria-hidden
              className="text-[48px] leading-none text-[#5b2dce]"
            >
              ✳
            </span>
            <div>
              {/* <p className="font-sans text-[11px] font-semibold tracking-[0.07em] text-[#5b2dce]">
                {OFFER.package.eyebrow}
              </p> */}
              <h3 className="mt-[7px] font-bricolage text-[24px] leading-[1.2] font-semibold tracking-[-0.035em]">
                {OFFER.package.heading}
              </h3>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-[24px] max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-[14px]">
            <p className="font-sans text-[15px] text-[#45492c]">
              {OFFER.package.priceLead}{" "}
              <strong className="font-bricolage text-[28px] font-semibold tracking-[-0.03em] text-[#0a0516]">
                {packagePrice}
              </strong>
              <span>{packagePeriod}</span>
            </p>
            <ButtonF
              href={localizedHref(OFFER.package.cta.href, locale)}
              variant="ink"
              label
              arrowSize={17}
              className="justify-between border border-transparent text-[12px] hover:bg-[#5b2dce] hover:text-white md:text-[14px]"
            >
              {OFFER.package.cta.label}
            </ButtonF>
          </div>
        </RevealItem>
      </RevealGroup>
    </IndustrySection>
  );
}
