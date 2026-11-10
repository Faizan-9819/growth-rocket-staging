# Design filter: industry headings — changes

Ported from the `ggrstaging` repo (commit `bb57061` there), fitted to this
repo's existing per-industry copy instead of copied file for file.

On the designs listing (`/designs`, `/designs/<industry>`), picking an industry
in the filter pill now also swaps the hero H1, adds an eyebrow above it, uses
the sheet's hero description and changes the gallery heading. Copy comes from
`GGR Pages (1).xlsx` → **Design Filter**; the full copy is in
[design-filter-copy.md](design-filter-copy.md).

## What the visitor sees

| Element               | Default ("Showing all designs")   | Industry picked (EN)                            |
| --------------------- | --------------------------------- | ----------------------------------------------- |
| Eyebrow (new)         | Not shown                         | e.g. "ELECTRICIAN WEBSITE DESIGN"               |
| H1, white line        | Choose your design.               | e.g. "Show you’re qualified."                   |
| H1, lime line         | Make it yours.                    | e.g. "Before they call."                        |
| Hero description      | Explore our professional website… | The sheet's description for the industry        |
| Gallery heading       | Latest designs                    | e.g. "See electrician designs" + arrow circle   |

Dutch pages: unchanged. They keep their per-industry intro, the general H1,
no eyebrow and "Nieuwste ontwerpen".

## Files

| File                                                     | Change   | What                                                                                   |
| -------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------- |
| [industry-copy.ts](industry-copy.ts)                     | Modified | New optional `headings` (EN entries); EN `intro` replaced with the sheet's description |
| [DesignsHeroHeading.tsx](DesignsHeroHeading.tsx)         | New      | Client component: eyebrow + H1, follows the URL like `DesignsHeroIntro`                |
| [DesignsHero.tsx](DesignsHero.tsx)                       | Modified | Renders `DesignsHeroHeading` in place of its static H1; stays a server component      |
| [TemplatesPageClient.tsx](TemplatesPageClient.tsx)       | Modified | Industry gallery heading and the arrow circle                                          |
| [ArrowIcon.tsx](../components/ui/ArrowIcon.tsx)          | Modified | `size` also accepts a CSS length string                                                |
| design-filter-copy.md, design-filter-changes.md          | New      | Documentation only                                                                     |

## Untouched on purpose

- Meta `title` / `description` per industry and `LISTING_COPY` (page metadata,
  `ListingHeadSync`, JSON-LD) — same values as before.
- All NL entries in `industry-copy.ts`.
- `DesignsHeroIntro.tsx`, `ListingHeadSync.tsx`, `DesignsListing.tsx`,
  `CategoryFilter.tsx`, `design-routes.ts`, the page routes and `globals.css`.

## How it works

- **Data:** `IndustryCopy` gained `headings?: { eyebrow, line1, line2, latest }`,
  filled for the 9 EN entries. NL entries have none, so they fall back to the
  general copy. The hero paragraph already came from `intro`, so the sheet's
  description replaced the EN `intro` values (the previous EN intros are in
  git history).
- **Selected industry:** `DesignsHeroHeading` reads it from the URL with
  `categoryFromDesignsPath(usePathname())`, exactly like `DesignsHeroIntro`, so
  it follows the filter's `pushState` and renders on the server for
  `/designs/<industry>`.
- **Gallery heading:** `TemplatesPageClient` looks up
  `getIndustryCopy(selectedCategory, locale)?.headings` and renders `latest`
  followed by the arrow circle (`ARROW_DISC`; see design-filter-copy.md).
- **ArrowIcon:** a number `size` is still px; a string is used as-is for
  `--arrow-size`. Existing callers pass numbers and are unaffected.

## How to edit

- **Change copy:** `industry-copy.ts` (keep design-filter-copy.md in step).
- **Add NL headings:** add `headings` to the `nl` entries; no component changes.
- **Resize the arrow circle:** `ARROW_DISC` in `TemplatesPageClient.tsx` —
  `--disc` (circle + arrow), the `0.5` in the arrow `size` (arrow only),
  `marginLeft` (gap).

## Checked

- All 45 EN values (eyebrow, H1 lines, description, heading × 9) compared
  programmatically against the ggrstaging version: identical.
- `git diff` reviewed: the only removed data lines are the 9 old EN intros.
- `tsc --noEmit` on the whole repo: 0 errors. ESLint clean on the changed files.
- Not yet viewed in a browser in this repo.
