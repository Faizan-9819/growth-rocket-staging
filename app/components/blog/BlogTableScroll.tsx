"use client";

import { useEffect } from "react";

/**
 * Shift + wheel scrolls a blog table sideways while the cursor is over it.
 *
 * Browsers do this natively, but Lenis owns the page's wheel handling and
 * swallows the shifted wheel event, so it never reaches the table. This
 * listens in the capture phase (ahead of Lenis), finds the nearest ancestor
 * that scrolls horizontally, moves it, and stops the event there. Without
 * Shift, or off a table, the wheel is left for Lenis as usual.
 */
function horizontalScroller(start: EventTarget | null): HTMLElement | null {
  let el = start instanceof HTMLElement ? start : null;
  while (el && el !== document.body) {
    if (el.scrollWidth > el.clientWidth) {
      const { overflowX } = getComputedStyle(el);
      if (overflowX === "auto" || overflowX === "scroll") return el;
    }
    el = el.parentElement;
  }
  return null;
}

export default function BlogTableScroll() {
  useEffect(() => {
    function onWheel(event: WheelEvent) {
      if (!event.shiftKey) return;
      const scroller = horizontalScroller(event.target);
      if (!scroller) return;
      // Some browsers already swap the axis for Shift; take whichever moved.
      const delta = event.deltaX || event.deltaY;
      if (!delta) return;
      scroller.scrollLeft += delta;
      event.preventDefault();
      event.stopPropagation();
    }

    document.addEventListener("wheel", onWheel, { capture: true, passive: false });
    return () => document.removeEventListener("wheel", onWheel, { capture: true });
  }, []);

  return null;
}
