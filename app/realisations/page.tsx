import { realisations } from "@/lib/realisations";
import { pageMetadata } from "@/lib/site";
import { Breadcrumbs, CTA, PageIntro, ProjectCard } from "../components/SiteUI";
export const metadata = pageMetadata(
  "Réalisations d’enseignes & signalétique",
  "Découvrez les enseignes lumineuses, logos en relief et panneaux de façade réalisés par MJ PUB pour restaurants, boutiques et entreprises.",
  "/realisations",
);
export default function RealisationsPage() {
  return (
    <>
      <div className="container page-content">
        <Breadcrumbs items={[{ name: "Réalisations" }]} />
        <PageIntro
          title="Des identités qui prennent place."
          description="Chaque façade a ses contraintes. Chaque commerce a son caractère. Voici une sélection d’enseignes, de logos et de panneaux réalisés par MJ PUB."
        />
        <div className="portfolio-grid">
          {realisations.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
      <CTA />
    </>
  );
}
