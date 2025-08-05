"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { ShoppingCart, Star, Search, Filter } from "lucide-react"
import { useCart } from "../context/CartContext"
import Image from "next/image"

export default function AccessoriesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const { addToCart } = useCart()

  const accessories = [
    {
      id: 1,
      name: "Alimentation LED 12V 60W",
      price: 45,
      image: "/placeholder.svg?height=300&width=400&text=Alimentation+LED",
      description: "Alimentation stabilisée pour enseignes LED",
      rating: 4.8,
      inStock: true,
      category: "alimentations",
      brand: "PowerLED",
    },
    {
      id: 2,
      name: "Kit de fixation murale",
      price: 25,
      image: "/placeholder.svg?height=300&width=400&text=Kit+Fixation",
      description: "Supports et fixations pour montage mural",
      rating: 4.9,
      inStock: true,
      category: "fixations",
      brand: "FixPro",
    },
    {
      id: 3,
      name: "Câble d'extension 5m",
      price: 15,
      image: "/placeholder.svg?height=300&width=400&text=Cable+Extension",
      description: "Câble d'extension étanche IP65",
      rating: 4.7,
      inStock: true,
      category: "cables",
      brand: "CableTech",
    },
    {
      id: 4,
      name: "Contrôleur RGB",
      price: 85,
      image: "/placeholder.svg?height=300&width=400&text=Controleur+RGB",
      description: "Contrôleur pour éclairage RGB avec télécommande",
      rating: 4.6,
      inStock: false,
      category: "controleurs",
      brand: "RGBMaster",
    },
    {
      id: 5,
      name: "Transformateur 24V 100W",
      price: 65,
      image: "/placeholder.svg?height=300&width=400&text=Transformateur",
      description: "Transformateur haute puissance pour grandes enseignes",
      rating: 4.8,
      inStock: true,
      category: "alimentations",
      brand: "PowerLED",
    },
    {
      id: 6,
      name: "Connecteurs étanches",
      price: 12,
      image: "/placeholder.svg?height=300&width=400&text=Connecteurs",
      description: "Lot de 10 connecteurs étanches IP67",
      rating: 4.5,
      inStock: true,
      category: "cables",
      brand: "WaterProof",
    },
    {
      id: 7,
      name: "Variateur d'intensité",
      price: 35,
      image: "/placeholder.svg?height=300&width=400&text=Variateur",
      description: "Variateur pour régler l'intensité lumineuse",
      rating: 4.7,
      inStock: true,
      category: "controleurs",
      brand: "DimmerPro",
    },
    {
      id: 8,
      name: "Profilé aluminium 2m",
      price: 28,
      image: "/placeholder.svg?height=300&width=400&text=Profile+Alu",
      description: "Profilé aluminium pour bandes LED",
      rating: 4.9,
      inStock: true,
      category: "fixations",
      brand: "AluTech",
    },
    {
      id: 9,
      name: "Alimentation LED 24V 150W",
      price: 89,
      image: "/placeholder.svg?height=300&width=400&text=Alimentation+24V",
      description: "Alimentation haute puissance 24V",
      rating: 4.8,
      inStock: true,
      category: "alimentations",
      brand: "PowerLED",
    },
    {
      id: 10,
      name: "Télécommande RGB",
      price: 22,
      image: "/placeholder.svg?height=300&width=400&text=Telecommande",
      description: "Télécommande pour contrôleurs RGB",
      rating: 4.4,
      inStock: true,
      category: "controleurs",
      brand: "RemoteControl",
    },
    {
      id: 11,
      name: "Câble alimentation 10m",
      price: 28,
      image: "/placeholder.svg?height=300&width=400&text=Cable+10m",
      description: "Câble d'alimentation renforcé 10 mètres",
      rating: 4.6,
      inStock: true,
      category: "cables",
      brand: "CableTech",
    },
    {
      id: 12,
      name: "Support d'angle ajustable",
      price: 18,
      image: "/placeholder.svg?height=300&width=400&text=Support+Angle",
      description: "Support d'angle pour fixation en coin",
      rating: 4.7,
      inStock: false,
      category: "fixations",
      brand: "FixPro",
    },
  ]

  const categories = [
    { id: "all", name: "Tous les accessoires" },
    { id: "alimentations", name: "Alimentations" },
    { id: "fixations", name: "Fixations" },
    { id: "cables", name: "Câbles" },
    { id: "controleurs", name: "Contrôleurs" },
  ]

  const sortOptions = [
    { id: "name", name: "Nom A-Z" },
    { id: "price-asc", name: "Prix croissant" },
    { id: "price-desc", name: "Prix décroissant" },
    { id: "rating", name: "Mieux notés" },
  ]

  // Filter and sort accessories
  const filteredAccessories = accessories
    .filter((accessory) => {
      const matchesSearch =
        accessory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        accessory.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        accessory.brand.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || accessory.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        default:
          return 0
      }
    })

  const handleAddToCart = (accessory: any) => {
    addToCart({
      id: `accessory-${accessory.id}`,
      name: accessory.name,
      price: accessory.price,
      image: accessory.image,
      quantity: 1,
      type: "accessory",
    })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <div className="pt-20 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-blue-500 bg-clip-text text-transparent">Accessoires</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tous les accessoires nécessaires pour l'installation et le fonctionnement de vos enseignes LED
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Rechercher un accessoire..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Filters Row */}
            <div className="flex flex-wrap justify-center gap-4 items-center">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
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

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-gray-300 text-gray-700 rounded px-3 py-1 text-sm focus:border-blue-500 focus:ring-blue-500"
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

          {/* Results Count */}
          <div className="mb-6 flex justify-between items-center">
            <p className="text-gray-600">
              {filteredAccessories.length} accessoire{filteredAccessories.length > 1 ? "s" : ""} trouvé
              {filteredAccessories.length > 1 ? "s" : ""}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>En stock:</span>
              <span className="text-yellow-600">{filteredAccessories.filter((a) => a.inStock).length}</span>
              <span>|</span>
              <span>Rupture:</span>
              <span className="text-pink-600">{filteredAccessories.filter((a) => !a.inStock).length}</span>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAccessories.map((accessory) => (
              <Card
                key={accessory.id}
                className="bg-white border border-gray-200 hover:border-blue-500 transition-all duration-300 transform hover:scale-[1.02] overflow-hidden shadow-sm hover:shadow-md"
              >
                <div className="relative">
                  <Image
                    src={accessory.image || "/placeholder.svg"}
                    alt={accessory.name}
                    className="w-full h-48 object-cover"
                  />
                  {!accessory.inStock && (
                    <Badge className="absolute top-2 left-2 bg-pink-600 text-white">Rupture de stock</Badge>
                  )}
                  {accessory.inStock && (
                    <Badge className="absolute top-2 left-2 bg-yellow-500 text-black">En stock</Badge>
                  )}
                  <div className="absolute top-2 right-2 bg-black/80 rounded px-2 py-1">
                    <span className="text-xs text-white">{accessory.brand}</span>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2 text-gray-900">{accessory.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{accessory.description}</p>

                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(accessory.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">({accessory.rating})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-blue-600">
                      {accessory.price}€<span className="text-sm text-gray-500 ml-1">HT</span>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(accessory)}
                      className={`${
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
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Aucun accessoire trouvé</h3>
              <p className="text-gray-600 mb-6">
                Essayez de modifier vos critères de recherche ou parcourez toutes nos catégories
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                  setSortBy("name")
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Voir tous les accessoires
              </Button>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Besoin d'aide pour choisir ?</h2>
            <p className="text-gray-600 mb-6">
              Notre équipe technique est là pour vous conseiller dans le choix de vos accessoires
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Nous contacter</Button>
              <Button
                variant="outline"
                className="border-gray-900 text-gray-900 hover:bg-gray-100"
              >
                Guide d'installation
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}