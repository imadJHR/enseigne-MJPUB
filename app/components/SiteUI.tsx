import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, ChevronRight } from "@/components/Icons";
import { site } from "@/lib/site";
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
export function Breadcrumbs({
  items,
}: {
  items: { name: string; href?: string }[];
}) {
  const all = [{ name: "Accueil", href: "/" }, ...items];
  return (
    <>
      <nav className="breadcrumbs" aria-label="Fil d’Ariane">
        <ol>
          {all.map((item, index) => (
            <li key={item.name}>
              {index > 0 && <ChevronRight size={12} aria-hidden="true" />}
              {item.href ? (
                <Link href={item.href}>{item.name}</Link>
              ) : (
                <span aria-current="page">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            ...(item.href ? { item: `${site.url}${item.href}` } : {}),
          })),
        }}
      />
    </>
  );
}
export function PageIntro({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="page-intro">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      <p className="intro-copy">{description}</p>
      {children}
    </div>
  );
}
export function CTA({
  title = "Votre prochaine enseigne commence ici.",
  text = "Choisissez un style, personnalisez vos lettres et préparez votre devis. MJ PUB vous accompagne à Saint-Amand-les-Eaux et dans ses environs.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta-section container">
      <div>
        <span className="section-index">Votre prochain projet</span>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="cta-actions">
        <Link className="button button-primary" href="/configurateur">
          Configurer mon enseigne <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
        <Link className="cta-help" href="/demande-devis">
          J’ai déjà mon logo : demander un devis
        </Link>
      </div>
    </section>
  );
}
export function FAQ({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.question}>
          <summary>
            {item.question}
            <span aria-hidden="true">+</span>
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
export function ProjectCard({
  project,
  large = false,
}: {
  project: { slug: string; title: string; image: string; category: string };
  large?: boolean;
}) {
  return (
    <Link
      className={`project-card${large ? " project-card-large" : ""}`}
      href={`/realisations/${project.slug}`}
    >
      <div className="project-image">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes={
            large
              ? "(max-width: 768px) 100vw, 65vw"
              : "(max-width: 768px) 100vw, 40vw"
          }
        />
      </div>
      <div className="project-caption">
        <div>
          <p>{project.category}</p>
          <h3>{project.title}</h3>
        </div>
        <ArrowUpRight size={24} aria-hidden="true" />
      </div>
    </Link>
  );
}
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="text-link" href={href}>
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}
