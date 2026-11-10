"use client";

import { useState, type ReactNode } from "react";
import { useLanguage } from "../../i18n/LanguageProvider";

/**
 * Stands in front of a YouTube player until the visitor chooses to load it.
 *
 * Cookie Policy §3 (External media): "Before a video loads, we show a notice
 * explaining that it is provided by YouTube (Google Ireland Limited), which
 * may set cookies and collect viewing data. The video only loads, from
 * youtube-nocookie.com, when you choose to load it. Until then, no data is
 * sent to YouTube."
 *
 * So the notice fills the player's box, and the player (children) renders
 * only after "Load video". Each video asks again: give the gate a `key` per
 * video so it resets.
 */
export default function YouTubeGate({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  const [loaded, setLoaded] = useState(false);

  if (loaded) return <>{children}</>;

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#0a0516] px-6 text-center">
      <p className="m-0 max-w-[440px] font-sans text-[14px] leading-[1.6] text-white/80">
        {t({
          en: "This video is provided by YouTube (Google Ireland Limited), which may set cookies and collect viewing data.",
          nl: "Deze video wordt aangeboden door YouTube (Google Ireland Limited), dat cookies kan plaatsen en kijkgegevens kan verzamelen.",
        })}
      </p>
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="cursor-pointer rounded-full bg-[#e4fa65] px-5 py-2.5 font-sans text-[14px] font-semibold text-[#0a0516] transition-colors hover:bg-white"
      >
        {t({ en: "Load video", nl: "Video laden" })}
      </button>
    </div>
  );
}
