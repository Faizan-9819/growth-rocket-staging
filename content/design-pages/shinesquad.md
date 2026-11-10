# ShineSquad design page — content update reference

| | |
| --- | --- |
| **Source** | `ShineSquad — Home Cleaning Design Page Copy.docx` (16 October 2026) |
| **English page** | `/design/cleaning/shinesquad` |
| **Dutch page** | `/nl/ontwerpen/schoonmaak/shinesquad` |
| **Scope** | This page only, both languages. The other 15 design pages keep their current text. |

**Where the copy lives in the code**

- ShineSquad's own copy (sections 0–5 and 9–11), English and Dutch:
  `app/components/sections/design/page-copy/shinesquad.ts`
- Shared master copy (sections 6–8), English and Dutch: `app/components/sections/design/page-copy/master.ts`
- Which templates use approved copy: `app/components/sections/design/page-copy/index.ts`

**Before this update, the Dutch page showed English text in every section.** Only its links, canonical URL and
`lang` attribute were Dutch. So the "Current" column below applies to both pages.

How to read the tables:

- **Current** is the text the page rendered before this update (captured from the running site).
- **New EN** and **New NL** are copied word for word from the document's "Final copy" / "Definitieve tekst" columns.
- `<br>` marks a line break inside a heading.
- "Same" means the new text is identical to the current text.

---

## 0. Search content (page metadata)

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| SEO title | ShineSquad \| Cleaning Website Design & Business Tools \| Growth Rocket | Home Cleaning Website Design \| ShineSquad \| Growth Rocket | Website voor schoonmaakbedrijven voor particulieren \| ShineSquad |
| Meta description | Explore ShineSquad: a professional cleaning website design with appointments, enquiries, Growth Rocket Hub and ongoing technical support. Built for small businesses. | Explore ShineSquad, a website design for home cleaning businesses, with Growth Rocket Hub, hosting, maintenance and support. View the design and pricing. | Ontdek ShineSquad: een website voor schoonmaakbedrijven voor particulieren, met Growth Rocket Hub, hosting, onderhoud en ondersteuning. Bekijk het ontwerp en de prijzen. |
| Primary topic | — | home cleaning website design | Website voor schoonmaakbedrijven voor particulieren |
| Focus | — | Home cleaning | Schoonmaak bij particulieren |
| URL | `/design/cleaning/shinesquad` | `https://www.getgrowthrocket.com/designs/shinesquad-home-cleaning-website` (note N1) | "Gebruik de vastgestelde Nederlandse URL-structuur en wederzijdse taalverwijzingen." — stays `/nl/ontwerpen/schoonmaak/shinesquad` |

The page's structured data (`WebPage` description) also uses the new meta description.

## 1. Hero

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Label (shown in capitals) | Website design for small businesses | Website design for home cleaning businesses | Websiteontwerp voor schoonmaakbedrijven voor particulieren |
| H1 line 1 | ShineSquad. | Same | ShineSquad. |
| H1 line 2 | A spotless, booking-ready site for cleaning businesses. | Help people feel comfortable inviting you in. | Geef mensen vertrouwen om je binnen te laten. |
| Description | A professional website for your business. A complete business system with Growth Rocket Hub. All maintained for you. | Show who will clean their home, explain what each service includes and make the first enquiry easy. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system. | Laat zien wie bij hen thuis komt schoonmaken, wat je diensten inhouden en hoe ze eenvoudig contact opnemen. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |

"Growth Rocket Hub" keeps its existing lime underline inside the description.

## 2–3. Breadcrumb and preview

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Breadcrumb | All designs / ShineSquad | Same | Alle ontwerpen / ShineSquad |
| Device controls | Desktop · Tablet · Mobile | Same | Computer · Tablet · Mobiel |
| Preview link | Preview in browser | Same | Bekijk in je browser |
| Primary CTA | Start with this design | Same | Kies dit ontwerp |
| Browser label | — (not shown) | ShineSquad · Design preview | ShineSquad · Websitevoorbeeld |
| Preview caption | Live preview of the design. Open it in a browser to explore every section. Example branding and content are replaced with your own details. | Explore ShineSquad using Sage Cleaning Co. as the example business. We adapt the branding, services and content to your business. | Bekijk ShineSquad met Sage Cleaning Co. als voorbeeldbedrijf. We stemmen de huisstijl, diensten en inhoud af op jouw bedrijf. |
| Destinations | `https://cleaning-template-web.vercel.app/` · CTA `#package` | Same | Same |

The browser label is shown in the preview's dark browser bar, next to the three dots, and is also the preview's
accessible name.

## 4. Benefits

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Build confidence.<br>Before the first visit. | Build trust.<br>Before the first clean. | Wek vertrouwen.<br>Vóór de eerste schoonmaak. |
| Intro | Choosing a business is personal. ShineSquad gives prospective customers a clear picture of your business and a simple way to take the next step. | Choosing someone to clean your home means trusting them with your space and routine. ShineSquad helps households understand who you are, what to expect and how to arrange the right clean. | Wie iemand thuis laat schoonmaken, wil weten wie er komt en wat er wordt gedaan. Met ShineSquad stel je jezelf voor, maak je verwachtingen duidelijk en help je klanten een passende schoonmaak aan te vragen. |
| Card 1 title | Make your services easy to understand. | Make each service clear. | Maak je diensten duidelijk. |
| Card 1 body | Give each of your services a clear introduction, so customers can find what matters to them without a phone call first. | Explain the difference between a regular clean, a deep clean and a move-in or move-out clean. Show what is included, what needs a separate request and how customers can discuss their priorities. | Leg het verschil uit tussen een vaste schoonmaak, een grote schoonmaak en schoonmaak rond een verhuizing. Benoem wat erbij hoort, wat apart moet worden aangevraagd en hoe klanten hun wensen bespreken. |
| Card 2 title | Introduce the people behind the work. | Introduce the people coming into the home. | Stel de mensen voor die thuis langskomen. |
| Card 2 body | Show your team, their experience and how you work, so an unfamiliar business feels more approachable. | Show your team and explain your approach to access, belongings and working around pets or people at home. Describe your actual arrangements so customers know what to expect. | Laat je team zien en leg uit hoe je omgaat met toegang, persoonlijke spullen, huisdieren en bewoners die thuis zijn. Beschrijf je echte werkafspraken, zodat klanten weten waar ze aan toe zijn. |
| Card 3 title | Let genuine feedback build trust. | Let your work speak for you. | Laat je werk voor je spreken. |
| Card 3 body | Create space for your own customer testimonials and credentials, alongside the story of your business. | Share genuine household reviews and photographs you have permission to publish. Show useful examples of your work without promising identical results for every home. | Deel echte klantbeoordelingen en foto’s die je mag publiceren. Geef herkenbare voorbeelden van je werk zonder voor iedere woning hetzelfde resultaat te beloven. |
| Card 4 title | Make the next step feel simple. | Make the first request straightforward. | Maak een eerste aanvraag eenvoudig. |
| Card 4 body | Keep booking prompts, enquiry forms and contact details easy to find, including on a phone. | Help people share their postcode, property size, preferred frequency and cleaning needs. Keep enquiries and appointment options easy to reach on a phone, then confirm the scope and availability with them. | Laat mensen hun postcode, woninggrootte, gewenste frequentie en schoonmaakwensen doorgeven. Maak contact en afspraken ook op een telefoon makkelijk bereikbaar. Daarna bevestig je samen de werkzaamheden en beschikbaarheid. |

The four card icons stay as they are (document, people, star, calendar), in the same order.

## 5. Personalisation

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Your business. Your identity.<br>Your website. | Your team. Your approach.<br>Your website. | Jouw team. Jouw aanpak.<br>Jouw website. |
| Intro | The design is your starting point. We shape the website around the people, services and details that make your business yours. | We shape ShineSquad around the homes you clean, the people behind your service and the practical questions your customers ask. | We stemmen ShineSquad af op de woningen die je schoonmaakt, de mensen achter je bedrijf en de praktische vragen van je klanten. |
| List 1 | Your logo, colours and business story | Same | Je logo, kleuren en bedrijfsverhaal |
| List 2 | Your services and service information | Your cleaning services, inclusions and optional extras | Je schoonmaakdiensten, inbegrepen werk en extra mogelijkheden |
| List 3 | Your team and business photography | Your team photographs and introductions | Foto’s en een kennismaking met je team |
| List 4 | Your locations and contact details | Your approach to supplies, access and pets | Je afspraken over schoonmaakmiddelen, toegang en huisdieren |
| List 5 | Genuine customer testimonials and reviews | Your service areas and enquiry details | Je werkgebied en contactgegevens |
| List 6 | Verified ratings and professional credentials | Genuine reviews and permitted before-and-after photographs | Echte beoordelingen en voor-en-nafoto’s die je mag delen |
| List 7 | Video testimonials and business introductions | Your pricing approach and cancellation arrangements | Je prijsopbouw en afspraken over afzeggen |
| Image caption | — (overlay hidden in the current design) | ShineSquad, shaped around your business. | ShineSquad, afgestemd op jouw bedrijf. |
| Image alt text | ShineSquad design, shown as it would look for your business | ShineSquad website design preview for home cleaning businesses | Voorbeeld van het ShineSquad-websiteontwerp voor schoonmaakbedrijven voor particulieren |

The image caption is stored with the page copy but stays hidden, as the caption overlay is switched off in the
current design (note N6). The alt text comes from the document's "Preview alt" / "Alt-tekst voorbeeld" row.

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
| Play control | "Play website overview video" (per video) | Play video | Video afspelen |
| "Watch on YouTube" | — (not in the current design) | Watch on YouTube — **not added, see note N7** | Bekijk op YouTube — not added |

Video tabs (tab label / panel title / panel description):

| Tab | Current | New EN | New NL |
| --- | --- | --- | --- |
| 1 | See what’s inside your website / Website overview / Your website, built around your business. | Same | Bekijk wat je website biedt / Je website / Je website, afgestemd op jouw bedrijf. |
| 2 | Book and manage appointments online / Appointments / Make booking easier and manage your schedule. | Book and manage appointments online / Appointments / Make booking easier and manage your appointments. | Online afspraken boeken en beheren / Afspraken / Maak online afspraken boeken eenvoudig en houd overzicht over je afspraken. |
| 3 | Capture and manage enquiries / Enquiries / Organise new enquiries and keep track of replies. | Capture and manage enquiries / Inquiry Management / Keep track of customer enquiries in one place. | Aanvragen ontvangen en beheren / Aanvragen beheren / Houd overzicht over klantaanvragen op één plek. |
| 4 | Create quotes and invoices / Quotes & invoices / Prepare and manage customer documents in one place. | Create quotes and invoices / Quotes and invoices / Prepare quotes and invoices for your customers. | Offertes en facturen opmaken / Offertes en facturen / Maak offertes en facturen op voor je klanten. |
| 5 | Keep a customer Contact Book / Contact Book / Keep customer information together and easy to find. | Keep your customer contacts together / Contact Book / Contacts are created automatically from enquiries and appointments. | Houd je klantcontacten op één plek / Contacten / Contacten worden automatisch aangemaakt vanuit aanvragen en afspraken. |
| 6 | Get help and ongoing support / Help & support / Find guidance and raise support requests when needed. | Get help and ongoing support / Help and support / Find guidance and raise support requests when needed. | Hulp en ondersteuning krijgen / Hulp en ondersteuning / Bekijk uitleg en dien een supportverzoek in als je hulp nodig hebt. |

The six videos keep their existing (English) YouTube destinations in both languages, as the document requires.
`app/features/data.ts` also holds Dutch-language versions of all six; switching the Dutch page to them is a one-line
change if wanted.

## 7. Package and pricing — shared master copy

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Your design is just the beginning. | Same | Je ontwerp is pas het begin. |
| Intro | Your professional website, complete business system and ongoing technical care. All in one managed package. | A professional website, Growth Rocket Hub and ongoing technical care. Together, one complete online business system. | Een professionele website, Growth Rocket Hub en doorlopend technisch onderhoud. Samen één compleet online businesssysteem. |
| Pillar 1 | A professional website<br>Tailored to your business and the people you serve. | A professional website<br>Tailored to your business and your customers. | Een professionele website<br>Afgestemd op je bedrijf en je klanten. |
| Pillar 2 | Growth Rocket Hub<br>Your complete business system, connected to your website. | Growth Rocket Hub<br>Your everyday business tools, connected to your website. | Growth Rocket Hub<br>Alles om je dagelijkse werk te regelen, verbonden met je website. |
| Pillar 3 | All maintained for you<br>Hosting, SSL, technical maintenance and ongoing support. | Same | Alles voor je geregeld<br>Hosting, SSL, technisch onderhoud en doorlopende ondersteuning. |
| Billing controls | Annually · Save 17% · Monthly | Same | Jaarlijks · Bespaar 17% · Maandelijks |
| Annual card (default) | €990 (struck through)<br>€690 / year<br>+ €290 one-time onboarding fee<br>That’s €57.50 a month, billed annually.<br>Save €138 compared with 12 monthly payments. | Same | €990 (doorgestreept)<br>€690 / jaar<br>+ €290 eenmalige opstartkosten<br>Dat is €57,50 per maand, jaarlijks betaald.<br>Je bespaart €138 ten opzichte van 12 maandbetalingen. |
| Monthly card | €99 (struck through)<br>€69 / month<br>+ €290 one-time onboarding fee<br>Billed monthly.<br>Save €138 a year when you choose annual billing. | €99 (struck through)<br>€69 / month<br>+ €290 one-time onboarding fee | €99 (doorgestreept)<br>€69 / maand<br>+ €290 eenmalige opstartkosten |
| Tax note | — | Prices exclude VAT. | Prijzen zijn exclusief btw. |
| CTA | Start with ShineSquad | Same | Start met ShineSquad |
| CTA destination | `mailto:sales@getgrowthrocket.com?subject=Get%20started%20with%20ShineSquad` | Same | `mailto:sales@getgrowthrocket.com?subject=Starten%20met%20ShineSquad` |

The monthly card follows the document exactly, so its last two lines ("Billed monthly." and "Save €138 a year…")
are no longer shown on this page. The tax note shows under both billing options, above the button.

## 8. Launch — shared master copy

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Ready in as little as 7 days. | Ready in 7 working days.* | Online in 7 werkdagen.* |
| Intro | You focus on your business.<br>We take care of bringing it online. | Same | Jij richt je op je bedrijf.<br>Wij zorgen dat je online komt. |
| 01 | Choose — Start with this design and choose your billing option. | Choose — Choose your website design and billing option. | Kies — Kies je websiteontwerp en betaalwijze. |
| 02 | Share — Send your branding, business details and content. | Same | Deel — Stuur je huisstijl, bedrijfsgegevens en inhoud. |
| 03 | We build — We set up your website and connected business tools. | Same | Wij bouwen — We richten je website en Growth Rocket Hub in. |
| 04 | Go live — Review your website, approve it and launch. | Same | Online — Bekijk je website, geef je akkoord en ga online. |
| Condition | The 7-day setup depends on receiving the required information and approvals on time. | *The 7 working days start once we have all the required information and materials. Launch timing depends on receiving your approvals on time. | *De 7 werkdagen gaan in zodra we alle benodigde informatie en materialen hebben ontvangen. De oplevering hangt af van je tijdige goedkeuring. |

The purple accent stays on the time span ("7 working days.*" / "7 werkdagen.*"), as it was on "7 days.".

## 9. Frequently asked questions

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | A few things<br>you might ask. | Your questions answered. | Je vragen beantwoord. |
| Help card title | Still have a question? | — removed (not in the document, note N8) | — |
| Intro (help card text) | Ask us anything about ShineSquad — what is included, how it is set up and what happens after it goes live. | Questions about ShineSquad? We’re happy to help with the design, setup and what’s included. | Vragen over ShineSquad? We helpen je graag met het ontwerp, de inrichting en wat je krijgt. |
| CTA | Talk to our team | Same | Neem contact met ons op |
| CTA destination | `mailto:sales@getgrowthrocket.com?subject=ShineSquad%20website%20enquiry` | Same | Same |

### Current questions (7, replaced)

1. Am I buying just the website design?
2. Can ShineSquad match my business’s branding?
3. Can I use my existing domain?
4. What do I need to provide?
5. How do appointments and enquiries work?
6. What does the package cost?
7. What happens if I need help after launch?

### New questions — English (8)

1. **Is ShineSquad a home cleaning design I install myself?**
   No. We tailor and launch your website as part of Growth Rocket, a complete online business system. Your website comes with Growth Rocket Hub, hosting, SSL, technical maintenance and support. You do not need to install a design or maintain it yourself.
2. **Why does ShineSquad suit a home cleaning business?**
   It gives you space to introduce your cleaners, explain different cleans and answer the practical questions people ask before inviting someone into their home. We adapt the current mixed home-and-office example to your household services, service areas and working arrangements.
3. **Can I explain regular cleaning and one-off deep cleans separately?**
   Yes. We can describe the tasks, frequency and exclusions for each service so customers can choose a suitable starting point. Use your actual scope and pricing approach. Where a price depends on the home and its condition, explain how you assess it before confirming the work.
4. **Can customers arrange a clean through the website?**
   Yes. Enquiry and appointment options connect to Growth Rocket Hub. We agree how customers request or book a clean during onboarding. You can follow up, manage contacts and appointments, and prepare quotes and invoices. Availability and the final scope still need to reflect your business’s arrangements.
5. **Does the package include a cleaner tracking or staff scheduling app?**
   Growth Rocket provides your website and Hub for enquiries, appointments, contacts, quotes and invoices. It does not promise live cleaner tracking, workforce allocation or a separate customer app as standard. If you need those capabilities or a connection to existing software, we can discuss a bespoke scope.
6. **What should customers know before their first clean?**
   Explain what is included, whether you bring supplies, how access is arranged and how you work around pets or residents. Include your own rescheduling and cancellation terms. These details make expectations clearer without promising a service policy your business does not offer.
7. **Can I keep my brand and get help after launch?**
   Yes. We use your logo, colours, team and service information, and you can keep your domain. Hosting, SSL, technical maintenance and ongoing support are included. You can raise a support request through the Hub when you need help.
8. **What does ShineSquad cost, and how quickly can it go live?**
   The Growth Rocket package costs €69 per month or €690 per year, plus a €290 one-time onboarding fee. Prices exclude VAT. Your website can be ready in 7 working days after we receive all required information and materials, provided you give your approvals on time.

### New questions — Dutch (8)

1. **Is ShineSquad een websiteontwerp dat ik zelf installeer?**
   Nee. Wij passen je website aan en zetten deze online als onderdeel van Growth Rocket: een compleet online businesssysteem. Je website komt samen met Growth Rocket Hub, hosting, SSL, technisch onderhoud en ondersteuning. Je hoeft het ontwerp niet zelf te installeren of te onderhouden.
2. **Waarom past ShineSquad bij schoonmaak voor particulieren?**
   Je kunt je schoonmakers voorstellen, verschillende diensten toelichten en praktische vragen beantwoorden voordat iemand je thuis uitnodigt. We stemmen het huidige voorbeeld, met woningen en kantoren, af op jouw particuliere diensten, werkgebied en werkafspraken.
3. **Kan ik vaste schoonmaak en een eenmalige grote schoonmaak apart uitleggen?**
   Ja. We kunnen per dienst de werkzaamheden, frequentie en uitzonderingen beschrijven, zodat klanten een passende keuze maken. We gebruiken jouw echte aanbod en prijsopbouw. Hangt de prijs af van de woning en de staat ervan? Leg dan uit hoe je dit beoordeelt voordat je het werk bevestigt.
4. **Kunnen klanten via de website een schoonmaak regelen?**
   Ja. Aanvragen en afspraakmogelijkheden zijn verbonden met Growth Rocket Hub. Tijdens de inrichting spreken we af hoe klanten een schoonmaak aanvragen of boeken. Je volgt aanvragen op, beheert contacten en afspraken en maakt offertes en facturen. Beschikbaarheid en werkzaamheden moeten aansluiten op je eigen werkafspraken.
5. **Zit er een app bij om schoonmakers te volgen of personeel in te plannen?**
   Growth Rocket biedt je website en Hub voor aanvragen, afspraken, contacten, offertes en facturen. Live volgen van schoonmakers, personeelsplanning en een aparte klantenapp worden niet als standaard aangeboden. Heb je dit nodig of wil je bestaande software koppelen? Dan bespreken we een oplossing op maat.
6. **Wat moeten klanten weten vóór de eerste schoonmaak?**
   Leg uit wat je schoonmaakt, of je middelen meeneemt, hoe je toegang afspreekt en hoe je omgaat met huisdieren of bewoners die thuis zijn. Vermeld je eigen afspraken over verplaatsen en afzeggen. Zo zijn de verwachtingen duidelijk, zonder iets te beloven wat je niet aanbiedt.
7. **Kan ik mijn huisstijl behouden en krijg ik hulp na oplevering?**
   Ja. We gebruiken je logo, kleuren, team en dienstinformatie. Je kunt je domeinnaam behouden. Hosting, SSL, technisch onderhoud en doorlopende ondersteuning zijn inbegrepen. Via de Hub dien je een supportverzoek in als je hulp nodig hebt.
8. **Wat kost ShineSquad en hoe snel kan mijn website online?**
   Het Growth Rocket-pakket kost €69 per maand of €690 per jaar, plus €290 eenmalige opstartkosten. Prijzen zijn exclusief btw. Je website kan in 7 werkdagen online, nadat we alle benodigde informatie en materialen hebben ontvangen en als je op tijd je akkoord geeft.

The FAQ structured data (`FAQPage`) uses the same questions and answers, in the page's language.

## 10. Other designs

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Another look for<br>your business. | Explore another cleaning website design. | Bekijk een ander schoonmaakontwerp. |
| Intro | More cleaning designs in the same package. Every one of them is built, connected and maintained the same way. | Compare the other designs in the collection. We adapt your choice to the services your business actually provides. | Vergelijk de andere ontwerpen in de collectie. We stemmen je keuze af op de diensten die je daadwerkelijk aanbiedt. |
| Card | CrystalClean · Commercial Cleaning | CrystalClean · Commercial and office cleaning | CrystalClean · Schoonmaak van kantoren en bedrijfspanden |
| Card link | `/design/cleaning/crystalclean` (NL: `/nl/ontwerpen/schoonmaak/crystalclean`) | Same | Same |

The new card label applies to this page only; the CrystalClean card on the `/designs` listing keeps "Commercial
Cleaning". The document's link uses the staging domain `ggr-home.vercel.app`; the page keeps the site's own path to
the same design.

## 11. Closing CTA

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Make ShineSquad<br>your business’s next website. | Make ShineSquad your next website. | Maak van ShineSquad jouw volgende website. |
| Description | A professional website for your business. Your complete business system in Growth Rocket Hub. All maintained for you. | A website shaped around your business, connected to Growth Rocket Hub. Hosting, maintenance and support are handled for you. | Een website die past bij jouw bedrijf, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |
| CTAs | Start with this design / Talk to our team | Same | Kies dit ontwerp / Neem contact met ons op |
| Destinations | `#package` / `mailto:sales@getgrowthrocket.com?subject=ShineSquad%20website%20enquiry` | Same | Same |

## 12. Ticker and footer — not changed in this update

| Element | New EN | New NL |
| --- | --- | --- |
| Ticker | Your website. Your business tools. One Growth Rocket package. | Je website, met alles om je dagelijkse werk te regelen. Eén Growth Rocket-pakket. |
| Footer heading | Your website and everyday business tools. | Je website, met alles om je dagelijkse werk te regelen. |
| Footer description | Growth Rocket is a complete online business system for small businesses. A professional website and Growth Rocket Hub for enquiries, appointments, quotes, invoices and customer contacts, with hosting, maintenance and support handled for you. | Growth Rocket is een compleet online businesssysteem voor het mkb en zzp’ers. Een professionele website en Growth Rocket Hub voor aanvragen, afspraken, offertes, facturen en contacten. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |
| Navigation and legal | Retain the approved English global footer links, company details and legal destinations. Correct the category label “Saloon” to “Salon”. | Behoud de vastgestelde Nederlandse navigatie, bedrijfsgegevens en juridische links. Gebruik “Kapsalons” als categorienaam, niet “Saloon”. |
| Global footer CTA | Start with Growth Rocket | Start met Growth Rocket |

See note N2 for why this section is not part of this update.

## Images and implementation (from the document)

| Element | New EN | New NL | Status |
| --- | --- | --- | --- |
| Preview alt | ShineSquad website design preview for home cleaning businesses | Voorbeeld van het ShineSquad-websiteontwerp voor schoonmaakbedrijven voor particulieren | Used as the alt text of the section 5 design image |
| Image direction | A cleaner working in a real home, with permission to show the property. | Een schoonmaker aan het werk in een woning die je met toestemming mag tonen. | Not applicable: section 5 shows a screenshot of the design, not a photograph (note N6) |
| Image checks | Match alt text to the selected photograph. Verify image rights and do not present stock images as the customer’s own work. | Stem de alt-tekst af op de echte foto. … | Guidance only |
| Shared sections | Sections 6–8 are fixed master copy. Only the design name and CTA destination vary. Retain the six existing video destinations. | Onderdeel 6–8 is vaste tekst. … | Followed (note N3) |
| SEO and language | Keep substantive content indexable outside the embedded preview. Use distinct canonical URLs and reciprocal language links. Publish FAQ answers as visible text; do not use invented ratings in structured data. | … | Already in place; FAQ answers are visible on the page and no ratings are in the structured data |
| Links | Retain existing design destinations until the new URLs are implemented. Redirect replaced published URLs. Use Dutch destinations only where they exist. | … | Followed (note N1) |

## Website template corrections (T01–T12)

The document's correction tables (T01–T12) list issues found in the **ShineSquad template site itself**
(`https://cleaning-template-web.vercel.app/`, the Sage Cleaning Co. example shown in the preview). That site is a
separate project, not part of this repository, so these are not part of this update. In short:

- **T01** Lead with household cleaning; explain the Sage Cleaning Co. example name.
- **T02** Booking price mismatch (US$2,800.00 for 60 min vs €28/hour); quote vs booking flow.
- **T03** Unconfirmed app, tracking and policy promises.
- **T04** Inconsistent response-time promises.
- **T05** Unverified ratings, team and scale figures; a "Placeholder" team card.
- **T06** Unverified insurance, safety and product claims.
- **T07** Inconsistent coverage (26 cities vs six); stale "Coming Q3 2026".
- **T08** Footer links pointing to `#`; mixed WhatsApp numbers.
- **T09** Inconsistent prices; deposit-return promise.
- **T10** Unverified "Read all posts" and "See full portfolio" destinations.
- **T11** Use sections 6–8 and the new footer/ticker; remove dental carry-overs.
- **T12** Localise the full Dutch journey; test forms, booking and Hub delivery.

## Notes and decisions

- **N1 — URL.** The English page now lives at `/designs/shinesquad-home-cleaning-website`, set in
  `CUSTOM_DETAIL_PATHS` in `app/designs/design-routes.ts`. Every link, the canonical URL, the language links and the
  structured data use it. The replaced URLs redirect there permanently (308) in one step: `/design/cleaning/shinesquad`,
  `/designs/cleaning/shinesquad` and `/designs/shinesquad`. The Dutch page keeps the established Dutch URL
  `/nl/ontwerpen/schoonmaak/shinesquad`, as the document asks; the language switch moves between the two.
- **N2 — Ticker and footer (section 12).** These are site-wide: the same ticker and footer appear on every page of
  the site, in both languages. Changing them here would change every page, not just ShineSquad, so they are left
  for a separate, site-wide update. The footer currently still shows "Saloon" and is English on Dutch pages.
- **N3 — Shared sections 6–8.** The document calls these "fixed master copy" for all designs. They are written once
  in a shared master copy and applied to ShineSquad only for now; the other designs keep their current text until
  their own documents are applied.
- **N4 — Monthly card.** Follows the document: no "Billed monthly." or "Save €138 a year…" lines.
- **N5 — Tax note.** "Prices exclude VAT." / "Prijzen zijn exclusief btw." is new and shows on the price card.
- **N6 — Section 5 image.** The page shows a scrolling screenshot of the design rather than a photograph, so the
  document's image direction does not apply. The caption overlay is hidden in the current design and stays hidden.
- **N7 — "Watch on YouTube".** The current video panel opens the video in an on-page player and has no YouTube link,
  so no such link is added. "Play video" / "Video afspelen" is used for the play control.
- **N8 — FAQ help card.** "Still have a question?" is not in the approved copy, so the help card now shows only the
  document's intro and button.
- **N9 — Heading colours.** Headings keep the page's existing purple accent on the same part as before (second line
  or closing words). The words are exactly the document's.
- **N10 — Hidden labels on the Dutch page.** Screen-reader labels not covered by the document use the document's own
  Dutch terms: "Kruimelpad" (breadcrumb), "Schermkeuze" (device controls), "Betaalkeuze" (billing controls) and
  "Uitlegvideo’s" (video tabs).
