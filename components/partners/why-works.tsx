"use client";
import Reveal from "@/app/components/Reveal";
import { whyWorksItems } from "@/app/partner-network/data";
import {
  MapPin,
  TrendingUp,
  Star,
  Tag,
  Wrench,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import { RevealGroup, RevealItem } from "@/app/features/FeatureReveal";
import { CARD_LIGHT, FOLD, ICON_TILE } from "./theme";

const ICONS = [MapPin, TrendingUp, Star, Tag, Wrench, ShieldCheck];

export default function WhyWorks() {
  const { t } = useLanguage();
  return (
    <section className={`relative bg-white text-[#0a0516] ${FOLD}`}>
      <div className="fix">
        {/* Head laid out like home2's Audience: heading on the left, the
            description in a `minmax(260px,420px)` column on the right,
            bottom-aligned; one column with an 18px gap below md. */}
        <RevealGroup className="mb-[30px] grid grid-cols-1 items-start gap-[18px] md:grid-cols-[1fr_minmax(260px,420px)] md:items-end md:gap-[42px] lg:mb-[48px]">
          <RevealItem>
            <h2 className="m-0 font-bricolage text-[clamp(40px,4vw,58px)] font-semibold leading-[1.1] tracking-[-0.04em] text-[#0a0516]">
              {t({
                en: "A product small businesses",
                nl: "Een product dat kleine bedrijven",
              })}
              <br />
              <span className="text-[#5b2dce]">
                {t({
                  en: "already need.",
                  nl: "al nodig hebben.",
                })}
              </span>
            </h2>
          </RevealItem>
          <RevealItem
            as="p"
            className="m-0 mb-[4px] font-sans text-[16px] leading-[1.6] tracking-[0.1em] text-[#625a70]"
          >
            {t({
              en: "You aren’t selling complexity. You’re helping businesses solve a very visible problem.",
              nl: "Je verkoopt geen complexiteit. Je helpt bedrijven een heel zichtbaar probleem op te lossen.",
            })}
          </RevealItem>
        </RevealGroup>

        <Reveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[14px] duration-100">
          {whyWorksItems.map((item, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div
                key={item.title.en}
                className={`${CARD_LIGHT} flex flex-col gap-[7px] px-[24px] py-[28px]`}
              >
                <div className="flex items-center gap-[10px] lg:flex-col lg:items-start">
                  <span className={ICON_TILE}>
                    <Icon size={20} strokeWidth={1.9} />
                  </span>
                  <h3 className="sm:hidden m-0 font-bricolage text-[22px] font-semibold leading-[1.18] tracking-[-0.03em] lg:pt-[8.6px]">
                    {t(item.title)}
                  </h3>
                </div>
                <div className="pt-[8.6px]">
                  <h3 className="hidden sm:block m-0 font-bricolage text-[22px] font-semibold leading-[1.18] tracking-[-0.03em]">
                    {t(item.title)}
                  </h3>
                </div>
                <p className="m-0 font-sans text-[15px] leading-[1.6] text-[#554c64]">
                  {t(item.body)}
                </p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
