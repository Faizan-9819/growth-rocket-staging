"use client";

import { RevealGroup, RevealItem } from "./FeatureReveal";
import SectionCard from "./SectionCard";
import { FEATURES_COPY } from "./data";
import { useLanguage } from "../i18n/LanguageProvider";

const PILL =
  "inline-flex min-h-[44px] items-center rounded-full border px-[15px] py-[10px] font-sans text-[14px] leading-none font-bold max-[600px]:text-[13px]";

const STRONG =
  "inline-block border-b-2 border-[#e4fa65] px-[1px] pb-[3px] leading-[1.05] font-[750] text-white";

export default function FeaturesHero() {
  const { t, locale } = useLanguage();
  const { jumpLinks } = FEATURES_COPY[locale];

  return (
    <SectionCard className="bg-[#0a0516] mt-17.5 text-white max-[600px]:py-[38px] py-[clamp(52px,6vw,84px)]">
      <RevealGroup eager>
        <div className="w-full max-w-[1060px]">
          <RevealItem>
            <h1 className="font-bricolage text-[clamp(39px,4.3vw,68px)] leading-[0.99] font-bold tracking-[-0.055em] max-[600px]:text-[38px]">
            {t({
              en: "Your website and business tools,",
              nl: "Je website,",
            })}{" "}
            <span className="text-[#e4fa65]">
              {t({
                en: "working as one.",
                nl: "met alles om je dagelijkse werk te regelen.",
              })}
            </span>
          </h1>
          </RevealItem>
          <RevealItem as="p" className="mt-[24px] w-full max-w-[920px] text-[19px] leading-[1.65] text-[#c9c2d4] max-[600px]:text-[17px]">
            {t({ en: "A", nl: "Een" })}{" "}
            <strong className={STRONG}>
              {t({ en: "Professional Website", nl: "professionele website" })}
            </strong>{" "}
            {t({
              en: "to help customers find and contact you.",
              nl: "waarmee klanten je vinden en contact opnemen.",
            })}{" "}
            <strong className={STRONG}>Growth Rocket Hub</strong>{" "}
            {t({
              en: "to manage enquiries, appointments, your Contact Book, quotes and invoices. Together, one complete online business system, with hosting, maintenance and support taken care of for you.",
              nl: "voor je aanvragen, afspraken, contacten, offertes en facturen. Samen één compleet online businesssysteem, met hosting, onderhoud en ondersteuning voor je geregeld.",
            })}
          </RevealItem>
          <nav
            aria-label={t({
              en: "Feature sections",
              nl: "Onderdelen van het pakket",
            })}
            className="mt-[32px] flex flex-wrap items-center gap-[10px] max-[600px]:mt-[26px]"
          >
            {jumpLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${PILL} cursor-pointer border-white/30 text-white transition-colors duration-200 hover:border-[#e4fa65] hover:bg-[#e4fa65] hover:text-[#0a0516] focus-visible:border-[#e4fa65] focus-visible:bg-[#e4fa65] focus-visible:text-[#0a0516] focus-visible:outline-none`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </RevealGroup>
    </SectionCard>
  );
}
