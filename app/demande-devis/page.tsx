import { Suspense } from "react";
import { Breadcrumbs, PageIntro } from "../components/SiteUI";
import ContactAside from "../components/ContactAside";
import QuoteForm from "./QuoteForm";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Devis enseigne à Saint-Amand-les-Eaux & environs",
  "Demandez un devis personnalisé pour vos enseignes LED, lettres découpées et panneaux. MJ PUB à Saint-Amand-les-Eaux : envoyez votre logo, vos dimensions et l’adresse du commerce.",
  "/demande-devis",
);
export default function QuotePage() {
  return (
    <div className="container page-content">
      <Breadcrumbs items={[{ name: "Demande de devis" }]} />
      <PageIntro
        title="Votre idée mérite un devis."
        description="Quelques informations nous suffisent pour comprendre votre projet. Partagez votre besoin : nous vous proposerons une solution adaptée."
      />
      <div className="form-layout">
        <Suspense fallback={<div className="skeleton-block" />}>
          <QuoteForm />
        </Suspense>
        <ContactAside />
      </div>
    </div>
  );
}
