import ServicePage from "../components/ServicePage";
import { services } from "@/lib/services";
import { pageMetadata } from "@/lib/site";
const service = services.find((s) => s.slug === "lettres-decoupees")!;
export const metadata = pageMetadata(
  service.title,
  service.description,
  "/lettres-decoupees",
);
export default function Page() {
  return <ServicePage slug="lettres-decoupees" />;
}
