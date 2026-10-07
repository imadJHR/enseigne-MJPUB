import { pageMetadata, site } from "@/lib/site";
import { Breadcrumbs, PageIntro } from "@/app/components/SiteUI";
export const metadata = pageMetadata(
  "Confidentialité",
  "Comprenez l’utilisation des coordonnées transmises à MJ PUB et du stockage local de votre panier.",
  "/politique-confidentialite",
  true,
);
export default function Page() {
  return (
    <div className="container page-content">
      <Breadcrumbs items={[{ name: "Confidentialité" }]} />
      <PageIntro
        title="Vos données, votre projet."
        description="Cette page décrit les informations utilisées par les fonctionnalités du site."
      />
      <div className="legal-content">
        <h2>Coordonnées et fichiers transmis</h2>
        <p>
          Les formulaires de contact, de devis et de commande transmettent les
          informations que vous renseignez à notre service de traitement :
          coordonnées, description du projet et, pour le devis, un fichier
          facultatif. Ces éléments servent à répondre à votre demande et à
          préparer votre projet.
        </p>
        <h2>Stockage sur votre appareil</h2>
        <p>
          Le panier est enregistré dans le stockage local de votre navigateur
          pour retrouver vos articles après une visite. Une configuration peut
          être conservée temporairement pendant votre session pour préremplir le
          formulaire de devis. Vous pouvez retirer les articles du panier ou
          supprimer les données du site dans les réglages du navigateur.
        </p>
        <h2>Mesure d’audience</h2>
        <p>
          Cette version du site n’intègre aucun outil de mesure d’audience ou de
          publicité. Le stockage du panier sert au fonctionnement de la
          commande.
        </p>
        <h2>Questions et demandes concernant vos données</h2>
        <p>
          Contactez MJ PUB à <a href={"mailto:" + site.email}>{site.email}</a>{" "}
          pour une question sur vos informations ou une demande d’accès, de
          correction ou de suppression.
        </p>
        <h2>Informations à compléter par l’éditeur</h2>
        <p>
          Les durées de conservation des demandes, l’identité juridique du
          responsable du traitement et les prestataires intervenant dans le
          traitement doivent être précisés avant publication.
        </p>
      </div>
    </div>
  );
}
