"use client";
import { useEffect, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";

/**
 * Autoplay for home2's looping Embla carousels (Examples, BlogTeaser):
 * advance one slide every `delay` ms, only ever forward (right to left).
 *
 * The timer restarts on every `select` — whether that came from autoplay, an
 * arrow or a drag — and on `pointerDown`, so a manual move always gets a full
 * interval before the strip moves on its own again.
 *
 * Returns hover handlers for the viewport: the strip pauses while the pointer
 * is over it, so a card being read (or hovered for its lime flip) doesn't
 * slide away underneath the cursor.
 */
export function useCarouselAutoplay(
  emblaApi: EmblaCarouselType | undefined,
  delay = 5000,
) {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!emblaApi || paused) return;
    let timer: ReturnType<typeof setTimeout>;
    const schedule = () => {
      clearTimeout(timer);
      timer = setTimeout(() => emblaApi.scrollNext(), delay);
    };
    schedule();
    emblaApi.on("select", schedule);
    emblaApi.on("pointerDown", schedule);
    return () => {
      clearTimeout(timer);
      emblaApi.off("select", schedule);
      emblaApi.off("pointerDown", schedule);
    };
  }, [emblaApi, paused, delay]);

  return {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
  };
}
