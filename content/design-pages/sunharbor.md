# SunHarbor design page — content update reference

| | |
| --- | --- |
| **Source** | `SunHarbor — Solar Installer Design Page Copy (1).docx` (16 October 2026) |
| **English page** | `/designs/sunharbor-solar-installer-website` (was `/design/solar/sunharbor`, which now redirects) |
| **Dutch page** | `/nl/ontwerpen/zonnepanelen/sunharbor` |
| **Scope** | This page only, both languages. |

**Where the copy lives in the code**

- SunHarbor's own copy (sections 0–5 and 9–11), English and Dutch: `app/components/sections/design/page-copy/sunharbor.ts`
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
| SEO title | SunHarbor \| Solar Installation Website Design & Business Tools \| Growth Rocket | Solar Installer Website Design \| SunHarbor \| Growth Rocket | Website voor zonnepaneleninstallateurs \| SunHarbor |
| Meta description | Explore SunHarbor: a professional solar installation website design with appointments, enquiries, Growth Rocket Hub and ongoing technical support. Built for small businesses. | Explore SunHarbor, a website design for solar installers with space for your services and projects, plus Growth Rocket Hub, hosting, maintenance and support. | Ontdek SunHarbor: een websiteontwerp voor zonnepaneleninstallateurs, met ruimte voor je diensten en projecten. Inclusief Growth Rocket Hub en onderhoud. |
| Primary topic | — | Solar installer website design | Website voor zonnepaneleninstallateurs |
| Supporting topics | — | Website for solar panel installers; solar company website; installation projects; quote requests | Website voor een zonnepanelenbedrijf; installatieprojecten; offerte aanvragen |
| Final URL (EN) | `/design/solar/sunharbor` | https://www.getgrowthrocket.com/designs/sunharbor-solar-installer-website | Gebruik de vastgestelde Nederlandse URL-structuur; koppel deze pagina aan de Engelse variant. |

---

## 1. Hero

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Label | Website design for small businesses | Website design for solar installers | Websiteontwerp voor zonnepaneleninstallateurs |
| H1 line 1 | SunHarbor. | Same | SunHarbor. |
| H1 line 2 | A credibility-first site for solar installers. | A website designed for solar installers. | Een website voor zonnepaneleninstallateurs. |
| Description | A professional website for your business. A complete business system with Growth Rocket Hub. All maintained for you. | Show what you install, share your projects and make it easy to get in touch. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system. | Laat zien wat je installeert, toon je projecten en maak contact opnemen eenvoudig. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |

---

## 2–3. Breadcrumb and preview

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Breadcrumb | All designs / SunHarbor | Same | Alle ontwerpen / SunHarbor |
| Device controls | Desktop · Tablet · Mobile | Same | Computer · Tablet · Mobiel |
| Preview link | Preview in browser | Same | Bekijk in je browser |
| Primary CTA | Start with this design | Same | Kies dit ontwerp |
| Browser label | — (not shown) | SunHarbor · Design preview | SunHarbor · Websitevoorbeeld |
| Preview caption | Live preview of the design. Open it in a browser to explore every section. Example branding and content are replaced with your own details. | Explore SunHarbor using Verde Techniek as the example business. We adapt the branding, services and content to your solar installation company. | Bekijk SunHarbor met Verde Techniek als voorbeeldbedrijf. We passen de huisstijl, diensten en inhoud aan jouw zonnepanelenbedrijf aan. |
| Destinations | https://solar-installation-template.vercel.app/ · CTA `#package` | Preview: https://solar-installation-template.vercel.app/<br>Primary CTA: #package | Voorbeeld: https://solar-installation-template.vercel.app/<br>Primaire knop: #package |

---

## 4. Benefits

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Build confidence.<br>Before the first visit. | Build confidence.<br>Before the first survey. | Wek vertrouwen.<br>Al vóór het eerste bezoek. |
| Intro | Choosing a business is personal. SunHarbor gives prospective customers a clear picture of your business and a simple way to take the next step. | Before asking for a quote, customers want to understand what you install, see your work and know what happens next. SunHarbor gives you space to answer those questions clearly. | Voordat klanten een offerte aanvragen, willen ze weten wat je installeert, je werk zien en begrijpen hoe je te werk gaat. SunHarbor geeft je de ruimte om die vragen duidelijk te beantwoorden. |
| Card 1 title | Make your services easy to understand. | Explain what you install. | Maak duidelijk wat je installeert. |
| Card 1 body | Give each of your services a clear introduction, so customers can find what matters to them without a phone call first. | Present your solar installations and any related services you offer. Help homeowners and business customers understand which services are relevant to their property. | Laat zien welke zonnepaneleninstallaties en aanvullende diensten je aanbiedt. Help particuliere en zakelijke klanten begrijpen wat je voor hun woning of bedrijfspand kunt betekenen. |
| Card 2 title | Introduce the people behind the work. | Show how the work happens. | Laat zien hoe je werkt. |
| Card 2 body | Show your team, their experience and how you work, so an unfamiliar business feels more approachable. | Explain your process, from the initial enquiry and site assessment to the quote, installation and handover. Give customers a clear idea of what to expect. | Leg je werkwijze uit, van de eerste aanvraag en beoordeling op locatie tot de offerte, installatie en oplevering. Zo weten klanten wat ze kunnen verwachten. |
| Card 3 title | Let genuine feedback build trust. | Let your projects speak. | Laat je projecten spreken. |
| Card 3 body | Create space for your own customer testimonials and credentials, alongside the story of your business. | Show completed installations with real photographs, a short project description and genuine customer feedback. Add verified qualifications to help visitors get to know your business. | Toon afgeronde installaties met eigen foto’s, een korte projectbeschrijving en echte klantbeoordelingen. Voeg aantoonbare vakbekwaamheid toe, zodat bezoekers je bedrijf leren kennen. |
| Card 4 title | Make the next step feel simple. | Make the first enquiry simple. | Maak de eerste aanvraag eenvoudig. |
| Card 4 body | Keep booking prompts, enquiry forms and contact details easy to find, including on a phone. | Keep contact details and enquiry options easy to find, including on a phone. Let customers ask for advice or request a quote without having to search for the next step. | Zorg dat contactgegevens en aanvraagmogelijkheden makkelijk te vinden zijn, ook op een mobiel. Zo kunnen klanten advies vragen of een offerte aanvragen zonder te zoeken naar de volgende stap. |

---

## 5. Personalisation

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Your business. Your identity.<br>Your website. | Same | Jouw bedrijf. Jouw identiteit.<br>Jouw website. |
| Intro | The design is your starting point. We shape the website around the people, services and details that make your business yours. | SunHarbor is the starting point. We shape the website around your solar installation business, the customers you work with and the areas you cover. | SunHarbor is het vertrekpunt. We stemmen de website af op jouw zonnepanelenbedrijf, de klanten voor wie je werkt en je werkgebied. |
| List 1 | Your logo, colours and business story | Your logo, colours and company story | Je logo, kleuren en bedrijfsverhaal |
| List 2 | Your services and service information | Your solar installations and related services | Je zonnepaneleninstallaties en aanvullende diensten |
| List 3 | Your team and business photography | Your residential or commercial customer focus | Je aanbod voor particuliere of zakelijke klanten |
| List 4 | Your locations and contact details | Your team, project photographs and installation examples | Je team, projectfoto’s en voorbeelden van installaties |
| List 5 | Genuine customer testimonials and reviews | Your service areas and contact details | Je werkgebied en contactgegevens |
| List 6 | Verified ratings and professional credentials | Your genuine reviews and verified qualifications | Echte klantbeoordelingen en aantoonbare vakbekwaamheid |
| List 7 | Video testimonials and business introductions | Your process, from initial assessment to aftercare | Je werkwijze, van eerste beoordeling tot nazorg |
| Image caption | — (overlay hidden in the current design) | SunHarbor, shaped around your installation business. | SunHarbor, afgestemd op jouw installatiebedrijf. |
| Image alt text (document's "Preview alt") | SunHarbor design, shown as it would look for your business | SunHarbor website design preview for a solar installation business | Voorbeeld van het SunHarbor-websiteontwerp voor een zonnepanelenbedrijf |

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
| CTA | Start with SunHarbor | Same | Start met SunHarbor |
| CTA destination | mailto:sales@getgrowthrocket.com?subject=Get%20started%20with%20SunHarbor | Same | mailto:sales@getgrowthrocket.com?subject=Starten%20met%20SunHarbor |

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
| Intro | Ask us anything about SunHarbor — what is included, how it is set up and what happens after it goes live. (help card, under the title “Still have a question?”) | Have a question about SunHarbor? We’re happy to help with the design, setup and what’s included. | Heb je nog een vraag over SunHarbor? We helpen je graag met het ontwerp, de inrichting en wat je krijgt. |
| CTA | Talk to our team | Same | Neem contact met ons op |

### Current questions (7, replaced)

1. Am I buying just the website design?
2. Can SunHarbor match my business’s branding?
3. Can I use my existing domain?
4. What do I need to provide?
5. How do appointments and enquiries work?
6. What does the package cost?
7. What happens if I need help after launch?

### New questions — English (8)

1. **Is SunHarbor a design I download and build myself?**
   No. We tailor and launch your website as part of Growth Rocket: a complete online business system. Your website comes with Growth Rocket Hub, hosting, SSL, maintenance and support. You do not need to install the design yourself.
2. **Why does SunHarbor suit a solar installation business?**
   It gives you room to explain your services, show completed installations and introduce your team and process. Customers can see what you do and how to get in touch. We adapt the example content to the work your business actually carries out.
3. **Can I present both residential and commercial installations?**
   Yes. We can adapt the service and customer sections to explain the work you do for homeowners and businesses. Your project examples can show the type of property, the work completed and the areas you serve.
4. **Can customers request a quote or arrange a site assessment?**
   Yes. Website enquiries connect to Growth Rocket Hub, where you can follow up, manage appointments, and create quotes and invoices. We agree how customers request an assessment during onboarding. This does not mean the website automatically calculates an installation price.
5. **Can I include batteries, charging points or other services?**
   Yes, if your business offers them. We can adapt the service content to explain your additional installations alongside solar. Specialist calculators, technical assessments and integrations are separate requirements to discuss; they are not included by default.
6. **Can I use my branding, projects and existing domain?**
   Yes. We adapt the design to your logo, colours, services, project photographs and service areas. You can keep using your existing domain. Send your business details and any genuine reviews or verified qualifications you want to include; we guide you through the setup.
7. **Who looks after the website after launch?**
   We handle hosting, SSL, technical maintenance and ongoing support. You can raise support requests through the Hub. If you need additional pages or custom functionality, we can discuss the scope with you.
8. **What does SunHarbor cost, and how quickly can it go live?**
   The Growth Rocket package costs €69 per month or €690 per year, plus a €290 one-time onboarding fee. Prices exclude VAT. Your website can be ready in 7 working days after we receive all required information and materials, provided you give your approvals on time.

### New questions — Dutch (8)

1. **Is SunHarbor een ontwerp dat ik zelf download en bouw?**
   Nee. Wij passen je website aan en zetten die online als onderdeel van Growth Rocket: een compleet online businesssysteem. Je krijgt je website samen met Growth Rocket Hub, hosting, SSL, onderhoud en ondersteuning. Je hoeft het ontwerp niet zelf te installeren.
2. **Waarom past SunHarbor bij een zonnepanelenbedrijf?**
   Het ontwerp biedt ruimte om je diensten uit te leggen, afgeronde installaties te tonen en je team en werkwijze voor te stellen. Klanten zien wat je doet en hoe ze contact opnemen. We stemmen de voorbeeldinhoud af op het werk dat jouw bedrijf daadwerkelijk uitvoert.
3. **Kan ik installaties voor particulieren én bedrijven laten zien?**
   Ja. We kunnen de onderdelen over diensten en klanten afstemmen op je werk voor particulieren en bedrijven. Met projectvoorbeelden laat je zien om welk type pand het gaat, wat je hebt uitgevoerd en in welk gebied je werkt.
4. **Kunnen klanten een offerte aanvragen of een bezoek op locatie plannen?**
   Ja. Aanvragen via je website komen in Growth Rocket Hub terecht. Daar kun je ze opvolgen, afspraken beheren en offertes en facturen opmaken. Tijdens de inrichting spreken we af hoe klanten een bezoek aanvragen. De website berekent daarmee niet automatisch de prijs van een installatie.
5. **Kan ik ook thuisbatterijen, laadpunten of andere diensten opnemen?**
   Ja, als je bedrijf die aanbiedt. We kunnen je aanvullende installaties naast zonnepanelen toelichten. Specialistische rekenfuncties, technische beoordelingen en koppelingen vallen niet standaard binnen het pakket. Zulke wensen bespreken we apart.
6. **Kan ik mijn huisstijl, projecten en bestaande domeinnaam gebruiken?**
   Ja. We stemmen het ontwerp af op je logo, kleuren, diensten, projectfoto’s en werkgebied. Je kunt je bestaande domeinnaam blijven gebruiken. Stuur je bedrijfsgegevens en de echte klantbeoordelingen of aantoonbare kwalificaties die je wilt opnemen; wij begeleiden je bij de inrichting.
7. **Wie zorgt voor de website nadat die online staat?**
   Wij regelen hosting, SSL, technisch onderhoud en doorlopende ondersteuning. Via de Hub kun je een supportverzoek indienen. Heb je extra pagina’s of specifieke functionaliteit nodig? Dan bespreken we de mogelijkheden en de omvang met je.
8. **Wat kost SunHarbor en hoe snel kan mijn website online?**
   Het Growth Rocket-pakket kost €69 per maand of €690 per jaar, plus €290 eenmalige opstartkosten. Prijzen zijn exclusief btw. Je website kan in 7 werkdagen online, nadat we alle benodigde informatie en materialen hebben ontvangen en als je op tijd je akkoord geeft.

The FAQ structured data (`FAQPage`) uses the same questions and answers, in the page's language.

---

## 10. Other designs

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Designs for<br>other trades. | Explore other website designs. | Bekijk andere websiteontwerpen. |
| Intro | This is the only design in its category for now. Here is what the same package looks like for other kinds of business. | SunHarbor is currently our solar installation design. You can also explore how the same Growth Rocket package works for other businesses. | SunHarbor is op dit moment ons ontwerp voor zonnepaneleninstallateurs. Je kunt ook bekijken hoe hetzelfde Growth Rocket-pakket eruitziet voor andere bedrijven. |
| Cards | DentalCare · Dentistry<br>ShineSquad · Cleaning<br>Physiotherapy · Health & Wellness | DentalCare · Dentistry<br>ShineSquad · Cleaning<br>Physiotherapy · Health and wellbeing | DentalCare · Tandartspraktijken<br>ShineSquad · Schoonmaakbedrijven<br>Physiotherapy · Zorg en welzijn |
| Link behaviour | — | Keep the verified destinations on the current page. Do not describe these as other solar designs or publish the old unbuilt solar concept cards. | Behoud de gecontroleerde bestemmingen op de huidige pagina. Presenteer deze niet als andere zonnepanelendesigns en publiceer de oude, niet-uitgewerkte zonnepaneelconcepten niet. |

---

## 11. Closing CTA

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Make SunHarbor<br>your business’s next website. | Make SunHarbor your next website. | Maak van SunHarbor jouw volgende website. |
| Description | A professional website for your business. Your complete business system in Growth Rocket Hub. All maintained for you. | A website shaped around your solar installation business, connected to Growth Rocket Hub. Hosting, maintenance and support are handled for you. | Een website die past bij jouw zonnepanelenbedrijf, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |
| Primary / secondary CTA | Start with this design / Talk to our team | Same | Kies dit ontwerp / Neem contact met ons op |
| Destinations | #package / mailto:sales@getgrowthrocket.com?subject=SunHarbor%20website%20enquiry | Same | #package / mailto:sales@getgrowthrocket.com?subject=Vraag%20over%20SunHarbor |

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
| Preview alt | SunHarbor website design preview for a solar installation business | Voorbeeld van het SunHarbor-websiteontwerp voor een zonnepanelenbedrijf |
| Gallery card label | SunHarbor · Solar installers · View design | SunHarbor · Zonnepaneleninstallateurs · Bekijk ontwerp |
| Personalisation image | Use a solar installation photograph. Suggested alt after replacing the image: Solar installers fitting panels on a roof. Match the final alt text to the actual photograph. | Gebruik een foto van een zonnepaneleninstallatie. Voorstel na vervanging: Installateurs plaatsen zonnepanelen op een dak. Stem de alt-tekst af op de gekozen foto. |
| Shared sections | Sections 6–8 are shared master copy. Only the design name and its CTA destination vary. Keep the six existing video destinations. Do not claim Dutch audio unless a Dutch video exists. | Onderdeel 6–8 gebruikt dezelfde tekst op alle ontwerppagina’s. Alleen de ontwerpnaam en knopbestemming variëren. Behoud de zes videobestemmingen. Beloof geen Nederlandstalige video als die niet beschikbaar is. |
| SEO handover | Keep substantive copy outside the embedded preview. Give each language its own canonical URL and reciprocal language links. Redirect replaced published URLs. Do not publish invented ratings or solar savings as structured data. | Plaats de inhoud ook buiten het ingesloten voorbeeld. Geef beide talen een eigen canonieke URL en wederzijdse taalverwijzingen. Stuur vervangen gepubliceerde URL’s door. Gebruik geen verzonnen beoordelingen of besparingen in gestructureerde gegevens. |

See the notes below for how each of these was applied.

---

## Website template corrections (T01–T11)

The document's correction tables list issues found in the **SunHarbor template site itself**
(`https://solar-installation-template.vercel.app/`). That site is a separate project, not part of this repository, so these are not part
of this update. Copied from the document:

| Location | Observed issue | Action / status |
| --- | --- | --- |
| T01 · Branding | The landing page says SunHarbor; the preview uses Verde Techniek, “Verde Technology” and “Green Technology”. | Required: keep SunHarbor as the design name. Identify Verde Techniek as example branding in the preview caption; use Verde Techniek consistently inside the demo. |
| T02 · Solar focus | The preview hero shows a heat pump; services and projects cover broad sustainable building technology. | Recommended: lead with solar imagery, solar services and a solar project. Retain other services only as secondary examples. Do not sell a solar-only preview while showing a broader installer without explanation. |
| T03 · Evidence | Demo figures include 1,500+ projects, 22 specialists, 4.8/5, 98% project success and 24-hour response. | Required before customer use: verify each claim or remove it. Label the preview as demonstration content. Do not reuse these figures as Growth Rocket evidence. |
| T04 · Savings | The demo uses 35% savings, −40% CO₂ and €1,200 annual savings without visible supporting context. | Required before customer use: substantiate with scope and evidence or remove. Do not promise these outcomes in landing-page copy. |
| T05 · Reviews and credentials | Example customer feedback and “Certified Specialists” appear in the preview. | Required: use authorised, genuine reviews and verified qualifications for the customer site. Do not publish example identities or ratings as real social proof. |
| T06 · Links | Several article cards and “Buy now” point to #. “More about Verde Techniek” points to #why while footer About points to #about. | Required: wire each link to the intended existing section or page; remove dead-end links. Verify fragment targets and all primary CTAs during implementation. |
| T07 · Contact and legal | Example telephone numbers, email, Chamber of Commerce number and local areas are displayed. Header and footer telephone targets differ. | Required: use the customer’s verified details and consistent telephone targets. Confirm real legal pages and working cookie/privacy links before launch. Do not imply the demo covers real territories. |
| T08 · Subsidies and technical claims | The demo FAQ includes subsidy advice; other sections claim knowledge of standards and future regulations. | Confirmation needed: have the installer verify current applicability and qualifications. Remove unsupported statements. This copy review does not validate technical or subsidy advice. |
| T09 · English/Dutch consistency | The English demo includes awkward labels such as “TO SPARE”, “Companies” and mixed branding. | Required: edit natural English labels and provide a fully localised Dutch demo if offered. Review menus, buttons, forms, validation, consent and image text as well as body copy. |
| T10 · Enquiry journey | The preview shows consultation buttons and a general contact route. End-to-end form submission and Hub delivery were not tested. | Verification: test submissions, appointment setup and correct Hub routing. Do not advertise instant solar quotes, calculators, reminders or payment integrations without confirmed scope. |
| T11 · Landing-page alignment | The staging page remains generic; the old document contains dental terms and “7 days”. | Required on the landing page: implement the new EN/NL copy, the shared system definition and 7-working-day conditions. Keep the proposed solar features distinct from what the current demo visibly shows. |

---

## Notes and decisions

- **N1 — URL.** The English page now lives at `/designs/sunharbor-solar-installer-website`. Every link, the canonical URL, the language links and the structured data use it. The replaced URLs redirect there permanently (308) in one step: `/design/solar/sunharbor`, `/designs/solar/sunharbor`, `/designs/sunharbor`. The Dutch page keeps the established Dutch URL `/nl/ontwerpen/zonnepanelen/sunharbor`, as the document asks; the language switch moves between the two.
- **N2 — Ticker and footer (section 12).** These are site-wide: the same ticker and footer appear on every page of the site, in both languages. Changing them here would change every page, so they are left for a separate, site-wide update (including the "Saloon" category label in the footer).
- **N3 — Shared sections 6–8.** The same master copy ShineSquad already uses (`page-copy/master.ts`); only the design name and CTA destination vary. Checked word for word against this document's sections 6–8.
- **N4 — Monthly card and tax note.** As in the document: the monthly card shows only the struck-through €99, €69 / month and the onboarding fee (no "Billed monthly." or "Save €138 a year…" lines), and "Prices exclude VAT." / "Prijzen zijn exclusief btw." shows on the price card.
- **N5 — FAQ help card.** "Still have a question?" is not in the approved copy, so the help card shows only the document's intro and button. The FAQ button keeps its existing email subject (`<design> website enquiry`); the document gives no destination for it.
- **N6 — Section 5 image.** The page shows a scrolling screenshot of the design, not a photograph, so the document's image direction does not apply; the alt text is the document's "Preview alt" / "Alt-tekst voorbeeld". The caption overlay is hidden in the current design and stays hidden.
- **N7 — "Watch on YouTube".** The video panel plays the video in the page and has no YouTube link, so none is added. "Play video" / "Video afspelen" is used for the play control. The six videos keep their existing (English) destinations in both languages, as the document requires.
- **N8 — Hidden labels on the Dutch page.** Screen-reader labels not covered by the document use the document's own Dutch terms: "Kruimelpad", "Schermkeuze", "Betaalkeuze" and "Uitlegvideo’s".
- **N9 — Heading colours.** Headings keep the page's purple accent; the words are exactly the document's. Where the document gives a heading as one sentence (no line break), it stays one sentence with the accent on its closing words: “Your questions answered.” and “Make SunHarbor your next website.” (and the Dutch equivalents).
- **N10 — Other designs.** SunHarbor is the only solar design, so this section shows designs for other trades: DentalCare, ShineSquad and Physiotherapy, as the document lists them, with its labels ("Dentistry", "Cleaning", "Health and wellbeing"; Dutch "Tandartspraktijken", "Schoonmaakbedrijven", "Zorg en welzijn"). The labels apply on this page only; the `/designs` listing keeps its own. The cards link to each design's current URL ("Keep the verified destinations"); no solar concept cards are shown. Since this document was written, the physiotherapy design has been renamed PhysioCare (its own approved document), so that card now shows "PhysioCare" rather than the document's "Physiotherapy".
- **N11 — Dutch closing button.** Its email subject is the document's own: `mailto:sales@getgrowthrocket.com?subject=Vraag%20over%20SunHarbor`. The English one keeps `SunHarbor website enquiry`, as the document gives.
- **N12 — Gallery card label.** "SunHarbor · Solar installers · View design" / "SunHarbor · Zonnepaneleninstallateurs · Bekijk ontwerp" is for SunHarbor's card on the `/designs` listing page, not this page, so it is not part of this update. The listing card currently shows "SunHarbor · Solar Installation".
- **N13 — Personalisation image.** The document suggests a photograph with the alt "Solar installers fitting panels on a roof" once the image is replaced. The page shows the design screenshot, so its alt is the document's "Preview alt" instead.
