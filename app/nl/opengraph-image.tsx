import { renderShareImage } from "../lib/share-image";

export const alt =
  "Growth Rocket - Meer dan een website. Een compleet systeem voor jouw bedrijf.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderShareImage("nl");
}
