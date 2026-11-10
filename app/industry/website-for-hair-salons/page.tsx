import IndustryRoute, { industryMetadata } from "../IndustryRoute";
import { HAIR_SALONS } from "./data";

export const metadata = industryMetadata(HAIR_SALONS, "en");

export default function Page() {
  return <IndustryRoute page={HAIR_SALONS} locale="en" />;
}
