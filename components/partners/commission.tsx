"use client";
import Reveal from "@/app/components/Reveal";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import { FOLD } from "./theme";
import SectionHead from "./SectionHead";

function CommissionCard({
  dark,
  pill,
  amount,
  amountSup,
  title,
  description,
  tags,
  delay,
}: {
  dark?: boolean;
  pill: string;
  amount: string;
  amountSup: string;
  title: string;
  description: string;
  tags: string[];
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="w-full h-full">
      <div
        className={
          "flex min-h-[320px] h-full flex-col gap-[24px] rounded-[13px] px-[24px] py-[34px] lg:px-[32px] lg:py-[38px] " +
          (dark ? "bg-[#0a0516] text-white" : "bg-white text-[#0a0516]")
        }
      >
        <span
          className={
            "inline-flex w-fit items-center rounded-full px-[18px] py-[9px] font-sans text-[12px] font-bold uppercase tracking-[0.12em] lg:text-[13px] " +
            (dark
              ? "bg-[#e4fa65]/[0.14] text-[#e4fa65]"
              : "bg-[#f5f3ff] text-[#5b2dce]")
          }
        >
          {pill}
        </span>

        <div className="flex items-end gap-[4px] font-bricolage font-bold leading-[0.88] tracking-[-0.025em]">
          <span
            className={
              "text-[66px] lg:text-[86px] " +
              (dark ? "text-[#e4fa65]" : "text-[#0a0516]")
            }
          >
            {amount}
          </span>
          <span
            className={
              "pb-[6px] text-[28px] font-semibold lg:text-[38px] " +
              (dark ? "text-[#c9c2d4]" : "text-[#5b2dce]")
            }
          >
            {amountSup}
          </span>
        </div>

        <div className="flex flex-col gap-[10px]">
          <h3 className="m-0 font-bricolage text-[25px] font-semibold leading-[1.18] tracking-[-0.03em]">
            {title}
          </h3>
          <p
            className={
              "m-0 font-sans text-[16px] leading-[1.6] " +
              (dark ? "text-[#c9c2d4]" : "text-[#625a70]")
            }
          >
            {description}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-[8px]">
          {tags.map((tag) => (
            <span
              key={tag}
              className={
                "rounded-full px-[12px] py-[6px] font-sans text-[12px] font-semibold " +
                (dark
                  ? "bg-white/10 text-white"
                  : "bg-[rgba(228,250,101,0.42)] text-[#0a0516]")
              }
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/* Lime fold with a light and a deep card side by side — home2's Solution. */
export default function Commission() {
  const { t } = useLanguage();
  return (
    <section
      id="commission"
      className={`relative overflow-hidden bg-[#e4fa65] text-[#0a0516] ${FOLD}`}
    >
      <div className="fix relative flex flex-col items-center gap-[30px] lg:gap-[48px]">
        <SectionHead
          tone="lime"
          heading={t({
            en: "Transparent and recurring.",
            nl: "Transparant en terugkerend.",
          })}
          description={t({
            en: "Two simple commission structures designed for long-term partnerships.",
            nl: "Twee eenvoudige commissiestructuren, ontworpen voor langdurige samenwerkingen.",
          })}
        />

        <div className="grid w-full grid-cols-1 gap-6 lg:gap-[20px] lg:grid-cols-2 items-stretch">
          <CommissionCard
            pill={t({ en: "Website Plans", nl: "Websiteabonnementen" })}
            amount="15"
            amountSup="%"
            title={t({
              en: "Recurring website commission",
              nl: "Terugkerende websitecommissie",
            })}
            description={t({
              en: "Paid every year, as long as the client remains active on a Growth Rocket website plan.",
              nl: "Elk jaar uitbetaald, zolang de klant actief blijft op een Growth Rocket-websiteabonnement.",
            })}
            tags={[
              t({ en: "Annual plan", nl: "Jaarabonnement" }),
              t({ en: "Recurring", nl: "Terugkerend" }),
              t({ en: "No cap", nl: "Geen maximum" }),
            ]}
            delay={0.05}
          />
          <CommissionCard
            dark
            pill={t({ en: "Upsell Services", nl: "Aanvullende diensten" })}
            amount="10"
            amountSup="%"
            title={t({
              en: "On qualifying services",
              nl: "Op in aanmerking komende diensten",
            })}
            description={t({
              en: "Applies to digital marketing, SEO, content services and qualifying Growth Rocket services.",
              nl: "Geldt voor digitale marketing, SEO, contentdiensten en in aanmerking komende Growth Rocket-diensten.",
            })}
            tags={[
              t({ en: "Marketing", nl: "Marketing" }),
              t({ en: "SEO", nl: "SEO" }),
              t({ en: "Content", nl: "Content" }),
            ]}
            delay={0.1}
          />
        </div>
        <p className="m-0 flex items-center gap-[10px] text-center font-sans text-[14px] font-medium text-[#3d3550]">
          <span aria-hidden className="text-[20px] leading-none text-[#5b2dce]">
            ✳
          </span>
          {t({
            en: "Excludes domain bookings, standalone hosting, and pass-through infrastructure services.",
            nl: "Exclusief domeinregistraties, losse hosting en doorbelaste infrastructuurdiensten.",
          })}
        </p>
      </div>
    </section>
  );
}
