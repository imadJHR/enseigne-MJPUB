import type { Metadata } from "next";
export const site = {
  name: "MJ PUB",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://lettre3dshop.com",
  phone: "+33 7 81 54 63 59",
  phoneHref: "tel:+33781546359",
  email: "mjpub59@gmail.com",
  address: "644 route de Lille",
  city: "Saint-Amand-les-Eaux",
  postalCode: "59230",
};
export const serviceAreas = [
  "Saint-Amand-les-Eaux",
  "Hasnon",
  "Lecelles",
  "Rosult",
  "Raismes",
  "Bruille-Saint-Amand",
  "Valenciennes",
];
export const localAreaSchema = serviceAreas.map((name) => ({
  "@type": "City",
  name,
}));
export function pageMetadata(
  title: string,
  description: string,
  path: string,
  noIndex = false,
): Metadata {
  return {
    title: path === "/" ? { absolute: title + " | MJ PUB" } : title,
    description,
    alternates: { canonical: `${site.url}${path}` },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title: `${title} | MJ PUB`,
      description,
      url: `${site.url}${path}`,
      siteName: site.name,
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "MJ PUB, enseignes et signalétique sur mesure",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#entreprise`,
  name: site.name,
  url: site.url,
  telephone: "+33781546359",
  email: site.email,
  image: `${site.url}/opengraph-image`,
  logo: `${site.url}/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: site.city,
    postalCode: site.postalCode,
    addressCountry: "FR",
  },
  areaServed: localAreaSchema,
};
export function formatPrice(price: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}
