import { Breadcrumbs, PageIntro } from "../components/SiteUI";
import ContactAside from "../components/ContactAside";
import ContactForm from "./ContactForm";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Contact MJ PUB à Saint-Amand-les-Eaux",
  "Contactez MJ PUB pour votre enseigne lumineuse ou votre signalétique. Retrouvez nos coordonnées à Saint-Amand-les-Eaux dans le Nord et décrivez votre projet.",
  "/contact",
);
export default function ContactPage() {
  return (
    <div className="container page-content">
      <Breadcrumbs items={[{ name: "Contact" }]} />
      <PageIntro
        title="Votre projet commence ici."
        description="Une question, une façade à repenser ou un logo à mettre en lumière ? Échangeons sur votre projet à Saint-Amand-les-Eaux ou dans le secteur de Valenciennes."
      />
      <div className="form-layout">
        <ContactForm />
        <ContactAside />
      </div>
    </div>
  );
}
