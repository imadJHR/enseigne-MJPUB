import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, MapPin, Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Dummy data for realisations (more detailed for single page view)
export const realisations = [
  {
    id: 1,
    title: "Enseigne Restaurant 'Le Gourmet'",
    description:
      "Création et installation d'une enseigne LED sur mesure pour un restaurant gastronomique au cœur de Paris. Le projet visait à améliorer la visibilité nocturne et à refléter l'élégance de l'établissement. Nous avons opté pour des lettres boîtiers lumineuses en aluminium brossé avec un éclairage LED blanc chaud, offrant une luminosité douce et accueillante.",
    image: "/placeholder.svg?height=600&width=800&text=Restaurant Le Gourmet",
    category: "Restaurant",
    slug: "restaurant-le-gourmet",
    client: "Le Gourmet",
    location: "Paris, France",
    date: "Octobre 2023",
    features: [
      "Lettres boîtiers lumineuses LED",
      "Matériau: Aluminium brossé",
      "Éclairage LED blanc chaud",
      "Installation murale discrète",
      "Design élégant et intemporel",
    ],
    galleryImages: [
      "/placeholder.svg?height=400&width=600&text=Gourmet 1",
      "/placeholder.svg?height=400&width=600&text=Gourmet 2",
      "/placeholder.svg?height=400&width=600&text=Gourmet 3",
    ],
  },
  {
    id: 2,
    title: "Lettres Découpées 'Boutique Chic'",
    description:
      "Conception et pose de lettres découpées en Plexiglas pour une boutique de mode haut de gamme. L'objectif était de créer une signalétique raffinée et moderne. Les lettres ont été découpées au laser avec une finition brillante et installées avec des entretoises pour un effet de profondeur subtil, complété par un rétro-éclairage discret.",
    image: "/placeholder.svg?height=600&width=800&text=Boutique Chic",
    category: "Commerce",
    slug: "boutique-chic",
    client: "Boutique Chic",
    location: "Lyon, France",
    date: "Septembre 2023",
    features: [
      "Lettres découpées en Plexiglas",
      "Finition brillante",
      "Installation avec entretoises",
      "Rétro-éclairage LED discret",
      "Design moderne et épuré",
    ],
    galleryImages: [
      "/placeholder.svg?height=400&width=600&text=Boutique 1",
      "/placeholder.svg?height=400&width=600&text=Boutique 2",
    ],
  },
  {
    id: 3,
    title: "Panneau Publicitaire 'Garage Auto'",
    description:
      "Fabrication et installation d'un grand panneau publicitaire en Dibond pour un garage automobile. La demande était pour une enseigne robuste, visible de loin et résistante aux conditions extérieures. Le panneau a été imprimé en haute résolution avec un laminage anti-UV et monté sur une structure métallique solide.",
    image: "/placeholder.svg?height=600&width=800&text=Garage Auto",
    category: "Industrie",
    slug: "garage-auto",
    client: "Garage Auto Plus",
    location: "Marseille, France",
    date: "Août 2023",
    features: [
      "Panneau Dibond grand format",
      "Impression haute résolution",
      "Laminage anti-UV",
      "Structure métallique robuste",
      "Résistance aux intempéries",
    ],
    galleryImages: [
      "/placeholder.svg?height=400&width=600&text=Garage 1",
      "/placeholder.svg?height=400&width=600&text=Garage 2",
      "/placeholder.svg?height=400&width=600&text=Garage 3",
    ],
  },
  {
    id: 4,
    title: "Totem Lumineux 'Centre Commercial'",
    description:
      "Conception, fabrication et installation d'un totem lumineux imposant pour l'entrée principale d'un grand centre commercial. Ce totem sert de point de repère majeur et affiche les logos des principales enseignes. Il intègre des panneaux LED dynamiques pour les annonces et promotions.",
    image: "/placeholder.svg?height=600&width=800&text=Centre Commercial Totem",
    category: "Grand Format",
    slug: "centre-commercial-totem",
    client: "Centre Commercial Grand Place",
    location: "Lille, France",
    date: "Juillet 2023",
    features: [
      "Totem lumineux sur mesure",
      "Panneaux LED dynamiques",
      "Structure en acier galvanisé",
      "Haute visibilité jour et nuit",
      "Intégration architecturale",
    ],
    galleryImages: [
      "/placeholder.svg?height=400&width=600&text=Totem 1",
      "/placeholder.svg?height=400&width=600&text=Totem 2",
    ],
  },
  {
    id: 5,
    title: "Enseigne Néon 'Bar Lounge'",
    description:
      "Création d'une enseigne LED effet néon pour un bar lounge, visant à instaurer une ambiance rétro et moderne. L'enseigne, représentant le logo du bar, a été réalisée avec des tubes LED flexibles pour imiter l'aspect du néon traditionnel, mais avec une meilleure efficacité énergétique et durabilité.",
    image: "/placeholder.svg?height=600&width=800&text=Bar Lounge Neon",
    category: "Loisirs",
    slug: "bar-lounge",
    client: "The Velvet Lounge",
    location: "Bordeaux, France",
    date: "Juin 2023",
    features: [
      "Enseigne LED effet néon flexible",
      "Couleurs vives et personnalisées",
      "Faible consommation d'énergie",
      "Installation intérieure",
      "Ambiance unique",
    ],
    galleryImages: [
      "/placeholder.svg?height=400&width=600&text=Bar 1",
      "/placeholder.svg?height=400&width=600&text=Bar 2",
    ],
  },
  {
    id: 6,
    title: "Signalétique Intérieure 'Bureau Moderne'",
    description:
      "Réalisation d'une signalétique intérieure élégante pour un espace de bureaux moderne. Le projet comprenait des lettres découpées en aluminium brossé pour les noms de salles et des panneaux directionnels en Plexiglas gravé, contribuant à une atmosphère professionnelle et intuitive.",
    image: "/placeholder.svg?height=600&width=800&text=Bureau Moderne",
    category: "Intérieur",
    slug: "bureau-moderne",
    client: "InnovCorp Solutions",
    location: "Nantes, France",
    date: "Mai 2023",
    features: [
      "Lettres découpées aluminium brossé",
      "Panneaux Plexiglas gravés",
      "Design minimaliste",
      "Installation intérieure",
      "Amélioration de l'orientation",
    ],
    galleryImages: [
      "/placeholder.svg?height=400&width=600&text=Bureau Int 1",
      "/placeholder.svg?height=400&width=600&text=Bureau Int 2",
    ],
  },
]

interface RealisationPageProps {
  params: {
    slug: string
  }
}

export default function RealisationPage({ params }: RealisationPageProps) {
  const realisation = realisations.find((r) => r.slug === params.slug)

  if (!realisation) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <Header />
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">Réalisation non trouvée</h1>
          <p className="text-xl text-gray-400">La réalisation que vous recherchez nexiste pas.</p>
          <Link href="/realisations">
            <Button className="mt-8 bg-blue-600 hover:bg-blue-700">Retour aux réalisations</Button>
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
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/realisations">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux réalisations
              </Button>
            </Link>
          </div>

          {/* Realization Content */}
          <article className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <Image
              src={realisation.image || "/placeholder.svg"}
              alt={realisation.title}
              width={800}
              height={600}
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
            <Badge className="bg-blue-600 text-white mb-4">{realisation.category}</Badge>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">{realisation.title}</h1>
            <div className="flex flex-wrap items-center text-gray-600 text-sm mb-6 space-x-4">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>Client: {realisation.client}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Lieu: {realisation.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Date: {realisation.date}</span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-8">{realisation.description}</p>
            {realisation.features && realisation.features.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Points Clés du Projet</h2>
                <ul className="space-y-2 text-gray-700">
                  {realisation.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {realisation.galleryImages && realisation.galleryImages.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Galerie du Projet</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {realisation.galleryImages.map((imgSrc, index) => (
                    <Image
                      key={index}
                      src={imgSrc || "/placeholder.svg"}
                      alt={`${realisation.title} - Image ${index + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                    />
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* CTA Section */}
          <div className="mt-12 text-center bg-gray-100 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Un projet similaire en tête ?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Laissez-nous transformer votre vision en une enseigne percutante.
            </p>
            <Link href="/demande-devis">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">Demander un devis</Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
