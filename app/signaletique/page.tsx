import ServicePage from "../components/ServicePage";
import { services } from "@/lib/services";
import { pageMetadata } from "@/lib/site";
const service = services.find((s) => s.slug === "signaletique")!;
export const metadata = pageMetadata(
  service.title,
  service.description,
  "/signaletique",
);
export default function Page() {
  return <ServicePage slug="signaletique" />;
}
