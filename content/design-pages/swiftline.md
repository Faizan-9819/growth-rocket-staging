# SwiftLine design page — content update reference

| | |
| --- | --- |
| **Source** | `SwiftLine — Logistics Design Page Copy.docx` (16 October 2026) |
| **English page** | `/designs/swiftline-logistics-website` (was `/design/logistics/swiftline`, which now redirects) |
| **Dutch page** | `/nl/ontwerpen/logistiek/swiftline` |
| **Scope** | This page only, both languages. |

**Where the copy lives in the code**

- SwiftLine's own copy (sections 0–5 and 9–11), English and Dutch: `app/components/sections/design/page-copy/swiftline.ts`
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
| SEO title | SwiftLine \| Logistics Website Design & Business Tools \| Growth Rocket | Logistics Website Design \| SwiftLine \| Growth Rocket | Website voor transportbedrijven \| SwiftLine |
| Meta description | Explore SwiftLine: a professional logistics website design with appointments, enquiries, Growth Rocket Hub and ongoing technical support. Built for logistics operators. | Explore SwiftLine, a website design for transport and logistics businesses, with Growth Rocket Hub, hosting, maintenance and support. View the design and pricing. | Ontdek SwiftLine: een website voor transport- en logistieke bedrijven, met Growth Rocket Hub, hosting, onderhoud en ondersteuning. Bekijk het ontwerp en de prijzen. |
| Primary topic | — | logistics website design | Website voor transportbedrijven |
| Focus | — | Transport services, route coverage and informed quote requests | Vervoersdiensten, werkgebied en gerichte offerteaanvragen |
| Final URL (EN) | `/design/logistics/swiftline` | https://www.getgrowthrocket.com/designs/swiftline-logistics-website | Gebruik de vastgestelde Nederlandse URL-structuur en wederzijdse taalverwijzingen. |

---

## 1. Hero

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Label | Website design for logistics operators | Website design for transport and logistics businesses | Websiteontwerp voor transport- en logistieke bedrijven |
| H1 line 1 | SwiftLine. | Same | SwiftLine. |
| H1 line 2 | A reliable, track-ready website for logistics and freight companies. | Show what you move. Make the next enquiry easier. | Laat zien wat je vervoert. Maak een aanvraag makkelijk. |
| Description | A professional website for your operation. A complete business system with Growth Rocket Hub. All maintained for you. | Present your transport services, routes and capabilities clearly, so customers can explain what they need and request a quote. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system. | Presenteer je vervoersdiensten, routes en mogelijkheden duidelijk, zodat klanten hun transportvraag kunnen toelichten en een offerte aanvragen. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |

---

## 2–3. Breadcrumb and preview

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Breadcrumb | All designs / SwiftLine | Same | Alle ontwerpen / SwiftLine |
| Device controls | Desktop · Tablet · Mobile | Same | Computer · Tablet · Mobiel |
| Preview link | Preview in browser | Same | Bekijk in je browser |
| Primary CTA | Start with this design | Same | Kies dit ontwerp |
| Browser label | — (not shown) | SwiftLine · Design preview | SwiftLine · Websitevoorbeeld |
| Preview caption | Live preview of the design. Open it in a browser to explore every section. Example branding and content are replaced with your own details. | Explore SwiftLine using Meridian Logistics as the example business. We adapt the branding, services and content to your business. | Bekijk SwiftLine met Meridian Logistics als voorbeeldbedrijf. We stemmen de huisstijl, diensten en inhoud af op jouw bedrijf. |
| Destinations | https://logistics-template-web.vercel.app/ · CTA `#package` | https://logistics-template-web.vercel.app/<br>Primary CTA: #package | https://logistics-template-web.vercel.app/<br>Primaire knop: #package |

---

## 4. Benefits

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Build confidence.<br>Before the first visit. | Give customers the detail they need to choose you. | Geef klanten de informatie om voor jou te kiezen. |
| Intro | Choosing an operation is personal. SwiftLine gives prospective clients a clear picture of your operation and a simple way to take the next step. | A transport enquiry starts with practical questions: what can you carry, where do you go and what information do you need? Put those answers within reach. | Een transportaanvraag begint met praktische vragen: wat vervoer je, waar rijd je en welke gegevens heb je nodig? Maak die antwoorden makkelijk vindbaar. |
| Card 1 title | Make your services easy to understand. | Make your service scope clear | Maak je aanbod concreet |
| Card 1 body | Give each of your services a clear introduction, so clients can find what matters to them without a phone call first. | Explain the transport, courier or storage services you actually provide. State the kinds of consignments you handle and any important limits, rather than suggesting every shipment is suitable. | Leg uit welke transport-, koeriers- of opslagdiensten je daadwerkelijk biedt. Benoem soorten zendingen en belangrijke beperkingen, zodat klanten weten wat bij jouw dienstverlening past. |
| Card 2 title | Introduce the people behind the work. | Show where you operate | Laat je werkgebied zien |
| Card 2 body | Show your team, their experience and how you work, so an unfamiliar operation feels more approachable. | Set out collection areas, delivery regions and the routes you serve. Distinguish regular coverage from destinations that need an individual quotation. | Beschrijf ophaalgebieden, bestemmingen en routes. Maak onderscheid tussen vaste routes en bestemmingen waarvoor je eerst een aparte offerte maakt. |
| Card 3 title | Let genuine feedback build trust. | Help customers send a useful request | Help klanten een gerichte aanvraag doen |
| Card 3 body | Create space for your own client testimonials and credentials, alongside the story of your operation. | Guide customers to share collection and delivery locations, goods, dimensions or weight, and preferred timing. Agree the enquiry fields during setup so your team can assess the request. | Vraag om ophaal- en afleverlocatie, soort goederen, afmetingen of gewicht en gewenste timing. We spreken de formuliervelden af zodat je team de aanvraag goed kan beoordelen. |
| Card 4 title | Make the next step feel simple. | Back your capabilities with real evidence | Onderbouw wat je kunt leveren |
| Card 4 body | Keep booking prompts, enquiry forms and contact details easy to find, including on a phone. | Show your own vehicles, facilities and team, plus verified credentials and relevant customer examples. Keep operational claims specific to what your business can deliver. | Toon je eigen voertuigen, locaties en team, met gecontroleerde kwalificaties en relevante klantvoorbeelden. Houd beloften concreet en passend bij je echte dienstverlening. |

---

## 5. Personalisation

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Your operation. Your identity.<br>Your website. | Your services. Your routes. Your website. | Jouw diensten. Jouw routes. Jouw website. |
| Intro | The design is your starting point. We shape the website around the people, services and details that make your operation yours. | We adapt SwiftLine to your business, whether you handle local deliveries, regional freight or a defined logistics service. | We stemmen SwiftLine af op jouw bedrijf, van lokale bezorging tot regionaal transport of een specifieke logistieke dienst. |
| List 1 | Your logo, colours and operation story | Your logo, colours and company story. | Je logo, kleuren en bedrijfsverhaal. |
| List 2 | Your services and service information | The goods, transport services and storage options you actually handle. | De goederen, vervoersdiensten en opslagmogelijkheden die je werkelijk aanbiedt. |
| List 3 | Your team and operation photography | Collection areas, delivery regions and service limitations. | Ophaalgebieden, bestemmingen en grenzen van je dienstverlening. |
| List 4 | Your locations and contact details | Your vehicles, team and facility photographs. | Foto’s van je voertuigen, team en locaties. |
| List 5 | Genuine client testimonials and reviews | Useful quote-request guidance and agreed enquiry fields. | Duidelijke uitleg voor offerteaanvragen en afgesproken formuliervelden. |
| List 6 | Verified ratings and professional credentials | Verified certifications, memberships and genuine customer references. | Gecontroleerde certificeringen, lidmaatschappen en echte klantreferenties. |
| List 7 | Video testimonials and operation introductions | Your contact hours and a clearly explained route for shipment-status questions. | Je bereikbaarheid en een duidelijke contactroute voor vragen over zendingen. |
| Image caption | — (overlay hidden in the current design) | SwiftLine, shaped around your business. | SwiftLine, afgestemd op jouw bedrijf. |
| Image alt text (document's "Preview alt") | SwiftLine design, shown as it would look for your operation | SwiftLine website design preview for transport and logistics businesses | Voorbeeld van het SwiftLine-websiteontwerp voor transport- en logistieke bedrijven |

---

## 6. Growth Rocket Hub — shared master copy

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | A great website.<br>A connected system. | Same | Een sterke website.<br>Een verbonden systeem. |
| Intro | A professional website for your operation, a complete business system in Growth Rocket Hub, and ongoing technical maintenance and upkeep. All working together. | Your professional website and Growth Rocket Hub work together as one complete online business system, with hosting, technical maintenance and support handled for you. | Je professionele website en Growth Rocket Hub vormen samen één compleet online businesssysteem. Hosting, technisch onderhoud en ondersteuning zijn voor je geregeld. |
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
| CTA | Start with SwiftLine | Same | Start met SwiftLine |
| CTA destination | mailto:sales@getgrowthrocket.com?subject=Get%20started%20with%20SwiftLine | Same | mailto:sales@getgrowthrocket.com?subject=Starten%20met%20SwiftLine |

---

## 8. Launch — shared master copy

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Ready in as little as 7 days. | Ready in 7 working days.* | Online in 7 werkdagen.* |
| Intro | You focus on your operation.<br>We take care of bringing it online. | You focus on your business.<br>We take care of bringing it online. | Jij richt je op je bedrijf.<br>Wij zorgen dat je online komt. |
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
| Intro | Ask us anything about SwiftLine — what is included, how it is set up and what happens after it goes live. (help card, under the title “Still have a question?”) | Questions about SwiftLine? We’re happy to help with the design, setup and what’s included. | Vragen over SwiftLine? We helpen je graag met het ontwerp, de inrichting en wat je krijgt. |
| CTA | Talk to our team | Same | Neem contact met ons op |

### Current questions (7, replaced)

1. Am I buying just the website design?
2. Can SwiftLine match my operation’s branding?
3. Can I use my existing domain?
4. What do I need to provide?
5. How do appointments and enquiries work?
6. What does the package cost?
7. What happens if I need help after launch?

### New questions — English (8)

1. **Is SwiftLine suitable for a small transport company?**
   Yes. We adapt it to the services and regions your business actually covers. The large international network in the preview is example content, not a requirement or a promise about your company.
2. **Can customers request a transport quote?**
   Yes. Your website can collect enquiries and you can follow up, prepare quotes and send invoices in Growth Rocket Hub. We agree the information to collect during setup. A quote request is not an automatic freight-rate calculation or confirmed transport booking.
3. **Does the website include live shipment tracking?**
   Live shipment tracking is not a standard Growth Rocket capability. If you already have a tracking service, we can discuss an appropriate link or separately scoped integration. A preview tracking button is not proof of a working connection.
4. **Can I show delivery regions and transport limitations?**
   Yes. We can explain the areas you serve, the goods you handle and any relevant restrictions. Transit times and time-critical options should reflect your actual operating arrangements rather than a generic delivery guarantee.
5. **Does the Hub replace transport or warehouse management software?**
   No. The Hub supports customer enquiries, appointments, quotes, invoices and contacts. Dispatch, vehicle routing, warehouse stock and specialist transport workflows require the appropriate operational systems; any integration is assessed separately.
6. **Can I display certifications and customer examples?**
   Yes, where they are genuine and you have permission to use them. Supply accurate certification details, authorised photographs and customer examples. We do not carry the preview’s sample scale, savings or accreditation claims into your business copy.
7. **What do I need to supply before setup?**
   Your branding, service scope, coverage areas, contact information and approved team, vehicle or facility images. We also agree the enquiry route and any external service links. Existing domains can be used, with setup guidance from our team.
8. **What does SwiftLine cost, and how quickly can it go live?**
   The Growth Rocket package costs €69 per month or €690 per year, plus a €290 one-time onboarding fee. Prices exclude VAT. Your website can be ready in 7 working days after we receive all required information and materials, provided you give your approvals on time.

### New questions — Dutch (8)

1. **Past SwiftLine bij een klein transportbedrijf?**
   Ja. We stemmen het ontwerp af op jouw diensten en werkgebied. Het grote internationale netwerk in het voorbeeld is voorbeeldinhoud, geen vereiste of belofte over jouw bedrijf.
2. **Kunnen klanten een transportofferte aanvragen?**
   Ja. Je website kan aanvragen verzamelen. In Growth Rocket Hub kun je ze opvolgen, offertes maken en facturen versturen. We spreken af welke gegevens je nodig hebt. Een offerteaanvraag is geen automatische vrachtprijsberekening of bevestigde transportboeking.
3. **Zit live zendingen volgen bij de website inbegrepen?**
   Live zendingen volgen is geen standaardfunctie van Growth Rocket. Gebruik je al een volgsysteem? Dan kunnen we een passende link of apart af te spreken koppeling bespreken. Een knop in het voorbeeld bewijst geen werkende verbinding.
4. **Kan ik bestemmingen en vervoersbeperkingen tonen?**
   Ja. We kunnen je werkgebied, soorten goederen en relevante beperkingen uitleggen. Levertijden en spoedmogelijkheden moeten aansluiten op je echte werkafspraken, niet op een algemene bezorggarantie.
5. **Vervangt de Hub mijn transport- of magazijnsoftware?**
   Nee. De Hub ondersteunt aanvragen, afspraken, offertes, facturen en contacten. Planning, routes, voorraad en specifieke transportprocessen vragen passende operationele systemen. Een eventuele koppeling beoordelen we apart.
6. **Kan ik certificeringen en klantvoorbeelden tonen?**
   Ja, als ze echt zijn en je toestemming voor gebruik hebt. Lever juiste certificeringsgegevens, toegestane foto’s en klantvoorbeelden aan. Cijfers, besparingen en keurmerken uit het voorbeeld nemen we niet over in jouw bedrijfstekst.
7. **Wat lever ik aan voor de inrichting?**
   Je huisstijl, diensten, werkgebied, contactgegevens en goedgekeurde foto’s van team, voertuigen of locaties. We spreken ook de aanvraagroute en externe links af. Je kunt je bestaande domein gebruiken; ons team helpt bij de inrichting.
8. **Wat kost SwiftLine en hoe snel kan mijn website online?**
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
| H2 | Make SwiftLine<br>your operation’s next website. | Make SwiftLine your next website. | Maak van SwiftLine jouw volgende website. |
| Description | A professional website for your operation. Your complete business system in Growth Rocket Hub. All maintained for you. | A website shaped around your business, connected to Growth Rocket Hub. Hosting, maintenance and support are handled for you. | Een website die past bij jouw bedrijf, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |
| CTAs | Start with this design / Talk to our team | Same | Kies dit ontwerp / Neem contact met ons op |
| Destinations | #package / mailto:sales@getgrowthrocket.com?subject=SwiftLine%20website%20enquiry | Same | #package / mailto:sales@getgrowthrocket.com?subject=SwiftLine%20website%20enquiry |

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
| Preview alt | SwiftLine website design preview for transport and logistics businesses | Voorbeeld van het SwiftLine-websiteontwerp voor transport- en logistieke bedrijven |
| Image direction | Use real vehicles, facilities and relevant consignments. Match imagery to actual road, air or ocean services rather than implying global infrastructure the customer does not have. | Gebruik echte voertuigen, locaties en passende zendingen. Laat beelden aansluiten op aangeboden vervoer en suggereer geen wereldwijd netwerk dat de klant niet heeft. |
| Image checks | Match alt text to the selected photograph. Verify image rights and do not present stock images as the customer’s own work. | Stem de alt-tekst af op de echte foto. Controleer gebruiksrechten en presenteer stockfoto’s niet als eigen werk van de klant. |
| Shared sections | Sections 6–8 are fixed master copy. Only the design name and CTA destination vary. Retain the six existing video destinations. | Onderdeel 6–8 is vaste tekst. Alleen de ontwerpnaam en knopbestemming verschillen. Behoud de zes bestaande videobestemmingen. |
| SEO and language | Keep substantive content indexable outside the embedded preview. Use distinct canonical URLs and reciprocal language links. Publish FAQ answers as visible text; do not use invented ratings in structured data. | Houd inhoud buiten het ingesloten voorbeeld indexeerbaar. Gebruik eigen canonieke URL’s en wederzijdse taalverwijzingen. Publiceer de FAQ-antwoorden als zichtbare tekst en gebruik geen verzonnen beoordelingen in gestructureerde gegevens. |
| Links | Retain existing design destinations until the new URLs are implemented. Redirect replaced published URLs. Use Dutch destinations only where they exist. | Behoud bestaande ontwerpbestemmingen totdat de nieuwe URL’s zijn ingevoerd. Redirect vervangen gepubliceerde URL’s. Gebruik alleen bestaande Nederlandse bestemmingen. |

See the notes below for how each of these was applied.

---

## Website template corrections (T01–T11)

The document's correction tables list issues found in the **SwiftLine template site itself**
(`https://logistics-template-web.vercel.app/`). That site is a separate project, not part of this repository, so these are not part
of this update. Copied from the document:

| Location | Observed issue | Action / status |
| --- | --- | --- |
| T01 · Mixed identity | Header says SwiftLine; browser title, body and footer use Meridian Logistics. | Use Meridian consistently as the labelled example company, and SwiftLine as the design name. Replace all example identity for the customer. |
| T02 · Tracking implication | Landing says track-ready. Track a Shipment and Customer Portal links point to #. | Remove track-ready from the landing headline. Label preview-only controls or connect a separately confirmed service. Do not promise tracking or a portal as standard. |
| T03 · Enquiry scope | The page lists eight capabilities but the form service selector offers only Air Freight. | Populate the actual services. Agree useful shipment enquiry fields; distinguish an enquiry from a confirmed booking or instant rate. |
| T04 · Operational promises | Copy claims live ETA on every load, 24/7 visibility, 48-hour express lanes and integrated control-tower data. | Confirm actual customer operations and systems. Remove unsupported capabilities; separate logistics services from Growth Rocket functionality. |
| T05 · Scale and certifications | 120 markets, 142 facilities, 430 customs specialists, IATA/FIATA/AEO/ISO/C-TPAT and audited figures appear. | Replace with verified customer coverage and credentials. Do not imply certifications or audited performance from sample content. |
| T06 · Case studies and outcomes | Examples claim $4.6M avoided cost, 41% throughput gain, 99.98% accuracy and 32% freight savings. | Use authorised genuine cases with supporting evidence or remove the examples. Do not carry them into the customer’s claims. |
| T07 · Navigation and policies | Tracking, portal, careers, social and legal links use #; Discover our story points to footer. | Connect actual destinations or remove unavailable actions. Test consultation and quote CTAs and distinguish design sales from customer contact. |
| T08 · Local contact and heading hierarchy | Singapore contact details remain. The closing logistics CTA is another H1. | Replace with verified customer details and preserve a single descriptive primary H1, with the closing CTA as H2. |
| T09 · Collection and scope | Only one logistics design is offered; recommendations are other industries. | Use neutral related-design wording. Replace generic operation phrases with specific service, route and enquiry content in this document. |
| T10 · Shared landing sections | The pages use older Hub positioning and 7-day wording. | Apply approved sections 6–8, including working days, conditions, onboarding fee and VAT. Keep six video destinations. |
| T11 · Delivery checks | Visible content and destinations were reviewed; submissions, integrations and full Dutch journeys were not tested. | Test booking, enquiries, notifications, consent and offered language versions before launch. Do not imply capabilities not confirmed in the agreed setup. |

---

## Notes and decisions

- **N1 — URL.** The English page now lives at `/designs/swiftline-logistics-website`. Every link, the canonical URL, the language links and the structured data use it. The replaced URLs redirect there permanently (308) in one step: `/design/logistics/swiftline`, `/designs/logistics/swiftline`, `/designs/swiftline`. The Dutch page keeps the established Dutch URL `/nl/ontwerpen/logistiek/swiftline`, as the document asks; the language switch moves between the two.
- **N2 — Ticker and footer (section 12).** These are site-wide: the same ticker and footer appear on every page of the site, in both languages. Changing them here would change every page, so they are left for a separate, site-wide update (including the "Saloon" category label in the footer).
- **N3 — Shared sections 6–8.** The same master copy ShineSquad already uses (`page-copy/master.ts`); only the design name and CTA destination vary. Checked word for word against this document's sections 6–8.
- **N4 — Monthly card and tax note.** As in the document: the monthly card shows only the struck-through €99, €69 / month and the onboarding fee (no "Billed monthly." or "Save €138 a year…" lines), and "Prices exclude VAT." / "Prijzen zijn exclusief btw." shows on the price card.
- **N5 — FAQ help card.** "Still have a question?" is not in the approved copy, so the help card shows only the document's intro and button. The FAQ button keeps its existing email subject (`<design> website enquiry`); the document gives no destination for it.
- **N6 — Section 5 image.** The page shows a scrolling screenshot of the design, not a photograph, so the document's image direction does not apply; the alt text is the document's "Preview alt" / "Alt-tekst voorbeeld". The caption overlay is hidden in the current design and stays hidden.
- **N7 — "Watch on YouTube".** The video panel plays the video in the page and has no YouTube link, so none is added. "Play video" / "Video afspelen" is used for the play control. The six videos keep their existing (English) destinations in both languages, as the document requires.
- **N8 — Hidden labels on the Dutch page.** Screen-reader labels not covered by the document use the document's own Dutch terms: "Kruimelpad", "Schermkeuze", "Betaalkeuze" and "Uitlegvideo’s".
- **N9 — Heading colours.** Headings keep the page's purple accent; the words are exactly the document's. Where the document gives a heading as one sentence (no line break), it stays one sentence with the accent on its closing words: “Give customers the detail they need to choose you.”, “Your services. Your routes. Your website.”, “Your questions answered.” and “Make SwiftLine your next website.” (and the Dutch equivalents).
- **N10 — Other designs.** The cards are DentalCare, ShineSquad and PhysioCare (designs for other trades, since SwiftLine is the only logistics design), exactly as the document lists them, with the document's labels on this page only (the `/designs` listing keeps its own). The document's links use the staging domain `ggr-home.vercel.app` and older paths; the cards link to each design's current URL on this site, in the page's language.
