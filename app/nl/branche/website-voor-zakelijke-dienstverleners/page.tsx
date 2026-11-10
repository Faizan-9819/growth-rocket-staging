import IndustryRoute, { industryMetadata } from "@/app/industry/IndustryRoute";
import { PROFESSIONAL_SERVICES } from "@/app/industry/website-for-professional-services/data";

/* The same page as /industry/website-for-professional-services, with its Dutch copy. */
export const metadata = industryMetadata(PROFESSIONAL_SERVICES, "nl");

export default function Page() {
  return <IndustryRoute page={PROFESSIONAL_SERVICES} locale="nl" />;
}
