# AquaFix design page — content update reference

| | |
| --- | --- |
| **Source** | `AquaFix — Emergency Plumber Design Page Copy.docx` (16 October 2026) |
| **English page** | `/designs/aquafix-emergency-plumber-website` (was `/design/plumber/aquafix`, which now redirects) |
| **Dutch page** | `/nl/ontwerpen/loodgieter/aquafix` |
| **Scope** | This page only, both languages. |

**Where the copy lives in the code**

- AquaFix's own copy (sections 0–5 and 9–11), English and Dutch: `app/components/sections/design/page-copy/aquafix.ts`
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
| SEO title | AquaFix \| Plumbing Website Design & Business Tools \| Growth Rocket | Emergency Plumber Website Design \| AquaFix \| Growth Rocket | Website voor spoedloodgieters \| AquaFix \| Growth Rocket |
| Meta description | Explore AquaFix: a professional plumbing website design with appointments, enquiries, Growth Rocket Hub and ongoing technical support. Built for small businesses. | Explore AquaFix, a website design for emergency plumbers. Show your call-out area and services, with Growth Rocket Hub and technical care included. | Ontdek AquaFix: een website voor spoedloodgieters. Toon je diensten, werkgebied en bereikbaarheid, met Growth Rocket Hub en technisch onderhoud. |
| Primary topic | — | emergency plumber website design | Website voor spoedloodgieters |
| Supporting topics | — | Emergency plumbing; urgent leak repairs; call-out areas; emergency contact routes | — (not in the Dutch copy) |
| Final URL (EN) | `/design/plumber/aquafix` | https://www.getgrowthrocket.com/designs/aquafix-emergency-plumber-website | Gebruik de vastgestelde Nederlandse URL-structuur en koppel de Nederlandse en Engelse variant. |

---

## 1. Hero

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Label | Website design for small businesses | Website design for emergency plumbers | Websiteontwerp voor spoedloodgieters |
| H1 line 1 | AquaFix. | Same | AquaFix. |
| H1 line 2 | A friendly, professional site for residential plumbing services. | A clear first step when customers need help. | Duidelijkheid voor klanten die snel hulp nodig hebben. |
| Description | A professional website for your business. A complete business system with Growth Rocket Hub. All maintained for you. | Help customers check whether you handle their plumbing problem, cover their address and are available to help. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system. | Laat klanten zien bij welke problemen je helpt, waar je komt en wanneer je bereikbaar bent. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |

---

## 2–3. Breadcrumb and preview

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Breadcrumb | All designs / AquaFix | Same | Alle ontwerpen / AquaFix |
| Device controls | Desktop · Tablet · Mobile | Same | Computer · Tablet · Mobiel |
| Preview link | Preview in browser | Same | Bekijk in je browser |
| Primary CTA | Start with this design | Same | Kies dit ontwerp |
| Browser label | — (not shown) | AquaFix · Design preview | AquaFix · Websitevoorbeeld |
| Preview caption | Live preview of the design. Open it in a browser to explore every section. Example branding and content are replaced with your own details. | Explore AquaFix using VakMan Loodgieters as the example business. We adapt the branding, services, availability and contact details to your business. | Bekijk AquaFix met VakMan Loodgieters als voorbeeldbedrijf. We stemmen de huisstijl, diensten, bereikbaarheid en contactgegevens af op jouw bedrijf. |
| Destinations | https://plumber-4-template.vercel.app/ · CTA `#package` | Preview: https://plumber-4-template.vercel.app/<br>Primary CTA: #package | Voorbeeld: https://plumber-4-template.vercel.app/<br>Primaire knop: #package |

---

## 4. Benefits

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Build confidence.<br>Before the first visit. | Make urgent help easier to find.<br>Make the next step clear. | Maak hulp bij spoed vindbaar.<br>En de volgende stap duidelijk. |
| Intro | Choosing a business is personal. AquaFix gives prospective customers a clear picture of your business and a simple way to take the next step. | When a pipe bursts or water starts leaking, people need to know who to call and what happens next. Shape AquaFix around the emergencies you handle, your real call-out area and the information customers need before contacting you. | Bij een gesprongen leiding of lekkage willen mensen weten wie ze kunnen bellen en wat er daarna gebeurt. We stemmen AquaFix af op de spoedklussen die je uitvoert, je werkgebied en de informatie die klanten nodig hebben voordat ze contact opnemen. |
| Card 1 title | Make your services easy to understand. | Show which problems you handle. | Laat zien bij welke problemen je helpt. |
| Card 1 body | Give each of your services a clear introduction, so customers can find what matters to them without a phone call first. | Explain whether you attend burst pipes, major leaks, overflowing fixtures or loss of water. Separate urgent repairs from work that can wait for a planned visit. | Beschrijf of je helpt bij gesprongen leidingen, grote lekkages, overlopende afvoeren of het wegvallen van de watertoevoer. Maak onderscheid tussen spoedreparaties en werk dat op afspraak kan. |
| Card 2 title | Introduce the people behind the work. | Put your availability in plain sight. | Wees duidelijk over je bereikbaarheid. |
| Card 2 body | Show your team, their experience and how you work, so an unfamiliar business feels more approachable. | State your actual call-out hours and service area. Help visitors check whether you cover their postcode, without implying every request receives an immediate visit. | Vermeld je werkelijke bereikbaarheidsuren en werkgebied. Laat bezoekers nagaan of je op hun postcode komt, zonder te suggereren dat op elke aanvraag direct een bezoek volgt. |
| Card 3 title | Let genuine feedback build trust. | Build confidence before the call-out. | Geef vertrouwen voordat je langskomt. |
| Card 3 body | Create space for your own customer testimonials and credentials, alongside the story of your business. | Introduce your plumbers, genuine reviews and verified qualifications. Explain how you confirm a visit and communicate call-out charges or repair costs. | Stel je loodgieters voor en toon echte beoordelingen en aantoonbare kwalificaties. Leg uit hoe je een bezoek bevestigt en hoe je voorrijkosten en reparatiekosten bespreekt. |
| Card 4 title | Make the next step feel simple. | Offer the right way to get in touch. | Bied een passende contactmogelijkheid. |
| Card 4 body | Keep booking prompts, enquiry forms and contact details easy to find, including on a phone. | Keep your phone number prominent for urgent problems. Use enquiries and appointments for suitable follow-up work, with clear expectations about when your team responds. | Zet je telefoonnummer duidelijk in beeld voor spoed. Gebruik aanvragen en afspraken voor passend vervolgwerk en geef aan wanneer klanten een reactie van je team kunnen verwachten. |

---

## 5. Personalisation

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Your business. Your identity.<br>Your website. | Your call-outs. Your team.<br>Your website. | Jouw spoedklussen. Jouw team.<br>Jouw website. |
| Intro | The design is your starting point. We shape the website around the people, services and details that make your business yours. | AquaFix is the starting point. We shape the website around the urgent plumbing work you carry out and the details customers need to decide whether to call. | AquaFix is het vertrekpunt. We stemmen de website af op jouw spoedwerk en de informatie die klanten nodig hebben om te bepalen of ze je bellen. |
| List 1 | Your logo, colours and business story | Your logo, colours and company story | Je logo, kleuren en bedrijfsverhaal |
| List 2 | Your services and service information | The emergencies and repairs you handle | De spoedproblemen en reparaties die je oppakt |
| List 3 | Your team and business photography | Your call-out hours and actual service area | Je bereikbaarheidsuren en werkelijke werkgebied |
| List 4 | Your locations and contact details | Your team photographs and verified qualifications | Foto’s van je team en aantoonbare kwalificaties |
| List 5 | Genuine customer testimonials and reviews | Genuine customer reviews and repair examples | Echte klantbeoordelingen en voorbeelden van reparaties |
| List 6 | Verified ratings and professional credentials | How you explain call-out charges and confirm visits | Hoe je voorrijkosten uitlegt en bezoeken bevestigt |
| List 7 | Video testimonials and business introductions | Clear phone, enquiry and appointment options | Duidelijke mogelijkheden om te bellen, een aanvraag te doen of een afspraak te boeken |
| Image alt text (document's "Preview alt") | AquaFix design, shown as it would look for your business | AquaFix website design preview for an emergency plumbing business | Voorbeeld van het AquaFix-websiteontwerp voor spoedloodgieters |

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
| CTA | Start with AquaFix | Same | Start met AquaFix |
| CTA destination | mailto:sales@getgrowthrocket.com?subject=Get%20started%20with%20AquaFix | Same | mailto:sales@getgrowthrocket.com?subject=Starten%20met%20AquaFix |

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
| Intro | Ask us anything about AquaFix — what is included, how it is set up and what happens after it goes live. (help card, under the title “Still have a question?”) | Questions about AquaFix? We’re happy to help with the design, setup and what’s included. | Vragen over AquaFix? We helpen je graag met het ontwerp, de inrichting en wat je krijgt. |

### Current questions (7, replaced)

1. Am I buying just the website design?
2. Can AquaFix match my business’s branding?
3. Can I use my existing domain?
4. What do I need to provide?
5. How do appointments and enquiries work?
6. What does the package cost?
7. What happens if I need help after launch?

### New questions — English (8)

1. **Is AquaFix a website design I install myself?**
   No. We tailor and launch your website as part of Growth Rocket: a complete online business system. AquaFix comes with Growth Rocket Hub, hosting, SSL, maintenance and support. You get a website built around your emergency plumbing business, rather than files to install yourself.
2. **What makes AquaFix suitable for an emergency plumber?**
   It gives urgent visitors a clear route to your services, call-out area, opening hours and contact details. We adapt the content to the problems you handle, such as burst pipes or major leaks, and explain how your team confirms a visit. Your actual availability determines what the website promises.
3. **Does AquaFix answer calls or dispatch a plumber for me?**
   No. Your team answers calls, checks availability and arranges call-outs. Growth Rocket Hub helps you manage website enquiries, appointments, customer contacts, quotes and invoices. A website enquiry does not automatically dispatch a plumber or guarantee an immediate response.
4. **Can I show different contact routes for urgent and planned work?**
   Yes. We can make your phone number prominent for urgent issues and provide an enquiry or appointment route for planned work. During setup, we agree the contact options and wording with you. Emergency hours, response expectations and call-out charges must reflect how your business actually operates.
5. **Can I follow up after a call-out and send an invoice?**
   Yes. You can manage customer contacts and create quotes and invoices in Growth Rocket Hub. Contacts are created automatically from website enquiries and appointments; you can also add contacts manually for customers who phone. Once a quote is accepted, you can convert it into an invoice.
6. **Can AquaFix use my branding, service area and existing domain?**
   Yes. We use your logo, colours, services, contact details and real service area, and you can keep your existing domain. Share your team photographs, genuine reviews, call-out hours and how you explain charges. We use those details to make the website specific to your business.
7. **Who looks after my website after launch?**
   We handle hosting, SSL, technical maintenance and ongoing support. You can raise support requests through the Hub. If you need additional pages or custom functionality, we discuss the scope and any separate costs with you.
8. **What does AquaFix cost, and when can it go live?**
   The Growth Rocket package costs €69 per month or €690 per year, plus a €290 one-time onboarding fee. Prices exclude VAT. Your website can be ready in 7 working days after we receive all required information and materials, provided you give your approvals on time.

### New questions — Dutch (8)

1. **Moet ik AquaFix zelf installeren?**
   Nee. Wij passen je website aan en zetten die online als onderdeel van Growth Rocket: een compleet online businesssysteem. Je krijgt AquaFix samen met Growth Rocket Hub, hosting, SSL, onderhoud en ondersteuning. Je krijgt een website voor jouw loodgietersbedrijf, geen bestanden die je zelf moet installeren.
2. **Waarom past AquaFix bij een spoedloodgieter?**
   Bezoekers vinden snel je diensten, werkgebied, bereikbaarheidsuren en contactgegevens. We stemmen de inhoud af op de problemen die je oplost, zoals gesprongen leidingen of grote lekkages. Ook leggen we uit hoe je team een bezoek bevestigt. Wat je website belooft, moet passen bij je werkelijke beschikbaarheid.
3. **Beantwoordt AquaFix telefoontjes of stuurt het een loodgieter op pad?**
   Nee. Je eigen team beantwoordt telefoontjes, controleert de beschikbaarheid en plant bezoeken. In Growth Rocket Hub beheer je aanvragen via de website, afspraken, contacten, offertes en facturen. Een aanvraag via de website stuurt niet automatisch een loodgieter op pad en garandeert geen directe reactie.
4. **Kan ik spoedvragen en gepland werk een eigen contactroute geven?**
   Ja. We kunnen je telefoonnummer duidelijk tonen voor spoed en een aanvraag- of afspraakmogelijkheid bieden voor gepland werk. Tijdens de inrichting stemmen we de contactmogelijkheden en tekst met je af. Bereikbaarheidsuren bij spoed, reactietijden en voorrijkosten moeten aansluiten op je werkwijze.
5. **Kan ik na een spoedklus contact houden en een factuur sturen?**
   Ja. In Growth Rocket Hub beheer je contacten en maak je offertes en facturen op. Contacten worden automatisch aangemaakt vanuit aanvragen en afspraken via de website. Voor klanten die bellen, kun je ook zelf een contact toevoegen. Zodra een offerte is geaccepteerd, kun je deze omzetten in een factuur.
6. **Kan ik mijn eigen huisstijl, werkgebied en domein gebruiken?**
   Ja. We gebruiken je logo, kleuren, diensten, contactgegevens en echte werkgebied. Je kunt je bestaande domein behouden. Deel ook teamfoto’s, echte beoordelingen, bereikbaarheidsuren en de manier waarop je kosten uitlegt. Daarmee maken we de website passend voor jouw bedrijf.
7. **Wie zorgt voor mijn website na de oplevering?**
   Wij regelen hosting, SSL, technisch onderhoud en doorlopende ondersteuning. Via de Hub kun je een supportverzoek indienen. Heb je extra pagina’s of specifieke functionaliteit nodig, dan bespreken we de omvang en eventuele aparte kosten met je.
8. **Wat kost AquaFix en wanneer kan de website online?**
   Het Growth Rocket-pakket kost €69 per maand of €690 per jaar, plus €290 eenmalige opstartkosten. Prijzen zijn exclusief btw. Je website kan in 7 werkdagen online, nadat we alle benodigde informatie en materialen hebben ontvangen en als je op tijd je akkoord geeft.

The FAQ structured data (`FAQPage`) uses the same questions and answers, in the page's language.

---

## 10. Other designs

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Another look for<br>your business. | Find the design that fits your business. | Kies het ontwerp dat bij je bedrijf past. |
| Intro | More plumbing designs in the same package. Every one of them is built, connected and maintained the same way. | Compare other designs for plumbing businesses. We adapt your chosen design to your services, identity and customers. | Bekijk andere ontwerpen voor loodgietersbedrijven. We stemmen je keuze af op je diensten, huisstijl en klanten. |
| Cards and destinations | PipeWorks · Plumbing<br>FlowMaster · Plumbing<br>DrainPro · Plumbing | PipeWorks · https://ggr-home.vercel.app/design/plumber/pipeworks<br>FlowMaster · https://ggr-home.vercel.app/design/plumber/flowmaster<br>DrainPro · https://ggr-home.vercel.app/design/plumber/drainpro | PipeWorks · https://ggr-home.vercel.app/design/plumber/pipeworks<br>FlowMaster · https://ggr-home.vercel.app/design/plumber/flowmaster<br>DrainPro · https://ggr-home.vercel.app/design/plumber/drainpro |
| Implementation | — | Keep the verified design destinations. Use corresponding Dutch destinations where available; do not invent translated URLs. | Behoud de gecontroleerde ontwerpbestemmingen. Gebruik de bijbehorende Nederlandse pagina waar die bestaat; verzin geen vertaalde URL’s. |

---

## 11. Closing CTA

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Make AquaFix<br>your business’s next website. | Make AquaFix your next website. | Maak van AquaFix jouw volgende website. |
| Description | A professional website for your business. Your complete business system in Growth Rocket Hub. All maintained for you. | A website shaped around your emergency plumbing business, connected to Growth Rocket Hub. Hosting, maintenance and support are handled for you. | Een website voor jouw loodgietersbedrijf en spoedklussen, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |
| Primary / secondary CTA | Start with this design / Talk to our team | Same | Kies dit ontwerp / Neem contact met ons op |
| Destinations | #package / mailto:sales@getgrowthrocket.com?subject=AquaFix%20website%20enquiry | Same | #package / mailto:sales@getgrowthrocket.com?subject=Vraag%20over%20AquaFix |

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
| Preview alt | AquaFix website design preview for an emergency plumbing business | Voorbeeld van het AquaFix-websiteontwerp voor spoedloodgieters |
| Gallery card label | AquaFix · Emergency plumbers · View design | AquaFix · Spoedloodgieters · Bekijk ontwerp |
| Personalisation image | Use a relevant plumbing repair or call-out photograph, with permission to use it. | Gebruik een relevante foto van een loodgietersreparatie of spoedbezoek, met toestemming voor gebruik. |
| Image implementation | Write alt text to match the selected photograph. Do not imply stock photographs show the customer’s team or completed work. | Stem de alt-tekst af op de gekozen foto. Presenteer stockfoto’s niet als het eigen team of werk van de klant. |
| Shared sections | Sections 6–8 are shared master copy. Only the design name and its CTA destination vary. Keep the six existing video destinations. Do not claim Dutch audio unless a Dutch video exists. | Onderdeel 6–8 gebruikt dezelfde tekst op alle ontwerppagina’s. Alleen de ontwerpnaam en knopbestemming variëren. Behoud de zes videobestemmingen. Beloof geen Nederlandstalige video als die niet beschikbaar is. |
| SEO handover | Keep substantive copy outside the embedded preview. Give each language its own canonical URL and reciprocal language links. Redirect replaced published URLs. Do not publish invented ratings or performance claims as structured data. Keep these niche-specific answers visible and crawlable. Do not promise search rankings or AI citations. If FAQ structured data is retained, match the visible copy; do not promise FAQ rich results. | Plaats de inhoud ook buiten het ingesloten voorbeeld. Geef beide talen een eigen canonieke URL en wederzijdse taalverwijzingen. Stuur vervangen gepubliceerde URL’s door. Gebruik geen verzonnen beoordelingen of besparingen in gestructureerde gegevens. Houd de sectorspecifieke antwoorden zichtbaar en doorzoekbaar. Beloof geen zoekposities of vermeldingen door AI. Eventuele FAQ-gegevens moeten bij de zichtbare tekst passen; beloof geen uitgebreide FAQ-zoekresultaten. |

See the notes below for how each of these was applied.

---

## Website template corrections (T01–T11)

The document's correction tables list issues found in the **AquaFix template site itself**
(`https://plumber-4-template.vercel.app/`). That site is a separate project, not part of this repository, so these are not part
of this update. Copied from the document:

| Location | Observed issue | Action / status |
| --- | --- | --- |
| T01 · Design and example identity | The design is AquaFix; the preview uses VakMan Loodgieters. The browser title is “Create Next App” and the footer displays “VakMan Loodgiet”. | Keep AquaFix as the design name and identify VakMan Loodgieters as example branding. Replace the default page title and truncated footer name. Use verified client details on delivery. |
| T02 · Electrical leftovers | About says “ABOUT OUR ELECTRICAL COMPANY”; the project heading says “Recent Electrical Projects”. Image labels refer to an electrician, solar panels, an EV charger and electrical installations. | Rewrite these sections for plumbing. Inspect and replace mismatched photographs, not only their alt text. Remove the “plug in” wording from the plumbing CTA. |
| T03 · Booking routes | Navigation and footer appointment links target #book, which is absent. #booking exists but contains a promotional CTA linking back to itself, not a visible booking form. | Connect booking CTAs to the configured appointment route. Direct enquiry CTAs to #contact. Verify keyboard and mobile behaviour without presenting an enquiry as a confirmed visit. |
| T04 · Service links and form | Footer services link to #emergency, #leak, #drain, #bathroom, #pipe and #maintenance, absent from the inspected IDs. The loaded form showed only Emergency Plumbing. | Wire links to the relevant service content and provide the agreed service choices. Check loading states, validation, consent and Hub delivery; no submission was made in this review. |
| T05 · Availability | The hero promises 24/7 emergency plumbing and same-day call-outs; the contact area lists business hours and “Emergency support by request”. | Confirm actual availability and align hero, contact, FAQ and booking copy. State how customers confirm an urgent visit rather than implying guaranteed dispatch. |
| T06 · Conflicting proof | The hero shows 4.8 and 1,500+ jobs; a later block shows 4.9 and 2,000+ projects. About claims 98% satisfaction and 90% repeat customers. | Replace or substantiate each figure and reconcile the differences. Keep demo content clearly labelled; do not present it as Growth Rocket results. |
| T07 · Team and credentials | Named team members, certifications and customer reviews appear as example content. | Use genuine staff details, relevant verified qualifications and permissioned reviews. Do not imply the example team works for the purchasing business. |
| T08 · Contact ownership | The template shows a Rotterdam address, +31 10 000 0000 and info@vakmanloodgieters.nl. WhatsApp points to Growth Rocket’s +31 85 744 4176. | Replace customer contact details and route customer enquiries correctly. If WhatsApp sells the design, label it as Growth Rocket contact rather than the plumbing business. |
| T09 · Location and language | English content sits alongside Dutch branding and a Rotterdam-area list. A FAQ says the area “can be customized for each business using this template”. | Localise all customer-facing content and replace editor instructions with the business’s actual coverage. Do not copy every example city automatically. |
| T10 · Social links and images | Social links open generic Facebook, LinkedIn and Instagram homepages. Project, team and review content are examples. | Use real profiles or remove unavailable links. Verify image rights, factual captions and policy destinations before publication. |
| T11 · Landing page and shared sections | The landing page uses generic business copy, describes the Hub as the complete system, and still says “7 days” in the launch section and ticker. The old source also includes dental references. | Apply the English and Dutch copy here, including the three package elements, working-day condition and revised ticker. Keep video destinations; verify each before release. Show VAT beside prices. Use €828 versus €690 for savings; €99/€990 are display references only and require a substantiated basis before publication. |

---

## Notes and decisions

- **N1 — URL.** The English page now lives at `/designs/aquafix-emergency-plumber-website`. Every link, the canonical URL, the language links and the structured data use it. The replaced URLs redirect there permanently (308) in one step: `/design/plumber/aquafix`, `/designs/plumber/aquafix`, `/designs/aquafix`. The Dutch page keeps the established Dutch URL `/nl/ontwerpen/loodgieter/aquafix`, as the document asks; the language switch moves between the two.
- **N2 — Ticker and footer (section 12).** These are site-wide: the same ticker and footer appear on every page of the site, in both languages. Changing them here would change every page, so they are left for a separate, site-wide update (including the "Saloon" category label in the footer).
- **N3 — Shared sections 6–8.** The same master copy ShineSquad already uses (`page-copy/master.ts`); only the design name and CTA destination vary. Checked word for word against this document's sections 6–8.
- **N4 — Monthly card and tax note.** As in the document: the monthly card shows only the struck-through €99, €69 / month and the onboarding fee (no "Billed monthly." or "Save €138 a year…" lines), and "Prices exclude VAT." / "Prijzen zijn exclusief btw." shows on the price card.
- **N5 — FAQ help card.** "Still have a question?" is not in the approved copy, so the help card shows only the document's intro and button. The FAQ button keeps its existing email subject (`<design> website enquiry`); the document gives no destination for it.
- **N6 — Section 5 image.** The page shows a scrolling screenshot of the design, not a photograph, so the document's image direction does not apply; the alt text is the document's "Preview alt" / "Alt-tekst voorbeeld". The caption overlay is hidden in the current design and stays hidden.
- **N7 — "Watch on YouTube".** The video panel plays the video in the page and has no YouTube link, so none is added. "Play video" / "Video afspelen" is used for the play control. The six videos keep their existing (English) destinations in both languages, as the document requires.
- **N8 — Hidden labels on the Dutch page.** Screen-reader labels not covered by the document use the document's own Dutch terms: "Kruimelpad", "Schermkeuze", "Betaalkeuze" and "Uitlegvideo’s".
- **N9 — Heading colours.** Headings keep the page's purple accent; the words are exactly the document's. Where the document gives a heading as one sentence (no line break), it stays one sentence with the accent on its closing words: “Your questions answered.” and “Make AquaFix your next website.” (and the Dutch equivalents).
- **N10 — Other designs.** The cards are PipeWorks, FlowMaster and DrainPro, exactly as the document lists them, with the document's labels on this page only (the `/designs` listing keeps its own). The document's links use the staging domain `ggr-home.vercel.app` and older paths; the cards link to each design's current URL on this site, in the page's language. The document gives no labels for these cards, so they keep their existing label ("Plumbing", which is also what the Dutch page showed before).
- **N11 — No FAQ button in the document.** Section 9 has no CTA row, so the help card keeps a button using the closing section's own label: "Talk to our team" / "Neem contact met ons op", with the existing email subject.
- **N12 — Dutch closing button.** Its email subject is the document's own: `mailto:sales@getgrowthrocket.com?subject=Vraag%20over%20AquaFix`. The English one keeps `AquaFix website enquiry`, as the document gives.
- **N13 — Gallery card label and personalisation photo.** The "Gallery card label" / "Ontwerpkaart" row is for this design's card on the `/designs` listing page, not this page, so it is not part of this update. The suggested photograph does not apply: the page shows the design screenshot, with the document's "Preview alt" as its alt text.
