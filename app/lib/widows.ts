/**
 * Line analysis shared by WidowGuard, which fixes single-word lines, and the
 * `?widows` checker (lib/widow-check), which reports what is left — so the
 * two can never disagree about what counts.
 *
 * The rule: no line of a text block holds a single word, wherever it falls —
 * the last line ("Less to think" / "about.") or one in the middle ("Bring
 * your website and" / "customer" / "management together."). The fix pulls
 * the word that ends the line above down with it ("and customer").
 *
 * Pulling a word off a two-word line strands the other one, which the next
 * round then fixes from the line above that ("customer management" /
 * "together." → "and customer" / "management together."). WidowGuard keeps
 * a block's fixes only when they leave it with fewer single-word lines than
 * it started with, so a chain that can't finish is undone.
 *
 * Left alone:
 * - a forced break: <br>, or a block element inside the text — "Your
 *   questions<br>answered." is the design;
 * - a word under a two-word first line ("Your questions" / "answered." when
 *   it wraps there by itself): pulling one down would strand the other with
 *   nothing above to fix it, so that is already the best this width allows;
 * - the first line of a block or of a forced segment (there is nothing above
 *   it to pull down).
 *
 * A dash, dot or "&" keeps a word company ("Maintenance" / "& updates" is
 * fine); a trailing arrow or asterisk does not ("voor" / "Elektriciens →"
 * still needs "voor" pulled down).
 */

export const NBSP = " ";
/** Zero-width and unbreakable: stands in for the extra characters of a gap
    that was several spaces long, so offsets never shift. */
const JOINER = "⁠";
export const SKIP =
  "script, style, noscript, svg, template, textarea, pre, code, [contenteditable]";
const REAL = /[\p{L}\p{N}]/u;

export type Pos = { node: Text; index: number };

type Box = { first: DOMRect; last: DOMRect; width: number };
export type Token = {
  /** The token's text, or null for an inline box (button, inline-block). */
  text: string | null;
  real: boolean;
  chars: Pos[];
  parent: Element;
  el?: Element;
  box?: Box;
};
/** The space between tokens[i] and tokens[i + 1]. */
export type Gap = { spaces: Pos[]; forced: boolean };

export type Runt = {
  /** The line's text — the word left on its own. */
  word: string;
  /** Gap to glue: between the line's first token and the one before it. */
  gap: Gap;
  /** False when the pair is too wide to share a line, or no line above has
      a word to spare (pulling one down would only strand another). */
  fixable: boolean;
};

/** The element whose line boxes a node sits in: its nearest non-inline
    ancestor. */
export function lineContainer(node: Node): HTMLElement | null {
  let el = node.parentElement;
  while (el && getComputedStyle(el).display === "inline") el = el.parentElement;
  return el;
}

/** Every line container under `root` (and the one `root` itself sits in). */
export function containersIn(root: Node, into: Set<HTMLElement>) {
  if (root.nodeType === Node.TEXT_NODE) {
    const c = lineContainer(root);
    if (c) into.add(c);
    return;
  }
  if (!(root instanceof Element) || root.closest(SKIP)) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    if (!node.data.trim() || node.parentElement?.closest(SKIP)) continue;
    const c = lineContainer(node);
    if (c) into.add(c);
  }
  const own = lineContainer(root);
  if (own) into.add(own);
}

/** The words (and inline boxes) that wrap in `container` itself, in order,
    with the gaps between them. */
export function tokenize(container: HTMLElement) {
  const tokens: Token[] = [];
  const gaps: Gap[] = [];
  let spaces: Pos[] = [];
  let forced = false;
  let cur: Token | null = null;

  const push = (token: Token) => {
    if (tokens.length) gaps.push({ spaces, forced });
    tokens.push(token);
    spaces = [];
    forced = false;
  };
  const end = () => {
    if (cur) push({ ...cur, real: REAL.test(cur.text!) });
    cur = null;
  };
  const visit = (parent: Node) => {
    for (const child of parent.childNodes) {
      if (child.nodeType === Node.TEXT_NODE) {
        const node = child as Text;
        for (let i = 0; i < node.data.length; i++) {
          const ch = node.data[i];
          if (/\s/.test(ch) || ch === JOINER) {
            end();
            if (tokens.length) spaces.push({ node, index: i });
          } else {
            cur ??= { text: "", real: false, chars: [], parent: node.parentElement! };
            cur.chars.push({ node, index: i });
            cur.text += ch;
          }
        }
        continue;
      }
      if (!(child instanceof Element)) continue;
      if (child.matches(SKIP)) {
        // Inline code is text on the line, so it keeps a word company; an
        // icon (svg) or a script is not.
        if (child.matches("code, kbd") && getComputedStyle(child).display !== "none") {
          end();
          push({ text: null, real: true, chars: [], parent: child, el: child });
        }
        continue;
      }
      if (child.tagName === "BR") {
        // A <br> hidden at this width (`max-lg:hidden`) breaks nothing.
        if (getComputedStyle(child).display !== "none") {
          end();
          forced = true;
        }
        continue;
      }
      const display = getComputedStyle(child).display;
      if (display === "none") continue;
      if (display === "inline" || display === "contents") {
        visit(child);
        continue;
      }
      end();
      if (display.startsWith("inline")) {
        push({ text: null, real: true, chars: [], parent: child, el: child });
      } else {
        forced = true; // a block inside the text breaks the line
      }
    }
  };
  visit(container);
  end();
  return { tokens, gaps };
}

function measure(token: Token): Box | undefined {
  if (token.el) {
    const r = token.el.getBoundingClientRect();
    return r.width > 0 ? { first: r, last: r, width: r.width } : undefined;
  }
  const a = token.chars[0];
  const b = token.chars[token.chars.length - 1];
  const range = document.createRange();
  range.setStart(a.node, a.index);
  range.setEnd(b.node, b.index + 1);
  const rects = [...range.getClientRects()].filter((r) => r.width > 0);
  if (!rects.length) return undefined;
  return {
    first: rects[0],
    last: rects[rects.length - 1],
    width: rects.reduce((sum, r) => sum + r.width, 0),
  };
}

/**
 * The single-word lines in `container` as it is laid out right now. Reads
 * layout only. `runts` are the ones to fix or report; `singles` counts every
 * single-word line, the ones left alone on purpose included, so the guard can
 * tell whether its fixes left a block better off.
 */
export function analyze(container: HTMLElement): {
  runts: Runt[];
  singles: number;
} {
  const none = { runts: [], singles: 0 };
  const style = getComputedStyle(container);
  if (style.whiteSpace === "nowrap" || style.whiteSpace === "pre") return none;
  const available =
    container.clientWidth -
    parseFloat(style.paddingLeft) -
    parseFloat(style.paddingRight);
  if (available <= 0) return none;

  const { tokens, gaps } = tokenize(container);
  if (tokens.filter((t) => t.real).length < 2) return none;
  // One line, nothing to do: compare the first and last token only.
  const head = measure(tokens[0]);
  const tail = measure(tokens[tokens.length - 1]);
  if (!head || !tail) return none;
  if (tail.last.top < head.first.bottom - head.first.height / 2) return none;

  for (const t of tokens) t.box = measure(t);
  if (tokens.some((t) => !t.box)) return none; // partly hidden

  // Lines, as lists of token indexes.
  const lines: number[][] = [];
  tokens.forEach((t, i) => {
    const open = lines[lines.length - 1];
    const prev = open ? tokens[open[open.length - 1]] : null;
    const newLine =
      !prev ||
      gaps[i - 1].forced ||
      t.box!.first.top >= prev.box!.last.bottom - prev.box!.last.height / 2;
    if (newLine) lines.push([i]);
    else lines[lines.length - 1].push(i);
  });

  /** True when line `l` starts a block or a forced segment. */
  const opens = (l: number) => l === 0 || gaps[lines[l][0] - 1].forced;
  /** Words on line `l` (inline boxes such as buttons aren't words). */
  const wordsOn = (l: number) =>
    lines[l].filter((i) => tokens[i].text !== null && tokens[i].real).length;

  const space = parseFloat(style.fontSize) * 0.3;
  const runts: Runt[] = [];
  let singles = 0;
  for (let l = 1; l < lines.length; l++) {
    if (opens(l)) continue;
    const ids = lines[l];
    // A button or other inline box keeps the line company.
    if (ids.some((i) => tokens[i].text === null)) continue;
    const first = tokens[ids[0]];
    const gap = gaps[ids[0] - 1];
    const words = wordsOn(l);
    if (words >= 2 || (words === 1 && !first.real)) continue;
    singles++;

    // A two-word first line above: taking a word would strand the other with
    // nothing above it to fix that — already the best this width allows
    // ("Your questions" / "answered.").
    if (wordsOn(l - 1) === 2 && opens(l - 1)) continue;

    // Somewhere up the chain a line must have a word to spare (three or
    // more): every two-word line on the way gives one and takes one from the
    // line above it. A one-word line, or a two-word line that opens the
    // block, ends the chain — then pulling only strands another word.
    let spare = false;
    for (let k = l - 1; k >= 0; k--) {
      const n = wordsOn(k);
      if (n >= 3) {
        spare = true;
        break;
      }
      if (n <= 1 || opens(k)) break;
    }

    const before = tokens[ids[0] - 1];
    const lineWidth =
      ids.reduce((sum, i) => sum + tokens[i].box!.width, 0) +
      (ids.length - 1) * space;
    const fixable =
      spare &&
      before.text !== null &&
      first.text !== null &&
      gap.spaces.length > 0 &&
      before.box!.width + space + lineWidth <= available - 1;

    runts.push({
      word: ids.map((i) => tokens[i].text ?? "▢").join(" "),
      gap,
      fixable,
    });
  }
  return { runts, singles };
}

/* The gaps the guard glued, so it only ever turns its own non-breaking
   spaces back — never one the copy put there (FeatureReveal's word spans,
   an address line). */
const ours = new WeakMap<Text, Set<number>>();

function setChar({ node, index }: Pos, ch: string) {
  node.data = node.data.slice(0, index) + ch + node.data.slice(index + 1);
}

/** Makes a gap unbreakable. */
export function glue(gap: Gap) {
  gap.spaces.forEach((pos, i) => {
    setChar(pos, i === 0 ? NBSP : JOINER);
    const mine = ours.get(pos.node) ?? new Set<number>();
    mine.add(pos.index);
    ours.set(pos.node, mine);
  });
}

/** Turns every gap the guard glued in `container`'s own text back into a
    space — not in blocks nested inside it, which are judged on their own. */
export function unglueAll(container: HTMLElement) {
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    const mine = ours.get(node);
    if (!mine?.size || lineContainer(node) !== container) continue;
    for (const index of mine) {
      const ch = node.data[index];
      if (ch === NBSP || ch === JOINER) setChar({ node, index }, " ");
    }
    mine.clear();
  }
}
