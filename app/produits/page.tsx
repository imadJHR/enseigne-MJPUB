"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Search,
  Star,
  ArrowRight,
  Lightbulb,
  Scissors,
  Settings,
  Layers,
} from "lucide-react";
import img1 from "../../public/img1.jpg";
export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "Panneau Dibond",
      category: "panneaux",
      price: 159,
      image: "/img1.jpg",
      description: "Panneau en Dibond avec impression haute définition",
      rating: 4.9,
      badge: "Résistant",
      slug: "panneau-dibond",
    },
  ];

  const categories = [
    { id: "all", name: "Tous les produits", icon: Layers },
    { id: "panneaux", name: "Panneaux", icon: Settings },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Bestseller":
        return "bg-blue-600 text-white";
      case "Nouveau":
        return "bg-green-600 text-white";
      case "Premium":
        return "bg-pink-600 text-white";
      case "Pro":
        return "bg-yellow-600 text-white";
      case "Économique":
        return "bg-green-100 text-green-800";
      case "Résistant":
        return "bg-yellow-100 text-yellow-800";
      case "Étanche":
        return "bg-blue-100 text-blue-800";
      case "Design":
        return "bg-pink-100 text-pink-800";
      case "Élégant":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <div className="pt-20 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-blue-500 bg-clip-text text-transparent">
              Nos Produits
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez notre gamme complète d&apos;enseignes professionnelles
              sur mesure
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={
                      selectedCategory === category.id ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category.id)}
                    className={`${
                      selectedCategory === category.id
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50 bg-white"
                    }`}
                  >
                    <IconComponent className="h-4 w-4 mr-2" />
                    {category.name}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              {filteredProducts.length} produit
              {filteredProducts.length > 1 ? "s" : ""} trouvé
              {filteredProducts.length > 1 ? "s" : ""}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/produits/${product.slug}`}
                className="group block"
              >
                <Card className="bg-white border border-gray-200 hover:border-blue-500 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg overflow-hidden h-full shadow-sm">
                  <div className="relative h-64">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                      style={{
                        backgroundImage: `url('${product.image}')`,
                      }}
                      aria-label={`Image du produit ${product.name}`}
                    ></div>

                    <Badge
                      className={`absolute top-4 left-4 ${getBadgeColor(
                        product.badge
                      )}`}
                    >
                      {product.badge}
                    </Badge>
                    <div className="absolute top-4 right-4 flex items-center bg-white/90 rounded-full px-2 py-1 shadow-sm">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-xs text-gray-900">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-1 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-blue-600">
                        À partir de {product.price} €
                        <span className="text-sm text-gray-500 ml-1">HT</span>
                      </div>
                      <div className="flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
                        <span className="text-sm font-medium">
                          Voir détails
                        </span>
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">Aucun produit trouvé</h3>
              <p className="text-gray-600 mb-6">
                Essayez de modifier vos critères de recherche ou parcourez
                toutes nos catégories
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Voir tous les produits
              </Button>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 text-center bg-blue-50 rounded-lg p-8 border border-blue-100">
            <h2 className="text-3xl font-bold mb-4">
              Besoin d&apos;un produit sur mesure ?
            </h2>

            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Notre équipe peut créer des enseignes entièrement personnalisées
              selon vos spécifications exactes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/configurateur">
                <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-white">
                  Configurateur en ligne
                </Button>
              </Link>
              <Link href="/demande-devis">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-white px-8 py-3"
                >
                  Demander un devis
                </Button>
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fabrication Française</h3>
              <p className="text-gray-600">
                Tous nos produits sont fabriqués dans nos ateliers en Maroc avec
                des matériaux de qualité
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sur Mesure</h3>
              <p className="text-gray-600">
                Chaque enseigne est personnalisée selon vos besoins : taille,
                couleur, matériau, éclairage
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Garantie 2 ans</h3>
              <p className="text-gray-600">
                Tous nos produits sont garantis 2 ans pièces et main
                d&apos;œuvre pour votre tranquillité
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
