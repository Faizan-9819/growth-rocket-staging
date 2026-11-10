"use client";

import {
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "framer-motion";
import {
  createContext,
  useContext,
  type CSSProperties,
  type ReactNode,
} from "react";

/* Two interchangeable reveal styles, selected per page via AnimationStyleProvider.

   "simple"  — the repo's original Reveal: fade + 24px rise, 0.7s, no stagger.
               Every element in a group moves together.
   "stagger" — editorial/award-site treatment: children rise, scale from 96%
               and un-blur in sequence, with headlines revealed word by word.

   See app/features/animationStyle.md for the full reference. */

export type AnimationStyle = "simple" | "stagger";

export const ANIMATION_STYLE_DEFAULT: AnimationStyle = "stagger";

const AnimationStyleContext = createContext<AnimationStyle>(
  ANIMATION_STYLE_DEFAULT,
);

export function AnimationStyleProvider({
  value,
  children,
}: {
  value: AnimationStyle;
  children: ReactNode;
}) {
  return (
    <AnimationStyleContext.Provider value={value}>
      {children}
    </AnimationStyleContext.Provider>
  );
}

export function useAnimationStyle() {
  return useContext(AnimationStyleContext);
}

/* ---------- Tunables ---------- */

const SIMPLE = {
  y: 24,
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as const,
  stagger: 0,
  delayStep: 0.08,
};

const STAGGER = {
  y: 34,
  scale: 0.96,
  blur: 8,
  duration: 0.9,
  mediaY: 40,
  mediaScale: 0.94,
  mediaDuration: 1.05,
  ease: [0.16, 1, 0.3, 1] as const,
  stagger: 0.08,
  wordStagger: 0.045,
  wordDuration: 0.85,
};

/* ---------- Variants ---------- */

function groupVariants(
  style: AnimationStyle,
  stagger: number,
  delay: number,
): Variants {
  const step = style === "stagger" ? stagger : SIMPLE.stagger;
  return {
    hidden: {},
    show: { transition: { staggerChildren: step, delayChildren: delay } },
  };
}

function itemVariants(style: AnimationStyle, media: boolean): Variants {
  if (style === "simple") {
    const transition: Transition = {
      duration: SIMPLE.duration,
      ease: SIMPLE.ease,
    };
    return {
      hidden: { opacity: 0, y: SIMPLE.y },
      show: { opacity: 1, y: 0, transition },
    };
  }

  if (media) {
    return {
      hidden: { opacity: 0, y: STAGGER.mediaY, scale: STAGGER.mediaScale },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: STAGGER.mediaDuration, ease: STAGGER.ease },
      },
    };
  }

  return {
    hidden: {
      opacity: 0,
      y: STAGGER.y,
      scale: STAGGER.scale,
      filter: `blur(${STAGGER.blur}px)`,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: STAGGER.duration, ease: STAGGER.ease },
    },
  };
}

/* ---------- Components ---------- */

/* Set by an `eager` RevealGroup: its items reveal through CSS (globals.css,
   `.reveal-eager*`) instead of framer-motion. Holds the group's style. */
const RevealEagerContext = createContext<AnimationStyle | null>(null);

type GroupProps = {
  children: ReactNode;
  className?: string;
  /* Overrides the style's default stagger. Ignored when style is "simple". */
  stagger?: number;
  delay?: number;
  /* How much of the group must be visible before it plays. */
  amount?: number;
  /* For a page's opening section: reveal with a CSS animation that plays
     from the first paint, rather than once JavaScript has loaded and
     hydrated. Same motion, but the server HTML no longer holds the hero at
     opacity 0 until then — which kept it blank (and LCP late) for seconds
     on a phone. */
  eager?: boolean;
};

export function RevealGroup({
  children,
  className,
  stagger = STAGGER.stagger,
  delay = 0,
  amount = 0.2,
  eager = false,
}: GroupProps) {
  const style = useAnimationStyle();
  const reduced = useReducedMotion();

  if (eager) {
    return (
      <RevealEagerContext.Provider value={style}>
        <div
          className={
            style === "simple"
              ? [className, "reveal-eager-simple"].filter(Boolean).join(" ")
              : className
          }
          style={
            {
              "--reveal-delay": `${delay}s`,
              "--reveal-step": `${stagger}s`,
            } as CSSProperties
          }
        >
          {children}
        </div>
      </RevealEagerContext.Provider>
    );
  }

  /* "simple" has no stagger, so the group itself carries the motion — this
     keeps it identical to the original Reveal even if its children are
     wrapped in RevealItem. */
  if (style === "simple") {
    return (
      <motion.div
        className={className}
        variants={itemVariants("simple", false)}
        initial={reduced ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        transition={{ delay }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={groupVariants(style, stagger, delay)}
      initial={reduced ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

type ItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article" | "span" | "p";
  /* Gentler curve for images and video tiles — no blur, longer settle. */
  media?: boolean;
};

export function RevealItem({
  children,
  className,
  as = "div",
  media = false,
}: ItemProps) {
  const style = useAnimationStyle();
  const reduced = useReducedMotion();
  const eager = useContext(RevealEagerContext);
  const Tag = motion[as] as typeof motion.div;

  /* In an eager group the item is plain markup with a CSS reveal class; the
     stagger comes from its position among its siblings (globals.css). Under
     "simple" the eager group itself animates, so the item stays inert. */
  if (eager) {
    const Plain = as;
    const reveal =
      eager === "simple" ? "" : media ? "reveal-eager-media" : "reveal-eager";
    return (
      <Plain className={[className, reveal].filter(Boolean).join(" ")}>
        {children}
      </Plain>
    );
  }

  /* Under "simple" the parent group already animates as one block, so items
     render inert rather than animating twice. */
  if (reduced || style === "simple") {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Tag className={className} variants={itemVariants(style, media)}>
      {children}
    </Tag>
  );
}

/* Per-word headline reveal. Falls back to plain text under "simple". */
export function RevealWords({
  text,
  className,
  accent,
  accentClassName,
}: {
  text: string;
  className?: string;
  accent?: string;
  accentClassName?: string;
}) {
  const style = useAnimationStyle();
  const reduced = useReducedMotion();

  if (reduced || style === "simple") {
    return (
      <span className={className}>
        {text}
        {accent ? <span className={accentClassName}>{accent}</span> : null}
      </span>
    );
  }

  const words = text.trim().split(/\s+/);
  const accentWords = accent ? accent.trim().split(/\s+/) : [];
  const wordVariants: Variants = {
    hidden: { y: "110%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: { duration: STAGGER.wordDuration, ease: STAGGER.ease },
    },
  };

  return (
    <motion.span
      className={className}
      variants={groupVariants(style, STAGGER.wordStagger, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span className="inline-block" variants={wordVariants}>
            {word}
            {" "}
          </motion.span>
        </span>
      ))}
      {accentWords.map((word, index) => (
        <span
          key={`accent-${word}-${index}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className={`inline-block ${accentClassName ?? ""}`}
            variants={wordVariants}
          >
            {word}
            {index < accentWords.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
