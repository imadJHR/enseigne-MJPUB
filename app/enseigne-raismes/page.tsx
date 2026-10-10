import { pageMetadata } from "@/lib/site";
import { communes } from "@/lib/communes";
import { CommuneView } from "@/app/components/CommuneView";
const data = communes.find((c) => c.slug === "raismes")!;
export const metadata = pageMetadata(
  data.title,
  data.description,
  "/enseigne-raismes",
);
export default function Page() {
  return <CommuneView data={data} />;
}
