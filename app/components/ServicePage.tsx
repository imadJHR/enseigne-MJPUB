import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "@/components/Icons";
import { services } from "@/lib/services";
import { site, localAreaSchema } from "@/lib/site";
import { Breadcrumbs, CTA, FAQ, JsonLd, PageIntro, TextLink } from "./SiteUI";
export default function ServicePage({ slug }: { slug: string }) {
  const service = services.find((item) => item.slug === slug)!;
  return (
    <>
      <div className="container">
        <Breadcrumbs
          items={[
            { name: "Nos solutions", href: "/produits" },
            { name: service.name },
          ]}
        />
        <section className="service-hero">
          <div>
            <PageIntro
              eyebrow="Saint-Amand-les-Eaux & environs"
              title={service.name + " sur mesure."}
              description={service.intro}
            />
            <Link
              href={
                slug === "signaletique"
                  ? "/demande-devis"
                  : "/configurateur?style=" +
                    (slug === "lettres-decoupees" ? "cut-out" : "lighted-box")
              }
              className="button button-primary"
              style={{ marginTop: 28 }}
            >
              {slug === "signaletique"
                ? "Préparer mon devis"
                : "Configurer mon enseigne"}{" "}
              <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="service-hero-image">
            <Image
              src={service.image}
              alt={service.name + " réalisées par MJ PUB"}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </section>
        <div className="service-details">
          <div className="service-body">
            {service.paragraphs.map((item) => (
              <section key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </section>
            ))}
          </div>
          <aside className="service-aside">
            <h2>Les possibilités</h2>
            <ul className="check-list">
              {service.features.map((feature) => (
                <li key={feature}>
                  <Check size={17} />
                  {feature}
                </li>
              ))}
            </ul>
            <TextLink href="/configurateur">Imaginer votre enseigne</TextLink>
            <TextLink href="/realisations">Voir des projets réalisés</TextLink>
          </aside>
        </div>
        <section className="section faq-section">
          <div className="section-heading">
            <h2>Vos questions sur ce projet.</h2>
          </div>
          <FAQ items={service.faqs} />
        </section>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          description: service.description,
          url: `${site.url}/${service.slug}`,
          provider: { "@id": `${site.url}/#entreprise` },
          areaServed: localAreaSchema,
        }}
      />
      <CTA />
    </>
  );
}
