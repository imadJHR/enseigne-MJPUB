import type { MetadataRoute } from "next"

// Import product data from the product detail page to generate dynamic URLs
import { productsData } from "./produits/[slug]/page"
import { blogPosts } from "./blog/[slug]/page" // Import blog posts data

const BASE_URL = "https://www.enseigne42.fr" // Replace with your actual domain

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/configurateur`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/produits`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/accessoires`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`, // Added blog listing page
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/realisations`, // Added realisations page
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Add other static pages like /mentions-legales, /cgv, /politique-confidentialite if they exist
    {
      url: `${BASE_URL}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/cgv`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/politique-confidentialite`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ]

  const productPages: MetadataRoute.Sitemap = Object.keys(productsData).map((slug) => ({
    url: `${BASE_URL}/produits/${slug}`,
    lastModified: new Date(), // Use a more accurate date if available from your data source
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(), // Use post.date if available and in a parsable format
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  // Add dynamic pages for realisations (if you had a data source for them)
  // For now, we'll just add a placeholder for the main realisations page.
  // If you had individual project pages (e.g., /realisations/project-slug), you'd map them here.
  const realisationsPages: MetadataRoute.Sitemap = [
    // Example if you had dynamic project pages:
    // {
    //   url: `${BASE_URL}/realisations/restaurant-le-gourmet`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
  ]

  return [...staticPages, ...productPages, ...blogPostPages, ...realisationsPages]
}
