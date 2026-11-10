# Design filter copy

Per-industry copy for the designs listing (`/designs`, `/designs/<industry>`).
Source: `GGR Pages (1).xlsx` → **Design Filter** tab. The "Primary keyword
(+ secondary)" column is intentionally ignored.

When an industry is picked in the filter pill (or `/designs/<industry>` is
opened directly), these change:

| Sheet column           | Where it shows                               | Field in `industry-copy.ts` | Component                 |
| ---------------------- | -------------------------------------------- | --------------------------- | ------------------------- |
| Subheading (eyebrow)   | Small uppercase line above the hero H1 (new) | `headings.eyebrow`          | `DesignsHeroHeading.tsx`  |
| H1 (line 1)            | Hero H1, white                               | `headings.line1`            | `DesignsHeroHeading.tsx`  |
| H1 (line 2)            | Hero H1, lime `#e4fa65`                      | `headings.line2`            | `DesignsHeroHeading.tsx`  |
| Description            | Hero paragraph under the H1                  | `intro` (EN)                | `DesignsHeroIntro.tsx`    |
| Latest designs         | Gallery H2 under the lime filter band        | `headings.latest`           | `TemplatesPageClient.tsx` |

Entries are keyed by the category id used in `CategoryFilter.tsx` and
`design-routes.ts`. The industry's meta `title` and `description` in the same
file are separate (SEO tags) and are not from this sheet.

## Default ("Showing all designs")

No eyebrow. Unchanged:

| Field          | EN                                                                                                                                                             |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Eyebrow        | _(none)_                                                                                                                                                       |
| H1 line 1      | Choose your design.                                                                                                                                            |
| H1 line 2      | Make it yours.                                                                                                                                                 |
| Description    | Explore our professional website designs for small businesses. Pick a style that feels right, and we’ll shape it around your services, story and customers. |
| Latest designs | Latest designs                                                                                                                                                 |

## Per industry (EN)

### Cleaning — id `Cleaning`
- **Eyebrow:** Website design for cleaning companies
- **H1 line 1:** Show your standards.
- **H1 line 2:** Before you walk in.
- **Description:** Show clients what’s included, where you work and why they can trust you. Every cleaning request lands in your Growth Rocket Hub, ready to quote.
- **Latest designs:** See cleaning designs ↓

### Dentist — id `dentist`
- **Eyebrow:** Dentist website design
- **H1 line 1:** Put nervous patients.
- **H1 line 2:** At ease online.
- **Description:** Explain treatments in plain language and make booking easy on any phone. Appointment requests arrive in your Growth Rocket Hub, ready for your team to review.
- **Latest designs:** Explore DentalCare ↓

### Electrician — id `electrician`
- **Eyebrow:** Electrician website design
- **H1 line 1:** Show you’re qualified.
- **H1 line 2:** Before they call.
- **Description:** Put your certifications and past work front and centre, with a quick request form for planned jobs. Every request goes straight to your Growth Rocket Hub for quoting.
- **Latest designs:** See electrician designs ↓

### Logistics — id `logistics`
- **Eyebrow:** Logistics company website design
- **H1 line 1:** Make your capabilities.
- **H1 line 2:** Clear to new clients.
- **Description:** Show what you move, where and how, with a clear way to request a rate. Quote requests are logged in your Growth Rocket Hub, ready for your team to follow up.
- **Latest designs:** See logistics designs ↓

### Physiotherapy — id `physiotherapy`
- **Eyebrow:** Physiotherapy website design
- **H1 line 1:** Make the first appointment.
- **H1 line 2:** The easy part.
- **Description:** Explain your treatments and let patients book an available time online. Each new appointment arrives in your Growth Rocket Hub, with the patient’s details saved automatically.
- **Latest designs:** See physiotherapy designs ↓

### Plumber — id `plumber`
- **Eyebrow:** Plumber website design
- **H1 line 1:** From a dripping tap.
- **H1 line 2:** To a full bathroom.
- **Description:** Give every service, from repairs to new bathrooms, its own clear section and show the areas you cover. Enquiries arrive in your Growth Rocket Hub, where accepted quotes become invoices.
- **Latest designs:** See plumber designs ↓

### Real Estate Consultant — id `real-estate`
- **Eyebrow:** Real estate consultant website design
- **H1 line 1:** Put your market knowledge.
- **H1 line 2:** On display.
- **Description:** Present your services, local expertise and track record, with an easy way to book a consultation. Every enquiry is kept in your Growth Rocket Hub with the client’s details.
- **Latest designs:** See real estate designs ↓

### Salon — id `salon`
- **Eyebrow:** Salon website design
- **H1 line 1:** Let clients book.
- **H1 line 2:** While you’re with a client.
- **Description:** Show your services, prices and team, and let clients book an available time without calling. New bookings arrive in your Growth Rocket Hub, keeping your diary in one place.
- **Latest designs:** See salon designs ↓

### Solar Installation — id `solar`
- **Eyebrow:** Solar installer website design
- **H1 line 1:** Answer the big questions.
- **H1 line 2:** Before the site visit.
- **Description:** Explain your process and products step by step, and let homeowners book a site visit or request a quote. Every request waits in your Growth Rocket Hub, ready for your quote.
- **Latest designs:** See solar designs ↓

## Eyebrow styling

Same as the design detail hero's label (`components/sections/design/DesignHero.tsx`,
`.dc-label`): 11px, weight 600, letter-spacing `.13em`, line-height 1.4,
uppercase, colour `#c3bdcc`, 14px below it on phones and 20px from 701px up.

## Latest designs arrow

The sheet's "↓" is not typed into the heading, so `headings.latest` leaves it
off. It is drawn like the contact CTA's circle: an ink disc with the site's
shared lime `ArrowIcon` (`direction="down"`) inside, styled by `ARROW_DISC` in
`TemplatesPageClient.tsx`. The disc is 1.15× the heading's cap height
(`--disc`), centred on the capitals, 0.2em from the text, with the arrow at
half the disc, so both scale with the heading. The default "Latest designs"
(and "Nieuwste ontwerpen") heading carries the same arrow.

## Notes

- **NL:** the sheet is EN only. Dutch industry pages keep their existing
  per-industry `intro` and the general H1 ("Kies je ontwerp."), with no eyebrow
  and "Nieuwste ontwerpen". Add `headings` to the `nl` entries in
  `industry-copy.ts` once NL copy exists.
- **Salon description:** the sheet's cell has no closing full stop; one is added
  here to match the other eight rows.
- **Filter values:** the sheet's column A lists `real-estate-consultant` and
  `solar-installation` as values, and the label "Salon". The site's URL slugs
  stay `real-estate` / `solar` and the pill label stays "Saloon": neither was
  part of this change.
