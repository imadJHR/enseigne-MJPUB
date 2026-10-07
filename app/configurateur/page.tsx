import { pageMetadata } from "@/lib/site";
import { Breadcrumbs, PageIntro, FAQ } from "@/app/components/SiteUI";
import Configurator from "./Configurator";
import { configurationFontVariables } from "./fonts";
import type { SignStyle } from "@/lib/configurator";
export const metadata = pageMetadata(
  "Configurateur de lettres 3D et enseignes LED",
  "Personnalisez votre enseigne : texte, lettres PVC ou aluminium, dimensions et éclairage LED. Visualisez votre idée et préparez votre devis avec MJ PUB.",
  "/configurateur",
);
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ style?: string | string[] }>;
}) {
  const params = await searchParams;
  const initialStyle: SignStyle =
    params.style === "lighted" || params.style === "lighted-box"
      ? params.style
      : "cut-out";
  return (
    <div className={`container page-content ${configurationFontVariables}`}>
      <Breadcrumbs items={[{ name: "Configurateur" }]} />
      <PageIntro
        eyebrow="De l’idée à votre enseigne"
        title="Votre projet prend forme."
        description="Choisissez votre texte, le matériau et les dimensions. Cet aperçu vous aide à préparer le projet ; notre équipe confirmera les détails techniques et le prix sur devis."
      />
      <Configurator key={initialStyle} initialStyle={initialStyle} />
      <section className="section faq-section">
        <div>
          <span className="section-index">Avant de vous lancer</span>
          <h2>Un aperçu, puis un projet précis.</h2>
        </div>
        <FAQ
          items={[
            {
              question: "Comment le prix est-il estimé ?",
              answer:
                "La largeur est calculée à partir du texte et de la hauteur. Les lettres en relief et les boîtiers sont estimés à la surface ; les lettres rétroéclairées utilisent un forfait. Les options s’ajoutent à cette base. Le tracé réel, la pose et la livraison sont à confirmer sur devis.",
            },
            {
              question: "Puis-je utiliser mon logo ?",
              answer:
                "Oui. Envoyez votre fichier dans le formulaire de devis. Nous vérifierons sa faisabilité, les détails des lettres et la fixation adaptée au support.",
            },
          ]}
        />
      </section>
    </div>
  );
}
