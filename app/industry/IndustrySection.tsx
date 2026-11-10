import type { ReactNode } from "react";

type Props = {
  id?: string;
  /* `.in-panel` is a rounded tinted card; `.in-open` is a flush band. */
  variant?: "panel" | "open";
  className?: string;
  labelledBy?: string;
  children: ReactNode;
};

/* Source shells:
     .industry-main { margin: 0 8px }            ← the gutter beside every card
     .in-panel      { border-radius:13px; padding:60px …; margin-bottom:14px }
     .in-open       { padding:66px … }
   `.fix` owns the horizontal rhythm inside, so only the vertical padding and
   the side gutter are kept here. The gutter is 14px rather than the source's
   8px so the cards sit exactly like HomeShell's (px-3.5) on the home page. */
export default function IndustrySection({
  id,
  variant = "panel",
  className,
  labelledBy,
  children,
}: Props) {
  const shell =
    variant === "panel"
      ? "mx-3.5 mb-[14px] rounded-[13px] py-[60px] max-[900px]:py-[34px]"
      : "mx-3.5 py-[66px] max-[900px]:py-[44px]";

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className="w-full scroll-mt-[100px]"
    >
      <div className={`${shell} ${className ?? ""}`}>
        <div className="fix">{children}</div>
      </div>
    </section>
  );
}
