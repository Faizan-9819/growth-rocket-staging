# PhysioCare design page — content update reference

| | |
| --- | --- |
| **Source** | `PhysioCare — Physiotherapy Design Page Copy.docx` (16 October 2026) |
| **English page** | `/designs/physiocare-physiotherapy-website` (was `/design/physiotherapy/physiotherapy`, which now redirects) |
| **Dutch page** | `/nl/ontwerpen/fysiotherapie/physiotherapy` |
| **Scope** | This page only, both languages. |

**Where the copy lives in the code**

- PhysioCare's own copy (sections 0–5 and 9–11), English and Dutch: `app/components/sections/design/page-copy/physiotherapy.ts`
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
| SEO title | Physiotherapy \| Health & Wellness Website Design & Business Tools \| Growth Rocket | Physiotherapy Website Design \| PhysioCare \| Growth Rocket | Website voor fysiotherapeuten \| PhysioCare |
| Meta description | Explore Physiotherapy: a professional health & wellness website design with appointments, enquiries, Growth Rocket Hub and ongoing technical support. Built for physiotherapy clinics. | Explore PhysioCare, a website design for physiotherapy practices, with Growth Rocket Hub, hosting, maintenance and support. View the design and pricing. | Ontdek PhysioCare: een website voor fysiotherapiepraktijken, met Growth Rocket Hub, hosting, onderhoud en ondersteuning. Bekijk het ontwerp en de prijzen. |
| Primary topic | — | physiotherapy website design | Website voor fysiotherapeuten |
| Focus | — | Treatment information, practitioner introductions and first-visit guidance | Behandelinformatie, therapeuten en voorbereiding op het eerste bezoek |
| Final URL (EN) | `/design/physiotherapy/physiotherapy` | https://www.getgrowthrocket.com/designs/physiocare-physiotherapy-website | Gebruik de vastgestelde Nederlandse URL-structuur en wederzijdse taalverwijzingen. |

---

## 1. Hero

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Label | Website design for physiotherapy clinics | Website design for physiotherapy practices | Websiteontwerp voor fysiotherapiepraktijken |
| H1 line 1 | Physiotherapy. | PhysioCare. | PhysioCare. |
| H1 line 2 | A movement-focused site that turns visitors into patients. | Help patients feel informed before their first visit. | Geef patiënten duidelijkheid vóór hun eerste bezoek. |
| Description | A professional website for your clinic. A complete business system with Growth Rocket Hub. All maintained for you. | Introduce your practice, explain the care you offer and make it easy to ask about an appointment. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system. | Stel je praktijk voor, leg uit welke zorg je biedt en maak het makkelijk om contact op te nemen voor een afspraak. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |

---

## 2–3. Breadcrumb and preview

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Breadcrumb | All designs / PhysioCare | Same | Alle ontwerpen / PhysioCare |
| Device controls | Desktop · Tablet · Mobile | Same | Computer · Tablet · Mobiel |
| Preview link | Preview in browser | Same | Bekijk in je browser |
| Primary CTA | Start with this design | Same | Kies dit ontwerp |
| Browser label | — (not shown) | PhysioCare · Design preview | PhysioCare · Websitevoorbeeld |
| Preview caption | Live preview of the design. Open it in a browser to explore every section. Example branding and content are replaced with your own details. | Explore PhysioCare using Restore Physiotherapy as the example business. We adapt the branding, services and content to your business. | Bekijk PhysioCare met Restore Physiotherapy als voorbeeldbedrijf. We stemmen de huisstijl, diensten en inhoud af op jouw bedrijf. |
| Destinations | https://physiotherapy-template-jet.vercel.app/ · CTA `#package` | https://physiotherapy-template-jet.vercel.app/<br>Primary CTA: #package | https://physiotherapy-template-jet.vercel.app/<br>Primaire knop: #package |

---

## 4. Benefits

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Build confidence.<br>Before the first visit. | Build confidence before the first appointment. | Geef vertrouwen vóór de eerste afspraak. |
| Intro | Choosing a clinic is personal. Physiotherapy gives prospective patients a clear picture of your clinic and a simple way to take the next step. | Someone choosing a physiotherapist needs more than a treatment list. Help them understand your approach, meet the team and know what to expect when they contact you. | Wie een fysiotherapeut zoekt, wil meer weten dan welke behandelingen er zijn. Maak je aanpak duidelijk, stel je team voor en leg uit wat iemand kan verwachten bij het eerste contact. |
| Card 1 title | Make your treatments easy to understand. | Explain your areas of care | Leg je zorgaanbod uit |
| Card 1 body | Give each of your treatments a clear introduction, so patients can find what matters to them without a phone call first. | Describe the treatments your practice actually offers in plain language. Help visitors understand who each service is intended for without promising a particular recovery outcome. | Beschrijf in begrijpelijke taal welke behandelingen je praktijk daadwerkelijk biedt. Maak duidelijk voor wie ze bedoeld zijn, zonder een bepaald herstelresultaat te beloven. |
| Card 2 title | Introduce the people behind the work. | Introduce your practitioners | Stel je fysiotherapeuten voor |
| Card 2 body | Show your team, their experience and how you work, so an unfamiliar clinic feels more approachable. | Present your therapists, their verified qualifications and their areas of focus, with photographs that help patients recognise who they will meet. | Toon je therapeuten, hun gecontroleerde kwalificaties en aandachtsgebieden. Met herkenbare foto’s weten patiënten wie ze kunnen ontmoeten. |
| Card 3 title | Let genuine feedback build trust. | Prepare people for their first visit | Bereid het eerste bezoek voor |
| Card 3 body | Create space for your own patient testimonials and credentials, alongside the story of your clinic. | Explain how an initial appointment works, what to bring and where to find your practice. Include practical access information that reduces uncertainty. | Vertel hoe een eerste afspraak verloopt, wat iemand meeneemt en hoe je praktijk bereikbaar is. Praktische informatie neemt onzekerheid weg. |
| Card 4 title | Make the next step feel simple. | Offer a clear route to contact | Maak contact duidelijk |
| Card 4 body | Keep booking prompts, enquiry forms and contact details easy to find, including on a phone. | Let visitors ask about availability or request an appointment. Keep administrative enquiries separate from clinical information and advice. | Laat bezoekers informeren naar beschikbaarheid of een afspraak aanvragen. Houd praktische aanvragen gescheiden van medische informatie en advies. |

---

## 5. Personalisation

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Your clinic. Your identity.<br>Your website. | Your practice. Your approach. Your website. | Jouw praktijk. Jouw aanpak. Jouw website. |
| Intro | The design is your starting point. We shape the website around the people, services and details that make your clinic yours. | We adapt PhysioCare to your practice, your team and the information patients need before they contact you. | We stemmen PhysioCare af op je praktijk, je team en de informatie die patiënten nodig hebben voordat ze contact opnemen. |
| List 1 | Your logo, colours and clinic story | Your practice name, logo, colours and photographs. | Je praktijknaam, logo, kleuren en foto’s. |
| List 2 | Your treatments and service information | Your actual treatments and specialisms, reviewed by your practice. | Je behandelingen en specialisaties, inhoudelijk gecontroleerd door je praktijk. |
| List 3 | Your team and clinic photography | Therapist profiles with verified qualifications and registrations. | Therapeutprofielen met gecontroleerde kwalificaties en registraties. |
| List 4 | Your locations and contact details | Clear first-visit information, fees and your own reimbursement guidance. | Duidelijke informatie over het eerste bezoek, tarieven en je eigen uitleg over vergoeding. |
| List 5 | Genuine patient testimonials and reviews | Accessibility, parking, opening hours and details for each practice location. | Toegankelijkheid, parkeren, openingstijden en gegevens per praktijklocatie. |
| List 6 | Verified ratings and professional credentials | Genuine patient feedback, published only with appropriate permission. | Echte ervaringen van patiënten, alleen gepubliceerd met passende toestemming. |
| List 7 | Video testimonials and clinic introductions | A clear appointment or enquiry route, with clinical records kept in your appropriate care system. | Een duidelijke afspraak- of contactroute; medische dossiers blijven in je daarvoor bestemde zorgsysteem. |
| Image caption | — (overlay hidden in the current design) | PhysioCare, shaped around your business. | PhysioCare, afgestemd op jouw bedrijf. |
| Image alt text (document's "Preview alt") | Physiotherapy design, shown as it would look for your clinic | PhysioCare website design preview for physiotherapy practices | Voorbeeld van het PhysioCare-websiteontwerp voor fysiotherapiepraktijken |

---

## 6. Growth Rocket Hub — shared master copy

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | A great website.<br>A connected system. | Same | Een sterke website.<br>Een verbonden systeem. |
| Intro | A professional website for your clinic, a complete business system in Growth Rocket Hub, and ongoing technical maintenance and upkeep. All working together. | Your professional website and Growth Rocket Hub work together as one complete online business system, with hosting, technical maintenance and support handled for you. | Je professionele website en Growth Rocket Hub vormen samen één compleet online businesssysteem. Hosting, technisch onderhoud en ondersteuning zijn voor je geregeld. |
| Step 01 title | A patient gets in touch | A customer gets in touch | Een klant neemt contact op |
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
| CTA | — | Start with PhysioCare | Start met PhysioCare |
| CTA destination |  | mailto:sales@getgrowthrocket.com?subject=Get%20started%20with%20PhysioCare | mailto:sales@getgrowthrocket.com?subject=Starten%20met%20PhysioCare |

---

## 8. Launch — shared master copy

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Ready in as little as 7 days. | Ready in 7 working days.* | Online in 7 werkdagen.* |
| Intro | You focus on your clinic.<br>We take care of bringing it online. | You focus on your business.<br>We take care of bringing it online. | Jij richt je op je bedrijf.<br>Wij zorgen dat je online komt. |
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
| Intro | Ask us anything about Physiotherapy — what is included, how it is set up and what happens after it goes live. (help card, under the title “Still have a question?”) | Questions about PhysioCare? We’re happy to help with the design, setup and what’s included. | Vragen over PhysioCare? We helpen je graag met het ontwerp, de inrichting en wat je krijgt. |
| CTA | Talk to our team | Same | Neem contact met ons op |

### Current questions (7, replaced)

1. Am I buying just the website design?
2. Can Physiotherapy match my clinic’s branding?
3. Can I use my existing domain?
4. What do I need to provide?
5. How do appointments and enquiries work?
6. What does the package cost?
7. What happens if I need help after launch?

### New questions — English (8)

1. **Is PhysioCare suitable for an independent physiotherapy practice?**
   Yes. We can adapt the design for an independent practitioner or a practice with several therapists. The Restore example branding and sample clinic details are replaced with your own approved information.
2. **Can I explain my treatments and specialisms?**
   Yes. We organise the services you actually provide and use clear language for visitors. Your practice reviews clinical wording, qualifications and any statements about treatment outcomes before publication.
3. **Can patients request an appointment online?**
   Yes. Growth Rocket includes appointment and enquiry capabilities. We agree your administrative booking flow before launch. Do not treat a general website form as a clinical intake or medical-record system.
4. **Does Growth Rocket replace my patient-record software?**
   No. Growth Rocket Hub supports everyday business administration. Clinical records, treatment notes and healthcare-specific workflows should remain in the appropriate system. Any connection to existing practice software needs separate assessment and confirmation.
5. **Can I show fees, insurance information and practitioner registrations?**
   Yes. Supply current, verified information for your practice. State your own fees and arrangements clearly, without implying every patient or treatment is reimbursed. Review these details whenever your arrangements change.
6. **Can I include several practice locations?**
   We can plan clear location information, including address, access, opening hours and which services are available where. Any additional page scope or location-specific booking requirements should be agreed before setup.
7. **Can the page help patients find the practice locally?**
   Clear information about your actual location, practitioners and services helps visitors assess relevance and supports local search context. It does not guarantee rankings, patient numbers or treatment outcomes.
8. **What does PhysioCare cost, and how quickly can it go live?**
   The Growth Rocket package costs €69 per month or €690 per year, plus a €290 one-time onboarding fee. Prices exclude VAT. Your website can be ready in 7 working days after we receive all required information and materials, provided you give your approvals on time.

### New questions — Dutch (8)

1. **Past PhysioCare bij een zelfstandige fysiotherapiepraktijk?**
   Ja. We kunnen het ontwerp afstemmen op een zelfstandige fysiotherapeut of een praktijk met meerdere behandelaars. We vervangen Restore en de voorbeeldgegevens door jouw goedgekeurde praktijkinformatie.
2. **Kan ik behandelingen en specialisaties toelichten?**
   Ja. We maken je werkelijke zorgaanbod overzichtelijk en gebruiken begrijpelijke taal. Je praktijk controleert medische formuleringen, kwalificaties en uitspraken over behandelresultaten vóór publicatie.
3. **Kunnen patiënten online een afspraak aanvragen?**
   Ja. Growth Rocket biedt mogelijkheden voor afspraken en aanvragen. We spreken vóór oplevering af hoe de praktische afspraakroute werkt. Een algemeen websiteformulier is geen medische intake of patiëntendossier.
4. **Vervangt Growth Rocket mijn patiëntendossiersysteem?**
   Nee. Growth Rocket Hub ondersteunt de dagelijkse bedrijfsvoering. Medische dossiers, behandelnotities en zorgspecifieke processen blijven in het daarvoor bestemde systeem. Een koppeling met bestaande praktijksoftware vraagt een aparte beoordeling en bevestiging.
5. **Kan ik tarieven, vergoedingsinformatie en registraties tonen?**
   Ja. Lever actuele, gecontroleerde informatie over je praktijk aan. Vermeld je tarieven en afspraken duidelijk, zonder te suggereren dat elke patiënt of behandeling voor vergoeding in aanmerking komt. Werk dit bij als je afspraken veranderen.
6. **Kan ik meerdere praktijklocaties opnemen?**
   We kunnen locatie-informatie overzichtelijk presenteren, zoals adres, toegankelijkheid, openingstijden en het aanbod per locatie. Extra pagina’s en locatiespecifieke afspraakmogelijkheden spreken we vooraf af.
7. **Helpt de pagina om mijn praktijk lokaal te vinden?**
   Duidelijke informatie over je echte locatie, therapeuten en behandelingen helpt bezoekers beoordelen of je praktijk past en geeft lokale context voor zoekmachines. Dit garandeert geen zoekposities, patiëntenaantallen of behandelresultaten.
8. **Wat kost PhysioCare en hoe snel kan mijn website online?**
   Het Growth Rocket-pakket kost €69 per maand of €690 per jaar, plus €290 eenmalige opstartkosten. Prijzen zijn exclusief btw. Je website kan in 7 werkdagen online, nadat we alle benodigde informatie en materialen hebben ontvangen en als je op tijd je akkoord geeft.

The FAQ structured data (`FAQPage`) uses the same questions and answers, in the page's language.

---

## 10. Other designs

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Designs for<br>other trades. | Explore more website designs. | Ontdek meer ontwerpen. |
| Intro | This is the only design in its category for now. Here is what the same package looks like for other kinds of business. | Compare the other designs in the collection. We adapt your choice to the services your business actually provides. | Vergelijk de andere ontwerpen in de collectie. We stemmen je keuze af op de diensten die je daadwerkelijk aanbiedt. |
| Cards and links | DentalCare · Dentistry<br>ShineSquad · Cleaning<br>PrimeAbode · Real Estate | DentalCare · Dentist / Tandarts<br>https://ggr-home.vercel.app/design/dentist/dentalcare<br>ShineSquad · Home cleaning / Particuliere schoonmaak<br>https://ggr-home.vercel.app/design/cleaning/shinesquad<br>PrimeAbode · Real estate / Makelaardij<br>https://ggr-home.vercel.app/design/real-estate/primeabode | DentalCare · Dentist / Tandarts<br>https://ggr-home.vercel.app/design/dentist/dentalcare<br>ShineSquad · Home cleaning / Particuliere schoonmaak<br>https://ggr-home.vercel.app/design/cleaning/shinesquad<br>PrimeAbode · Real estate / Makelaardij<br>https://ggr-home.vercel.app/design/real-estate/primeabode |

---

## 11. Closing CTA

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Make Physiotherapy<br>your clinic’s next website. | Make PhysioCare your next website. | Maak van PhysioCare jouw volgende website. |
| Description | A professional website for your clinic. Your complete business system in Growth Rocket Hub. All maintained for you. | A website shaped around your business, connected to Growth Rocket Hub. Hosting, maintenance and support are handled for you. | Een website die past bij jouw bedrijf, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |
| CTAs | Start with this design / Talk to our team | Same | Kies dit ontwerp / Neem contact met ons op |
| Destinations | #package / mailto:sales@getgrowthrocket.com?subject=Physiotherapy%20website%20enquiry | #package / mailto:sales@getgrowthrocket.com?subject=PhysioCare%20website%20enquiry | #package / mailto:sales@getgrowthrocket.com?subject=PhysioCare%20website%20enquiry |

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
| Preview alt | PhysioCare website design preview for physiotherapy practices | Voorbeeld van het PhysioCare-websiteontwerp voor fysiotherapiepraktijken |
| Image direction | Use approved practice photographs showing real reception, accessible rooms and therapists. Obtain permission for identifiable patients; avoid stock imagery implying guaranteed recovery. | Gebruik goedgekeurde foto’s van de echte ontvangst, toegankelijke ruimten en therapeuten. Regel toestemming voor herkenbare patiënten; suggereer met stockbeelden geen gegarandeerd herstel. |
| Image checks | Match alt text to the selected photograph. Verify image rights and do not present stock images as the customer’s own work. | Stem de alt-tekst af op de echte foto. Controleer gebruiksrechten en presenteer stockfoto’s niet als eigen werk van de klant. |
| Shared sections | Sections 6–8 are fixed master copy. Only the design name and CTA destination vary. Retain the six existing video destinations. | Onderdeel 6–8 is vaste tekst. Alleen de ontwerpnaam en knopbestemming verschillen. Behoud de zes bestaande videobestemmingen. |
| SEO and language | Keep substantive content indexable outside the embedded preview. Use distinct canonical URLs and reciprocal language links. Publish FAQ answers as visible text; do not use invented ratings in structured data. | Houd inhoud buiten het ingesloten voorbeeld indexeerbaar. Gebruik eigen canonieke URL’s en wederzijdse taalverwijzingen. Publiceer de FAQ-antwoorden als zichtbare tekst en gebruik geen verzonnen beoordelingen in gestructureerde gegevens. |
| Links | Retain existing design destinations until the new URLs are implemented. Redirect replaced published URLs. Use Dutch destinations only where they exist. | Behoud bestaande ontwerpbestemmingen totdat de nieuwe URL’s zijn ingevoerd. Redirect vervangen gepubliceerde URL’s. Gebruik alleen bestaande Nederlandse bestemmingen. |

See the notes below for how each of these was applied.

---

## Website template corrections (T01–T11)

The document's correction tables list issues found in the **PhysioCare template site itself**
(`https://physiotherapy-template-jet.vercel.app/`). That site is a separate project, not part of this repository, so these are not part
of this update. Copied from the document:

| Location | Observed issue | Action / status |
| --- | --- | --- |
| T01 · Three identities | Document/final URL use PhysioCare; landing uses Physiotherapy; preview uses Restore. | Standardise the design name to PhysioCare across listing, landing, CTA and metadata. Explain Restore as the example practice; preserve existing routes or redirect deliberately. |
| T02 · Appointment form | Book your appointment asks business name, industry, service area and whether the visitor has a website. | Replace with an agreed patient-facing administrative appointment route. Keep sensitive clinical histories out of a generic enquiry form; do not imply a clinical-record integration. |
| T03 · Clinical outcome claims | Preview includes 96% success, pain-free messaging, faster recovery and a 4–6-session expectation. | Have the practice review and substantiate all clinical statements. Remove unsupported guarantees and invented outcome percentages; these are not approved landing-page claims. |
| T04 · Qualifications and proof | Named Dr. profiles, DPT/OCS credentials, 12,000 patients, 2,400 reviews and 18+ years appear as facts. | Replace with verified local practitioner details and authorised evidence. Do not transfer sample credentials, identities or reviews to a real practice. |
| T05 · Availability and emergency claims | Same-day appointments, evenings/weekends and a 24/7 emergency line are advertised. | Confirm actual availability and appropriate contact scope. Remove unverified emergency provision and same-day promises. |
| T06 · Locations and contacts | Example 800 numbers and Wellness Avenue addresses remain; directions point to Downtown Toronto; floating WhatsApp is wa.me/ with no recipient. | Use verified practice details and a valid WhatsApp route if offered. Match maps, addresses, location selectors and contact buttons. |
| T07 · Links and policies | Social links and article cards return to #blog; footer privacy and terms use #. | Supply actual profiles, articles and policies or remove the actions. Do not represent an anchor back to the section as an article destination. |
| T08 · Patient information | The preview states referral, treatment and session guidance as practice facts. | The practice must approve current referral, reimbursement, treatment and first-visit information. Keep the design-sales FAQs separate from patient-facing guidance. |
| T09 · Related designs | The landing recommends DentalCare, ShineSquad and PrimeAbode under other trades. | Use a neutral collection heading and accurate industries; do not present them as other physiotherapy designs. |
| T10 · Shared landing sections | The pages use older Hub positioning and 7-day wording. | Apply approved sections 6–8, including working days, conditions, onboarding fee and VAT. Keep six video destinations. |
| T11 · Delivery checks | Visible content and destinations were reviewed; submissions, integrations and full Dutch journeys were not tested. | Test booking, enquiries, notifications, consent and offered language versions before launch. Do not imply capabilities not confirmed in the agreed setup. |

---

## Notes and decisions

- **N1 — URL.** The English page now lives at `/designs/physiocare-physiotherapy-website`. Every link, the canonical URL, the language links and the structured data use it. The replaced URLs redirect there permanently (308) in one step: `/design/physiotherapy/physiotherapy`, `/designs/physiotherapy/physiotherapy`, `/designs/physiotherapy`. The Dutch page keeps the established Dutch URL `/nl/ontwerpen/fysiotherapie/physiotherapy`, as the document asks; the language switch moves between the two.
- **N2 — Ticker and footer (section 12).** These are site-wide: the same ticker and footer appear on every page of the site, in both languages. Changing them here would change every page, so they are left for a separate, site-wide update (including the "Saloon" category label in the footer).
- **N3 — Shared sections 6–8.** The same master copy ShineSquad already uses (`page-copy/master.ts`); only the design name and CTA destination vary. Checked word for word against this document's sections 6–8.
- **N4 — Monthly card and tax note.** As in the document: the monthly card shows only the struck-through €99, €69 / month and the onboarding fee (no "Billed monthly." or "Save €138 a year…" lines), and "Prices exclude VAT." / "Prijzen zijn exclusief btw." shows on the price card.
- **N5 — FAQ help card.** "Still have a question?" is not in the approved copy, so the help card shows only the document's intro and button. The FAQ button keeps its existing email subject (`<design> website enquiry`); the document gives no destination for it.
- **N6 — Section 5 image.** The page shows a scrolling screenshot of the design, not a photograph, so the document's image direction does not apply; the alt text is the document's "Preview alt" / "Alt-tekst voorbeeld". The caption overlay is hidden in the current design and stays hidden.
- **N7 — "Watch on YouTube".** The video panel plays the video in the page and has no YouTube link, so none is added. "Play video" / "Video afspelen" is used for the play control. The six videos keep their existing (English) destinations in both languages, as the document requires.
- **N8 — Hidden labels on the Dutch page.** Screen-reader labels not covered by the document use the document's own Dutch terms: "Kruimelpad", "Schermkeuze", "Betaalkeuze" and "Uitlegvideo’s".
- **N9 — Heading colours.** Headings keep the page's purple accent; the words are exactly the document's. Where the document gives a heading as one sentence (no line break), it stays one sentence with the accent on its closing words: “Build confidence before the first appointment.”, “Your practice. Your approach. Your website.”, “Your questions answered.” and “Make PhysioCare your next website.” (and the Dutch equivalents).
- **N10 — Other designs.** The cards are DentalCare, ShineSquad and PrimeAbode (designs for other trades, since PhysioCare is the only physiotherapy design), exactly as the document lists them, with the document's labels on this page only (the `/designs` listing keeps its own). The document's links use the staging domain `ggr-home.vercel.app` and older paths; the cards link to each design's current URL on this site, in the page's language.
- **N11 — Design name.** The document (and the other designs' documents) name this design PhysioCare. Its title in the template data was "Physiotherapy"; it is now "PhysioCare", so the name is the same on this page, on the `/designs` listing card and on other designs' cards. The slug and the Dutch URL keep `physiotherapy`, and the trade name "Physiotherapy" in the footer and the category filter is unchanged.
