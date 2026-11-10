import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";
import { extendTailwindMerge } from "tailwind-merge";
import ArrowIcon, { type ArrowDirection } from "./ArrowIcon";
import LocaleLink from "./LocaleLink";

/**
 * ButtonF — every call to action on the site, arrow or not. One component,
 * three families, one hover (a 1.03 lift plus ArrowIcon's two-slot swap):
 *
 *   `.btn` system   primary · secondary · dark · ghost
 *                   Painted by globals.css; `size` picks `.btn--sm/md/lg`.
 *                   The label is wrapped in `.btn__label` by default.
 *
 *   home2 pills     lime · violet · ink · pill
 *                   Driven by `.arrow-cta`. `size` picks one of the shared pill
 *                   geometries below, or `custom` to bring your own. `pill` is
 *                   the geometry with no paint — colours come from className.
 *
 *   text link       link
 *                   `.arrow-cta` on a bare inline row: no fill, no padding.
 *
 * `className` is merged last with tailwind-merge, so a caller's utility always
 * beats the preset's for the same property — `variant="lime" className="flex"`
 * replaces the pill's `inline-flex` instead of leaving both to fight it out in
 * stylesheet order. The `.btn` system is unlayered CSS, so overriding it still
 * needs Tailwind's `!` suffix, exactly as before.
 *
 * The element follows the props:
 *   href "/…" or "#…"         next/link, via LocaleLink — an EN path is sent
 *                              to the current locale's page (/pricing →
 *                              /nl/prijzen on Dutch pages)
 *   any other href             <a> (mailto:, tel:, https:)
 *   no href                    <button type="button">
 *   as="span"                  <span>, for a faux button inside a card that is
 *                              already the link (pair with `hover={false}` when
 *                              the card itself carries `.arrow-cta`)
 *   native                     a plain <a> even for "/…" or "#…" — for same-page
 *                              anchors that keep the browser's smooth jump
 *                              rather than the router's instant scroll
 */

const merge = extendTailwindMerge({
  override: {
    // Tailwind v4's font-size utilities read `--tw-leading`, so a `leading-*`
    // wins whatever the order. tailwind-merge still drops a leading that sits
    // before a later `text-*`; switch that off so resizing a pill's text
    // doesn't silently take its line-height with it.
    conflictingClassGroups: { "font-size": [] },
  },
});

export type ButtonFVariant =
  | "primary"
  | "secondary"
  | "dark"
  | "ghost"
  | "lime"
  | "violet"
  | "ink"
  | "pill"
  | "link";

export type ButtonFSize = "sm" | "md" | "lg" | "custom";

type SystemVariant = "primary" | "secondary" | "dark" | "ghost";
type PillVariant = "lime" | "violet" | "ink" | "pill";

const isSystem = (v: ButtonFVariant): v is SystemVariant =>
  v === "primary" || v === "secondary" || v === "dark" || v === "ghost";

const PILL =
  "inline-flex items-center gap-[8px] rounded-full font-sans font-semibold";

const PILL_TONE: Record<PillVariant, string> = {
  lime: "border border-transparent bg-[#e4fa65] text-[#0a0516] hover:bg-white",
  violet: "bg-[#5b2dce] text-white hover:bg-[#e4fa65] hover:text-[#0a0516]",
  ink: "bg-[#0a0516] text-[#e4fa65]",
  pill: "",
};

const PILL_SIZE: Record<ButtonFSize, string> = {
  /** 45px — blog CTAs, the home hero. */
  sm: "min-h-[45px] px-[22px] py-[10px] text-[14px]",
  /** 46px, 52px from `md` — the default pill. */
  md: "min-h-[46px] px-[16px] py-[11px] text-[14px] leading-[1.35] md:min-h-[52px] md:px-[20px] md:py-[14px]",
  /** 52px at every width — the FAQ help cards, partners. */
  lg: "min-h-[52px] px-[20px] py-[14px] text-[14px]",
  custom: "",
};

const LINK = "inline-flex items-center";

type OwnProps = {
  variant?: ButtonFVariant;
  size?: ButtonFSize;
  /** Arrow direction, or `false` for none. */
  arrow?: ArrowDirection | false;
  /** Fixed arrow size in px. Without it the `.btn--*` size (or 16px) applies. */
  arrowSize?: number;
  arrowClassName?: string;
  /** Wrap children in `.btn__label`. Defaults to on for the `.btn` system. */
  label?: boolean;
  /** Own the hover (`.arrow-cta`). `false` when an ancestor drives it. */
  hover?: boolean;
  fullWidth?: boolean;
  native?: boolean;
  className?: string;
  children?: ReactNode;
};

type AsLink = OwnProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof OwnProps | "href"> & {
    href: string;
    as?: never;
  };

type AsButton = OwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof OwnProps> & {
    href?: never;
    as?: never;
  };

type AsSpan = OwnProps &
  Omit<HTMLAttributes<HTMLSpanElement>, keyof OwnProps> & {
    as: "span";
    href?: never;
  };

export type ButtonFProps = AsLink | AsButton | AsSpan;

function presetClass(
  variant: ButtonFVariant,
  size: ButtonFSize,
  fullWidth: boolean | undefined,
  hover: boolean,
) {
  if (isSystem(variant)) {
    return [
      "btn",
      `btn--${variant}`,
      size === "custom" ? "" : `btn--${size}`,
      fullWidth ? "btn--full" : "",
    ].join(" ");
  }
  return [
    hover ? "arrow-cta" : "",
    variant === "link"
      ? LINK
      : `${PILL} ${PILL_TONE[variant]} ${PILL_SIZE[size]}`,
    fullWidth ? "w-full" : "",
  ].join(" ");
}

export default function ButtonF(props: ButtonFProps) {
  const {
    variant = "primary",
    size = "md",
    arrow = "up-right",
    arrowSize,
    arrowClassName,
    label,
    hover = true,
    fullWidth,
    native,
    className,
    children,
    as,
    href,
    ...rest
  } = props;

  const preset = presetClass(variant, size, fullWidth, hover);
  const content = (
    <>
      {(label ?? isSystem(variant)) ? (
        <span className="btn__label">{children}</span>
      ) : (
        children
      )}
      {arrow ? (
        <ArrowIcon
          direction={arrow}
          size={arrowSize}
          className={arrowClassName}
        />
      ) : null}
    </>
  );

  if (as === "span") {
    return (
      <span
        className={merge(preset, className)}
        {...(rest as HTMLAttributes<HTMLSpanElement>)}
      >
        {content}
      </span>
    );
  }

  if (typeof href === "string") {
    const cls = merge(preset, className);
    const linkRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    const routed =
      !native &&
      ((href.startsWith("/") && !href.startsWith("//")) ||
        href.startsWith("#"));
    return routed ? (
      <LocaleLink href={href} className={cls} {...linkRest}>
        {content}
      </LocaleLink>
    ) : (
      <a href={href} className={cls} {...linkRest}>
        {content}
      </a>
    );
  }

  const { type = "button", ...buttonRest } =
    rest as ButtonHTMLAttributes<HTMLButtonElement>;
  /* `.btn` sets its own pointer; a pill on a <button> needs Tailwind's,
     since preflight gives buttons the default cursor. */
  const cls = merge(
    preset,
    isSystem(variant) ? "" : "cursor-pointer",
    className,
  );
  return (
    <button type={type} className={cls} {...buttonRest}>
      {content}
    </button>
  );
}
