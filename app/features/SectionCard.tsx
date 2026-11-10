import type { ReactNode } from "react";

type Props = {
  id?: string;
  /* The id of the fold's heading, to name the section region after it. */
  labelledBy?: string;
  className?: string;
  children: ReactNode;
};

/* Two boxes: .newfix-card is the tinted near-full-bleed shell, .newfix is the
   content rail inside it so every fold aligns on both sides. */
export default function SectionCard({
  id,
  labelledBy,
  className,
  children,
}: Props) {
  return (
    <section id={id} aria-labelledby={labelledBy} className="w-full">
      <div
        className={`newfix-card rounded-[13px] py-[clamp(46px,5vw,68px)] max-[600px]:py-[38px] ${className ?? ""}`}
      >
        <div className="fix">{children}</div>
      </div>
    </section>
  );
}
