"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ShoppingCart, Star, Search, Filter, Eye, X, Check, Truck, Shield } from "lucide-react";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Accessory {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[];
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

export default function AccessoriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [quickViewAccessory, setQuickViewAccessory] = useState<Accessory | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();

  const accessories: Accessory[] = [
    {
      id: 1,
      name: "Alimentation LED 12V 60W",
      price: 45,
      image: "https://m.media-amazon.com/images/I/81I9VDDMrdL.__AC_SX300_SY300_QL70_ML2_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/81I9VDDMrdL.__AC_SX300_SY300_QL70_ML2_.jpg",
        "https://m.media-amazon.com/images/I/71S5ucJAAbL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71vjH6pEQGL._AC_SL1500_.jpg"
      ],
      description: "Alimentation stabilisée pour enseignes LED",
      detailedDescription: "Cette alimentation LED 12V 60W est parfaite pour alimenter vos bandeaux et enseignes LED. Avec une efficacité énergétique de 85% et une protection contre les surtensions, elle garantit une longue durée de vie à vos installations. Conforme aux normes de sécurité internationales, elle est également étanche (IP67) pour une utilisation en extérieur.",
      rating: 4.8,
      inStock: true,
      category: "alimentations",
      brand: "PowerLED",
      features: [
        "Protection contre les surtensions et les courts-circuits",
        "Étanche IP67 pour utilisation extérieure",
        "Efficacité énergétique de 85%",
        "Conforme aux normes CE et RoHS",
        "Câble d'alimentation inclus"
      ],
      specifications: [
        { name: "Tension de sortie", value: "12V DC" },
        { name: "Puissance", value: "60W" },
        { name: "Dimensions", value: "150x80x35mm" },
        { name: "Poids", value: "280g" },
        { name: "Température de fonctionnement", value: "-20°C à +60°C" }
      ],
      warranty: "3 ans",
      shipping: "Livraison gratuite sous 48h"
    },
    {
      id: 2,
      name: "Kit de fixation murale",
      price: 25,
      image: "https://m.media-amazon.com/images/I/61gUm5cWuzL._AC_UL320_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/61gUm5cWuzL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/71LcIWDTz9L.__AC_SY445_SX342_QL70_ML2_.jpg",
        "https://m.media-amazon.com/images/I/61Q+8+-P2aL._AC_SL1000_.jpg"
      ],
      description: "Supports et fixations pour montage mural",
      detailedDescription: "Ce kit de fixation complet vous permet d'installer facilement vos enseignes LED en intérieur comme en extérieur. Inclut tous les supports, vis et chevilles nécessaires pour une installation sécurisée. Les pièces sont en acier inoxydable pour résister à la corrosion et aux intempéries.",
      rating: 4.9,
      inStock: true,
      category: "fixations",
      brand: "FixPro",
      features: [
        "Acier inoxydable résistant à la corrosion",
        "Convient pour intérieur et extérieur",
        "Inclut tous les éléments de fixation",
        "Support jusqu'à 15kg",
        "Instructions détaillées incluses"
      ],
      specifications: [
        { name: "Matériau", value: "Acier inoxydable 304" },
        { name: "Charge maximale", value: "15kg" },
        { name: "Contenu du kit", value: "6 supports, 24 vis, 12 chevilles" },
        { name: "Compatibilité", value: "Toutes enseignes standards" }
      ],
      warranty: "5 ans",
      shipping: "Livraison gratuite sous 48h"
    },
    {
      id: 3,
      name: "Câble d'extension 5m",
      price: 15,
      image: "https://m.media-amazon.com/images/I/51qXOjkak+L._AC_SX300_SY300_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/51qXOjkak+L._AC_SX300_SY300_.jpg",
        "https://m.media-amazon.com/images/I/61lVcD3Xb-L._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71stQ3WP0eL._AC_SL1500_.jpg"
      ],
      description: "Câble d'extension étanche IP65",
      detailedDescription: "Ce câble d'extension de 5 mètres avec connecteurs étanches IP65 vous permet de prolonger facilement vos installations LED. Parfait pour relier des bandeaux LED entre eux ou pour connecter une enseigne à son alimentation. La gaine extérieure résistante aux UV protège le câble contre les intempéries.",
      rating: 4.7,
      inStock: true,
      category: "cables",
      brand: "CableTech",
      features: [
        "Étanche IP65 pour utilisation extérieure",
        "Gaine résistante aux UV",
        "Connecteurs plaqués or pour une meilleure conduction",
        "Câble de 2,5mm² pour une faible chute de tension",
        "Certifié CE et RoHS"
      ],
      specifications: [
        { name: "Longueur", value: "5m" },
        { name: "Section", value: "2,5mm²" },
        { name: "Tension max", value: "24V DC" },
        { name: "Intensité max", value: "10A" },
        { name: "Degré de protection", value: "IP65" }
      ],
      warranty: "2 ans",
      shipping: "Livraison gratuite sous 48h"
    },
  ];

  const categories = [
    { id: "all", name: "Tous les accessoires" },
    { id: "alimentations", name: "Alimentations" },
    { id: "fixations", name: "Fixations" },
    { id: "cables", name: "Câbles" },
    { id: "controleurs", name: "Contrôleurs" },
  ];

  const sortOptions = [
    { id: "name", name: "Nom A-Z" },
    { id: "price-asc", name: "Prix croissant" },
    { id: "price-desc", name: "Prix décroissant" },
    { id: "rating", name: "Mieux notés" },
  ];

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

  const handleAddToCart = (accessory: Accessory) => {
    addToCart({
      id: `accessory-${accessory.id}`,
      name: accessory.name,
      price: accessory.price,
      image: accessory.image,
      quantity: 1,
      type: "accessory",
    });
  };

  const openQuickView = (accessory: Accessory) => {
    setQuickViewAccessory(accessory);
    setSelectedImage(0);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <div className="pt-20 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-blue-500 bg-clip-text text-transparent">
              Accessoires
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tous les accessoires nécessaires pour l&apos;installation et le fonctionnement de vos enseignes LED
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-6">
            <div className="relative max-w-md mx-auto w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Rechercher un accessoire..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    size="sm"
                    className={`${
                      selectedCategory === category.id
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100 bg-white"
                    }`}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
              <div className="flex items-center gap-2 w-full md:w-auto">
                <Filter className="h-4 w-4 text-gray-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full md:w-auto bg-white border border-gray-300 text-gray-700 rounded px-3 py-1 text-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Info */}
          <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">
              {filteredAccessories.length} accessoire{filteredAccessories.length > 1 ? "s" : ""} trouvé{filteredAccessories.length > 1 ? "s" : ""}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>En stock:</span>
              <span className="text-yellow-600">
                {filteredAccessories.filter((a) => a.inStock).length}
              </span>
              <span>|</span>
              <span>Rupture:</span>
              <span className="text-pink-600">
                {filteredAccessories.filter((a) => !a.inStock).length}
              </span>
            </div>
          </div>

          {/* Accessories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredAccessories.map((accessory) => (
              <Card
                key={accessory.id}
                className="bg-white border border-gray-200 hover:border-blue-500 transition-all duration-300 transform hover:scale-[1.02] overflow-hidden shadow-sm hover:shadow-md group"
              >
                <div className="relative">
                  <Image
                    src={accessory.image || "/placeholder.svg"}
                    alt={accessory.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  {!accessory.inStock && (
                    <Badge className="absolute top-2 left-2 bg-pink-600 text-white">
                      Rupture de stock
                    </Badge>
                  )}
                  {accessory.inStock && (
                    <Badge className="absolute top-2 left-2 bg-yellow-500 text-black">
                      En stock
                    </Badge>
                  )}
                  <div className="absolute top-2 right-2 bg-black/80 rounded px-2 py-1">
                    <span className="text-xs text-white">{accessory.brand}</span>
                  </div>
                  <div className="absolute top-2 right-12 bg-black/80 rounded p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 text-white hover:bg-white/20"
                          onClick={() => openQuickView(accessory)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                    </Dialog>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2 text-gray-900">
                    {accessory.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {accessory.description}
                  </p>
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(accessory.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                      ({accessory.rating})
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-blue-600">
                      {accessory.price} € HT
                    </div>
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(accessory)}
                      className={`w-full md:w-auto ${
                        accessory.inStock
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-gray-200 text-gray-600 cursor-not-allowed"
                      }`}
                      disabled={!accessory.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      {accessory.inStock ? "Ajouter" : "Indisponible"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredAccessories.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                Aucun accessoire trouvé
              </h3>
              <p className="text-gray-600 mb-6">
                Essayez de modifier vos critères de recherche ou parcourez toutes nos catégories
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSortBy("name");
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Voir tous les accessoires
              </Button>
            </div>
          )}

          {/* Help Section */}
          <div className="mt-16 text-center bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Besoin d&apos;aide pour choisir ?
            </h2>
            <p className="text-gray-600 mb-6">
              Notre équipe technique est là pour vous conseiller dans le choix de vos accessoires
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Nous contacter
              </Button>
              <Button
                variant="outline"
                className="border-gray-900 text-gray-900 hover:bg-gray-100"
              >
                Guide d&apos;installation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick View Dialog */}
      <Dialog open={!!quickViewAccessory} onOpenChange={() => setQuickViewAccessory(null)}>
        <DialogContent className="max-w-4xl w-[95vw] md:w-full bg-white p-0 overflow-hidden">
          {quickViewAccessory && (
            <>
              <DialogHeader className="flex flex-row items-center justify-between p-6 border-b">
                <DialogTitle className="text-2xl">Aperçu rapide</DialogTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuickViewAccessory(null)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6 max-h-[80vh] overflow-y-auto">
                {/* Image Gallery */}
                <div className="space-y-4">
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={quickViewAccessory.images[selectedImage] || "/placeholder.svg"}
                      alt={quickViewAccessory.name}
                      fill
                      className="object-contain"
                    />
                    {!quickViewAccessory.inStock && (
                      <Badge className="absolute top-2 left-2 bg-pink-600 text-white">
                        Rupture de stock
                      </Badge>
                    )}
                    {quickViewAccessory.inStock && (
                      <Badge className="absolute top-2 left-2 bg-yellow-500 text-black">
                        En stock
                      </Badge>
                    )}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {quickViewAccessory.images.map((img, index) => (
                      <div
                        key={index}
                        className={`relative h-24 cursor-pointer rounded-md overflow-hidden border-2 ${selectedImage === index ? 'border-blue-500' : 'border-gray-200'}`}
                        onClick={() => setSelectedImage(index)}
                      >
                        <Image
                          src={img || "/placeholder.svg"}
                          alt={`Vue ${index + 1} de ${quickViewAccessory.name}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-gray-500 block mb-1">
                      {quickViewAccessory.brand}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {quickViewAccessory.name}
                    </h2>
                    <div className="flex items-center mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(quickViewAccessory.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">
                        ({quickViewAccessory.rating})
                      </span>
                    </div>
                  </div>

                  <div className="text-2xl font-bold text-blue-600">
                    {quickViewAccessory.price} € HT
                  </div>

                  <Tabs defaultValue="description" className="w-full">
                    <TabsList className="grid grid-cols-3 mb-4">
                      <TabsTrigger value="description">Description</TabsTrigger>
                      <TabsTrigger value="specifications">Spécifications</TabsTrigger>
                      <TabsTrigger value="features">Caractéristiques</TabsTrigger>
                    </TabsList>

                    <TabsContent value="description" className="text-gray-600">
                      <p>{quickViewAccessory.detailedDescription}</p>
                    </TabsContent>

                    <TabsContent value="specifications">
                      <div className="space-y-2">
                        {quickViewAccessory.specifications.map((spec, index) => (
                          <div key={index} className="flex justify-between border-b pb-2">
                            <span className="text-gray-600">{spec.name}</span>
                            <span className="text-gray-900 font-medium">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="features">
                      <ul className="space-y-2">
                        {quickViewAccessory.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                  </Tabs>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Truck className="h-4 w-4 mr-1" />
                        <span>{quickViewAccessory.shipping}</span>
                      </div>
                      <div className="flex items-center">
                        <Shield className="h-4 w-4 mr-1" />
                        <span>Garantie {quickViewAccessory.warranty}</span>
                      </div>
                    </div>

                    <Button
                      onClick={() => {
                        handleAddToCart(quickViewAccessory);
                        setQuickViewAccessory(null);
                      }}
                      className={`w-full ${
                        quickViewAccessory.inStock
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-gray-200 text-gray-600 cursor-not-allowed"
                      }`}
                      disabled={!quickViewAccessory.inStock}
                      size="lg"
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      {quickViewAccessory.inStock ? "Ajouter au panier" : "Indisponible"}
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
      <Footer />
    </div>
  );
}
