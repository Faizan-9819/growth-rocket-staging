import IndustryRoute, { industryMetadata } from "../IndustryRoute";
import { PROFESSIONAL_SERVICES } from "./data";

export const metadata = industryMetadata(PROFESSIONAL_SERVICES, "en");

export default function Page() {
  return <IndustryRoute page={PROFESSIONAL_SERVICES} locale="en" />;
}
