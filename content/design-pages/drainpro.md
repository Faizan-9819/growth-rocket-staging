# DrainPro design page — content update reference

| | |
| --- | --- |
| **Source** | `DrainPro — Drainage Company Design Page Copy.docx` (16 October 2026) |
| **English page** | `/designs/drainpro-drainage-company-website` (was `/design/plumber/drainpro`, which now redirects) |
| **Dutch page** | `/nl/ontwerpen/loodgieter/drainpro` |
| **Scope** | This page only, both languages. |

**Where the copy lives in the code**

- DrainPro's own copy (sections 0–5 and 9–11), English and Dutch: `app/components/sections/design/page-copy/drainpro.ts`
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
| SEO title | DrainPro \| Plumbing Website Design & Business Tools \| Growth Rocket | Drainage Company Website Design \| DrainPro \| Growth Rocket | Website voor ontstoppingsbedrijven \| DrainPro \| Growth Rocket |
| Meta description | Explore DrainPro: a professional plumbing website design with appointments, enquiries, Growth Rocket Hub and ongoing technical support. Built for small businesses. | Explore DrainPro, a website design for drainage companies. Explain unblocking, inspections and repairs, with Growth Rocket Hub and technical care included. | Ontdek DrainPro: een website voor ontstoppingsbedrijven. Toon je diensten en werkgebied, met Growth Rocket Hub, hosting, onderhoud en ondersteuning. |
| Primary topic | — | drainage company website design | Website voor ontstoppingsbedrijven |
| Supporting topics | — | Drain unblocking; recurring blockages; camera inspections; drainage repairs; local service areas | — (not in the Dutch copy) |
| Final URL (EN) | `/design/plumber/drainpro` | https://www.getgrowthrocket.com/designs/drainpro-drainage-company-website | Gebruik de vastgestelde Nederlandse URL-structuur en koppel de Nederlandse en Engelse variant. |

---

## 1. Hero

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Label | Website design for small businesses | Website design for drainage companies | Websiteontwerp voor ontstoppingsbedrijven |
| H1 line 1 | DrainPro. | Same | DrainPro. |
| H1 line 2 | A trust-building website for drainage and plumbing specialists. | Help customers find the right drainage service. | Maak duidelijk welke hulp je biedt bij afvoerproblemen. |
| Description | A professional website for your business. A complete business system with Growth Rocket Hub. All maintained for you. | Show customers how you handle blocked drains, recurring problems and planned inspections, and where you work. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system. | Laat klanten zien hoe je helpt bij verstoppingen, terugkerende problemen en geplande inspecties, en waar je werkt. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |

---

## 2–3. Breadcrumb and preview

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Breadcrumb | All designs / DrainPro | Same | Alle ontwerpen / DrainPro |
| Device controls | Desktop · Tablet · Mobile | Same | Computer · Tablet · Mobiel |
| Preview link | Preview in browser | Same | Bekijk in je browser |
| Primary CTA | Start with this design | Same | Kies dit ontwerp |
| Browser label | — (not shown) | DrainPro · Design preview | DrainPro · Websitevoorbeeld |
| Preview caption | Live preview of the design. Open it in a browser to explore every section. Example branding and content are replaced with your own details. | Explore DrainPro using VakMan Loodgieters as the example business. We adapt the branding and service content to your drainage business. | Bekijk DrainPro met VakMan Loodgieters als voorbeeldbedrijf. We stemmen de huisstijl en diensten af op jouw ontstoppingsbedrijf. |
| Destinations | https://plumber-3-template.vercel.app/ · CTA `#package` | Preview: https://plumber-3-template.vercel.app/<br>Primary CTA: #package | Voorbeeld: https://plumber-3-template.vercel.app/<br>Primaire knop: #package |

---

## 4. Benefits

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Build confidence.<br>Before the first visit. | Explain the problem you solve.<br>Show the work behind it. | Laat zien wat je oplost.<br>En hoe je te werk gaat. |
| Intro | Choosing a business is personal. DrainPro gives prospective customers a clear picture of your business and a simple way to take the next step. | A blocked kitchen drain and a recurring underground blockage may need different approaches. DrainPro gives you space to explain your services in plain language and help customers describe what is happening before you arrange a visit. | Een verstopte keukenafvoer vraagt niet altijd om dezelfde aanpak als een terugkerende rioolverstopping. Met DrainPro leg je je diensten helder uit en kunnen klanten hun probleem beschrijven voordat je een bezoek afspreekt. |
| Card 1 title | Make your services easy to understand. | Separate clearing, inspection and repair. | Maak onderscheid tussen ontstoppen, inspecteren en repareren. |
| Card 1 body | Give each of your services a clear introduction, so customers can find what matters to them without a phone call first. | Explain which work you carry out, from clearing a blockage to camera inspections and pipe repairs. Show when an inspection may be needed without promising a diagnosis from an online form. | Beschrijf wat je uitvoert, van een verstopping verhelpen tot camera-inspecties en leidingreparaties. Leg uit wanneer onderzoek nodig kan zijn, zonder een diagnose via het formulier te beloven. |
| Card 2 title | Introduce the people behind the work. | Show how you investigate the cause. | Laat zien hoe je de oorzaak onderzoekt. |
| Card 2 body | Show your team, their experience and how you work, so an unfamiliar business feels more approachable. | Describe your inspection process and the equipment you actually use. Real photographs and brief job examples help customers understand what a visit involves. | Beschrijf je werkwijze en de apparatuur die je echt gebruikt. Eigen foto’s en korte praktijkvoorbeelden helpen klanten begrijpen wat een bezoek inhoudt. |
| Card 3 title | Let genuine feedback build trust. | Make coverage and access clear. | Wees duidelijk over werkgebied en toegang. |
| Card 3 body | Create space for your own customer testimonials and credentials, alongside the story of your business. | State the areas and property types you serve. Explain which location and access details customers should share, especially for landlords, shared buildings and business premises. | Vermeld waar je werkt en voor welke panden je beschikbaar bent. Leg uit welke adres- en toegangsgegevens je nodig hebt, bijvoorbeeld bij verhuurders, gedeelde gebouwen en bedrijfspanden. |
| Card 4 title | Make the next step feel simple. | Give urgent and recurring problems a route. | Geef spoed en terugkerende problemen een eigen route. |
| Card 4 body | Keep booking prompts, enquiry forms and contact details easy to find, including on a phone. | Keep telephone contact visible for urgent issues and offer an enquiry route for inspections or repeat problems. Explain how your team confirms availability and the scope of work. | Houd je telefoonnummer zichtbaar voor spoed en bied een aanvraagmogelijkheid voor inspecties of terugkerende klachten. Leg uit hoe je team de beschikbaarheid en werkzaamheden bevestigt. |

---

## 5. Personalisation

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Your business. Your identity.<br>Your website. | Your services. Your expertise.<br>Your website. | Jouw diensten. Jouw vakkennis.<br>Jouw website. |
| Intro | The design is your starting point. We shape the website around the people, services and details that make your business yours. | DrainPro is the starting point. We shape it around your drainage services, equipment and customers, so visitors understand what you do before requesting help. | DrainPro is het vertrekpunt. We stemmen de website af op je ontstoppingsdiensten, apparatuur en klanten, zodat bezoekers weten waarvoor ze bij je terechtkunnen. |
| List 1 | Your logo, colours and business story | Your logo, colours and company story | Je logo, kleuren en bedrijfsverhaal |
| List 2 | Your services and service information | Your unblocking, inspection and repair services | Je diensten voor ontstoppen, inspecteren en repareren |
| List 3 | Your team and business photography | Your actual equipment and team photographs | Foto’s van je eigen apparatuur en team |
| List 4 | Your locations and contact details | Examples of completed work and genuine reviews | Voorbeelden van uitgevoerd werk en echte beoordelingen |
| List 5 | Genuine customer testimonials and reviews | Your service area and the property types you work on | Je werkgebied en de soorten panden waarin je werkt |
| List 6 | Verified ratings and professional credentials | How customers arrange access and request a visit | Hoe klanten toegang regelen en een bezoek aanvragen |
| List 7 | Video testimonials and business introductions | Your qualifications and clear information about charges | Je kwalificaties en duidelijke informatie over kosten |
| Image alt text (document's "Preview alt") | DrainPro design, shown as it would look for your business | DrainPro website design preview for a drainage company | Voorbeeld van het DrainPro-websiteontwerp voor ontstoppingsbedrijven |

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
| CTA | Start with DrainPro | Same | Start met DrainPro |
| CTA destination | mailto:sales@getgrowthrocket.com?subject=Get%20started%20with%20DrainPro | Same | mailto:sales@getgrowthrocket.com?subject=Starten%20met%20DrainPro |

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
| Intro | Ask us anything about DrainPro — what is included, how it is set up and what happens after it goes live. (help card, under the title “Still have a question?”) | Questions about DrainPro? We’re happy to help with the design, setup and what’s included. | Vragen over DrainPro? We helpen je graag met het ontwerp, de inrichting en wat je krijgt. |

### Current questions (7, replaced)

1. Am I buying just the website design?
2. Can DrainPro match my business’s branding?
3. Can I use my existing domain?
4. What do I need to provide?
5. How do appointments and enquiries work?
6. What does the package cost?
7. What happens if I need help after launch?

### New questions — English (8)

1. **Is DrainPro just a website design I download?**
   No. We tailor and launch your website as part of Growth Rocket: a complete online business system. You get a website for your drainage business, Growth Rocket Hub, hosting, SSL, maintenance and support. You do not have to install or maintain the design yourself.
2. **What makes DrainPro suitable for a drainage company?**
   We shape the service content around unblocking, inspections and repairs, rather than treating every problem as the same job. Your website can explain the property types and areas you cover, show your equipment and work, and help customers choose a suitable contact route.
3. **Can I explain camera inspections and recurring blockages?**
   Yes. We can explain the inspection services you actually offer and the reasons customers might request them, such as a blockage that keeps returning. Use your own equipment photographs and job examples. The website helps customers request an assessment; it does not diagnose a drain or promise that a particular treatment will solve every problem.
4. **Can customers tell me about the blockage before I visit?**
   Yes. Your enquiry form can collect contact details and a description of the problem. During setup, we agree relevant fields such as location and access information. You review and follow up on enquiries in Growth Rocket Hub. Your team still assesses the job and confirms the visit.
5. **Can I manage visits, quotes and invoices in the Hub?**
   Yes. Growth Rocket Hub brings enquiries, appointments, customer contacts, quotes and invoices together. Contacts are created automatically from website enquiries and appointments. You can prepare a quote and convert it into an invoice once accepted. Specialist drainage reporting or connections to other systems would need a separate discussion.
6. **Can DrainPro reflect my service area and customer types?**
   Yes. We adapt the design to your branding, services and actual coverage. You can explain whether you work with homeowners, landlords, property managers or businesses. Share your opening hours, genuine reviews, photographs and approach to call-out charges. You can keep your existing domain.
7. **Who handles the website’s technical maintenance?**
   We handle hosting, SSL, technical maintenance and ongoing support. You can raise support requests through the Hub. Additional pages or custom functionality are discussed and scoped separately.
8. **What does DrainPro cost, and when can it go live?**
   The Growth Rocket package costs €69 per month or €690 per year, plus a €290 one-time onboarding fee. Prices exclude VAT. Your website can be ready in 7 working days after we receive all required information and materials, provided you give your approvals on time.

### New questions — Dutch (8)

1. **Is DrainPro alleen een ontwerp dat ik download?**
   Nee. Wij passen je website aan en zetten die online als onderdeel van Growth Rocket: een compleet online businesssysteem. Je krijgt een website voor je ontstoppingsbedrijf, Growth Rocket Hub, hosting, SSL, onderhoud en ondersteuning. Je hoeft het ontwerp niet zelf te installeren of technisch te onderhouden.
2. **Waarom past DrainPro bij een ontstoppingsbedrijf?**
   We stemmen de diensten af op ontstoppen, inspecteren en repareren. Niet elk probleem vraagt immers om dezelfde aanpak. Je website kan laten zien in welke panden en gebieden je werkt, welke apparatuur je gebruikt en hoe klanten contact opnemen.
3. **Kan ik camera-inspecties en terugkerende verstoppingen uitleggen?**
   Ja. We beschrijven de inspecties die je echt aanbiedt en wanneer klanten die kunnen aanvragen, bijvoorbeeld bij een verstopping die steeds terugkomt. Gebruik daarbij eigen foto’s en praktijkvoorbeelden. Via de website vraagt de klant een beoordeling aan. De website stelt geen diagnose en belooft niet dat één behandeling elk probleem oplost.
4. **Kunnen klanten de verstopping beschrijven voordat ik langskom?**
   Ja. Je aanvraagformulier kan contactgegevens en een beschrijving van het probleem verzamelen. Tijdens de inrichting stemmen we relevante velden af, zoals locatie en toegang tot het pand. In Growth Rocket Hub bekijk je de aanvragen en volg je ze op. Je eigen team beoordeelt de klus en bevestigt het bezoek.
5. **Kan ik bezoeken, offertes en facturen in de Hub beheren?**
   Ja. Growth Rocket Hub brengt aanvragen, afspraken, contacten, offertes en facturen op één plek. Contacten worden automatisch aangemaakt vanuit aanvragen en afspraken via de website. Je kunt een offerte opmaken en die na acceptatie omzetten in een factuur. Specifieke inspectierapporten of koppelingen met andere systemen bespreken we apart.
6. **Kan DrainPro mijn werkgebied en soorten klanten weergeven?**
   Ja. We stemmen het ontwerp af op je huisstijl, diensten en echte werkgebied. Je kunt aangeven of je voor particulieren, verhuurders, vastgoedbeheerders of bedrijven werkt. Deel je openingstijden, echte beoordelingen, foto’s en de manier waarop je voorrijkosten bespreekt. Je kunt je bestaande domein behouden.
7. **Wie verzorgt het technisch onderhoud van de website?**
   Wij regelen hosting, SSL, technisch onderhoud en doorlopende ondersteuning. Via de Hub kun je een supportverzoek indienen. Extra pagina’s of specifieke functionaliteit bespreken en begroten we apart.
8. **Wat kost DrainPro en wanneer kan de website online?**
   Het Growth Rocket-pakket kost €69 per maand of €690 per jaar, plus €290 eenmalige opstartkosten. Prijzen zijn exclusief btw. Je website kan in 7 werkdagen online, nadat we alle benodigde informatie en materialen hebben ontvangen en als je op tijd je akkoord geeft.

The FAQ structured data (`FAQPage`) uses the same questions and answers, in the page's language.

---

## 10. Other designs

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Another look for<br>your business. | Find the design that fits your business. | Kies het ontwerp dat bij je bedrijf past. |
| Intro | More plumbing designs in the same package. Every one of them is built, connected and maintained the same way. | Compare other designs for plumbing businesses. We adapt your chosen design to your services, identity and customers. | Bekijk andere ontwerpen voor loodgietersbedrijven. We stemmen je keuze af op je diensten, huisstijl en klanten. |
| Cards and destinations | PipeWorks · Plumbing<br>FlowMaster · Plumbing<br>AquaFix · Plumbing | PipeWorks · https://ggr-home.vercel.app/design/plumber/pipeworks<br>FlowMaster · https://ggr-home.vercel.app/design/plumber/flowmaster<br>AquaFix · https://ggr-home.vercel.app/design/plumber/aquafix | PipeWorks · https://ggr-home.vercel.app/design/plumber/pipeworks<br>FlowMaster · https://ggr-home.vercel.app/design/plumber/flowmaster<br>AquaFix · https://ggr-home.vercel.app/design/plumber/aquafix |
| Implementation | — | Keep the verified design destinations. Use corresponding Dutch destinations where available; do not invent translated URLs. | Behoud de gecontroleerde ontwerpbestemmingen. Gebruik de bijbehorende Nederlandse pagina waar die bestaat; verzin geen vertaalde URL’s. |

---

## 11. Closing CTA

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Make DrainPro<br>your business’s next website. | Make DrainPro your next website. | Maak van DrainPro jouw volgende website. |
| Description | A professional website for your business. Your complete business system in Growth Rocket Hub. All maintained for you. | A website shaped around your drainage services and customers, connected to Growth Rocket Hub. Hosting, maintenance and support are handled for you. | Een website voor jouw ontstoppingsdiensten en klanten, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |
| Primary / secondary CTA | Start with this design / Talk to our team | Same | Kies dit ontwerp / Neem contact met ons op |
| Destinations | #package / mailto:sales@getgrowthrocket.com?subject=DrainPro%20website%20enquiry | Same | #package / mailto:sales@getgrowthrocket.com?subject=Vraag%20over%20DrainPro |

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
| Preview alt | DrainPro website design preview for a drainage company | Voorbeeld van het DrainPro-websiteontwerp voor ontstoppingsbedrijven |
| Gallery card label | DrainPro · Drainage companies · View design | DrainPro · Ontstoppingsbedrijven · Bekijk ontwerp |
| Personalisation image | Use a relevant drain-clearing or inspection photograph that reflects the services offered. | Gebruik een relevante foto van ontstoppingswerk of een inspectie die past bij de aangeboden diensten. |
| Image implementation | Write alt text to match the selected photograph. Do not imply stock photographs show the customer’s team or completed work. | Stem de alt-tekst af op de gekozen foto. Presenteer stockfoto’s niet als het eigen team of werk van de klant. |
| Shared sections | Sections 6–8 are shared master copy. Only the design name and its CTA destination vary. Keep the six existing video destinations. Do not claim Dutch audio unless a Dutch video exists. | Onderdeel 6–8 gebruikt dezelfde tekst op alle ontwerppagina’s. Alleen de ontwerpnaam en knopbestemming variëren. Behoud de zes videobestemmingen. Beloof geen Nederlandstalige video als die niet beschikbaar is. |
| SEO handover | Keep substantive copy outside the embedded preview. Give each language its own canonical URL and reciprocal language links. Redirect replaced published URLs. Do not publish invented ratings or performance claims as structured data. Keep these niche-specific answers visible and crawlable. Do not promise search rankings or AI citations. If FAQ structured data is retained, match the visible copy; do not promise FAQ rich results. | Plaats de inhoud ook buiten het ingesloten voorbeeld. Geef beide talen een eigen canonieke URL en wederzijdse taalverwijzingen. Stuur vervangen gepubliceerde URL’s door. Gebruik geen verzonnen beoordelingen of besparingen in gestructureerde gegevens. Houd de sectorspecifieke antwoorden zichtbaar en doorzoekbaar. Beloof geen zoekposities of vermeldingen door AI. Eventuele FAQ-gegevens moeten bij de zichtbare tekst passen; beloof geen uitgebreide FAQ-zoekresultaten. |

See the notes below for how each of these was applied.

---

## Website template corrections (T01–T11)

The document's correction tables list issues found in the **DrainPro template site itself**
(`https://plumber-3-template.vercel.app/`). That site is a separate project, not part of this repository, so these are not part
of this update. Copied from the document:

| Location | Observed issue | Action / status |
| --- | --- | --- |
| T01 · Design and example identity | DrainPro opens a preview branded VakMan Loodgieters, with “Create Next App” as its title and “VakMan Loodgiet” in the footer. | Explain the example identity, retain DrainPro as the design name and replace the default title and truncated footer text. |
| T02 · Drainage positioning | The preview presents general plumbing: emergency repairs, bathroom and kitchen plumbing, boilers and pipework. Drain unblocking is one service among eight. | Align the preview with the drainage brief: foreground unblocking, investigation and repairs the example business actually offers. Do not claim camera inspection or jetting equipment without matching content and imagery. |
| T03 · Booking anchors | Appointment links use #book or #booking. Neither ID appeared in the inspected page; the visible enquiry form is #contact. | Connect appointment CTAs to a working appointment route. Send enquiry links to #contact and distinguish request submission from a confirmed visit. |
| T04 · Service selector | The enquiry form offers only Emergency Plumbing, despite eight service tabs. Its button says Request Appointment. | Provide relevant drainage choices and use a label matching the action. Test required fields, confirmation, consent and Hub receipt. No form submission was tested. |
| T05 · Emergency availability | The hero states 24/7 and same-day call-outs. Contact hours are limited and the FAQ qualifies urgent help by availability and location. | Make the promise consistent with actual operating hours and response arrangements. Keep urgent telephone contact distinct from requests that may be reviewed later. |
| T06 · Proof and credentials | The preview claims 10+ years, 1,500+ jobs, a 4.8 rating and a 100% certified team. Elsewhere it says rated by 1,500+ local customers. | Verify jobs, reviewers and ratings separately; they are not interchangeable counts. Replace named sample reviews and staff with genuine business evidence. |
| T07 · Contact routing | Rotterdam example contact details appear, while WhatsApp uses Growth Rocket’s number. | Replace telephone, email, address and messaging targets for the customer. Label any separate design-sales contact clearly. |
| T08 · Coverage and language | The page is English with a Dutch example name and a multi-city Netherlands coverage list. The FAQ includes template-customisation wording. | Use real service areas, translate menus, forms and customer copy, and remove developer-facing instructions from public FAQs. |
| T09 · Portfolio relevance | Project images include bathrooms, kitchens, tools and pipe assemblies rather than a clearly drainage-focused portfolio. | Use permissioned drainage work and relevant equipment photographs. Add factual job context without invented results or testimonials. |
| T10 · Placeholder destinations | Facebook, LinkedIn and Instagram links point to the networks’ generic homepages. | Replace with real profiles or remove them. Verify privacy and cookie-policy destinations and the article cards before launch; their existence alone does not confirm completeness. |
| T11 · Landing page and shared sections | The landing page uses generic business copy, describes the Hub as the complete system, and still says “7 days” in the launch section and ticker. The old source also includes dental references. | Apply the English and Dutch copy here, including the three package elements, working-day condition and revised ticker. Keep video destinations; verify each before release. Show VAT beside prices. Use €828 versus €690 for savings; €99/€990 are display references only and require a substantiated basis before publication. |

---

## Notes and decisions

- **N1 — URL.** The English page now lives at `/designs/drainpro-drainage-company-website`. Every link, the canonical URL, the language links and the structured data use it. The replaced URLs redirect there permanently (308) in one step: `/design/plumber/drainpro`, `/designs/plumber/drainpro`, `/designs/drainpro`. The Dutch page keeps the established Dutch URL `/nl/ontwerpen/loodgieter/drainpro`, as the document asks; the language switch moves between the two.
- **N2 — Ticker and footer (section 12).** These are site-wide: the same ticker and footer appear on every page of the site, in both languages. Changing them here would change every page, so they are left for a separate, site-wide update (including the "Saloon" category label in the footer).
- **N3 — Shared sections 6–8.** The same master copy ShineSquad already uses (`page-copy/master.ts`); only the design name and CTA destination vary. Checked word for word against this document's sections 6–8.
- **N4 — Monthly card and tax note.** As in the document: the monthly card shows only the struck-through €99, €69 / month and the onboarding fee (no "Billed monthly." or "Save €138 a year…" lines), and "Prices exclude VAT." / "Prijzen zijn exclusief btw." shows on the price card.
- **N5 — FAQ help card.** "Still have a question?" is not in the approved copy, so the help card shows only the document's intro and button. The FAQ button keeps its existing email subject (`<design> website enquiry`); the document gives no destination for it.
- **N6 — Section 5 image.** The page shows a scrolling screenshot of the design, not a photograph, so the document's image direction does not apply; the alt text is the document's "Preview alt" / "Alt-tekst voorbeeld". The caption overlay is hidden in the current design and stays hidden.
- **N7 — "Watch on YouTube".** The video panel plays the video in the page and has no YouTube link, so none is added. "Play video" / "Video afspelen" is used for the play control. The six videos keep their existing (English) destinations in both languages, as the document requires.
- **N8 — Hidden labels on the Dutch page.** Screen-reader labels not covered by the document use the document's own Dutch terms: "Kruimelpad", "Schermkeuze", "Betaalkeuze" and "Uitlegvideo’s".
- **N9 — Heading colours.** Headings keep the page's purple accent; the words are exactly the document's. Where the document gives a heading as one sentence (no line break), it stays one sentence with the accent on its closing words: “Your questions answered.” and “Make DrainPro your next website.” (and the Dutch equivalents).
- **N10 — Other designs.** The cards are PipeWorks, FlowMaster and AquaFix, exactly as the document lists them, with the document's labels on this page only (the `/designs` listing keeps its own). The document's links use the staging domain `ggr-home.vercel.app` and older paths; the cards link to each design's current URL on this site, in the page's language. The document gives no labels for these cards, so they keep their existing label ("Plumbing", which is also what the Dutch page showed before).
- **N11 — No FAQ button in the document.** Section 9 has no CTA row, so the help card keeps a button using the closing section's own label: "Talk to our team" / "Neem contact met ons op", with the existing email subject.
- **N12 — Dutch closing button.** Its email subject is the document's own: `mailto:sales@getgrowthrocket.com?subject=Vraag%20over%20DrainPro`. The English one keeps `DrainPro website enquiry`, as the document gives.
- **N13 — Gallery card label and personalisation photo.** The "Gallery card label" / "Ontwerpkaart" row is for this design's card on the `/designs` listing page, not this page, so it is not part of this update. The suggested photograph does not apply: the page shows the design screenshot, with the document's "Preview alt" as its alt text.
