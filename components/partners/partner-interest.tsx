"use client";

import Reveal from "@/app/components/Reveal";
import PartnerNetworkForm from "@/app/components/PartnerNetworkForm";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import { FOLD, H2, LEAD } from "./theme";

const checks = [
  {
    en: "We respond within 2 business days",
    nl: "We reageren binnen 2 werkdagen",
  },
  {
    en: "No upfront cost to become a partner",
    nl: "Geen opstartkosten om partner te worden",
  },
  {
    en: "Your data stays private — never shared",
    nl: "Uw gegevens blijven privé — nooit gedeeld",
  },
];

export default function PartnerInterest() {
  const { t } = useLanguage();
  return (
    <section
      id="form"
      className={`overflow-x-hidden bg-[#5b2dce] text-white ${FOLD}`}
    >
      <div className="fix">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-[64px]">
          {/* Left column */}
          <Reveal className="flex flex-col gap-6 lg:max-w-[480px] lg:pt-6">
            <h2 className={`${H2} text-white`}>
              {t({ en: "Partner with", nl: "Word partner van" })}{" "}
              <span className="text-[#e4fa65]">Growth Rocket.</span>
            </h2>

            <p className={`${LEAD} m-0 text-white/[0.88]`}>
              {t({
                en: "Tell us a little about your network. We’ll review your application and reach out to discuss next steps.",
                nl: "Vertel ons iets over je netwerk. We bekijken je aanmelding en nemen contact met je op om de volgende stappen te bespreken.",
              })}
            </p>

            <ul className="m-0 mt-2 flex list-none flex-col gap-[14px] p-0">
              {checks.map((item) => (
                <li key={item.en} className="flex items-start gap-3">
                  <span className="mt-[2px] flex size-[22px] shrink-0 items-center justify-center rounded-full bg-[#e4fa65]">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0a0516"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="font-sans text-[16px] leading-[1.6] text-white">
                    {t(item)}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right column — form card: a white panel on the violet fold, with
              lavender fields so they still read as inputs on the white. */}
          <Reveal
            delay={0.1}
            className="w-full flex-1 rounded-[13px] bg-white p-5 text-[#0a0516] shadow-[0_30px_70px_rgba(10,5,22,0.28)] sm:p-6 lg:p-8 [&_input]:bg-[#f5f3ff] [&_select]:bg-[#f5f3ff] [&_textarea]:bg-[#f5f3ff] [&_input]:border-[#ded8e7] [&_select]:border-[#ded8e7] [&_textarea]:border-[#ded8e7] [&_label]:text-[#554c64]"
          >
            <PartnerNetworkForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
