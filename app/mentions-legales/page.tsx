import { pageMetadata, site } from "@/lib/site";
import { Breadcrumbs, PageIntro } from "@/app/components/SiteUI";
export const metadata = pageMetadata(
  "Mentions légales",
  "Informations sur le site MJ PUB et ses coordonnées de contact.",
  "/mentions-legales",
  true,
);
export default function Page() {
  return (
    <div className="container page-content">
      <Breadcrumbs items={[{ name: "Mentions légales" }]} />
      <PageIntro
        title="Mentions légales."
        description="Les informations de contact du site MJ PUB."
      />
      <div className="legal-content">
        <h2>Contact de l’éditeur</h2>
        <p>
          {site.name}
          <br />
          {site.address}
          <br />
          {site.postalCode} {site.city}, France
          <br />
          <a href={site.phoneHref}>{site.phone}</a>
          <br />
          <a href={"mailto:" + site.email}>{site.email}</a>
        </p>
        <h2>Informations de publication</h2>
        <p>
          La raison sociale, le numéro d’immatriculation, le responsable de
          publication et les coordonnées complètes de l’hébergeur doivent être
          renseignés par l’éditeur avant la mise en ligne de cette version.
        </p>
        <h2>Contenus et photographies</h2>
        <p>
          Pour toute demande concernant l’utilisation d’un contenu, d’une
          photographie ou d’une marque présentée sur ce site, contactez MJ PUB à
          l’adresse ci-dessus.
        </p>
        <h2>Données personnelles</h2>
        <p>
          Les informations sur les formulaires et le stockage du panier sont
          disponibles dans notre{" "}
          <a href="/politique-confidentialite">politique de confidentialité</a>.
        </p>
      </div>
    </div>
  );
}
