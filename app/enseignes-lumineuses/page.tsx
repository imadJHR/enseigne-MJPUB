import ServicePage from "../components/ServicePage";
import { services } from "@/lib/services";
import { pageMetadata } from "@/lib/site";
const service = services.find((s) => s.slug === "enseignes-lumineuses")!;
export const metadata = pageMetadata(
  service.title,
  service.description,
  "/enseignes-lumineuses",
);
export default function Page() {
  return <ServicePage slug="enseignes-lumineuses" />;
}
