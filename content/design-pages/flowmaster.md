# FlowMaster design page — content update reference

| | |
| --- | --- |
| **Source** | `FlowMaster — Bathroom Installer Design Page Copy.docx` (16 October 2026) |
| **English page** | `/designs/flowmaster-bathroom-installer-website` (was `/design/plumber/flowmaster`, which now redirects) |
| **Dutch page** | `/nl/ontwerpen/loodgieter/flowmaster` |
| **Scope** | This page only, both languages. |

**Where the copy lives in the code**

- FlowMaster's own copy (sections 0–5 and 9–11), English and Dutch: `app/components/sections/design/page-copy/flowmaster.ts`
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
| SEO title | FlowMaster \| Plumbing Website Design & Business Tools \| Growth Rocket | Bathroom Installer Website \| FlowMaster \| Growth Rocket | Website voor badkamerinstallateurs \| FlowMaster \| Growth Rocket |
| Meta description | Explore FlowMaster: a professional plumbing website design with appointments, enquiries, Growth Rocket Hub and ongoing technical support. Built for small businesses. | Explore FlowMaster, a website design for bathroom installers. Show your projects and process, with Growth Rocket Hub, hosting and technical care included. | Ontdek FlowMaster: een website voor badkamerinstallateurs. Toon je projecten en werkwijze, met Growth Rocket Hub, hosting, onderhoud en ondersteuning. |
| Primary topic | — | bathroom installer website design | Website voor badkamerinstallateurs |
| Supporting topics | — | Bathroom installation; kitchen plumbing; renovation projects; site visits; installation quotes | — (not in the Dutch copy) |
| Final URL (EN) | `/design/plumber/flowmaster` | https://www.getgrowthrocket.com/designs/flowmaster-bathroom-installer-website | Gebruik de vastgestelde Nederlandse URL-structuur en koppel de Nederlandse en Engelse variant. |

---

## 1. Hero

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Label | Website design for small businesses | Website design for bathroom installers | Websiteontwerp voor badkamerinstallateurs |
| H1 line 1 | FlowMaster. | Same | FlowMaster. |
| H1 line 2 | A clean, conversion-ready site for modern plumbing businesses. | Show the work behind their next bathroom. | Laat het vakwerk achter een nieuwe badkamer zien. |
| Description | A professional website for your business. A complete business system with Growth Rocket Hub. All maintained for you. | Help homeowners explore your installations, understand your process and request a site visit. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system. | Laat huiseigenaren je installaties bekijken, je werkwijze begrijpen en een bezoek aanvragen. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |

---

## 2–3. Breadcrumb and preview

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Breadcrumb | All designs / FlowMaster | Same | Alle ontwerpen / FlowMaster |
| Device controls | Desktop · Tablet · Mobile | Same | Computer · Tablet · Mobiel |
| Preview link | Preview in browser | Same | Bekijk in je browser |
| Primary CTA | Start with this design | Same | Kies dit ontwerp |
| Browser label | — (not shown) | FlowMaster · Design preview | FlowMaster · Websitevoorbeeld |
| Preview caption | Live preview of the design. Open it in a browser to explore every section. Example branding and content are replaced with your own details. | Explore FlowMaster using Cascade as the example business. We adapt the branding, project content, location and services to your installation business. | Bekijk FlowMaster met Cascade als voorbeeldbedrijf. We stemmen de huisstijl, projecten, locatie en diensten af op jouw installatiebedrijf. |
| Destinations | https://plumber-02-template.vercel.app/ · CTA `#package` | Preview: https://plumber-02-template.vercel.app/<br>Primary CTA: #package | Voorbeeld: https://plumber-02-template.vercel.app/<br>Primaire knop: #package |

---

## 4. Benefits

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Build confidence.<br>Before the first visit. | Show your finished work.<br>Explain how you get there. | Laat het resultaat zien.<br>En de weg ernaartoe. |
| Intro | Choosing a business is personal. FlowMaster gives prospective customers a clear picture of your business and a simple way to take the next step. | Choosing a bathroom installer is about more than a photograph of a finished room. Homeowners want to understand the work you undertake, who handles each part and how their project moves from an initial conversation to handover. | Een badkamerinstallateur kiezen vraagt om meer dan een foto van een mooie ruimte. Huiseigenaren willen weten welk werk je uitvoert, wie wat regelt en hoe hun project verloopt, van het eerste gesprek tot de oplevering. |
| Card 1 title | Make your services easy to understand. | Make your installation scope clear. | Maak duidelijk welk werk je uitvoert. |
| Card 1 body | Give each of your services a clear introduction, so customers can find what matters to them without a phone call first. | Explain whether you handle bathroom fitting, pipework, fixtures or kitchen plumbing. Distinguish the work you do from tasks arranged with other trades, so customers know what to ask for. | Beschrijf of je badkamers installeert, leidingwerk aanlegt, sanitair aansluit of keukeninstallaties verzorgt. Maak onderscheid tussen je eigen werk en taken voor andere vakmensen. |
| Card 2 title | Introduce the people behind the work. | Give projects useful context. | Geef je projecten context. |
| Card 2 body | Show your team, their experience and how you work, so an unfamiliar business feels more approachable. | Pair your own photographs with a short description of the brief, work completed and practical constraints. Before-and-after views help visitors understand the change without invented project outcomes. | Voeg bij eigen foto’s een korte beschrijving toe van de opdracht, het uitgevoerde werk en praktische aandachtspunten. Voor-en-nafoto’s laten de verandering zien zonder verzonnen projectresultaten. |
| Card 3 title | Let genuine feedback build trust. | Explain the route from visit to handover. | Leg de stappen tot oplevering uit. |
| Card 3 body | Create space for your own customer testimonials and credentials, alongside the story of your business. | Describe how you assess the room, prepare a quote, agree the work and organise installation. Keep any timing, guarantees or included services specific to what your business offers. | Beschrijf hoe je de ruimte bekijkt, een offerte opmaakt, het werk afspreekt en de installatie organiseert. Vermeld alleen planningen, garanties en inbegrepen werkzaamheden die je bedrijf echt biedt. |
| Card 4 title | Make the next step feel simple. | Start a useful project conversation. | Begin met een gerichte projectaanvraag. |
| Card 4 body | Keep booking prompts, enquiry forms and contact details easy to find, including on a phone. | Invite homeowners to describe their room, location and plans. Make it easy to request a visit, with your team confirming the scope and availability before work is agreed. | Nodig huiseigenaren uit om hun ruimte, locatie en plannen te beschrijven. Maak een bezoek aanvragen eenvoudig. Je team bevestigt de omvang en beschikbaarheid voordat het werk wordt afgesproken. |

---

## 5. Personalisation

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Your business. Your identity.<br>Your website. | Your projects. Your approach.<br>Your website. | Jouw projecten. Jouw aanpak.<br>Jouw website. |
| Intro | The design is your starting point. We shape the website around the people, services and details that make your business yours. | FlowMaster is the starting point. We shape the website around your installation work, finished projects and the way you guide customers through a renovation. | FlowMaster is het vertrekpunt. We stemmen de website af op je installatiewerk, afgeronde projecten en de manier waarop je klanten door een verbouwing begeleidt. |
| List 1 | Your logo, colours and business story | Your logo, colours and company story | Je logo, kleuren en bedrijfsverhaal |
| List 2 | Your services and service information | Your bathroom fitting and kitchen plumbing services | Je badkamerinstallaties en leidingwerk voor keukens |
| List 3 | Your team and business photography | Project galleries and your own before-and-after photographs | Projectgalerijen en eigen voor-en-nafoto’s |
| List 4 | Your locations and contact details | Your team, qualifications and work with other trades | Je team, kwalificaties en samenwerking met andere vakmensen |
| List 5 | Genuine customer testimonials and reviews | Genuine reviews and project walkthrough videos | Echte beoordelingen en video’s van je projecten |
| List 6 | Verified ratings and professional credentials | Your service area and how site visits are arranged | Je werkgebied en hoe je bezoeken afspreekt |
| List 7 | Video testimonials and business introductions | Your process for quotations, agreed work and handover | Je werkwijze voor offertes, werkafspraken en oplevering |
| Image alt text (document's "Preview alt") | FlowMaster design, shown as it would look for your business | FlowMaster website design preview for a bathroom installation business | Voorbeeld van het FlowMaster-websiteontwerp voor badkamerinstallateurs |

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
| CTA | Start with FlowMaster | Same | Start met FlowMaster |
| CTA destination | mailto:sales@getgrowthrocket.com?subject=Get%20started%20with%20FlowMaster | Same | mailto:sales@getgrowthrocket.com?subject=Starten%20met%20FlowMaster |

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
| Intro | Ask us anything about FlowMaster — what is included, how it is set up and what happens after it goes live. (help card, under the title “Still have a question?”) | Questions about FlowMaster? We’re happy to help with the design, setup and what’s included. | Vragen over FlowMaster? We helpen je graag met het ontwerp, de inrichting en wat je krijgt. |

### Current questions (7, replaced)

1. Am I buying just the website design?
2. Can FlowMaster match my business’s branding?
3. Can I use my existing domain?
4. What do I need to provide?
5. How do appointments and enquiries work?
6. What does the package cost?
7. What happens if I need help after launch?

### New questions — English (8)

1. **Is FlowMaster a bathroom design tool or a downloadable website?**
   Neither. FlowMaster is a website design we tailor and launch for your installation business as part of Growth Rocket: a complete online business system. It includes your website, Growth Rocket Hub, hosting, SSL, maintenance and support. It does not include a room-planning or 3D bathroom-design tool.
2. **What makes FlowMaster suitable for bathroom installers?**
   We shape the page around completed installations, the work you undertake and your process from site visit to handover. Customers can see your own photographs, understand what is included in your service and request a conversation about their project.
3. **Can I show bathroom projects and kitchen plumbing separately?**
   Yes. We can organise your service content and project examples so visitors understand the difference. Make clear which tasks your team handles and which require another trade. Use photographs you have permission to publish and accurate descriptions of the work completed.
4. **Can homeowners request a site visit through the website?**
   Yes. Your website can collect project enquiries and offer online appointments connected to Growth Rocket Hub. During setup, we agree the information you need, such as location and a description of the proposed work. Your team confirms the visit and assesses the project; the website does not automatically schedule the entire installation.
5. **Can I prepare a renovation quote and then an invoice?**
   Yes. In Growth Rocket Hub, you can prepare quotes using customer details and your own service descriptions and prices. Once a quote is accepted, you can convert it into an invoice. The Hub does not automatically calculate material quantities or renovation costs from a room description.
6. **What should I provide to personalise FlowMaster?**
   Share your logo, colours, installation services, service area, contact details and genuine project photographs. Useful project information includes what you installed, your scope and how you work with customers. You can use your existing domain. We adapt the example content to your business before you approve the website.
7. **Who looks after FlowMaster once it is live?**
   We handle hosting, SSL, technical maintenance and ongoing support. You can raise support requests through the Hub. If you need additional pages or custom functionality, we discuss the scope and any separate costs before proceeding.
8. **What does FlowMaster cost, and when can it go live?**
   The Growth Rocket package costs €69 per month or €690 per year, plus a €290 one-time onboarding fee. Prices exclude VAT. Your website can be ready in 7 working days after we receive all required information and materials, provided you give your approvals on time.

### New questions — Dutch (8)

1. **Is FlowMaster bedoeld om badkamers te ontwerpen of een website te downloaden?**
   Nee. FlowMaster is een websiteontwerp dat wij aanpassen en online zetten voor je installatiebedrijf. Het is onderdeel van Growth Rocket: een compleet online businesssysteem, met je website, Growth Rocket Hub, hosting, SSL, onderhoud en ondersteuning. Een ruimteplanner of 3D-badkamerontwerp is niet inbegrepen.
2. **Waarom past FlowMaster bij een badkamerinstallateur?**
   We richten de pagina in rond je afgeronde installaties, diensten en werkwijze van eerste bezoek tot oplevering. Klanten bekijken je eigen foto’s, zien welk werk je uitvoert en kunnen contact opnemen over hun project.
3. **Kan ik badkamerprojecten en keukeninstallaties apart laten zien?**
   Ja. We kunnen je diensten en projectvoorbeelden zo indelen dat bezoekers het verschil begrijpen. Maak duidelijk welk werk je team uitvoert en waarvoor een andere vakman nodig is. Gebruik foto’s die je mag publiceren en beschrijf het uitgevoerde werk nauwkeurig.
4. **Kunnen huiseigenaren via de website een bezoek aanvragen?**
   Ja. Je website kan projectaanvragen verzamelen en online afspraken aanbieden die verbonden zijn met Growth Rocket Hub. Tijdens de inrichting bespreken we welke informatie je nodig hebt, zoals de locatie en een omschrijving van het werk. Je team bevestigt het bezoek en beoordeelt het project. De website plant niet automatisch de hele installatie.
5. **Kan ik een offerte voor een verbouwing opmaken en daarna factureren?**
   Ja. In Growth Rocket Hub maak je offertes op met klantgegevens en je eigen omschrijvingen en prijzen. Na acceptatie kun je de offerte omzetten in een factuur. De Hub berekent niet automatisch materiaalhoeveelheden of verbouwingskosten op basis van een beschrijving van de ruimte.
6. **Wat lever ik aan om FlowMaster persoonlijk te maken?**
   Deel je logo, kleuren, installatiediensten, werkgebied, contactgegevens en eigen projectfoto’s. Vertel bij projecten wat je hebt geïnstalleerd, welk werk je uitvoerde en hoe je met klanten samenwerkt. Je kunt je bestaande domein gebruiken. Wij vervangen de voorbeeldinhoud door jouw bedrijfsinformatie voordat je de website goedkeurt.
7. **Wie zorgt voor FlowMaster nadat de website live is?**
   Wij regelen hosting, SSL, technisch onderhoud en doorlopende ondersteuning. Via de Hub kun je een supportverzoek indienen. Heb je extra pagina’s of specifieke functionaliteit nodig, dan bespreken we de omvang en eventuele aparte kosten voordat we beginnen.
8. **Wat kost FlowMaster en wanneer kan de website online?**
   Het Growth Rocket-pakket kost €69 per maand of €690 per jaar, plus €290 eenmalige opstartkosten. Prijzen zijn exclusief btw. Je website kan in 7 werkdagen online, nadat we alle benodigde informatie en materialen hebben ontvangen en als je op tijd je akkoord geeft.

The FAQ structured data (`FAQPage`) uses the same questions and answers, in the page's language.

---

## 10. Other designs

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Another look for<br>your business. | Find the design that fits your business. | Kies het ontwerp dat bij je bedrijf past. |
| Intro | More plumbing designs in the same package. Every one of them is built, connected and maintained the same way. | Compare other designs for plumbing businesses. We adapt your chosen design to your services, identity and customers. | Bekijk andere ontwerpen voor loodgietersbedrijven. We stemmen je keuze af op je diensten, huisstijl en klanten. |
| Cards and destinations | PipeWorks · Plumbing<br>DrainPro · Plumbing<br>AquaFix · Plumbing | PipeWorks · https://ggr-home.vercel.app/design/plumber/pipeworks<br>DrainPro · https://ggr-home.vercel.app/design/plumber/drainpro<br>AquaFix · https://ggr-home.vercel.app/design/plumber/aquafix | PipeWorks · https://ggr-home.vercel.app/design/plumber/pipeworks<br>DrainPro · https://ggr-home.vercel.app/design/plumber/drainpro<br>AquaFix · https://ggr-home.vercel.app/design/plumber/aquafix |
| Implementation | — | Keep the verified design destinations. Use corresponding Dutch destinations where available; do not invent translated URLs. | Behoud de gecontroleerde ontwerpbestemmingen. Gebruik de bijbehorende Nederlandse pagina waar die bestaat; verzin geen vertaalde URL’s. |

---

## 11. Closing CTA

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Make FlowMaster<br>your business’s next website. | Make FlowMaster your next website. | Maak van FlowMaster jouw volgende website. |
| Description | A professional website for your business. Your complete business system in Growth Rocket Hub. All maintained for you. | A website shaped around your installation work and projects, connected to Growth Rocket Hub. Hosting, maintenance and support are handled for you. | Een website voor jouw installatiewerk en projecten, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |
| Primary / secondary CTA | Start with this design / Talk to our team | Same | Kies dit ontwerp / Neem contact met ons op |
| Destinations | #package / mailto:sales@getgrowthrocket.com?subject=FlowMaster%20website%20enquiry | Same | #package / mailto:sales@getgrowthrocket.com?subject=Vraag%20over%20FlowMaster |

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
| Preview alt | FlowMaster website design preview for a bathroom installation business | Voorbeeld van het FlowMaster-websiteontwerp voor badkamerinstallateurs |
| Gallery card label | FlowMaster · Bathroom installers · View design | FlowMaster · Badkamerinstallateurs · Bekijk ontwerp |
| Personalisation image | Use a completed bathroom installation or relevant project photograph, with permission to publish. | Gebruik een foto van een afgeronde badkamerinstallatie of passend project, met toestemming voor publicatie. |
| Image implementation | Write alt text to match the selected photograph. Do not imply stock photographs show the customer’s team or completed work. | Stem de alt-tekst af op de gekozen foto. Presenteer stockfoto’s niet als het eigen team of werk van de klant. |
| Shared sections | Sections 6–8 are shared master copy. Only the design name and its CTA destination vary. Keep the six existing video destinations. Do not claim Dutch audio unless a Dutch video exists. | Onderdeel 6–8 gebruikt dezelfde tekst op alle ontwerppagina’s. Alleen de ontwerpnaam en knopbestemming variëren. Behoud de zes videobestemmingen. Beloof geen Nederlandstalige video als die niet beschikbaar is. |
| SEO handover | Keep substantive copy outside the embedded preview. Give each language its own canonical URL and reciprocal language links. Redirect replaced published URLs. Do not publish invented ratings or performance claims as structured data. Keep these niche-specific answers visible and crawlable. Do not promise search rankings or AI citations. If FAQ structured data is retained, match the visible copy; do not promise FAQ rich results. | Plaats de inhoud ook buiten het ingesloten voorbeeld. Geef beide talen een eigen canonieke URL en wederzijdse taalverwijzingen. Stuur vervangen gepubliceerde URL’s door. Gebruik geen verzonnen beoordelingen of besparingen in gestructureerde gegevens. Houd de sectorspecifieke antwoorden zichtbaar en doorzoekbaar. Beloof geen zoekposities of vermeldingen door AI. Eventuele FAQ-gegevens moeten bij de zichtbare tekst passen; beloof geen uitgebreide FAQ-zoekresultaten. |

See the notes below for how each of these was applied.

---

## Website template corrections (T01–T11)

The document's correction tables list issues found in the **FlowMaster template site itself**
(`https://plumber-02-template.vercel.app/`). That site is a separate project, not part of this repository, so these are not part
of this update. Copied from the document:

| Location | Observed issue | Action / status |
| --- | --- | --- |
| T01 · Design and example identity | FlowMaster opens Cascade Plumbing Co.; the title describes Bay Area plumbers since 2009. | Keep FlowMaster as the design name and explicitly identify Cascade as the example business. Adapt the preview identity and metadata to the customer rather than silently treating the two names as identical. |
| T02 · Installation focus | The brief targets bathroom installation; the preview leads with 24/7 plumbing emergencies and Bay Area repairs. Bathroom and kitchen remodelling is one service. | Bring installation services, finished-room projects and the site-visit-to-handover process forward. Keep other services only when the business offers them. Align the preview with the landing page before publication. |
| T03 · Geography and phone | The page lists Bay Area cities, a 35-mile radius, a San Francisco address and (415) 555–0199. WhatsApp uses Growth Rocket’s Dutch number. | For the Netherlands variant, replace example geography and contacts with verified customer details. Label design-sales WhatsApp separately or route it to the business. Use locally appropriate measurements and credentials. |
| T04 · Non-working anchors | CTAs target #book and #contact; neither ID appeared in the inspected DOM. Form field IDs exist, but not those section anchors. | Add the correct section targets or change the links. Connect appointments to the configured booking route and enquiries to the actual form. |
| T05 · Form options | The loaded Service Needed selector contains Hydro Jetting only. | Provide relevant installation choices, such as bathroom fitting or kitchen pipework, agreed with the business. Check loading, validation, consent and Hub delivery. No submission was made. |
| T06 · Language switch | Clicking Nederlands left the visible page in English and the English button pressed in the observed state. | Implement and test the Dutch variant, including navigation, forms, FAQs and consent text. Do not present an inactive toggle as a translated page. |
| T07 · Response and guarantees | 24/7, 60-minute arrival, free diagnosis, same-day visits, flat-rate pricing and 100% satisfaction appear as promises. | Substantiate or remove each business-service promise. Keep them separate from Growth Rocket features. Do not imply automatic SMS arrival updates or dispatch without a confirmed service. |
| T08 · Proof and chronology | The preview shows 12,000+ jobs, 1,200+ reviews, 4.9/5, 15+ years, since 2009 and “two decades later”. | Replace or verify each fact and reconcile the dates. Use genuine projects and reviews with permission; sample results are not evidence for Growth Rocket. |
| T09 · Legal and social destinations | Footer Privacy, Terms, Licensing and social icons target #top. The page separately links cookie and privacy policies through the consent banner. | Provide verified legal and social destinations. Check that banner and footer policy links agree. Do not treat #top as a valid legal page. |
| T10 · Project and location placeholders | The contact area displays “[ embedded map ]”. Projects carry example locations and durations. | Replace the map placeholder and verify project captions, image permissions and durations. Use actual installation examples rather than copying the US locations. |
| T11 · Landing page and shared sections | The landing page uses generic business copy, describes the Hub as the complete system, and still says “7 days” in the launch section and ticker. The old source also includes dental references. | Apply the English and Dutch copy here, including the three package elements, working-day condition and revised ticker. Keep video destinations; verify each before release. Show VAT beside prices. Use €828 versus €690 for savings; €99/€990 are display references only and require a substantiated basis before publication. |

---

## Notes and decisions

- **N1 — URL.** The English page now lives at `/designs/flowmaster-bathroom-installer-website`. Every link, the canonical URL, the language links and the structured data use it. The replaced URLs redirect there permanently (308) in one step: `/design/plumber/flowmaster`, `/designs/plumber/flowmaster`, `/designs/flowmaster`. The Dutch page keeps the established Dutch URL `/nl/ontwerpen/loodgieter/flowmaster`, as the document asks; the language switch moves between the two.
- **N2 — Ticker and footer (section 12).** These are site-wide: the same ticker and footer appear on every page of the site, in both languages. Changing them here would change every page, so they are left for a separate, site-wide update (including the "Saloon" category label in the footer).
- **N3 — Shared sections 6–8.** The same master copy ShineSquad already uses (`page-copy/master.ts`); only the design name and CTA destination vary. Checked word for word against this document's sections 6–8.
- **N4 — Monthly card and tax note.** As in the document: the monthly card shows only the struck-through €99, €69 / month and the onboarding fee (no "Billed monthly." or "Save €138 a year…" lines), and "Prices exclude VAT." / "Prijzen zijn exclusief btw." shows on the price card.
- **N5 — FAQ help card.** "Still have a question?" is not in the approved copy, so the help card shows only the document's intro and button. The FAQ button keeps its existing email subject (`<design> website enquiry`); the document gives no destination for it.
- **N6 — Section 5 image.** The page shows a scrolling screenshot of the design, not a photograph, so the document's image direction does not apply; the alt text is the document's "Preview alt" / "Alt-tekst voorbeeld". The caption overlay is hidden in the current design and stays hidden.
- **N7 — "Watch on YouTube".** The video panel plays the video in the page and has no YouTube link, so none is added. "Play video" / "Video afspelen" is used for the play control. The six videos keep their existing (English) destinations in both languages, as the document requires.
- **N8 — Hidden labels on the Dutch page.** Screen-reader labels not covered by the document use the document's own Dutch terms: "Kruimelpad", "Schermkeuze", "Betaalkeuze" and "Uitlegvideo’s".
- **N9 — Heading colours.** Headings keep the page's purple accent; the words are exactly the document's. Where the document gives a heading as one sentence (no line break), it stays one sentence with the accent on its closing words: “Your questions answered.” and “Make FlowMaster your next website.” (and the Dutch equivalents).
- **N10 — Other designs.** The cards are PipeWorks, DrainPro and AquaFix, exactly as the document lists them, with the document's labels on this page only (the `/designs` listing keeps its own). The document's links use the staging domain `ggr-home.vercel.app` and older paths; the cards link to each design's current URL on this site, in the page's language. The document gives no labels for these cards, so they keep their existing label ("Plumbing", which is also what the Dutch page showed before).
- **N11 — No FAQ button in the document.** Section 9 has no CTA row, so the help card keeps a button using the closing section's own label: "Talk to our team" / "Neem contact met ons op", with the existing email subject.
- **N12 — Dutch closing button.** Its email subject is the document's own: `mailto:sales@getgrowthrocket.com?subject=Vraag%20over%20FlowMaster`. The English one keeps `FlowMaster website enquiry`, as the document gives.
- **N13 — Gallery card label and personalisation photo.** The "Gallery card label" / "Ontwerpkaart" row is for this design's card on the `/designs` listing page, not this page, so it is not part of this update. The suggested photograph does not apply: the page shows the design screenshot, with the document's "Preview alt" as its alt text.
