import IndustryRoute, { industryMetadata } from "../IndustryRoute";
import { CLEANING } from "./data";

export const metadata = industryMetadata(CLEANING, "en");

export default function Page() {
  return <IndustryRoute page={CLEANING} locale="en" />;
}
