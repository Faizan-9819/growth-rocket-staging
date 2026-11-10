# CircuitPro design page — content update reference

| | |
| --- | --- |
| **Source** | `CircuitPro — Electrical Contractor Design Page Copy.docx` (16 October 2026) |
| **English page** | `/designs/circuitpro-electrical-contractor-website` (was `/design/electrician/circuitpro`, which now redirects) |
| **Dutch page** | `/nl/ontwerpen/elektricien/circuitpro` |
| **Scope** | This page only, both languages. |

**Where the copy lives in the code**

- CircuitPro's own copy (sections 0–5 and 9–11), English and Dutch: `app/components/sections/design/page-copy/circuitpro.ts`
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
| SEO title | CircuitPro \| Electrical Website Design & Business Tools \| Growth Rocket | Electrical Contractor Website Design \| CircuitPro \| Growth Rocket | Website voor elektrotechnische installatiebedrijven \| CircuitPro |
| Meta description | Explore CircuitPro: a professional electrical website design with appointments, enquiries, Growth Rocket Hub and ongoing technical support. Built for small businesses. | Explore CircuitPro, a website design for electrical contractors, with Growth Rocket Hub, hosting, maintenance and support. View the design and pricing. | Ontdek CircuitPro: een website voor elektrotechnische installatiebedrijven, met Growth Rocket Hub, hosting, onderhoud en ondersteuning. Bekijk het ontwerp en de prijzen. |
| Primary topic | — | Electrical contractor website design | Website voor elektrotechnische installatiebedrijven |
| Focus | — | Commercial electrical projects | Zakelijke elektrotechnische projecten |
| Final URL (EN) | `/design/electrician/circuitpro` | https://www.getgrowthrocket.com/designs/circuitpro-electrical-contractor-website | Gebruik de vastgestelde Nederlandse URL-structuur en wederzijdse taalverwijzingen. |

---

## 1. Hero

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Label | Website design for small businesses | Website design for electrical contractors | Websiteontwerp voor elektrotechnische installatiebedrijven |
| H1 line 1 | CircuitPro. | Same | CircuitPro. |
| H1 line 2 | A sharp, conversion-focused site for electrical specialists. | A website that shows what your electrical business can deliver. | Een website die laat zien wat jouw installatiebedrijf kan. |
| Description | A professional website for your business. A complete business system with Growth Rocket Hub. All maintained for you. | Present your services, show relevant projects and give clients a clear route to discuss their next installation. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system. | Presenteer je diensten en projecten en maak het makkelijk om een volgende installatie te bespreken. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |

---

## 2–3. Breadcrumb and preview

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Breadcrumb | All designs / CircuitPro | Same | Alle ontwerpen / CircuitPro |
| Device controls | Desktop · Tablet · Mobile | Same | Computer · Tablet · Mobiel |
| Preview link | Preview in browser | Same | Bekijk in je browser |
| Primary CTA | Start with this design | Same | Kies dit ontwerp |
| Browser label | — (not shown) | CircuitPro · Design preview | CircuitPro · Websitevoorbeeld |
| Preview caption | Live preview of the design. Open it in a browser to explore every section. Example branding and content are replaced with your own details. | Explore CircuitPro using Strøm Electric as the example business. We adapt the branding, services and content to your business. | Bekijk CircuitPro met Strøm Electric als voorbeeldbedrijf. We stemmen de huisstijl, diensten en inhoud af op jouw bedrijf. |
| Destinations | https://electrician03-temp.vercel.app/ · CTA `#package` | https://electrician03-temp.vercel.app/<br>Primary CTA: #package | https://electrician03-temp.vercel.app/<br>Primaire knop: #package |

---

## 4. Benefits

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Build confidence.<br>Before the first visit. | Show your capability.<br>Before the site meeting. | Laat zien wat je kunt.<br>Vóór het gesprek op locatie. |
| Intro | Choosing a business is personal. CircuitPro gives prospective customers a clear picture of your business and a simple way to take the next step. | Contractors and property managers want to know whether your experience fits their project. CircuitPro helps you show the work you take on, how you coordinate it and who will be their point of contact. | Aannemers en vastgoedbeheerders willen weten of jouw ervaring aansluit op hun project. Met CircuitPro laat je zien welk werk je aanneemt, hoe je het organiseert en wie hun aanspreekpunt is. |
| Card 1 title | Make your services easy to understand. | Show the work you take on. | Laat zien welk werk je aanneemt. |
| Card 1 body | Give each of your services a clear introduction, so customers can find what matters to them without a phone call first. | Present fit-outs, distribution-board work, lighting or other services you provide. Explain the types of buildings and projects you work on so clients can assess whether you are a suitable partner. | Presenteer bedrijfsinrichtingen, verdeelinrichtingen, verlichting of andere diensten die je aanbiedt. Benoem de soorten panden en projecten, zodat klanten kunnen beoordelen of je bij hun opdracht past. |
| Card 2 title | Introduce the people behind the work. | Give projects useful context. | Geef projecten inhoud. |
| Card 2 body | Show your team, their experience and how you work, so an unfamiliar business feels more approachable. | Pair photographs with a short account of the brief, your scope and the completed work. Relevant examples help clients understand your experience beyond a list of services. | Combineer foto’s met een korte uitleg van de opdracht, jouw werkzaamheden en het resultaat. Relevante voorbeelden maken je ervaring concreter dan alleen een dienstenlijst. |
| Card 3 title | Let genuine feedback build trust. | Explain how you work on site. | Leg uit hoe je op locatie werkt. |
| Card 3 body | Create space for your own customer testimonials and credentials, alongside the story of your business. | Introduce the people responsible for delivery and explain how you coordinate access, other trades and handover. Make your approach clear without promising every project follows the same schedule. | Stel de mensen voor die het werk begeleiden en vertel hoe je toegang, andere vakmensen en oplevering afstemt. Maak je aanpak duidelijk zonder voor elk project dezelfde planning te beloven. |
| Card 4 title | Make the next step feel simple. | Make project enquiries straightforward. | Maak een projectaanvraag eenvoudig. |
| Card 4 body | Keep booking prompts, enquiry forms and contact details easy to find, including on a phone. | Give clients an easy way to share the site location, type of work and intended timing. You can review the enquiry, clarify requirements and arrange the next conversation. | Laat klanten de locatie, het soort werk en de gewenste planning delen. Je beoordeelt de aanvraag, bespreekt wat er nodig is en plant het volgende gesprek. |

---

## 5. Personalisation

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Your business. Your identity.<br>Your website. | Your projects. Your team.<br>Your website. | Jouw projecten. Jouw team.<br>Jouw website. |
| Intro | The design is your starting point. We shape the website around the people, services and details that make your business yours. | We shape CircuitPro around your company, the projects you deliver and the sectors you serve. | We stemmen CircuitPro af op jouw bedrijf, de projecten die je uitvoert en de sectoren waarin je werkt. |
| List 1 | Your logo, colours and business story | Your logo, colours and company background | Je logo, kleuren en bedrijfsverhaal |
| List 2 | Your services and service information | Your electrical services and project types | Je elektrotechnische diensten en soorten projecten |
| List 3 | Your team and business photography | Your sectors, regions and client groups | Je sectoren, regio’s en klantgroepen |
| List 4 | Your locations and contact details | Project photographs with a clear account of your work | Projectfoto’s met een duidelijke toelichting op je werk |
| List 5 | Genuine customer testimonials and reviews | Your project leads, electricians and working methods | Je projectleiders, monteurs en werkwijze |
| List 6 | Verified ratings and professional credentials | Genuine client references and verified accreditations | Echte klantreferenties en aantoonbare erkenningen |
| List 7 | Video testimonials and business introductions | Your enquiry process and project contact details | Je aanvraagproces en contactgegevens voor projecten |
| Image caption | — (overlay hidden in the current design) | CircuitPro, shaped around your business. | CircuitPro, afgestemd op jouw bedrijf. |
| Image alt text (document's "Preview alt") | CircuitPro design, shown as it would look for your business | CircuitPro website design preview for electrical contractors | Voorbeeld van het CircuitPro-websiteontwerp voor elektrotechnische installatiebedrijven |

---

## 6. Growth Rocket Hub — shared master copy

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | A great website.<br>A connected system. | Same | Een sterke website.<br>Een verbonden systeem. |
| Intro | A professional website for your business, a complete business system in Growth Rocket Hub, and ongoing technical maintenance and upkeep. All working together. | Your professional website and Growth Rocket Hub work together as one complete online business system, with hosting, technical maintenance and support handled for you. | Je professionele website en Growth Rocket Hub vormen samen één compleet online businesssysteem. Hosting, technisch onderhoud en ondersteuning zijn voor je geregeld. |
| Step 01 title | A customer gets in touch | Same | Een klant neemt contact op |
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
| CTA | Start with CircuitPro | Same | Start met CircuitPro |
| CTA destination | mailto:sales@getgrowthrocket.com?subject=Get%20started%20with%20CircuitPro | Same | mailto:sales@getgrowthrocket.com?subject=Starten%20met%20CircuitPro |

---

## 8. Launch — shared master copy

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Ready in as little as 7 days. | Ready in 7 working days.* | Online in 7 werkdagen.* |
| Intro | You focus on your business.<br>We take care of bringing it online. | Same | Jij richt je op je bedrijf.<br>Wij zorgen dat je online komt. |
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
| Intro | Ask us anything about CircuitPro — what is included, how it is set up and what happens after it goes live. (help card, under the title “Still have a question?”) | Questions about CircuitPro? We’re happy to help with the design, setup and what’s included. | Vragen over CircuitPro? We helpen je graag met het ontwerp, de inrichting en wat je krijgt. |
| CTA | Talk to our team | Same | Neem contact met ons op |

### Current questions (7, replaced)

1. Am I buying just the website design?
2. Can CircuitPro match my business’s branding?
3. Can I use my existing domain?
4. What do I need to provide?
5. How do appointments and enquiries work?
6. What does the package cost?
7. What happens if I need help after launch?

### New questions — English (8)

1. **Is CircuitPro a design I need to build myself?**
   No. We tailor and launch your website as part of Growth Rocket, a complete online business system. Your professional website comes with Growth Rocket Hub, hosting, SSL, technical maintenance and support.
2. **Why does CircuitPro suit commercial electrical contractors?**
   It offers room to explain your capabilities, introduce your team and present relevant project work. We adapt the current mixed residential and commercial example around your actual sectors and services, so clients can understand the projects you are equipped to take on.
3. **What should I include in a project example?**
   Useful details include the type of building, the client’s brief, your scope of work and photographs of the completed installation. Include customer names, logos or testimonials only with permission. Clear project context is more useful than unsupported claims about scale or performance.
4. **Can clients send project enquiries and request a quote?**
   Yes. Website enquiries connect to Growth Rocket Hub, where you can follow up, manage contacts, create quotes and send invoices. We agree which initial project details to collect during setup. A request starts a conversation; it does not automatically produce a technical estimate.
5. **Can I arrange site meetings through the website?**
   Growth Rocket includes appointment management connected to your website. We agree the booking or request process with you during onboarding. You can clarify the purpose and access arrangements before confirming the visit.
6. **Will the Hub manage my construction projects or estimating?**
   The Hub supports enquiries, appointments, customer contacts, quotes and invoices. It is not presented as construction project-management or specialist estimating software. Connections to your existing systems and bespoke workflows need a separate scope discussion.
7. **Can I use my existing branding and domain?**
   Yes. We adapt CircuitPro to your identity, services, team and project content, and you can keep your existing domain. Hosting, SSL, technical maintenance and ongoing support are included, with support requests available through the Hub.
8. **What does CircuitPro cost, and how quickly can it go live?**
   The Growth Rocket package costs €69 per month or €690 per year, plus a €290 one-time onboarding fee. Prices exclude VAT. Your website can be ready in 7 working days after we receive all required information and materials, provided you give your approvals on time.

### New questions — Dutch (8)

1. **Is CircuitPro een ontwerp dat ik zelf moet bouwen?**
   Nee. Wij passen je website aan en zetten die online als onderdeel van Growth Rocket: een compleet online businesssysteem. Je professionele website komt samen met Growth Rocket Hub, hosting, SSL, technisch onderhoud en ondersteuning.
2. **Waarom past CircuitPro bij zakelijke elektrotechnische projecten?**
   Je krijgt ruimte om je expertise uit te leggen, je team voor te stellen en relevante projecten te laten zien. We stemmen het huidige voorbeeld, met particulier en zakelijk werk, af op jouw sectoren en diensten. Zo begrijpen klanten welke projecten je bedrijf kan uitvoeren.
3. **Wat zet ik bij een projectvoorbeeld?**
   Benoem het soort pand, de vraag van de klant, jouw werkzaamheden en voeg foto’s van de opgeleverde installatie toe. Gebruik klantnamen, logo’s en beoordelingen alleen met toestemming. Duidelijke projectinformatie zegt meer dan onbewezen claims over omvang of prestaties.
4. **Kunnen klanten een projectaanvraag sturen of een offerte aanvragen?**
   Ja. Aanvragen via je website komen in Growth Rocket Hub. Daar volg je ze op, beheer je contacten en maak je offertes en facturen op. Tijdens de inrichting spreken we af welke eerste projectgegevens nodig zijn. Een aanvraag begint het gesprek en maakt niet automatisch een technische calculatie.
5. **Kan ik via de website afspraken op locatie plannen?**
   Growth Rocket biedt afsprakenbeheer dat verbonden is met je website. Tijdens de inrichting spreken we af hoe klanten een afspraak boeken of aanvragen. Je kunt het doel en de toegang tot de locatie bespreken voordat je de afspraak bevestigt.
6. **Beheert de Hub mijn bouwprojecten of calculaties?**
   De Hub ondersteunt aanvragen, afspraken, contacten, offertes en facturen. Het is geen gespecialiseerd systeem voor bouwprojectbeheer of technische calculaties. Koppelingen met bestaande systemen en specifieke werkprocessen bespreken we apart.
7. **Kan ik mijn bestaande huisstijl en domeinnaam gebruiken?**
   Ja. We stemmen CircuitPro af op je huisstijl, diensten, team en projecten. Je kunt je domeinnaam behouden. Hosting, SSL, technisch onderhoud en doorlopende ondersteuning zijn inbegrepen. Via de Hub kun je een supportverzoek indienen.
8. **Wat kost CircuitPro en hoe snel kan mijn website online?**
   Het Growth Rocket-pakket kost €69 per maand of €690 per jaar, plus €290 eenmalige opstartkosten. Prijzen zijn exclusief btw. Je website kan in 7 werkdagen online, nadat we alle benodigde informatie en materialen hebben ontvangen en als je op tijd je akkoord geeft.

The FAQ structured data (`FAQPage`) uses the same questions and answers, in the page's language.

---

## 10. Other designs

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Another look for<br>your business. | Explore other electrical website designs. | Bekijk andere elektrotechnische ontwerpen. |
| Intro | More electrical designs in the same package. Every one of them is built, connected and maintained the same way. | Compare the other designs in the collection. We adapt your choice to the services your business actually provides. | Vergelijk de andere ontwerpen in de collectie. We stemmen je keuze af op de diensten die je daadwerkelijk aanbiedt. |
| Cards and links | SparkFix · Electrical<br>VoltGuard · Electrical | SparkFix · Domestic repairs and installations<br>https://ggr-home.vercel.app/design/electrician/sparkfix<br>VoltGuard · Electrical inspections and testing<br>https://ggr-home.vercel.app/design/electrician/voltguard | SparkFix · Reparaties en installaties in woningen<br>https://ggr-home.vercel.app/design/electrician/sparkfix<br>VoltGuard · Elektrotechnische inspecties en metingen<br>https://ggr-home.vercel.app/design/electrician/voltguard |

---

## 11. Closing CTA

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Make CircuitPro<br>your business’s next website. | Make CircuitPro your next website. | Maak van CircuitPro jouw volgende website. |
| Description | A professional website for your business. Your complete business system in Growth Rocket Hub. All maintained for you. | A website shaped around your business, connected to Growth Rocket Hub. Hosting, maintenance and support are handled for you. | Een website die past bij jouw bedrijf, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |
| CTAs | Start with this design / Talk to our team | Same | Kies dit ontwerp / Neem contact met ons op |
| Destinations | #package / mailto:sales@getgrowthrocket.com?subject=CircuitPro%20website%20enquiry | Same | #package / mailto:sales@getgrowthrocket.com?subject=CircuitPro%20website%20enquiry |

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
| Preview alt | CircuitPro website design preview for electrical contractors | Voorbeeld van het CircuitPro-websiteontwerp voor elektrotechnische installatiebedrijven |
| Image direction | Commercial project work, such as a fit-out or distribution-board installation. | Zakelijk projectwerk, bijvoorbeeld een bedrijfsinrichting of verdeelinrichting. |
| Image checks | Match alt text to the selected photograph. Verify image rights and do not present stock images as the customer’s own work. | Stem de alt-tekst af op de echte foto. Controleer gebruiksrechten en presenteer stockfoto’s niet als eigen werk van de klant. |
| Shared sections | Sections 6–8 are fixed master copy. Only the design name and CTA destination vary. Retain the six existing video destinations. | Onderdeel 6–8 is vaste tekst. Alleen de ontwerpnaam en knopbestemming verschillen. Behoud de zes bestaande videobestemmingen. |
| SEO and language | Keep substantive content indexable outside the embedded preview. Use distinct canonical URLs and reciprocal language links. Publish FAQ answers as visible text; do not use invented ratings in structured data. | Houd inhoud buiten het ingesloten voorbeeld indexeerbaar. Gebruik eigen canonieke URL’s en wederzijdse taalverwijzingen. Publiceer de FAQ-antwoorden als zichtbare tekst en gebruik geen verzonnen beoordelingen in gestructureerde gegevens. |
| Links | Retain existing design destinations until the new URLs are implemented. Redirect replaced published URLs. Use Dutch destinations only where they exist. | Behoud bestaande ontwerpbestemmingen totdat de nieuwe URL’s zijn ingevoerd. Redirect vervangen gepubliceerde URL’s. Gebruik alleen bestaande Nederlandse bestemmingen. |

See the notes below for how each of these was applied.

---

## Website template corrections (T01–T12)

The document's correction tables list issues found in the **CircuitPro template site itself**
(`https://electrician03-temp.vercel.app/`). That site is a separate project, not part of this repository, so these are not part
of this update. Copied from the document:

| Location | Observed issue | Action / status |
| --- | --- | --- |
| T01 · Commercial focus | Preview hero says modern living; projects and reviews mix domestic and commercial work. Commercial contracting is one of several services. | For this positioning, lead with commercial capability and project enquiries. Prioritise relevant sectors, project scope, site coordination and case studies. |
| T02 · Example identity | The design is CircuitPro; the preview is Strøm Electric / Strøm Electric Co. | Identify Strøm Electric as example branding and use it consistently. Replace it with the customer’s verified identity at launch. |
| T03 · Missing fragment destinations | Primary appointment links target #book. Full team targets #team-all, directions #directions, and all articles #all-posts. These sections were not present in the reviewed page structure. | Create the intended routes or retarget the links. Use the visible contact section for enquiries where appropriate; verify each primary CTA. |
| T04 · Footer links | Most footer company/services/social links point to #. Legal links target #privacy, #cookies, #terms and #imprint. | Use real section/page destinations. Verify working legal and cookie-setting controls; a fragment alone is not a functioning policy page or settings panel. |
| T05 · Credentials | Claims include NEN 1010 certified, NEN-certified electrician, VCA and InstallQ certification and EICR-equivalent reports. | Request evidence and exact approved wording from the electrical business. Do not treat all standards, registrations and report types as interchangeable. This review does not validate those claims. |
| T06 · Awards and ratings | Top-rated electrician 2025 / Homeowner’s choice award, Google 4.9, Werkspot 9.4, Trustpilot 4.8 and 2,000+ projects appear. | Verify sources, permission and current relevance, or remove. Do not present demonstration reviews or platform ratings as genuine customer evidence. |
| T07 · Service promises | Nationwide 24/7 response, urgent arrival within an hour, same-day availability, fixed prices and no subcontractors are claimed. | Confirm each with the client. Align hours and coverage; keep commercial project timelines separate from emergency response promises. |
| T08 · Booking and enquiry | Copy says choose a date and book in under two minutes; the visible form collects enquiries without a date/time choice. | Implement and test the actual appointment flow or use request wording. Check the service options and Hub delivery; no form submission was performed. |
| T09 · Locations and contacts | Two example bases, phone numbers, WhatsApp, email, KvK and VAT details are displayed. Coverage says Randstad and beyond. | Replace with verified premises, service region and contact targets. Do not copy example office addresses or legal identifiers to a client site. |
| T10 · Project and team evidence | Photographs and team profiles claim specific experience, completed work and certifications. | Confirm image rights, identities and actual project authorship. Replace examples with permitted client material and accurate descriptions. |
| T11 · Shared landing sections | The current pages call the Hub the complete system and still use “7 days”, including the ticker. Old documents retain dental references. | Replace with the approved shared copy in sections 6–8 and the new ticker/footer. Use 7 working days with its nearby condition, and keep onboarding costs and VAT visible. |
| T12 · Language and delivery checks | These previews are English. Form delivery, appointment confirmation and Hub routing have not been tested. | Localise all offered Dutch text, including labels, errors and consent. Test the configured contact journey before launch. Do not claim Dutch video audio unless it exists. |

---

## Notes and decisions

- **N1 — URL.** The English page now lives at `/designs/circuitpro-electrical-contractor-website`. Every link, the canonical URL, the language links and the structured data use it. The replaced URLs redirect there permanently (308) in one step: `/design/electrician/circuitpro`, `/designs/electrician/circuitpro`, `/designs/circuitpro`. The Dutch page keeps the established Dutch URL `/nl/ontwerpen/elektricien/circuitpro`, as the document asks; the language switch moves between the two.
- **N2 — Ticker and footer (section 12).** These are site-wide: the same ticker and footer appear on every page of the site, in both languages. Changing them here would change every page, so they are left for a separate, site-wide update (including the "Saloon" category label in the footer).
- **N3 — Shared sections 6–8.** The same master copy ShineSquad already uses (`page-copy/master.ts`); only the design name and CTA destination vary. Checked word for word against this document's sections 6–8.
- **N4 — Monthly card and tax note.** As in the document: the monthly card shows only the struck-through €99, €69 / month and the onboarding fee (no "Billed monthly." or "Save €138 a year…" lines), and "Prices exclude VAT." / "Prijzen zijn exclusief btw." shows on the price card.
- **N5 — FAQ help card.** "Still have a question?" is not in the approved copy, so the help card shows only the document's intro and button. The FAQ button keeps its existing email subject (`<design> website enquiry`); the document gives no destination for it.
- **N6 — Section 5 image.** The page shows a scrolling screenshot of the design, not a photograph, so the document's image direction does not apply; the alt text is the document's "Preview alt" / "Alt-tekst voorbeeld". The caption overlay is hidden in the current design and stays hidden.
- **N7 — "Watch on YouTube".** The video panel plays the video in the page and has no YouTube link, so none is added. "Play video" / "Video afspelen" is used for the play control. The six videos keep their existing (English) destinations in both languages, as the document requires.
- **N8 — Hidden labels on the Dutch page.** Screen-reader labels not covered by the document use the document's own Dutch terms: "Kruimelpad", "Schermkeuze", "Betaalkeuze" and "Uitlegvideo’s".
- **N9 — Heading colours.** Headings keep the page's purple accent; the words are exactly the document's. Where the document gives a heading as one sentence (no line break), it stays one sentence with the accent on its closing words: “Your questions answered.” and “Make CircuitPro your next website.” (and the Dutch equivalents).
- **N10 — Other designs.** The cards are SparkFix and VoltGuard, the other electrical designs, exactly as the document lists them, with the document's labels on this page only (the `/designs` listing keeps its own). The document's links use the staging domain `ggr-home.vercel.app` and older paths; the cards link to each design's current URL on this site, in the page's language.
