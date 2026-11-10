"use client";

import { Check, ChevronDown, Loader2 } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import ButtonF from "./ui/ButtonF";
import HoneypotField from "./ui/HoneypotField";
import { isLikelyBot } from "../lib/spam-guard";
import { useLanguage } from "../i18n/LanguageProvider";
import type { Translation } from "../i18n/config";

// `en` is the value submitted to the API (as `industry`), so it stays the
// same in both languages; only the visible label is translated.
const PARTNER_TYPES: Translation[] = [
  { en: "Agency / Service Provider", nl: "Bureau / dienstverlener" },
  { en: "Business Owner", nl: "Ondernemer" },
  { en: "Community Builder", nl: "Communitybouwer" },
  { en: "Consultant / Advisor", nl: "Consultant / adviseur" },
  { en: "Freelancer / Creator", nl: "Freelancer / creator" },
  { en: "Student", nl: "Student" },
  { en: "Other", nl: "Anders" },
];

const INITIAL = {
  fullName: "",
  email: "",
  country: "",
  business: "",
  partnerType: "",
  about: "",
  _hp: "",
};

export default function PartnerNetworkForm({
  onClose,
}: {
  onClose?: () => void;
}) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState(INITIAL);
  // When the form opened, for the spam time trap (lib/spam-guard).
  const startedAt = useRef(0);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (value: string) => {
    const valid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      value,
    );
    setEmailError(
      valid || !value
        ? ""
        : t({
            en: "Please enter a valid email address",
            nl: "Vul een geldig e-mailadres in",
          }),
    );
    return valid;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "email") validateEmail(value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // A bot (honeypot filled, or submitted within seconds) sees the normal
    // success message, but nothing is sent.
    if (isLikelyBot({ honeypot: formData._hp, startedAt: startedAt.current })) {
      setIsSuccess(true);
      return;
    }
    if (!validateEmail(formData.email)) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch(
        "https://api.getgrowthrocket.com/api/v1/public/tenants/growth-rocket/sites/growth-rocket/enquiries",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            serviceArea: formData.country,
            businessName: formData.business || undefined,
            industry: formData.partnerType,
            message: formData.about,
            source: "PARTNER_NETWORK",
            tags: ["Partner", "Network"],
          }),
        },
      );

      if (!res.ok)
        throw new Error(
          t({
            en: "Failed to submit. Please try again.",
            nl: "Versturen mislukt. Probeer het opnieuw.",
          }),
        );

      setIsSuccess(true);
      onClose?.();
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
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Check className="w-10 h-10 text-green-500" />
        </div>
        <p className="text-2xl font-semibold text-slate-800 mb-2">
          {t({ en: "Interest submitted!", nl: "Interesse verstuurd!" })}
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <HoneypotField
        value={formData._hp}
        onChange={(value) => setFormData((prev) => ({ ...prev, _hp: value }))}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* Full name */}
        <div className="space-y-1.5">
          <label
            htmlFor="pn-fullName"
            className="text-[13px] font-medium text-slate-700 ml-1"
          >
            {t({ en: "Full name", nl: "Volledige naam" })}
          </label>
          <input
            id="pn-fullName"
            required
            name="fullName"
            type="text"
            placeholder="Jane Doe"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full h-fit p-2 rounded-xl border border-slate-300 focus:border-[var(--color-violet-42)] focus:ring-2 focus:ring-[var(--color-violet-42)]/20 outline-none transition-all font-inter text-slate-700 placeholder:text-slate-400"
          />
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label
            htmlFor="pn-email"
            className="text-[13px] font-medium text-slate-700 ml-1"
          >
            {t({ en: "Email", nl: "E-mail" })}
          </label>
          <input
            id="pn-email"
            required
            name="email"
            type="email"
            placeholder="jane@company.com"
            value={formData.email}
            onChange={handleChange}
            className={`w-full h-fit p-2 rounded-xl border ${emailError ? "border-red-500" : "border-slate-300"} focus:border-[var(--color-violet-42)] focus:ring-2 focus:ring-[var(--color-violet-42)]/20 outline-none transition-all font-inter text-slate-700 placeholder:text-slate-400`}
          />
          {emailError && (
            <p className="text-red-500 text-[11px] font-medium ml-1">
              {emailError}
            </p>
          )}
        </div>

        {/* Country */}
        <div className="space-y-1.5">
          <label
            htmlFor="pn-country"
            className="text-[13px] font-medium text-slate-700 ml-1"
          >
            {t({ en: "Country", nl: "Land" })}
          </label>
          <input
            id="pn-country"
            required
            name="country"
            type="text"
            placeholder={t({ en: "e.g. Netherlands", nl: "bijv. Nederland" })}
            value={formData.country}
            onChange={handleChange}
            className="w-full h-fit p-2 rounded-xl border border-slate-300 focus:border-[var(--color-violet-42)] focus:ring-2 focus:ring-[var(--color-violet-42)]/20 outline-none transition-all font-inter text-slate-700 placeholder:text-slate-400"
          />
        </div>

        {/* Business / Organisation */}
        <div className="space-y-1.5">
          <label
            htmlFor="pn-business"
            className="text-[13px] font-medium text-slate-700 ml-1"
          >
            {t({ en: "Business / Organisation", nl: "Bedrijf / organisatie" })}
          </label>
          <input
            id="pn-business"
            name="business"
            type="text"
            placeholder={t({ en: "Optional", nl: "Optioneel" })}
            value={formData.business}
            onChange={handleChange}
            className="w-full h-fit p-2 rounded-xl border border-slate-300 focus:border-[var(--color-violet-42)] focus:ring-2 focus:ring-[var(--color-violet-42)]/20 outline-none transition-all font-inter text-slate-700 placeholder:text-slate-400"
          />
        </div>

        {/* Type of partner */}
        <div className="space-y-1.5 lg:col-span-2">
          <label
            htmlFor="pn-partnerType"
            className="text-[13px] font-medium text-slate-700 ml-1"
          >
            {t({ en: "Type of partner", nl: "Soort partner" })}
          </label>
          <div className="relative">
            <select
              id="pn-partnerType"
              required
              name="partnerType"
              value={formData.partnerType}
              onChange={handleChange}
              className="w-full h-[41.45px] py-1 pl-4 pr-10 rounded-xl border border-slate-300 focus:border-[var(--color-violet-42)] focus:ring-2 focus:ring-[var(--color-violet-42)]/20 outline-none transition-all font-inter text-slate-700 appearance-none cursor-pointer"
            >
              <option value="" disabled>
                {t({ en: "Select a category", nl: "Kies een categorie" })}
              </option>
              {PARTNER_TYPES.map((pt) => (
                <option key={pt.en} value={pt.en}>
                  {t(pt)}
                </option>
              ))}
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              size={18}
            />
          </div>
        </div>

        {/* About network / audience */}
        <div className="space-y-1.5 lg:col-span-2">
          <label
            htmlFor="pn-about"
            className="text-[13px] font-medium text-slate-700 ml-1"
          >
            {t({
              en: "Tell us about your network or audience",
              nl: "Vertel ons over je netwerk of doelgroep",
            })}
          </label>
          <textarea
            id="pn-about"
            required
            name="about"
            rows={4}
            placeholder={t({
              en: "A short description helps us tailor the conversation.",
              nl: "Een korte omschrijving helpt ons het gesprek af te stemmen.",
            })}
            value={formData.about}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[var(--color-violet-42)] focus:ring-2 focus:ring-[var(--color-violet-42)]/20 outline-none transition-all font-inter text-sm text-slate-700 placeholder:text-slate-400 resize-none"
          />
        </div>
      </div>

      {error && <p className="text-red-500 text-[13px] font-medium">{error}</p>}

      <ButtonF
        type="submit"
        disabled={isSubmitting}
        arrow={isSubmitting ? false : "right"}
        fullWidth
        className="mt-4"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <Loader2 className="animate-spin h-5 w-5 shrink-0" />
            {t({ en: "Submitting...", nl: "Versturen..." })}
          </span>
        ) : (
          t({ en: "Submit Interest", nl: "Interesse versturen" })
        )}
      </ButtonF>
    </form>
  );
}
