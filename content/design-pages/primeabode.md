# PrimeAbode design page — content update reference

| | |
| --- | --- |
| **Source** | `PrimeAbode — Real Estate Consultant Design Page Copy.docx` (16 October 2026) |
| **English page** | `/designs/primeabode-real-estate-website` (was `/design/real-estate/primeabode`, which now redirects) |
| **Dutch page** | `/nl/ontwerpen/makelaar/primeabode` |
| **Scope** | This page only, both languages. |

**Where the copy lives in the code**

- PrimeAbode's own copy (sections 0–5 and 9–11), English and Dutch: `app/components/sections/design/page-copy/primeabode.ts`
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
| SEO title | PrimeAbode \| Real Estate Website Design & Business Tools \| Growth Rocket | Real Estate Website Design \| PrimeAbode \| Growth Rocket | Website voor makelaars \| PrimeAbode |
| Meta description | Explore PrimeAbode: a professional real estate website design with appointments, enquiries, Growth Rocket Hub and ongoing technical support. Built for estate agents. | Explore PrimeAbode, a website design for estate agents and property consultants, with Growth Rocket Hub, hosting, maintenance and support. View the design and pricing. | Ontdek PrimeAbode: een website voor makelaars en vastgoedadviseurs, met Growth Rocket Hub, hosting, onderhoud en ondersteuning. Bekijk het ontwerp en de prijzen. |
| Primary topic | — | real estate website design | Website voor makelaars |
| Focus | — | Local expertise, property presentation and consultation requests | Lokale kennis, woningaanbod en kennismakingsgesprekken |
| Final URL (EN) | `/design/real-estate/primeabode` | https://www.getgrowthrocket.com/designs/primeabode-real-estate-website | Gebruik de vastgestelde Nederlandse URL-structuur en wederzijdse taalverwijzingen. |

---

## 1. Hero

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Label | Website design for estate agents | Website design for estate agents and property consultants | Websiteontwerp voor makelaars en vastgoedadviseurs |
| H1 line 1 | PrimeAbode. | Same | PrimeAbode. |
| H1 line 2 | A polished showcase for listings and agents. | Show your properties. Introduce the people behind the advice. | Laat je aanbod zien. Geef je advies een gezicht. |
| Description | A professional website for your agency. A complete business system with Growth Rocket Hub. All maintained for you. | Give buyers, sellers and landlords a clear view of your services, your local knowledge and how to get in touch. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system. | Geef kopers, verkopers en verhuurders een helder beeld van je dienstverlening, je lokale kennis en hoe ze contact opnemen. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |

---

## 2–3. Breadcrumb and preview

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| Breadcrumb | All designs / PrimeAbode | Same | Alle ontwerpen / PrimeAbode |
| Device controls | Desktop · Tablet · Mobile | Same | Computer · Tablet · Mobiel |
| Preview link | Preview in browser | Same | Bekijk in je browser |
| Primary CTA | Start with this design | Same | Kies dit ontwerp |
| Browser label | — (not shown) | PrimeAbode · Design preview | PrimeAbode · Websitevoorbeeld |
| Preview caption | Live preview of the design. Open it in a browser to explore every section. Example branding and content are replaced with your own details. | Explore PrimeAbode using Aurelio Estates as the example business. We adapt the branding, services and content to your business. | Bekijk PrimeAbode met Aurelio Estates als voorbeeldbedrijf. We stemmen de huisstijl, diensten en inhoud af op jouw bedrijf. |
| Destinations | https://realestate-template-beta.vercel.app/ · CTA `#package` | https://realestate-template-beta.vercel.app/<br>Primary CTA: #package | https://realestate-template-beta.vercel.app/<br>Primaire knop: #package |

---

## 4. Benefits

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Build confidence.<br>Before the first visit. | Build trust before the first conversation. | Wek vertrouwen vóór het eerste gesprek. |
| Intro | Choosing an agency is personal. PrimeAbode gives prospective buyers a clear picture of your agency and a simple way to take the next step. | Choosing an estate agent means choosing who will guide an important decision. Make your expertise, approach and property information easy to assess. | Wie een makelaar kiest, zoekt begeleiding bij een belangrijke beslissing. Maak je kennis, aanpak en woninginformatie makkelijk te beoordelen. |
| Card 1 title | Make your listings easy to understand. | Make your services clear | Maak je dienstverlening duidelijk |
| Card 1 body | Give each of your listings a clear introduction, so buyers can find what matters to them without a phone call first. | Explain your actual buying, selling or rental services, who they are for and what happens after an enquiry. Keep valuation services separate where they have their own scope. | Leg uit welke aankoop-, verkoop- of verhuurdiensten je biedt, voor wie ze bedoeld zijn en wat er na een aanvraag gebeurt. Licht taxaties apart toe als daarvoor een eigen werkwijze geldt. |
| Card 2 title | Introduce the people behind the work. | Give properties the detail they deserve | Geef woningen de juiste informatie |
| Card 2 body | Show your team, their experience and how you work, so an unfamiliar agency feels more approachable. | Present current photographs, location, price, key specifications and availability. Help visitors decide whether a property is worth asking about before they request a viewing. | Toon actuele foto’s, locatie, prijs, kenmerken en beschikbaarheid. Zo kunnen bezoekers bepalen of een woning bij hen past voordat ze een bezichtiging aanvragen. |
| Card 3 title | Let genuine feedback build trust. | Show your knowledge of the area | Laat je lokale kennis zien |
| Card 3 body | Create space for your own buyer testimonials and credentials, alongside the story of your agency. | Introduce your team and the neighbourhoods you work in. Use useful local context and genuine client experiences instead of broad claims about being the best. | Stel je team voor en vertel over de buurten waarin je werkt. Gebruik relevante lokale informatie en echte klantervaringen in plaats van algemene claims dat je de beste bent. |
| Card 4 title | Make the next step feel simple. | Guide each visitor to the right conversation | Help bezoekers gericht contact opnemen |
| Card 4 body | Keep booking prompts, enquiry forms and contact details easy to find, including on a phone. | Give buyers a clear way to ask about a property, and sellers or landlords a way to discuss their needs. Make contact details easy to use on a phone. | Geef kopers een duidelijke route voor woningvragen en verkopers of verhuurders ruimte om hun wensen te bespreken. Maak contact ook op mobiel eenvoudig. |

---

## 5. Personalisation

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Your agency. Your identity.<br>Your website. | Your area. Your expertise. Your website. | Jouw regio. Jouw expertise. Jouw website. |
| Intro | The design is your starting point. We shape the website around the people, services and details that make your agency yours. | We shape PrimeAbode around the services you provide, the properties you represent and the local market you know. | We stemmen PrimeAbode af op je dienstverlening, je woningaanbod en de lokale markt die jij kent. |
| List 1 | Your logo, colours and agency story | Your logo, colours and agency story. | Je logo, kleuren en het verhaal van je kantoor. |
| List 2 | Your listings and service information | Your actual buying, selling, rental or advisory services. | Je aankoop-, verkoop-, verhuur- of adviesdiensten. |
| List 3 | Your team and agency photography | Property photographs and verified specifications, prices and availability. | Woningfoto’s en gecontroleerde kenmerken, prijzen en beschikbaarheid. |
| List 4 | Your locations and contact details | Team introductions and genuine local expertise. | Teamintroducties en echte lokale expertise. |
| List 5 | Genuine buyer testimonials and reviews | Neighbourhood information, office details and areas served. | Buurtinformatie, kantoorgegevens en werkgebied. |
| List 6 | Verified ratings and professional credentials | Authorised client reviews and verified professional memberships. | Klantreviews met toestemming en gecontroleerde beroepslidmaatschappen. |
| List 7 | Video testimonials and agency introductions | Property enquiries and consultation requests matched to your working process. | Woningvragen en kennismakingsgesprekken die passen bij je werkwijze. |
| Image caption | — (overlay hidden in the current design) | PrimeAbode, shaped around your business. | PrimeAbode, afgestemd op jouw bedrijf. |
| Image alt text (document's "Preview alt") | PrimeAbode design, shown as it would look for your agency | PrimeAbode website design preview for estate agents and property consultants | Voorbeeld van het PrimeAbode-websiteontwerp voor makelaars en vastgoedadviseurs |

---

## 6. Growth Rocket Hub — shared master copy

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | A great website.<br>A connected system. | Same | Een sterke website.<br>Een verbonden systeem. |
| Intro | A professional website for your agency, a complete business system in Growth Rocket Hub, and ongoing technical maintenance and upkeep. All working together. | Your professional website and Growth Rocket Hub work together as one complete online business system, with hosting, technical maintenance and support handled for you. | Je professionele website en Growth Rocket Hub vormen samen één compleet online businesssysteem. Hosting, technisch onderhoud en ondersteuning zijn voor je geregeld. |
| Step 01 title | A buyer gets in touch | A customer gets in touch | Een klant neemt contact op |
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
| CTA | Start with PrimeAbode | Same | Start met PrimeAbode |
| CTA destination | mailto:sales@getgrowthrocket.com?subject=Get%20started%20with%20PrimeAbode | Same | mailto:sales@getgrowthrocket.com?subject=Starten%20met%20PrimeAbode |

---

## 8. Launch — shared master copy

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Ready in as little as 7 days. | Ready in 7 working days.* | Online in 7 werkdagen.* |
| Intro | You focus on your agency.<br>We take care of bringing it online. | You focus on your business.<br>We take care of bringing it online. | Jij richt je op je bedrijf.<br>Wij zorgen dat je online komt. |
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
| Intro | Ask us anything about PrimeAbode — what is included, how it is set up and what happens after it goes live. (help card, under the title “Still have a question?”) | Questions about PrimeAbode? We’re happy to help with the design, setup and what’s included. | Vragen over PrimeAbode? We helpen je graag met het ontwerp, de inrichting en wat je krijgt. |
| CTA | Talk to our team | Same | Neem contact met ons op |

### Current questions (7, replaced)

1. Am I buying just the website design?
2. Can PrimeAbode match my agency’s branding?
3. Can I use my existing domain?
4. What do I need to provide?
5. How do appointments and enquiries work?
6. What does the package cost?
7. What happens if I need help after launch?

### New questions — English (8)

1. **Is PrimeAbode suitable for a small estate agency?**
   Yes. We adapt the design for your agency or independent property consultancy. The premium property preview is an example, not a requirement to specialise in luxury homes or international investment.
2. **Can I display properties for sale or rent?**
   The design includes space to showcase properties. We agree how listings, photographs, specifications and availability will be maintained before launch. A live property feed or automated portal synchronisation is not included by assumption.
3. **Can visitors request a viewing or valuation appointment?**
   Growth Rocket includes enquiry and appointment capabilities. We agree which requests your website should collect and how you will follow them up. Property-specific booking rules or specialist valuation workflows need separate confirmation.
4. **Does it connect to my property software or listing portals?**
   Tell us what you use. We assess the required connection and agree its scope before implementation. The website and Hub do not automatically replace a specialist property database or synchronise with property portals.
5. **Can the website explain the areas I cover?**
   Yes. We can include real neighbourhood knowledge, office information and the services you offer locally. Useful, accurate local content supports relevance; it does not guarantee a particular search ranking.
6. **Can I use my current domain and branding?**
   Yes. Share your domain details, brand assets, service information and approved property images. We guide you through the setup and agree how to use your existing domain without changing your business identity.
7. **What else comes with the design?**
   Your professional website comes with Growth Rocket Hub for enquiries, appointments, quotes, invoices and contacts, plus hosting, maintenance and support. Together they form a complete online business system.
8. **What does PrimeAbode cost, and how quickly can it go live?**
   The Growth Rocket package costs €69 per month or €690 per year, plus a €290 one-time onboarding fee. Prices exclude VAT. Your website can be ready in 7 working days after we receive all required information and materials, provided you give your approvals on time.

### New questions — Dutch (8)

1. **Past PrimeAbode bij een klein makelaarskantoor?**
   Ja. We stemmen het ontwerp af op jouw kantoor of zelfstandige vastgoedadviespraktijk. Het luxe vastgoed in het voorbeeld betekent niet dat je je op luxe woningen of internationale beleggingen moet richten.
2. **Kan ik koop- en huurwoningen tonen?**
   Het ontwerp biedt ruimte om woningen te presenteren. We spreken vóór oplevering af hoe je aanbod, foto’s, kenmerken en beschikbaarheid worden bijgehouden. Een live woningfeed of automatische portalsynchronisatie is niet vanzelfsprekend inbegrepen.
3. **Kunnen bezoekers een bezichtiging of taxatieafspraak aanvragen?**
   Growth Rocket biedt mogelijkheden voor aanvragen en afspraken. We bepalen samen welke verzoeken je website opvangt en hoe je ze opvolgt. Woninggebonden boekingsregels of specifieke taxatieprocessen bevestigen we apart.
4. **Is er een koppeling met mijn makelaarssoftware of woningportals?**
   Vertel ons wat je gebruikt. We beoordelen de gewenste koppeling en spreken de omvang af vóór uitvoering. De website en Hub vervangen niet automatisch een woningdatabase en synchroniseren niet standaard met woningportals.
5. **Kan ik mijn werkgebied toelichten?**
   Ja. We kunnen echte buurtkennis, kantoorgegevens en lokale dienstverlening opnemen. Nuttige, juiste lokale informatie maakt de pagina relevant, maar garandeert geen bepaalde positie in zoekmachines.
6. **Kan ik mijn domeinnaam en huisstijl behouden?**
   Ja. Deel je domeingegevens, huisstijl, dienstinformatie en goedgekeurde woningfoto’s. We begeleiden de inrichting en spreken af hoe we je bestaande domein gebruiken met behoud van je bedrijfsidentiteit.
7. **Wat krijg ik naast het ontwerp?**
   Je professionele website komt met Growth Rocket Hub voor aanvragen, afspraken, offertes, facturen en contacten. Hosting, onderhoud en ondersteuning zijn ook geregeld. Samen vormt dit één compleet online businesssysteem.
8. **Wat kost PrimeAbode en hoe snel kan mijn website online?**
   Het Growth Rocket-pakket kost €69 per maand of €690 per jaar, plus €290 eenmalige opstartkosten. Prijzen zijn exclusief btw. Je website kan in 7 werkdagen online, nadat we alle benodigde informatie en materialen hebben ontvangen en als je op tijd je akkoord geeft.

The FAQ structured data (`FAQPage`) uses the same questions and answers, in the page's language.

---

## 10. Other designs

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Designs for<br>other trades. | Explore more website designs. | Ontdek meer ontwerpen. |
| Intro | This is the only design in its category for now. Here is what the same package looks like for other kinds of business. | Compare the other designs in the collection. We adapt your choice to the services your business actually provides. | Vergelijk de andere ontwerpen in de collectie. We stemmen je keuze af op de diensten die je daadwerkelijk aanbiedt. |
| Cards and links | DentalCare · Dentistry<br>ShineSquad · Cleaning<br>Physiotherapy · Health & Wellness | DentalCare · Dentist / Tandarts<br>https://ggr-home.vercel.app/design/dentist/dentalcare<br>ShineSquad · Home cleaning / Particuliere schoonmaak<br>https://ggr-home.vercel.app/design/cleaning/shinesquad<br>PhysioCare · Physiotherapy / Fysiotherapie<br>https://ggr-home.vercel.app/design/physiotherapy/physiotherapy | DentalCare · Dentist / Tandarts<br>https://ggr-home.vercel.app/design/dentist/dentalcare<br>ShineSquad · Home cleaning / Particuliere schoonmaak<br>https://ggr-home.vercel.app/design/cleaning/shinesquad<br>PhysioCare · Physiotherapy / Fysiotherapie<br>https://ggr-home.vercel.app/design/physiotherapy/physiotherapy |

---

## 11. Closing CTA

| Element | Current | New EN | New NL |
| --- | --- | --- | --- |
| H2 | Make PrimeAbode<br>your agency’s next website. | Make PrimeAbode your next website. | Maak van PrimeAbode jouw volgende website. |
| Description | A professional website for your agency. Your complete business system in Growth Rocket Hub. All maintained for you. | A website shaped around your business, connected to Growth Rocket Hub. Hosting, maintenance and support are handled for you. | Een website die past bij jouw bedrijf, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld. |
| CTAs | Start with this design / Talk to our team | Same | Kies dit ontwerp / Neem contact met ons op |
| Destinations | #package / mailto:sales@getgrowthrocket.com?subject=PrimeAbode%20website%20enquiry | Same | #package / mailto:sales@getgrowthrocket.com?subject=PrimeAbode%20website%20enquiry |

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
| Preview alt | PrimeAbode website design preview for estate agents and property consultants | Voorbeeld van het PrimeAbode-websiteontwerp voor makelaars en vastgoedadviseurs |
| Image direction | Use authorised current property photographs, local streetscapes and the actual agency team. Do not imply that stock properties are available listings. | Gebruik toegestane actuele woningfoto’s, lokale beelden en het echte team. Presenteer stockwoningen niet als beschikbaar aanbod. |
| Image checks | Match alt text to the selected photograph. Verify image rights and do not present stock images as the customer’s own work. | Stem de alt-tekst af op de echte foto. Controleer gebruiksrechten en presenteer stockfoto’s niet als eigen werk van de klant. |
| Shared sections | Sections 6–8 are fixed master copy. Only the design name and CTA destination vary. Retain the six existing video destinations. | Onderdeel 6–8 is vaste tekst. Alleen de ontwerpnaam en knopbestemming verschillen. Behoud de zes bestaande videobestemmingen. |
| SEO and language | Keep substantive content indexable outside the embedded preview. Use distinct canonical URLs and reciprocal language links. Publish FAQ answers as visible text; do not use invented ratings in structured data. | Houd inhoud buiten het ingesloten voorbeeld indexeerbaar. Gebruik eigen canonieke URL’s en wederzijdse taalverwijzingen. Publiceer de FAQ-antwoorden als zichtbare tekst en gebruik geen verzonnen beoordelingen in gestructureerde gegevens. |
| Links | Retain existing design destinations until the new URLs are implemented. Redirect replaced published URLs. Use Dutch destinations only where they exist. | Behoud bestaande ontwerpbestemmingen totdat de nieuwe URL’s zijn ingevoerd. Redirect vervangen gepubliceerde URL’s. Gebruik alleen bestaande Nederlandse bestemmingen. |

See the notes below for how each of these was applied.

---

## Website template corrections (T01–T10)

The document's correction tables list issues found in the **PrimeAbode template site itself**
(`https://realestate-template-beta.vercel.app/`). That site is a separate project, not part of this repository, so these are not part
of this update. Copied from the document:

| Location | Observed issue | Action / status |
| --- | --- | --- |
| T01 · Example identity | PrimeAbode opens Aurelio Estates, an India/GCC luxury consultancy. | Keep PrimeAbode as the design name and label Aurelio as example branding. Replace market, contact and company details for the customer. |
| T02 · Scope and local relevance | Preview emphasises HNI buyers, family offices, Indian/GCC cities, RERA and investment services. | Adapt to the actual agency and market. Verify relevant memberships and scope; do not transfer foreign credentials or investment services without confirmation. |
| T03 · Unsupported proof | Visible claims include $2.4B transacted, 1,840 homes, 98% retention, 4–7% savings and testimonial investment outperformance. | Replace sample metrics and reviews with authorised, substantiated evidence or remove them. Do not imply guaranteed financial results. |
| T04 · Property presentation | About says No listings page, while featured properties and View all properties appear. The latter links to #booking. | Align the offer. Label a curated showcase honestly or provide a real listings destination; define how availability and property data stay current. |
| T05 · Coverage inconsistency | Five cities headline accompanies seven city cards; other copy says 12 cities. Singapore says Coming Q3. | Use one verified coverage story and remove stale expansion claims. Differentiate offices from service areas if both are shown. |
| T06 · Enquiry selector | Service needed currently contains only Select a service. | Populate agreed services and test selection, validation and delivery. Use property enquiry fields appropriate to the agency. |
| T07 · Contact and policy links | WhatsApp points to wa.me/ without a number. Privacy, terms and disclosures link to #footer. | Provide valid client contact and policy destinations. Review absolute confidentiality language against the actual handling process. |
| T08 · Design catalogue | Only one real-estate design is available; related cards are other industries. | Keep an honest cross-industry heading. Do not carry the old document’s speculative real-estate concepts into the published collection. |
| T09 · Shared landing sections | The pages use older Hub positioning and 7-day wording. | Apply approved sections 6–8, including working days, conditions, onboarding fee and VAT. Keep six video destinations. |
| T10 · Delivery checks | Visible content and destinations were reviewed; submissions, integrations and full Dutch journeys were not tested. | Test booking, enquiries, notifications, consent and offered language versions before launch. Do not imply capabilities not confirmed in the agreed setup. |

---

## Notes and decisions

- **N1 — URL.** The English page now lives at `/designs/primeabode-real-estate-website`. Every link, the canonical URL, the language links and the structured data use it. The replaced URLs redirect there permanently (308) in one step: `/design/real-estate/primeabode`, `/designs/real-estate/primeabode`, `/designs/primeabode`. The Dutch page keeps the established Dutch URL `/nl/ontwerpen/makelaar/primeabode`, as the document asks; the language switch moves between the two.
- **N2 — Ticker and footer (section 12).** These are site-wide: the same ticker and footer appear on every page of the site, in both languages. Changing them here would change every page, so they are left for a separate, site-wide update (including the "Saloon" category label in the footer).
- **N3 — Shared sections 6–8.** The same master copy ShineSquad already uses (`page-copy/master.ts`); only the design name and CTA destination vary. Checked word for word against this document's sections 6–8.
- **N4 — Monthly card and tax note.** As in the document: the monthly card shows only the struck-through €99, €69 / month and the onboarding fee (no "Billed monthly." or "Save €138 a year…" lines), and "Prices exclude VAT." / "Prijzen zijn exclusief btw." shows on the price card.
- **N5 — FAQ help card.** "Still have a question?" is not in the approved copy, so the help card shows only the document's intro and button. The FAQ button keeps its existing email subject (`<design> website enquiry`); the document gives no destination for it.
- **N6 — Section 5 image.** The page shows a scrolling screenshot of the design, not a photograph, so the document's image direction does not apply; the alt text is the document's "Preview alt" / "Alt-tekst voorbeeld". The caption overlay is hidden in the current design and stays hidden.
- **N7 — "Watch on YouTube".** The video panel plays the video in the page and has no YouTube link, so none is added. "Play video" / "Video afspelen" is used for the play control. The six videos keep their existing (English) destinations in both languages, as the document requires.
- **N8 — Hidden labels on the Dutch page.** Screen-reader labels not covered by the document use the document's own Dutch terms: "Kruimelpad", "Schermkeuze", "Betaalkeuze" and "Uitlegvideo’s".
- **N9 — Heading colours.** Headings keep the page's purple accent; the words are exactly the document's. Where the document gives a heading as one sentence (no line break), it stays one sentence with the accent on its closing words: “Build trust before the first conversation.”, “Your area. Your expertise. Your website.”, “Your questions answered.” and “Make PrimeAbode your next website.” (and the Dutch equivalents).
- **N10 — "PhysioCare".** The document names the third card "PhysioCare". That design was titled "Physiotherapy" on the site; its own approved document names it PhysioCare, so its title is now "PhysioCare" and the card shows that name, with this document's labels ("Physiotherapy" / "Fysiotherapie").
- **N11 — Other designs.** PrimeAbode is the only design in its category, so this section shows designs for other trades: DentalCare, ShineSquad and Physiotherapy, the same three the document lists. The cards carry the document's labels on this page only; the `/designs` listing keeps its own labels. The document's links use the staging domain `ggr-home.vercel.app` (and ShineSquad's old path); the cards link to each design's current URL on this site, in the page's language.
