import { pageMetadata } from "@/lib/site";
import { communes } from "@/lib/communes";
import { CommuneView } from "@/app/components/CommuneView";
const data = communes.find((c) => c.slug === "rosult")!;
export const metadata = pageMetadata(
  data.title,
  data.description,
  "/enseigne-rosult",
);
export default function Page() {
  return <CommuneView data={data} />;
}
