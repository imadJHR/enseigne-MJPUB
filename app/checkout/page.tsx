import { pageMetadata } from "@/lib/site";
import { Breadcrumbs, PageIntro } from "@/app/components/SiteUI";
import CheckoutForm from "./CheckoutForm";
export const metadata = pageMetadata(
  "Transmettre votre commande",
  "Envoyez vos coordonnées à MJ PUB pour confirmer votre commande et ses modalités de livraison.",
  "/checkout",
  true,
);
export default function Page() {
  return (
    <div className="container page-content">
      <Breadcrumbs
        items={[{ name: "Panier", href: "/panier" }, { name: "Commande" }]}
      />
      <PageIntro
        title="La suite de votre projet."
        description="Transmettez vos coordonnées. Notre équipe vous contactera pour confirmer votre commande, sa fabrication et sa livraison."
      />
      <CheckoutForm />
    </div>
  );
}
