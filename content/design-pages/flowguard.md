# FlowGuard design page — content update reference

| | |
| --- | --- |
| **Source** | `FlowGuard — Heating Engineer Design Page Copy.docx` (16 October 2026) |
| **English page** | `/designs/flowguard-heating-engineer-website` (was `/design/plumber/flowguard`, which now redirects) |
| **Dutch page** | `/nl/ontwerpen/loodgieter/flowguard` |
| **Scope** | This page only, both languages. |

**Where the copy lives in the code**

- FlowGuard's own copy (sections 0–5 and 9–11), English and Dutch: `app/components/sections/design/page-copy/flowguard.ts`
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
| SEO title | FlowGuard \| Plumbing Website Design & Business Tools \| Growth Rocket | Heating Engineer Website Design \| FlowGuard \| Growth Rocket | Website voor verwarmingsbedrijven \| FlowGuard \| Growth Rocket |
| Meta description | Explore FlowGuard: a professional plumbing website design with appointments, enquiries, Growth Rocket Hub and ongoing technical support. Built for small businesses. | Explore FlowGuard, a website design for heating engineers. Present your services and work, with Growth Rocket Hub, hosting, maintenance and support included. | Ontdek FlowGuard: een websiteontwerp voor verwarmingsbedrijven. Laat je diensten en werk zien, met Growth Rocket Hub, hosting, onderhoud en ondersteuning. |
| Primary topic | — | heating engineer website design | Website voor verwarmingsbedrijven |
| Supporting topics | — | Heating services; boiler servicing; heating installation enquiries; local service areas | — (not in the Dutch copy) |
| Final URL (EN) | `/design/plumber/flowguard` | https://www.getgrowthrocket.com/designs/flowguard-heating-engineer-website | Gebruik de vastgestelde Nederlandse URL-structuur en koppel de Nederlandse en Engelse variant. |

---

## 1. Hero

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Label | Website design for small businesses | Website design for heating engineers | Websiteontwerp voor verwarmingsbedrijven |
| H1 line 1 | FlowGuard. | Same | FlowGuard. |
| H1 line 2 | A confident, modern website for plumbing pros who mean business. | A website built around your heating expertise. | Een website voor jouw expertise in verwarming. |
| Description | A professional website for your business. A complete business system with Growth Rocket Hub. All maintained for you. | Help customers understand your heating services, get to know your business and request a visit. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system. | Maak je verwarmingsdiensten duidelijk, stel je bedrijf voor en laat klanten eenvoudig een bezoek aanvragen. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |

---

## 2–3. Breadcrumb and preview

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Breadcrumb | All designs / FlowGuard | Same | Alle ontwerpen / FlowGuard |
| Device controls | Desktop · Tablet · Mobile | Same | Computer · Tablet · Mobiel |
| Preview link | Preview in browser | Same | Bekijk in je browser |
| Primary CTA | Start with this design | Same | Kies dit ontwerp |
| Browser label | — (not shown) | FlowGuard · Design preview | FlowGuard · Websitevoorbeeld |
| Preview caption | Live preview of the design. Open it in a browser to explore every section. Example branding and content are replaced with your own details. | Explore FlowGuard using Tij as the example business. We adapt the branding, services and content to your business. | Bekijk FlowGuard met Tij als voorbeeldbedrijf. We stemmen de huisstijl, diensten en inhoud af op jouw bedrijf. |
| Destinations | https://plumber-5-template.vercel.app/ · CTA `#package` | Preview: https://plumber-5-template.vercel.app/<br>Primary CTA: #package | Voorbeeld: https://plumber-5-template.vercel.app/<br>Primaire knop: #package |

---

## 4. Benefits

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Build confidence.<br>Before the first visit. | Build confidence.<br>Before the first service visit. | Wek vertrouwen.<br>Al vóór de eerste onderhoudsbeurt. |
| Intro | Choosing a business is personal. FlowGuard gives prospective customers a clear picture of your business and a simple way to take the next step. | When heating or hot water needs attention, customers want to know whether you handle their system and what happens next. FlowGuard can give your services, experience and approach a clear place online. | Bij problemen met verwarming of warm water willen klanten weten of je hun installatie onderhoudt en wat de volgende stap is. FlowGuard geeft je diensten, ervaring en werkwijze een duidelijke plek online. |
| Card 1 title | Make your services easy to understand. | Explain the heating work you do. | Maak je verwarmingsdiensten duidelijk. |
| Card 1 body | Give each of your services a clear introduction, so customers can find what matters to them without a phone call first. | Set out boiler servicing, fault diagnosis, replacement or radiator work according to your actual offer. Help customers distinguish routine maintenance from a new installation enquiry. | Beschrijf cv-ketelonderhoud, storingsonderzoek, vervanging of radiatorwerk als je die diensten aanbiedt. Zo zien klanten het verschil tussen periodiek onderhoud en een nieuwe installatie. |
| Card 2 title | Introduce the people behind the work. | Make your expertise specific. | Laat zien waarin je deskundig bent. |
| Card 2 body | Show your team, their experience and how you work, so an unfamiliar business feels more approachable. | Introduce your engineers and the systems you work on. Include only qualifications and manufacturer accreditations your business can verify, so visitors can assess the fit for their needs. | Stel je monteurs voor en benoem de installaties waarmee je werkt. Vermeld alleen aantoonbare kwalificaties en erkenningen, zodat bezoekers weten of je bij hun vraag past. |
| Card 3 title | Let genuine feedback build trust. | Show what a visit involves. | Leg uit hoe een bezoek verloopt. |
| Card 3 body | Create space for your own customer testimonials and credentials, alongside the story of your business. | Explain how customers request a visit, what information you need and when you provide a quote. Real project examples can show the work completed without making unsupported energy-saving claims. | Vertel hoe klanten een bezoek aanvragen, welke informatie je nodig hebt en wanneer je een offerte maakt. Laat met echte projecten zien wat je uitvoert, zonder ongefundeerde energiebesparingen te beloven. |
| Card 4 title | Make the next step feel simple. | Make enquiries easier to follow up. | Maak aanvragen makkelijker op te volgen. |
| Card 4 body | Keep booking prompts, enquiry forms and contact details easy to find, including on a phone. | Guide customers to share their location, system type and reason for contacting you. Keep a clear phone route for urgent questions, alongside enquiries and appointment options for planned work. | Vraag klanten om hun locatie, type installatie en de reden van hun aanvraag. Bied een duidelijke telefonische route voor spoedvragen, naast aanvragen en afspraken voor gepland werk. |

---

## 5. Personalisation

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Your business. Your identity.<br>Your website. | Your trade. Your name.<br>Your website. | Jouw vak. Jouw naam.<br>Jouw website. |
| Intro | The design is your starting point. We shape the website around the people, services and details that make your business yours. | FlowGuard is the starting point. We shape the website around your heating business, your customers and the work you actually do. | FlowGuard is het vertrekpunt. We stemmen de website af op jouw verwarmingsbedrijf, je klanten en het werk dat je daadwerkelijk uitvoert. |
| List 1 | Your logo, colours and business story | Your logo, colours and company story | Je logo, kleuren en bedrijfsverhaal |
| List 2 | Your services and service information | Your heating services and the systems you work on | Je verwarmingsdiensten en de installaties waarmee je werkt |
| List 3 | Your team and business photography | Your engineers and verified qualifications | Je monteurs en aantoonbare kwalificaties |
| List 4 | Your locations and contact details | Your own project photographs and genuine reviews | Je eigen projectfoto’s en echte klantbeoordelingen |
| List 5 | Genuine customer testimonials and reviews | Your service area, opening hours and contact details | Je werkgebied, openingstijden en contactgegevens |
| List 6 | Verified ratings and professional credentials | Your process for servicing, faults and new installations | Je werkwijze voor onderhoud, storingen en nieuwe installaties |
| List 7 | Video testimonials and business introductions | Clear enquiry and appointment options | Duidelijke aanvraag- en afspraakmogelijkheden |
| Image alt text (document's "Preview alt") | FlowGuard design, shown as it would look for your business | FlowGuard website design preview for a heating engineer business | Voorbeeld van het FlowGuard-websiteontwerp voor verwarmingsbedrijven |

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
| CTA | Start with FlowGuard | Same | Start met FlowGuard |
| CTA destination | mailto:sales@getgrowthrocket.com?subject=Get%20started%20with%20FlowGuard | Same | mailto:sales@getgrowthrocket.com?subject=Starten%20met%20FlowGuard |

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
| Intro | Ask us anything about FlowGuard — what is included, how it is set up and what happens after it goes live. (help card, under the title “Still have a question?”) | Questions about FlowGuard? We’re happy to help with the design, setup and what’s included. | Vragen over FlowGuard? We helpen je graag met het ontwerp, de inrichting en wat je krijgt. |

### Current questions (7, replaced)

1. Am I buying just the website design?
2. Can FlowGuard match my business’s branding?
3. Can I use my existing domain?
4. What do I need to provide?
5. How do appointments and enquiries work?
6. What does the package cost?
7. What happens if I need help after launch?

### New questions — English (8)

1. **Is FlowGuard a standalone design or part of Growth Rocket?**
   No. We tailor and launch your website as part of Growth Rocket: a complete online business system. Your website comes with Growth Rocket Hub, hosting, SSL, maintenance and support. You do not need to install the design yourself.
2. **Is FlowGuard intended for heating engineers or general plumbers?**
   This version is intended for heating businesses. We shape the services and content around the systems you maintain, repair or install. The current preview uses a general plumbing business as its example; your website is adapted to your actual heating services before launch.
3. **Can I explain boiler servicing and new installations separately?**
   Yes. We can distinguish routine servicing, repairs and installation enquiries, with a clear explanation of what each service covers. Include only the systems and services your business is qualified and equipped to work on.
4. **Can customers request a service visit online?**
   Yes. Your website connects enquiries and appointment options to Growth Rocket Hub. We agree how visits are requested or booked during setup, including what customers should tell you about their system. Requesting a visit does not itself promise an urgent call-out.
5. **Can I include heat pumps or other heating systems?**
   Yes, where you offer those services. We adapt the content to the systems you actually work on and your verified experience. Technical advice, performance figures and energy savings need appropriate support; they should not be copied from demonstration content.
6. **Will Growth Rocket replace my specialist service-management software?**
   Growth Rocket helps you manage enquiries, appointments, contacts, quotes and invoices. It is not presented as a specialist system for engineer dispatch, equipment service histories or maintenance contracts. If you need a connection to existing software, discuss the scope with us before committing.
7. **Can I keep my branding and who maintains the website?**
   Yes. We adapt the design to your business identity, services and project photographs, and you can keep your domain. Hosting, SSL, technical maintenance and ongoing support are handled for you. You can raise support requests through the Hub.
8. **What does FlowGuard cost, and how quickly can it go live?**
   The Growth Rocket package costs €69 per month or €690 per year, plus a €290 one-time onboarding fee. Prices exclude VAT. Your website can be ready in 7 working days after we receive all required information and materials, provided you give your approvals on time.

### New questions — Dutch (8)

1. **Is FlowGuard een los ontwerp of onderdeel van Growth Rocket?**
   Nee. Wij passen je website aan en zetten die online als onderdeel van Growth Rocket: een compleet online businesssysteem. Je krijgt je website samen met Growth Rocket Hub, hosting, SSL, onderhoud en ondersteuning. Je hoeft het ontwerp niet zelf te installeren.
2. **Is FlowGuard bedoeld voor verwarmingsbedrijven of algemene loodgieters?**
   Deze versie is bedoeld voor verwarmingsbedrijven. We stemmen de diensten en inhoud af op de installaties die je onderhoudt, repareert of plaatst. Het huidige voorbeeld toont een algemeen loodgietersbedrijf. Voor de oplevering passen we jouw website aan je eigen verwarmingsdiensten aan.
3. **Kan ik cv-ketelonderhoud en nieuwe installaties apart uitleggen?**
   Ja. We kunnen periodiek onderhoud, reparaties en aanvragen voor nieuwe installaties duidelijk van elkaar onderscheiden. We leggen uit wat elke dienst omvat. Neem alleen installaties en diensten op waarvoor je bedrijf de juiste kennis en kwalificaties heeft.
4. **Kunnen klanten online een onderhoudsbezoek aanvragen?**
   Ja. Aanvragen en afspraakmogelijkheden op je website zijn verbonden met Growth Rocket Hub. Tijdens de inrichting spreken we af hoe klanten een bezoek aanvragen of boeken en welke informatie over hun installatie nodig is. Een aanvraag betekent niet automatisch dat er direct een monteur komt.
5. **Kan ik ook warmtepompen of andere verwarmingssystemen opnemen?**
   Ja, als je die diensten aanbiedt. We stemmen de inhoud af op de systemen waarmee je werkt en je aantoonbare ervaring. Technisch advies, prestatiecijfers en energiebesparingen vragen om onderbouwing. Neem die niet zomaar over uit voorbeeldinhoud.
6. **Vervangt Growth Rocket mijn gespecialiseerde onderhoudssoftware?**
   Met Growth Rocket beheer je aanvragen, afspraken, contacten, offertes en facturen. We presenteren het niet als een gespecialiseerd systeem voor monteursplanning, onderhoudshistorie van installaties of onderhoudscontracten. Wil je een koppeling met bestaande software? Bespreek de mogelijkheden en omvang dan vooraf met ons.
7. **Kan ik mijn huisstijl behouden en wie onderhoudt de website?**
   Ja. We stemmen het ontwerp af op je huisstijl, diensten en projectfoto’s. Je kunt je domeinnaam behouden. Hosting, SSL, technisch onderhoud en doorlopende ondersteuning zijn voor je geregeld. Via de Hub kun je een supportverzoek indienen.
8. **Wat kost FlowGuard en hoe snel kan de website online?**
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
| H2 | Make FlowGuard<br>your business’s next website. | Make FlowGuard your next website. | Maak van FlowGuard jouw volgende website. |
| Description | A professional website for your business. Your complete business system in Growth Rocket Hub. All maintained for you. | A website shaped around your heating business, connected to Growth Rocket Hub. Hosting, maintenance and support are handled for you. | Een website die past bij jouw verwarmingsbedrijf, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |
| Primary / secondary CTA | Start with this design / Talk to our team | Same | Kies dit ontwerp / Neem contact met ons op |
| Destinations | #package / mailto:sales@getgrowthrocket.com?subject=FlowGuard%20website%20enquiry | Same | #package / mailto:sales@getgrowthrocket.com?subject=Vraag%20over%20FlowGuard |

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
| Preview alt | FlowGuard website design preview for a heating engineer business | Voorbeeld van het FlowGuard-websiteontwerp voor verwarmingsbedrijven |
| Gallery card label | FlowGuard · Heating Engineers · View design | FlowGuard · Verwarmingsbedrijven · Bekijk ontwerp |
| Personalisation image | Use a real heating installation or servicing photograph. Align the preview with this focus before publishing. | Gebruik een foto van onderhoud of installatie van een verwarmingssysteem. Stem het voorbeeld eerst op deze focus af. |
| Image implementation | Write alt text to match the selected photograph. Do not imply stock photographs show the customer’s team or completed work. | Stem de alt-tekst af op de gekozen foto. Presenteer stockfoto’s niet als het eigen team of werk van de klant. |
| Shared sections | Sections 6–8 are shared master copy. Only the design name and its CTA destination vary. Keep the six existing video destinations. Do not claim Dutch audio unless a Dutch video exists. | Onderdeel 6–8 gebruikt dezelfde tekst op alle ontwerppagina’s. Alleen de ontwerpnaam en knopbestemming variëren. Behoud de zes videobestemmingen. Beloof geen Nederlandstalige video als die niet beschikbaar is. |
| SEO handover | Keep substantive copy outside the embedded preview. Give each language its own canonical URL and reciprocal language links. Redirect replaced published URLs. Do not publish invented ratings or performance claims as structured data. | Plaats de inhoud ook buiten het ingesloten voorbeeld. Geef beide talen een eigen canonieke URL en wederzijdse taalverwijzingen. Stuur vervangen gepubliceerde URL’s door. Gebruik geen verzonnen beoordelingen of besparingen in gestructureerde gegevens. |

See the notes below for how each of these was applied.

---

## Website template corrections (T01–T12)

The document's correction tables list issues found in the **FlowGuard template site itself**
(`https://plumber-5-template.vercel.app/`). That site is a separate project, not part of this repository, so these are not part
of this update. Copied from the document:

| Location | Observed issue | Action / status |
| --- | --- | --- |
| T01 · Industry mismatch | Sheet targets heating-engineer website design. Preview shows general plumbing: emergency plumbing, drains, leak detection, bathrooms and kitchens. | Align preview hero, services, projects and FAQs with heating before publishing it as a heating-focused example. The landing copy acknowledges the current general-plumbing preview. |
| T02 · Branding and title | FlowGuard landing uses Tij / Tij Loodgieters in preview. Browser title is “Create Next App”. Old document comparison column says AquaFix. | Keep FlowGuard as design name; identify Tij as example business. Set a meaningful preview page title and remove the wrong AquaFix document label. |
| T03 · Electrical carry-over | Image descriptions include “Electrician working”, “Electrician inspecting panel”, electrical project names and “Electrician fixing light fixture”. Team heading says “people behind the power”. | Review the actual assets and replace unrelated imagery/text with heating work. Write accurate alt text after choosing images; remove electrical project examples. |
| T04 · Unverified proof | 15+ years, 2,500+ jobs, 4.8 stars and 200+ reviews appear with named reviews. | Verify or replace all figures and reviews before customer use. Identify demo content; do not present it as Growth Rocket evidence. |
| T05 · Operational promises | 24/7 emergency service, two-hour arrival, confirmation within an hour and 12-month workmanship guarantee are claimed. | Confirm with the business or remove. Keep service availability and guarantee wording consistent across the page. |
| T06 · Booking mismatch | Copy says pick a time and book in under a minute. Visible form has contact/service fields but no date/time selection. | Use enquiry wording unless connected booking is implemented. Verify CTA destinations and appointment confirmation; no submission or backend test was performed. |
| T07 · Placeholder links | Booking/contact, service Learn more, articles, location links and several legal links point to #. | Connect each to an actual section or destination, or remove it. Verify the complete customer journey before launch. |
| T08 · Qualifications | Fully licensed/insured/certified and national-standards claims appear without visible detail. | Confirm exact qualifications and relevant scope with the heating business. Do not imply universal authorisation for all heating systems. |
| T09 · Coverage and identity | Preview lists nationwide cities, example team names, Tij company identity and KvK88421190. | Replace with verified customer details and actual coverage. Confirm permission for team photographs and real customer evidence. |
| T10 · Sales overlay | Floating WhatsApp link points to +31 85 744 4176, alongside demo customer CTAs. | Clearly distinguish Growth Rocket design-sales contact from the installer’s customer contact. Do not copy a platform sales number into the delivered client website. |
| T11 · Localisation | English preview content and broad plumbing labels remain. | Provide natural Dutch copy for the configured heating offer, including menus, form fields, validation, consent and legal navigation. No unsupported energy-saving claims. |
| T12 · Landing alignment | Existing landing copy is generic; old document retains dental wording and 7 days. | Implement the new EN/NL copy and shared sections 6–8. Keep the seven-working-day condition nearby, and retain all three package elements and six videos. |

---

## Notes and decisions

- **N1 — URL.** The English page now lives at `/designs/flowguard-heating-engineer-website`. Every link, the canonical URL, the language links and the structured data use it. The replaced URLs redirect there permanently (308) in one step: `/design/plumber/flowguard`, `/designs/plumber/flowguard`, `/designs/flowguard`. The Dutch page keeps the established Dutch URL `/nl/ontwerpen/loodgieter/flowguard`, as the document asks; the language switch moves between the two.
- **N2 — Ticker and footer (section 12).** These are site-wide: the same ticker and footer appear on every page of the site, in both languages. Changing them here would change every page, so they are left for a separate, site-wide update (including the "Saloon" category label in the footer).
- **N3 — Shared sections 6–8.** The same master copy ShineSquad already uses (`page-copy/master.ts`); only the design name and CTA destination vary. Checked word for word against this document's sections 6–8.
- **N4 — Monthly card and tax note.** As in the document: the monthly card shows only the struck-through €99, €69 / month and the onboarding fee (no "Billed monthly." or "Save €138 a year…" lines), and "Prices exclude VAT." / "Prijzen zijn exclusief btw." shows on the price card.
- **N5 — FAQ help card.** "Still have a question?" is not in the approved copy, so the help card shows only the document's intro and button. The FAQ button keeps its existing email subject (`<design> website enquiry`); the document gives no destination for it.
- **N6 — Section 5 image.** The page shows a scrolling screenshot of the design, not a photograph, so the document's image direction does not apply; the alt text is the document's "Preview alt" / "Alt-tekst voorbeeld". The caption overlay is hidden in the current design and stays hidden.
- **N7 — "Watch on YouTube".** The video panel plays the video in the page and has no YouTube link, so none is added. "Play video" / "Video afspelen" is used for the play control. The six videos keep their existing (English) destinations in both languages, as the document requires.
- **N8 — Hidden labels on the Dutch page.** Screen-reader labels not covered by the document use the document's own Dutch terms: "Kruimelpad", "Schermkeuze", "Betaalkeuze" and "Uitlegvideo’s".
- **N9 — Heading colours.** Headings keep the page's purple accent; the words are exactly the document's. Where the document gives a heading as one sentence (no line break), it stays one sentence with the accent on its closing words: “Your questions answered.” and “Make FlowGuard your next website.” (and the Dutch equivalents).
- **N10 — Other designs.** The cards are PipeWorks, FlowMaster and DrainPro, exactly as the document lists them, with the document's labels on this page only (the `/designs` listing keeps its own). The document's links use the staging domain `ggr-home.vercel.app` and older paths; the cards link to each design's current URL on this site, in the page's language. The document gives no labels for these cards, so they keep their existing label ("Plumbing", which is also what the Dutch page showed before).
- **N11 — No FAQ button in the document.** Section 9 has no CTA row, so the help card keeps a button using the closing section's own label: "Talk to our team" / "Neem contact met ons op", with the existing email subject.
- **N12 — Dutch closing button.** Its email subject is the document's own: `mailto:sales@getgrowthrocket.com?subject=Vraag%20over%20FlowGuard`. The English one keeps `FlowGuard website enquiry`, as the document gives.
- **N13 — Gallery card label and personalisation photo.** The "Gallery card label" / "Ontwerpkaart" row is for this design's card on the `/designs` listing page, not this page, so it is not part of this update. The suggested photograph does not apply: the page shows the design screenshot, with the document's "Preview alt" as its alt text.
