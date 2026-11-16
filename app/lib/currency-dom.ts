import { CURRENCY_SYMBOLS, type CurrencyCode } from "./currency";

/**
 * Rewrites the euro amounts in the page's text into another currency, in
 * place. The copy keeps its euros everywhere (data files, JSX, blog content),
 * and this converts what actually reaches the screen, so no price string
 * needs touching.
 *
 * Handles "€490", "€ 290", "€40.83", "€40,83", "€1,500", "€1.500",
 * "€20–45" / "€20 to 45" / "€20 tot 45" (both ends), and a "€" in its own
 * text node next to the number (`€{price}` in JSX). A lone "€" (an input's
 * label) just gets the new symbol. Amounts round to whole units.
 *
 * Leaves alone: <script>, <style>, <code>, form fields, and anything inside
 * `data-no-currency`.
 */

const NUM = String.raw`\d(?:[\d.,]*\d)?`;
const AMOUNT = new RegExp(
  String.raw`€\s?(${NUM})(?:(\s?[–—-]\s?|\s(?:to|tot)\s)(${NUM}))?`,
  "g",
);
const TRAILING_EURO = /€\s?$/;
const LEADING_NUM = new RegExp(String.raw`^(\s*)(${NUM})`);
const SKIP = "script,style,noscript,textarea,code,pre,[data-no-currency]";
const ATTRS = ["aria-label", "title", "alt", "placeholder"] as const;

/**
 * "1,500" and "1.500" are fifteen hundred; "40.83" and "40,83" have cents. A
 * last group of three digits is thousands, of one or two digits decimals.
 */
export function parseEuro(token: string): number {
  const parts = token.split(/[.,]/);
  if (parts.length === 1) return Number(token);
  const last = parts[parts.length - 1];
  if (last.length === 3) return Number(parts.join(""));
  return Number(`${parts.slice(0, -1).join("")}.${last}`);
}

export type Converter = {
  /** Converts the text nodes and attributes under `root`. */
  convertTree: (root: Node) => void;
  /** One string, or null when there is no euro amount in it. */
  convertText: (text: string) => string | null;
};

export function createConverter(
  code: CurrencyCode,
  rate: number,
  numberLocale: () => string,
): Converter {
  const symbol = CURRENCY_SYMBOLS[code];
  const format = (eur: number) =>
    Math.round(eur * rate).toLocaleString(
      code === "INR" ? "en-IN" : numberLocale(),
    );
  /* "€5k" in thousands keeps one decimal ("£4.2k"), or a chart's axis of
     €3k, €4k could read £3k, £3k. */
  const amount = (token: string, thousands = false) => {
    if (!thousands) return format(parseEuro(token));
    const k = Math.round(parseEuro(token) * rate * 10) / 10;
    return k.toLocaleString(code === "INR" ? "en-IN" : numberLocale());
  };
  const isK = (rest: string) => /^k(?![a-z])/i.test(rest);

  const convertText = (text: string): string | null => {
    if (!text.includes("€")) return null;
    const out = text.replace(
      AMOUNT,
      (
        m: string,
        a: string,
        sep: string | undefined,
        b: string | undefined,
        at: number,
      ) => {
        const k = isK(text.slice(at + m.length));
        const from = amount(a, k);
        return `${symbol}${from}${sep && b ? `${sep}${amount(b, k)}` : ""}`;
      },
    );
    return out === text ? null : out;
  };

  const skipped = (node: Node) => {
    const el = node instanceof Element ? node : node.parentElement;
    return (
      !el ||
      !!el.closest(SKIP) ||
      (el instanceof HTMLElement && el.isContentEditable)
    );
  };

  const convertTree = (root: Node) => {
    if (root.nodeType === Node.TEXT_NODE) {
      convertNodes([root as Text]);
      return;
    }
    if (!(root instanceof Element) && root !== document) return;
    if (root instanceof Element && skipped(root)) return;

    const texts: Text[] = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) texts.push(walker.currentNode as Text);
    convertNodes(texts);

    const scope = root as Element | Document;
    const selector = ATTRS.map((a) => `[${a}*="€"]`).join(",");
    const els = [
      ...(root instanceof Element && root.matches(selector) ? [root] : []),
      ...scope.querySelectorAll(selector),
    ];
    for (const el of els) {
      if (skipped(el)) continue;
      for (const attr of ATTRS) {
        const value = el.getAttribute(attr);
        const next = value && convertText(value);
        if (next) el.setAttribute(attr, next);
      }
    }
  };

  const convertNodes = (texts: Text[]) => {
    for (let i = 0; i < texts.length; i++) {
      const node = texts[i];
      if (!node.data.includes("€") || skipped(node)) continue;

      // `€{price}` renders as two text nodes: "€" then "490".
      if (TRAILING_EURO.test(node.data)) {
        const next = nextTextNode(node);
        const lead = next && !skipped(next) && next.data.match(LEADING_NUM);
        if (next && lead) {
          // `€{v}k` puts the "k" in a third node.
          const rest = next.data.slice(lead[0].length);
          const after = rest ? rest : (nextTextNode(next)?.data ?? "");
          next.data = lead[1] + amount(lead[2], isK(after)) + rest;
          node.data = node.data.replace(TRAILING_EURO, symbol);
        } else if (node.data.trim() === "€") {
          node.data = node.data.replace("€", symbol);
          continue;
        }
      }
      const converted = convertText(node.data);
      if (converted) node.data = converted;
    }
  };

  return { convertTree, convertText };
}

/** The next text node in document order, skipping empty ones. */
function nextTextNode(node: Text): Text | null {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  walker.currentNode = node;
  let n = walker.nextNode() as Text | null;
  while (n && !n.data.trim()) n = walker.nextNode() as Text | null;
  return n;
}
