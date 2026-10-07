export const dynamicParams = false;
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check } from "@/components/Icons";
import { realisations } from "@/lib/realisations";
import { pageMetadata } from "@/lib/site";
import {
  Breadcrumbs,
  CTA,
  PageIntro,
  ProjectCard,
} from "../../components/SiteUI";
export function generateStaticParams() {
  return realisations.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = realisations.find((p) => p.slug === slug);
  return project
    ? pageMetadata(
        project.title + " : réalisation d’enseigne",
        project.description.slice(0, 155),
        "/realisations/" + slug,
      )
    : {};
}
export default async function RealisationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = realisations.find((p) => p.slug === slug);
  if (!project) notFound();
  return (
    <>
      <div className="container page-content">
        <Breadcrumbs
          items={[
            { name: "Réalisations", href: "/realisations" },
            { name: project.title },
          ]}
        />
        <PageIntro
          eyebrow={project.category}
          title={project.title}
          description="Une identité mise en valeur, une façade pensée pour être repérée."
        />
        <div className="project-detail-hero">
          <Image
            src={project.image}
            alt={project.title + ", réalisation d’enseigne par MJ PUB"}
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="project-body">
          <div>
            <h2>Le projet.</h2>
            <p>{project.description}</p>
          </div>
          <div>
            <h2>Les détails qui font la différence.</h2>
            <ul className="check-list">
              {project.features.map((feature) => (
                <li key={feature}>
                  <Check size={17} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <section>
          <div className="section-heading">
            <h2>D’autres projets à découvrir.</h2>
          </div>
          <div className="portfolio-grid">
            {realisations
              .filter((p) => p.slug !== slug)
              .slice(0, 2)
              .map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
          </div>
        </section>
      </div>
      <CTA title="Votre façade, votre prochaine signature." />
    </>
  );
}
