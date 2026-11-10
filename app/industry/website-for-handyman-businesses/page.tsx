import IndustryRoute, { industryMetadata } from "../IndustryRoute";
import { HANDYMAN } from "./data";

export const metadata = industryMetadata(HANDYMAN, "en");

export default function Page() {
  return <IndustryRoute page={HANDYMAN} locale="en" />;
}
