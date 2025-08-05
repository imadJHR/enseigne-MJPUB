import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User } from "lucide-react"
import Link from "next/link"

// Dummy data for blog posts (same as in blog/page.tsx for consistency)
export const blogPosts = [
  {
    id: 1,
    title: "Les Tendances 2024 en Enseignes Lumineuses",
    excerpt: "Découvrez les innovations et les styles qui marqueront l'année pour votre signalétique.",
    image: "/placeholder.svg?height=300&width=400&text=Blog Post 1",
    date: "15 Mars 2024",
    author: "MJ PUB Team",
    category: "Tendances",
    slug: "tendances-2024-enseignes-lumineuses",
    content: `
      <p>Le monde de l'enseigne lumineuse est en constante évolution, et 2024 apporte son lot de nouveautés passionnantes. Voici les tendances à surveiller :</p>
      <h3>1. L'intégration de l'AI et de l'interactivité</h3>
      <p>Les enseignes ne sont plus de simples panneaux statiques. L'intelligence artificielle permet désormais de créer des affichages dynamiques qui s'adaptent au public, à l'heure de la journée ou même à la météo. Imaginez une enseigne qui change de message en fonction des passants ou qui propose des promotions ciblées !</p>
      <h3>2. Le retour du néon flexible</h3>
      <p>Bien que les LEDs dominent le marché, le néon flexible fait un retour en force. Il offre une esthétique vintage et artistique, tout en étant plus économe en énergie et durable que le néon traditionnel. Parfait pour les bars, restaurants et boutiques qui cherchent à créer une ambiance unique.</p>
      <h3>3. La durabilité et l'éco-conception</h3>
      <p>Les entreprises sont de plus en plus soucieuses de leur impact environnemental. Cela se traduit par une demande croissante pour des enseignes fabriquées à partir de matériaux recyclés ou recyclables, et utilisant des LEDs à très faible consommation. L'éco-conception devient un critère de choix majeur.</p>
      <h3>4. Les enseignes minimalistes et élégantes</h3>
      <p>Moins, c'est plus. La tendance est aux designs épurés, aux lignes simples et aux typographies élégantes. L'objectif est de communiquer clairement et avec sophistication, sans surcharger l'espace visuel. Les lettres découpées en aluminium brossé ou en Plexiglas mat sont particulièrement prisées.</p>
      <h3>5. L'expérience immersive</h3>
      <p>Certaines enseignes vont au-delà de la simple signalétique pour devenir de véritables œuvres d'art immersives. Grâce à des projections lumineuses, des jeux de couleurs complexes et des intégrations architecturales, elles transforment la façade d'un bâtiment en une expérience visuelle captivante.</p>
      <p>Enseigne42 est à la pointe de ces tendances, vous offrant des solutions innovantes pour que votre marque brille de mille feux.</p>
    `,
  },
  {
    id: 2,
    title: "Comment Choisir le Bon Matériau pour Votre Enseigne ?",
    excerpt: "PVC, Dibond, Plexiglas... Guide pour sélectionner le matériau idéal selon vos besoins.",
    image: "/placeholder.svg?height=300&width=400&text=Blog Post 2",
    date: "01 Février 2024",
    author: "MJ PUB Team",
    category: "Conseils",
    slug: "choisir-materiau-enseigne",
    content: `
      <p>Le choix du matériau est crucial pour la durabilité, l'esthétique et le coût de votre enseigne. Voici un aperçu des options les plus courantes :</p>
      <h3>1. Le PVC (Polychlorure de Vinyle)</h3>
      <ul>
        <li><strong>Avantages :</strong> Léger, économique, facile à découper et à peindre, résistant aux intempéries.</li>
        <li><strong>Utilisation :</strong> Idéal pour les lettres découpées, les panneaux intérieurs ou les enseignes temporaires.</li>
      </ul>
      <h3>2. Le Dibond (Aluminium Composite)</h3>
      <ul>
        <li><strong>Avantages :</strong> Très rigide, léger, résistant aux chocs et aux UV, aspect moderne et élégant.</li>
        <li><strong>Utilisation :</strong> Parfait pour les panneaux extérieurs, les enseignes de façade et les supports publicitaires grand format.</li>
      </ul>
      <h3>3. Le Plexiglas (Acrylique)</h3>
      <ul>
        <li><strong>Avantages :</strong> Transparent, brillant, résistant aux UV, permet une excellente diffusion de la lumière pour les enseignes lumineuses.</li>
        <li><strong>Utilisation :</strong> Souvent utilisé pour les lettres boîtiers lumineuses, les plaques professionnelles et les enseignes rétroéclairées.</li>
      </ul>
      <h3>4. L'Aluminium</h3>
      <ul>
        <li><strong>Avantages :</strong> Léger, résistant à la corrosion, durable, aspect haut de gamme.</li>
        <li><strong>Utilisation :</strong> Pour les lettres découpées, les caissons lumineux et les structures d'enseignes.</li>
      </ul>
      <h3>5. L'Acier Inoxydable</h3>
      <ul>
        <li><strong>Avantages :</strong> Extrêmement durable, résistant à la corrosion, aspect très moderne et professionnel.</li>
        <li><strong>Utilisation :</strong> Pour les enseignes de prestige, les lettres découpées avec une finition brossée ou polie.</li>
      </ul>
      <p>N'hésitez pas à contacter nos experts pour vous aider à faire le meilleur choix pour votre projet.</p>
    `,
  },
  {
    id: 3,
    title: "L'Impact d'une Bonne Signalétique sur Votre Commerce",
    excerpt: "Découvrez comment une enseigne bien conçue peut transformer votre visibilité et attirer plus de clients.",
    image: "/placeholder.svg?height=300&width=400&text=Blog Post 3",
    date: "10 Janvier 2024",
    author: "MJ PUB Team",
    category: "Marketing",
    slug: "impact-bonne-signaletique",
    content: `
      <p>Une enseigne n'est pas qu'un simple indicateur de votre présence ; c'est un puissant outil marketing. Voici pourquoi une bonne signalétique est essentielle :</p>
      <h3>1. Attirer l'Attention</h3>
      <p>Dans un environnement urbain saturé, une enseigne lumineuse ou un panneau bien conçu se démarque. Elle capte le regard des passants et les incite à s'intéresser à votre commerce.</p>
      <h3>2. Renforcer l'Identité de Marque</h3>
      <p>Votre enseigne est le reflet de votre marque. Un design cohérent avec votre logo et votre charte graphique renforce votre identité et votre professionnalisme.</p>
      <h3>3. Faciliter l'Orientation</h3>
      <p>Une signalétique claire et visible aide les clients à trouver facilement votre établissement, évitant ainsi la frustration et les pertes de temps.</p>
      <h3>4. Communiquer Votre Message</h3>
      <p>Au-delà de votre nom, une enseigne peut véhiculer des informations clés : votre secteur d'activité, vos valeurs, ou même une promotion en cours.</p>
      <h3>5. Créer une Première Impression Mémorable</h3>
      <p>La façade de votre commerce est la première chose que voient vos clients potentiels. Une enseigne de qualité inspire confiance et donne envie d'entrer.</p>
      <h3>6. Augmenter le Trafic et les Ventes</h3>
      <p>Une enseigne attractive et bien placée peut significativement augmenter le nombre de visiteurs dans votre magasin, ce qui se traduit directement par une hausse de votre chiffre d'affaires.</p>
      <p>Investir dans une enseigne de qualité, c'est investir dans la croissance de votre entreprise. Contactez Enseigne42 pour un projet qui fera la différence.</p>
    `,
  },
  {
    id: 4,
    title: "L'Éclairage LED : Avantages et Innovations",
    excerpt: "Découvrez pourquoi les LEDs sont le choix numéro un pour les enseignes modernes.",
    image: "/placeholder.svg?height=300&width=400&text=Blog Post 4",
    date: "25 Décembre 2023",
    author: "MJ PUB Team",
    category: "Technologie",
    slug: "eclairage-led-avantages-innovations",
    content: `
      <p>L'éclairage LED a révolutionné le monde de l'enseigne lumineuse. Voici ses principaux avantages et les dernières innovations :</p>
      <h3>1. Efficacité Énergétique</h3>
      <p>Les LEDs consomment jusqu'à 80% moins d'énergie que les sources lumineuses traditionnelles (néon, fluorescent), ce qui se traduit par des économies significatives sur vos factures d'électricité.</p>
      <h3>2. Durée de Vie Exceptionnelle</h3>
      <p>Avec une durée de vie moyenne de 50 000 à 100 000 heures, les LEDs nécessitent beaucoup moins de maintenance et de remplacements, réduisant ainsi les coûts à long terme.</p>
      <h3>3. Luminosité et Visibilité</h3>
      <p>Les LEDs offrent une luminosité intense et une excellente visibilité, même en plein jour. Elles permettent de créer des enseignes éclatantes qui attirent l'œil.</p>
      <h3>4. Flexibilité de Conception</h3>
      <p>Disponibles dans une multitude de formes, tailles et couleurs, les LEDs offrent une liberté de conception inégalée. Elles peuvent être intégrées dans des lettres découpées, des caissons lumineux, ou utilisées pour des effets de rétroéclairage.</p>
      <h3>5. Résistance et Sécurité</h3>
      <p>Les LEDs sont robustes, résistantes aux chocs et aux vibrations. Elles ne contiennent pas de mercure et ne produisent pas de chaleur excessive, ce qui les rend plus sûres et écologiques.</p>
      <h3>Innovations Récentes :</h3>
      <ul>
        <li><strong>LEDs RGB programmables :</strong> Permettent de changer la couleur et l'intensité de l'éclairage à volonté, créant des effets dynamiques.</li>
        <li><strong>LEDs à faible consommation :</strong> Des avancées continues pour réduire encore plus la consommation d'énergie.</li>
        <li><strong>Mini-LEDs et Micro-LEDs :</strong> Ouvrent la voie à des designs encore plus fins et des résolutions d'affichage plus élevées.</li>
      </ul>
      <p>Enseigne42 utilise les dernières technologies LED pour vous garantir des enseignes performantes et durables.</p>
    `,
  },
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
        <Header />
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">Article non trouvé</h1>
          <p className="text-xl text-gray-600">L'article que vous recherchez n'existe pas.</p>
          <Link href="/blog">
            <Button className="mt-8 bg-blue-600 hover:bg-blue-700">Retour au blog</Button>
          </Link>
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
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 bg-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour au blog
              </Button>
            </Link>
          </div>

          {/* Blog Post Content */}
          <article className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-80 object-cover rounded-lg mb-6"
            />
            <Badge className="bg-blue-600 text-white mb-4">{post.category}</Badge>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
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
              {/* Render HTML content directly */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </article>

          {/* CTA Section */}
          <div className="mt-12 text-center bg-white rounded-lg p-8 border border-gray-200">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Intéressé par nos solutions ?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre projet d'enseigne lumineuse ou de signalétique.
            </p>
            <Link href="/demande-devis">
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">Demander un devis</Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}