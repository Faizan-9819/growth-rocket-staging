import IndustryRoute, { industryMetadata } from "../IndustryRoute";
import { HEALTHCARE } from "./data";

export const metadata = industryMetadata(HEALTHCARE, "en");

export default function Page() {
  return <IndustryRoute page={HEALTHCARE} locale="en" />;
}
