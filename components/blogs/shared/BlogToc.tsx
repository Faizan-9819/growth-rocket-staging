"use client";

import { useEffect, useRef, useState } from "react";
import type { BlogTocEntry } from "@/app/lib/blog-content-types";

export type TocEntry = BlogTocEntry;

export default function BlogToc({
  entries,
  heading = "In this article",
  widthClassName = "lg:w-[196px]",
  visibilityClassName = "hidden lg:block lg:flex-none",
}: {
  entries: TocEntry[];
  /** The label above the links (the legal pages use their own). */
  heading?: string;
  /** The column's width from lg (the legal pages run it wider). */
  widthClassName?: string;
  /** When the column shows (the offer pages hold it back until xl). */
  visibilityClassName?: string;
}) {
  const [activeId, setActiveId] = useState("");
  const entriesRef = useRef(entries);
  entriesRef.current = entries;
  const navRef = useRef<HTMLElement>(null);
  // Whether the list is taller than its column and scrolls on its own.
  const [scrolls, setScrolls] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    // Fires once on observe, then whenever the column's height changes
    // (it is capped to the viewport).
    const observer = new ResizeObserver(() =>
      setScrolls(nav.scrollHeight > nav.clientHeight + 1),
    );
    observer.observe(nav);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function updateActive() {
      const ids = entriesRef.current.map((entry) => entry.id);
      // The active heading is the last one whose top has scrolled past the
      // activation line — walking in document order picks the section
      // currently being read, not just whichever last fired an IO callback.
      const activationLine = 140;
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= activationLine) {
          current = id;
        } else {
          break;
        }
      }
      setActiveId(current);
    }

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  if (entries.length === 0) return null;

  return (
    <aside className={`${visibilityClassName} ${widthClassName}`}>
      {/* A list too long for its column scrolls on its own: data-lenis-prevent
          hands the wheel to it instead of Lenis's page scroll, and
          overscroll-contain stops the scroll carrying on into the page at
          either end. A list that fits leaves both off, so the wheel over it
          still scrolls the page. */}
      <nav
        ref={navRef}
        data-lenis-prevent={scrolls || undefined}
        className={`toc-scroll sticky top-[104px] flex max-h-[calc(100vh-128px)] flex-col overflow-y-auto pr-2 ${scrolls ? "overscroll-contain" : ""}`}
      >
        <div className="mb-3.5 font-poppins text-[11px] font-semibold uppercase tracking-[1.2px] text-[var(--color-dolphin)]">
          {heading}
        </div>
        {entries.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            // The site-wide hash scroll (LenisProvider) glides to the section.
            className={[
              "block border-l-2 py-1.5 pl-3.5 font-poppins text-[14px] leading-relaxed transition-colors",
              activeId === id
                ? "border-[var(--color-violet-42)] font-semibold text-[var(--color-haiti)]"
                : "border-transparent text-[var(--color-dolphin)] hover:text-[var(--color-haiti)]",
            ].join(" ")}
            dangerouslySetInnerHTML={{ __html: label }}
          />
        ))}
      </nav>
    </aside>
  );
}
