import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { realisations } from "@/lib/realisations";
import { blogPosts } from "@/lib/blogPosts";
import { productsData } from "@/data/productsData";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/produits",
    "/enseigne-saint-amand-les-eaux",
    "/accessoires",
    "/enseignes-lumineuses",
    "/lettres-decoupees",
    "/signaletique",
    "/realisations",
    "/blog",
    "/contact",
    "/demande-devis",
    "/configurateur",
    ...realisations.map((project) => "/realisations/" + project.slug),
    ...blogPosts.map((post) => "/blog/" + post.slug),
    ...Object.keys(productsData).map((slug) => "/produits/" + slug),
  ];
  return routes.map((path) => ({
    url: site.url + path,
    lastModified: new Date("2026-10-06"),
    changeFrequency: path === "" ? "monthly" : "yearly",
    priority: path === "" ? 1 : path.split("/").length === 2 ? 0.8 : 0.6,
  }));
}
