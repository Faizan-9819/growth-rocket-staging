"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import type { IconType } from "react-icons";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import ButtonF from "./ui/ButtonF";
import { AUDIENCE_ANCHOR } from "./sections/home2/anchors";
import { CONTACT_INFO, whatsappHref } from "@/contact";
import { useContactPhone } from "./useContactPhone";

import { useLanguage } from "../i18n/LanguageProvider";
import { localizedHref } from "../i18n/locale-href";
import type { Locale } from "../i18n/config";

const LIQUID_GLASS_ID = "nav-liquid-glass";

/* Liquid-glass lens tuning: how wide the refracting rim is, and how far (px)
   the backdrop is pulled at the very edge. */
// Matches the glass layers, which sit 1px outside the 13px capsule so the rim
// lies on frosted glass rather than raw page.
const GLASS_RADIUS = 14;
const GLASS_BEVEL = 16;
// Past ~30 the pull at the rim reaches far enough to show the backdrop
// mirrored back along the edge (e.g. a button below reading upside down).
const GLASS_SCALE = 26;

type EdgeMap = { url: string; w: number; h: number };

/**
 * Builds the displacement map for an edge-only lens, the way Apple's liquid
 * glass bends light: flat (no displacement) across the middle of the pane,
 * and within GLASS_BEVEL px of the rounded-rect edge the backdrop is pulled
 * inward along the edge normal, strongest right at the rim and easing off
 * quadratically — the look of a thick pane whose edge is curved.
 *
 * Encoding is feDisplacementMap's: red = x shift, green = y shift, 128 = none.
 * The distance to the edge comes from a rounded-rect signed distance field,
 * so the corners bend along their curve rather than as two straight edges.
 */
function buildEdgeMap(w: number, h: number): string {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";
  const img = ctx.createImageData(w, h);
  const bx = w / 2 - GLASS_RADIUS;
  const by = h / 2 - GLASS_RADIUS;
  // Signed distance to the rounded rect (negative inside).
  const sdf = (x: number, y: number) => {
    const qx = Math.abs(x - w / 2) - bx;
    const qy = Math.abs(y - h / 2) - by;
    const ox = Math.max(qx, 0);
    const oy = Math.max(qy, 0);
    return Math.hypot(ox, oy) + Math.min(Math.max(qx, qy), 0) - GLASS_RADIUS;
  };
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const px = x + 0.5;
      const py = y + 0.5;
      const depth = -sdf(px, py);
      let r = 128;
      let g = 128;
      if (depth < GLASS_BEVEL) {
        // Outward normal from the SDF gradient; the shift points inward.
        let nx = sdf(px + 1, py) - sdf(px - 1, py);
        let ny = sdf(px, py + 1) - sdf(px, py - 1);
        const len = Math.hypot(nx, ny) || 1;
        nx /= len;
        ny /= len;
        const t = Math.min(Math.max(1 - depth / GLASS_BEVEL, 0), 1);
        const k = t * t * 127;
        r = Math.round(128 - nx * k);
        g = Math.round(128 - ny * k);
      }
      const i = (y * w + x) * 4;
      img.data[i] = r;
      img.data[i + 1] = g;
      img.data[i + 2] = 128;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return canvas.toDataURL("image/png");
}

/**
 * Keeps the edge map sized to the refraction layer. The capsule animates its
 * width on scroll, so rebuilds are debounced until it settles; in between,
 * feImage stretches the last map, which is imperceptible over 700ms.
 */
function useEdgeMap(el: HTMLElement | null, enabled: boolean) {
  const [map, setMap] = useState<EdgeMap | null>(null);
  useEffect(() => {
    if (!el || !enabled) return;
    let timer: ReturnType<typeof setTimeout>;
    const build = () => {
      const w = Math.round(el.offsetWidth);
      const h = Math.round(el.offsetHeight);
      if (w < 2 * GLASS_RADIUS || h < 2 * GLASS_RADIUS) return;
      setMap((prev) =>
        prev && prev.w === w && prev.h === h
          ? prev
          : { url: buildEdgeMap(w, h), w, h },
      );
    };
    const ro = new ResizeObserver(() => {
      clearTimeout(timer);
      timer = setTimeout(build, 120);
    });
    ro.observe(el);
    build();
    return () => {
      clearTimeout(timer);
      ro.disconnect();
    };
  }, [el, enabled]);
  return map;
}

/**
 * The refraction behind the navbar's liquid glass: the edge map above,
 * stretched over the layer in px units, drives a displacement of the backdrop.
 */
function LiquidGlassFilter({ map }: { map: EdgeMap }) {
  return (
    <svg aria-hidden width="0" height="0" className="absolute">
      <filter
        id={LIQUID_GLASS_ID}
        x="0"
        y="0"
        width={map.w}
        height={map.h}
        filterUnits="userSpaceOnUse"
        primitiveUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feImage
          href={map.url}
          x="0"
          y="0"
          width={map.w}
          height={map.h}
          preserveAspectRatio="none"
          result="edge"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="edge"
          scale={GLASS_SCALE}
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  );
}

/* Chromium is the one engine that renders `filter: url()` on top of a
   backdrop-filter; Safari and Firefox draw it wrong or not at all. */
function useLiquidGlassSupport() {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const brands = (
      navigator as Navigator & {
        userAgentData?: { brands?: { brand: string }[] };
      }
    ).userAgentData?.brands;
    setOk(Boolean(brands?.some((b) => b.brand === "Chromium")));
  }, []);
  return ok;
}

const home2Anchor = (anchor: string, locale: Locale) =>
  locale === "nl" ? `/nl#${anchor}` : `/#${anchor}`;

/* Every href goes through the locale, so on Dutch pages the bar only ever
   links to Dutch pages (/nl/functies, /nl/ontwerpen, /nl/prijzen, …). */
const getLinks = (t: any, locale: Locale) => [
  {
    label: t({ en: "Features", nl: "Functies" }),
    href: localizedHref("/features", locale),
  },
  {
    label: t({ en: "Who It’s For", nl: "Voor wie" }),
    href: home2Anchor(AUDIENCE_ANCHOR[locale], locale),
  },
  {
    label: t({ en: "Designs", nl: "Ontwerpen" }),
    href: localizedHref("/design", locale),
  },
  {
    // Its own route, not a home2 anchor: the #prijzen fold (FinalCta) is no
    // longer mounted on home2, and /pricing is the real page.
    label: t({ en: "Pricing", nl: "Prijzen" }),
    href: localizedHref("/pricing", locale),
  },
  {
    label: t({ en: "About Us", nl: "Over ons" }),
    href: localizedHref("/about", locale),
  },
];

/* The drawer's social row, keyed by CONTACT_INFO.socialLinks labels. */
const SOCIAL_ICONS: Record<string, IconType> = {
  Instagram: FaInstagram,
  LinkedIn: FaLinkedin,
  YouTube: FaYoutube,
  "X / Twitter": RiTwitterXFill,
  WhatsApp: FaWhatsapp,
};

function openLeadForm() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-lead-form"));
  }
}

/* ---------- Adaptive tone ----------
   The bar is see-through glass, so whatever section it floats over decides
   whether dark or light copy can be read on it. It samples what sits under
   its left, middle and right and flips to a dark pane with white copy over
   the #0a0516 / violet folds, and back to light glass over white ones. */

/** Relative luminance (0 = black, 1 = white) of an `rgb()/rgba()` string. */
function luminance(color: string): number | null {
  const m = color.match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  const [r, g, b, a = 1] = m[1].split(/[\s,/]+/).filter(Boolean).map(Number);
  if (a < 0.5) return null; // too transparent to decide — look further down
  const lin = (c: number) => {
    const s = c / 255;
    return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

/** Is the page painted dark at viewport point (x, y), ignoring the header? */
function isDarkAt(x: number, y: number, header: HTMLElement): boolean | null {
  for (const hit of document.elementsFromPoint(x, y)) {
    if (header.contains(hit)) continue;
    // Photos and video are treated as dark: every one the bar can cross on
    // this site is a dark, busy image that white copy reads best on.
    if (hit instanceof HTMLImageElement || hit instanceof HTMLVideoElement) {
      return true;
    }
    for (let el: Element | null = hit; el; el = el.parentElement) {
      const l = luminance(getComputedStyle(el).backgroundColor);
      if (l !== null) return l < 0.35;
    }
    return null;
  }
  return null;
}

/**
 * Re-checks the tone under the bar on every scroll frame (rAF-throttled),
 * on resize and after navigation. Majority vote across three sample points
 * keeps it steady while a section edge is crossing the bar.
 */
function useBackdropTone(
  bar: HTMLElement | null,
  header: HTMLElement | null,
  pathname: string,
) {
  const [dark, setDark] = useState(false);
  const frame = useRef(0);

  const check = useRef(() => {});
  check.current = () => {
    if (!bar || !header) return;
    const r = bar.getBoundingClientRect();
    const y = r.top + r.height / 2;
    const votes = [0.2, 0.5, 0.8]
      .map((f) => isDarkAt(r.left + r.width * f, y, header))
      .filter((v): v is boolean => v !== null);
    if (!votes.length) return;
    const next = votes.filter(Boolean).length > votes.length / 2;
    setDark((prev) => (prev === next ? prev : next));
  };

  const schedule = useRef(() => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => check.current());
  });

  useEffect(() => {
    const run = schedule.current;
    run();
    // Late layout (fonts, images, reveal animations) can change what's under
    // the bar just after navigation, so check again once it has settled.
    const late = setTimeout(run, 600);
    window.addEventListener("resize", run);
    window.addEventListener("scroll", run, { passive: true });
    return () => {
      clearTimeout(late);
      cancelAnimationFrame(frame.current);
      window.removeEventListener("resize", run);
      window.removeEventListener("scroll", run);
    };
  }, [bar, header, pathname]);

  return { dark, recheck: schedule.current };
}

function Logo({
  locale,
  height = "h-[38px]",
}: {
  locale: Locale;
  /* The image's height class; the drawer shows the logo larger. */
  height?: string;
}) {
  return (
    <Link
      href={localizedHref("/", locale)}
      className="flex items-center shrink-0 justify-self-start"
      aria-label="Growth Rocket"
    >
      <img
        src="/figma/icons/logos/logoblack.svg"
        alt="Growth Rocket"
        className={`block w-auto ${height}`}
      />
    </Link>
  );
}

/* Hover rolls the label up and a violet copy in from below. The copy is
   aria-hidden so screen readers read the label once. */
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group relative block h-[22px] overflow-hidden font-sans text-[15px] font-semibold text-[#0a0516] no-underline whitespace-nowrap"
    >
      <span className="block transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-[22px] group-focus-visible:-translate-y-[22px] motion-reduce:transition-none">
        <span className="block h-[22px] leading-[22px]">{label}</span>
        <span aria-hidden className="block h-[22px] leading-[22px] text-[#5b2dce]">
          {label}
        </span>
      </span>
    </Link>
  );
}

function ProfileLink({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="https://hub.getgrowthrocket.com/"
      onClick={onClick}
      aria-label="Profile"
      className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full border border-[#0a0516] bg-[#0a0516] text-[#e4fa65] transition-[background,color,border-color,transform] duration-[180ms] ease-in-out hover:-translate-y-px hover:border-[#e4fa65] hover:bg-[#e4fa65] hover:text-[#0a0516]"
    >
      {/* Anchor text for crawlers; the icon alone reads as an empty link. */}
      <span className="sr-only">Growth Rocket Hub login</span>
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
      </svg>
    </Link>
  );
}

/* The switcher's pill height, and how far it grows to hold the other
   language when open. */
const LANG_PILL_H = 42;
const LANG_OPTION_H = 36;

/**
 * The active language sits in the pill. Opening it doesn't drop a separate
 * menu listing both languages: the pill itself grows downward and reveals the
 * other language inside the same rounded shape, so neither language is ever
 * shown twice.
 */
function LangSwitcher() {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const { t, locale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const other: Locale = locale === "en" ? "nl" : "en";

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function pick(next: Locale) {
    setOpen(false);
    if (next === locale) return;
    router.push(localizedHref(pathname, next));
  }

  return (
    <div
      ref={ref}
      // Open, it sits above whatever follows it, so the grown pill is never
      // covered by the bar's other controls.
      className={`group/lang relative shrink-0 transition-transform duration-[180ms] ease-in-out ${
        open ? "z-20" : "hover:-translate-y-px"
      }`}
    >
      {/* The pill's surface. It sits behind both rows and animates its height,
          so the open switcher reads as one shape growing out of the pill. */}
      <motion.span
        aria-hidden
        initial={false}
        animate={{
          height: open ? LANG_PILL_H + LANG_OPTION_H : LANG_PILL_H,
        }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 top-0 rounded-[21px] border border-[rgb(10_5_22/8%)] bg-[#eeeeee] transition-[background-color,border-color] duration-[180ms] ease-in-out group-hover/lang:border-[#5b2dce] group-hover/lang:bg-white"
      />

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t({ en: "Language", nl: "Taal" })}
        aria-expanded={open}
        className="relative inline-flex h-[42px] cursor-pointer items-center justify-center gap-[6px] px-[13px] py-[8px] font-sans text-[14px] font-medium leading-none text-[#0a0516] transition-colors duration-[180ms] ease-in-out hover:text-[#5b2dce]"
      >
        <span>{locale.toUpperCase()}</span>
        <svg
          width="13"
          height="13"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`mt-px transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path d="m4 6 4 4 4-4" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            onClick={() => pick(other)}
            lang={other}
            initial={{ opacity: 0, y: -4 }}
            // Trails the pill's growth slightly on the way in; leaves at once.
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.16, delay: 0.06 },
            }}
            exit={{ opacity: 0, y: -4, transition: { duration: 0.12 } }}
            style={{ top: LANG_PILL_H - 4, height: LANG_OPTION_H }}
            className="absolute inset-x-0 flex cursor-pointer items-center pl-[13px] font-sans text-[14px] font-medium leading-none text-[#0a0516] transition-colors hover:text-[#5b2dce]"
          >
            {other.toUpperCase()}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const { t, locale } = useLanguage();
  // The drawer's WhatsApp link follows the visitor's number (contact/phones.ts).
  const phone = useContactPhone();
  const LINKS = getLinks(t, locale);
  const [open, setOpen] = useState(false);
  // Transparent at the top of the page; glass capsule once scrolled past 8px.
  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = useRef(false);
  const liquidSupported = useLiquidGlassSupport();
  const [glassEl, setGlassEl] = useState<HTMLSpanElement | null>(null);
  const edgeMap = useEdgeMap(glassEl, liquidSupported);
  const liquid = liquidSupported && edgeMap !== null;
  // Slides out of view while scrolling down, back in on any scroll up.
  const [hidden, setHidden] = useState(false);
  const hiddenRef = useRef(false);
  const lastYRef = useRef(0);
  // How frosted the glass is, from whatever section is under the bar now.
  const pathname = usePathname() || "/";
  const [headerEl, setHeaderEl] = useState<HTMLElement | null>(null);
  const [barEl, setBarEl] = useState<HTMLDivElement | null>(null);
  const { dark: onDark, recheck: recheckTone } = useBackdropTone(
    barEl,
    headerEl,
    pathname,
  );

  useLenis((lenis) => {
    recheckTone();
    const next = lenis.scroll > 8;
    if (next !== scrolledRef.current) {
      scrolledRef.current = next;
      setScrolled(next);
    }

    // Direction is judged against the last position that crossed the 8px
    // threshold, so trackpad jitter and Lenis's easing tail don't flicker it.
    // Near the top of the page the bar always stays visible.
    const y = lenis.scroll;
    const delta = y - lastYRef.current;
    let nextHidden = hiddenRef.current;
    if (y < 80) nextHidden = false;
    else if (Math.abs(delta) > 8) nextHidden = delta > 0;
    if (y < 80 || Math.abs(delta) > 8) lastYRef.current = y;
    if (nextHidden !== hiddenRef.current) {
      hiddenRef.current = nextHidden;
      setHidden(nextHidden);
    }
  });

  // Keyboard users tabbing into a hidden bar should see where focus went.
  const reveal = () => {
    if (hiddenRef.current) {
      hiddenRef.current = false;
      setHidden(false);
    }
  };

  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.top = `-${scrollY}px`;
      document.body.classList.add("scroll-locked");
      return () => {
        document.body.classList.remove("scroll-locked");
        document.body.style.top = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  return (
    <header
      ref={setHeaderEl}
      // The drawer lives in this stacking context, so while it is open the
      // header rises above the sticky Book / Start bar (z-1000) and the
      // WhatsApp FAB (z-1400); the cookie banner (z-2000) stays on top.
      className={`fixed top-3 left-0 right-0 px-3.5 pointer-events-none ${
        open ? "z-[1500]" : "z-50"
      }`}
    >
      {liquid && edgeMap && <LiquidGlassFilter map={edgeMap} />}
      {/* The slide lives on this wrapper, not on <header>: a transform there
          would make it the containing block for the `fixed inset-0` mobile
          drawer below and pull the drawer off-screen with it. */}
      <div
        onFocusCapture={reveal}
        // 600ms on a gentler ease-in-out: the old 300ms expo-out snapped the
        // bar away almost instantly. Showing again uses the same timing.
        className="transition-transform duration-600 ease-[cubic-bezier(.45,0,.2,1)] motion-reduce:transition-none"
        style={{
          transform:
            // -100% clears the bar itself and 12px its `top-3` offset; the
            // extra 48px carries the drop shadow (10px down, 30px blur) and
            // the glass rim off-screen too, so no strip lingers at the top.
            hidden && !open ? "translateY(calc(-100% - 60px))" : "none",
        }}
      >
        <div
          // Scrolled: the capsule narrows to 1320px. Animating `width` between two
          // min() values (rather than max-width) keeps the expand back to full
          // width as smooth as the shrink, since max-width would overshoot 100%.
          // `isolate` scopes the glass layers' -z-10 to this capsule, so they
          // paint under its contents.
          //
          // The capsule itself carries no fill and no backdrop-filter: an
          // element with a backdrop-filter is a "backdrop root" for everything
          // inside it, which would leave the refraction layer below nothing to
          // bend but the capsule's own box.
          //
          // Desktop columns: the logo and action sides are both
          // `minmax(max-content, 1fr)` around an `auto` nav. While there is
          // room the two sides take equal shares, so the nav sits dead
          // centre; when there isn't, each side holds its own content width
          // and the nav shifts rather than overlapping either one. The
          // `gap-x` keeps clear air between the nav and both sides.
          ref={setBarEl}
          className="pointer-events-auto relative isolate mx-auto grid h-[64px] gap-x-0 xl:gap-x-[24px] grid-cols-[auto_auto] xl:grid-cols-[minmax(max-content,1fr)_auto_minmax(max-content,1fr)] items-center justify-between rounded-[13px] transition-[width,padding,box-shadow] duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
          style={
            {
              width: scrolled ? "min(100%, 1320px)" : "min(100%, 1920px)",
              padding: scrolled ? "5px 16px" : "8px 3px",
              // No real border: the visible edge is the glass-edge layers below.
              // A transparent border here left a 1px strip of raw, unfrosted
              // page between the rim and the pane (the glass layers only fill
              // the padding box), which read as a gap around the bar.
              boxShadow: scrolled
                ? "0 10px 30px rgba(10,5,22,.14), 0 1px 3px rgba(10,5,22,.08)"
                : "none",
            } as CSSProperties
          }
        >
          {/* Refraction: the page behind is frosted, then bent at the rim
            only through the edge-lens map in LiquidGlassFilter, so the edges
            of the pane warp like Apple's liquid glass while the middle stays
            a calm, even blur behind the nav.
            `filter: url()` on a backdrop layer only renders reliably in
            Chromium, so other engines get a plain frost. No opacity fade
            here — an ancestor with opacity < 1 is also a backdrop root, and
            the pane would go blank for the whole fade. The inner layer is
            exactly the pane's size so the map's rim lines up with its edge. */}
          <span
            aria-hidden
            className="pointer-events-none absolute -inset-px -z-10 overflow-hidden rounded-[14px]"
          >
            <span
              ref={setGlassEl}
              className="absolute inset-0"
              style={
                scrolled
                  ? {
                      // Frosted enough that text and detail behind the bar
                      // melt into soft colour and never compete with the nav
                      // links; the rim still bends that colour at the edges.
                      backdropFilter: "blur(14px) saturate(170%)",
                      WebkitBackdropFilter: "blur(14px) saturate(170%)",
                      filter: liquid ? `url(#${LIQUID_GLASS_ID})` : undefined,
                    }
                  : undefined
              }
            />
          </span>

          {/* Tint + sheen, in two strengths that crossfade with the section
            under the bar. The nav copy is always dark, so over white folds a
            ~50% white wash is enough; over the dark / violet folds the
            pane frosts up to ~73% white, so the dark links keep a light
            ground to read on. Each is its own layer so it can fade. */}
          <span
            aria-hidden
            className="pointer-events-none absolute -inset-px -z-10 rounded-[14px] transition-opacity duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
            style={{
              opacity: scrolled && !onDark ? 1 : 0,
              background:
                "linear-gradient(135deg, rgba(255,255,255,.58) 0%, rgba(255,255,255,.49) 40%, rgba(255,255,255,.47) 60%, rgba(255,255,255,.52) 100%)",
            }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -inset-px -z-10 rounded-[14px] transition-opacity duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
            style={{
              opacity: scrolled && onDark ? 1 : 0,
              background:
                "linear-gradient(135deg, rgba(255,255,255,.8) 0%, rgba(255,255,255,.7) 40%, rgba(255,255,255,.68) 60%, rgba(255,255,255,.74) 100%)",
            }}
          />

          {/* Corner glints: light pooling just inside the top-left and
            bottom-right corners, where a curved glass edge focuses it. */}
          <span
            aria-hidden
            className="pointer-events-none absolute -inset-px -z-10 rounded-[14px] transition-opacity duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
            style={{
              opacity: scrolled ? 1 : 0,
              background:
                "radial-gradient(90px 34px at 0% 0%, rgba(255,255,255,.35), rgba(255,255,255,0) 70%), radial-gradient(90px 34px at 100% 100%, rgba(255,255,255,.2), rgba(255,255,255,0) 70%)",
            }}
          />

          {/* Glass edge, in two parts — the way the rim of a thick pane reads:

            1. Outer edge: a crisp 1px ring (a gradient masked down to the
               border band) whose brightness moves around the shape. The top
               edge catches the most light, the bottom a little, and the
               rounded ends — where the edge curves toward the viewer — flare
               brightest, so the ring looks lit rather than drawn.
            2. Inner lip: a soft band just inside the ring — a bright line
               under the top edge, a fainter one over the bottom and a gentle
               inner glow all round — which gives the pane its thickness. */}
          <span
            aria-hidden
            className="pointer-events-none absolute -inset-px -z-10 rounded-[14px] p-px transition-opacity duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
            style={{
              opacity: scrolled ? 1 : 0,
              background: [
                // Rounded ends flare where the edge curves.
                "linear-gradient(90deg, rgba(255,255,255,.75) 0%, rgba(255,255,255,0) 7%, rgba(255,255,255,0) 93%, rgba(255,255,255,.75) 100%)",
                // Lit from above: bright top, dim sides, a soft return below.
                "linear-gradient(180deg, rgba(255,255,255,.85) 0%, rgba(255,255,255,.18) 45%, rgba(255,255,255,.1) 60%, rgba(255,255,255,.4) 100%)",
              ].join(", "),
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              mask: "linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0)",
            }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] transition-opacity duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
            style={{
              opacity: scrolled ? 1 : 0,
              // The reference's thick, softly glowing bevel: a wide white
              // glow hugging every edge (brightest along the top and the
              // rounded ends, softer along the bottom) that fades out well
              // before the clear middle, plus the crisp lip just inside.
              boxShadow: [
                "inset 0 1.5px 1px -0.5px rgba(255,255,255,.7)",
                "inset 0 -1.5px 1px -0.5px rgba(255,255,255,.35)",
                "inset 0 8px 12px -8px rgba(255,255,255,.75)",
                "inset 0 -8px 12px -8px rgba(255,255,255,.5)",
                "inset 10px 0 14px -10px rgba(255,255,255,.7)",
                "inset -10px 0 14px -10px rgba(255,255,255,.7)",
              ].join(", "),
            }}
          />

          <Logo locale={locale} />

          <nav
            aria-label="Main navigation"
            // From xl only: below 1280px the six links plus both sides no
            // longer fit on one row, so those widths keep the hamburger.
            className="hidden xl:flex items-center justify-self-center gap-[20px] 2xl:gap-[28px] flex-nowrap"
          >
            {LINKS.map((l) => (
              <NavLink
                key={l.label}
                href={l.href}
                label={l.label}
              />
            ))}
          </nav>

          <div className="flex items-center gap-[8px] min-[900px]:gap-[12px] shrink-0 justify-self-end"
          >
            {/* In the bar at every width, so phones can switch language
                without opening the menu. */}
            <LangSwitcher />
            {/* The violet pill turns lime on hover like home2's other violet
                CTAs (Hero2, the FAQ); shorter here to sit in the bar. */}
            <ButtonF
              variant="violet"
              size="custom"
              onClick={openLeadForm}
              className="hidden h-[42px] shrink-0 justify-center gap-[9px] px-[18px] py-[8px] text-[13px] whitespace-nowrap min-[900px]:inline-flex"
            >
              {t({
                en: "Start With Growth Rocket",
                nl: "Start met Growth Rocket",
              })}
            </ButtonF>
            {/* Below xl the hamburger's drawer carries the Hub login. */}
            <div className="hidden xl:block">
              <ProfileLink />
            </div>

            {/* Mobile hamburger */}
            <button
              aria-label="Open navigation"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="xl:hidden inline-flex items-center justify-center w-9 h-9 border-0 bg-transparent"
              onClick={() => setOpen(true)}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="#0A0516"
                  className="transition-[stroke] duration-300"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile fullscreen drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-white pointer-events-auto"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex flex-col p-6"
            >
              <div className="flex items-center justify-between h-[74px]">
                <Logo locale={locale} height="h-[50px]" />
                {/* The Hub login is left out of the drawer for now. The
                    negative margin lines the larger ✕ up with the content
                    edge. */}
                <button
                  aria-label="Close menu"
                  className="-mr-2 inline-flex items-center justify-center w-12 h-12 rounded-md cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="#0A0516"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Links, social row and CTA in one column. Every vertical gap
                  and the link size scale with the screen height (dvh), so
                  the column fits without scrolling from a 360×640 phone up
                  to a Pro Max. The two big gaps run 13dvh - 40px: ~43px at
                  640px tall, ~70px at 844px, 80px (the cap) on a Pro Max.
                  The scroll is only a fallback for landscape. */}
              <div className="flex-1 min-h-0 flex flex-col overflow-y-auto">
                <ul className="flex flex-col pt-[clamp(24px,calc(13dvh_-_40px),80px)]">
                  {LINKS.map((l, i) => (
                    <motion.li
                      key={l.label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 + i * 0.04, duration: 0.35 }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        // As large as the drawer allows: capped by the
                        // width so "Who It’s For" stays on one line, and by
                        // the height so all five fit on a short phone.
                        className="block font-jakarta font-semibold text-[length:clamp(28px,min(12vw,5.2dvh),56px)] leading-[1.1] tracking-[-0.03em] text-[var(--color-haiti)] py-[2dvh] border-b border-black/5"
                      >
                        {l.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Violet outlined discs that fill violet on hover.
                    WhatsApp is here too, since the open drawer covers its
                    FAB. */}
                <ul
                  aria-label={t({ en: "Follow us", nl: "Volg ons" })}
                  className="mt-[clamp(16px,2.5dvh,28px)] flex items-center gap-3"
                >
                  {CONTACT_INFO.socialLinks.map((social) => {
                    const Icon = SOCIAL_ICONS[social.label];
                    if (!Icon) return null;
                    return (
                      <li key={social.label}>
                        <a
                          href={
                            social.label === "WhatsApp"
                              ? whatsappHref(phone)
                              : social.href
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="grid h-[44px] w-[44px] place-items-center rounded-full border-[1.5px] border-[#5b2dce] text-[#5b2dce] transition-colors duration-200 hover:bg-[#5b2dce] hover:text-white"
                        >
                          <Icon size={18} aria-hidden />
                          <span className="sr-only">{social.label}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>

                {/* The bar's violet pill, full width and taller, under the
                    social row rather than pinned to the bottom. */}
                <div className="pt-[clamp(24px,calc(13dvh_-_40px),80px)]">
                  <ButtonF
                    variant="violet"
                    size="custom"
                    onClick={() => {
                      setOpen(false);
                      openLeadForm();
                    }}
                    fullWidth
                    className="h-[52px] justify-center gap-[9px] px-[18px] text-[15px] whitespace-nowrap"
                  >
                    {t({
                      en: "Start with Growth Rocket",
                      nl: "Start met Growth Rocket",
                    })}
                  </ButtonF>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
