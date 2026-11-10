"use client";

import { useEffect } from "react";
import { lenisScrollTo } from "../../../components/LenisProvider";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Lenis keeps its own scroll position, so a bare window.scrollTo gets
    // overridden and the page opens wherever the designs grid was scrolled to.
    // Jump it (and the native position) to the top immediately.
    window.scrollTo(0, 0);
    lenisScrollTo(0, { immediate: true });
  }, []);

  return <>{children}</>;
}
