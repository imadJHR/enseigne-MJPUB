import { pageMetadata } from "@/lib/site";
import { Breadcrumbs, CTA, PageIntro } from "../components/SiteUI";
import { blogPosts } from "@/lib/blogPosts";
import BlogList from "./BlogList";
export const metadata = pageMetadata(
  "Conseils enseignes pour les commerces du Nord",
  "Enseignes LED, matériaux et préparation de façade : les conseils de MJ PUB à Saint-Amand-les-Eaux pour les commerces du secteur de Valenciennes.",
  "/blog",
);
export default function BlogPage() {
  return (
    <>
      <div className="container page-content">
        <Breadcrumbs items={[{ name: "Le journal" }]} />
        <PageIntro
          title="Bien penser votre enseigne."
          description="Des conseils concrets pour choisir vos matériaux, comprendre l’éclairage et préparer votre projet à Saint-Amand-les-Eaux ou dans ses environs."
        />
        <BlogList
          blogSummaries={blogPosts.map((post) => ({
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt,
            category: post.category,
            image: post.image,
            imageAlt: post.imageAlt,
            date: post.date,
            related: post.related,
            id: post.id,
            author: post.author,
            modified: post.modified,
            readingTime: post.readingTime,
          }))}
        />
      </div>
      <CTA />
    </>
  );
}
