/**
 * Ids of home page sections that links elsewhere jump to. Kept in their own
 * module so the Navbar (on every page) can import them without pulling in the
 * home sections themselves.
 */

/** The audience section, which the navbar's "Who It’s For" link targets — in
    each page's own language ("voor wie" is Dutch for "who for"). */
export const AUDIENCE_ANCHOR = { en: "who-its-for", nl: "voorwie" } as const;
