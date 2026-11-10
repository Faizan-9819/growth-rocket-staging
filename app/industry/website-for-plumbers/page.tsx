import IndustryRoute, { industryMetadata } from "../IndustryRoute";
import { PLUMBERS } from "./data";

export const metadata = industryMetadata(PLUMBERS, "en");

export default function Page() {
  return <IndustryRoute page={PLUMBERS} locale="en" />;
}
