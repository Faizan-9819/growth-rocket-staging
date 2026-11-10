"use client";
import Reveal from "@/app/components/Reveal";
import { partnerTypes } from "@/app/partner-network/data";
import {
  Briefcase,
  PenTool,
  GraduationCap,
  Users,
  Building2,
  Store,
} from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import { RevealGroup, RevealItem } from "@/app/features/FeatureReveal";
import { FOLD } from "./theme";

const ICONS = [Briefcase, PenTool, GraduationCap, Users, Building2, Store];

/* Deep fold — home2's PricingTeaser / Examples surface — with the dark card
   BlogTeaser uses. */
export default function PartnerTypes() {
  const { t } = useLanguage();
  return (
    <section
      id="partners"
      className={`relative overflow-hidden bg-[#0a0516] text-white ${FOLD}`}
    >
      <div className="fix">
        {/* Head laid out like home2's Audience: heading on the left, the
            description in a `minmax(260px,420px)` column on the right,
            bottom-aligned; one column with an 18px gap below md. */}
        <RevealGroup className="grid grid-cols-1 items-start gap-[18px] md:grid-cols-[1fr_minmax(260px,420px)] md:items-end md:gap-[42px]">
          <RevealItem className="flex flex-col gap-[18px]">
            <h2 className="m-0 font-bricolage text-[clamp(40px,4vw,58px)] font-semibold leading-[1.1] tracking-[-0.04em] text-white">
              {t({
                en: "If you have trust with",
                nl: "Heb je het vertrouwen van",
              })}
              <br />
              <span className="text-[#e4fa65]">
                {t({
                  en: "small businesses,",
                  nl: "kleine bedrijven,",
                })}
              </span>
              <br />
              {t({
                en: "the network is built for you.",
                nl: "dan is dit netwerk voor jou.",
              })}
            </h2>
          </RevealItem>
          <RevealItem
            as="p"
            className="m-0 mb-[4px] font-sans text-[16px] flex xl:justify-end leading-[1.6] tracking-[0.1em] text-[#c9c2d4]"
          >
            <span className="block w-fit">
              {t({
                en: "No quotas. No exclusivity.",
                nl: "Geen quota. Geen exclusiviteit.",
              })}
              <br />
              {t({
                en: "Refer at your own pace.",
                nl: "Verwijs door in je eigen tempo.",
              })}
            </span>
          </RevealItem>
        </RevealGroup>

        {/* Full-width card grid: 1 → 2 → 3 columns. */}
        <Reveal className="mt-[34px] grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:mt-[48px] lg:grid-cols-3 duration-100">
          {partnerTypes.map((item, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div
                key={item.title.en}
                className="group flex min-h-[138px] translate-y-0 flex-col gap-[12px] rounded-[13px] border border-white/10 bg-white/[0.04] px-[24px] py-[24px] transition-[background-color,border-color,translate] duration-380 ease-in-out hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:duration-300 hover:ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:hover:translate-y-0"
              >
                <span
                  className="grid size-[38px] place-items-center rounded-[13px] bg-[#e4fa65] text-[#5b2dce]"
                  aria-hidden
                >
                  <Icon size={18} strokeWidth={1.9} />
                </span>
                <div>
                  <h3 className="m-0 font-bricolage text-[20px] font-semibold leading-[1.2] tracking-[-0.03em] text-white">
                    {t(item.title)}
                  </h3>
                  <p className="m-0 mt-[7px] font-sans text-[14px] leading-[1.6] text-[#c9c2d4]">
                    {t(item.body)}
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
