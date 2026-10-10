import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "@/components/Icons";
import { site } from "@/lib/site";
import type { Commune } from "@/lib/communes";
import {
  Breadcrumbs,
  CTA,
  FAQ,
  JsonLd,
  PageIntro,
  TextLink,
} from "./SiteUI";

const nearbyLabels: Record<string, string> = {
  hasnon: "Hasnon",
  lecelles: "Lecelles",
  rosult: "Rosult",
  raismes: "Raismes",
  valenciennes: "Valenciennes",
  "saint-amand-les-eaux": "Saint-Amand-les-Eaux",
};

function nearbyHref(slug: string) {
  return slug === "saint-amand-les-eaux"
    ? "/enseigne-saint-amand-les-eaux"
    : `/enseigne-${slug}`;
}

export function CommuneView({ data }: { data: Commune }) {
  return (
    <>
      <div className="container page-content">
        <Breadcrumbs items={[{ name: `Enseignes à ${data.name}` }]} />
        <PageIntro
          eyebrow={data.eyebrow}
          title={data.heading}
          description={data.intro}
        />
        <div className="hero-actions">
          <Link href="/configurateur" className="button button-primary">
            Configurer mon enseigne <ArrowUpRight size={18} />
          </Link>
          <Link href="/demande-devis" className="button button-secondary">
            Envoyer mon logo pour un devis
          </Link>
        </div>
        <section className="section">
          <div className="section-heading">
            <h2>{data.angleTitle}</h2>
          </div>
          <div className="local-copy">
            {data.angleParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <div className="local-hub-services">
            <article>
              <h2>Enseignes lumineuses LED</h2>
              <p>
                Lettres boîtiers ou rétroéclairage pour identifier votre
                commerce à {data.name}, en journée comme en soirée.
              </p>
              <TextLink href="/enseignes-lumineuses">
                Choisir une enseigne LED
              </TextLink>
            </article>
            <article>
              <h2>Lettres découpées & logos 3D</h2>
              <p>
                Lettres PVC ou aluminium composite pour votre devanture à{" "}
                {data.name} et votre accueil.
              </p>
              <TextLink href="/lettres-decoupees">
                Comparer les lettres en relief
              </TextLink>
            </article>
            <article>
              <h2>Panneaux & signalétique</h2>
              <p>
                Panneau de façade et supports intérieurs pour présenter votre
                activité à {data.name}.
              </p>
              <TextLink href="/signaletique">Préparer un panneau</TextLink>
            </article>
          </div>
        </section>
        <section className="local-section">
          <div className="local-copy">
            <p className="eyebrow">
              {data.name} {data.postalCode} · depuis Saint-Amand-les-Eaux
            </p>
            <h2>
              Un projet proche.
              <br />
              Un devis précis.
            </h2>
            <p>
              MJ PUB est installé au {site.address}, à {site.city}. Nous
              étudions les projets des commerces et entreprises de {data.name}{" "}
              ({data.postalCode}) et des communes voisines.
            </p>
            <ul className="area-chips">
              {data.nearby.map((slug) => (
                <li key={slug}>
                  <Link href={nearbyHref(slug)}>{nearbyLabels[slug]}</Link>
                </li>
              ))}
            </ul>
          </div>
          <aside className="local-card">
            <MapPin size={30} />
            <h3>
              MJ PUB
              <br />
              Saint-Amand-les-Eaux
            </h3>
            <p>
              {site.address}
              <br />
              {site.postalCode} {site.city}
            </p>
            <div className="local-contact">
              <span>Contactez-nous pour préparer votre projet</span>
              <a href={site.phoneHref}>
                <Phone size={18} />
                {site.phone}
              </a>
              <a href={"mailto:" + site.email}>{site.email}</a>
              <Link href="/contact">
                Écrire à MJ PUB <ArrowUpRight size={17} />
              </Link>
            </div>
          </aside>
        </section>
        <section className="section faq-section">
          <div>
            <p className="eyebrow">Votre projet à {data.name}</p>
            <h2>
              Les bonnes questions,
              <br />
              avant de commander.
            </h2>
          </div>
          <FAQ items={data.faqs} />
        </section>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Enseignes et signalétique à ${data.name}`,
          description: data.description,
          url: `${site.url}/enseigne-${data.slug}`,
          provider: { "@id": `${site.url}/#entreprise` },
          areaServed: { "@type": "City", name: data.name },
        }}
      />
      <CTA title={`Faisons remarquer votre commerce à ${data.name}.`} />
    </>
  );
}
