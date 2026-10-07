import { pageMetadata } from "@/lib/site";
import { Breadcrumbs, PageIntro } from "@/app/components/SiteUI";
import CartPage from "./CartPage";
export const metadata = pageMetadata(
  "Votre panier",
  "Consultez vos produits et accessoires MJ PUB et préparez votre demande de commande.",
  "/panier",
  true,
);
export default function Page() {
  return (
    <div className="container page-content">
      <Breadcrumbs items={[{ name: "Panier" }]} />
      <PageIntro
        title="Votre panier."
        description="Retrouvez vos articles et ajustez les quantités avant de transmettre votre commande."
      />
      <CartPage />
    </div>
  );
}
