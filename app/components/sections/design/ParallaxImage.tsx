"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

/**
 * A still that scrolls inside its frame: the frame keeps its size, while the
 * image behind it is taller and slides up as the page scrolls on, bringing its
 * lower part into view.
 *
 * The image box spans the frame's width at the image's own aspect ratio, so
 * nothing is cropped at the sides, and the frame is never taller than that
 * image allows: its height is capped at the width-fit image's height over
 * MIN_REVEAL, so the image always has that much more to slide through. Between
 * 701 and 1439px the grid cell is taller than that (it stretches to the text
 * column), and the frame sits centred in it rather than filling it; elsewhere
 * the cap is above the cell's height and the frame fills the cell as before.
 * The cap is measured against the cell, which is a size container for that
 * reason. The box's `min-h-[115%]` is the same MIN_REVEAL as a backstop.
 *
 * The width is an explicit `w-full` rather than left/right insets: with an auto
 * width, `aspect-ratio` carries the minimum height across into a minimum width,
 * and the box would grow past the frame's right edge.
 *
 * The slide starts the moment the whole frame is on screen (`end end`, showing
 * the image's top, i.e. the default framing) and keeps going until the frame
 * has scrolled off the top of the viewport (`end start`), so the image moves
 * for as long as any of it is in view. That window is one viewport tall
 * whatever the frame's height, so it always runs forward. The travel is
 * measured, not computed in CSS, because it depends on both heights. Reduced
 * motion keeps the default framing.
 *
 * The dark surround takes its colour from the one baked into the template
 * stills (`cleaning1.jpg`, `dentist.jpg`…), #0e0f11, and its width from the
 * live-preview browser frame further up the page (DesignPreview's `p-[10px]`),
 * on all four sides. The image slides inside it.
 */
const MIN_REVEAL = 1.15;
const FRAME_PAD = 10;

export default function ParallaxImage({
  src,
  width,
  height,
  alt,
  sizes,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  sizes: string;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const travel = useMotionValue(0);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["end end", "end start"],
  });
  const y = useTransform(
    [scrollYProgress, travel],
    ([progress, distance]: number[]) => -progress * distance,
  );

  useEffect(() => {
    const viewport = viewportRef.current;
    const box = boxRef.current;
    if (!viewport || !box) return;
    const measure = () =>
      travel.set(Math.max(0, box.offsetHeight - viewport.clientHeight));
    const ro = new ResizeObserver(measure);
    ro.observe(viewport);
    ro.observe(box);
    return () => ro.disconnect();
  }, [travel]);

  const frameHeight = `min(100cqh, calc((100cqw - ${2 * FRAME_PAD}px) * ${
    height / width / MIN_REVEAL
  } + ${2 * FRAME_PAD}px))`;

  return (
    <div
      style={{ containerType: "size" }}
      className="absolute inset-0 flex items-center"
    >
      <div
        ref={frameRef}
        style={{ height: frameHeight, padding: FRAME_PAD }}
        className="relative w-full overflow-hidden rounded-[13px] bg-[#0e0f11]"
      >
        <div
          ref={viewportRef}
          className="relative h-full w-full overflow-hidden"
        >
          <motion.div
            ref={boxRef}
            style={{
              y: reduceMotion ? 0 : y,
              aspectRatio: `${width} / ${height}`,
            }}
            className="absolute top-0 left-0 w-full min-h-[115%]"
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
