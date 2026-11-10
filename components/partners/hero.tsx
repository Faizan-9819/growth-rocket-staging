"use client";
import Reveal from "@/app/components/Reveal";
import ButtonF from "@/app/components/ui/ButtonF";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import type { Translation } from "@/app/i18n/config";

const enquiries: {
  initial: string;
  name: string;
  sub: Translation;
  status: Translation;
  statusClass: string;
  avatarBg: string;
  avatarText: string;
}[] = [
  {
    initial: "EM",
    name: "Emma Mitchell",
    sub: {
      en: "Booking for Saturday lunch · 4 people",
      nl: "Reservering lunch zaterdag · 4 personen",
    },
    status: { en: "New", nl: "Nieuw" },
    statusClass: "bg-[var(--color-violet-98)] text-[var(--color-violet-42)]",
    avatarBg: "bg-[var(--color-violet-98)]",
    avatarText: "text-[var(--color-violet-42)]",
  },
  {
    initial: "TJ",
    name: "Tom Jenkins",
    sub: {
      en: "Asking about catering quote",
      nl: "Vraagt naar een offerte voor catering",
    },
    status: { en: "Booked", nl: "Geboekt" },
    statusClass: "bg-green-100 text-green-800",
    avatarBg: "bg-green-100",
    avatarText: "text-green-800",
  },
  {
    initial: "SR",
    name: "Sophia Reyes",
    sub: {
      en: "Follow up after callback request",
      nl: "Opvolging na terugbelverzoek",
    },
    status: { en: "Replied", nl: "Beantwoord" },
    statusClass: "bg-amber-100 text-amber-800",
    avatarBg: "bg-amber-100",
    avatarText: "text-amber-800",
  },
];

const stats: {
  label: Translation;
  value: string;
  delta: Translation;
  bg: string;
}[] = [
  {
    label: { en: "Enquiries", nl: "Aanvragen" },
    value: "14",
    delta: { en: "+5 today", nl: "+5 vandaag" },
    bg: "bg-slate-50",
  },
  {
    label: { en: "Bookings", nl: "Afspraken" },
    value: "7",
    delta: { en: "+2 today", nl: "+2 vandaag" },
    bg: "bg-[var(--color-violet-98)]",
  },
  {
    label: { en: "Reply time", nl: "Reactietijd" },
    value: "12m",
    delta: { en: "↓ 38%", nl: "↓ 38%" },
    bg: "bg-amber-50",
  },
];

const ranges: Translation[] = [
  { en: "Today", nl: "Vandaag" },
  { en: "Week", nl: "Week" },
  { en: "Month", nl: "Maand" },
];

const perks: Translation[] = [
  { en: "No upfront cost", nl: "Geen kosten vooraf" },
  { en: "Recurring commissions", nl: "Terugkerende commissie" },
  { en: "No technical work", nl: "Geen technisch werk" },
];

function HeroDashboard() {
  const { t } = useLanguage();
  return (
    <div className="relative">
      <div className="absolute -top-5 -right-2 z-10 flex items-center gap-2.5 bg-white border border-slate-200 rounded-2xl px-3.5 py-2.5 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-[var(--color-green-600)] shadow-[0_0_0_4px_rgba(34,160,107,0.15)]" />
        <div>
          <div className="text-xs font-semibold text-[var(--color-haiti)]">
            {t({ en: "New enquiry", nl: "Nieuwe aanvraag" })}
          </div>
          <div className="text-[11px] text-[var(--color-dolphin)]">
            {t({ en: "Just now · Bridge Café", nl: "Zojuist · Bridge Café" })}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-4 z-10 flex items-center gap-2.5 bg-[#5b2dce] text-white rounded-[13px] px-4 py-3 shadow-xl">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e4fa65"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
        <div>
          <div className="text-xs font-semibold">
            {t({ en: "+24% reply rate", nl: "+24% reactieratio" })}
          </div>
          <div className="text-[11px] text-white/60">
            {t({ en: "vs last month", nl: "t.o.v. vorige maand" })}
          </div>
        </div>
      </div>
      <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl p-5 overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="font-bricolage font-semibold text-[15px] text-[var(--color-haiti)]">
              Growth Rocket Hub
            </div>
            <div className="text-xs text-[var(--color-dolphin)]">
              app.growthrocket.io · Bridge Café
            </div>
          </div>
          <div className="flex gap-0.5 bg-slate-100 p-0.5 rounded-lg">
            {ranges.map((r, i) => (
              <button
                key={r.en}
                className={`px-3 py-1.5 text-xs font-medium rounded-md ${i === 0 ? "bg-white text-[var(--color-haiti)] shadow-sm" : "text-[var(--color-dolphin)]"}`}
              >
                {t(r)}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2.5 mb-4">
          {stats.map((s) => (
            <div key={s.label.en} className={`${s.bg} rounded-xl p-3.5`}>
              <div className="text-[11px] font-semibold uppercase tracking-wide text-[var(--color-dolphin)]">
                {t(s.label)}
              </div>
              <div className="font-bricolage text-[22px] font-bold text-[var(--color-haiti)] mt-1.5">
                {s.value}
              </div>
              <div className="text-[11px] font-semibold text-[var(--color-green-600)]">
                {t(s.delta)}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mb-2.5">
          <div className="text-[13px] font-semibold text-[var(--color-haiti)]">
            {t({ en: "Recent enquiries", nl: "Recente aanvragen" })}
          </div>
          <div className="text-xs text-[var(--color-dolphin)]">
            {t({ en: "View all", nl: "Alles bekijken" })}
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          {enquiries.map((e) => (
            <div
              key={e.name}
              className="flex items-center gap-3 p-3 border border-slate-200 rounded-xl bg-white hover:border-[var(--color-violet-92)] transition-colors"
            >
              <span
                className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-[13px] shrink-0 ${e.avatarBg} ${e.avatarText}`}
              >
                {e.initial}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-semibold text-[var(--color-haiti)]">
                  {e.name}
                </div>
                <div className="text-xs text-[var(--color-dolphin)] truncate">
                  {t(e.sub)}
                </div>
              </div>
              <span
                className={`text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0 ${e.statusClass}`}
              >
                {t(e.status)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PartnersHero() {
  const { t } = useLanguage();
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };
  const openBookingForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-booking-form"));
    }
  };

  return (
    <section className="relative overflow-hidden rounded-[13px] bg-[#0a0516] py-[60px] lg:py-[90px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[120px] -top-[130px] h-[410px] w-[410px] rounded-full bg-[#5b2dce] opacity-[0.18] blur-[110px]"
      />

      <div className="fix relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-6 items-center ">
          <Reveal>
            <div className="flex flex-col">
              <h1 className="m-0 font-bricolage text-[clamp(36px,5vw,62px)] font-semibold leading-[1.05] tracking-[-0.05em] text-white">
                {t({
                  en: "Help small businesses grow online",
                  nl: "Help kleine bedrijven online groeien",
                })}{" "}
                <span className="italic text-[#e4fa65]">
                  {t({
                    en: "— and build recurring income",
                    nl: "— en bouw terugkerend inkomen op",
                  })}
                </span>{" "}
                {t({ en: "while doing it.", nl: "terwijl je dat doet." })}
              </h1>
              <p className="mt-5 max-w-[520px] font-sans text-[17px] leading-[1.7] text-[#c9c2d4]">
                {t({
                  en: "Growth Rocket helps small businesses establish a professional online presence through managed websites and enquiry systems. Refer the businesses in your network and earn recurring commissions.",
                  nl: "Growth Rocket helpt kleine bedrijven aan een professionele online aanwezigheid met beheerde websites en aanvraagsystemen. Verwijs de bedrijven uit je netwerk door en verdien terugkerende commissie.",
                })}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-[18px]">
                <ButtonF
                  variant="violet"
                  size="lg"
                  onClick={openLeadForm}
                  className="justify-center border border-transparent"
                >
                  {t({ en: "Become a Partner", nl: "Word partner" })}
                </ButtonF>
                <ButtonF
                  variant="link"
                  arrow="right"
                  onClick={openBookingForm}
                  className="gap-[8px] border-b border-white/55 font-sans text-[14px] font-semibold text-white"
                >
                  {t({ en: "View Partner Deck", nl: "Bekijk de partnerdeck" })}
                </ButtonF>
              </div>
              <div className="flex flex-wrap gap-6 mt-7 font-sans text-[13px] text-[#c9c2d4]">
                {perks.map((item) => (
                  <span key={item.en} className="flex items-center gap-2">
                    {/* home2's ✳ marker (Solution's foot notes), in lime. */}
                    <span
                      aria-hidden
                      className="text-[17px] leading-none text-[#e4fa65]"
                    >
                      ✳
                    </span>
                    {t(item)}
                  </span>
                ))}
              </div>
              <p className="mt-4 font-sans text-[14px] leading-[1.6] text-[#c9c2d4]">
                {t({
                  en: "Built for consultants, freelancers, students, agencies, community builders and business connectors.",
                  nl: "Gemaakt voor consultants, freelancers, studenten, bureaus, communitybouwers en verbinders in het bedrijfsleven.",
                })}
              </p>
            </div>
          </Reveal>
          <Reveal className="lg:block hidden" delay={0.1}>
            <HeroDashboard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
