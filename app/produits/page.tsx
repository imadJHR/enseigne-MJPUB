import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/Icons";
import { services } from "@/lib/services";
import { productsData } from "@/data/productsData";
import { pageMetadata, formatPrice } from "@/lib/site";
import { Breadcrumbs, CTA, PageIntro, TextLink } from "../components/SiteUI";
export const metadata = pageMetadata(
  "Enseignes LED, lettres découpées & panneaux",
  "Découvrez les solutions MJ PUB : enseignes lumineuses, lettres PVC et Dibond, panneaux et accessoires. Vos projets sur mesure à Saint-Amand-les-Eaux et autour de Valenciennes.",
  "/produits",
);
export default function ProductsPage() {
  const product = productsData["panneau-dibond"];
  return (
    <>
      <div className="container page-content">
        <Breadcrumbs items={[{ name: "Nos solutions" }]} />
        <PageIntro
          eyebrow="Votre identité, à la bonne échelle"
          title="Une solution pour chaque projet."
          description="De la devanture lumineuse au logo en relief, choisissez le support qui fait parler votre identité. Nous vous aidons à adapter les matériaux et la finition à votre usage."
        />
        <div>
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="catalog-service-row"
            >
              <div className="row-image">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 640px) 85px, 240px"
                />
              </div>
              <div>
                <h2>{service.name}</h2>
                <p>{service.short}</p>
              </div>
              <ArrowUpRight size={28} />
            </Link>
          ))}
        </div>
        <section className="section">
          <div className="section-heading">
            <h2>Préparer votre commande.</h2>
            <p>
              Retrouvez notre panneau personnalisé et les accessoires
              disponibles.
            </p>
          </div>
          <div className="journal-grid">
            <Link className="journal-card" href="/produits/panneau-dibond">
              <div className="journal-image">
                <Image
                  src={product.image}
                  alt="Exemple de panneau de façade personnalisé"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <h3>
                Panneau personnalisé <ArrowUpRight size={22} />
              </h3>
              <p>
                Options Dibond et PVC. À partir de{" "}
                {formatPrice(
                  Math.min(...product.materials.map((m) => m.price)),
                )}{" "}
                HT.
              </p>
            </Link>
            <div className="service-aside">
              <h2>La fixation compte aussi.</h2>
              <p className="intro-copy">
                Retrouvez les accessoires EASYFIX pour préparer votre
                installation.
              </p>
              <TextLink href="/accessoires">Voir les accessoires</TextLink>
            </div>
          </div>
        </section>
      </div>
      <CTA />
    </>
  );
}
