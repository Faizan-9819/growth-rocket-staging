"use client";
import type { ReactNode } from "react";
import { RevealGroup, RevealItem } from "@/app/features/FeatureReveal";

/**
 * Section head laid out like home2's Audience fold: the heading on the left,
 * the description in a `minmax(260px,420px)` column on the right,
 * bottom-aligned; one column with an 18px gap below md. Heading type is
 * Audience's (Bricolage 600, clamp(40px,4vw,58px), 1.1, -0.04em) and the
 * description its Inter 16/1.6 with 0.1em tracking.
 *
 * `tone` only picks colours that read on the fold behind it: the description
 * is muted body copy — home2's #625a70 on white, a darker #3d3550 on lime,
 * and the muted light copy on the deep and violet folds.
 */
const TONES = {
  light: { heading: "text-[#0a0516]", desc: "text-[#625a70]" },
  lime: { heading: "text-[#0a0516]", desc: "text-[#3d3550]" },
  dark: { heading: "text-white", desc: "text-[#c9c2d4]" },
  violet: { heading: "text-white", desc: "text-white/[0.88]" },
} as const;

export default function SectionHead({
  heading,
  description,
  tone = "light",
  className = "",
}: {
  heading: ReactNode;
  description?: ReactNode;
  tone?: keyof typeof TONES;
  className?: string;
}) {
  const colors = TONES[tone];
  return (
    <RevealGroup
      className={`grid w-full grid-cols-1 items-start gap-[18px] md:grid-cols-[1fr_minmax(260px,420px)] md:items-end md:gap-[42px] ${className}`}
    >
      <RevealItem>
        <h2
          className={`m-0 font-bricolage text-[clamp(40px,4vw,58px)] font-semibold leading-[1.1] tracking-[-0.04em] ${colors.heading}`}
        >
          {heading}
        </h2>
      </RevealItem>
      {description && (
        <RevealItem
          as="p"
          className={`m-0 mb-[4px] font-sans text-[16px] leading-[1.6] tracking-[0.1em] ${colors.desc}`}
        >
          {description}
        </RevealItem>
      )}
    </RevealGroup>
  );
}
