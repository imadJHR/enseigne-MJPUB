import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blogPosts";
import { Metadata } from "next";

export interface PageParams {
  slug: string;
}

// Helper function to safely convert date to ISO string
const getISODate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return new Date().toISOString();
    }
    return date.toISOString();
  } catch (e) {
    return new Date().toISOString();
  }
};

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Article non trouvé | MJ PUB",
      description: "L'article que vous recherchez n'existe pas.",
    };
  }

  return {
    title: `${post.title} | MJ PUB`,
    description: post.excerpt,
    keywords: [
      post.title,
      post.category,
      "enseignes lumineuses",
      "signalétique",
      "conseils enseignes",
      "innovations enseignes",
      "actualités enseignes",
      "enseignes LED",
      "signalétique sur mesure",
    ],
    alternates: {
      canonical: `https://lettre3dshop.com/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | MJ PUB`,
      description: post.excerpt,
      url: `https://lettre3dshop.com/blog/${post.slug}`,
      type: "article",
      images: [
        {
          url: post.image.src || "https://lettre3dshop.com/og-blog-post.png",
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
      publishedTime: getISODate(post.date),
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | MJ PUB`,
      description: post.excerpt,
      images: [post.image.src || "https://lettre3dshop.com/og-blog-post.png"],
    },
  };
}

export default function BlogPostPage({ params }: { params: PageParams }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex flex-col">
        <Header />
        <div className="text-center py-12 flex-grow flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4">Article non trouvé</h1>
          <p className="text-xl text-gray-600">
            L&apos;article que vous recherchez n&apos;existe pas.
          </p>
          <Link href="/blog">
            <Button className="mt-8 bg-blue-600 hover:bg-blue-700">
              Retour au blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Header />
      {/* SEO: JSON-LD for BlogPosting and Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            url: `https://lettre3dshop.com/blog/${post.slug}`,
            datePublished: getISODate(post.date),
            dateModified: getISODate(post.date),
            author: {
              "@type": "Person",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "MJ PUB",
              logo: {
                "@type": "ImageObject",
                url: "https://lettre3dshop.com/logo.png",
              },
            },
            image: post.image.src || "https://lettre3dshop.com/og-blog-post.png",
            articleSection: post.category,
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Accueil",
                  item: "https://lettre3dshop.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: "https://lettre3dshop.com/blog",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: post.title,
                  item: `https://lettre3dshop.com/blog/${post.slug}`,
                },
              ],
            },
          }),
        }}
      />
      <main className="pt-20 px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/blog">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-100 bg-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour au blog
              </Button>
            </Link>
          </div>
          <article className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <Image
              src={post.image}
              alt={`Image de l'article : ${post.title}`}
              width={800}
              height={450}
              className="w-full h-auto aspect-video object-cover rounded-lg mb-6"
              priority
            />
            <Badge className="bg-blue-600 text-white mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-600 text-sm mb-6 space-x-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>
            <div
              className="prose max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
          <div className="mt-12 text-center bg-white rounded-lg p-8 border border-gray-200">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Intéressé par nos solutions ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre projet d&apos;enseigne
              lumineuse ou de signalétique.
            </p>
            <Link href="/demande-devis">
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
                Demander un devis
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
