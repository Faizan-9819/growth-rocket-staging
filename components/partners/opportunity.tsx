"use client";
import type { ReactNode } from "react";
import Reveal from "@/app/components/Reveal";
import { opportunityBad, opportunityGood } from "@/app/partner-network/data";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import type { Translation } from "@/app/i18n/config";
import { FOLD, LEAD, MUTED } from "./theme";
import SectionHead from "./SectionHead";

function ComparePill({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full px-[18px] py-[9px] font-sans text-[12px] font-bold uppercase tracking-[0.12em] lg:text-[13px] ${className}`}
    >
      {children}
    </span>
  );
}

function BulletRow({
  tone,
  children,
}: {
  tone: "before" | "after";
  children: ReactNode;
}) {
  const isBefore = tone === "before";

  return (
    <li className="flex items-start gap-[12px]">
      <span
        className={
          "mt-[3px] inline-flex size-[20px] shrink-0 items-center justify-center rounded-full font-sans text-[10px] font-bold leading-none " +
          (isBefore
            ? "bg-[#0a0516]/[0.08] text-[#625a70]"
            : "bg-[#e4fa65] text-[#0a0516]")
        }
      >
        {isBefore ? <>&#10005;</> : <>&#10003;</>}
      </span>
      <span
        className={
          "font-sans text-[15px] leading-[1.6] " +
          (isBefore ? "text-[#554c64]" : "text-[#c9c2d4]")
        }
      >
        {children}
      </span>
    </li>
  );
}

function CompareCard({
  tone,
  label,
  title,
  items,
  delay = 0,
}: {
  tone: "before" | "after";
  label: string;
  title: string;
  items: Translation[];
  delay?: number;
}) {
  const { t } = useLanguage();
  const isBefore = tone === "before";

  return (
    <Reveal as="article" delay={delay} className="w-full h-full">
      <div
        className={
          "flex min-h-[425px] h-full flex-col gap-[28px] rounded-[13px] px-[20px] py-[34px] lg:px-[32px] lg:py-[38px] " +
          (isBefore
            ? "border border-[#ebe6ff] bg-[#f5f3ff]"
            : "bg-[#0a0516] shadow-[0_22px_46px_rgba(10,5,22,0.18)]")
        }
      >
        <ComparePill
          className={
            isBefore
              ? "bg-white text-[#5b2dce]"
              : "bg-[#e4fa65]/[0.14] text-[#e4fa65]"
          }
        >
          {label}
        </ComparePill>

        <div className="flex flex-col gap-[12px]">
          <h3
            className={
              "m-0 font-bricolage text-[25px] font-semibold leading-[1.18] tracking-[-0.03em] " +
              (isBefore ? "text-[#0a0516]" : "text-white")
            }
          >
            {title}
          </h3>

          <ul className="flex flex-col gap-[14px] pt-[4px]">
            {items.map((item) => (
              <BulletRow key={item.en} tone={tone}>
                {t(item)}
              </BulletRow>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}

export default function Opportunity() {
  const { t } = useLanguage();
  return (
    <section
      id="opportunity"
      className={`relative overflow-hidden bg-white text-[#0a0516] ${FOLD}`}
    >
      <div className="fix relative flex flex-col items-center gap-[30px] lg:gap-[48px]">
        <SectionHead
          heading={
            <>
              <span className="block">
                {t({
                  en: "Small businesses are still losing",
                  nl: "Kleine bedrijven lopen nog steeds",
                })}
              </span>
              <span className="block text-[#5b2dce]">
                {t({
                  en: "opportunities online.",
                  nl: "online kansen mis.",
                })}
              </span>
            </>
          }
          description={t({
            en: "Most local businesses still rely on social DMs and missed calls. Their customers expect a professional, organised digital front door.",
            nl: "De meeste lokale bedrijven vertrouwen nog op DM's en gemiste oproepen. Hun klanten verwachten een professionele, overzichtelijke digitale voordeur.",
          })}
        />

        <div className="grid w-full grid-cols-1 gap-6 lg:gap-[20px] lg:grid-cols-2 items-stretch">
          <CompareCard
            tone="before"
            label={t({ en: "Today's reality", nl: "De realiteit van nu" })}
            title={t({
              en: "Where the leaks are happening",
              nl: "Waar het misgaat",
            })}
            items={opportunityBad}
          />
          <CompareCard
            tone="after"
            label={t({
              en: "What customers expect",
              nl: "Wat klanten verwachten",
            })}
            title={t({
              en: "The new minimum bar online",
              nl: "De nieuwe ondergrens online",
            })}
            items={opportunityGood}
            delay={0.08}
          />
        </div>
        <p className={`${LEAD} ${MUTED} m-0 text-center lg:-mt-5`}>
          <span
            aria-hidden
            className="text-[20px] mr-2 leading-none text-[#5b2dce]"
          >
            ✳
          </span>
          {t({
            en: "The demand already exists. Most businesses simply need a simpler solution.",
            nl: "De vraag is er al. De meeste bedrijven hebben gewoon een eenvoudigere oplossing nodig.",
          })}
        </p>
      </div>
    </section>
  );
}
