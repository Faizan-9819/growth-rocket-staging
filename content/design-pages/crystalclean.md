# CrystalClean design page — content update reference

| | |
| --- | --- |
| **Source** | `CrystalClean — Commercial Cleaning Design Page Copy.docx` (16 October 2026) |
| **English page** | `/designs/crystalclean-commercial-cleaning-website` (was `/design/cleaning/crystalclean`, which now redirects) |
| **Dutch page** | `/nl/ontwerpen/schoonmaak/crystalclean` |
| **Scope** | This page only, both languages. |

**Where the copy lives in the code**

- CrystalClean's own copy (sections 0–5 and 9–11), English and Dutch: `app/components/sections/design/page-copy/crystalclean.ts`
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
| SEO title | CrystalClean \| Commercial Cleaning Website Design & Business Tools \| Growth Rocket | Commercial Cleaning Website Design \| CrystalClean \| Growth Rocket | Website voor zakelijke schoonmaakbedrijven \| CrystalClean |
| Meta description | Explore CrystalClean: a professional commercial cleaning website design with appointments, enquiries, Growth Rocket Hub and ongoing technical support. Built for small businesses. | Explore CrystalClean, a website design for commercial cleaning companies, with Growth Rocket Hub, hosting, maintenance and support. View the design and pricing. | Ontdek CrystalClean: een website voor zakelijke schoonmaakbedrijven, met Growth Rocket Hub, hosting, onderhoud en ondersteuning. Bekijk het ontwerp en de prijzen. |
| Primary topic | — | commercial cleaning website design | Website voor zakelijke schoonmaakbedrijven |
| Focus | — | Commercial and office cleaning | Schoonmaak van kantoren en bedrijfspanden |
| Final URL (EN) | `/design/cleaning/crystalclean` | https://www.getgrowthrocket.com/designs/crystalclean-commercial-cleaning-website | Gebruik de vastgestelde Nederlandse URL-structuur en wederzijdse taalverwijzingen. |

---

## 1. Hero

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Label | Website design for small businesses | Website design for commercial cleaning companies | Websiteontwerp voor zakelijke schoonmaakbedrijven |
| H1 line 1 | CrystalClean. | Same | CrystalClean. |
| H1 line 2 | A polished site built for commercial and office cleaning teams. | Show businesses what they can expect from your cleaning team. | Laat zien wat bedrijven van jouw schoonmaakteam kunnen verwachten. |
| Description | A professional website for your business. A complete business system with Growth Rocket Hub. All maintained for you. | Present the spaces you clean, explain how you work and make it easy to request a site visit or quote. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system. | Laat zien welke panden je schoonmaakt, leg je werkwijze uit en maak een aanvraag voor een locatiebezoek of offerte eenvoudig. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |

---

## 2–3. Breadcrumb and preview

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Breadcrumb | All designs / CrystalClean | Same | Alle ontwerpen / CrystalClean |
| Device controls | Desktop · Tablet · Mobile | Same | Computer · Tablet · Mobiel |
| Preview link | Preview in browser | Same | Bekijk in je browser |
| Primary CTA | Start with this design | Same | Kies dit ontwerp |
| Browser label | — (not shown) | CrystalClean · Design preview | CrystalClean · Websitevoorbeeld |
| Preview caption | Live preview of the design. Open it in a browser to explore every section. Example branding and content are replaced with your own details. | Explore CrystalClean using Cleaning Co. as the example business. We adapt the branding, services and content to your business. | Bekijk CrystalClean met Cleaning Co. als voorbeeldbedrijf. We stemmen de huisstijl, diensten en inhoud af op jouw bedrijf. |
| Destinations | https://cleaning02-temp.vercel.app/ · CTA `#package` | https://cleaning02-temp.vercel.app/<br>Primary CTA: #package | https://cleaning02-temp.vercel.app/<br>Primaire knop: #package |

---

## 4. Benefits

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Build confidence.<br>Before the first visit. | Build confidence.<br>Before the site visit. | Geef vertrouwen.<br>Al vóór het locatiebezoek. |
| Intro | Choosing a business is personal. CrystalClean gives prospective customers a clear picture of your business and a simple way to take the next step. | Office and facility managers need to know whether you can look after their premises around their working hours. CrystalClean helps you explain your service, your team and the next step towards a cleaning agreement. | Kantoor- en facilitair managers willen weten of je hun pand kunt schoonhouden op tijden die bij hun organisatie passen. Met CrystalClean maak je jouw dienstverlening, team en de stap naar een schoonmaakafspraak duidelijk. |
| Card 1 title | Make your services easy to understand. | Show the spaces you clean. | Laat zien welke panden je schoonmaakt. |
| Card 1 body | Give each of your services a clear introduction, so customers can find what matters to them without a phone call first. | Describe the premises and services you cover, from offices and shared areas to schools or holiday accommodation where relevant. Help clients see whether their building and cleaning needs fit your service. | Beschrijf je diensten en de panden waarvoor je werkt: van kantoren en algemene ruimten tot scholen of vakantieverblijven, als die bij je aanbod horen. Zo ziet een klant of je dienstverlening past. |
| Card 2 title | Introduce the people behind the work. | Explain how the work fits around theirs. | Leg uit hoe je rekening houdt met hun werk. |
| Card 2 body | Show your team, their experience and how you work, so an unfamiliar business feels more approachable. | Set out your available cleaning frequencies, access arrangements and working hours. Explain who checks the work and who the client contacts when something needs attention. | Maak duidelijk hoe vaak en op welke tijden je schoonmaakt en hoe je toegang tot het pand afspreekt. Vertel wie het werk controleert en bij wie de klant terechtkan met een vraag. |
| Card 3 title | Let genuine feedback build trust. | Show evidence of your standards. | Maak je kwaliteit zichtbaar. |
| Card 3 body | Create space for your own customer testimonials and credentials, alongside the story of your business. | Use real workplace photographs, client references and verified qualifications. A short account of the site, agreed scope and your approach tells clients more than a broad promise of spotless results. | Gebruik echte foto’s van je werk, klantreferenties en aantoonbare kwalificaties. Een kort voorbeeld van het pand, de afgesproken werkzaamheden en je aanpak zegt meer dan een algemene kwaliteitsbelofte. |
| Card 4 title | Make the next step feel simple. | Start with a useful enquiry. | Vraag meteen om bruikbare informatie. |
| Card 4 body | Keep booking prompts, enquiry forms and contact details easy to find, including on a phone. | Invite clients to share the location, type of premises, approximate size and preferred frequency. You can clarify requirements, arrange a visit and prepare a quote based on the work needed. | Laat klanten de locatie, het type pand, de geschatte oppervlakte en de gewenste frequentie doorgeven. Daarna stem je de werkzaamheden af, plan je een bezoek en maak je een passende offerte. |

---

## 5. Personalisation

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Your business. Your identity.<br>Your website. | Your company. Your standards.<br>Your website. | Jouw bedrijf. Jouw werkwijze.<br>Jouw website. |
| Intro | The design is your starting point. We shape the website around the people, services and details that make your business yours. | We shape CrystalClean around the premises you maintain, the clients you serve and the way your team works. | We stemmen CrystalClean af op de panden die je schoonhoudt, de klanten voor wie je werkt en de aanpak van je team. |
| List 1 | Your logo, colours and business story | Your logo, colours and company story | Je logo, kleuren en bedrijfsverhaal |
| List 2 | Your services and service information | Your cleaning services, sectors and contract options | Je schoonmaakdiensten, sectoren en contractmogelijkheden |
| List 3 | Your team and business photography | Your available frequencies and access arrangements | Je beschikbare frequenties en afspraken over toegang |
| List 4 | Your locations and contact details | Your team, supervision and client contact process | Je team, kwaliteitscontrole en klantcontact |
| List 5 | Genuine customer testimonials and reviews | Real workplace photographs and client references | Echte werkfoto’s en klantreferenties |
| List 6 | Verified ratings and professional credentials | Verified qualifications and relevant memberships | Aantoonbare kwalificaties en relevante lidmaatschappen |
| List 7 | Video testimonials and business introductions | Your service areas and quote request details | Je werkgebied en gegevens voor offerteaanvragen |
| Image caption | — (overlay hidden in the current design) | CrystalClean, shaped around your business. | CrystalClean, afgestemd op jouw bedrijf. |
| Image alt text (document's "Preview alt") | CrystalClean design, shown as it would look for your business | CrystalClean website design preview for commercial cleaning companies | Voorbeeld van het CrystalClean-websiteontwerp voor zakelijke schoonmaakbedrijven |

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
| CTA | Start with CrystalClean | Same | Start met CrystalClean |
| CTA destination | mailto:sales@getgrowthrocket.com?subject=Get%20started%20with%20CrystalClean | Same | mailto:sales@getgrowthrocket.com?subject=Starten%20met%20CrystalClean |

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
| Intro | Ask us anything about CrystalClean — what is included, how it is set up and what happens after it goes live. (help card, under the title “Still have a question?”) | Questions about CrystalClean? We’re happy to help with the design, setup and what’s included. | Vragen over CrystalClean? We helpen je graag met het ontwerp, de inrichting en wat je krijgt. |
| CTA | Talk to our team | Same | Neem contact met ons op |

### Current questions (7, replaced)

1. Am I buying just the website design?
2. Can CrystalClean match my business’s branding?
3. Can I use my existing domain?
4. What do I need to provide?
5. How do appointments and enquiries work?
6. What does the package cost?
7. What happens if I need help after launch?

### New questions — English (8)

1. **Is CrystalClean a website design I download and build myself?**
   No. We adapt and launch it for you as part of Growth Rocket, a complete online business system. Your professional website comes with Growth Rocket Hub, hosting, SSL, technical maintenance and support.
2. **What makes CrystalClean suitable for commercial cleaning?**
   The design gives you room to explain your services, the premises you clean and how you organise the work. Office managers and facilities teams can see your coverage, working arrangements and contact route before requesting a visit or quote. We tailor the example sectors to those you actually serve.
3. **What should I explain about a cleaning contract?**
   Describe the tasks included, frequency, working hours, access arrangements and how clients raise a concern. If the scope depends on the premises, explain that you agree it after an enquiry or site visit. We use your own service terms rather than inventing contract conditions.
4. **Can customers request quotes and arrange site visits?**
   Yes. Website enquiries connect to Growth Rocket Hub, where you can follow up, manage customer details, create quotes and send invoices. Appointment options can support site visits. We agree the form and appointment setup during onboarding; an enquiry does not automatically calculate a cleaning quote.
5. **Does the Hub manage cleaning rotas and staff allocation?**
   The Hub supports enquiries, appointments, customer contacts, quotes and invoices. Specialist staff rostering, time tracking and cleaning inspection workflows are not presented as standard capabilities. If you need a connection to an existing workforce system, we can discuss that separately.
6. **Can I show my service areas and client references?**
   Yes. We can show the towns or regions you genuinely cover and explain the kinds of premises you maintain. Provide real references, photographs and permission to use client names or logos. We do not add locations, certifications or customer results that your business cannot substantiate.
7. **Can I keep my branding and who maintains the website?**
   Yes. We adapt CrystalClean to your identity, services and team, and you can keep your domain. Hosting, SSL, technical maintenance and ongoing support are included. You can raise support requests through the Hub.
8. **What does CrystalClean cost, and how quickly can it go live?**
   The Growth Rocket package costs €69 per month or €690 per year, plus a €290 one-time onboarding fee. Prices exclude VAT. Your website can be ready in 7 working days after we receive all required information and materials, provided you give your approvals on time.

### New questions — Dutch (8)

1. **Is CrystalClean een websiteontwerp dat ik zelf download en bouw?**
   Nee. Wij passen het ontwerp aan en zetten je website online als onderdeel van Growth Rocket: een compleet online businesssysteem. Je professionele website komt samen met Growth Rocket Hub, hosting, SSL, technisch onderhoud en ondersteuning.
2. **Waarom past CrystalClean bij zakelijke schoonmaak?**
   Het ontwerp biedt ruimte voor je diensten, de panden die je schoonmaakt en je werkwijze. Kantoor- en facilitair managers zien je werkgebied, werkafspraken en contactmogelijkheden voordat ze een bezoek of offerte aanvragen. We gebruiken alleen sectoren waarvoor je daadwerkelijk werkt.
3. **Wat leg ik uit over een schoonmaakcontract?**
   Beschrijf de werkzaamheden, frequentie, werktijden, afspraken over toegang en hoe klanten een vraag of melding doorgeven. Hangt de opdracht af van het pand? Leg dan uit dat je die na een aanvraag of locatiebezoek afstemt. We gebruiken jouw voorwaarden en bedenken geen contractafspraken.
4. **Kunnen klanten offertes aanvragen en een locatiebezoek plannen?**
   Ja. Aanvragen via je website komen in Growth Rocket Hub. Daar volg je ze op, beheer je klantgegevens en maak je offertes en facturen. Afspraakmogelijkheden kunnen worden ingericht voor locatiebezoeken. We stemmen het formulier en de afspraken tijdens de inrichting af; een aanvraag berekent niet automatisch een schoonmaakofferte.
5. **Beheert de Hub ook personeelsroosters en de inzet van schoonmakers?**
   De Hub ondersteunt aanvragen, afspraken, contacten, offertes en facturen. Gespecialiseerde personeelsplanning, urenregistratie en schoonmaakcontroles worden hier niet als standaard aangeboden. Een koppeling met je bestaande personeelssoftware bespreken we apart.
6. **Kan ik mijn werkgebied en klantreferenties laten zien?**
   Ja. We kunnen de plaatsen of regio’s tonen waar je echt werkt en toelichten welke panden je schoonmaakt. Lever echte referenties en foto’s aan en zorg voor toestemming voor klantnamen of logo’s. We voegen geen locaties, certificeringen of klantresultaten toe die je niet kunt onderbouwen.
7. **Kan ik mijn huisstijl behouden en wie onderhoudt de website?**
   Ja. We stemmen CrystalClean af op je huisstijl, diensten en team. Je kunt je domeinnaam behouden. Hosting, SSL, technisch onderhoud en doorlopende ondersteuning zijn inbegrepen. Via de Hub kun je een supportverzoek indienen.
8. **Wat kost CrystalClean en hoe snel kan mijn website online?**
   Het Growth Rocket-pakket kost €69 per maand of €690 per jaar, plus €290 eenmalige opstartkosten. Prijzen zijn exclusief btw. Je website kan in 7 werkdagen online, nadat we alle benodigde informatie en materialen hebben ontvangen en als je op tijd je akkoord geeft.

The FAQ structured data (`FAQPage`) uses the same questions and answers, in the page's language.

---

## 10. Other designs

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Another look for<br>your business. | Explore another cleaning website design. | Bekijk een ander schoonmaakontwerp. |
| Intro | More commercial cleaning designs in the same package. Every one of them is built, connected and maintained the same way. | Compare the other designs in the collection. We adapt your choice to the services your business actually provides. | Vergelijk de andere ontwerpen in de collectie. We stemmen je keuze af op de diensten die je daadwerkelijk aanbiedt. |
| Cards and links | ShineSquad · Cleaning | ShineSquad · Home cleaning<br>https://ggr-home.vercel.app/design/cleaning/shinesquad | ShineSquad · Schoonmaak bij particulieren<br>https://ggr-home.vercel.app/design/cleaning/shinesquad |

---

## 11. Closing CTA

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Make CrystalClean<br>your business’s next website. | Make CrystalClean your next website. | Maak van CrystalClean jouw volgende website. |
| Description | A professional website for your business. Your complete business system in Growth Rocket Hub. All maintained for you. | A website shaped around your business, connected to Growth Rocket Hub. Hosting, maintenance and support are handled for you. | Een website die past bij jouw bedrijf, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |
| CTAs | Start with this design / Talk to our team | Same | Kies dit ontwerp / Neem contact met ons op |
| Destinations | #package / mailto:sales@getgrowthrocket.com?subject=CrystalClean%20website%20enquiry | Same | #package / mailto:sales@getgrowthrocket.com?subject=CrystalClean%20website%20enquiry |

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
| Preview alt | CrystalClean website design preview for commercial cleaning companies | Voorbeeld van het CrystalClean-websiteontwerp voor zakelijke schoonmaakbedrijven |
| Image direction | Your cleaning team at work in an office or other premises you actually serve. | Je schoonmaakteam aan het werk in een kantoor of een ander pand waarvoor je werkt. |
| Image checks | Match alt text to the selected photograph. Verify image rights and do not present stock images as the customer’s own work. | Stem de alt-tekst af op de echte foto. Controleer gebruiksrechten en presenteer stockfoto’s niet als eigen werk van de klant. |
| Shared sections | Sections 6–8 are fixed master copy. Only the design name and CTA destination vary. Retain the six existing video destinations. | Onderdeel 6–8 is vaste tekst. Alleen de ontwerpnaam en knopbestemming verschillen. Behoud de zes bestaande videobestemmingen. |
| SEO and language | Keep substantive content indexable outside the embedded preview. Use distinct canonical URLs and reciprocal language links. Publish FAQ answers as visible text; do not use invented ratings in structured data. | Houd inhoud buiten het ingesloten voorbeeld indexeerbaar. Gebruik eigen canonieke URL’s en wederzijdse taalverwijzingen. Publiceer de FAQ-antwoorden als zichtbare tekst en gebruik geen verzonnen beoordelingen in gestructureerde gegevens. |
| Links | Retain existing design destinations until the new URLs are implemented. Redirect replaced published URLs. Use Dutch destinations only where they exist. | Behoud bestaande ontwerpbestemmingen totdat de nieuwe URL’s zijn ingevoerd. Redirect vervangen gepubliceerde URL’s. Gebruik alleen bestaande Nederlandse bestemmingen. |

See the notes below for how each of these was applied.

---

## Website template corrections (T01–T11)

The document's correction tables list issues found in the **CrystalClean template site itself**
(`https://cleaning02-temp.vercel.app/`). That site is a separate project, not part of this repository, so these are not part
of this update. Copied from the document:

| Location | Observed issue | Action / status |
| --- | --- | --- |
| T01 · Example identity | The design is CrystalClean; the preview brand and browser title use Cleaning Co. | Identify Cleaning Co. as example branding in the caption. Replace it with the verified client identity at launch, consistently across page, metadata and contact routes. |
| T02 · Quote and contact links | Request a Quote and Book an Appointment link to #booking; Contact links use #enquiry. Neither ID exists in the inspected page; the form is at #contact. | Point quote/contact links to the actual enquiry form. Connect appointment links to a working appointment flow. Verify every primary CTA. |
| T03 · Service selection | The loaded enquiry selector offers Cleaning Rooms, while the page lists five commercial service groups. | Configure the actual commercial services in the form and align labels with the service cards. Test selection and delivery without assuming a successful submission. |
| T04 · Placeholder facts | XX+ years, XX+ professionals/projects/clients, 20XX, your city, +00 phone, example email and Example Street remain visible. | Replace with verified business data or remove optional claims. Check phone, email and WhatsApp destinations as well as displayed copy. |
| T05 · Hero imagery | The hero carousel visibly includes a tropical beach photograph among cleaning imagery. | Use relevant workplace and cleaning photographs that support the commercial service. Check image rights and match alt text to the actual photograph. |
| T06 · Service promises and evidence | Vetted/insured staff, 100% satisfaction, supervision, safe/healthy environments, staffing support and one-working-day quotes are claimed. | Confirm actual services, checks, cover and response arrangements. Replace absolute or unverified promises with supported wording. Use genuine client evidence with permission. |
| T07 · Journal and policy links | Read article links return to #journal; social and footer policy links point to #home. | Use real articles, social profiles and policies, or remove unavailable destinations. Verify cookie settings separately. Do not leave a homepage fragment as a policy link. |
| T08 · Cookie copy | The visible cookie notice includes “Cookie, cookie, on the wall ...” and “maybe font battle, baremists...” after its normal explanation. | Remove the stray text and use the approved consent wording. Verify the banner and policy destinations in both languages. |
| T09 · Related design classification | The landing page says More commercial cleaning designs while linking to ShineSquad, which the sheet positions for home cleaning. | Use the new neutral related-design heading and label ShineSquad as home cleaning. Do not claim it is a second commercial-only design. |
| T10 · Shared landing sections | The landing pages call the Hub the complete system and use 7 days, including in the ticker. Original documents contain dental references. | Use approved sections 6–8 and the new footer/ticker. Keep the 7-working-day condition, onboarding cost and VAT visible. Remove dental carryovers. |
| T11 · Language and delivery checks | Both previews offer EN/NL switches; the full Dutch journey and backend delivery were not tested. | Localise all offered copy, labels, messages and consent. Test forms, booking and Hub delivery before launch. Keep the six existing video destinations; do not imply Dutch audio unless available. |

---

## Notes and decisions

- **N1 — URL.** The English page now lives at `/designs/crystalclean-commercial-cleaning-website`. Every link, the canonical URL, the language links and the structured data use it. The replaced URLs redirect there permanently (308) in one step: `/design/cleaning/crystalclean`, `/designs/cleaning/crystalclean`, `/designs/crystalclean`. The Dutch page keeps the established Dutch URL `/nl/ontwerpen/schoonmaak/crystalclean`, as the document asks; the language switch moves between the two.
- **N2 — Ticker and footer (section 12).** These are site-wide: the same ticker and footer appear on every page of the site, in both languages. Changing them here would change every page, so they are left for a separate, site-wide update (including the "Saloon" category label in the footer).
- **N3 — Shared sections 6–8.** The same master copy ShineSquad already uses (`page-copy/master.ts`); only the design name and CTA destination vary. Checked word for word against this document's sections 6–8.
- **N4 — Monthly card and tax note.** As in the document: the monthly card shows only the struck-through €99, €69 / month and the onboarding fee (no "Billed monthly." or "Save €138 a year…" lines), and "Prices exclude VAT." / "Prijzen zijn exclusief btw." shows on the price card.
- **N5 — FAQ help card.** "Still have a question?" is not in the approved copy, so the help card shows only the document's intro and button. The FAQ button keeps its existing email subject (`<design> website enquiry`); the document gives no destination for it.
- **N6 — Section 5 image.** The page shows a scrolling screenshot of the design, not a photograph, so the document's image direction does not apply; the alt text is the document's "Preview alt" / "Alt-tekst voorbeeld". The caption overlay is hidden in the current design and stays hidden.
- **N7 — "Watch on YouTube".** The video panel plays the video in the page and has no YouTube link, so none is added. "Play video" / "Video afspelen" is used for the play control. The six videos keep their existing (English) destinations in both languages, as the document requires.
- **N8 — Hidden labels on the Dutch page.** Screen-reader labels not covered by the document use the document's own Dutch terms: "Kruimelpad", "Schermkeuze", "Betaalkeuze" and "Uitlegvideo’s".
- **N9 — Heading colours.** Headings keep the page's purple accent; the words are exactly the document's. Where the document gives a heading as one sentence (no line break), it stays one sentence with the accent on its closing words: “Your questions answered.” and “Make CrystalClean your next website.” (and the Dutch equivalents).
- **N10 — Other designs.** The cards are ShineSquad, the other cleaning design, exactly as the document lists them, with the document's labels on this page only (the `/designs` listing keeps its own). The document's links use the staging domain `ggr-home.vercel.app` and older paths; the cards link to each design's current URL on this site, in the page's language.
