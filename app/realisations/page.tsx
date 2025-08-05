"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

// Dummy data for realisations
const realisations = [
  {
    id: 1,
    title: "Enseigne Restaurant 'Le Gourmet'",
    description:
      "Création et installation d'une enseigne LED sur mesure pour un restaurant gastronomique.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Restaurant",
    slug: "restaurant-le-gourmet",
  },
  {
    id: 2,
    title: "Lettres Découpées 'Boutique Chic'",
    description:
      "Lettres découpées en Plexiglas pour une boutique de mode, avec rétro-éclairage subtil.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Commerce",
    slug: "boutique-chic",
  },
  {
    id: 3,
    title: "Panneau Publicitaire 'Garage Auto'",
    description:
      "Grand panneau Dibond résistant aux intempéries pour un garage automobile.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Industrie",
    slug: "garage-auto",
  },
  {
    id: 4,
    title: "Totem Lumineux 'Centre Commercial'",
    description:
      "Totem lumineux imposant pour l'entrée d'un centre commercial, haute visibilité.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Grand Format",
    slug: "centre-commercial-totem",
  },
  {
    id: 5,
    title: "Enseigne Néon 'Bar Lounge'",
    description:
      "Enseigne LED effet néon pour un bar lounge, ambiance rétro et moderne.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Loisirs",
    slug: "bar-lounge",
  },
  {
    id: 6,
    title: "Signalétique Intérieure 'Bureau Moderne'",
    description:
      "Signalétique intérieure élégante avec lettres en aluminium brossé pour des bureaux.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Intérieur",
    slug: "bureau-moderne",
  },
];

export default function RealisationsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <div className="pt-20 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-blue-500 bg-clip-text text-transparent">
              Nos Réalisations
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez quelques-uns de nos projets d'enseignes lumineuses et
              signalétiques sur mesure
            </p>
          </div>

          {/* Realisations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realisations.map((project) => (
              <Card
                key={project.id}
                className="bg-white border border-gray-200 hover:border-blue-500 transition-all duration-300 transform hover:scale-[1.02] overflow-hidden h-full shadow-sm hover:shadow-md"
              >
                <div className="relative h-56">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400} 
                    height={300} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-yellow-500 text-black text-xs px-3 py-1 rounded-full font-medium">
                    {project.category}
                  </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
                    {project.description}
                  </p>
                  <Link
                    href={`/realisations/${project.slug}`}
                    className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    <span>Voir le projet</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Un projet similaire en tête ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Laissez-nous transformer votre vision en une enseigne percutante.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/configurateur">
                <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-white">
                  Configurer mon enseigne
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-gray-100 px-8 py-3"
                >
                  Demander un devis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
