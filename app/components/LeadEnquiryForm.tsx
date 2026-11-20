"use client";

import { Check, ChevronDown, Loader2 } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { useLanguage } from "../i18n/LanguageProvider";
import type { Translation } from "../i18n/config";
import ButtonF from "./ui/ButtonF";
import HoneypotField from "./ui/HoneypotField";
import { fireLeadConversion } from "./Analytics";
import { isLikelyBot } from "../lib/spam-guard";
import { CONTACT_INFO } from "@/contact";

type LeadEnquiryFormProps = {
  idPrefix?: string;
  onSuccessComplete?: () => void;
  className?: string;
  submitLabel?: Translation;
  /* Inside a scrolling modal: pin the submit button to the bottom of the
     scroll area, with a fade above it while more fields sit below. */
  stickySubmit?: boolean;
  /* 1 keeps every field stacked at every width (a narrow side card);
     2, the default, pairs them up from lg. */
  columns?: 1 | 2;
  /* Prepended to the message sent (e.g. which offer it came from). */
  messagePrefix?: string;
  /* Appended to the request's tags. */
  extraTags?: string[];
};

const INDUSTRIES: { value: string; label: Translation }[] = [
  {
    value: "Beauty Salon / Spa",
    label: { en: "Beauty Salon / Spa", nl: "Schoonheidssalon / Spa" },
  },
  { value: "Carpenter", label: { en: "Carpenter", nl: "Timmerman" } },
  {
    value: "Construction Contractor",
    label: { en: "Construction Contractor", nl: "Aannemer" },
  },
  {
    value: "EV Charging Installer",
    label: { en: "EV Charging Installer", nl: "Laadpaal-installateur" },
  },
  { value: "Electrician", label: { en: "Electrician", nl: "Elektricien" } },
  {
    value: "Fitness Trainer / Gym",
    label: { en: "Fitness Trainer / Gym", nl: "Fitnesstrainer / Sportschool" },
  },
  {
    value: "Hair Salon / Barber",
    label: { en: "Hair Salon / Barber", nl: "Kapsalon / Barbier" },
  },
  { value: "Handyman", label: { en: "Handyman", nl: "Klusjesman" } },
  {
    value: "HVAC / Heating Technician",
    label: { en: "HVAC / Heating Technician", nl: "HVAC / Verwarmingsmonteur" },
  },
  {
    value: "Massage Therapist",
    label: { en: "Massage Therapist", nl: "Massagetherapeut" },
  },
  { value: "Nail Salon", label: { en: "Nail Salon", nl: "Nagelsalon" } },
  { value: "Painter", label: { en: "Painter", nl: "Schilder" } },
  { value: "Plumber", label: { en: "Plumber", nl: "Loodgieter" } },
  { value: "Roofer", label: { en: "Roofer", nl: "Dakdekker" } },
  {
    value: "Solar Panel Installer",
    label: { en: "Solar Panel Installer", nl: "Zonnepaneel-installateur" },
  },
  { value: "Tiler", label: { en: "Tiler", nl: "Tegelzetter" } },
  { value: "Other", label: { en: "Other", nl: "Anders" } },
];

const REGEX = {
  phone: /^\+?[0-9\s\-()]{7,20}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  url: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
};

const INITIAL_FORM_DATA = {
  name: "",
  phone: "",
  email: "",
  businessName: "",
  industry: "",
  industryOther: "",
  serviceArea: "",
  hasWebsite: "No",
  websiteUrl: "",
  message: "",
  _hp: "",
};

const INITIAL_FIELD_ERRORS = {
  phone: "",
  email: "",
  websiteUrl: "",
};

export default function LeadEnquiryForm({
  idPrefix = "lead",
  onSuccessComplete,
  className,
  submitLabel,
  stickySubmit = false,
  columns = 2,
  messagePrefix,
  extraTags,
}: LeadEnquiryFormProps) {
  const twoCols = columns === 2;
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  // When the form opened, for the spam time trap (lib/spam-guard).
  const startedAt = useRef(0);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);
  const [fieldErrors, setFieldErrors] = useState(INITIAL_FIELD_ERRORS);

  /* The marker after the last field is clipped by the modal's scroll area
     until the visitor reaches the end, so while it is out of view there are
     more fields below the pinned button and the fade shows. */
  const fieldsEndRef = useRef<HTMLDivElement>(null);
  const [atFieldsEnd, setAtFieldsEnd] = useState(true);
  useEffect(() => {
    const el = fieldsEndRef.current;
    if (!stickySubmit || !el) return;
    const io = new IntersectionObserver(([entry]) =>
      setAtFieldsEnd(entry.isIntersecting),
    );
    io.observe(el);
    return () => io.disconnect();
  }, [stickySubmit, isSuccess]);

  const fieldId = (name: string) => `${idPrefix}-${name}`;

  const validateField = (name: string, value: string) => {
    let nextError = "";
    if (name === "phone" && value) {
      if (value === "+") return true;
      if (!REGEX.phone.test(value)) {
        nextError = t({
          en: "Please enter a valid international phone number",
          nl: "Voer een geldig internationaal telefoonnummer in",
        });
      }
    }
    if (name === "email" && value && !REGEX.email.test(value)) {
      nextError = t({
        en: "Please enter a valid email address",
        nl: "Voer een geldig e-mailadres in",
      });
    }
    if (name === "websiteUrl" && value && !REGEX.url.test(value)) {
      nextError = t({
        en: "Please enter a valid website URL",
        nl: "Voer een geldige website-URL in",
      });
    }
    setFieldErrors((prev) => ({ ...prev, [name]: nextError }));
    return nextError === "";
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (["phone", "email", "websiteUrl"].includes(name)) {
      validateField(name, value);
    }
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_DATA);
    setFieldErrors(INITIAL_FIELD_ERRORS);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // A bot (honeypot filled, or submitted within seconds) sees the normal
    // success message, but nothing is sent.
    if (isLikelyBot({ honeypot: formData._hp, startedAt: startedAt.current })) {
      setIsSuccess(true);
      return;
    }

    const isPhoneValid = validateField("phone", formData.phone);
    const isEmailValid = validateField("email", formData.email);
    const isUrlValid =
      formData.hasWebsite === "Yes"
        ? validateField("websiteUrl", formData.websiteUrl)
        : true;

    if (!isPhoneValid || !isEmailValid || !isUrlValid) return;

    setIsSubmitting(true);
    setError(null);

    const tenantSlug = "growth-rocket";
    const siteSlug = "growth-rocket";

    try {
      const response = await fetch(
        `https://api.getgrowthrocket.com/api/v1/public/tenants/${tenantSlug}/sites/${siteSlug}/enquiries`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            businessName: formData.businessName,
            industry: formData.industry,
            industryOther:
              formData.industry === "Other"
                ? formData.industryOther
                : undefined,
            serviceArea: formData.serviceArea,
            hasWebsite: formData.hasWebsite === "Yes",
            websiteUrl:
              formData.hasWebsite === "Yes" ? formData.websiteUrl : undefined,
            message: messagePrefix
              ? `${messagePrefix}\n\n${formData.message}`
              : formData.message,
            source: "PUBLIC_ENQUIRY",
            tags: ["Website", "Enquiry", ...(extraTags ?? [])],
          }),
        },
      );

      if (!response.ok) {
        throw new Error(
          t({
            en: "Failed to submit enquiry. Please try again.",
            nl: "Verzenden van de aanvraag is mislukt. Probeer het opnieuw.",
          }),
        );
      }

      // Google Ads conversion — sent only with marketing consent.
      fireLeadConversion();
      setIsSuccess(true);
      onSuccessComplete?.();
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : t({ en: "Something went wrong.", nl: "Er ging iets mis." }),
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="w-20 h-20 bg-[#e4fa65] rounded-full flex items-center justify-center mb-4">
          <Check className="w-10 h-10 text-[#5b2dce]" />
        </div>
        <p className="font-bricolage text-2xl font-semibold tracking-[-0.03em] text-[#0a0516] mb-2">
          {t({ en: "Message Sent!", nl: "Bericht verzonden!" })}
        </p>
        <p className="font-sans text-[#625a70]">
          {t({
            en: "We'll get back to you shortly.",
            nl: "We nemen zo snel mogelijk contact met je op.",
          })}
        </p>
      </div>
    );
  }

  return (
    <form
      className={["space-y-2", className].filter(Boolean).join(" ")}
      onSubmit={handleSubmit}
    >
      <HoneypotField
        value={formData._hp}
        onChange={(value) => setFormData((prev) => ({ ...prev, _hp: value }))}
      />
      <div
        className={
          twoCols ? "grid grid-cols-1 lg:grid-cols-2 gap-3" : "grid grid-cols-1 gap-3"
        }
      >
        <div className="space-y-1.5">
          <label
            htmlFor={fieldId("name")}
            className="font-sans text-[13px] font-medium text-[#554c64] ml-1"
          >
            {t({ en: "Full Name", nl: "Volledige naam" })}
          </label>
          <input
            id={fieldId("name")}
            required
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full h-fit p-2 rounded-xl border border-[#ded8e7] focus:border-[#5b2dce] focus:ring-2 focus:ring-[#5b2dce]/20 outline-none transition-all font-sans text-[#0a0516]"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor={fieldId("phone")}
            className="font-sans text-[13px] font-medium text-[#554c64] ml-1"
          >
            {t({ en: "Phone Number", nl: "Telefoonnummer" })}
          </label>
          <input
            id={fieldId("phone")}
            required
            name="phone"
            type="tel"
            placeholder={CONTACT_INFO.phone}
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full h-fit p-2 rounded-xl border ${fieldErrors.phone ? "border-red-500" : "border-[#ded8e7]"} focus:border-[#5b2dce] focus:ring-2 focus:ring-[#5b2dce]/20 outline-none transition-all font-sans text-[#0a0516] placeholder:text-[#8b8398]`}
          />
          {fieldErrors.phone && (
            <p className="text-red-500 text-[11px] font-medium ml-1">
              {fieldErrors.phone}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor={fieldId("email")}
            className="font-sans text-[13px] font-medium text-[#554c64] ml-1"
          >
            {t({ en: "Email Address", nl: "E-mailadres" })}
          </label>
          <input
            id={fieldId("email")}
            required
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full h-fit p-2 rounded-xl border ${fieldErrors.email ? "border-red-500" : "border-[#ded8e7]"} focus:border-[#5b2dce] focus:ring-2 focus:ring-[#5b2dce]/20 outline-none transition-all font-sans text-[#0a0516]`}
          />
          {fieldErrors.email && (
            <p className="text-red-500 text-[11px] font-medium ml-1">
              {fieldErrors.email}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor={fieldId("businessName")}
            className="font-sans text-[13px] font-medium text-[#554c64] ml-1"
          >
            {t({ en: "Business Name", nl: "Bedrijfsnaam" })}
          </label>
          <input
            id={fieldId("businessName")}
            required
            name="businessName"
            type="text"
            value={formData.businessName}
            onChange={handleInputChange}
            className="w-full h-fit p-2 rounded-xl border border-[#ded8e7] focus:border-[#5b2dce] focus:ring-2 focus:ring-[#5b2dce]/20 outline-none transition-all font-sans text-[#0a0516]"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor={fieldId("industry")}
            className="font-sans text-[13px] font-medium text-[#554c64] ml-1"
          >
            {t({
              en: "Type of Work / Industry",
              nl: " Type werk / branche",
            })}
          </label>
          <div className="relative">
            <select
              id={fieldId("industry")}
              required
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
              className="w-full h-[41.45px] py-1 pl-4 pr-10 rounded-xl border border-[#ded8e7] focus:border-[#5b2dce] focus:ring-2 focus:ring-[#5b2dce]/20 outline-none transition-all font-sans text-[#0a0516] appearance-none cursor-pointer"
            >
              <option value="" disabled>
                {t({ en: "Select Industry", nl: "Kies een branche" })}
              </option>
              {INDUSTRIES.map((ind) => (
                <option key={ind.value} value={ind.value}>
                  {t(ind.label)}
                </option>
              ))}
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8b8398] pointer-events-none"
              size={18}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor={fieldId("serviceArea")}
            className="font-sans text-[13px] font-medium text-[#554c64] ml-1"
          >
            {t({
              en: "Service Area / Location",
              nl: "Werkgebied / Locatie",
            })}
          </label>
          <input
            id={fieldId("serviceArea")}
            required
            name="serviceArea"
            type="text"
            value={formData.serviceArea}
            onChange={handleInputChange}
            className="w-full h-fit p-2 rounded-xl border border-[#ded8e7] focus:border-[#5b2dce] focus:ring-2 focus:ring-[#5b2dce]/20 outline-none transition-all font-sans text-[#0a0516]"
          />
        </div>

        {formData.industry === "Other" && (
          <div className="space-y-1.5">
            <label
              htmlFor={fieldId("industryOther")}
              className="font-sans text-[13px] font-medium text-[#554c64] ml-1"
            >
              {t({ en: "Please specify", nl: "Specificeer" })}
            </label>
            <input
              id={fieldId("industryOther")}
              required
              name="industryOther"
              type="text"
              value={formData.industryOther}
              onChange={handleInputChange}
              className="w-full h-fit p-2 rounded-xl border border-[#ded8e7] focus:border-[#5b2dce] focus:ring-2 focus:ring-[#5b2dce]/20 outline-none transition-all font-sans text-[#0a0516]"
            />
          </div>
        )}

        <fieldset
          className={
            twoCols
              ? "space-y-2 lg:space-y-0 lg:col-span-2 lg:flex lg:gap-5 lg:my-1 lg:items-center pt-1"
              : "space-y-2 pt-1"
          }
        >
          <legend className="font-sans text-[13px] font-medium text-[#554c64] ml-1 mb-0">
            {t({
              en: "Do you currently have a website?",
              nl: "Heb je op dit moment een website?",
            })}
          </legend>
          <div className={twoCols ? "flex gap-4 lg:mt-0 mt-2" : "flex gap-4 mt-2"}>
            {[
              { value: "Yes", label: { en: "Yes", nl: "Ja" } },
              { value: "No", label: { en: "No", nl: "Nee" } },
            ].map((opt) => (
              <label
                key={opt.value}
                className="flex items-center gap-1 cursor-pointer group"
              >
                <div className="relative flex items-center justify-center">
                  <input
                    type="radio"
                    name="hasWebsite"
                    value={opt.value}
                    checked={formData.hasWebsite === opt.value}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded-full border-2 transition-all ${
                      formData.hasWebsite === opt.value
                        ? "border-[#5b2dce] bg-[#5b2dce]"
                        : "border-[#ded8e7] group-hover:border-[#b9a6f0]"
                    }`}
                  />
                  {formData.hasWebsite === opt.value && (
                    <div className="absolute w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
                <span className="font-sans text-sm text-[#625a70]">
                  {t(opt.label)}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        {formData.hasWebsite === "Yes" && (
          <div className="space-y-1.5">
            <label
              htmlFor={fieldId("websiteUrl")}
              className="font-sans text-[13px] font-medium text-[#554c64] ml-1"
            >
              {t({ en: "Website URL", nl: "Website-URL" })}
            </label>
            <input
              id={fieldId("websiteUrl")}
              required
              name="websiteUrl"
              type="text"
              value={formData.websiteUrl}
              onChange={handleInputChange}
              className={`w-full h-fit p-2 rounded-xl border ${fieldErrors.websiteUrl ? "border-red-500" : "border-[#ded8e7]"} focus:border-[#5b2dce] focus:ring-2 focus:ring-[#5b2dce]/20 outline-none transition-all font-sans text-[#0a0516]`}
            />
            {fieldErrors.websiteUrl && (
              <p className="text-red-500 text-[11px] font-medium ml-1">
                {fieldErrors.websiteUrl}
              </p>
            )}
          </div>
        )}

        <div className={twoCols ? "space-y-1.5 lg:col-span-2" : "space-y-1.5"}>
          <label
            htmlFor={fieldId("message")}
            className="font-sans text-[13px] font-medium text-[#554c64] ml-1"
          >
            {t({
              en: "Message (Optional)",
              nl: "Bericht (optioneel)",
            })}
          </label>
          <textarea
            id={fieldId("message")}
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-[#ded8e7] focus:border-[#5b2dce] focus:ring-2 focus:ring-[#5b2dce]/20 outline-none transition-all font-sans text-sm text-[#0a0516] resize-none"
          />
        </div>
      </div>

      {stickySubmit && <div ref={fieldsEndRef} aria-hidden className="h-px" />}

      <div
        className={
          stickySubmit ? "sticky bottom-0 z-10 bg-white pt-4 pb-6" : undefined
        }
      >
        {stickySubmit && (
          <div
            aria-hidden
            className={`pointer-events-none absolute inset-x-0 bottom-full h-10 bg-gradient-to-t from-white to-transparent transition-opacity duration-200 ${
              atFieldsEnd ? "opacity-0" : "opacity-100"
            }`}
          />
        )}

        {error && (
          <p className="mb-2 text-red-500 text-[13px] font-medium">{error}</p>
        )}

        {/* The navbar's "Start with Growth Rocket" pill: violet, fully rounded,
            lime on hover, with its arrow. Taller here as the form's one action.
            label={false}: the spinner and its text are two flex items. */}
        <ButtonF
          variant="violet"
          size="custom"
          disabled={isSubmitting}
          type="submit"
          fullWidth
          arrow={isSubmitting ? false : "up-right"}
          label={false}
          className={`${stickySubmit ? "" : "mt-4"} flex h-[52px] justify-center gap-[9px] px-[18px] text-[15px] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-[#5b2dce] disabled:hover:text-white`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin h-5 w-5 shrink-0" />
              <span>{t({ en: "Submitting...", nl: "Versturen..." })}</span>
            </>
          ) : (
            <span>
              {t(
                submitLabel ?? {
                  en: "Submit Enquiry",
                  nl: "Aanvraag versturen",
                },
              )}
            </span>
          )}
        </ButtonF>
      </div>
    </form>
  );
}
