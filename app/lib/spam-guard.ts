/**
 * Spam checks shared by the public forms (lead enquiry, booking, partner).
 *
 * Two traps, both invisible to people:
 * - a honeypot field (HoneypotField) that bots fill in and people never see;
 * - a time trap: a person needs more than a few seconds to fill these forms,
 *   a bot submits almost as soon as the form exists.
 *
 * A caught submission pretends to succeed and sends nothing, so the bot gets
 * no signal to adapt to. These checks only stop bots that use the website
 * itself: one that posts straight to the API never runs them, so the API has
 * to check too.
 */

/** Faster than this from opening the form to submitting is a bot. */
export const MIN_FILL_MS = 3000;

export function isLikelyBot({
  honeypot,
  startedAt,
}: {
  /** The honeypot field's value — anything in it is a bot. */
  honeypot: string;
  /** Date.now() when the form opened; 0 if unknown (never counts as fast). */
  startedAt: number;
}): boolean {
  if (honeypot.trim()) return true;
  return startedAt > 0 && Date.now() - startedAt < MIN_FILL_MS;
}
