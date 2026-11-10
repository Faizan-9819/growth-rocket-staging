# Trim & Trend design page — content update reference

| | |
| --- | --- |
| **Source** | `Trim & Trend — Hair Salon Design Page Copy.docx` (16 October 2026) |
| **English page** | `/designs/trim-and-trend-hair-salon-website` (was `/design/salon/trim-and-trend`, which now redirects) |
| **Dutch page** | `/nl/ontwerpen/kapsalon/trim-and-trend` |
| **Scope** | This page only, both languages. |

**Where the copy lives in the code**

- Trim & Trend's own copy (sections 0–5 and 9–11), English and Dutch: `app/components/sections/design/page-copy/trim-and-trend.ts`
- Shared master copy (sections 6–8), English and Dutch: `app/components/sections/design/page-copy/master.ts`
- Which templates use approved copy: `app/components/sections/design/page-copy/index.ts`
- The page's own URL: `CUSTOM_DETAIL_PATHS` in `app/designs/design-routes.ts`

**Before this update, the Dutch page showed English text in every section.** Only its links, canonical URL and
`lang` attribute were Dutch. So the "Current" column below applies to both pages.

How to read the tables:

- **Current** is the text the page rendered before this update (captured from the running site).
- **New EN** and **New NL** are copied word for word from the document's "Final copy" / "Definitieve tekst" columns.
- `<br>` marks a line break inside a heading or a card.
- "Same" means the new text is identical to the current text.

---

## 0. Search content

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| SEO title | Trim & Trend \| Hair Salon Website Design & Business Tools \| Growth Rocket | Hair Salon Website Design \| Trim & Trend \| Growth Rocket | Website voor kappers \| Trim & Trend |
| Meta description | Explore Trim & Trend: a professional hair salon website design with appointments, enquiries, Growth Rocket Hub and ongoing technical support. Built for salons and stylists. | Explore Trim & Trend, a website design for hair salons and barbers, with Growth Rocket Hub, hosting, maintenance and support. View the design and pricing. | Ontdek Trim & Trend: een website voor kappers en barbershops, met Growth Rocket Hub, hosting, onderhoud en ondersteuning. Bekijk het ontwerp en de prijzen. |
| Primary topic | — | hair salon website design | Website voor kappers |
| Focus | — | Service menus, salon atmosphere and appointment enquiries | Behandelingen, sfeer en afspraakaanvragen |
| Final URL (EN) | `/design/salon/trim-and-trend` | https://www.getgrowthrocket.com/designs/trim-and-trend-hair-salon-website | Gebruik de vastgestelde Nederlandse URL-structuur en wederzijdse taalverwijzingen. |

---

## 1. Hero

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Label | Website design for salons and stylists | Website design for hair salons and barbers | Websiteontwerp voor kappers en barbershops |
| H1 line 1 | Trim & Trend. | Same | Trim & Trend. |
| H1 line 2 | A stylish booking site for salons and stylists. | Let your next client get a feel for your salon. | Laat nieuwe klanten kennismaken met jouw salon. |
| Description | A professional website for your salon. A complete business system with Growth Rocket Hub. All maintained for you. | Show your style, explain your services and help clients take the next step towards an appointment. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system. | Laat je stijl zien, maak je behandelingen duidelijk en help klanten de stap naar een afspraak te zetten. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |

---

## 2–3. Breadcrumb and preview

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Breadcrumb | All designs / Trim & Trend | Same | Alle ontwerpen / Trim & Trend |
| Device controls | Desktop · Tablet · Mobile | Same | Computer · Tablet · Mobiel |
| Preview link | Preview in browser | Same | Bekijk in je browser |
| Primary CTA | Start with this design | Same | Kies dit ontwerp |
| Browser label | — (not shown) | Trim & Trend · Design preview | Trim & Trend · Websitevoorbeeld |
| Preview caption | Live preview of the design. Open it in a browser to explore every section. Example branding and content are replaced with your own details. | Explore Trim & Trend using Maison Noir as the example business. We adapt the branding, services and content to your business. | Bekijk Trim & Trend met Maison Noir als voorbeeldbedrijf. We stemmen de huisstijl, diensten en inhoud af op jouw bedrijf. |
| Destinations | https://saloon-template-web.vercel.app/ · CTA `#package` | https://saloon-template-web.vercel.app/<br>Primary CTA: #package | https://saloon-template-web.vercel.app/<br>Primaire knop: #package |

---

## 4. Benefits

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Build confidence.<br>Before the first visit. | Make choosing your salon feel easier. | Maak de keuze voor jouw salon makkelijker. |
| Intro | Choosing a salon is personal. Trim & Trend gives prospective clients a clear picture of your salon and a simple way to take the next step. | Before booking, clients want to see your work, understand the price and know who will welcome them. Give those questions a clear place on your website. | Voordat klanten boeken, willen ze je werk zien, weten wat een behandeling kost en kennismaken met het team. Geef die vragen een duidelijke plek op je website. |
| Card 1 title | Make your services easy to understand. | Show the work they come for | Laat je werk zien |
| Card 1 body | Give each of your services a clear introduction, so clients can find what matters to them without a phone call first. | Use a gallery of your own cuts, colour work or beard styling to show the services and styles your salon offers. | Toon eigen foto’s van kapsels, kleurbehandelingen of baardverzorging. Zo krijgen klanten een goed beeld van jouw stijl en aanbod. |
| Card 2 title | Introduce the people behind the work. | Make your menu easy to compare | Maak je prijslijst overzichtelijk |
| Card 2 body | Show your team, their experience and how you work, so an unfamiliar salon feels more approachable. | Explain each service, its starting price and what is included. Where a consultation is needed, make that clear before clients request an appointment. | Leg per behandeling uit wat erbij hoort en wat de vanafprijs is. Is eerst een adviesgesprek nodig? Vertel dat voordat iemand een afspraak aanvraagt. |
| Card 3 title | Let genuine feedback build trust. | Introduce the people behind the chair | Stel je team voor |
| Card 3 body | Create space for your own client testimonials and credentials, alongside the story of your salon. | Let clients meet your stylists or barbers through photographs, specialisms and a short personal introduction. | Laat klanten kennismaken met je kappers of barbiers via foto’s, specialisaties en een korte persoonlijke introductie. |
| Card 4 title | Make the next step feel simple. | Make the next step obvious | Maak een afspraak makkelijk |
| Card 4 body | Keep booking prompts, enquiry forms and contact details easy to find, including on a phone. | Keep opening hours, your address and appointment options easy to find, especially when someone is browsing on their phone. | Zorg dat openingstijden, adres en afspraakmogelijkheden snel te vinden zijn, ook op een telefoon. |

---

## 5. Personalisation

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Your salon. Your identity.<br>Your website. | Your salon. Your style. Your website. | Jouw salon. Jouw stijl. Jouw website. |
| Intro | The design is your starting point. We shape the website around the people, services and details that make your salon yours. | We shape Trim & Trend around the way your salon works, from a single-chair studio to a salon with several stylists. | We stemmen Trim & Trend af op jouw salon: van een zelfstandige kapper tot een zaak met meerdere medewerkers. |
| List 1 | Your logo, colours and salon story | Your logo, colours and salon photographs. | Je logo, kleuren en foto’s van de salon. |
| List 2 | Your services and service information | Your actual treatments, prices, durations and consultation requirements. | Je behandelingen, prijzen, tijdsduur en eventuele adviesgesprekken. |
| List 3 | Your team and salon photography | Stylist or barber introductions, with the specialisms clients can ask about. | Voorstelteksten van je team, met hun specialisaties. |
| List 4 | Your locations and contact details | A gallery of your own work, used with permission. | Een fotogalerij van eigen werk, met toestemming voor gebruik. |
| List 5 | Genuine client testimonials and reviews | Genuine reviews and client stories, with permission to publish them. | Echte reviews en klantverhalen, met toestemming om ze te publiceren. |
| List 6 | Verified ratings and professional credentials | Opening hours, directions, parking information and location details. | Openingstijden, route, parkeermogelijkheden en adresgegevens. |
| List 7 | Video testimonials and salon introductions | Appointment and enquiry options matched to your agreed booking process. | Afspraak- en contactmogelijkheden die passen bij de afgesproken werkwijze. |
| Image caption | — (overlay hidden in the current design) | Trim & Trend, shaped around your business. | Trim & Trend, afgestemd op jouw bedrijf. |
| Image alt text (document's "Preview alt") | Trim & Trend design, shown as it would look for your salon | Trim & Trend website design preview for hair salons and barbers | Voorbeeld van het Trim & Trend-websiteontwerp voor kappers en barbershops |

---

## 6. Growth Rocket Hub — shared master copy

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | A great website.<br>A connected system. | Same | Een sterke website.<br>Een verbonden systeem. |
| Intro | A professional website for your salon, a complete business system in Growth Rocket Hub, and ongoing technical maintenance and upkeep. All working together. | Your professional website and Growth Rocket Hub work together as one complete online business system, with hosting, technical maintenance and support handled for you. | Je professionele website en Growth Rocket Hub vormen samen één compleet online businesssysteem. Hosting, technisch onderhoud en ondersteuning zijn voor je geregeld. |
| Step 01 title | A client gets in touch | A customer gets in touch | Een klant neemt contact op |
| Step 01 body | Through your website’s enquiry or appointment options. | Same | Via een aanvraag of een online afspraak op je website. |
| Step 02 title | You manage it in the Hub | Same | Je regelt het in de Hub |
| Step 02 body | Keep enquiries, appointments and contact details organised. | Keep enquiries, appointments and customer contact details in one place. | Houd aanvragen, afspraken en klantgegevens op één plek. |
| Step 03 title | You keep things moving | You take the next step | Je zet de volgende stap |
| Step 03 body | Follow up with the information you need in one place. | Follow up on the enquiry, arrange an appointment, or prepare a quote and invoice. | Volg de aanvraag op, plan een afspraak of maak een offerte en factuur op. |
| Walkthrough heading | Explore your website and Growth Rocket Hub. | Same | Ontdek je website en Growth Rocket Hub. |
| Walkthrough intro | Six short walkthroughs. Choose what you’d like to see. | Same | Zes korte uitlegvideo’s. Kies wat je wilt bekijken. |
| Tab 1 / title / description | See what’s inside your website / Website overview / Your website, built around your business. | Same | Bekijk wat je website biedt / Je website / Je website, afgestemd op jouw bedrijf. |
| Tab 2 / title / description | Book and manage appointments online / Appointments / Make booking easier and manage your schedule. | Book and manage appointments online / Appointments / Make booking easier and manage your appointments. | Online afspraken boeken en beheren / Afspraken / Maak online afspraken boeken eenvoudig en houd overzicht over je afspraken. |
| Tab 3 / title / description | Capture and manage enquiries / Enquiries / Organise new enquiries and keep track of replies. | Capture and manage enquiries / Inquiry Management / Keep track of customer enquiries in one place. | Aanvragen ontvangen en beheren / Aanvragen beheren / Houd overzicht over klantaanvragen op één plek. |
| Tab 4 / title / description | Create quotes and invoices / Quotes & invoices / Prepare and manage customer documents in one place. | Create quotes and invoices / Quotes and invoices / Prepare quotes and invoices for your customers. | Offertes en facturen opmaken / Offertes en facturen / Maak offertes en facturen op voor je klanten. |
| Tab 5 / title / description | Keep a customer Contact Book / Contact Book / Keep customer information together and easy to find. | Keep your customer contacts together / Contact Book / Contacts are created automatically from enquiries and appointments. | Houd je klantcontacten op één plek / Contacten / Contacten worden automatisch aangemaakt vanuit aanvragen en afspraken. |
| Tab 6 / title / description | Get help and ongoing support / Help & support / Find guidance and raise support requests when needed. | Get help and ongoing support / Help and support / Find guidance and raise support requests when needed. | Hulp en ondersteuning krijgen / Hulp en ondersteuning / Bekijk uitleg en dien een supportverzoek in als je hulp nodig hebt. |
| Video controls | “Play website overview video” (per video); no YouTube link | Play video · Watch on YouTube | Video afspelen · Bekijk op YouTube |

---

## 7. Package and pricing — shared master copy

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Your design is just the beginning. | Same | Je ontwerp is pas het begin. |
| Intro | Your professional website, complete business system and ongoing technical care. All in one managed package. | A professional website, Growth Rocket Hub and ongoing technical care. Together, one complete online business system. | Een professionele website, Growth Rocket Hub en doorlopend technisch onderhoud. Samen één compleet online businesssysteem. |
| Pillar 1 | A professional website<br>Tailored to your business and the people you serve. | A professional website<br>Tailored to your business and your customers. | Een professionele website<br>Afgestemd op je bedrijf en je klanten. |
| Pillar 2 | Growth Rocket Hub<br>Your complete business system, connected to your website. | Growth Rocket Hub<br>Your everyday business tools, connected to your website. | Growth Rocket Hub<br>Alles om je dagelijkse werk te regelen, verbonden met je website. |
| Pillar 3 | All maintained for you<br>Hosting, SSL, technical maintenance and ongoing support. | Same | Alles voor je geregeld<br>Hosting, SSL, technisch onderhoud en doorlopende ondersteuning. |
| Billing controls | Annually · Save 17% · Monthly | Same | Jaarlijks · Bespaar 17% · Maandelijks |
| Annual card (default) | €990 (struck through)<br>€690 / year<br>+ €290 one-time onboarding fee<br>That’s €57.50 a month, billed annually.<br>Save €138 compared with 12 monthly payments. | €990 [struck through]<br>€690 / year<br>+ €290 one-time onboarding fee<br>That’s €57.50 a month, billed annually.<br>Save €138 compared with 12 monthly payments. | €990 [doorgestreept]<br>€690 / jaar<br>+ €290 eenmalige opstartkosten<br>Dat is €57,50 per maand, jaarlijks betaald.<br>Je bespaart €138 ten opzichte van 12 maandbetalingen. |
| Monthly card | €99 (struck through)<br>€69 / month<br>+ €290 one-time onboarding fee<br>Billed monthly.<br>Save €138 a year when you choose annual billing. | €99 [struck through]<br>€69 / month<br>+ €290 one-time onboarding fee | €99 [doorgestreept]<br>€69 / maand<br>+ €290 eenmalige opstartkosten |
| Tax note | — | Prices exclude VAT. | Prijzen zijn exclusief btw. |
| CTA | Start with Trim & Trend | Same | Start met Trim & Trend |
| CTA destination | mailto:sales@getgrowthrocket.com?subject=Get%20started%20with%20Trim%20%26%20Trend | Same | mailto:sales@getgrowthrocket.com?subject=Starten%20met%20Trim%20%26%20Trend |

---

## 8. Launch — shared master copy

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Ready in as little as 7 days. | Ready in 7 working days.* | Online in 7 werkdagen.* |
| Intro | You focus on your salon.<br>We take care of bringing it online. | You focus on your business.<br>We take care of bringing it online. | Jij richt je op je bedrijf.<br>Wij zorgen dat je online komt. |
| 01 Choose | Start with this design and choose your billing option. | Choose your website design and billing option. | Kies je websiteontwerp en betaalwijze. |
| 02 Share | Send your branding, business details and content. | Same | Stuur je huisstijl, bedrijfsgegevens en inhoud. |
| 03 We build | We set up your website and connected business tools. | Same | We richten je website en Growth Rocket Hub in. |
| 04 Go live | Review your website, approve it and launch. | Same | Bekijk je website, geef je akkoord en ga online. |
| Nearby condition | The 7-day setup depends on receiving the required information and approvals on time. | *The 7 working days start once we have all the required information and materials. Launch timing depends on receiving your approvals on time. | *De 7 werkdagen gaan in zodra we alle benodigde informatie en materialen hebben ontvangen. De oplevering hangt af van je tijdige goedkeuring. |

---

## 9. Frequently asked questions

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | A few things<br>you might ask. | Your questions answered. | Je vragen beantwoord. |
| Intro | Ask us anything about Trim & Trend — what is included, how it is set up and what happens after it goes live. (help card, under the title “Still have a question?”) | Questions about Trim & Trend? We’re happy to help with the design, setup and what’s included. | Vragen over Trim & Trend? We helpen je graag met het ontwerp, de inrichting en wat je krijgt. |
| CTA | Talk to our team | Same | Neem contact met ons op |

### Current questions (7, replaced)

1. Am I buying just the website design?
2. Can Trim & Trend match my salon’s branding?
3. Can I use my existing domain?
4. What do I need to provide?
5. How do appointments and enquiries work?
6. What does the package cost?
7. What happens if I need help after launch?

### New questions — English (8)

1. **Is Trim & Trend suitable for my hair salon or barbershop?**
   Yes. We adapt the design to your services, team and style. The preview uses a barber studio as its example; its name, prices, people and locations are not part of your business.
2. **Can I show services, prices and treatment times?**
   Yes. We can organise your menu around the services you offer, with prices, durations and what is included. Services that require a consultation can be explained separately.
3. **Can clients book an appointment through the website?**
   Growth Rocket includes an appointment system. We agree the booking setup with you before launch. Staff-specific availability, deposits, resource scheduling or connections to existing salon software need separate confirmation.
4. **Can I keep my existing salon booking system?**
   Tell us which system you use. We can review the appropriate link or embedding options before setup. A direct integration or synchronised calendar should not be assumed.
5. **Can I add stylist profiles, reviews and a photo gallery?**
   Yes. Supply approved team details, photographs and genuine client feedback. We arrange them so visitors can understand your style and choose their next step without searching across the page.
6. **Can the website help people find my salon locally?**
   We can include your real location, opening hours, services and practical visiting details in clear page content. This supports local relevance, but does not guarantee search rankings or a particular number of bookings.
7. **Is this only a salon website design?**
   No. Your professional website comes with Growth Rocket Hub for appointments, enquiries, quotes, invoices and contacts, plus hosting, maintenance and support. Together they form a complete online business system.
8. **What does Trim & Trend cost, and how quickly can it go live?**
   The Growth Rocket package costs €69 per month or €690 per year, plus a €290 one-time onboarding fee. Prices exclude VAT. Your website can be ready in 7 working days after we receive all required information and materials, provided you give your approvals on time.

### New questions — Dutch (8)

1. **Past Trim & Trend bij mijn kapsalon of barbershop?**
   Ja. We stemmen het ontwerp af op je diensten, team en stijl. Het voorbeeld gebruikt een barbershop. De naam, prijzen, medewerkers en locaties uit dat voorbeeld nemen we niet over voor jouw bedrijf.
2. **Kan ik behandelingen, prijzen en tijdsduur tonen?**
   Ja. We maken je aanbod overzichtelijk, met prijzen, tijdsduur en wat bij een behandeling hoort. Behandelingen waarvoor eerst advies nodig is, kunnen we apart toelichten.
3. **Kunnen klanten via de website een afspraak maken?**
   Growth Rocket bevat een afsprakensysteem. We spreken vóór oplevering af hoe we dit voor je inrichten. Beschikbaarheid per medewerker, aanbetalingen, stoelplanning of koppelingen met salonsoftware bevestigen we apart.
4. **Kan ik mijn huidige boekingssysteem blijven gebruiken?**
   Vertel ons welk systeem je gebruikt. We bekijken vooraf welke link of ingesloten weergave mogelijk is. Ga niet automatisch uit van een rechtstreekse koppeling of gesynchroniseerde agenda.
5. **Kan ik mijn team, reviews en werkfoto’s toevoegen?**
   Ja. Lever goedgekeurde teaminformatie, foto’s en echte klantreacties aan. We geven ze een logische plek, zodat bezoekers je stijl leren kennen en makkelijk de volgende stap zetten.
6. **Helpt de website om lokaal gevonden te worden?**
   We kunnen je echte locatie, openingstijden, diensten en bezoekinformatie duidelijk op de pagina opnemen. Dat maakt de inhoud lokaal relevant, maar garandeert geen zoekpositie of aantal afspraken.
7. **Krijg ik alleen een websiteontwerp voor mijn salon?**
   Nee. Je professionele website komt met Growth Rocket Hub voor afspraken, aanvragen, offertes, facturen en contacten. Hosting, onderhoud en ondersteuning zijn ook geregeld. Samen vormt dit één compleet online businesssysteem.
8. **Wat kost Trim & Trend en hoe snel kan mijn website online?**
   Het Growth Rocket-pakket kost €69 per maand of €690 per jaar, plus €290 eenmalige opstartkosten. Prijzen zijn exclusief btw. Je website kan in 7 werkdagen online, nadat we alle benodigde informatie en materialen hebben ontvangen en als je op tijd je akkoord geeft.

The FAQ structured data (`FAQPage`) uses the same questions and answers, in the page's language.

---

## 10. Other designs

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Designs for<br>other trades. | Explore more website designs. | Ontdek meer ontwerpen. |
| Intro | This is the only design in its category for now. Here is what the same package looks like for other kinds of business. | Compare the other designs in the collection. We adapt your choice to the services your business actually provides. | Vergelijk de andere ontwerpen in de collectie. We stemmen je keuze af op de diensten die je daadwerkelijk aanbiedt. |
| Cards and links | DentalCare · Dentistry<br>ShineSquad · Cleaning<br>Physiotherapy · Health & Wellness | DentalCare · Dentist / Tandarts<br>https://ggr-home.vercel.app/design/dentist/dentalcare<br>ShineSquad · Home cleaning / Particuliere schoonmaak<br>https://ggr-home.vercel.app/design/cleaning/shinesquad<br>PhysioCare · Physiotherapy / Fysiotherapie<br>https://ggr-home.vercel.app/design/physiotherapy/physiotherapy | DentalCare · Dentist / Tandarts<br>https://ggr-home.vercel.app/design/dentist/dentalcare<br>ShineSquad · Home cleaning / Particuliere schoonmaak<br>https://ggr-home.vercel.app/design/cleaning/shinesquad<br>PhysioCare · Physiotherapy / Fysiotherapie<br>https://ggr-home.vercel.app/design/physiotherapy/physiotherapy |

---

## 11. Closing CTA

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Make Trim & Trend<br>your salon’s next website. | Make Trim & Trend your next website. | Maak van Trim & Trend jouw volgende website. |
| Description | A professional website for your salon. Your complete business system in Growth Rocket Hub. All maintained for you. | A website shaped around your business, connected to Growth Rocket Hub. Hosting, maintenance and support are handled for you. | Een website die past bij jouw bedrijf, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |
| CTAs | Start with this design / Talk to our team | Same | Kies dit ontwerp / Neem contact met ons op |
| Destinations | #package / mailto:sales@getgrowthrocket.com?subject=Trim%20%26%20Trend%20website%20enquiry | Same | #package / mailto:sales@getgrowthrocket.com?subject=Trim%20%26%20Trend%20website%20enquiry |

---

## 12. Ticker and footer — not changed in this update

| Element | New EN | New NL |
| --- | --- | --- |
| Ticker | Your website. Your business tools. One Growth Rocket package. | Je website, met alles om je dagelijkse werk te regelen. Eén Growth Rocket-pakket. |
| Footer heading | Your website and everyday business tools. | Je website, met alles om je dagelijkse werk te regelen. |
| Footer description | Growth Rocket is a complete online business system for small businesses. A professional website and Growth Rocket Hub for enquiries, appointments, quotes, invoices and customer contacts, with hosting, maintenance and support handled for you. | Growth Rocket is een compleet online businesssysteem voor het mkb en zzp’ers. Een professionele website en Growth Rocket Hub voor aanvragen, afspraken, offertes, facturen en contacten. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |
| Navigation and legal | Retain the approved English global footer links, company details and legal destinations. Correct the category label “Saloon” to “Salon”. | Behoud de vastgestelde Nederlandse navigatie, bedrijfsgegevens en juridische links. Gebruik “Kapsalons” als categorienaam, niet “Saloon”. |
| Global footer CTA | Start with Growth Rocket | Start met Growth Rocket |

These are site-wide (every page has the same ticker and footer), so they are left for a separate, site-wide update.

---

## Images and implementation (from the document)

| Element | New EN | New NL |
| --- | --- | --- |
| Preview alt | Trim & Trend website design preview for hair salons and barbers | Voorbeeld van het Trim & Trend-websiteontwerp voor kappers en barbershops |
| Image direction | Use authentic salon interiors, staff portraits and finished work. Keep the barber-led preview identity distinct from the buyer’s salon identity. | Gebruik echte salonfoto’s, teamportretten en eigen werk. Maak onderscheid tussen de barbershop in het voorbeeld en de salon van de klant. |
| Image checks | Match alt text to the selected photograph. Verify image rights and do not present stock images as the customer’s own work. | Stem de alt-tekst af op de echte foto. Controleer gebruiksrechten en presenteer stockfoto’s niet als eigen werk van de klant. |
| Shared sections | Sections 6–8 are fixed master copy. Only the design name and CTA destination vary. Retain the six existing video destinations. | Onderdeel 6–8 is vaste tekst. Alleen de ontwerpnaam en knopbestemming verschillen. Behoud de zes bestaande videobestemmingen. |
| SEO and language | Keep substantive content indexable outside the embedded preview. Use distinct canonical URLs and reciprocal language links. Publish FAQ answers as visible text; do not use invented ratings in structured data. | Houd inhoud buiten het ingesloten voorbeeld indexeerbaar. Gebruik eigen canonieke URL’s en wederzijdse taalverwijzingen. Publiceer de FAQ-antwoorden als zichtbare tekst en gebruik geen verzonnen beoordelingen in gestructureerde gegevens. |
| Links | Retain existing design destinations until the new URLs are implemented. Redirect replaced published URLs. Use Dutch destinations only where they exist. | Behoud bestaande ontwerpbestemmingen totdat de nieuwe URL’s zijn ingevoerd. Redirect vervangen gepubliceerde URL’s. Gebruik alleen bestaande Nederlandse bestemmingen. |

See the notes below for how each of these was applied.

---

## Website template corrections (T01–T11)

The document's correction tables list issues found in the **Trim & Trend template site itself**
(`https://saloon-template-web.vercel.app/`). That site is a separate project, not part of this repository, so these are not part
of this update. Copied from the document:

| Location | Observed issue | Action / status |
| --- | --- | --- |
| T01 · Design and example identity | Trim & Trend links to a Maison Noir barber preview. | Keep Trim & Trend as the design name; explain Maison Noir as example branding. Align thumbnail, caption and final customer identity. |
| T02 · Booking form | Reserve your chair links to #book, headed Not ready to book? Both forms ask business name, industry and service area rather than salon appointment details. | Replace buyer-acquisition fields with the agreed client enquiry/booking fields. Point appointment CTAs to the correct flow; do not promise service, barber or studio selection until implemented. |
| T03 · Booking promises | Copy promises one-tap rescheduling, reminders, under-a-minute booking and confirmation within an hour. | Confirm actual setup and response arrangements, or remove these promises. Do not infer implementation from marketing text. |
| T04 · Example proof | 1,280 Google reviews, 12,400 clients, eight master barbers and minimum eight years’ experience are presented as facts. | Use only verified client evidence. Keep demonstration figures clearly labelled or remove them from the published client site. |
| T05 · Locations and hours | Brooklyn/Tribeca addresses, US phone numbers and dollar pricing remain. Saturday hours differ between location card and find-us block; Hoboken says Coming 2026 and Spring 2026. | Replace with actual locations, currency, contact details and consistent hours. Remove stale expansion copy. |
| T06 · Commercial and service policies | Preview claims discounts, cancellation charges, gift cards that never expire, memberships and specific hygiene equipment. | Confirm the client offers these and approves the policies. Do not carry example terms or technical claims into production. |
| T07 · Placeholder destinations | Social, directions, journal and waitlist links use #; service and policy footer links use fragment targets. | Connect genuine destinations or remove unavailable links. Verify each fragment target and use real privacy/terms pages. |
| T08 · Contact routing | Main WhatsApp uses the example US number; floating WhatsApp uses Growth Rocket’s number. | Separate design-sales contact from the salon’s customer route; use correct verified destinations. |
| T09 · Related designs | Only one salon design is currently shown; recommendations are DentalCare, ShineSquad and Physiotherapy. | Use a neutral collection heading with honest industry labels. Do not claim these are additional salon designs. |
| T10 · Shared landing sections | The pages use older Hub positioning and 7-day wording. | Apply approved sections 6–8, including working days, conditions, onboarding fee and VAT. Keep six video destinations. |
| T11 · Delivery checks | Visible content and destinations were reviewed; submissions, integrations and full Dutch journeys were not tested. | Test booking, enquiries, notifications, consent and offered language versions before launch. Do not imply capabilities not confirmed in the agreed setup. |

---

## Notes and decisions

- **N1 — URL.** The English page now lives at `/designs/trim-and-trend-hair-salon-website`. Every link, the canonical URL, the language links and the structured data use it. The replaced URLs redirect there permanently (308) in one step: `/design/salon/trim-and-trend`, `/designs/salon/trim-and-trend`, `/designs/trim-and-trend`. The Dutch page keeps the established Dutch URL `/nl/ontwerpen/kapsalon/trim-and-trend`, as the document asks; the language switch moves between the two.
- **N2 — Ticker and footer (section 12).** These are site-wide: the same ticker and footer appear on every page of the site, in both languages. Changing them here would change every page, so they are left for a separate, site-wide update (including the "Saloon" category label in the footer).
- **N3 — Shared sections 6–8.** The same master copy ShineSquad already uses (`page-copy/master.ts`); only the design name and CTA destination vary. Checked word for word against this document's sections 6–8.
- **N4 — Monthly card and tax note.** As in the document: the monthly card shows only the struck-through €99, €69 / month and the onboarding fee (no "Billed monthly." or "Save €138 a year…" lines), and "Prices exclude VAT." / "Prijzen zijn exclusief btw." shows on the price card.
- **N5 — FAQ help card.** "Still have a question?" is not in the approved copy, so the help card shows only the document's intro and button. The FAQ button keeps its existing email subject (`<design> website enquiry`); the document gives no destination for it.
- **N6 — Section 5 image.** The page shows a scrolling screenshot of the design, not a photograph, so the document's image direction does not apply; the alt text is the document's "Preview alt" / "Alt-tekst voorbeeld". The caption overlay is hidden in the current design and stays hidden.
- **N7 — "Watch on YouTube".** The video panel plays the video in the page and has no YouTube link, so none is added. "Play video" / "Video afspelen" is used for the play control. The six videos keep their existing (English) destinations in both languages, as the document requires.
- **N8 — Hidden labels on the Dutch page.** Screen-reader labels not covered by the document use the document's own Dutch terms: "Kruimelpad", "Schermkeuze", "Betaalkeuze" and "Uitlegvideo’s".
- **N9 — Heading colours.** Headings keep the page's purple accent; the words are exactly the document's. Where the document gives a heading as one sentence (no line break), it stays one sentence with the accent on its closing words: “Make choosing your salon feel easier.”, “Your salon. Your style. Your website.”, “Your questions answered.” and “Make Trim & Trend your next website.” (and the Dutch equivalents).
- **N10 — "PhysioCare".** The document names the third card "PhysioCare". That design was titled "Physiotherapy" on the site; its own approved document names it PhysioCare, so its title is now "PhysioCare" and the card shows that name, with this document's labels ("Physiotherapy" / "Fysiotherapie").
- **N11 — Other designs.** Trim & Trend is the only design in its category, so this section shows designs for other trades: DentalCare, ShineSquad and Physiotherapy, the same three the document lists. The cards carry the document's labels on this page only; the `/designs` listing keeps its own labels. The document's links use the staging domain `ggr-home.vercel.app` (and ShineSquad's old path); the cards link to each design's current URL on this site, in the page's language.
