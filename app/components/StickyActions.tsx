"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import BookingForm from "./BookingForm";
import LeadForm from "./LeadForm";
import PartnerForm from "./PartnerForm";
import { useLanguage } from "../i18n/LanguageProvider";

/* A link can open a form straight away with `?form=` — on any page, in
   either language, e.g. /pricing?form=lead-enquiry or /nl?form=appointment
   (for ads, emails, QR codes):
     lead-enquiry → the lead enquiry form
     appointment  → the appointment (booking) form */
const FORM_QUERY = "form";

/**
 * Reads `?form=` and opens the matching form, on load and whenever the query
 * changes. useSearchParams makes this its own small client-rendered piece
 * (it sits in a Suspense boundary), so every page around it is still
 * prerendered.
 */
function FormFromQuery({
  onLead,
  onBooking,
}: {
  onLead: () => void;
  onBooking: () => void;
}) {
  const form = useSearchParams().get(FORM_QUERY);
  useEffect(() => {
    if (form === "lead-enquiry") onLead();
    else if (form === "appointment") onBooking();
  }, [form, onLead, onBooking]);
  return null;
}

/** Drops `?form=` from the address bar once its form is closed, so a refresh
    or the back button doesn't open it again. */
function clearFormQuery() {
  const url = new URL(window.location.href);
  if (!url.searchParams.has(FORM_QUERY)) return;
  url.searchParams.delete(FORM_QUERY);
  window.history.replaceState(null, "", url.pathname + url.search + url.hash);
}

export default function StickyActions() {
  const { t } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);

  const openBooking = useCallback(() => {
    setIsLeadOpen(false);
    setIsPartnerOpen(false);
    setIsBookingOpen(true);
  }, []);

  const openLead = useCallback(() => {
    setIsBookingOpen(false);
    setIsPartnerOpen(false);
    setIsLeadOpen(true);
  }, []);

  const openPartner = useCallback(() => {
    setIsBookingOpen(false);
    setIsLeadOpen(false);
    setIsPartnerOpen(true);
  }, []);

  // Listen for custom events to trigger modals from other components
  useEffect(() => {
    const handleOpenLead = () => openLead();
    const handleOpenBooking = () => openBooking();
    const handleOpenPartner = () => openPartner();

    window.addEventListener("open-lead-form", handleOpenLead);
    window.addEventListener("open-booking-form", handleOpenBooking);
    window.addEventListener("open-partner-form", handleOpenPartner);

    return () => {
      window.removeEventListener("open-lead-form", handleOpenLead);
      window.removeEventListener("open-booking-form", handleOpenBooking);
      window.removeEventListener("open-partner-form", handleOpenPartner);
    };
  }, [openLead, openBooking, openPartner]);

  /* The bars sit above the form modals (z-1000 against their 101), so while a
     form is open they would cover its bottom edge — on a short phone, the
     form's own Back / Continue buttons. They also only open forms, so they
     step aside until it closes. */
  const anyFormOpen = isBookingOpen || isLeadOpen || isPartnerOpen;

  /* The cookie banner and WhatsApp FAB (CookieConsent) sit above the modals
     too, and would cover a form's submit button; this flag on <html> has them
     step aside the same way until the form closes. */
  useEffect(() => {
    const root = document.documentElement;
    if (anyFormOpen) root.setAttribute("data-form-open", "");
    else root.removeAttribute("data-form-open");
  }, [anyFormOpen]);

  return (
    <>
      {/* Desktop Sticky Buttons — in the home2 palette rather than the old
          magenta gradient: "Book an Appointment" violet #5b2dce on white,
          "Start Now" deep #0a0516 with lime #e4fa65 text. Colours hold on
          hover; the only hover is the slight grow. */}
      {!anyFormOpen && (
      <div className="gr-sticky-actions hidden lg:flex flex-col gap-6 fixed right-0 top-1/2 -translate-y-1/2 z-[1000]">
        <button
          onClick={openBooking}
          className="cursor-pointer rounded-r-[10px] bg-[#5b2dce] px-[12px] py-[10px] font-sans text-[15px] font-semibold tracking-wide text-white shadow-lg transition-all -rotate-180 [writing-mode:vertical-rl] hover:scale-105"
        >
          {t({ en: "Book an Appointment", nl: "Maak een afspraak" })}
        </button>
        <button
          onClick={openLead}
          className="cursor-pointer rounded-r-[10px] bg-[#0a0516] px-[12px] py-[10px] font-sans text-[15px] font-semibold tracking-wide text-[#e4fa65] shadow-lg transition-all -rotate-180 [writing-mode:vertical-rl] hover:scale-105"
        >
          {t({ en: "Start Now", nl: "Start nu" })}
        </button>
      </div>
      )}

      {/* Mobile Bottom Bar — same pairing as the desktop tabs. */}
      {!anyFormOpen && (
      <div className="gr-sticky-actions lg:hidden fixed bottom-0 left-0 right-0 z-[1000] flex bg-white/80 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <button
          onClick={openBooking}
          className="flex h-[52px] flex-1 items-center justify-center bg-[#5b2dce] font-sans text-[15px] font-semibold text-white"
        >
          {t({ en: "Book an Appointment", nl: "Maak een afspraak" })}
        </button>
        <button
          onClick={openLead}
          className="flex h-[52px] flex-1 items-center justify-center bg-[#0a0516] font-sans text-[15px] font-semibold text-[#e4fa65]"
        >
          {t({ en: "Start Now", nl: "Start nu" })}
        </button>
      </div>
      )}

      <Suspense fallback={null}>
        <FormFromQuery onLead={openLead} onBooking={openBooking} />
      </Suspense>

      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => {
          setIsBookingOpen(false);
          clearFormQuery();
        }}
      />
      <LeadForm
        isOpen={isLeadOpen}
        onClose={() => {
          setIsLeadOpen(false);
          clearFormQuery();
        }}
      />
      <PartnerForm
        isOpen={isPartnerOpen}
        onClose={() => setIsPartnerOpen(false)}
      />
    </>
  );
}
