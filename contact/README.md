# Contact details

Every Growth Rocket contact detail on the site is set in this folder. Change
it here and every page follows: navbar, footer, contact page, WhatsApp
button, pricing FAQ, legal pages and `llms.txt`.

| File        | Holds                                                     |
| ----------- | --------------------------------------------------------- |
| `phones.ts` | Phone / WhatsApp numbers per country                      |
| `index.ts`  | Company name, address, emails, social links, link helpers |

## Phone numbers

| Country               | Number          |
| --------------------- | --------------- |
| Netherlands (default) | +31 85 744 4176 |
| United Arab Emirates  | +971 558554594  |
| India                 | +91 8108270911  |

Every other country sees the Netherlands number. Each number is used for
both calls (`tel:`) and WhatsApp (`wa.me`).

- **Change a number:** edit it in `phones.ts`.
- **Add a country:** add a line to `PHONES` in `phones.ts` with its ISO
  country code, e.g. `DE: "+49 …"`. Nothing else needs changing.
- **Change the default:** set `DEFAULT_PHONE_REGION` in `phones.ts`.

## How the site uses it

- `proxy.ts` reads the visitor's country (Vercel's `x-vercel-ip-country`
  header, or `?country=XX` when testing, same as pricing) and stores it in the
  `ggr_phone_region` cookie when that country has its own number.
- Client components call `useContactPhone()`
  (`app/components/useContactPhone.ts`) for the number to show. Pages render
  the main number on the server, then switch to the visitor's number once
  loaded, so pages stay static.
- Use `phoneHref(phone)` and `whatsappHref(phone)` for links, never a typed
  number.
- The legal pages (imprint, privacy policy, terms) always show the main
  number (`CONTACT_INFO.phone`), as the registered company's number.

## Testing

Open any URL with `?country=AE`, `?country=IN` or `?country=NL` (any other
code shows the Netherlands number). `?country=auto` goes back to the IP.
