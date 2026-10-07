export const dynamicParams = false;
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blogPosts";
import { pageMetadata, site } from "@/lib/site";
import { Breadcrumbs, CTA, JsonLd, PageIntro } from "../../components/SiteUI";
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  const meta = pageMetadata(post.title, post.excerpt, "/blog/" + slug);
  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      type: "article" as const,
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: ["MJ PUB"],
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  return (
    <>
      <div className="container">
        <div className="article-layout">
          <Breadcrumbs
            items={[
              { name: "Le journal", href: "/blog" },
              { name: post.title },
            ]}
          />
          <PageIntro
            eyebrow={post.category}
            title={post.title}
            description={post.excerpt}
          >
            <div className="article-meta">
              <span>Par MJ PUB</span>
              <span>
                Mis à jour le{" "}
                {new Intl.DateTimeFormat("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  timeZone: "UTC",
                }).format(new Date(post.modified))}
              </span>
            </div>
          </PageIntro>
          <div className="article-cover">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="(max-width: 850px) 100vw, 830px"
            />
          </div>
          <article className="article-body">
            {post.sections.map(([heading, body]) => (
              <section key={heading}>
                <h2>{heading}</h2>
                <p>{body}</p>
              </section>
            ))}
            {"source" in post && (
              <p>
                Pour les règles en vigueur, consultez{" "}
                <a href={post.source}>
                  Service Public Entreprendre : règles d’installation d’une
                  enseigne
                </a>
                .
              </p>
            )}
            <h2>Parlons de votre projet.</h2>
            <p>
              Découvrez notre solution{" "}
              <Link href={"/" + post.related}>
                {post.related === "enseignes-lumineuses"
                  ? "d’enseigne lumineuse"
                  : post.related === "lettres-decoupees"
                    ? "de lettres découpées"
                    : "de signalétique professionnelle"}
              </Link>{" "}
              ou{" "}
              <Link href="/demande-devis">demandez un devis personnalisé</Link>.
              Depuis Saint-Amand-les-Eaux, MJ PUB étudie votre projet et ses
              contraintes.
            </p>
          </article>
        </div>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          image: site.url + post.image,
          datePublished: post.date,
          dateModified: post.modified,
          author: { "@type": "Organization", name: "MJ PUB", url: site.url },
          publisher: { "@id": site.url + "/#entreprise" },
          mainEntityOfPage: site.url + "/blog/" + post.slug,
        }}
      />
      <CTA />
    </>
  );
}
