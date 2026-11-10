"use client";

import { Fragment } from "react";
import { useLanguage } from "../../../i18n/LanguageProvider";
import type { Translation } from "../../../i18n/config";

const PHRASE: Translation = {
  en: "Get started in 7 days",
  nl: "Aan de slag in 7 dagen",
};

const PAIRS_PER_HALF = 8;

function LoopRun({ phrase, hidden }: { phrase: string; hidden?: boolean }) {
  return (
    <div aria-hidden={hidden} className="flex shrink-0 items-center">
      {Array.from({ length: PAIRS_PER_HALF }).map((_, i) => (
        <Fragment key={i}>
          <span className="inline-flex items-center px-[13px] font-bricolage text-[clamp(24px,2.45vw,38px)] font-semibold leading-none tracking-[-0.045em] xs:px-[18px]">
            {phrase}
          </span>
          <span
            aria-hidden
            className="inline-flex items-center px-[10px] font-bricolage text-[clamp(24px,2.45vw,38px)] font-semibold leading-none tracking-[-0.045em] text-[#e4fa65]"
          >
            ✳
          </span>
        </Fragment>
      ))}
    </div>
  );
}

export default function FooterLoopStrip() {
  const { t } = useLanguage();
  const phrase = t(PHRASE);

  return (
    <div
      aria-label={t({
        en: "Get started in seven days",
        nl: "Aan de slag in zeven dagen",
      })}
      className="full-bleed overflow-hidden bg-white py-[24px] whitespace-nowrap text-[#0a0516]"
    >
      <div className="gr-loop-strip-track flex w-max items-center">
        <LoopRun phrase={phrase} />
        <LoopRun phrase={phrase} hidden />
      </div>
    </div>
  );
}
