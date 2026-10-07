import { pageMetadata } from "@/lib/site";
import { Breadcrumbs, PageIntro, CTA } from "@/app/components/SiteUI";
import AccessoryPurchase from "./AccessoryPurchase";
export const metadata = pageMetadata(
  "Accessoires et fixations pour vos enseignes",
  "Préparez votre installation avec les accessoires MJ PUB. Découvrez le lot EASYFIX blanc et demandez conseil pour choisir une fixation adaptée.",
  "/accessoires",
);
export default function AccessoriesPage() {
  return (
    <>
      <div className="container page-content">
        <Breadcrumbs items={[{ name: "Accessoires" }]} />
        <PageIntro
          eyebrow="Les détails de votre installation"
          title="Une fixation à la hauteur."
          description="Choisissez vos accessoires en fonction du support et de l’usage prévu. Un doute sur la fixation de vos lettres ? Notre équipe peut vous orienter."
        />
        <AccessoryPurchase />
      </div>
      <CTA />
    </>
  );
}
