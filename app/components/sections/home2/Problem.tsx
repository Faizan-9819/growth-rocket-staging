"use client";
import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";
import ButtonF from "../../ui/ButtonF";
import { useLanguage } from "../../../i18n/LanguageProvider";
import { localizedHref } from "../../../i18n/locale-href";
import { withBreaks } from "../../../lib/withBreaks";
import { Fragment, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

/* One letter of the scroll fill: dolphin grey until the scroll reaches its
   slot, then mixed through to haiti. `color-mix` keeps both colours as the
   theme's CSS variables rather than hard-coded hex. */
function FillChar({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const pct = useTransform(progress, range, [0, 100]);
  const color = useMotionTemplate`color-mix(in srgb, var(--color-haiti) ${pct}%, var(--color-dolphin))`;
  return <motion.span style={{ color }}>{char}</motion.span>;
}

/* Letters darken one by one as the line scrolls from the bottom edge of the
   viewport up into its top fifth, and lighten again on the way back.
   "<br/>" in the translation string still breaks the line. Screen readers get
   the sentence whole from the sr-only copy, not letter by letter. */
function ScrollFillText({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "end 0.2"],
  });

  const lines = text.split(/<br\s*\/?>/i);
  const total = lines.reduce((n, l) => n + l.length, 0);
  // Each letter fades over a few slots so the edge of the fill looks soft.
  const spread = 4 / total;
  let index = 0;

  return (
    <span ref={ref} className="font-bricolage">
      <span className="sr-only">{lines.join(" ")}</span>
      <span aria-hidden="true">
        {lines.map((line, li) => (
          <Fragment key={li}>
            {li > 0 && <br />}
            {Array.from(line).map((char, ci) => {
              const start = (index++ / total) * (1 - spread);
              return (
                <FillChar
                  key={ci}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, start + spread]}
                />
              );
            })}
          </Fragment>
        ))}
      </span>
    </span>
  );
}

export default function Problem() {
  const { t, locale } = useLanguage();

  return (
    <section className="relative overflow-hidden rounded-[28px]  fix-wide py-[50px] lg:py-30">
      {/* The column layout moved off the <section> and onto the group so the
          two blocks stay one stagger rather than two independent reveals. */}
      <RevealGroup className="flex flex-col items-center gap-6 md:gap-11">
        <RevealItem>
          <h2 className="m-0 max-w-295 text-center  font-bold font-bricolage text-[28px] md:text-[48px] leading-[1.2] tracking-[-2.16px] text-[var(--color-haiti)]">
            {withBreaks(
              t({
                en: "Small businesses and solopreneurs need more than a website.",
                nl: "Het mkb en zzp’ers hebben meer nodig dan een website.",
              }),
            )}{" "}
            <ScrollFillText
              text={t({
                en: " A system that keeps the day-to-day running smoothly, without everything depending on you.",
                nl: " Een compleet online businesssysteem dat je dagelijkse werk soepel laat verlopen, zonder dat alles op jou aankomt.",
              })}
            />
          </h2>
        </RevealItem>
        <RevealItem>
          <ButtonF
            href={localizedHref("/pricing", locale)}
            size="md"
            variant="dark"
            arrow="right"
            className="rounded-full! text-[13px]! px-[20px]! py-[14px]! "
            // style={{ ["--btn-radius" as any]: "999px" }}
          >
            {t({
              en: "See the complete package",
              nl: "Bekijk het pakket",
            })}
          </ButtonF>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
