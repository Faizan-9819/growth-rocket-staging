/**
 * Widow checker — loaded by WidowGuard only when the URL has `?widows`.
 *
 * Lists every line still holding a single word, using the same rule as the
 * guard (lib/widows): forced breaks (<br>) and a word under a two-word line
 * ("Your questions" / "answered.") are the design and are not reported.
 * Resize the window and it checks again.
 *
 * `fixable: false` (orange) marks one the guard can't solve: the word and the
 * one before it are too wide to share a line, or no line above has a word to
 * spare (a narrow box of one- and two-word lines). Those need a copy or size
 * change. A red outline
 * (`fixable: true`) is one the guard tried and undid: every way of pulling a
 * word down stranded another ("of" down leaves "inspectierapporten" alone,
 * and that word is too long to take one more). It needs a copy or size
 * change too.
 */

import { analyze, containersIn } from "./widows";

export type Widow = {
  /** The text of the single-word line. */
  word: string;
  /** The block's text, trimmed to 120 characters. */
  text: string;
  /** Nearest section heading, to find it on the page. */
  section: string;
  fixable: boolean;
  element: HTMLElement;
};

function sectionLabel(el: HTMLElement): string {
  const section = el.closest("section, header, footer, nav, aside, [role=dialog]");
  if (!section) return "";
  const heading = section.querySelector("h1, h2, h3");
  const name = heading?.textContent?.trim().replace(/\s+/g, " ").slice(0, 60);
  return name || section.getAttribute("aria-label") || section.tagName.toLowerCase();
}

export function findWidows(root: HTMLElement = document.body): Widow[] {
  const containers = new Set<HTMLElement>();
  containersIn(root, containers);
  const widows: Widow[] = [];
  for (const element of containers) {
    if (!element.checkVisibility()) continue;
    for (const runt of analyze(element).runts) {
      widows.push({
        word: runt.word,
        text: element.innerText.replace(/\s+/g, " ").trim().slice(0, 120),
        section: sectionLabel(element),
        fixable: runt.fixable,
        element,
      });
    }
  }
  return widows;
}

/** Outlines every single-word line's block — red when the guard should have
    fixed it, orange when it can't — and lists them in the console. */
export function runWidowCheck() {
  const marked = new Set<HTMLElement>();
  const check = () => {
    marked.forEach((el) => (el.style.outline = ""));
    marked.clear();
    const widows = findWidows();
    for (const { element, fixable } of widows) {
      element.style.outline = `2px dashed ${fixable ? "#e5484d" : "#f5a524"}`;
      marked.add(element);
    }
    console.info(`[widows] ${widows.length} at ${window.innerWidth}px`);
    if (widows.length)
      console.table(
        widows.map(({ word, section, fixable, text }) => ({
          word,
          section,
          fixable,
          text,
        })),
      );
    return widows;
  };

  // `__findWidows()` returns plain data, so a test runner can read it;
  // `__widowDebug("some text")` shows how the block holding it is read.
  Object.assign(window, {
    __findWidows: () =>
      findWidows().map(({ word, section, fixable, text }) => ({
        word,
        section,
        fixable,
        text,
      })),
    __widowDebug: (needle: string) => {
      const all = new Set<HTMLElement>();
      containersIn(document.body, all);
      const el = [...all].find((c) =>
        [...c.childNodes].some((n) => n.textContent?.includes(needle)),
      );
      if (!el) return null;
      const { runts, singles } = analyze(el);
      return {
        tag: el.tagName,
        singles,
        runts: runts.map((r) => ({ word: r.word, fixable: r.fixable })),
      };
    },
  });

  check();
  let timer: number | undefined;
  window.addEventListener("resize", () => {
    window.clearTimeout(timer);
    // After WidowGuard's own pass (150ms), so it reports what is left.
    timer = window.setTimeout(check, 400);
  });
}
