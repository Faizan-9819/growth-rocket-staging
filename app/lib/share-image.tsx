import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { Locale } from "../i18n/config";

/**
 * The link-preview card: the logo over one tagline line. app/opengraph-image
 * renders it in English, app/nl/opengraph-image in Dutch, and socialMeta (seo.ts)
 * points each page at the one in its language.
 */

/* The NL line is the NL home hero's own wording. */
export const SHARE_TAGLINE: Record<Locale, string> = {
  en: "Not just a website. A complete business system.",
  nl: "Meer dan een website. Een compleet systeem voor jouw bedrijf.",
};

export async function renderShareImage(locale: Locale) {
  const logoData = await readFile(
    join(process.cwd(), "public/figma/icons/logos/logoblack.svg"),
  );
  const logoBase64 = `data:image/svg+xml;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoBase64} width={468} height={141} alt="Growth Rocket" />
        <p
          style={{
            fontSize: 28,
            color: "#667085",
            margin: 0,
            fontFamily: "sans-serif",
          }}
        >
          {SHARE_TAGLINE[locale]}
        </p>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
