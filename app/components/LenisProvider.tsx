"use client";

import { ReactNode, useCallback, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, type LenisRef } from "lenis/react";
import { useSmoothHashScroll } from "./useSmoothHashScroll";

let _lenis: LenisRef["lenis"] | null = null;

export function lenisStop() {
  _lenis?.stop();
}

export function lenisStart() {
  _lenis?.start();
}

/* While the cursor is over an embedded page (the live-preview iframes, marked
 * with WHEEL_HOLD_ATTR), the wheel belongs to the embed and the page stays put.
 * The check is made on every wheel event against the cursor's position, not
 * from pointer enter/leave events: those don't fire while the page scrolls the
 * frame under a still cursor, which left the page scrolling over the embed.
 *
 * `lenisStop()` isn't used for this: it sets overflow:hidden on <html>, which
 * hides the scrollbar and shifts the layout every time the cursor crosses the
 * frame. */
const WHEEL_HOLD_ATTR = "data-lenis-wheel-hold";

function overHeldEmbed({ clientX, clientY }: WheelEvent) {
  return Boolean(
    document.elementFromPoint(clientX, clientY)?.closest(`[${WHEEL_HOLD_ATTR}]`),
  );
}

/* Shift + wheel scrolls sideways, but Windows reports it as a vertical wheel
 * with Shift held, so Lenis would take it for a page scroll. Over something
 * that can scroll sideways (a wide legal or blog table) Lenis stands aside and
 * the browser scrolls it natively. */
function scrollsSideways(event: Event) {
  return event.composedPath().some((node) => {
    if (!(node instanceof HTMLElement) || node.scrollWidth <= node.clientWidth)
      return false;
    const { overflowX } = getComputedStyle(node);
    return overflowX === "auto" || overflowX === "scroll";
  });
}

/* Set while the embedded page under the cursor can scroll itself from a
 * forwarded wheel delta (DesignPreview sets it once the embed announces it).
 *
 * Chrome sends a wheel gesture to whatever the cursor was over when it began,
 * until the wheel has been still for a moment. If the page was scrolling when
 * the embed slid under the cursor, those wheel events still arrive here, never
 * reaching the embed (a cross-origin page this document can't scroll), and
 * swallowing them leaves the embed dead until the user pauses. An embed that
 * takes the delta over postMessage scrolls at once instead. */
let _wheelForwarder: ((deltaY: number) => void) | null = null;

export function setLenisWheelForwarder(fn: ((deltaY: number) => void) | null) {
  _wheelForwarder = fn;
}

function holdVirtualScroll({ event }: { event: WheelEvent | TouchEvent }) {
  if (event.type !== "wheel") return true;
  if ((event as WheelEvent).shiftKey && scrollsSideways(event)) return false;
  if (!overHeldEmbed(event as WheelEvent)) return true;
  if (event.cancelable) event.preventDefault();
  if (_wheelForwarder) {
    const { deltaY, deltaMode } = event as WheelEvent;
    _wheelForwarder(deltaMode === 1 ? deltaY * 40 : deltaY);
  }
  return false;
}

/** Props for an embedded page's iframe: while the cursor is over it, wheel
 * scrolling goes to the embed only. Over the rest of its browser frame (title
 * bar, border) the page scrolls. Touch is left alone — a finger on an iframe
 * already scrolls the iframe natively. */
export function useLenisWheelHold() {
  return { [WHEEL_HOLD_ATTR]: "" };
}

/** Scroll the page by `delta` px through Lenis — used to hand on a wheel
 * scroll an embedded preview has run out of room for. */
export function lenisScrollBy(delta: number) {
  if (_lenis) {
    _lenis.scrollTo(_lenis.targetScroll + delta);
  } else {
    window.scrollBy(0, delta);
  }
}

/** Smooth-scroll to a target through Lenis so it doesn't fight the library's
 * own scroll loop (native scrollIntoView/scrollTo jerks while Lenis is active). */
export function lenisScrollTo(
  target: string | number | HTMLElement | null | undefined,
  options?: {
    offset?: number;
    duration?: number;
    immediate?: boolean;
    easing?: (t: number) => number;
  },
) {
  if (target === null || target === undefined) return;
  if (_lenis) {
    // Lenis hears about a native scroll (scrollbar, keyboard, find-in-page)
    // only from the next scroll event; until then an element target would be
    // measured against its old position and the glide would head the wrong
    // way. Sync it to the real position first.
    if (
      !_lenis.isScrolling &&
      Math.abs(_lenis.animatedScroll - window.scrollY) > 1
    ) {
      _lenis.scrollTo(window.scrollY, { immediate: true, force: true });
    }
    _lenis.scrollTo(target, options);
  } else if (typeof target !== "string" && typeof target !== "number") {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function LenisProvider({ children }: { children: ReactNode }) {
  const setRef = useCallback((node: LenisRef | null) => {
    _lenis = node?.lenis ?? null;
  }, []);

  // Every link to a #section on the current page glides there, site-wide.
  useSmoothHashScroll();

  useEffect(() => {
    let rafId: number;
    function update(time: number) {
      _lenis?.raf(time);
      rafId = requestAnimationFrame(update);
    }
    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Lenis keeps its own scroll position across client-side navigations, so a
  // new route would otherwise open wherever the previous page was scrolled to.
  // Jump to the top on every route change — except back/forward (let the
  // browser restore the old position) and links to a #hash.
  const pathname = usePathname();
  const isPopRef = useRef(false);
  const firstRef = useRef(true);

  useEffect(() => {
    const onPop = () => {
      isPopRef.current = true;
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    if (firstRef.current) {
      firstRef.current = false;
      return;
    }
    if (isPopRef.current) {
      isPopRef.current = false;
      return;
    }
    if (window.location.hash) return;
    window.scrollTo(0, 0);
    _lenis?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return (
    <ReactLenis
      ref={setRef}
      root
      options={{
        autoRaf: false, // Drive manually for maximum frame rate accuracy
        virtualScroll: holdVirtualScroll,
      }}
    >
      {children}
    </ReactLenis>
  );
}

