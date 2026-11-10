import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import { buildPageSchema, socialMeta } from "../../lib/seo";
import {
  ExternalLink,
  LegalHero,
  LINK_CLASS,
  Mail,
  Phone,
  Section,
  Sub,
  Ul,
} from "../../components/legal/LegalContent";
import LegalDocument from "../../components/legal/LegalDocument";

export const metadata: Metadata = {
  title: "Impressum — Growth Rocket",
  description:
    "Bedrijfsinformatie en wettelijk impressum voor Growth Rocket door Parashift Technologies B.V.",
  ...socialMeta(
    "Impressum — Growth Rocket",
    "Bedrijfsinformatie en wettelijk impressum voor Growth Rocket door Parashift Technologies B.V.",
    "/nl/imprint",
  ),
  alternates: {
    canonical: "https://legal.getgrowthrocket.com/nl/imprint",
    languages: {
      en: "https://legal.getgrowthrocket.com/imprint",
      nl: "https://legal.getgrowthrocket.com/nl/imprint",
    },
  },
};

/* Text: ggr-legal-pages-content/final-doc-for-imprint-nl.docx, word for word. */
export default function NlImprintPage() {
  return (
    // pt-22 clears the fixed Navbar, as HomeShell does, so the dark hero
    // card sits below the bar rather than under it.
    <main className="min-h-screen bg-white pt-22">
      <JsonLd
        data={buildPageSchema(
          "/nl/imprint",
          "Impressum - Growth Rocket",
          "Bedrijfsinformatie en wettelijk impressum voor Growth Rocket door Parashift Technologies B.V.",
        )}
      />
      <LegalHero title="Colofon" />

      {/* Inhoud */}
      <LegalDocument tocHeading="Inhoudsopgave">
        <Sub>Growth Rocket colofon en bedrijfsgegevens</Sub>

        <Section title="1. Bedrijfsgegevens">
          <p>
            Parashift Technologies B.V. levert de diensten onder het merk Growth
            Rocket.
          </p>
          <Ul
            items={[
              "Bedrijf: Parashift Technologies B.V.",
              "Adres: World Trade Center, Prinses Margrietplantsoen 33, 2595 AM ’s-Gravenhage, Nederland.",
              "Vertegenwoordigd door: Shahnawaz Dhamankar, bestuurder",
            ]}
          />
        </Section>

        <Section title="2. Registratiegegevens">
          <Ul
            items={[
              "Kamer van Koophandel (KVK)-nummer: 42002389.",
              "Btw-identificatienummer (btw-id): NL869232186B01.",
            ]}
          />
        </Section>

        <Section title="3. Contactgegevens">
          <Ul
            items={[
              <>
                Verkoop en algemene vragen:{" "}
                <Mail email="sales@getgrowthrocket.com" />
              </>,
              <>
                Klantenondersteuning:{" "}
                <Mail email="support@getgrowthrocket.com" />
              </>,
              <>
                Telefoon: <Phone number="+31 85 744 4176" />
              </>,
              <>
                Website: <ExternalLink href="https://www.getgrowthrocket.com/" />
              </>,
            ]}
          />
        </Section>

        <Section title="4. Bedrijfsactiviteiten">
          <p>
            Growth Rocket biedt diensten op abonnementsbasis aan zakelijke
            klanten, waaronder:
          </p>
          <Ul
            items={[
              "Ontwikkeling en beheer van websites, het schrijven van websiteteksten en de productie van bedrijfspresentatievideo’s",
              "Websitehosting, onderhoud en technische updates",
              "Aanvraagformulieren, contactformulieren en het boeken van afspraken",
              "De Growth Rocket Hub voor het beheren van aanvragen, afspraken, klantcontacten, offertes, facturen en reviews. Het gekozen pakket, de tarieven, de dienstverleningsafspraken en de gebruiksrechten staan in het Klantcontract en de toepasselijke Algemene Voorwaarden.",
            ]}
          />
        </Section>

        <Section title="5. Verantwoordelijkheid voor deze website">
          <Ul
            items={[
              "Parashift Technologies B.V. is verantwoordelijk voor de eigen inhoud van deze website. De bestuurder is vermeld in onderdeel 1.",
            ]}
          />
        </Section>

        <Section title="6. Aansprakelijkheid voor de inhoud">
          <p>
            Wij streven ernaar de algemene informatie op deze website juist en
            actueel te houden. De informatie kan fouten bevatten of verouderd
            raken. Deze verklaring beperkt onze overeengekomen
            dienstverleningsverplichtingen niet en heeft geen voorrang op het
            Klantcontract, de Algemene Voorwaarden, de Verwerkersovereenkomst
            (DPA) of dwingendrechtelijke rechten. De aansprakelijkheid voor onze
            diensten wordt geregeld door de overeengekomen documenten, waaronder
            artikel 15 van de DPA zoals opgenomen in het Contract en de Algemene
            Voorwaarden.
          </p>
        </Section>

        <Section title="7. Aansprakelijkheid voor links">
          <p>
            Externe websites waarnaar deze website verwijst, worden beheerd door
            hun eigen aanbieders en hebben hun eigen inhoud en privacybeleid.
            Wij hebben geen zeggenschap over die websites. Dit sluit geen
            verantwoordelijkheid uit die het toepasselijke recht ons oplegt voor
            de links die wij aanbieden. Laat het ons weten als u denkt dat een
            link naar onrechtmatige inhoud verwijst.
          </p>
        </Section>

        <Section title="8. Intellectuele eigendom">
          <p>
            De inhoud, het ontwerp en de structuur van deze Growth
            Rocket-website zijn eigendom van Parashift Technologies B.V. of
            worden door haar onder licentie gebruikt, tenzij anders vermeld.
            Gebruik vereist toestemming, tenzij dit is toegestaan op grond van
            de wet of een toepasselijke licentie. Deze verklaring verandert
            niets aan de rechten van klanten op hun eigen inhoud, merkuitingen,
            domein of de definitieve websiteteksten en video die onder hun
            Klantcontract worden geleverd. Rechten op het Growth
            Rocket-platform, de websitecode, ontwerpsjablonen en
            backendsystemen volgen het overeengekomen Contract en de Algemene
            Voorwaarden, met inachtneming van dwingend recht.
          </p>
        </Section>

        <Section title="9. Toepasselijk recht">
          <p>
            Nederlands recht is van toepassing, met inachtneming van
            dwingendrechtelijke regels. Het Klantcontract en de Algemene
            Voorwaarden regelen de diensten en de afhandeling van geschillen.
            Deze pagina wijzigt die overeenkomsten niet en creëert geen
            afzonderlijke aansprakelijkheidslimiet.
          </p>
        </Section>

        <Section title="10. Contact">
          <p>
            Gebruik voor juridische of algemene vragen de onderstaande
            contactgegevens. Gebruik voor privacyverzoeken het contactadres in
            onze Privacyverklaring op{" "}
            <Link href="/nl/privacy-policy" className={LINK_CLASS}>
              https://legal.getgrowthrocket.com/nl/privacy-policy
            </Link>
            . Klachten over onze diensten kunt u sturen naar{" "}
            <Mail email="support@getgrowthrocket.com" /> tijdens onze
            ondersteuningstijden (maandag–vrijdag, 09:00–17:00 uur, tijdzone
            Europe/Amsterdam, met uitzondering van feestdagen). Wij bevestigen
            de ontvangst binnen 2 Werkdagen en streven ernaar binnen 5 Werkdagen
            te reageren. Als wij een klacht niet kunnen oplossen, legt onderdeel
            16 van onze Algemene Voorwaarden (
            <Link href="/nl/terms-and-conditions" className={LINK_CLASS}>
              https://legal.getgrowthrocket.com/nl/terms-and-conditions
            </Link>
            ) uit hoe geschillen worden afgehandeld.
          </p>
          <Ul
            items={[
              "Parashift Technologies B.V.",
              <>
                Verkoop en algemene vragen:{" "}
                <Mail email="sales@getgrowthrocket.com" />
              </>,
              <>
                Klantenondersteuning:{" "}
                <Mail email="support@getgrowthrocket.com" />
              </>,
              <>
                Telefoon: <Phone number="+31 85 744 4176" />
              </>,
            ]}
          />
        </Section>
      </LegalDocument>
    </main>
  );
}
