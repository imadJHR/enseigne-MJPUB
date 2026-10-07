export const dynamicParams = false;
import Image from "next/image";
import { notFound } from "next/navigation";
import { productsData } from "@/data/productsData";
import { pageMetadata } from "@/lib/site";
import { Breadcrumbs, CTA } from "@/app/components/SiteUI";
import ProductPurchase from "./ProductPurchase";
export function generateStaticParams() {
  return Object.keys(productsData).map((slug) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productsData[slug];
  return product
    ? pageMetadata(product.name, product.description, "/produits/" + slug)
    : {};
}
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productsData[slug];
  if (!product) notFound();
  return (
    <>
      <div className="container page-content">
        <Breadcrumbs
          items={[
            { name: "Nos solutions", href: "/produits" },
            { name: product.name },
          ]}
        />
        <div className="product-layout">
          <div className="product-photo">
            <Image
              src={product.image}
              alt="Exemple de panneau personnalisé pour une façade commerciale"
              fill
              sizes="(max-width:850px) 100vw, 55vw"
              priority
            />
          </div>
          <div className="product-info">
            <p className="eyebrow">Signalétique personnalisée</p>
            <h1>{product.name}</h1>
            <p className="intro-copy">{product.description}</p>
            <ProductPurchase product={product} />
            <p className="form-note">
              Format, fichier d’impression et finition à confirmer avec notre
              équipe avant fabrication.
            </p>
          </div>
        </div>
        <section className="section service-details">
          <div>
            <h2>Un support adapté à votre projet.</h2>
            <ul className="check-list">
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <dl className="product-specs">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key}>
                <dt>{key}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
      <CTA />
    </>
  );
}
