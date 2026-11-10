# PipeWorks design page — content update reference

| | |
| --- | --- |
| **Source** | `PipeWorks — Plumber Design Page Copy.docx` (16 October 2026) |
| **English page** | `/designs/pipeworks-plumber-website` (was `/design/plumber/pipeworks`, which now redirects) |
| **Dutch page** | `/nl/ontwerpen/loodgieter/pipeworks` |
| **Scope** | This page only, both languages. |

**Where the copy lives in the code**

- PipeWorks's own copy (sections 0–5 and 9–11), English and Dutch: `app/components/sections/design/page-copy/pipeworks.ts`
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
| SEO title | PipeWorks \| Plumbing Website Design & Business Tools \| Growth Rocket | Plumber Website Design \| PipeWorks \| Growth Rocket | Website voor loodgieters \| PipeWorks \| Growth Rocket |
| Meta description | Explore PipeWorks: a professional plumbing website design with appointments, enquiries, Growth Rocket Hub and ongoing technical support. Built for small businesses. | Explore PipeWorks, a website design for plumbers. Present your services and work, with Growth Rocket Hub, hosting, maintenance and support included. | Ontdek PipeWorks: een websiteontwerp voor loodgieters. Laat je diensten en werk zien, met Growth Rocket Hub, hosting, onderhoud en ondersteuning. |
| Primary topic | — | plumber website design | Website voor loodgieters |
| Supporting topics | — | Plumbing services; local service areas; repair enquiries; planned installations | — (not in the Dutch copy) |
| Final URL (EN) | `/design/plumber/pipeworks` | https://www.getgrowthrocket.com/designs/pipeworks-plumber-website | Gebruik de vastgestelde Nederlandse URL-structuur en koppel de Nederlandse en Engelse variant. |

---

## 1. Hero

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Label | Website design for small businesses | Website design for plumbers | Websiteontwerp voor loodgieters |
| H1 line 1 | PipeWorks. | Same | PipeWorks. |
| H1 line 2 | A dependable website for plumbers who want more booked jobs. | A clear website for your plumbing business. | Een duidelijke website voor je loodgietersbedrijf. |
| Description | A professional website for your business. A complete business system with Growth Rocket Hub. All maintained for you. | Help customers find the right plumbing service, see where you work and request a visit. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system. | Laat klanten zien waarmee je helpt, waar je werkt en hoe ze een bezoek aanvragen. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |

---

## 2–3. Breadcrumb and preview

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Breadcrumb | All designs / PipeWorks | Same | Alle ontwerpen / PipeWorks |
| Device controls | Desktop · Tablet · Mobile | Same | Computer · Tablet · Mobiel |
| Preview link | Preview in browser | Same | Bekijk in je browser |
| Primary CTA | Start with this design | Same | Kies dit ontwerp |
| Browser label | — (not shown) | PipeWorks · Design preview | PipeWorks · Websitevoorbeeld |
| Preview caption | Live preview of the design. Open it in a browser to explore every section. Example branding and content are replaced with your own details. | Explore PipeWorks using AquaFlow as the example business. We adapt the branding, services and content to your business. | Bekijk PipeWorks met AquaFlow als voorbeeldbedrijf. We stemmen de huisstijl, diensten en inhoud af op jouw bedrijf. |
| Destinations | https://plumber1-temp.vercel.app/ · CTA `#package` | Preview: https://plumber1-temp.vercel.app/<br>Primary CTA: #package | Voorbeeld: https://plumber1-temp.vercel.app/<br>Primaire knop: #package |

---

## 4. Benefits

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Build confidence.<br>Before the first visit. | Show customers you can help.<br>Before they pick up the phone. | Laat zien waarmee je helpt.<br>Voordat de klant belt. |
| Intro | Choosing a business is personal. PipeWorks gives prospective customers a clear picture of your business and a simple way to take the next step. | A leaking tap and a planned bathroom installation need different answers. PipeWorks helps visitors find the service they need, check your area and understand how to contact you. | Een lekkende kraan vraagt om andere informatie dan een geplande badkamerinstallatie. Met PipeWorks vinden bezoekers de juiste dienst, je werkgebied en een duidelijke manier om contact op te nemen. |
| Card 1 title | Make your services easy to understand. | Make your services easy to find. | Maak je diensten makkelijk vindbaar. |
| Card 1 body | Give each of your services a clear introduction, so customers can find what matters to them without a phone call first. | Separate leak repairs, blocked drains, pipework and planned installations. Customers can recognise their problem without having to decode trade terminology. | Geef lekkages, verstoppingen, leidingwerk en geplande installaties elk een duidelijke plek. Klanten herkennen hun probleem zonder vaktaal te hoeven begrijpen. |
| Card 2 title | Introduce the people behind the work. | Show where you work. | Laat zien waar je werkt. |
| Card 2 body | Show your team, their experience and how you work, so an unfamiliar business feels more approachable. | Explain your actual service area and who you work for, from homeowners to landlords and local businesses. Make it clear how to check whether you cover their address. | Beschrijf je werkgebied en voor wie je werkt: particulieren, verhuurders of lokale bedrijven. Maak duidelijk hoe klanten kunnen nagaan of je op hun adres komt. |
| Card 3 title | Let genuine feedback build trust. | Put real work behind your name. | Laat het werk achter je naam zien. |
| Card 3 body | Create space for your own customer testimonials and credentials, alongside the story of your business. | Introduce your team and show repairs or installations with your own photographs. Genuine reviews and verified qualifications help visitors understand who they are inviting into their property. | Stel je team voor en toon reparaties of installaties met eigen foto’s. Echte klantbeoordelingen en aantoonbare kwalificaties laten zien wie klanten in huis halen. |
| Card 4 title | Make the next step feel simple. | Give each enquiry a clear route. | Maak de volgende stap duidelijk. |
| Card 4 body | Keep booking prompts, enquiry forms and contact details easy to find, including on a phone. | Keep your phone number easy to find for urgent problems and offer a clear enquiry route for planned work. Explain your availability without promising a response time you cannot deliver. | Zet je telefoonnummer duidelijk in beeld voor spoedvragen en bied een aanvraagmogelijkheid voor gepland werk. Geef je bereikbaarheid aan zonder een reactietijd te beloven die je niet kunt waarmaken. |

---

## 5. Personalisation

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Your business. Your identity.<br>Your website. | Your trade. Your name.<br>Your website. | Jouw vak. Jouw naam.<br>Jouw website. |
| Intro | The design is your starting point. We shape the website around the people, services and details that make your business yours. | PipeWorks is the starting point. We shape the website around your plumbing business, your customers and the work you actually do. | PipeWorks is het vertrekpunt. We stemmen de website af op jouw loodgietersbedrijf, je klanten en het werk dat je daadwerkelijk uitvoert. |
| List 1 | Your logo, colours and business story | Your logo, colours and company story | Je logo, kleuren en bedrijfsverhaal |
| List 2 | Your services and service information | Your repairs, pipework and installation services | Je reparaties, leidingwerk en installatiediensten |
| List 3 | Your team and business photography | Your engineers and verified qualifications | Je monteurs en aantoonbare kwalificaties |
| List 4 | Your locations and contact details | Your own project photographs and genuine reviews | Je eigen projectfoto’s en echte klantbeoordelingen |
| List 5 | Genuine customer testimonials and reviews | Your service area, opening hours and contact details | Je werkgebied, openingstijden en contactgegevens |
| List 6 | Verified ratings and professional credentials | Your approach to urgent requests and planned work | Je werkwijze voor spoedvragen en gepland werk |
| List 7 | Video testimonials and business introductions | Clear enquiry and appointment options | Duidelijke aanvraag- en afspraakmogelijkheden |
| Image alt text (document's "Preview alt") | PipeWorks design, shown as it would look for your business | PipeWorks website design preview for a plumber business | Voorbeeld van het PipeWorks-websiteontwerp voor loodgieters |

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
| CTA | Start with PipeWorks | Same | Start met PipeWorks |
| CTA destination | mailto:sales@getgrowthrocket.com?subject=Get%20started%20with%20PipeWorks | Same | mailto:sales@getgrowthrocket.com?subject=Starten%20met%20PipeWorks |

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
| Intro | Ask us anything about PipeWorks — what is included, how it is set up and what happens after it goes live. (help card, under the title “Still have a question?”) | Questions about PipeWorks? We’re happy to help with the design, setup and what’s included. | Vragen over PipeWorks? We helpen je graag met het ontwerp, de inrichting en wat je krijgt. |

### Current questions (7, replaced)

1. Am I buying just the website design?
2. Can PipeWorks match my business’s branding?
3. Can I use my existing domain?
4. What do I need to provide?
5. How do appointments and enquiries work?
6. What does the package cost?
7. What happens if I need help after launch?

### New questions — English (8)

1. **Is PipeWorks just a website design I download?**
   No. We tailor and launch your website as part of Growth Rocket: a complete online business system. Your website comes with Growth Rocket Hub, hosting, SSL, maintenance and support. You do not need to install the design yourself.
2. **What makes PipeWorks suitable for a plumbing business?**
   It brings services, service areas, team details and contact options together. Visitors can distinguish a repair enquiry from planned installation work. We replace the example business content with your own services, photographs and information.
3. **Can I show emergency repairs and planned installations separately?**
   Yes. We can make the difference clear in your service content and contact routes. Any emergency availability, call-out charges and arrival times must reflect your actual service. The website does not guarantee an immediate response or dispatch a plumber automatically.
4. **Can customers explain the problem before I contact them?**
   Yes. Customers can send an enquiry with their contact details and a description of the job. We agree the information your enquiry form should collect during setup. You can review and follow up on enquiries in Growth Rocket Hub.
5. **Can customers book a visit, and can I send a quote?**
   Growth Rocket includes appointment management, enquiries, quotes and invoices. We agree your booking setup during onboarding. An enquiry is not automatically a confirmed appointment, and the website does not calculate a plumbing quote from a fault description.
6. **Can I use my own branding and show the areas I cover?**
   Yes. We adapt the design to your logo, colours, services, photographs and real service area. You can use your existing domain. We can also explain whether you work with homeowners, landlords or businesses without claiming coverage you do not provide.
7. **Who looks after the website after launch?**
   We handle hosting, SSL, technical maintenance and ongoing support. You can raise support requests through the Hub. If you need additional pages or custom functionality, we can discuss the scope with you.
8. **What does PipeWorks cost, and when can it go live?**
   The Growth Rocket package costs €69 per month or €690 per year, plus a €290 one-time onboarding fee. Prices exclude VAT. Your website can be ready in 7 working days after we receive all required information and materials, provided you give your approvals on time.

### New questions — Dutch (8)

1. **Is PipeWorks alleen een ontwerp dat ik zelf download?**
   Nee. Wij passen je website aan en zetten die online als onderdeel van Growth Rocket: een compleet online businesssysteem. Je krijgt je website samen met Growth Rocket Hub, hosting, SSL, onderhoud en ondersteuning. Je hoeft het ontwerp niet zelf te installeren.
2. **Waarom past PipeWorks bij een loodgietersbedrijf?**
   Je diensten, werkgebied, team en contactmogelijkheden staan overzichtelijk bij elkaar. Bezoekers zien het verschil tussen een reparatie en een geplande installatie. We vervangen de voorbeeldinhoud door jouw diensten, foto’s en bedrijfsgegevens.
3. **Kan ik spoedreparaties en geplande installaties apart presenteren?**
   Ja. We maken dat onderscheid duidelijk in je diensten en contactmogelijkheden. Bereikbaarheid bij spoed, voorrijkosten en aankomsttijden moeten passen bij wat je werkelijk biedt. De website garandeert geen directe reactie en stuurt niet automatisch een loodgieter op pad.
4. **Kunnen klanten hun probleem vooraf beschrijven?**
   Ja. Klanten kunnen een aanvraag sturen met hun contactgegevens en een omschrijving van de klus. Tijdens de inrichting spreken we af welke informatie je formulier moet verzamelen. Je bekijkt en volgt aanvragen op in Growth Rocket Hub.
5. **Kunnen klanten een bezoek boeken en kan ik een offerte sturen?**
   Growth Rocket biedt afsprakenbeheer, aanvragen, offertes en facturen. Tijdens de inrichting stemmen we af hoe klanten afspraken boeken. Een aanvraag is niet automatisch een bevestigde afspraak. De website berekent ook niet zelf een prijs op basis van een storingsomschrijving.
6. **Kan ik mijn eigen huisstijl en werkgebied gebruiken?**
   Ja. We stemmen het ontwerp af op je logo, kleuren, diensten, foto’s en daadwerkelijke werkgebied. Je kunt je bestaande domeinnaam gebruiken. We kunnen ook toelichten of je voor particulieren, verhuurders of bedrijven werkt, zonder een groter werkgebied te suggereren dan je hebt.
7. **Wie zorgt voor de website na de oplevering?**
   Wij regelen hosting, SSL, technisch onderhoud en doorlopende ondersteuning. Via de Hub kun je een supportverzoek indienen. Heb je extra pagina’s of specifieke functionaliteit nodig? Dan bespreken we de mogelijkheden en de omvang met je.
8. **Wat kost PipeWorks en wanneer kan de website online?**
   Het Growth Rocket-pakket kost €69 per maand of €690 per jaar, plus €290 eenmalige opstartkosten. Prijzen zijn exclusief btw. Je website kan in 7 werkdagen online, nadat we alle benodigde informatie en materialen hebben ontvangen en als je op tijd je akkoord geeft.

The FAQ structured data (`FAQPage`) uses the same questions and answers, in the page's language.

---

## 10. Other designs

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Another look for<br>your business. | Find the design that fits your business. | Kies het ontwerp dat bij je bedrijf past. |
| Intro | More plumbing designs in the same package. Every one of them is built, connected and maintained the same way. | Compare other designs for plumbing businesses. We adapt your chosen design to your services, identity and customers. | Bekijk andere ontwerpen voor loodgietersbedrijven. We stemmen je keuze af op je diensten, huisstijl en klanten. |
| Cards and destinations | FlowMaster · Plumbing<br>DrainPro · Plumbing<br>AquaFix · Plumbing | FlowMaster · https://ggr-home.vercel.app/design/plumber/flowmaster<br>DrainPro · https://ggr-home.vercel.app/design/plumber/drainpro<br>AquaFix · https://ggr-home.vercel.app/design/plumber/aquafix | FlowMaster · https://ggr-home.vercel.app/design/plumber/flowmaster<br>DrainPro · https://ggr-home.vercel.app/design/plumber/drainpro<br>AquaFix · https://ggr-home.vercel.app/design/plumber/aquafix |
| Implementation | — | Keep the verified design destinations. Use corresponding Dutch destinations where available; do not invent translated URLs. | Behoud de gecontroleerde ontwerpbestemmingen. Gebruik de bijbehorende Nederlandse pagina waar die bestaat; verzin geen vertaalde URL’s. |

---

## 11. Closing CTA

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Make PipeWorks<br>your business’s next website. | Make PipeWorks your next website. | Maak van PipeWorks jouw volgende website. |
| Description | A professional website for your business. Your complete business system in Growth Rocket Hub. All maintained for you. | A website shaped around your plumbing business, connected to Growth Rocket Hub. Hosting, maintenance and support are handled for you. | Een website die past bij jouw loodgietersbedrijf, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |
| Primary / secondary CTA | Start with this design / Talk to our team | Same | Kies dit ontwerp / Neem contact met ons op |
| Destinations | #package / mailto:sales@getgrowthrocket.com?subject=PipeWorks%20website%20enquiry | Same | #package / mailto:sales@getgrowthrocket.com?subject=Vraag%20over%20PipeWorks |

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

## Image text and implementation (from the document)

| Element | New EN | New NL |
| --- | --- | --- |
| Preview alt | PipeWorks website design preview for a plumber business | Voorbeeld van het PipeWorks-websiteontwerp voor loodgieters |
| Gallery card label | PipeWorks · Plumbers · View design | PipeWorks · Loodgieters · Bekijk ontwerp |
| Personalisation image | Use a real plumbing repair or installation photograph. | Gebruik een foto van loodgieterswerk. |
| Image implementation | Write alt text to match the selected photograph. Do not imply stock photographs show the customer’s team or completed work. | Stem de alt-tekst af op de gekozen foto. Presenteer stockfoto’s niet als het eigen team of werk van de klant. |
| Shared sections | Sections 6–8 are shared master copy. Only the design name and its CTA destination vary. Keep the six existing video destinations. Do not claim Dutch audio unless a Dutch video exists. | Onderdeel 6–8 gebruikt dezelfde tekst op alle ontwerppagina’s. Alleen de ontwerpnaam en knopbestemming variëren. Behoud de zes videobestemmingen. Beloof geen Nederlandstalige video als die niet beschikbaar is. |
| SEO handover | Keep substantive copy outside the embedded preview. Give each language its own canonical URL and reciprocal language links. Redirect replaced published URLs. Do not publish invented ratings or performance claims as structured data. | Plaats de inhoud ook buiten het ingesloten voorbeeld. Geef beide talen een eigen canonieke URL en wederzijdse taalverwijzingen. Stuur vervangen gepubliceerde URL’s door. Gebruik geen verzonnen beoordelingen of besparingen in gestructureerde gegevens. |

See the notes below for how each of these was applied.

---

## Website template corrections (T01–T11)

The document's correction tables list issues found in the **PipeWorks template site itself**
(`https://plumber1-temp.vercel.app/`). That site is a separate project, not part of this repository, so these are not part
of this update. Copied from the document:

| Location | Observed issue | Action / status |
| --- | --- | --- |
| T01 · Branding | Landing page: PipeWorks. Preview and page title: AquaFlow / Aqua Flow. | Keep PipeWorks as the design name and identify AquaFlow as the example business. Standardise example branding; replace it with client details on delivery. |
| T02 · Contact anchors | Appointment links target #booking; contact links target #enquiry. The visible form is in section contact; no booking section appeared in the reviewed structure. | Correct anchors and connect the appointment CTA to the configured booking route. Verify every contact link. Do not treat an enquiry submission as a confirmed booking. |
| T03 · Form choices | Service Needed contains only “Plumber1”. | Replace the internal label with actual service choices. Check labels, required fields, error states and Hub delivery. No form was submitted in this review. |
| T04 · Response promises | 24/7, same-day visits, ~60-minute response and reply within an hour appear repeatedly. | Confirm actual availability or remove these promises. Align hero, service cards, process, FAQ and form wording. |
| T05 · Social proof | 15+ years, 12,000+ jobs, 4.9/5 and 250+ verified reviews appear with named example reviews. | Verify or replace with genuine customer evidence before customer use. Clearly label demonstration content. Do not reuse it as Growth Rocket proof. |
| T06 · Qualifications | “Gas-safe certified”, fully insured, background-checked engineers and written guarantees are claimed. | Have the business verify relevant qualifications, coverage and guarantee terms. Use jurisdiction-appropriate terminology; do not copy an unverified credential. |
| T07 · Fees | Fixed pricing, no hidden call-out fees and no weekend premium are stated. | Confirm with the plumbing business. Distinguish its service prices from Growth Rocket subscription pricing. |
| T08 · Placeholder links | Article and social links, Privacy, Terms and Licenses point to #. | Wire real destinations or remove unavailable links. Separately verify cookie-policy and privacy-policy pages; presence of a link is not proof its content is correct. |
| T09 · Contact details | 020 123 4567, hello@aquaflow.nl, Keizersgracht 123, KVK and BTW numbers are example details. | Replace with verified customer details, including telephone and WhatsApp targets. Verify real service-area coverage rather than copying the Amsterdam list. |
| T10 · Language and image review | Preview is English for an Amsterdam business; gallery and team content are examples. | Localise menus, forms, consent and body copy for the offered language. Verify photograph rights and that team/project images are not presented as genuine customer work without evidence. |
| T11 · Landing copy | Old document contains dental references and unqualified 7-day wording. | Implement both language sections here, with approved shared copy, all three package elements and nearby 7-working-day conditions. Preserve six verified video links. |

---

## Notes and decisions

- **N1 — URL.** The English page now lives at `/designs/pipeworks-plumber-website`. Every link, the canonical URL, the language links and the structured data use it. The replaced URLs redirect there permanently (308) in one step: `/design/plumber/pipeworks`, `/designs/plumber/pipeworks`, `/designs/pipeworks`. The Dutch page keeps the established Dutch URL `/nl/ontwerpen/loodgieter/pipeworks`, as the document asks; the language switch moves between the two.
- **N2 — Ticker and footer (section 12).** These are site-wide: the same ticker and footer appear on every page of the site, in both languages. Changing them here would change every page, so they are left for a separate, site-wide update (including the "Saloon" category label in the footer).
- **N3 — Shared sections 6–8.** The same master copy ShineSquad already uses (`page-copy/master.ts`); only the design name and CTA destination vary. Checked word for word against this document's sections 6–8.
- **N4 — Monthly card and tax note.** As in the document: the monthly card shows only the struck-through €99, €69 / month and the onboarding fee (no "Billed monthly." or "Save €138 a year…" lines), and "Prices exclude VAT." / "Prijzen zijn exclusief btw." shows on the price card.
- **N5 — FAQ help card.** "Still have a question?" is not in the approved copy, so the help card shows only the document's intro and button. The FAQ button keeps its existing email subject (`<design> website enquiry`); the document gives no destination for it.
- **N6 — Section 5 image.** The page shows a scrolling screenshot of the design, not a photograph, so the document's image direction does not apply; the alt text is the document's "Preview alt" / "Alt-tekst voorbeeld". The caption overlay is hidden in the current design and stays hidden.
- **N7 — "Watch on YouTube".** The video panel plays the video in the page and has no YouTube link, so none is added. "Play video" / "Video afspelen" is used for the play control. The six videos keep their existing (English) destinations in both languages, as the document requires.
- **N8 — Hidden labels on the Dutch page.** Screen-reader labels not covered by the document use the document's own Dutch terms: "Kruimelpad", "Schermkeuze", "Betaalkeuze" and "Uitlegvideo’s".
- **N9 — Heading colours.** Headings keep the page's purple accent; the words are exactly the document's. Where the document gives a heading as one sentence (no line break), it stays one sentence with the accent on its closing words: “Your questions answered.” and “Make PipeWorks your next website.” (and the Dutch equivalents).
- **N10 — Other designs.** The cards are FlowMaster, DrainPro and AquaFix, exactly as the document lists them, with the document's labels on this page only (the `/designs` listing keeps its own). The document's links use the staging domain `ggr-home.vercel.app` and older paths; the cards link to each design's current URL on this site, in the page's language. The document gives no labels for these cards, so they keep their existing label ("Plumbing", which is also what the Dutch page showed before).
- **N11 — No FAQ button in the document.** Section 9 has no CTA row, so the help card keeps a button using the closing section's own label: "Talk to our team" / "Neem contact met ons op", with the existing email subject.
- **N12 — Dutch closing button.** Its email subject is the document's own: `mailto:sales@getgrowthrocket.com?subject=Vraag%20over%20PipeWorks`. The English one keeps `PipeWorks website enquiry`, as the document gives.
- **N13 — Gallery card label and personalisation photo.** The "Gallery card label" / "Ontwerpkaart" row is for this design's card on the `/designs` listing page, not this page, so it is not part of this update. The suggested photograph does not apply: the page shows the design screenshot, with the document's "Preview alt" as its alt text.
