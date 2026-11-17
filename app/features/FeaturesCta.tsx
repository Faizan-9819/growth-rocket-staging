"use client";

import { RevealGroup, RevealItem } from "./FeatureReveal";
import SectionCard from "./SectionCard";
import ButtonF from "../components/ui/ButtonF";
import { useLanguage } from "../i18n/LanguageProvider";
import { localizedHref } from "../i18n/locale-href";
import { usePriceView } from "../components/CurrencyProvider";

export default function FeaturesCta() {
  const { t, locale } = useLanguage();
  const price = usePriceView(locale);

  return (
    <SectionCard
      id="closing-cta"
      className="bg-[#e4fa65] mb-[14px] text-[#0a0516]"
    >
      <div className="flex items-center justify-between gap-[40px] max-[900px]:flex-col max-[900px]:items-start">
        <RevealGroup className="w-[58%] max-[900px]:w-full">
          <RevealItem>
            <h2 className="w-full max-w-[800px] font-bricolage text-[clamp(39px,4.3vw,68px)] leading-[0.99] font-bold tracking-[-0.055em] max-[600px]:text-[38px]">
            {t({
              en: "Bring your website and customer management",
              nl: "Breng je website en klantbeheer",
            })}{" "}
            <span className="text-[#5b2dce]">
              {t({ en: "together.", nl: "samen." })}
            </span>
            </h2>
          </RevealItem>
          <RevealItem as="p" className="mt-[18px] w-full max-w-[760px] text-[18px] leading-[1.65]">
            {t({
              en: "Give your customers a professional online presence while keeping the tools your business needs organised behind the scenes.",
              nl: "Laat je bedrijf online professioneel zien en houd achter de schermen alles overzichtelijk.",
            })}
          </RevealItem>
        </RevealGroup>

        <RevealGroup
          delay={0.08}
          className="flex w-[330px] shrink-0 flex-col items-start gap-[13px] max-[900px]:w-full max-[900px]:max-w-[330px]"
        >
          {/* Price unit: "From" sits on its own row above the amount. */}
          <div className="flex w-full flex-col items-start">
            <span className="font-sans text-[10px] leading-none font-extrabold tracking-[0.12em] uppercase">
              {t({ en: "From", nl: "Vanaf" })}
            </span>
            <div className="mt-[4px] flex items-end gap-[7px]">
              {/* /pricing, in the visitor's currency: the monthly price,
                  or the yearly one where there is no monthly billing. */}
              <strong className="font-sans text-[clamp(54px,5vw,72px)] leading-[0.78] font-extrabold tracking-[-0.07em] text-[#5b2dce]">
                {price.monthly ?? price.yearly}
              </strong>
              <small className="pb-[4px] font-sans text-[14px] leading-none font-bold whitespace-nowrap">
                {price.monthly
                  ? t({ en: "/ month", nl: "/ maand" })
                  : t({ en: "/ year", nl: "/ jaar" })}
              </small>
            </div>
            {/* The Features page's `.button`: the `lg` pill at 15px with a
                12px gap, and a 200ms all-property transition in place of
                the shared CTA timing. */}
            <ButtonF
              href={localizedHref("/pricing", locale)}
              variant="pill"
              size="lg"
              label
              className="mt-[14px] w-[90%] justify-center gap-[12px] bg-[#fff] px-[15px] text-[15px] leading-[1.35] whitespace-nowrap text-[#0a0516] !transition-all !duration-200 hover:bg-white hover:text-[#0a0516]"
            >
              {t({ en: "View full pricing", nl: "Bekijk de prijzen" })}
            </ButtonF>
          </div>

          {/* Opens the site-wide lead enquiry form StickyActions listens for. */}
          <ButtonF
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-lead-form"))
            }
            variant="pill"
            size="lg"
            label
            arrow="right"
            className="w-[90%] justify-center gap-[12px] bg-[#0a0516] px-[15px] text-[15px] leading-[1.35] whitespace-nowrap text-[#e4fa65] !transition-all !duration-200 hover:bg-[#5b2dce] hover:text-white"
          >
            {t({ en: "Contact our sales team", nl: "Neem contact op" })}
          </ButtonF>
        </RevealGroup>
      </div>
    </SectionCard>
  );
}
