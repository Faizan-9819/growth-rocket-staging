/**
 * The rule for every video on the site (the home hero, the YouTube players):
 * it only plays while at least half of it is on screen.
 */

/** Share of a video that has to be on screen for it to play. */
export const PLAY_VISIBLE_SHARE = 0.5;

/**
 * Calls `onChange(true)` while at least half of `el` is on screen and
 * `onChange(false)` while less is: once right away, then each time that
 * changes. Returns the function that stops watching.
 */
export function watchHalfVisible(
  el: Element,
  onChange: (visible: boolean) => void,
): () => void {
  const observer = new IntersectionObserver(
    ([entry]) => onChange(entry.intersectionRatio >= PLAY_VISIBLE_SHARE),
    { threshold: PLAY_VISIBLE_SHARE },
  );
  observer.observe(el);
  return () => observer.disconnect();
}
