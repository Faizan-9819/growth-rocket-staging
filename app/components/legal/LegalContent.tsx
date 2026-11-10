import type { ReactNode } from "react";
import { legalSectionId } from "./LegalDocument";

/* Building blocks shared by the long-form legal pages (Terms and Conditions,
   Data Processing Agreement, Privacy Policy, Cookie Policy, Imprint): the
   same headings, lists, tables and links. */

export const LINK_CLASS =
  "font-medium text-[#5b2dce] underline underline-offset-[4px] transition-colors hover:text-[#0a0516]";

export function LegalHero({
  title,
  meta,
}: {
  title: string;
  /** A small line under the title, e.g. "Last updated: 28-10-2026 · Version 1.0". */
  meta?: string;
}) {
  return (
    <section className="relative mx-3.5 overflow-hidden rounded-[13px] bg-[#0a0516] pt-[72px] pb-[56px] md:pt-[96px] md:pb-[80px]">
      <div className="fix relative flex flex-col items-center gap-3 text-center">
        <h1 className="font-bricolage text-[clamp(40px,5vw,64px)] leading-[1.05] font-semibold tracking-[-0.045em] text-white">
          {title}
        </h1>
        {meta && (
          <p className="font-sans text-[14px] leading-[1.5] text-white/60">
            {meta}
          </p>
        )}
      </div>
    </section>
  );
}

/** A link to a page outside the legal site, opened in a new tab. */
export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children?: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={LINK_CLASS}
    >
      {children ?? href}
    </a>
  );
}

/** The phone number, as a tap-to-call link. */
export function Phone({ number }: { number: string }) {
  return (
    <a href={`tel:${number.replace(/\s+/g, "")}`} className={LINK_CLASS}>
      {number}
    </a>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <h2
        id={legalSectionId(title)}
        className="pt-2 font-bricolage text-[26px] leading-[1.2] font-semibold tracking-[-0.03em] text-[#0a0516]"
      >
        {title}
      </h2>
      <div className="flex flex-col gap-3 font-sans text-[16px] leading-[1.7] text-[#625a70]">
        {children}
      </div>
    </section>
  );
}

export function Ul({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex list-disc flex-col gap-1.5 pl-5 marker:text-[#5b2dce]">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function Sub({ children }: { children: ReactNode }) {
  return <p className="font-semibold text-[#0a0516]">{children}</p>;
}

export function B({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-[#0a0516]">{children}</strong>;
}

/** The legal text column's width (LegalDocument). A table set at least this
    wide never fits beside the text, so it always scrolls sideways. */
const TEXT_COLUMN = 780;
/** Room per column once a table scrolls anyway: wide enough that a long cell
    wraps over a few lines rather than a dozen. */
const SCROLLING_COLUMN = 280;

export function Table({
  head,
  rows,
  minWidth = 520,
}: {
  head: string[];
  rows: ReactNode[][];
  /** Below this width the table scrolls sideways instead of squashing. */
  minWidth?: number;
}) {
  // A table that scrolls on every screen (the DPA's sub-processors) gets a
  // comfortable width per column instead of its minimum split evenly; one
  // that fits beside the text keeps its width and doesn't start scrolling.
  const width =
    minWidth >= TEXT_COLUMN
      ? Math.max(minWidth, head.length * SCROLLING_COLUMN)
      : minWidth;

  return (
    // data-lenis-prevent-horizontal: a sideways trackpad swipe scrolls the
    // table rather than being taken for a page scroll (Shift + wheel is
    // handled in LenisProvider).
    <div
      data-lenis-prevent-horizontal
      className="toc-scroll overflow-x-auto rounded-[10px] border border-[#e6e1ee]"
    >
      <table
        style={{ minWidth: width }}
        className="w-full border-collapse text-left text-[15px] leading-[1.6]"
      >
        <thead className="bg-[#f5f2fa] text-[#0a0516]">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className="border-t border-[#e6e1ee] align-top">
              {row.map((cell, i) => (
                <td
                  key={i}
                  className={`px-4 py-3 ${i === 0 ? "font-medium text-[#0a0516]" : ""}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Mail({ email }: { email: string }) {
  return (
    <a href={`mailto:${email}`} className={LINK_CLASS}>
      {email}
    </a>
  );
}
