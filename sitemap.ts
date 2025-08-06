import type { MetadataRoute } from "next"
import { realisations } from "./realisations/[slug]/page" // Import realisations data

export default function sitemap(): MetadataRoute.Sitemap {
  const realisationsSlugs = realisations.map((realisation) => ({
    url: `https://enseigne42.fr/realisations/${realisation.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [
    {
      url: "https://enseigne42.fr",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://enseigne42.fr/configurateur",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://enseigne42.fr/produits",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://enseigne42.fr/accessoires",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://enseigne42.fr/realisations",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...realisationsSlugs, // Add dynamic realisations URLs
    {
      url: "https://enseigne42.fr/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://enseigne42.fr/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://enseigne42.fr/demande-devis",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://enseigne42.fr/checkout", // New entry for the checkout page
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
