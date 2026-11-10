"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { useLanguage } from "../i18n/LanguageProvider";
import LeadEnquiryForm from "./LeadEnquiryForm";
import { lenisStart, lenisStop } from "./LenisProvider";

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadForm({ isOpen, onClose }: LeadFormProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (!isOpen) return;

    lenisStop();
    document.documentElement.style.overflow = "hidden"; // <html>, not <body>: see globals.css
    return () => {
      document.documentElement.style.overflow = "";
      lenisStart();
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="lead-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-[var(--color-haiti)]/40 backdrop-blur-sm"
          />

          <div
            key="lead-modal"
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="relative w-full max-w-[640px] bg-white rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[95dvh]"
            >
              {/* Header band in the site violet (#5b2dce, the navbar CTA's
                  fill) with a Bricolage title; the form below stays white. */}
              <div className="flex w-full shrink-0 justify-between items-center px-6 lg:px-10 py-5 bg-[#5b2dce] sticky top-0 z-10">
                <h2 className="m-0 font-bricolage font-semibold text-[clamp(24px,4vw,28px)] leading-[1.15] tracking-[-0.03em] text-white">
                  {t({ en: "Let's connect", nl: "Laten we kennismaken" })}
                </h2>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label={t({ en: "Close form", nl: "Formulier sluiten" })}
                  className="-m-2 p-2 rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
                >
                  <X size={24} />
                </button>
              </div>

              <div
                className="overflow-y-auto px-6 lg:px-10 pt-5 custom-scrollbar"
                data-lenis-prevent
              >
                {/* No `onSuccessComplete={onClose}`: the thank-you message
                    stays up until the visitor closes the modal, as in
                    BookingForm. The modal unmounts on close, so the form is
                    fresh the next time it opens. Only the fields scroll; the
                    submit button stays pinned below them. */}
                <LeadEnquiryForm idPrefix="lead-modal" stickySubmit />
              </div>
            </motion.div>
          </div>

          <style jsx global>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: transparent;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #b9a6f0;
              border-radius: 999px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #5b2dce;
            }
            .custom-scrollbar {
              scrollbar-width: thin;
              scrollbar-color: #b9a6f0 transparent;
            }
          `}</style>
        </>
      )}
    </AnimatePresence>
  );
}
