"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import img1 from "@/public/img1.jpg";
import img2 from "@/public/img2.jpg";
import img3 from "@/public/img3.jpg";
import img4 from "@/public/img4.jpg";
import img6 from "@/public/img6.jpg";
import img7 from "@/public/img7.jpg";
import img8 from "@/public/img8.jpg";
import img9 from "@/public/img9.jpg";
import img10 from "@/public/img10.jpg";
import img11 from "@/public/img11.jpg";
import img12 from "@/public/img12.jpg";
import img13 from "@/public/img13.jpg";
import img14 from "@/public/img14.jpg";
import img16 from "@/public/img16.jpg";
import img17 from "@/public/img17.jpg";
import img19 from "@/public/img19.jpg";

const realisations = [
  {
    id: 1,
    title: "Enseigne Lumineuse 'Frite Fraîche Kebab Maison",
    description:
      "Création et installation d'une enseigne lumineuse ronde pour un établissement proposant des frites fraîches et des kebabs faits maison. L'enseigne présente un design moderne avec un logo stylisé et des inscriptions claires.",
    image: img1,
    category: "Restauration",
    slug: "frite-fraiche-kebab-maison",
  },
  {
    id: 2,
    title: "Enseigne Lumineuse 'TIME FOOD'",
    description:
      "Conception et installation d'un ensemble d'enseignes lumineuses pour un restaurant de restauration rapide. Le projet inclut une grande enseigne en lettres boîtiers lumineuses pour le nom 'TIME', un caisson lumineux pour le mot 'FOOD' et deux enseignes rondes suspendues 'Frite Fraîche Kebab Maison'. L'objectif était de maximiser la visibilité nocturne et de créer une identité visuelle moderne et percutante.",
    image: img2,
    category: "Restauration",
    slug: "enseigne-time-food",
  },
  {
    id: 3,
    title: "Enseigne Restaurant 'La Médina'",
    description:
      "Création d'une enseigne de façade pour le restaurant 'La Médina'. Le panneau principal de couleur orange vive est mis en valeur par des lettres découpées en relief. Le design inclut un logo distinctif avec une silhouette de chameau et de palmiers, évoquant une ambiance exotique et chaleureuse.",
    image: img3,
    category: "Restaurant",
    slug: "restaurant-la-medina",
  },
  {
    id: 4,
    title: "Enseigne 'Mister Cook 99'",
    description:
      "Conception et installation d'une enseigne moderne et percutante pour l'établissement 'Mister Cook 99'. Le panneau noir laqué offre un contraste saisissant avec le logo rond et les lettres en relief blanches. L'éclairage extérieur par spots accentue la visibilité et met en avant les services proposés : 'Grillades' et 'Snack'.",
    image: img4,
    category: "Restauration Rapide",
    slug: "enseigne-mister-cook-99",
  },
  {
    id: 5,
    title: "Enseigne 'Time Shop'",
    description:
      "Création et installation d'une enseigne de façade et de deux enseignes rondes suspendues pour le commerce 'Time Shop'. Le panneau principal en noir brillant met en valeur le nom du magasin en lettres boîtiers lumineuses. Des informations clés comme les horaires et les services sont ajoutées en rose pour une touche de modernité.",
    image: img8,
    category: "Alimentation Générale",
    slug: "enseigne-time-shop",
  },
  {
    id: 6,
    title: "Enseigne Lumineuse 'La Renaissance du Wonen'",
    description:
      "Conception et installation d'une enseigne lumineuse pour une boutique de prêt-à-porter. Le nom 'La Renaissance du Wonen' est réalisé en néon LED sur mesure avec une typographie cursive élégante, offrant un style moderne et distinctif qui attire l'attention en soirée.",
    image: img9,
    category: "Prêt-à-porter",
    slug: "la-renaissance-du-wonen",
  },
  {
    id: 7,
    title: "Enseigne Intérieure 'L'Atelier'",
    description:
      "Création d'une enseigne intérieure rétro-éclairée pour une boutique de robes traditionnelles. Le logo 'LH' est mis en valeur par un halo lumineux sur un panneau blanc, accompagné des inscriptions 'L'Atelier' et 'Robes Traditionnelles'. Le design sobre et élégant s'intègre parfaitement à la décoration intérieure de la boutique.",
    image: img6,
    category: "Boutique de vêtements",
    slug: "enseigne-interieure-l-atelier",
  },
  {
    id: 8,
    title: "Enseigne Façade 'Sidi Bou Said'",
    description:
      "Conception d'une enseigne de façade simple et efficace pour un établissement nommé 'Sidi Bou Said'. Les lettres boîtiers en relief, de couleur cyan sur un fond gris clair, offrent une excellente lisibilité et un style épuré, tout en évoquant les couleurs de la célèbre ville tunisienne.",
    image: img7,
    category: "Restaurant",
    slug: "sidi-bou-said",
  },
  {
    id: 9,
    title: "Enseigne Lumineuse 'La Fayette Food'",
    description:
      "Création d'une enseigne de façade lumineuse pour le restaurant 'La Fayette Food'. L'enseigne se compose de lettres boîtiers rétro-éclairées sur un panneau noir, offrant une visibilité maximale de nuit. Les spécialités du restaurant sont clairement indiquées pour attirer la clientèle.",
    image: img10,
    category: "Restauration Rapide",
    slug: "la-fayette-food",
  },
  {
    id: 10,
    title: "Enseigne de Comptoir 'Number One Tacos'",
    description:
      "Réalisation d'une enseigne lumineuse sur mesure pour le comptoir de 'Number One Tacos'. Le caisson rond rétro-éclairé met en valeur le logo de la marque et s'intègre harmonieusement dans la décoration intérieure du restaurant, renforçant l'identité visuelle de l'établissement.",
    image: img11,
    category: "Décoration intérieure",
    slug: "number-one-tacos",
  },
  {
    id: 11,
    title: "Enseigne 'Barbershop Dender'",
    description:
      "Conception d'une enseigne de façade pour le salon 'Barbershop Dender'. L'enseigne combine des lettres boîtiers lumineuses pour le nom et un logo central rond, créant un look à la fois classique et moderne, et maximisant la visibilité du salon.",
    image: img12,
    category: "Salon de coiffure",
    slug: "barbershop-dender",
  },
  {
    id: 12,
    title: "Enseigne 'SN Institut de Beauté'",
    description:
      "Réalisation d'une enseigne moderne pour l'institut de beauté 'SN'. L'enseigne se compose d'un panneau blanc avec le logo 'SN' en lettres boîtiers rétro-éclairées, créant un halo lumineux élégant. Le design épuré et contemporain s'accorde parfaitement avec l'esthétique du bâtiment.",
    image: img13,
    category: "Institut de beauté",
    slug: "sn-institut-de-beaute",
  },
  {
    id: 13,
    title: "Enseigne Lumineuse 'Fresh Pizza'",
    description:
      "Création d'une enseigne de façade et de caissons lumineux ronds pour la pizzeria 'Fresh Pizza'. L'ensemble allie un panneau noir brillant avec des lettres lumineuses et deux caissons suspendus, pour une identité visuelle moderne et une visibilité optimale de jour comme de nuit. Le design met en avant le logo de la marque et les services proposés.",
    image: img14,
    category: "Restauration Rapide",
    slug: "fresh-pizza",
  },
  {
    id: 14,
    title: "Enseigne Lumineuse 'Shisha Company'",
    description:
      "Conception et installation d'une enseigne de façade pour le commerce 'Shisha Company'. Le panneau noir brillant sert de fond à des lettres boîtiers lumineuses blanches et un logo rond rétro-éclairé. Le design sobre et élégant confère une image de marque professionnelle et moderne.",
    image: img16,
    category: "Commerce de détail",
    slug: "shisha-company",
  },
  {
    id: 15,
    title: "Enseigne Lumineuse 'MJ Barber'",
    description:
      "Création d'une enseigne de façade pour le salon de coiffure 'MJ Barber'. Le projet combine des lettres lumineuses pour le nom, un caisson lumineux rond avec le logo, et un poteau de barbier traditionnel. Une guirlande lumineuse a été ajoutée pour un effet festif et une visibilité accrue de nuit.",
    image: img17,
    category: "Salon de coiffure",
    slug: "mj-barber",
  },
  {
    id: 16,
    title: "Enseigne Caisson Lumineux 'Ch'ti Kebab'",
    description:
      "Réalisation d'un caisson lumineux rond double face pour 'Ch'ti Kebab'. Le design est personnalisé avec un fond jaune vif et une illustration de chef cuisinier. L'enseigne est conçue pour être installée en potence, garantissant une visibilité maximale aux passants.",
    image: img19,
    category: "Restauration Rapide",
    slug: "chti-kebab",
  },
];

export default function RealisationsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      {/* SEO: JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Nos Réalisations d'Enseignes Lumineuses",
            description:
              "Découvrez nos réalisations d'enseignes lumineuses et signalétiques sur mesure pour restaurants, boutiques, salons de coiffure et plus.",
            url: "https://lettre3dshop.com/realisations",
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
                  name: "Réalisations",
                  item: "https://lettre3dshop.com/realisations",
                },
              ],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Réalisations d'Enseignes Lumineuses",
            itemListElement: realisations.map((project, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `https://lettre3dshop.com/realisations/${project.slug}`,
              name: project.title,
              description: project.description,
              image: project.image.src,
            })),
          }),
        }}
      />
      <div className="pt-20 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-blue-500 bg-clip-text text-transparent">
              Nos Réalisations
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez quelques-uns de nos projets d&apos;enseignes lumineuses
              et signalétiques sur mesure
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
                    src={project.image}
                    alt={`Photo de la réalisation : ${project.title}`}
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
