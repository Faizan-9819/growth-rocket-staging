"use client";

import { Globe, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { RevealGroup, RevealItem } from "../../features/FeatureReveal";
import LeadEnquiryForm from "../LeadEnquiryForm";
import HomeShell from "../sections/home2/HomeShell";
import ButtonF from "../ui/ButtonF";
import { CONTACT_INFO, phoneHref, whatsappHref } from "@/contact";
import { useContactPhone } from "../useContactPhone";

type ContactPageContentProps = {
  locale: "en" | "nl";
};

/* The hero intro is each page's meta description; the rest is the copy the
   page has always had. */
const COPY = {
  en: {
    title: "Contact",
    titleAccent: "Us",
    heroIntro:
      "Questions about Growth Rocket? Talk to our team about the package, setup and what suits your business. We’re happy to help, with no obligation.",
    intro: "Connect With Us",
    addressLabel: "Address",
    emailLabel: "Email",
    phoneLabel: "Phone",
    whatsappLabel: "WhatsApp",
    callLabel: "Call",
    followUsLabel: "Follow us",
    bookAppointmentLabel: "Book an Appointment",
    formLabel: "Let's Connect",
  },
  nl: {
    title: "Neem contact",
    titleAccent: "met ons op",
    heroIntro:
      "Vragen over Growth Rocket? Bespreek het pakket, de inrichting en wat bij je bedrijf past met ons team. We helpen je graag, helemaal vrijblijvend.",
    intro: "Neem contact met ons op",
    addressLabel: "Adres",
    emailLabel: "E-mail",
    phoneLabel: "Telefoon",
    whatsappLabel: "WhatsApp",
    callLabel: "Bellen",
    followUsLabel: "Volg ons",
    bookAppointmentLabel: "Maak een afspraak",
    formLabel: "Laten we kennismaken.",
  },
} as const;

const socialIcons: Record<string, IconType> = {
  Instagram: FaInstagram,
  LinkedIn: FaLinkedin,
  YouTube: FaYoutube,
  "X / Twitter": RiTwitterXFill,
};

const LINK =
  "break-words text-[#0a0516] underline decoration-[#0a051633] underline-offset-[4px] transition-colors hover:text-[#5b2dce] hover:decoration-current";

/* One row of the details column, after ManagedFold's numbered points: a lime
   disc, a Bricolage label, and the detail in body grey. */
function DetailRow({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <RevealItem
      as="article"
      className="flex items-start gap-[15px] border-t border-[#0a05161a] py-[20px] first:border-t-0 first:pt-0"
    >
      <span
        aria-hidden
        className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#e4fa65] text-[#0a0516]"
      >
        {icon}
      </span>
      <div className="min-w-0 pt-[2px]">
        <h3 className="font-bricolage text-[18px] leading-[1.3] font-bold tracking-[-0.035em] text-[#0a0516]">
          {label}
        </h3>
        <div className="mt-[4px] flex flex-col gap-[4px] font-sans text-[15px] leading-[1.55] text-[#625a70]">
          {children}
        </div>
      </div>
    </RevealItem>
  );
}

/**
 * /contact and /nl/contact, in the Features / Pricing palette: HomeShell's
 * rounded folds, an ink hero, then a silver fold with the contact details
 * beside the lead enquiry form on a white card.
 */
export default function ContactPageContent({
  locale,
}: ContactPageContentProps) {
  const copy = COPY[locale];
  // The call and WhatsApp number follow the visitor's country (see
  // PHONES in contact/phones.ts).
  const phone = useContactPhone();
  const openBookingForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-booking-form"));
    }
  };
  const addressLines =
    locale === "nl" ? CONTACT_INFO.addressLinesNl : CONTACT_INFO.addressLines;

  return (
    <main className="relative min-h-screen">
      <HomeShell>
        <section
          aria-labelledby="contact-heading"
          className="overflow-hidden rounded-[13px] bg-[#0a0516] py-[clamp(42px,5vw,64px)] text-white"
        >
          <RevealGroup eager className="fix">
            <RevealItem>
              <h1
                id="contact-heading"
                className="m-0 font-bricolage text-[clamp(38px,4.3vw,64px)] leading-[1.02] font-semibold tracking-[-0.055em] text-white"
              >
                {copy.title}{" "}
                <span className="text-[#e4fa65]">{copy.titleAccent}</span>
              </h1>
            </RevealItem>
            <RevealItem
              as="p"
              className="mt-[18px] max-w-[760px] font-sans text-[clamp(15px,1.25vw,18px)] leading-[1.6] text-[#c9c2d4]"
            >
              {copy.heroIntro}
            </RevealItem>
          </RevealGroup>
        </section>

        <section
          aria-labelledby="contact-details-heading"
          className="rounded-[13px] bg-[#eeeeee] py-[clamp(46px,5vw,68px)] text-[#0a0516] max-[600px]:py-[38px]"
        >
          <div className="fix grid grid-cols-1 items-start gap-[clamp(34px,5vw,72px)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            <RevealGroup>
              <RevealItem>
                <h2
                  id="contact-details-heading"
                  className="font-bricolage text-[clamp(30px,2.8vw,44px)] leading-[1.02] font-bold tracking-[-0.05em]"
                >
                  {copy.intro}
                </h2>
              </RevealItem>

              <div className="mt-[26px] flex flex-col">
                <DetailRow
                  icon={<MapPin size={18} strokeWidth={2} />}
                  label={copy.addressLabel}
                >
                  <address className="not-italic">
                    {addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </DetailRow>

                <DetailRow
                  icon={<Mail size={18} strokeWidth={2} />}
                  label={copy.emailLabel}
                >
                  <span>
                    <span className="font-semibold text-[#0a0516]">
                      Sales:
                    </span>{" "}
                    <a
                      href={`mailto:${CONTACT_INFO.emails[0]}`}
                      className={LINK}
                    >
                      {CONTACT_INFO.emails[0]}
                    </a>
                  </span>
                  <span>
                    <span className="font-semibold text-[#0a0516]">
                      Support:
                    </span>{" "}
                    <a
                      href={`mailto:${CONTACT_INFO.emails[1]}`}
                      className={LINK}
                    >
                      {CONTACT_INFO.emails[1]}
                    </a>
                  </span>
                </DetailRow>

                <DetailRow
                  icon={<Phone size={18} strokeWidth={2} />}
                  label={copy.phoneLabel}
                >
                  <a
                    href={whatsappHref(phone)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex w-fit items-center gap-[8px] ${LINK}`}
                  >
                    <FaWhatsapp aria-hidden className="h-4 w-4 shrink-0" />
                    <span className="sr-only">{copy.whatsappLabel}: </span>
                    {phone}
                  </a>
                  <a
                    href={phoneHref(phone)}
                    className={`inline-flex w-fit items-center gap-[8px] ${LINK}`}
                  >
                    <Phone aria-hidden size={16} className="shrink-0" />
                    <span className="sr-only">{copy.callLabel}: </span>
                    {phone}
                  </a>
                </DetailRow>

                <DetailRow
                  icon={<Globe size={18} strokeWidth={2} />}
                  label={copy.followUsLabel}
                >
                  <div className="mt-[4px] flex flex-wrap items-center gap-[8px]">
                    {CONTACT_INFO.socialLinks
                      .filter((s) => s.label !== "WhatsApp")
                      .map((social) => {
                        const Icon = socialIcons[social.label];
                        if (!Icon) return null;
                        return (
                          <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-[#0a0516] transition-colors duration-200 hover:bg-[#5b2dce] hover:text-white"
                          >
                            <Icon size={18} />
                            <span className="sr-only">{social.label}</span>
                          </a>
                        );
                      })}
                  </div>
                </DetailRow>
              </div>

              <RevealItem className="mt-[26px]">
                {/* Opens the booking form StickyActions listens for. */}
                <ButtonF
                  variant="violet"
                  size="lg"
                  arrowSize={17}
                  onClick={openBookingForm}
                  className="w-full justify-between text-[14px] sm:w-fit md:text-[15px]"
                >
                  {copy.bookAppointmentLabel}
                </ButtonF>
              </RevealItem>
            </RevealGroup>

            <RevealGroup delay={0.08}>
              <RevealItem
                media
                className="rounded-[13px] bg-white p-[clamp(22px,3vw,40px)]"
              >
                <h2 className="mb-[20px] font-bricolage text-[clamp(26px,2.4vw,36px)] leading-[1.05] font-bold tracking-[-0.045em] text-[#0a0516]">
                  {copy.formLabel}
                </h2>
                <LeadEnquiryForm
                  idPrefix={`contact-${locale}`}
                  submitLabel={{ en: "Submit", nl: "Versturen" }}
                />
              </RevealItem>
            </RevealGroup>
          </div>
        </section>
      </HomeShell>
    </main>
  );
}
