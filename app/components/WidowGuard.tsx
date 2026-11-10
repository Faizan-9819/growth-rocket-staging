"use client";

import { useEffect } from "react";
import { analyze, containersIn, glue, unglueAll } from "../lib/widows";

/**
 * Keeps any line of text from holding a single word (see lib/widows for the
 * rule and what is left alone on purpose).
 *
 * Where a single-word line shows up at the current width, the word ending the
 * line above is joined to it with a non-breaking space, so the two move down
 * together: "Bring your website and" / "customer" becomes "Bring your
 * website" / "and customer". It only acts where such a line actually occurs,
 * and only when the pair fits, so every other line keeps its natural wrap and
 * nothing overflows. Each pass starts from the plain text again, so a resize
 * never leaves an old fix behind; it runs once the page is up, when the web
 * fonts are in, on resize, and wherever the content changes (language switch,
 * tabs, menus).
 *
 * (CSS `text-wrap: pretty` is deliberately not used: browsers treat it as a
 * hint and rebalance lines unpredictably — Chrome turned "customer" /
 * "management together." into "customer management" / "together." — so the
 * layout stays the natural one and only real single-word lines change.)
 *
 * Add `?widows` to any URL to also run the checker (lib/widow-check): it
 * outlines every single-word line still on the page and lists them in the
 * console. It is only fetched when asked for, so visitors never load it.
 */

/** Fixes run in rounds — each fix moves the lines below it, so a block is
    measured again until it has none left (or this many rounds pass). */
const MAX_ROUNDS = 10;

export default function WidowGuard() {
  useEffect(() => {
    let observer: MutationObserver | null = null;
    // With ?widows, what each pass did, for the checker and tests to read.
    const trace: string[] | null = new URLSearchParams(
      window.location.search,
    ).has("widows")
      ? []
      : null;

    const sync = (containers: Iterable<HTMLElement>) => {
      const list = [...containers].filter((c) => c.isConnected);
      list.forEach(unglueAll); // start from the plain text
      // Single-word lines each fixed block had when it first needed a fix,
      // to judge the result by.
      const before = new Map<HTMLElement, number>();
      const touched = new Set<HTMLElement>();
      // Every round looks at every block again, not just the ones it fixed:
      // a fix can move lines elsewhere too (a grid column sized by its
      // content narrows once a pair inside it can't break), so a block that
      // was fine can need one after its neighbour's. Stops once a round
      // changes nothing.
      for (let round = 0; round < MAX_ROUNDS; round++) {
        // All reads first, then all writes, so each round lays out once.
        const fixes: [HTMLElement, Parameters<typeof glue>[0]][] = [];
        for (const c of list) {
          const { runts, singles } = analyze(c);
          const runt = runts.find((r) => r.fixable);
          if (!runt) continue;
          // Judged against how it looked when it first needed a fix.
          if (!before.has(c)) before.set(c, singles);
          fixes.push([c, runt.gap]);
        }
        if (!fixes.length) break;
        fixes.forEach(([c, gap]) => {
          glue(gap);
          touched.add(c);
        });
        trace?.push(
          ...fixes.map(([c]) => `round ${round}: glued in "${c.textContent?.slice(0, 50)}"`),
        );
      }
      // Keep a block's fixes only if they left it with fewer single-word
      // lines; a chain that couldn't finish goes back to the natural wrap.
      const worse = [...touched].filter(
        (c) => analyze(c).singles >= (before.get(c) ?? 0),
      );
      worse.forEach(unglueAll);
      trace?.push(
        ...worse.map((c) => `undone in "${c.textContent?.slice(0, 50)}"`),
      );
      observer?.takeRecords(); // our own edits are not news
    };
    const syncAll = () => {
      const all = new Set<HTMLElement>();
      containersIn(document.body, all);
      sync(all);
    };

    let pending = new Set<HTMLElement>();
    let mutationTimer: number | undefined;
    observer = new MutationObserver((records) => {
      for (const record of records) {
        containersIn(record.target, pending);
        record.addedNodes.forEach((n) => containersIn(n, pending));
      }
      window.clearTimeout(mutationTimer);
      mutationTimer = window.setTimeout(() => {
        const batch = pending;
        pending = new Set();
        sync(batch);
      }, 120);
    });

    let resizeTimer: number | undefined;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(syncAll, 150);
    };

    const start = window.setTimeout(() => {
      syncAll();
      observer?.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true,
      });
      document.fonts?.ready.then(syncAll);
      if (new URLSearchParams(window.location.search).has("widows")) {
        // Lets the checker (or a test) run a pass on demand.
        Object.assign(window, { __widowSync: syncAll, __widowTrace: trace });
        import("../lib/widow-check").then(({ runWidowCheck }) =>
          runWidowCheck(),
        );
      }
    }, 0);
    window.addEventListener("resize", onResize);

    return () => {
      window.clearTimeout(start);
      window.clearTimeout(mutationTimer);
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      observer?.disconnect();
    };
  }, []);

  return null;
}
