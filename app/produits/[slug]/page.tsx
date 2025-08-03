"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { ChevronLeft, ChevronRight, ShoppingCart, Star, Truck, Shield, Zap, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useCart } from "../../context/CartContext"

export const productsData = {
  "enseigne-led-premium": {
    id: 1,
    name: "Enseigne LED Premium",
    category: "led",
    basePrice: 299,
    description:
      "Enseigne LED haute qualité avec éclairage uniforme et longue durée de vie. Parfaite pour mettre en valeur votre commerce avec un rendu professionnel exceptionnel.",
    rating: 4.8,
    reviewCount: 47,
    badge: "Bestseller",
    images: [
      "/placeholder.svg?height=600&width=800&text=Enseigne+LED+Premium+1",
      "/placeholder.svg?height=600&width=800&text=Enseigne+LED+Premium+2",
      "/placeholder.svg?height=600&width=800&text=Enseigne+LED+Premium+3",
      "/placeholder.svg?height=600&width=800&text=Enseigne+LED+Premium+4",
    ],
    materials: [
      { id: "pvc", name: "PVC", price: 299, description: "Économique et résistant" },
      { id: "dibond", name: "Dibond", price: 449, description: "Haute résistance" },
      { id: "plexiglas", name: "Plexiglas", price: 599, description: "Finition premium" },
    ],
    features: ["LEDs haute efficacité", "Durée de vie 50 000h", "Étanche IP65", "Garantie 2 ans"],
    specifications: {
      "Température de couleur": "6500K (blanc froid)",
      Consommation: "12W par mètre linéaire",
      Alimentation: "12V DC",
      "Indice de protection": "IP65",
      Épaisseur: "20mm",
    },
  },
  "lettres-decoupees-pvc": {
    id: 2,
    name: "Lettres Découpées PVC",
    category: "lettres",
    basePrice: 89,
    description:
      "Lettres découpées en PVC haute qualité, résistantes aux intempéries. Solution économique et durable pour votre signalétique extérieure.",
    rating: 4.7,
    reviewCount: 32,
    badge: "Économique",
    images: [
      "/placeholder.svg?height=600&width=800&text=Lettres+PVC+1",
      "/placeholder.svg?height=600&width=800&text=Lettres+PVC+2",
      "/placeholder.svg?height=600&width=800&text=Lettres+PVC+3",
      "/placeholder.svg?height=600&width=800&text=Lettres+PVC+4",
    ],
    materials: [
      { id: "pvc-3mm", name: "PVC 3mm", price: 89, description: "Standard, économique" },
      { id: "pvc-5mm", name: "PVC 5mm", price: 129, description: "Plus résistant" },
      { id: "pvc-10mm", name: "PVC 10mm", price: 189, description: "Effet relief" },
    ],
    features: ["Découpe laser précise", "Résistant aux UV", "Facile à installer", "Personnalisable"],
    specifications: {
      Matériau: "PVC expansé",
      "Épaisseurs disponibles": "3mm, 5mm, 10mm",
      Couleurs: "Blanc, noir, couleurs sur demande",
      Finition: "Mat ou brillant",
      Résistance: "Extérieur 10 ans",
    },
  },
  "panneau-dibond": {
    id: 3,
    name: "Panneau Dibond",
    category: "panneaux",
    basePrice: 159,
    description:
      "Panneau en Dibond avec impression haute définition. Matériau composite aluminium pour une excellente tenue dans le temps.",
    rating: 4.9,
    reviewCount: 28,
    badge: "Résistant",
    images: [
      "/placeholder.svg?height=600&width=800&text=Panneau+Dibond+1",
      "/placeholder.svg?height=600&width=800&text=Panneau+Dibond+2",
      "/placeholder.svg?height=600&width=800&text=Panneau+Dibond+3",
      "/placeholder.svg?height=600&width=800&text=Panneau+Dibond+4",
    ],
    materials: [
      { id: "dibond-3mm", name: "Dibond 3mm", price: 159, description: "Standard professionnel" },
      { id: "dibond-4mm", name: "Dibond 4mm", price: 199, description: "Renforcé" },
      { id: "dibond-6mm", name: "Dibond 6mm", price: 259, description: "Ultra résistant" },
    ],
    features: ["Composite aluminium", "Impression HD", "Résistant aux intempéries", "Léger et rigide"],
    specifications: {
      Composition: "Aluminium + âme polyéthylène",
      Épaisseurs: "3mm, 4mm, 6mm",
      Impression: "Numérique haute définition",
      Finition: "Mat, brillant, brossé",
      Résistance: "Extérieur 15 ans",
    },
  },
  "enseigne-led-rgb": {
    id: 4,
    name: "Enseigne LED RGB",
    category: "led",
    basePrice: 449,
    description:
      "Enseigne LED avec changement de couleurs et télécommande. Créez des effets lumineux spectaculaires pour attirer l'attention sur votre commerce.",
    rating: 4.6,
    reviewCount: 23,
    badge: "Nouveau",
    images: [
      "/placeholder.svg?height=600&width=800&text=Enseigne+LED+RGB+1",
      "/placeholder.svg?height=600&width=800&text=Enseigne+LED+RGB+2",
      "/placeholder.svg?height=600&width=800&text=Enseigne+LED+RGB+3",
      "/placeholder.svg?height=600&width=800&text=Enseigne+LED+RGB+4",
    ],
    materials: [
      { id: "pvc-rgb", name: "PVC + RGB", price: 449, description: "Économique avec RGB" },
      { id: "dibond-rgb", name: "Dibond + RGB", price: 599, description: "Résistant avec RGB" },
      { id: "plexiglas-rgb", name: "Plexiglas + RGB", price: 749, description: "Premium avec RGB" },
    ],
    features: ["LEDs RGB programmables", "Télécommande incluse", "16 millions de couleurs", "Effets dynamiques"],
    specifications: {
      "Température de couleur": "RGB (toutes couleurs)",
      Consommation: "18W par mètre linéaire",
      Alimentation: "24V DC",
      "Indice de protection": "IP65",
      Épaisseur: "25mm",
    },
  },
  "lettres-plexiglas": {
    id: 5,
    name: "Lettres Plexiglas",
    category: "lettres",
    basePrice: 199,
    description:
      "Lettres en plexiglas transparent ou coloré, finition premium. Matériau noble pour une signalétique haut de gamme avec un rendu exceptionnel.",
    rating: 4.8,
    reviewCount: 19,
    badge: "Premium",
    images: [
      "/placeholder.svg?height=600&width=800&text=Lettres+Plexiglas+1",
      "/placeholder.svg?height=600&width=800&text=Lettres+Plexiglas+2",
      "/placeholder.svg?height=600&width=800&text=Lettres+Plexiglas+3",
      "/placeholder.svg?height=600&width=800&text=Lettres+Plexiglas+4",
    ],
    materials: [
      { id: "plexi-5mm", name: "Plexiglas 5mm", price: 199, description: "Standard premium" },
      { id: "plexi-8mm", name: "Plexiglas 8mm", price: 259, description: "Épaisseur renforcée" },
      { id: "plexi-10mm", name: "Plexiglas 10mm", price: 319, description: "Ultra premium" },
    ],
    features: ["Matériau noble", "Finition brillante", "Résistant aux UV", "Découpe laser précise"],
    specifications: {
      Matériau: "PMMA (Plexiglas)",
      "Épaisseurs disponibles": "5mm, 8mm, 10mm",
      Couleurs: "Transparent, blanc, noir, couleurs",
      Finition: "Brillant, mat, satiné",
      Résistance: "Extérieur 15 ans",
    },
  },
  "totem-lumineux": {
    id: 6,
    name: "Totem Lumineux",
    category: "totems",
    basePrice: 899,
    description:
      "Totem publicitaire lumineux double face avec structure aluminium. Solution idéale pour la signalétique extérieure de grande visibilité.",
    rating: 4.7,
    reviewCount: 15,
    badge: "Pro",
    images: [
      "/placeholder.svg?height=600&width=800&text=Totem+Lumineux+1",
      "/placeholder.svg?height=600&width=800&text=Totem+Lumineux+2",
      "/placeholder.svg?height=600&width=800&text=Totem+Lumineux+3",
      "/placeholder.svg?height=600&width=800&text=Totem+Lumineux+4",
    ],
    materials: [
      { id: "totem-150", name: "Totem 150cm", price: 899, description: "Hauteur standard" },
      { id: "totem-200", name: "Totem 200cm", price: 1199, description: "Hauteur renforcée" },
      { id: "totem-250", name: "Totem 250cm", price: 1499, description: "Hauteur maximum" },
    ],
    features: ["Structure aluminium", "Double face", "Éclairage LED intégré", "Résistant aux intempéries"],
    specifications: {
      Structure: "Aluminium anodisé",
      "Hauteurs disponibles": "150cm, 200cm, 250cm",
      Largeur: "60cm standard",
      Éclairage: "LED intégré",
      Résistance: "Vent 120 km/h",
    },
  },
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedMaterial, setSelectedMaterial] = useState("")
  const { addToCart } = useCart()

  const product = productsData[params.slug as keyof typeof productsData]

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-indigo-950 text-white">
        <Header />
        <div className="pt-20 px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Produit non trouvé</h1>
            <p className="text-indigo-300 mb-8">Le produit que vous recherchez n'existe pas.</p>
            <div className="space-y-4">
              <p className="text-indigo-200">Produits disponibles :</p>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <Link
                  href="/produits/enseigne-led-premium"
                  className="block p-4 bg-indigo-800 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <h3 className="font-bold text-teal-300">Enseigne LED Premium</h3>
                  <p className="text-sm text-indigo-300">Éclairage LED haute qualité</p>
                </Link>
                <Link
                  href="/produits/lettres-decoupees-pvc"
                  className="block p-4 bg-indigo-800 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <h3 className="font-bold text-teal-300">Lettres Découpées PVC</h3>
                  <p className="text-sm text-indigo-300">Solution économique et durable</p>
                </Link>
                <Link
                  href="/produits/panneau-dibond"
                  className="block p-4 bg-indigo-800 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <h3 className="font-bold text-teal-300">Panneau Dibond</h3>
                  <p className="text-sm text-indigo-300">Composite aluminium résistant</p>
                </Link>
                <Link
                  href="/produits/totem-lumineux"
                  className="block p-4 bg-indigo-800 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <h3 className="font-bold text-teal-300">Totem Lumineux</h3>
                  <p className="text-sm text-indigo-300">Signalétique de grande visibilité</p>
                </Link>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/produits">
                <Button className="bg-teal-600 hover:bg-teal-500">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voir tous les produits
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (!selectedMaterial && product.materials.length > 0) {
    setSelectedMaterial(product.materials[0].id)
  }

  const selectedMaterialData = product.materials.find((m) => m.id === selectedMaterial)

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Bestseller":
        return "bg-teal-600"
      case "Nouveau":
        return "bg-green-600"
      case "Premium":
        return "bg-pink-600"
      case "Pro":
        return "bg-amber-600"
      case "Économique":
        return "bg-indigo-600"
      case "Résistant":
        return "bg-orange-600"
      default:
        return "bg-gray-600"
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <div className="pt-20 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <nav className="mb-8 text-sm text-indigo-700">
            <Link href="/" className="hover:text-teal-600">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <Link href="/produits" className="hover:text-teal-600">
              Produits
            </Link>
            <span className="mx-2">/</span>
            <span className="text-indigo-900 font-medium">{product.name}</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="relative mb-4">
                <img
                  src={product.images[currentImage] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <button
                  onClick={() => setCurrentImage(currentImage > 0 ? currentImage - 1 : product.images.length - 1)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setCurrentImage(currentImage < product.images.length - 1 ? currentImage + 1 : 0)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`border-2 rounded-lg overflow-hidden transition-colors ${
                      currentImage === index ? "border-teal-500" : "border-gray-200 hover:border-teal-300"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-4">
                <Badge className={`mb-2 ${getBadgeColor(product.badge)}`}>{product.badge}</Badge>
                <h1 className="text-3xl font-bold mb-2 text-gray-900">{product.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-teal-500 text-teal-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-indigo-700">({product.reviewCount} avis)</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{product.description}</p>
              {product.materials.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3 text-gray-800">Matériau / Options</h3>
                  <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                    <SelectTrigger className="bg-white border-gray-300 text-gray-900 hover:border-teal-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-300">
                      {product.materials.map((material) => (
                        <SelectItem key={material.id} value={material.id}>
                          {material.name} - {material.price}€ - {material.description}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              <div className="mb-6">
                <div className="text-3xl font-bold text-teal-600 mb-2">
                  {selectedMaterialData?.price || product.basePrice}€ <span className="text-lg text-indigo-700">HT</span>
                </div>
                <p className="text-indigo-700">Prix pour lettres de 20cm de hauteur</p>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors text-gray-700"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300 text-gray-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors text-gray-700"
                  >
                    +
                  </button>
                </div>
                <Button
                  className="flex-1 bg-teal-600 hover:bg-teal-500"
                  onClick={() =>
                    addToCart({
                      id: `product-${product.id}-${selectedMaterial}`,
                      name: `${product.name} - ${selectedMaterialData?.name || "Standard"}`,
                      price: selectedMaterialData?.price || product.basePrice,
                      image: product.images[0],
                      type: "product",
                      material: selectedMaterialData?.name,
                      quantity: quantity,
                    })
                  }
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Ajouter au panier
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <Truck className="h-8 w-8 text-teal-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Livraison 5-7j</p>
                </div>
                <div className="text-center">
                  <Shield className="h-8 w-8 text-teal-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Garantie 2 ans</p>
                </div>
                <div className="text-center">
                  <Zap className="h-8 w-8 text-teal-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Qualité pro</p>
                </div>
              </div>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="w-full border-teal-600 text-teal-600 hover:bg-teal-50 hover:text-teal-700"
                >
                  Demander un devis personnalisé
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-16">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-indigo-100">
                <TabsTrigger value="description" className="text-indigo-800 data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                  Description
                </TabsTrigger>
                <TabsTrigger value="specifications" className="text-indigo-800 data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                  Spécifications
                </TabsTrigger>
                <TabsTrigger value="delivery" className="text-indigo-800 data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                  Livraison
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-8">
                <Card className="bg-white border-gray-200 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Description détaillée</h3>
                    <div className="space-y-4 text-gray-600">
                      <p>{product.description}</p>
                      <h4 className="text-lg font-semibold text-gray-900">Caractéristiques principales :</h4>
                      <ul className="list-disc list-inside space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="specifications" className="mt-8">
                <Card className="bg-white border-gray-200 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Spécifications techniques</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b border-gray-100 pb-2">
                          <span className="font-medium text-gray-900">{key}:</span>
                          <span className="text-gray-600">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="delivery" className="mt-8">
                <Card className="bg-white border-gray-200 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Informations de livraison</h3>
                    <div className="space-y-4 text-gray-600">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Délais de livraison</h4>
                          <ul className="space-y-1">
                            <li>• France métropolitaine : 5-7 jours ouvrés</li>
                            <li>• Corse et DOM-TOM : 10-15 jours ouvrés</li>
                            <li>• Europe : 7-10 jours ouvrés</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Frais de port</h4>
                          <ul className="space-y-1">
                            <li>• Gratuit à partir de 200€</li>
                            <li>• Standard : 15€</li>
                            <li>• Express : 25€</li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        Toutes nos enseignes sont soigneusement emballées dans un carton renforcé avec protection mousse
                        pour éviter tout dommage pendant le transport.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div className="mt-12">
            <Link href="/produits">
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux produits
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}