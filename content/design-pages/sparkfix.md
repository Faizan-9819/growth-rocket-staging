# SparkFix design page — content update reference

| | |
| --- | --- |
| **Source** | `SparkFix — Domestic Electrician Design Page Copy.docx` (16 October 2026) |
| **English page** | `/designs/sparkfix-electrician-website` (was `/design/electrician/sparkfix`, which now redirects) |
| **Dutch page** | `/nl/ontwerpen/elektricien/sparkfix` |
| **Scope** | This page only, both languages. |

**Where the copy lives in the code**

- SparkFix's own copy (sections 0–5 and 9–11), English and Dutch: `app/components/sections/design/page-copy/sparkfix.ts`
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
| SEO title | SparkFix \| Electrical Website Design & Business Tools \| Growth Rocket | Electrician Website Design \| SparkFix \| Growth Rocket | Website voor elektriciens \| SparkFix |
| Meta description | Explore SparkFix: a professional electrical website design with appointments, enquiries, Growth Rocket Hub and ongoing technical support. Built for small businesses. | Explore SparkFix, a website design for domestic electricians, with Growth Rocket Hub, hosting, maintenance and support. View the design and pricing. | Ontdek SparkFix: een website voor elektriciens voor particulieren, met Growth Rocket Hub, hosting, onderhoud en ondersteuning. Bekijk het ontwerp en de prijzen. |
| Primary topic | — | Electrician website design | Website voor elektriciens |
| Focus | — | Domestic repairs and installations | Reparaties en installaties in woningen |
| Final URL (EN) | `/design/electrician/sparkfix` | https://www.getgrowthrocket.com/designs/sparkfix-electrician-website | Gebruik de vastgestelde Nederlandse URL-structuur en wederzijdse taalverwijzingen. |

---

## 1. Hero

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Label | Website design for small businesses | Website design for domestic electricians | Websiteontwerp voor elektriciens voor particulieren |
| H1 line 1 | SparkFix. | Same | SparkFix. |
| H1 line 2 | A bright, trust-building website for electrical contractors. | A professional website for the work you do in people’s homes. | Een professionele website voor jouw werk in huis. |
| Description | A professional website for your business. A complete business system with Growth Rocket Hub. All maintained for you. | Show homeowners what you repair and install, where you work and how to request a visit. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system. | Laat zien wat je repareert en installeert, waar je werkt en hoe klanten een bezoek aanvragen. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |

---

## 2–3. Breadcrumb and preview

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Breadcrumb | All designs / SparkFix | Same | Alle ontwerpen / SparkFix |
| Device controls | Desktop · Tablet · Mobile | Same | Computer · Tablet · Mobiel |
| Preview link | Preview in browser | Same | Bekijk in je browser |
| Primary CTA | Start with this design | Same | Kies dit ontwerp |
| Browser label | — (not shown) | SparkFix · Design preview | SparkFix · Websitevoorbeeld |
| Preview caption | Live preview of the design. Open it in a browser to explore every section. Example branding and content are replaced with your own details. | Explore SparkFix using Tij as the example business. We adapt the branding, services and content to your business. | Bekijk SparkFix met Tij als voorbeeldbedrijf. We stemmen de huisstijl, diensten en inhoud af op jouw bedrijf. |
| Destinations | https://1-electrician-template.vercel.app/ · CTA `#package` | https://1-electrician-template.vercel.app/<br>Primary CTA: #package | https://1-electrician-template.vercel.app/<br>Primaire knop: #package |

---

## 4. Benefits

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Build confidence.<br>Before the first visit. | Build trust.<br>Before you arrive. | Wek vertrouwen.<br>Voordat je voor de deur staat. |
| Intro | Choosing a business is personal. SparkFix gives prospective customers a clear picture of your business and a simple way to take the next step. | A faulty socket, a tripping circuit and a planned lighting installation all start with a different question. SparkFix helps homeowners recognise the service they need and get to know the electrician behind it. | Een kapot stopcontact, een groep die uitvalt of nieuwe verlichting: elke klus begint met een andere vraag. SparkFix helpt bewoners de juiste dienst te vinden en kennis te maken met de elektricien achter het bedrijf. |
| Card 1 title | Make your services easy to understand. | Make everyday electrical work clear. | Maak duidelijk waarmee je helpt. |
| Card 1 body | Give each of your services a clear introduction, so customers can find what matters to them without a phone call first. | Explain repairs, lighting, rewiring and consumer-unit upgrades in language homeowners understand. Give each service a clear place so visitors can find the work they need. | Leg reparaties, verlichting, bedrading en het vervangen van groepenkasten uit in begrijpelijke taal. Geef elke dienst een duidelijke plek, zodat bezoekers vinden wat ze nodig hebben. |
| Card 2 title | Introduce the people behind the work. | Show who will come to their home. | Laat zien wie er langskomt. |
| Card 2 body | Show your team, their experience and how you work, so an unfamiliar business feels more approachable. | Introduce your team and explain how a visit works, from discussing the problem to agreeing the work. Your own photographs and company story make the first contact more familiar. | Stel je team voor en leg uit hoe een bezoek verloopt, van het bespreken van het probleem tot het afspreken van het werk. Eigen foto’s en je bedrijfsverhaal maken het eerste contact vertrouwd. |
| Card 3 title | Let genuine feedback build trust. | Let finished jobs build confidence. | Laat afgeronde klussen spreken. |
| Card 3 body | Create space for your own customer testimonials and credentials, alongside the story of your business. | Show real examples of work in homes, with a short explanation of the job. Add genuine reviews and verified qualifications so visitors can judge your experience. | Toon echte voorbeelden van werk in woningen en vertel kort wat je hebt gedaan. Voeg echte klantbeoordelingen en aantoonbare kwalificaties toe, zodat bezoekers je ervaring kunnen beoordelen. |
| Card 4 title | Make the next step feel simple. | Make the next step easy to find. | Maak contact opnemen eenvoudig. |
| Card 4 body | Keep booking prompts, enquiry forms and contact details easy to find, including on a phone. | Keep your phone number and enquiry options visible on mobile. Separate urgent contact from planned visits, with clear information about your availability and the areas you cover. | Houd je telefoonnummer en aanvraagmogelijkheden zichtbaar op mobiel. Maak onderscheid tussen spoedvragen en geplande bezoeken en vermeld je bereikbaarheid en werkgebied. |

---

## 5. Personalisation

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Your business. Your identity.<br>Your website. | Your work. Your name.<br>Your website. | Jouw werk. Jouw naam.<br>Jouw website. |
| Intro | The design is your starting point. We shape the website around the people, services and details that make your business yours. | We shape SparkFix around your electrical business, the homes you work in and the services you actually provide. | We stemmen SparkFix af op jouw elektrotechnische bedrijf, de woningen waarin je werkt en de diensten die je daadwerkelijk aanbiedt. |
| List 1 | Your logo, colours and business story | Same | Je logo, kleuren en bedrijfsverhaal |
| List 2 | Your services and service information | Your repair and installation services | Je reparatie- en installatiediensten |
| List 3 | Your team and business photography | Your team and photographs of work in customers’ homes | Je team en foto’s van werk bij klanten thuis |
| List 4 | Your locations and contact details | Your service area, availability and contact details | Je werkgebied, bereikbaarheid en contactgegevens |
| List 5 | Genuine customer testimonials and reviews | Genuine customer reviews and video testimonials | Echte klantbeoordelingen en videoreviews |
| List 6 | Verified ratings and professional credentials | Verified qualifications and registrations | Aantoonbare kwalificaties en registraties |
| List 7 | Video testimonials and business introductions | Your process for enquiries, visits and quotes | Je werkwijze voor aanvragen, bezoeken en offertes |
| Image caption | — (overlay hidden in the current design) | SparkFix, shaped around your business. | SparkFix, afgestemd op jouw bedrijf. |
| Image alt text (document's "Preview alt") | SparkFix design, shown as it would look for your business | SparkFix website design preview for domestic electricians | Voorbeeld van het SparkFix-websiteontwerp voor elektriciens voor particulieren |

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
| CTA | Start with SparkFix | Same | Start met SparkFix |
| CTA destination | mailto:sales@getgrowthrocket.com?subject=Get%20started%20with%20SparkFix | Same | mailto:sales@getgrowthrocket.com?subject=Starten%20met%20SparkFix |

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
| Intro | Ask us anything about SparkFix — what is included, how it is set up and what happens after it goes live. (help card, under the title “Still have a question?”) | Questions about SparkFix? We’re happy to help with the design, setup and what’s included. | Vragen over SparkFix? We helpen je graag met het ontwerp, de inrichting en wat je krijgt. |
| CTA | Talk to our team | Same | Neem contact met ons op |

### Current questions (7, replaced)

1. Am I buying just the website design?
2. Can SparkFix match my business’s branding?
3. Can I use my existing domain?
4. What do I need to provide?
5. How do appointments and enquiries work?
6. What does the package cost?
7. What happens if I need help after launch?

### New questions — English (8)

1. **Is SparkFix a design I download and build myself?**
   No. We adapt and launch your website as part of Growth Rocket, a complete online business system. You get your professional website, Growth Rocket Hub, hosting, SSL, technical maintenance and support.
2. **Why does SparkFix suit a domestic electrician?**
   It gives homeowners a clear introduction to your repairs and installations, your team and the areas you cover. Services such as lighting, rewiring and consumer-unit work can be explained separately, with real job photographs and an easy way to get in touch.
3. **Can I distinguish urgent faults from planned work?**
   Yes. We can make your telephone contact and enquiry routes clear, and explain which services you offer urgently. The wording will reflect your actual hours and availability. Receiving an online enquiry does not automatically dispatch an electrician.
4. **Can customers book a visit and describe the job?**
   Growth Rocket includes website enquiries and appointment management through Growth Rocket Hub. During setup, we agree how customers request or book a visit and what information the form collects. You can follow up, create a quote and send an invoice from the Hub.
5. **Can I add EV charging or smart-home services?**
   Yes, if you provide them. We adapt your service content to the work you do and the qualifications you can verify. A website enquiry does not automatically assess the property or calculate an installation price; you agree the scope with the customer.
6. **What should I provide for my website?**
   Send your logo, services, service area, contact details and any team or job photographs you want to use. Include genuine reviews and verified qualifications where available. You can retain your existing domain, and we guide you through the setup.
7. **Who maintains my website after launch?**
   We handle hosting, SSL, technical maintenance and ongoing support. You can raise a support request through the Hub. Additional pages, specialist functions or connections to other software can be discussed separately.
8. **What does SparkFix cost, and how quickly can it go live?**
   The Growth Rocket package costs €69 per month or €690 per year, plus a €290 one-time onboarding fee. Prices exclude VAT. Your website can be ready in 7 working days after we receive all required information and materials, provided you give your approvals on time.

### New questions — Dutch (8)

1. **Is SparkFix een ontwerp dat ik zelf download en bouw?**
   Nee. Wij passen je website aan en zetten die online als onderdeel van Growth Rocket: een compleet online businesssysteem. Je krijgt een professionele website, Growth Rocket Hub, hosting, SSL, technisch onderhoud en ondersteuning.
2. **Waarom past SparkFix bij een elektricien voor particulieren?**
   Bewoners krijgen een duidelijk beeld van je reparaties en installaties, je team en je werkgebied. Je kunt verlichting, bedrading en groepenkasten apart toelichten, met eigen klusfoto’s en een eenvoudige manier om contact op te nemen.
3. **Kan ik spoedstoringen en gepland werk apart presenteren?**
   Ja. We maken je telefonische bereikbaarheid en aanvraagmogelijkheden duidelijk en leggen uit voor welk werk je spoedhulp biedt. De tekst sluit aan op je echte openingstijden en beschikbaarheid. Een online aanvraag stuurt niet automatisch een elektricien op pad.
4. **Kunnen klanten een bezoek boeken en de klus beschrijven?**
   Growth Rocket biedt aanvragen via je website en afsprakenbeheer in Growth Rocket Hub. Tijdens de inrichting spreken we af hoe klanten een bezoek aanvragen of boeken en welke informatie het formulier verzamelt. In de Hub volg je de aanvraag op en maak je een offerte en factuur op.
5. **Kan ik laadpalen of slimme huisinstallaties toevoegen?**
   Ja, als je die diensten aanbiedt. We stemmen de inhoud af op je werkzaamheden en aantoonbare kwalificaties. Een aanvraag beoordeelt niet automatisch de woning en berekent geen installatieprijs. De omvang van het werk spreek je met de klant af.
6. **Wat moet ik aanleveren voor mijn website?**
   Stuur je logo, diensten, werkgebied, contactgegevens en eventuele team- of klusfoto’s. Voeg echte klantbeoordelingen en aantoonbare kwalificaties toe als je die hebt. Je kunt je bestaande domeinnaam behouden. Wij begeleiden je bij de inrichting.
7. **Wie onderhoudt mijn website na de oplevering?**
   Wij regelen hosting, SSL, technisch onderhoud en doorlopende ondersteuning. Via de Hub kun je een supportverzoek indienen. Extra pagina’s, specifieke functies of koppelingen met andere software bespreken we apart.
8. **Wat kost SparkFix en hoe snel kan mijn website online?**
   Het Growth Rocket-pakket kost €69 per maand of €690 per jaar, plus €290 eenmalige opstartkosten. Prijzen zijn exclusief btw. Je website kan in 7 werkdagen online, nadat we alle benodigde informatie en materialen hebben ontvangen en als je op tijd je akkoord geeft.

The FAQ structured data (`FAQPage`) uses the same questions and answers, in the page's language.

---

## 10. Other designs

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Another look for<br>your business. | Explore other electrical website designs. | Bekijk andere elektrotechnische ontwerpen. |
| Intro | More electrical designs in the same package. Every one of them is built, connected and maintained the same way. | Compare the other designs in the collection. We adapt your choice to the services your business actually provides. | Vergelijk de andere ontwerpen in de collectie. We stemmen je keuze af op de diensten die je daadwerkelijk aanbiedt. |
| Cards and links | VoltGuard · Electrical<br>CircuitPro · Electrical | VoltGuard · Electrical inspections and testing<br>https://ggr-home.vercel.app/design/electrician/voltguard<br>CircuitPro · Commercial electrical projects<br>https://ggr-home.vercel.app/design/electrician/circuitpro | VoltGuard · Elektrotechnische inspecties en metingen<br>https://ggr-home.vercel.app/design/electrician/voltguard<br>CircuitPro · Zakelijke elektrotechnische projecten<br>https://ggr-home.vercel.app/design/electrician/circuitpro |

---

## 11. Closing CTA

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Make SparkFix<br>your business’s next website. | Make SparkFix your next website. | Maak van SparkFix jouw volgende website. |
| Description | A professional website for your business. Your complete business system in Growth Rocket Hub. All maintained for you. | A website shaped around your business, connected to Growth Rocket Hub. Hosting, maintenance and support are handled for you. | Een website die past bij jouw bedrijf, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |
| CTAs | Start with this design / Talk to our team | Same | Kies dit ontwerp / Neem contact met ons op |
| Destinations | #package / mailto:sales@getgrowthrocket.com?subject=SparkFix%20website%20enquiry | Same | #package / mailto:sales@getgrowthrocket.com?subject=SparkFix%20website%20enquiry |

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
| Preview alt | SparkFix website design preview for domestic electricians | Voorbeeld van het SparkFix-websiteontwerp voor elektriciens voor particulieren |
| Image direction | Domestic work: lighting, consumer units or repairs. | Werk in woningen: verlichting, groepenkasten of reparaties. |
| Image checks | Match alt text to the selected photograph. Verify image rights and do not present stock images as the customer’s own work. | Stem de alt-tekst af op de echte foto. Controleer gebruiksrechten en presenteer stockfoto’s niet als eigen werk van de klant. |
| Shared sections | Sections 6–8 are fixed master copy. Only the design name and CTA destination vary. Retain the six existing video destinations. | Onderdeel 6–8 is vaste tekst. Alleen de ontwerpnaam en knopbestemming verschillen. Behoud de zes bestaande videobestemmingen. |
| SEO and language | Keep substantive content indexable outside the embedded preview. Use distinct canonical URLs and reciprocal language links. Publish FAQ answers as visible text; do not use invented ratings in structured data. | Houd inhoud buiten het ingesloten voorbeeld indexeerbaar. Gebruik eigen canonieke URL’s en wederzijdse taalverwijzingen. Publiceer de FAQ-antwoorden als zichtbare tekst en gebruik geen verzonnen beoordelingen in gestructureerde gegevens. |
| Links | Retain existing design destinations until the new URLs are implemented. Redirect replaced published URLs. Use Dutch destinations only where they exist. | Behoud bestaande ontwerpbestemmingen totdat de nieuwe URL’s zijn ingevoerd. Redirect vervangen gepubliceerde URL’s. Gebruik alleen bestaande Nederlandse bestemmingen. |

See the notes below for how each of these was applied.

---

## Website template corrections (T01–T10)

The document's correction tables list issues found in the **SparkFix template site itself**
(`https://1-electrician-template.vercel.app/`). That site is a separate project, not part of this repository, so these are not part
of this update. Copied from the document:

| Location | Observed issue | Action / status |
| --- | --- | --- |
| T01 · Example identity | The design is SparkFix; the preview brand is Tij and the footer says TIJ Electrical Services. | Keep SparkFix as the design name and label Tij as the example business. Replace example identity and KvK details with verified client information at delivery. |
| T02 · Domestic focus | The preview mixes domestic services with commercial work, industrial project descriptions and high-voltage power-line imagery descriptions. | For this domestic positioning, prioritise home repairs and installations in services and projects. Check the actual images and use relevant domestic examples. |
| T03 · Placeholder links | Header Contact and Book appointment, service Learn more, location links and several footer/legal links point to #. | Wire genuine destinations or remove unavailable links. Verify the separate cookie/privacy policy routes as well as footer links. |
| T04 · Appointment wording | The CTA says choose a time; the form says Submit an Enquiry and promises confirmation within an hour. No date/time field is visible in that form. | Use request wording until the booking route is implemented and tested. Align heading, button and confirmation message with what actually happens. |
| T05 · Service selector | The form has a Service selector; its available choices were not established in this review. | Verify complete, meaningful service options and required-field handling. This is a verification item, not a confirmed empty-selector defect. |
| T06 · Evidence and availability | 15+ years, 3,000+ jobs, 4.9 rating, 200+ reviews, 24/7 service and arrival within two hours are stated. | Verify all customer-facing claims and genuine reviews before client use. Mark demonstration content clearly and remove unsupported claims. |
| T07 · Credentials and guarantees | Copy claims fully licensed/insured/certified work and compliance with all national safety standards. | Have the business verify exact qualifications and guarantee terms. Avoid blanket compliance claims or unverified credentials. |
| T08 · Sales and client contact | Floating WhatsApp uses the Growth Rocket number while nearby buttons describe booking an electrician. | Label platform sales contact separately from the example electrician’s contact. Configure the client’s actual phone and WhatsApp details for delivery. |
| T09 · Shared landing sections | The current pages call the Hub the complete system and still use “7 days”, including the ticker. Old documents retain dental references. | Replace with the approved shared copy in sections 6–8 and the new ticker/footer. Use 7 working days with its nearby condition, and keep onboarding costs and VAT visible. |
| T10 · Language and delivery checks | These previews are English. Form delivery, appointment confirmation and Hub routing have not been tested. | Localise all offered Dutch text, including labels, errors and consent. Test the configured contact journey before launch. Do not claim Dutch video audio unless it exists. |

---

## Notes and decisions

- **N1 — URL.** The English page now lives at `/designs/sparkfix-electrician-website`. Every link, the canonical URL, the language links and the structured data use it. The replaced URLs redirect there permanently (308) in one step: `/design/electrician/sparkfix`, `/designs/electrician/sparkfix`, `/designs/sparkfix`. The Dutch page keeps the established Dutch URL `/nl/ontwerpen/elektricien/sparkfix`, as the document asks; the language switch moves between the two.
- **N2 — Ticker and footer (section 12).** These are site-wide: the same ticker and footer appear on every page of the site, in both languages. Changing them here would change every page, so they are left for a separate, site-wide update (including the "Saloon" category label in the footer).
- **N3 — Shared sections 6–8.** The same master copy ShineSquad already uses (`page-copy/master.ts`); only the design name and CTA destination vary. Checked word for word against this document's sections 6–8.
- **N4 — Monthly card and tax note.** As in the document: the monthly card shows only the struck-through €99, €69 / month and the onboarding fee (no "Billed monthly." or "Save €138 a year…" lines), and "Prices exclude VAT." / "Prijzen zijn exclusief btw." shows on the price card.
- **N5 — FAQ help card.** "Still have a question?" is not in the approved copy, so the help card shows only the document's intro and button. The FAQ button keeps its existing email subject (`<design> website enquiry`); the document gives no destination for it.
- **N6 — Section 5 image.** The page shows a scrolling screenshot of the design, not a photograph, so the document's image direction does not apply; the alt text is the document's "Preview alt" / "Alt-tekst voorbeeld". The caption overlay is hidden in the current design and stays hidden.
- **N7 — "Watch on YouTube".** The video panel plays the video in the page and has no YouTube link, so none is added. "Play video" / "Video afspelen" is used for the play control. The six videos keep their existing (English) destinations in both languages, as the document requires.
- **N8 — Hidden labels on the Dutch page.** Screen-reader labels not covered by the document use the document's own Dutch terms: "Kruimelpad", "Schermkeuze", "Betaalkeuze" and "Uitlegvideo’s".
- **N9 — Heading colours.** Headings keep the page's purple accent; the words are exactly the document's. Where the document gives a heading as one sentence (no line break), it stays one sentence with the accent on its closing words: “Your questions answered.” and “Make SparkFix your next website.” (and the Dutch equivalents).
- **N10 — Other designs.** The cards are VoltGuard and CircuitPro, the other electrical designs, exactly as the document lists them, with the document's labels on this page only (the `/designs` listing keeps its own). The document's links use the staging domain `ggr-home.vercel.app` and older paths; the cards link to each design's current URL on this site, in the page's language.
