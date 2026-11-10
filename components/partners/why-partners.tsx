"use client";
import Reveal from "@/app/components/Reveal";
import { whyPartnerItems } from "@/app/partner-network/data";
import { RefreshCw, TrendingUp, Users, Headphones, Heart } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import { FOLD, ICON_TILE } from "./theme";
import SectionHead from "./SectionHead";

const ICONS = [RefreshCw, TrendingUp, Users, Headphones, Heart];

/* Solid violet fold with lavender tiles and lime icon chips — home2's WhyUs. */
export default function WhyPartners() {
  const { t } = useLanguage();
  return (
    <section className={`relative bg-[#5b2dce] text-white ${FOLD}`}>
      <div className="fix">
        <SectionHead
          tone="violet"
          className="mb-[30px] lg:mb-[48px]"
          heading={
            <>
              {t({
                en: "Designed for",
                nl: "Ontworpen voor",
              })}
              <br />
              <span className="text-[#e4fa65]">
                {t({
                  en: "long-term value.",
                  nl: "waarde op lange termijn.",
                })}
              </span>
            </>
          }
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[14px]">
          {whyPartnerItems.map((item, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <Reveal
                key={item.title.en}
                delay={index * 0.05}
                className="flex translate-y-0 flex-col items-start rounded-[13px] border border-white/[0.34] bg-[#f5f3ff] px-[23px] py-[24px] text-[#0a0516] shadow-[0_14px_34px_rgba(10,5,22,0.08)] transition-[background-color,border-color,translate,box-shadow] duration-380 ease-in-out hover:-translate-y-1 hover:border-white/[0.46] hover:bg-[#ebe6ff] hover:shadow-[0_22px_46px_rgba(10,5,22,0.14)] hover:duration-300 hover:ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:hover:translate-y-0"
              >
                <span className={`${ICON_TILE} mb-[14px]`} aria-hidden>
                  <Icon size={18} strokeWidth={1.9} />
                </span>
                <h3 className="m-0 font-bricolage text-[21px] font-semibold leading-[1.18] tracking-[-0.03em]">
                  {t(item.title)}
                </h3>
                <p className="m-0 pt-[10px] font-sans text-[15px] leading-[1.6] text-[#554c64]">
                  {t(item.body)}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
