// "use client";
// import Reveal from "@/app/components/Reveal";
// import { visionSteps } from "@/app/partner-network/data";

// export default function BiggerVision() {
//   return (
//     <section className="relative bg-white py-[60px] lg:py-[100px]">
//       <div className="md:max-w-[1400px] md:mx-auto fix">
//         <div className="flex flex-col items-center text-center max-w-[720px] mx-auto mb-[30px] lg:mb-[56px] gap-[18px]">
//           <Reveal>
//             <span className="font-poppins text-[13px] font-semibold uppercase leading-[19.5px] tracking-[2px] text-[var(--color-violet-42)]">
//               The Bigger Vision
//             </span>
//           </Reveal>
//           <Reveal delay={0.05}>
//             <h2 className="font-poppins font-bold text-[clamp(32px,5vw,44px)] leading-[1.2] tracking-[-1px] text-[var(--color-haiti)]">
//               Building more than
//               <br />
//               <span className="text-grad-brand">just websites.</span>
//             </h2>
//           </Reveal>
//           <Reveal delay={0.1}>
//             <p className="max-w-[514px] font-poppins text-[16px] leading-[1.4] tracking-[0.16px] text-[var(--color-dolphin)]">
//               Growth Rocket is long-term digital infrastructure for small
//               businesses. The partner network is part of how this ecosystem
//               scales.
//             </p>
//           </Reveal>
//         </div>

//         <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {/* Timeline line — desktop only */}
//           <div
//             aria-hidden
//             className="hidden lg:block absolute top-[9px] left-[calc(12.5%+4px)] right-[calc(12.5%+4px)] h-px"
//             style={{
//               background:
//                 "linear-gradient(to right, transparent, var(--color-violet-92), transparent)",
//             }}
//           />

//           {visionSteps.map((step, i) => (
//             <Reveal key={step.year} delay={i * 0.07}>
//               <div className="group relative z-10 pt-[28px] cursor-default">
//                 {/* Timeline dot — transparent by default, filled on card hover */}
//                 <span
//                   className="absolute top-0 left-0 rounded-full border-2 border-[var(--color-violet-42)] transition-colors duration-300"
//                   style={{
//                     width: 18,
//                     height: 18,
//                     background: "transparent",
//                     boxShadow: "0 0 0 4px var(--color-violet-98)",
//                   }}
//                 />
//                 <span
//                   className="absolute top-0 left-0 rounded-full border-2 border-[var(--color-violet-42)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   style={{
//                     width: 18,
//                     height: 18,
//                     background: "var(--color-violet-42)",
//                     boxShadow: "0 0 0 4px var(--color-violet-98)",
//                   }}
//                 />
//                 <div className="font-poppins text-[13px] font-semibold uppercase tracking-[0.08em] mb-[8px] text-[var(--color-violet-42)]">
//                   {step.year}
//                 </div>
//                 <h4 className="font-poppins font-semibold text-[17px] leading-[1.3] tracking-[-0.2px] text-[var(--color-haiti)] mb-[8px]">
//                   {step.title}
//                 </h4>
//                 <p className="font-poppins text-[14px] leading-[1.6] text-[var(--color-dolphin)]">
//                   {step.body}
//                 </p>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Reveal from "@/app/components/Reveal";
import { visionSteps } from "@/app/partner-network/data";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import { FOLD } from "./theme";
import SectionHead from "./SectionHead";

/* Deep fold; the timeline dots are home2's lime with a deep ring. */
export default function BiggerVision() {
  const { t } = useLanguage();
  return (
    <section className={`relative bg-[#0a0516] text-white ${FOLD}`}>
      <div className="fix">
        <SectionHead
          tone="dark"
          className="mb-[30px] lg:mb-[56px]"
          heading={
            <>
              {t({
                en: "Building more than",
                nl: "We bouwen meer dan",
              })}
              <br />
              <span className="text-[#e4fa65]">
                {t({
                  en: "just websites.",
                  nl: "alleen websites.",
                })}
              </span>
            </>
          }
          description={t({
            en: "Growth Rocket is long-term digital infrastructure for small businesses. The partner network is part of how this ecosystem scales.",
            nl: "Growth Rocket is digitale infrastructuur voor kleine bedrijven, gebouwd voor de lange termijn. Het partnernetwerk is een van de manieren waarop dit ecosysteem groeit.",
          })}
        />

        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Mobile vertical timeline */}
          <div
            aria-hidden
            className="lg:hidden absolute top-[9px] left-[8px] bottom-[9px] w-[2px] bg-white/15"
          />

          <div
            aria-hidden
            className="hidden lg:block absolute top-[8px] h-[2px]"
            style={{
              left: "0",
              right: "calc(13.5% + 1px)", // dot ke pehle khatam
              background:
                "linear-gradient(to right, transparent 0%, rgba(228,250,101,0.6) 15%, rgba(255,255,255,0.15) 85%, transparent 100%)",
            }}
          />

          {visionSteps.map((step, i) => (
            <Reveal key={step.year.en} delay={i * 0.07}>
              <div className="group relative flex gap-4 lg:block lg:pt-[28px] cursor-default group">
                {/* Mobile dot */}
                <div className="relative flex-shrink-0 lg:hidden">
                  <span className="relative z-10 block size-[18px] rounded-full border-2 border-[#e4fa65] bg-[#0a0516] shadow-[0_0_0_4px_#0a0516] transition-colors duration-300 group-hover:bg-[#e4fa65]" />
                </div>

                {/* Desktop dots */}
                <span className="hidden lg:block absolute top-0 left-0 z-40 size-[18px] rounded-full border-2 border-[#e4fa65] bg-[#0a0516] shadow-[0_0_0_4px_#0a0516] transition-colors duration-300 group-hover:bg-[#e4fa65]" />

                {/* <span
                  className="hidden lg:block absolute top-0 left-0 rounded-full border-2 border-[var(--color-violet-42)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    width: 18,
                    height: 18,
                    background: "var(--color-violet-42)",
                    boxShadow: "0 0 0 4px var(--color-violet-98)",
                  }}
                /> */}

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-[10px] font-sans text-[12px] font-bold uppercase tracking-[0.12em] text-[#e4fa65]">
                    {t(step.year)}
                  </div>

                  <h4 className="m-0 mb-[8px] font-bricolage text-[22px] font-semibold leading-[1.15] tracking-[-0.03em] text-white">
                    {t(step.title)}
                  </h4>

                  <p className="m-0 font-sans text-[15px] leading-[1.7] text-[#c9c2d4]">
                    {t(step.body)}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
