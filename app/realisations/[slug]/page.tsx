import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, MapPin, Calendar, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/public/img1.jpg";
import img2 from "@/public/img2.jpg";
import img3 from "@/public/img3.jpg";
import img4 from "@/public/img4.jpg";
import img5 from "@/public/img5.jpg";
import img6 from "@/public/img6.jpg";
import img7 from "@/public/img7.jpg";
import img8 from "@/public/img8.jpg";
import img9 from "@/public/img9.jpg";
import img10 from "@/public/img10.jpg";
import img11 from "@/public/img11.jpg";
import img12 from "@/public/img12.jpg";
import img13 from "@/public/img13.jpg";
import img14 from "@/public/img14.jpg";
import img15 from "@/public/img15.jpg";
import img16 from "@/public/img16.jpg";
import img17 from "@/public/img17.jpg";
import img18 from "@/public/img18.jpg";
import img19 from "@/public/img19.jpg";
import img22 from "@/public/img22.jpg"

export const realisations = [
  {
    id: 1,
    title: "Enseigne Lumineuse 'Frite Fraîche Kebab Maison'",
    description:
      "Création et installation d'une enseigne lumineuse ronde pour un établissement proposant des frites fraîches et des kebabs faits maison. L'enseigne présente un design moderne avec un logo stylisé et des inscriptions claires. Le projet a été réalisé sur mesure pour attirer l'attention des passants avec un éclairage LED vif et un design attrayant, reflétant la qualité des produits proposés.",
    image: img1,
    category: "Restauration Rapide",
    slug: "frite-fraiche-kebab-maison",
    client: "Frite Fraîche Kebab Maison",
    location: "Casablanca, Maroc",
    date: "Novembre 2023",
    features: [
      "Enseigne lumineuse ronde double face",
      "Structure en aluminium laqué noir",
      "Éclairage LED haute luminosité",
      "Logo stylisé 'TF' avec un kebab",
      "Inscriptions 'FRITE FRAÎCHE' et 'KEBAB MAISON' claires",
      "Installation murale sur potence discrète",
    ],
    galleryImages: [img1],
  },
  {
    id: 2,
    title: "Enseigne Lumineuse 'TIME FOOD'",
    description:
      "Conception et installation d'un ensemble d'enseignes lumineuses pour un restaurant de restauration rapide. Le projet inclut une grande enseigne en lettres boîtiers lumineuses pour le nom 'TIME', un caisson lumineux pour le mot 'FOOD' et deux enseignes rondes suspendues 'Frite Fraîche Kebab Maison'. L'objectif était de maximiser la visibilité nocturne et de créer une identité visuelle moderne et percutante.",
    image: img2,
    category: "Restauration Rapide",
    slug: "enseigne-time-food",
    client: "TIME FOOD",
    location: "Rabat, Maroc",
    date: "Janvier 2024",
    features: [
      "Lettres boîtiers lumineuses pour 'TIME'",
      "Éclairage LED rouge et blanc",
      "Caisson lumineux pour 'FOOD'",
      "Deux enseignes rondes suspendues 'Frite Fraîche Kebab Maison'",
      "Combinaison de plusieurs types d'enseignes pour une visibilité optimale",
    ],
    galleryImages: [img2],
  },
  {
    id: 3,
    title: "Enseigne Restaurant 'La Médina'",
    description:
      "Création d'une enseigne de façade pour le restaurant 'La Médina'. Le panneau principal de couleur orange vive est mis en valeur par des lettres découpées en relief. Le design inclut un logo distinctif avec une silhouette de chameau et de palmiers, évoquant une ambiance exotique et chaleureuse.",
    image: img3,
    category: "Restaurant",
    slug: "restaurant-la-medina",
    client: "La Médina",
    location: "Lille, France",
    date: "Février 2024",
    features: [
      "Enseigne de façade en panneau rigide",
      "Fond orange mat",
      "Lettres découpées en relief de couleur noire",
      "Logo avec un chameau et des palmiers",
      "Informations de contact et type d'établissement visibles",
    ],
    galleryImages: [img3],
  },
  {
    id: 4,
    title: "Enseigne 'Mister Cook 99'",
    description:
      "Conception et installation d'une enseigne moderne et percutante pour l'établissement 'Mister Cook 99'. Le panneau noir laqué offre un contraste saisissant avec le logo rond et les lettres en relief blanches. L'éclairage extérieur par spots accentue la visibilité et met en avant les services proposés : 'Grillades' et 'Snack'.",
    image: img4,
    category: "Restauration Rapide",
    slug: "enseigne-mister-cook-99",
    client: "Mister Cook 99",
    location: "Paris, France",
    date: "Mars 2024",
    features: [
      "Panneau en composite laqué noir brillant",
      "Lettres boîtiers en relief 'COOK'",
      "Chiffres '99' en relief rouge",
      "Logo circulaire avec illustration d'un chef",
      "Éclairage par spots orientables externes",
      "Mention des spécialités 'Grillades' et 'Snack'",
    ],
    galleryImages: [img4, img5],
  },
  {
    id: 5,
    title: "Enseigne 'Time Shop'",
    description:
      "Création et installation d'une enseigne de façade et de deux enseignes rondes suspendues pour le commerce 'Time Shop'. Le panneau principal en noir brillant met en valeur le nom du magasin en lettres boîtiers lumineuses. Des informations clés comme les horaires et les services sont ajoutées en rose pour une touche de modernité.",
    image: img8,
    category: "Alimentation Générale",
    slug: "enseigne-time-shop",
    client: "Time Shop",
    location: "Lille, France",
    date: "Avril 2024",
    features: [
      "Enseigne de façade sur panneau noir laqué",
      "Lettres boîtiers en relief pour 'TIME SHOP'",
      "Texte d'information en vinyle rose",
      "Deux enseignes rondes suspendues double face",
      "Éclairage par spots orientables et lettres lumineuses",
    ],
    galleryImages: [img6],
  },
  {
    id: 6,
    title: "Enseigne Lumineuse 'La Renaissance du Wonen'",
    description:
      "Conception et installation d'une enseigne lumineuse pour une boutique de prêt-à-porter. Le nom 'La Renaissance du Wonen' est réalisé en néon LED sur mesure avec une typographie cursive élégante, offrant un style moderne et distinctif qui attire l'attention en soirée.",
    image: img9,
    category: "Prêt-à-porter",
    slug: "la-renaissance-du-wonen",
    client: "La Renaissance du Wonen",
    location: "Paris, France",
    date: "Mai 2024",
    features: [
      "Enseigne en néon LED sur mesure",
      "Typographie cursive personnalisée",
      "Éclairage blanc froid",
      "Installation sur une façade sombre",
      "Design minimaliste et chic",
    ],
    galleryImages: [img7],
  },
  {
    id: 7,
    title: "Enseigne Intérieure 'L'Atelier'",
    description:
      "Création d'une enseigne intérieure rétro-éclairée pour une boutique de robes traditionnelles. Le logo 'LH' est mis en valeur par un halo lumineux sur un panneau blanc, accompagné des inscriptions 'L'Atelier' et 'Robes Traditionnelles'. Le design sobre et élégant s'intègre parfaitement à la décoration intérieure de la boutique.",
    image: img6,
    category: "Boutique de vêtements",
    slug: "enseigne-interieure-l-atelier",
    client: "L'Atelier",
    location: "Casablanca, Maroc",
    date: "Juin 2024",
    features: [
      "Panneau mural décoratif blanc mat",
      "Logo ovale rétro-éclairé",
      "Lettres découpées en relief pour le texte",
      "Éclairage LED intégré",
      "Design sur mesure pour la décoration intérieure",
    ],
    galleryImages: [img8],
  },
  {
    id: 8,
    title: "Enseigne Façade 'Sidi Bou Said'",
    description:
      "Conception d'une enseigne de façade simple et efficace pour un établissement nommé 'Sidi Bou Said'. Les lettres boîtiers en relief, de couleur cyan sur un fond gris clair, offrent une excellente lisibilité et un style épuré, tout en évoquant les couleurs de la célèbre ville tunisienne.",
    image: img7,
    category: "Restaurant",
    slug: "sidi-bou-said",
    client: "Sidi Bou Said",
    location: "Paris, France",
    date: "Juillet 2024",
    features: [
      "Panneau de façade en aluminium composite",
      "Lettres boîtiers en relief non lumineuses",
      "Couleurs: texte cyan sur fond gris clair",
      "Design minimaliste et moderne",
      "Installation sur une façade en briques",
    ],
    galleryImages: [img9],
  },
  {
    id: 9,
    title: "Enseigne Lumineuse 'La Fayette Food'",
    description:
      "Création d'une enseigne de façade lumineuse pour le restaurant 'La Fayette Food'. L'enseigne se compose de lettres boîtiers rétro-éclairées sur un panneau noir, offrant une visibilité maximale de nuit. Les spécialités du restaurant sont clairement indiquées pour attirer la clientèle.",
    image: img10,
    category: "Restauration Rapide",
    slug: "la-fayette-food",
    client: "La Fayette Food",
    location: "Lyon, France",
    date: "Août 2024",
    features: [
      "Panneau de façade en composite noir",
      "Lettres boîtiers lumineuses blanches",
      "Typographie personnalisée et élégante",
      "Liste des spécialités en lettres adhésives",
    ],
    galleryImages: [img10],
  },
  {
    id: 10,
    title: "Enseigne de Comptoir 'Number One Tacos'",
    description:
      "Réalisation d'une enseigne lumineuse sur mesure pour le comptoir de 'Number One Tacos'. Le caisson rond rétro-éclairé met en valeur le logo de la marque et s'intègre harmonieusement dans la décoration intérieure du restaurant, renforçant l'identité visuelle de l'établissement.",
    image: img11,
    category: "Décoration intérieure",
    slug: "number-one-tacos",
    client: "Number One Tacos",
    location: "Marseille, France",
    date: "Septembre 2024",
    features: [
      "Enseigne ronde lumineuse",
      "Design personnalisé pour le logo",
      "Éclairage LED interne",
      "Installation sur le comptoir d'accueil",
      "Intégration au carrelage mosaïque du comptoir",
    ],
    galleryImages: [img11,img22],
  },
  {
    id: 11,
    title: "Enseigne 'Barbershop Dender'",
    description:
      "Conception d'une enseigne de façade pour le salon 'Barbershop Dender'. L'enseigne combine des lettres boîtiers lumineuses pour le nom et un logo central rond, créant un look à la fois classique et moderne, et maximisant la visibilité du salon.",
    image: img12,
    category: "Salon de coiffure",
    slug: "barbershop-dender",
    client: "Barbershop Dender",
    location: "Bruxelles, Belgique",
    date: "Octobre 2024",
    features: [
      "Panneau de façade noir brillant",
      "Lettres boîtiers lumineuses blanches en relief",
      "Logo central rond rétro-éclairé",
      "Éclairage LED intégré pour une visibilité nocturne",
    ],
    galleryImages: [img12],
  },
  {
    id: 12,
    title: "Enseigne 'SN Institut de Beauté'",
    description:
      "Réalisation d'une enseigne moderne pour l'institut de beauté 'SN'. L'enseigne se compose d'un panneau blanc avec le logo 'SN' en lettres boîtiers rétro-éclairées, créant un halo lumineux élégant. Le design épuré et contemporain s'accorde parfaitement avec l'esthétique du bâtiment.",
    image: img13,
    category: "Institut de beauté",
    slug: "sn-institut-de-beaute",
    client: "SN Institut de Beauté",
    location: "Lille, France",
    date: "Novembre 2024",
    features: [
      "Panneau de façade blanc mat",
      "Lettres boîtiers en relief 'SN'",
      "Rétro-éclairage LED par halo lumineux",
      "Texte 'Institut de Beauté' en lettres découpées noires",
    ],
    galleryImages: [img13],
  },
  {
    id: 13,
    title: "Enseigne Lumineuse 'Fresh Pizza'",
    description:
      "Création d'une enseigne de façade et de caissons lumineux ronds pour la pizzeria 'Fresh Pizza'. L'ensemble allie un panneau noir brillant avec des lettres lumineuses et deux caissons suspendus, pour une identité visuelle moderne et une visibilité optimale de jour comme de nuit. Le design met en avant le logo de la marque et les services proposés.",
    image: img14,
    category: "Restauration Rapide",
    slug: "fresh-pizza",
    client: "Fresh Pizza",
    location: "Lille, France",
    date: "Décembre 2024",
    features: [
      "Panneau de façade en composite noir",
      "Lettres boîtiers lumineuses en relief 'Fresh Pizza'",
      "Deux caissons lumineux ronds avec logo",
      "Mentions des services : 'Sur Place - Emporter - Livraison'",
      "Design moderne et harmonieux",
    ],
    galleryImages: [img14, img15],
  },
  {
    id: 14,
    title: "Enseigne Lumineuse 'Shisha Company'",
    description:
      "Conception et installation d'une enseigne de façade pour le commerce 'Shisha Company'. Le panneau noir brillant sert de fond à des lettres boîtiers lumineuses blanches et un logo rond rétro-éclairé. Le design sobre et élégant confère une image de marque professionnelle et moderne.",
    image: img16,
    category: "Commerce de détail",
    slug: "shisha-company",
    client: "Shisha Company",
    location: "Bruxelles, Belgique",
    date: "Janvier 2025",
    features: [
      "Panneau de façade en composite noir laqué",
      "Lettres boîtiers lumineuses blanches",
      "Caisson lumineux rond avec logo",
      "Éclairage LED intégré et halo lumineux",
      "Design élégant et professionnel",
    ],
    galleryImages: [img16],
  },
  {
    id: 15,
    title: "Enseigne Lumineuse 'MJ Barber'",
    description:
      "Création d'une enseigne de façade pour le salon de coiffure 'MJ Barber'. Le projet combine des lettres lumineuses pour le nom, un caisson lumineux rond avec le logo, et un poteau de barbier traditionnel. Une guirlande lumineuse a été ajoutée pour un effet festif et une visibilité accrue de nuit.",
    image: img17,
    category: "Salon de coiffure",
    slug: "mj-barber",
    client: "MJ Barber",
    location: "Paris, France",
    date: "Février 2025",
    features: [
      "Lettres boîtiers lumineuses pour 'MJ BARBER'",
      "Caisson lumineux rond avec logo",
      "Guirlande lumineuse LED décorative",
      "Poteau de barbier traditionnel lumineux",
      "Combinaison de plusieurs éléments lumineux",
    ],
    galleryImages: [img17],
  },
  {
    id: 16,
    title: "Enseigne Caisson Lumineux 'Ch'ti Kebab'",
    description:
      "Réalisation d'un caisson lumineux rond double face pour 'Ch'ti Kebab'. Le design est personnalisé avec un fond jaune vif et une illustration de chef cuisinier. L'enseigne est conçue pour être installée en potence, garantissant une visibilité maximale aux passants.",
    image: img19,
    category: "Restauration Rapide",
    slug: "chti-kebab",
    client: "Ch'ti Kebab",
    location: "Lille, France",
    date: "Mars 2025",
    features: [
      "Caisson lumineux rond double face",
      "Design graphique personnalisé 'Ch'ti Kebab'",
      "Fond jaune pour un contraste élevé",
      "Illustration d'un chef stylisé",
      "Conçu pour une installation sur potence",
    ],
    galleryImages: [img19 , img18],
  },
];

interface RealisationPageProps {
  params: {
    slug: string;
  };
}

export default function RealisationPage({ params }: RealisationPageProps) {
  const realisation = realisations.find((r) => r.slug === params.slug);

  if (!realisation) {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center text-center py-12 px-4">
          <div>
            <h1 className="text-4xl font-bold mb-4">Réalisation non trouvée</h1>
            <p className="text-xl text-gray-600">
              La réalisation que vous recherchez n&apos;existe pas.
            </p>
            <Link href="/realisations">
              <Button className="mt-8 bg-blue-600 hover:bg-blue-700">
                Retour aux réalisations
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Header />
      <div className="flex-grow pt-20 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/realisations">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux réalisations
              </Button>
            </Link>
          </div>

          {/* Realization Content */}
          <article className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <div className="w-full h-[24rem] md:h-[30rem] lg:h-[36rem] overflow-hidden rounded-lg mb-6 relative">
              <Image
                src={realisation.image}
                alt={realisation.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <Badge className="bg-blue-600 text-white mb-4">
              {realisation.category}
            </Badge>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              {realisation.title}
            </h1>
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
            <p className="text-gray-700 leading-relaxed mb-8">
              {realisation.description}
            </p>
            {realisation.features && realisation.features.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Points Clés du Projet
                </h2>
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
            {realisation.galleryImages &&
              realisation.galleryImages.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    Galerie du Projet
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {realisation.galleryImages.map((imgSrc, index) => (
                      <div
                        key={index}
                        className="w-full h-48 relative rounded-lg shadow-md overflow-hidden"
                      >
                        <Image
                          src={imgSrc}
                          alt={`${realisation.title} - Image ${index + 1}`}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </article>

          {/* CTA Section */}
          <div className="mt-12 text-center bg-gray-100 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Un projet similaire en tête ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Laissez-nous transformer votre vision en une enseigne percutante.
            </p>
            <Link href="/demande-devis">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Demander un devis
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
