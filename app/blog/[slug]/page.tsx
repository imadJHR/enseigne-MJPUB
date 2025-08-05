import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blogPosts";

// Dummy data for blog posts (same as in blog/page.tsx for consistency)

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: PageProps) {
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
      <main className="pt-20 px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          {/* Bouton retour */}
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

          {/* Article */}
          <article className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={300}
              className="w-full h-80 object-cover rounded-lg mb-6"
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
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </article>

          {/* CTA */}
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
