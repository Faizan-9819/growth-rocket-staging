import { permanentRedirect } from "next/navigation";
import { DESIGNS_BASE } from "./design-routes";

/** The listing moved to /design — send the old URL there. */
export default function DesignsRedirect() {
  permanentRedirect(DESIGNS_BASE.en);
}
