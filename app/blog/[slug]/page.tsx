"use client"

import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { ArrowLeft, Calendar, User } from "lucide-react"

// Placeholder blog post data
export const blogPosts = [
  {
    slug: "tendances-enseignes-led-2024",
    title: "Les Tendances des Enseignes LED en 2024",
    date: "15 Juillet 2024",
    author: "Enseigne42 Team",
    category: "Tendances",
    image: "/placeholder.svg?height=600&width=800&text=LED+Trends+2024",
    excerpt: "Découvrez les innovations et les styles qui dominent le marché des enseignes LED cette année.",
    content: `
      <p>L'année 2024 apporte son lot de nouveautés dans le monde des enseignes lumineuses. Les LEDs continuent de s'imposer comme la solution privilégiée pour leur efficacité énergétique et leur polyvalence.</p>
      <h2 class="text-2xl font-bold mt-6 mb-4">1. Personnalisation Extrême</h2>
      <p>La demande pour des enseignes uniques et sur mesure explose. Les entreprises cherchent à se démarquer avec des designs complexes, des jeux de lumière dynamiques et des intégrations artistiques.</p>
      <h2 class="text-2xl font-bold mt-6 mb-4">2. LEDs Écologiques</h2>
      <p>La durabilité est au cœur des préoccupations. Les fabricants développent des LEDs avec une empreinte carbone réduite, des matériaux recyclables et une consommation d'énergie encore plus faible.</p>
      <h2 class="text-2xl font-bold mt-6 mb-4">3. Intégration Smart</h2>
      <p>Les enseignes connectées gagnent du terrain. Contrôle via smartphone, programmation horaire, et adaptation automatique de la luminosité sont désormais des fonctionnalités très recherchées.</p>
      <p>Chez Enseigne42, nous sommes à la pointe de ces innovations pour vous offrir des solutions d'enseignage qui non seulement attirent l'œil, mais sont aussi durables et intelligentes.</p>
    `,
  },
  {
    slug: "choisir-bon-materiau-enseigne",
    title: "Comment Choisir le Bon Matériau pour Votre Enseigne ?",
    date: "01 Juillet 2024",
    author: "Jean Dupont",
    category: "Conseils",
    image: "/placeholder.svg?height=600&width=800&text=Material+Choice",
    excerpt: "PVC, Dibond, Plexiglas... Quel matériau est le plus adapté à votre projet d'enseigne ?",
    content: `
      <p>Le choix du matériau est crucial pour la durabilité et l'esthétique de votre enseigne. Chaque option a ses avantages et inconvénients.</p>
      <h2 class="text-2xl font-bold mt-6 mb-4">PVC Expansé</h2>
      <p>Léger, économique et facile à travailler. Idéal pour les enseignes intérieures ou extérieures avec une bonne protection. Moins résistant aux chocs que d'autres matériaux.</p>
      <h2 class="text-2xl font-bold mt-6 mb-4">Dibond (Composite Aluminium)</h2>
      <p>Très rigide, léger et résistant aux intempéries. Parfait pour les enseignes extérieures de grande taille. Offre une excellente planéité pour l'impression.</p>
      <h2 class="text-2xl font-bold mt-6 mb-4">Plexiglas (PMMA)</h2>
      <p>Offre une finition brillante et une excellente transparence. Idéal pour les enseignes lumineuses et les lettres découpées avec un effet de profondeur. Plus cher et plus fragile que le PVC.</p>
      <p>N'hésitez pas à nous contacter pour un conseil personnalisé sur le matériau le plus adapté à vos besoins.</p>
    `,
  },
  {
    slug: "installation-enseigne-etapes",
    title: "Installation d'une Enseigne LED : Les Étapes Clés",
    date: "20 Juin 2024",
    author: "Marc Lefevre",
    category: "Guide",
    image: "/placeholder.svg?height=600&width=800&text=LED+Installation",
    excerpt: "Un guide étape par étape pour installer votre enseigne lumineuse en toute sécurité.",
    content: `
      <p>L'installation d'une enseigne LED peut sembler complexe, mais avec les bonnes étapes, elle est à la portée de tous.</p>
      <h2 class="text-2xl font-bold mt-6 mb-4">1. Préparation</h2>
      <p>Assurez-vous d'avoir tous les outils nécessaires (perceuse, niveau, tournevis, etc.) et de couper l'alimentation électrique si vous travaillez près de câbles existants.</p>
      <h2 class="text-2xl font-bold mt-6 mb-4">2. Marquage et Perçage</h2>
      <p>Utilisez le gabarit fourni avec votre enseigne pour marquer précisément les points de fixation sur votre mur. Percez les trous aux diamètres et profondeurs indiqués.</p>
      <h2 class="text-2xl font-bold mt-6 mb-4">3. Fixation de l'Enseigne</h2>
      <p>Fixez les supports ou l'enseigne directement au mur à l'aide des chevilles et vis adaptées. Vérifiez l'horizontalité avec un niveau.</p>
      <h2 class="text-2xl font-bold mt-6 mb-4">4. Raccordement Électrique</h2>
      <p>Connectez l'alimentation LED selon les instructions. Assurez-vous que toutes les connexions sont sécurisées et étanches si l'enseigne est destinée à l'extérieur.</p>
      <p>Si vous préférez, notre équipe de techniciens qualifiés peut se charger de l'installation pour vous, partout en France.</p>
    `,
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        <Header />
        <div className="pt-20 px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-black">Article non trouvé</h1>
            <p className="text-gray-600 mb-8">L'article de blog que vous recherchez n'existe pas.</p>
            <Link href="/blog">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour au blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <div className="pt-20 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-blue-600">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-black font-medium">{post.title}</span>
          </nav>

          <Card className="bg-white border border-gray-200 shadow-sm">
            <img
              src={post.image || "/placeholder.svg?height=400&width=600&text=Blog+Post+Image"}
              alt={post.title}
              className="w-full h-80 object-cover rounded-t-lg"
            />
            <CardContent className="p-6">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">{post.title}</h1>
              <div className="flex items-center text-gray-500 text-sm mb-6 space-x-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <Badge className="bg-yellow-500 text-black hover:bg-yellow-600">{post.category}</Badge>
              </div>
              <div className="prose max-w-none text-gray-700 leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: post.content.replace(/text-gray-300/g, 'text-gray-700').replace(/prose-invert/g, '') }} />
              </div>
            </CardContent>
          </Card>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link href="/blog">
              <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-100">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour au blog
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}