# VoltGuard design page — content update reference

| | |
| --- | --- |
| **Source** | `VoltGuard — Electrical Inspection Design Page Copy.docx` (16 October 2026) |
| **English page** | `/designs/voltguard-electrical-inspection-website` (was `/design/electrician/voltguard`, which now redirects) |
| **Dutch page** | `/nl/ontwerpen/elektricien/voltguard` |
| **Scope** | This page only, both languages. |

**Where the copy lives in the code**

- VoltGuard's own copy (sections 0–5 and 9–11), English and Dutch: `app/components/sections/design/page-copy/voltguard.ts`
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
| SEO title | VoltGuard \| Electrical Website Design & Business Tools \| Growth Rocket | Electrical Inspection Website Design \| VoltGuard \| Growth Rocket | Website voor elektrotechnische inspectiebedrijven \| VoltGuard |
| Meta description | Explore VoltGuard: a professional electrical website design with appointments, enquiries, Growth Rocket Hub and ongoing technical support. Built for small businesses. | Explore VoltGuard, a website design for electrical inspection businesses, with Growth Rocket Hub, hosting, maintenance and support. View the design and pricing. | Ontdek VoltGuard: een website voor elektrotechnische inspectiebedrijven, met Growth Rocket Hub, hosting, onderhoud en ondersteuning. Bekijk het ontwerp en de prijzen. |
| Primary topic | — | Electrical inspection website design | Website voor elektrotechnische inspectiebedrijven |
| Focus | — | Electrical inspections and testing | Elektrotechnische inspecties en metingen |
| Final URL (EN) | `/design/electrician/voltguard` | https://www.getgrowthrocket.com/designs/voltguard-electrical-inspection-website | Gebruik de vastgestelde Nederlandse URL-structuur en wederzijdse taalverwijzingen. |

---

## 1. Hero

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Label | Website design for small businesses | Website design for electrical inspection businesses | Websiteontwerp voor elektrotechnische inspectiebedrijven |
| H1 line 1 | VoltGuard. | Same | VoltGuard. |
| H1 line 2 | A modern, safety-focused website for electrical contractors. | Make your inspection expertise clear from the first visit. | Laat direct zien wat jouw inspectiebedrijf te bieden heeft. |
| Description | A professional website for your business. A complete business system with Growth Rocket Hub. All maintained for you. | Explain what you inspect, who you work for and what clients can expect from a visit. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system. | Maak duidelijk wat je inspecteert, voor wie je werkt en wat klanten van een bezoek kunnen verwachten. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |

---

## 2–3. Breadcrumb and preview

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Breadcrumb | All designs / VoltGuard | Same | Alle ontwerpen / VoltGuard |
| Device controls | Desktop · Tablet · Mobile | Same | Computer · Tablet · Mobiel |
| Preview link | Preview in browser | Same | Bekijk in je browser |
| Primary CTA | Start with this design | Same | Kies dit ontwerp |
| Browser label | — (not shown) | VoltGuard · Design preview | VoltGuard · Websitevoorbeeld |
| Preview caption | Live preview of the design. Open it in a browser to explore every section. Example branding and content are replaced with your own details. | Explore VoltGuard using VakMan Electrical as the example business. We adapt the branding, services and content to your business. | Bekijk VoltGuard met VakMan Electrical als voorbeeldbedrijf. We stemmen de huisstijl, diensten en inhoud af op jouw bedrijf. |
| Destinations | https://electrician-2-template.vercel.app/ · CTA `#package` | https://electrician-2-template.vercel.app/<br>Primary CTA: #package | https://electrician-2-template.vercel.app/<br>Primaire knop: #package |

---

## 4. Benefits

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Build confidence.<br>Before the first visit. | Make the scope clear.<br>Before the inspection. | Maak de opdracht duidelijk.<br>Vóór de inspectie. |
| Intro | Choosing a business is personal. VoltGuard gives prospective customers a clear picture of your business and a simple way to take the next step. | Property owners and managers need to understand what an inspection covers, who carries it out and what they receive afterwards. VoltGuard gives you space to answer those questions before an enquiry. | Pandeigenaren en beheerders willen weten wat een inspectie omvat, wie die uitvoert en wat ze na afloop ontvangen. Met VoltGuard geef je daar al vóór de aanvraag duidelijkheid over. |
| Card 1 title | Make your services easy to understand. | Explain the inspections you offer. | Leg uit welke inspecties je uitvoert. |
| Card 1 body | Give each of your services a clear introduction, so customers can find what matters to them without a phone call first. | Give each inspection or testing service a clear description, including the types of property or equipment it covers. Help clients choose the right starting point for their enquiry. | Geef elke inspectie of meting een duidelijke omschrijving en benoem voor welke panden of apparatuur die bedoeld is. Zo vinden klanten een passend startpunt voor hun aanvraag. |
| Card 2 title | Introduce the people behind the work. | Show the expertise behind the checks. | Laat zien wie de controles uitvoert. |
| Card 2 body | Show your team, their experience and how you work, so an unfamiliar business feels more approachable. | Introduce your inspectors and their relevant, verified qualifications. Explain your working method and any preparation or access arrangements clients need to know about. | Stel je inspecteurs voor en vermeld hun relevante, aantoonbare kwalificaties. Leg je werkwijze uit en vertel welke voorbereiding of toegang tot het pand nodig is. |
| Card 3 title | Let genuine feedback build trust. | Make the outcome understandable. | Maak de uitkomst begrijpelijk. |
| Card 3 body | Create space for your own customer testimonials and credentials, alongside the story of your business. | Explain what clients receive after the inspection and how you discuss findings and next steps. A redacted sample report can show the format where you have permission to share it. | Vertel wat klanten na de inspectie ontvangen en hoe je bevindingen en vervolgstappen bespreekt. Een geanonimiseerd voorbeeldrapport kan de opzet verduidelijken als je het mag delen. |
| Card 4 title | Make the next step feel simple. | Ask for the details that matter. | Vraag om relevante informatie. |
| Card 4 body | Keep booking prompts, enquiry forms and contact details easy to find, including on a phone. | Guide clients to describe the property, location and inspection requirement. This gives you a useful starting point to clarify the scope, prepare a quote and arrange a visit. | Laat klanten het pand, de locatie en de gewenste inspectie beschrijven. Zo heb je een goed startpunt om de opdracht af te stemmen, een offerte te maken en een bezoek te plannen. |

---

## 5. Personalisation

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Your business. Your identity.<br>Your website. | Your expertise. Your approach.<br>Your website. | Jouw expertise. Jouw aanpak.<br>Jouw website. |
| Intro | The design is your starting point. We shape the website around the people, services and details that make your business yours. | We adapt VoltGuard to the inspections you carry out, the clients you serve and the way you explain your findings. | We stemmen VoltGuard af op de inspecties die je uitvoert, je klanten en de manier waarop je bevindingen toelicht. |
| List 1 | Your logo, colours and business story | Your logo, colours and company story | Je logo, kleuren en bedrijfsverhaal |
| List 2 | Your services and service information | Your inspection services and their scope | Je inspectiediensten en wat ze omvatten |
| List 3 | Your team and business photography | The property types and clients you work with | De soorten panden en klanten waarvoor je werkt |
| List 4 | Your locations and contact details | Your inspectors and verified qualifications | Je inspecteurs en aantoonbare kwalificaties |
| List 5 | Genuine customer testimonials and reviews | Your preparation, access and reporting process | Je werkwijze voor voorbereiding, toegang en rapportage |
| List 6 | Verified ratings and professional credentials | Genuine client reviews and permitted sample reports | Echte klantbeoordelingen en voorbeeldrapporten die je mag delen |
| List 7 | Video testimonials and business introductions | Your service area and inspection enquiry details | Je werkgebied en informatie voor inspectieaanvragen |
| Image caption | — (overlay hidden in the current design) | VoltGuard, shaped around your business. | VoltGuard, afgestemd op jouw bedrijf. |
| Image alt text (document's "Preview alt") | VoltGuard design, shown as it would look for your business | VoltGuard website design preview for electrical inspection businesses | Voorbeeld van het VoltGuard-websiteontwerp voor elektrotechnische inspectiebedrijven |

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
| CTA | Start with VoltGuard | Same | Start met VoltGuard |
| CTA destination | mailto:sales@getgrowthrocket.com?subject=Get%20started%20with%20VoltGuard | Same | mailto:sales@getgrowthrocket.com?subject=Starten%20met%20VoltGuard |

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
| Intro | Ask us anything about VoltGuard — what is included, how it is set up and what happens after it goes live. (help card, under the title “Still have a question?”) | Questions about VoltGuard? We’re happy to help with the design, setup and what’s included. | Vragen over VoltGuard? We helpen je graag met het ontwerp, de inrichting en wat je krijgt. |
| CTA | Talk to our team | Same | Neem contact met ons op |

### Current questions (7, replaced)

1. Am I buying just the website design?
2. Can VoltGuard match my business’s branding?
3. Can I use my existing domain?
4. What do I need to provide?
5. How do appointments and enquiries work?
6. What does the package cost?
7. What happens if I need help after launch?

### New questions — English (8)

1. **Is VoltGuard a design I download and install myself?**
   No. We tailor and launch it as part of Growth Rocket, a complete online business system. Your professional website comes with Growth Rocket Hub, hosting, SSL, technical maintenance and support.
2. **How is VoltGuard adapted for an inspection business?**
   We shape the services, inspector profiles and enquiry content around your inspection work. The current preview shows a broader electrical business; its content is adapted to your actual inspections and clients before your website goes live.
3. **Can I explain different inspection scopes?**
   Yes. We can describe the inspections and testing you actually offer, the properties or equipment covered and what is included. Any references to standards, certifications or client requirements should use wording verified by your business.
4. **Can clients request an inspection online?**
   Yes. Enquiries and appointment options connect to Growth Rocket Hub. We agree the form information and booking setup during onboarding. You can clarify the scope, manage the appointment and prepare quotes and invoices in the Hub.
5. **Can I show an example of an inspection report?**
   Yes, as website content where you own the material or have permission to publish it. Remove customer, property and other confidential details first. We can explain the report format and how you discuss the findings without suggesting every inspection produces the same result.
6. **Does Growth Rocket produce inspection reports or certificates?**
   Inspection-report generation and certification software are not part of the standard package. Growth Rocket helps with enquiries, appointments, customer contacts, quotes and invoices. If you need a connection to specialist software, we can discuss that separately.
7. **Can I keep my branding and who maintains the website?**
   Yes. We adapt the design to your company identity, team and services, and you can retain your domain. Hosting, SSL, technical maintenance and ongoing support are handled for you. You can raise support requests through the Hub.
8. **What does VoltGuard cost, and how quickly can it go live?**
   The Growth Rocket package costs €69 per month or €690 per year, plus a €290 one-time onboarding fee. Prices exclude VAT. Your website can be ready in 7 working days after we receive all required information and materials, provided you give your approvals on time.

### New questions — Dutch (8)

1. **Is VoltGuard een ontwerp dat ik zelf download en installeer?**
   Nee. Wij passen het aan en zetten het online als onderdeel van Growth Rocket: een compleet online businesssysteem. Je professionele website komt samen met Growth Rocket Hub, hosting, SSL, technisch onderhoud en ondersteuning.
2. **Hoe wordt VoltGuard afgestemd op een inspectiebedrijf?**
   We richten de diensten, inspecteursprofielen en aanvraaginformatie in rond jouw inspectiewerk. Het huidige voorbeeld toont een breder elektrotechnisch bedrijf. Voordat je website online gaat, stemmen we de inhoud af op jouw inspecties en klanten.
3. **Kan ik verschillende soorten inspecties toelichten?**
   Ja. We kunnen de inspecties en metingen beschrijven die je daadwerkelijk aanbiedt, voor welke panden of apparatuur ze bedoeld zijn en wat erbij hoort. Verwijzingen naar normen, certificeringen of eisen van klanten moeten door je bedrijf zijn gecontroleerd.
4. **Kunnen klanten online een inspectie aanvragen?**
   Ja. Aanvragen en afspraakmogelijkheden zijn verbonden met Growth Rocket Hub. Tijdens de inrichting stemmen we het formulier en de afspraakmogelijkheden af. In de Hub verduidelijk je de opdracht, beheer je de afspraak en maak je offertes en facturen op.
5. **Kan ik een voorbeeld van een inspectierapport tonen?**
   Ja, als inhoud op je website, wanneer je het materiaal zelf bezit of toestemming hebt om het te publiceren. Verwijder eerst klantgegevens, pandgegevens en andere vertrouwelijke informatie. We kunnen de rapportopzet en het bespreken van bevindingen toelichten zonder te suggereren dat elke inspectie dezelfde uitkomst heeft.
6. **Maakt Growth Rocket inspectierapporten of certificaten?**
   Het maken van inspectierapporten en certificaten hoort niet bij het standaardpakket. Growth Rocket helpt je met aanvragen, afspraken, contacten, offertes en facturen. Een koppeling met gespecialiseerde software kunnen we apart bespreken.
7. **Kan ik mijn huisstijl behouden en wie onderhoudt de website?**
   Ja. We stemmen het ontwerp af op je huisstijl, team en diensten. Je kunt je domeinnaam behouden. Hosting, SSL, technisch onderhoud en doorlopende ondersteuning zijn voor je geregeld. Via de Hub dien je een supportverzoek in.
8. **Wat kost VoltGuard en hoe snel kan mijn website online?**
   Het Growth Rocket-pakket kost €69 per maand of €690 per jaar, plus €290 eenmalige opstartkosten. Prijzen zijn exclusief btw. Je website kan in 7 werkdagen online, nadat we alle benodigde informatie en materialen hebben ontvangen en als je op tijd je akkoord geeft.

The FAQ structured data (`FAQPage`) uses the same questions and answers, in the page's language.

---

## 10. Other designs

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Another look for<br>your business. | Explore other electrical website designs. | Bekijk andere elektrotechnische ontwerpen. |
| Intro | More electrical designs in the same package. Every one of them is built, connected and maintained the same way. | Compare the other designs in the collection. We adapt your choice to the services your business actually provides. | Vergelijk de andere ontwerpen in de collectie. We stemmen je keuze af op de diensten die je daadwerkelijk aanbiedt. |
| Cards and links | SparkFix · Electrical<br>CircuitPro · Electrical | SparkFix · Domestic repairs and installations<br>https://ggr-home.vercel.app/design/electrician/sparkfix<br>CircuitPro · Commercial electrical projects<br>https://ggr-home.vercel.app/design/electrician/circuitpro | SparkFix · Reparaties en installaties in woningen<br>https://ggr-home.vercel.app/design/electrician/sparkfix<br>CircuitPro · Zakelijke elektrotechnische projecten<br>https://ggr-home.vercel.app/design/electrician/circuitpro |

---

## 11. Closing CTA

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Make VoltGuard<br>your business’s next website. | Make VoltGuard your next website. | Maak van VoltGuard jouw volgende website. |
| Description | A professional website for your business. Your complete business system in Growth Rocket Hub. All maintained for you. | A website shaped around your business, connected to Growth Rocket Hub. Hosting, maintenance and support are handled for you. | Een website die past bij jouw bedrijf, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |
| CTAs | Start with this design / Talk to our team | Same | Kies dit ontwerp / Neem contact met ons op |
| Destinations | #package / mailto:sales@getgrowthrocket.com?subject=VoltGuard%20website%20enquiry | Same | #package / mailto:sales@getgrowthrocket.com?subject=VoltGuard%20website%20enquiry |

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
| Preview alt | VoltGuard website design preview for electrical inspection businesses | Voorbeeld van het VoltGuard-websiteontwerp voor elektrotechnische inspectiebedrijven |
| Image direction | An inspector using testing equipment at an electrical installation. | Een inspecteur met meetapparatuur bij een elektrische installatie. |
| Image checks | Match alt text to the selected photograph. Verify image rights and do not present stock images as the customer’s own work. | Stem de alt-tekst af op de echte foto. Controleer gebruiksrechten en presenteer stockfoto’s niet als eigen werk van de klant. |
| Shared sections | Sections 6–8 are fixed master copy. Only the design name and CTA destination vary. Retain the six existing video destinations. | Onderdeel 6–8 is vaste tekst. Alleen de ontwerpnaam en knopbestemming verschillen. Behoud de zes bestaande videobestemmingen. |
| SEO and language | Keep substantive content indexable outside the embedded preview. Use distinct canonical URLs and reciprocal language links. Publish FAQ answers as visible text; do not use invented ratings in structured data. | Houd inhoud buiten het ingesloten voorbeeld indexeerbaar. Gebruik eigen canonieke URL’s en wederzijdse taalverwijzingen. Publiceer de FAQ-antwoorden als zichtbare tekst en gebruik geen verzonnen beoordelingen in gestructureerde gegevens. |
| Links | Retain existing design destinations until the new URLs are implemented. Redirect replaced published URLs. Use Dutch destinations only where they exist. | Behoud bestaande ontwerpbestemmingen totdat de nieuwe URL’s zijn ingevoerd. Redirect vervangen gepubliceerde URL’s. Gebruik alleen bestaande Nederlandse bestemmingen. |

See the notes below for how each of these was applied.

---

## Website template corrections (T01–T11)

The document's correction tables list issues found in the **VoltGuard template site itself**
(`https://electrician-2-template.vercel.app/`). That site is a separate project, not part of this repository, so these are not part
of this update. Copied from the document:

| Location | Observed issue | Action / status |
| --- | --- | --- |
| T01 · Inspection positioning | The sheet targets inspections, but the preview leads with emergency repairs and broad installation services. Inspections are one service tab. | Make inspections the leading preview story: hero, first service, inspector profiles, report process and enquiry route. Keep other work only if relevant. |
| T02 · Example identity | Landing name is VoltGuard; preview brand is VakMan Electrical. A footer text node says “VakMan Electrica”. | Explain example branding in the caption and standardise the full name. Check whether the shortened footer text is intentionally decorative; do not let it replace the correct company name. |
| T03 · Project link | “See Completed Projects” links to #services although a #projects section exists. | Change the button destination to #projects and verify it scrolls to the project section. |
| T04 · Booking loop | Appointment buttons point to #booking. That section contains another button pointing to itself. Copy promises instant confirmation and online date/time choice. | Connect a real booking route or send visitors to the enquiry form with accurate request wording. A self-link does not complete booking; test the resulting journey. |
| T05 · Telephone mismatch | Displayed phone is +31 20 000 0000; Call Now links to +31 10 000 0000. | Replace both with the verified business number and ensure displayed and dialled numbers match. |
| T06 · Inspection claims | Inspection tab promises “fully compliant”, landlord safety certificates and compliance documentation. | Have the inspector verify service scope, deliverables and credential wording. Explain what is checked and reported; do not promise blanket legal compliance. |
| T07 · Availability inconsistency | Hero promises 24/7; FAQ qualifies same-day availability; contact hours say emergency support by request. | Choose the business’s actual service promise and use it consistently. Remove instant confirmation until verified. |
| T08 · Form and links | The service menu initially exposed only a placeholder; a later snapshot exposed Emergency Electrical Repairs. Articles and social links point to #. | Verify all configured inspection options after loading; do not conclude the menu is permanently empty. Replace placeholder article/social destinations. |
| T09 · Proof and contact details | 15+ years, 2,000+ projects, 4.9 rating, team identities, address, email and KvK are demonstration content. | Verify or replace before client use. Separate Growth Rocket’s floating WhatsApp sales number from the client’s contact route. |
| T10 · Shared landing sections | The current pages call the Hub the complete system and still use “7 days”, including the ticker. Old documents retain dental references. | Replace with the approved shared copy in sections 6–8 and the new ticker/footer. Use 7 working days with its nearby condition, and keep onboarding costs and VAT visible. |
| T11 · Language and delivery checks | These previews are English. Form delivery, appointment confirmation and Hub routing have not been tested. | Localise all offered Dutch text, including labels, errors and consent. Test the configured contact journey before launch. Do not claim Dutch video audio unless it exists. |

---

## Notes and decisions

- **N1 — URL.** The English page now lives at `/designs/voltguard-electrical-inspection-website`. Every link, the canonical URL, the language links and the structured data use it. The replaced URLs redirect there permanently (308) in one step: `/design/electrician/voltguard`, `/designs/electrician/voltguard`, `/designs/voltguard`. The Dutch page keeps the established Dutch URL `/nl/ontwerpen/elektricien/voltguard`, as the document asks; the language switch moves between the two.
- **N2 — Ticker and footer (section 12).** These are site-wide: the same ticker and footer appear on every page of the site, in both languages. Changing them here would change every page, so they are left for a separate, site-wide update (including the "Saloon" category label in the footer).
- **N3 — Shared sections 6–8.** The same master copy ShineSquad already uses (`page-copy/master.ts`); only the design name and CTA destination vary. Checked word for word against this document's sections 6–8.
- **N4 — Monthly card and tax note.** As in the document: the monthly card shows only the struck-through €99, €69 / month and the onboarding fee (no "Billed monthly." or "Save €138 a year…" lines), and "Prices exclude VAT." / "Prijzen zijn exclusief btw." shows on the price card.
- **N5 — FAQ help card.** "Still have a question?" is not in the approved copy, so the help card shows only the document's intro and button. The FAQ button keeps its existing email subject (`<design> website enquiry`); the document gives no destination for it.
- **N6 — Section 5 image.** The page shows a scrolling screenshot of the design, not a photograph, so the document's image direction does not apply; the alt text is the document's "Preview alt" / "Alt-tekst voorbeeld". The caption overlay is hidden in the current design and stays hidden.
- **N7 — "Watch on YouTube".** The video panel plays the video in the page and has no YouTube link, so none is added. "Play video" / "Video afspelen" is used for the play control. The six videos keep their existing (English) destinations in both languages, as the document requires.
- **N8 — Hidden labels on the Dutch page.** Screen-reader labels not covered by the document use the document's own Dutch terms: "Kruimelpad", "Schermkeuze", "Betaalkeuze" and "Uitlegvideo’s".
- **N9 — Heading colours.** Headings keep the page's purple accent; the words are exactly the document's. Where the document gives a heading as one sentence (no line break), it stays one sentence with the accent on its closing words: “Your questions answered.” and “Make VoltGuard your next website.” (and the Dutch equivalents).
- **N10 — Other designs.** The cards are SparkFix and CircuitPro, the other electrical designs, exactly as the document lists them, with the document's labels on this page only (the `/designs` listing keeps its own). The document's links use the staging domain `ggr-home.vercel.app` and older paths; the cards link to each design's current URL on this site, in the page's language.
