"use client";
import { useEffect } from "react";
import { lenisScrollTo } from "./LenisProvider";

/**
 * Site-wide: clicking any link to a `#section` on the current page glides to
 * it through Lenis instead of jumping. Mounted once, by LenisProvider.
 *
 * That covers a bare `#faq` as well as a full `/features#website` or
 * `/nl#voorwie` while on that page (the link's resolved URL is compared with
 * the current one); a link to another page keeps its normal navigation.
 *
 * Only that click is smooth, and nothing stays switched on after it. A global
 * `scroll-behavior: smooth` would also animate every route change (Next 16 no
 * longer resets it during navigation) and fight Lenis, which owns the page
 * scroll; so this one scroll runs through Lenis. Lenis measures an element
 * target against html's `scroll-padding-top`, so a section lands clear of the
 * navbar exactly where a native jump would have put it.
 *
 * The click is caught in the capture phase and default-prevented before React
 * dispatches it, which is what stops `next/link` (it bails on a prevented
 * click) from navigating as well. The rest is what a native jump does: the
 * hash goes onto the history, and focus moves to the section so Tab carries on
 * from there.
 *
 * A link inside the mobile drawer is clicked while the page is scroll-locked
 * (body.scroll-locked); the drawer restores the old position as it closes, so
 * the glide waits for the lock to be released and starts from there.
 */

const MIN_DURATION = 0.6; // s
const MAX_DURATION = 1.2; // s
const PX_PER_SECOND = 2000;
const LOCK_CLASS = "scroll-locked";

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/** Sections aren't focusable, so they are made so for as long as they hold it. */
function focusSection(section: HTMLElement) {
  if (!section.hasAttribute("tabindex")) {
    section.setAttribute("tabindex", "-1");
    section.addEventListener(
      "blur",
      () => section.removeAttribute("tabindex"),
      { once: true },
    );
  }
  section.focus({ preventScroll: true });
}

function glideTo(section: HTMLElement) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const distance = Math.abs(section.getBoundingClientRect().top);
  lenisScrollTo(
    section,
    reduced
      ? { immediate: true }
      : {
          duration: Math.min(
            MAX_DURATION,
            Math.max(MIN_DURATION, distance / PX_PER_SECOND),
          ),
          easing: easeInOutCubic,
        },
  );
  focusSection(section);
}

/** Runs `fn` once the body scroll lock is gone — right away if there is none.
    The frame's delay lets Lenis pick up the position the lock restored. */
function afterScrollLock(fn: () => void) {
  const body = document.body;
  if (!body.classList.contains(LOCK_CLASS)) {
    fn();
    return;
  }
  const observer = new MutationObserver(() => {
    if (body.classList.contains(LOCK_CLASS)) return;
    observer.disconnect();
    requestAnimationFrame(fn);
  });
  observer.observe(body, { attributes: true, attributeFilter: ["class"] });
}

export function useSmoothHashScroll() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      // Modified and middle clicks keep their new-tab / new-window meaning.
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link =
        event.target instanceof Element
          ? event.target.closest("a[href]")
          : null;
      if (!(link instanceof HTMLAnchorElement)) return;
      if (link.target && link.target !== "_self") return;
      if (link.hasAttribute("download")) return;

      // `link.href` is resolved, so `#website` and `/features#website` both
      // land here when the page is /features.
      const url = new URL(link.href);
      if (
        !url.hash ||
        url.origin !== window.location.origin ||
        url.pathname !== window.location.pathname
      ) {
        return;
      }

      let id: string;
      try {
        id = decodeURIComponent(url.hash.slice(1));
      } catch {
        return;
      }
      const section = document.getElementById(id);
      if (!section) return;

      event.preventDefault();
      if (url.hash !== window.location.hash) {
        window.history.pushState(null, "", url.hash);
      }
      afterScrollLock(() => glideTo(section));
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
}
