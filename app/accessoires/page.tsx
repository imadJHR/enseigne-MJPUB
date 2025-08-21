"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { QuickViewDialog } from "../components/QuickViewDialog";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ShoppingCart, Search, Filter, Eye } from "lucide-react";
import { useCart } from "../context/CartContext";
import Image, { StaticImageData } from "next/image";

// Local image imports
import a1 from "../../public/a1.jpeg";
import a2 from "../../public/a2.jpeg";
import a3 from "../../public/a3.jpeg";

// Define a robust type for images that can be local (StaticImageData) or remote (string)
type ImageSource = string | StaticImageData;

// Define the structure for an accessory item
interface Accessory {
  id: number;
  name: string;
  price: number;
  image: ImageSource;
  images: ImageSource[];
  description: string;
  detailedDescription: string;
  rating: number;
  inStock: boolean;
  category: string;
  brand: string;
  features: string[];
  specifications: { name: string; value: string }[];
  warranty: string;
  shipping: string;
}

// --- Data Section ---
const accessories: Accessory[] = [
  {
    id: 1,
    name: "EASYFIX GRAND BLANC A COLLER 50 pcs",
    price: 20,
    image: a1,
    images: [a1, a2],
    description:
      "Butée de porte murale adhésive, grand modèle, de couleur blanche.",
    detailedDescription:
      "La butée de porte EASYFIX Grand Blanc à coller est une solution simple et efficace pour protéger vos murs, portes et meubles des impacts. Elle est composée d'un corps en plastique blanc et d'un amortisseur transparent qui absorbe les chocs en silence. Son installation est un jeu d'enfant : pas besoin de percer, il suffit de la coller sur une surface propre et lisse. Son design discret s'intègre facilement dans n'importe quel décor.",
    rating: 4.5,
    inStock: true,
    category: "fixations",
    brand: "EASYFIX",
    features: [
      "Installation facile sans perçage (à coller)",
      "Protection efficace contre les chocs",
      "Amortisseur silencieux",
      "Design discret et moderne",
      "Matériaux résistants",
    ],
    specifications: [
      {
        name: "Couleur",
        value: "Blanc (corps), Transparent (amortisseur)",
      },
      { name: "Matériau", value: "Plastique / Silicone" },
      { name: "Type de fixation", value: "Adhésif (à coller)" },
      { name: "Usage", value: "Intérieur (mur, sol)" },
      {
        name: "Dimensions (approximatives)",
        value: "Diamètre base: 28 mm, Hauteur: 23 mm",
      },
    ],
    warranty: "Garantie 1 an contre les défauts de fabrication.",
    shipping: "Expédié sous 24h. Livraison au Maroc en 2 à 3 jours ouvrables.",
  },
  {
    id: 2,
    name: "Connecteur Wago 221-412 pour 2 conducteurs 20 pcs",
    price: 10,
    image: a3,
    images: [a3],
    description:
      "Borne de connexion compacte Wago série 221 pour le raccordement de 2 conducteurs. Idéale pour tous types de fils (souples, semi-rigides et rigides) sans outils.",
    detailedDescription:
      "Le connecteur Wago 221-412 est une borne de raccordement universelle qui simplifie les installations électriques. Grâce à ses leviers de manipulation orange, la connexion et la déconnexion des fils se font sans effort et sans aucun outil. Son boîtier transparent permet de vérifier visuellement si les conducteurs sont correctement insérés et dénudés. Sa taille compacte le rend parfait pour une utilisation dans les boîtes de dérivation et les espaces restreints. Il est réutilisable et garantit une connexion sûre et durable.",
    rating: 4.9,
    inStock: true,
    category: "connecteurs",
    brand: "Wago",
    features: [
      "Connexion facile et rapide avec leviers",
      "Compatibilité universelle : fils souples, semi-rigides et rigides",
      "Boîtier transparent pour contrôle visuel de la connexion",
      "Design extrêmement compact pour économiser de l'espace",
      "Deux points de test pour une mesure facile de la tension",
    ],
    specifications: [
      { name: "Modèle", value: "Wago 221-412" },
      { name: "Nombre de points de connexion", value: "2" },
      { name: "Tension nominale (UL)", value: "600 V" },
      { name: "Courant nominal", value: "20 A" },
      { name: "Section de conducteur", value: "0.14 à 4 mm² / 28–12 AWG" },
      { name: "Température maximale d'utilisation", value: "105°C" },
      { name: "Matériau du boîtier", value: "Polycarbonate (PC)" },
      { name: "Couleur", value: "Gris / Orange" },
    ],
    warranty: "Garantie constructeur standard.",
    shipping:
      "Disponible chez la plupart des distributeurs de matériel électrique et dans les grandes surfaces de bricolage.",
  },
];

const categories = [
  { id: "all", name: "Tous les accessoires" },
  { id: "alimentations", name: "Alimentations" },
  { id: "fixations", name: "Fixations" },
  { id: "cables", name: "Câbles" },
  { id: "connecteurs", name: "Connecteurs" },
];

const sortOptions = [
  { id: "name", name: "Nom A-Z" },
  { id: "price-asc", name: "Prix croissant" },
  { id: "price-desc", name: "Prix décroissant" },
  { id: "rating", name: "Mieux notés" },
];

// --- Component ---
export default function AccessoriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [quickViewAccessory, setQuickViewAccessory] = useState<Accessory | null>(null);
  const { addToCart } = useCart();

  const getImageUrl = (image: ImageSource): string => {
    return typeof image === "string" ? image : image.src;
  };

  const filteredAccessories = accessories
    .filter((accessory) => {
      const matchesSearch =
        accessory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        accessory.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        accessory.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || accessory.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const handleCardAddToCart = (accessory: Accessory) => {
    addToCart({
      id: `accessory-${accessory.id}`,
      name: accessory.name,
      price: accessory.price,
      image: getImageUrl(accessory.image),
      quantity: 1,
      type: "accessory",
    });
  };

  const handleDialogAddToCart = (accessory: Accessory, quantity: number) => {
    addToCart({
      id: `accessory-${accessory.id}`,
      name: accessory.name,
      price: accessory.price,
      image: getImageUrl(accessory.image),
      quantity: quantity,
      type: "accessory",
    });
  };

  return (
    <div className="min-h-screen mt-26 bg-white flex flex-col">
      <Header />
      {/* SEO: JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Accessoires pour Enseignes LED & Signalétique",
            description:
              "Découvrez notre gamme complète d'accessoires pour l'installation et la maintenance de vos enseignes LED, lettres découpées et signalétique.",
            url: "https://lettre3dshop.com/accessoires",
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
                  name: "Accessoires",
                  item: "https://lettre3dshop.com/accessoires",
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
            name: "Accessoires pour Enseignes LED",
            itemListElement: accessories.map((accessory, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `https://lettre3dshop.com/accessoires#${accessory.id}`,
              name: accessory.name,
              description: accessory.description,
              offers: {
                "@type": "Offer",
                price: accessory.price,
                priceCurrency: "EUR",
                availability: accessory.inStock
                  ? "https://schema.org/InStock"
                  : "https://schema.org/OutOfStock",
              },
            })),
          }),
        }}
      />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-blue-500 bg-clip-text text-transparent">
              Accessoires pour Enseignes LED & Signalétique
            </h1>
            <p className="text-lg max-w-3xl mx-auto">
              Découvrez notre gamme complète d'accessoires pour l'installation et la maintenance de vos enseignes LED, lettres découpées et signalétique.
              Butées de porte, connecteurs Wago, câbles, alimentations et fixations de qualité professionnelle.
              Livraison rapide au Maroc et devis gratuit sur demande.
            </p>
          </div>
          {/* Search and Filter */}
          <div className="mb-8 p-4 bg-white rounded-lg border border-indigo-200 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400 h-4 w-4" />
                  <Input
                    placeholder="Rechercher par nom, marque..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full border-indigo-300 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      className={
                        selectedCategory === category.id
                          ? "bg-indigo-600 text-white"
                          : "border-indigo-400 text-indigo-700"
                      }
                      onClick={() => setSelectedCategory(category.id)}
                      size="sm"
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-indigo-500" />
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="border-indigo-300">
                    <SelectValue placeholder="Trier par" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.id} value={option.id}>
                        {option.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-indigo-700">
              {filteredAccessories.length} résultat
              {filteredAccessories.length > 1 ? "s" : ""}
            </p>
          </div>
          {/* Accessories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAccessories.map((accessory) => (
              <Card
                key={accessory.id}
                id={`accessory-${accessory.id}`}
                className="overflow-hidden group flex flex-col border border-indigo-200"
              >
                <div className="relative">
                  <Image
                    src={accessory.image}
                    alt={`Accessoire ${accessory.name} - ${accessory.brand} - ${accessory.description}`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <Badge
                    variant={accessory.inStock ? "default" : "destructive"}
                    className={`absolute top-2 left-2 ${
                      accessory.inStock
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {accessory.inStock ? "En stock" : "Rupture"}
                  </Badge>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity bg-indigo-600 text-white"
                    onClick={() => setQuickViewAccessory(accessory)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
                <CardContent className="p-4 flex flex-col flex-grow">
                  <h3 className="font-bold text-sm mb-1 text-indigo-700 truncate">
                    {accessory.name}
                  </h3>
                  <p className="text-sm text-gray-700 mb-2 flex-grow">
                    {accessory.description}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-lg text-indigo-800">
                      {accessory.price.toFixed(2)} €
                    </span>
                    <Button
                      size="sm"
                      className="bg-indigo-600 text-white hover:bg-indigo-700"
                      onClick={() => handleCardAddToCart(accessory)}
                      disabled={!accessory.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Ajouter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-indigo-800">
              Questions Fréquentes sur nos Accessoires
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-indigo-200">
                <h3 className="font-bold mb-2 text-indigo-700">
                  Quels accessoires sont indispensables pour installer une enseigne LED ?
                </h3>
                <p className="text-gray-700">
                  Pour installer une enseigne LED, vous aurez besoin de fixations adaptées à votre support (mur, sol, plafond),
                  d'alimentations compatibles avec la puissance de vos modules LED,
                  de câbles de connexion, et éventuellement de connecteurs pour un raccordement propre et sécurisé.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-indigo-200">
                <h3 className="font-bold mb-2 text-indigo-700">
                  Proposez-vous des accessoires pour l'installation au Maroc ?
                </h3>
                <p className="text-gray-700">
                  Oui, tous nos accessoires sont disponibles pour une livraison rapide au Maroc.
                  Nous proposons également un service de conseil pour vous aider à choisir les bons produits selon votre projet.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-indigo-200">
                <h3 className="font-bold mb-2 text-indigo-700">
                  Comment choisir le bon connecteur pour mon installation ?
                </h3>
                <p className="text-gray-700">
                  Le choix du connecteur dépend de la section de vos câbles, de l'intensité du courant,
                  et de l'environnement (intérieur/extérieur). Nos connecteurs Wago sont universels et adaptés à la plupart des installations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-indigo-200">
                <h3 className="font-bold mb-2 text-indigo-700">
                  Puis-je obtenir un devis pour des accessoires en gros ?
                </h3>
                <p className="text-gray-700">
                  Absolument ! Contactez-nous via notre formulaire ou par email pour un devis personnalisé,
                  que ce soit pour des petites ou grandes quantités.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      {/* Quick View Dialog - Rendered conditionally */}
      {quickViewAccessory && (
        <QuickViewDialog
          accessory={quickViewAccessory}
          open={!!quickViewAccessory}
          onOpenChange={(isOpen) => {
            if (!isOpen) {
              setQuickViewAccessory(null);
            }
          }}
          onAddToCart={handleDialogAddToCart}
        />
      )}
    </div>
  );
}
