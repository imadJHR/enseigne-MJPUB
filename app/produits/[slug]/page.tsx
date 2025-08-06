"use client";
import { useState, use } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Star,
  Truck,
  Shield,
  Zap,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import Image from "next/image";

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
      "https://images.pexels.com/photos/8296426/pexels-photo-8296426.jpeg",
    ],
    materials: [
      {
        id: "pvc",
        name: "PVC",
        price: 299,
        description: "Économique et résistant",
      },
      {
        id: "dibond",
        name: "Dibond",
        price: 449,
        description: "Haute résistance",
      },
      {
        id: "plexiglas",
        name: "Plexiglas",
        price: 599,
        description: "Finition premium",
      },
    ],
    features: [
      "LEDs haute efficacité",
      "Durée de vie 50 000h",
      "Étanche IP65",
      "Garantie 2 ans",
    ],
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
    basePrice: 79,
    description:
      "Des lettres découpées en PVC léger et résistant, parfaites pour une signalétique intérieure ou extérieure. Personnalisez votre message avec style et durabilité.",
    rating: 4.5,
    reviewCount: 22,
    badge: "Économique",
    images: [
      "https://images.pexels.com/photos/6185232/pexels-photo-6185232.jpeg",
    ],
    materials: [
      {
        id: "pvc",
        name: "PVC expansé (5mm)",
        price: 79,
        description: "Léger, économique et facile à installer.",
      },
      {
        id: "plexiglas",
        name: "Plexiglas (3mm)",
        price: 119,
        description: "Finition brillante, idéal pour l'intérieur.",
      },
      {
        id: "aluminium",
        name: "Aluminium composite (Dibond)",
        price: 189,
        description: "Haute résistance aux intempéries, usage pro.",
      },
    ],
    features: [
      "Découpe de précision",
      "Usage intérieur et extérieur",
      "Facile à fixer",
      "Large choix de couleurs",
    ],
    specifications: {
      "Épaisseur": "5mm à 19mm selon le matériau",
      "Hauteur minimale": "10cm",
      "Type de découpe": "Fraisage numérique",
      "Fixation": "Adhésif double face ou entretoises (en option)",
    },
  },

  "panneau-dibond": {
    id: 3,
    name: "Panneau Dibond",
    category: "panneaux",
    basePrice: 159,
    description:
      "Panneau en Dibond avec impression haute définition. Idéal pour une signalétique extérieure durable, résistant aux UV et aux intempéries pour une visibilité maximale.",
    rating: 4.9,
    reviewCount: 65,
    badge: "Résistant",
    images: [
      "https://images.pexels.com/photos/33315758/pexels-photo-33315758.jpeg",
    ],
    materials: [
      {
        id: "dibond",
        name: "Dibond (3mm)",
        price: 159,
        description: "Matériau composite aluminium, haute durabilité.",
      },
      {
        id: "pvc",
        name: "PVC expansé (10mm)",
        price: 129,
        description: "Léger, pour usage intérieur ou extérieur court terme.",
      },
    ],
    features: [
      "Impression numérique haute résolution",
      "Résistant aux UV et aux intempéries",
      "Usage intérieur/extérieur",
      "Facile à installer",
    ],
    specifications: {
      Épaisseur: "3mm (Dibond), 10mm (PVC)",
      "Finition": "Mate ou brillante",
      "Méthode d'impression": "Impression directe UV",
      "Format": "Sur mesure",
    },
  },

  "enseigne-led-rgb": {
    id: 4,
    name: "Enseigne LED RGB",
    category: "led",
    basePrice: 449,
    description:
      "Enseigne LED avec changement de couleurs et télécommande. Attirez l'attention avec des effets lumineux dynamiques et personnalisables pour un impact visuel fort.",
    rating: 4.6,
    reviewCount: 38,
    badge: "Nouveau",
    images: [
      "https://images.pexels.com/photos/7317291/pexels-photo-7317291.jpeg",
    ],
    materials: [
      {
        id: "pvc",
        name: "PVC",
        price: 449,
        description: "Économique et léger",
      },
      {
        id: "dibond",
        name: "Dibond",
        price: 599,
        description: "Haute résistance",
      },
    ],
    features: [
      "LEDs RGB programmables",
      "Télécommande incluse",
      "Multiples modes d'éclairage",
      "Garantie 2 ans",
    ],
    specifications: {
      "Couleurs": "16 millions de couleurs",
      Alimentation: "12V DC",
      Contrôle: "Télécommande RF",
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
      "Lettres en plexiglas transparent ou coloré, finition premium. Offrez à votre marque une élégance moderne avec des lettres au rendu impeccable et sophistiqué.",
    rating: 4.8,
    reviewCount: 51,
    badge: "Premium",
    images: [
      "https://www.deleage.com/store/wp-content/uploads/2021/05/plexi-3mm-d-705x705.jpg",
    ],
    materials: [
      {
        id: "plexiglas-transparent",
        name: "Plexiglas transparent (10mm)",
        price: 199,
        description: "Finition brillante et moderne.",
      },
      {
        id: "plexiglas-colore",
        name: "Plexiglas coloré (8mm)",
        price: 229,
        description: "Large choix de teintes, finition brillante.",
      },
    ],
    features: [
      "Découpe laser haute précision",
      "Bords polis brillants",
      "Résistant aux UV",
      "Fixation invisible (en option)",
    ],
    specifications: {
      Épaisseur: "8mm, 10mm",
      "Couleurs": "Transparent, blanc, noir, rouge, etc.",
      "Type de découpe": "Laser",
      "Hauteur minimale": "15cm",
    },
  },

  "totem-lumineux": {
    id: 6,
    name: "Totem Lumineux",
    category: "totems",
    basePrice: 899,
    description:
      "Totem publicitaire lumineux double face avec structure aluminium. Un support de communication imposant et visible de loin pour renforcer l'identité de votre marque.",
    rating: 4.7,
    reviewCount: 15,
    badge: "Pro",
    images: [
      "https://com1pub.com/wp-content/uploads/2020/01/totem-lumineux-harry-cafeteria-2.jpg",
    ],
    materials: [
      {
        id: "aluminium",
        name: "Aluminium composite",
        price: 899,
        description: "Structure robuste et durable.",
      },
    ],
    features: [
      "Éclairage LED interne",
      "Impression haute qualité sur les deux faces",
      "Structure en aluminium résistant",
      "Installation facile",
    ],
    specifications: {
      Dimensions: "Sur mesure (ex: 200cm x 80cm)",
      "Indice de protection": "IP65",
      "Éclairage": "LED 12V",
      "Type de fixation": "À sceller au sol",
    },
  },
};

export default function ProductDetailPage({ params }) {
  const unwrappedParams = use(params);
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const { addToCart } = useCart();
  const product =
    productsData[unwrappedParams.slug as keyof typeof productsData];

  if (!product) {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        <Header />
        <div className="pt-20 px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Produit non trouvé</h1>
            <p className="text-blue-600 mb-6 md:mb-8">
              Le produit que vous recherchez n&apos;existe pas.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600">Produits disponibles :</p>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                <Link
                  href="/produits/enseigne-led-premium"
                  className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <h3 className="font-bold text-blue-700">
                    Enseigne LED Premium
                  </h3>
                  <p className="text-sm text-gray-600">
                    Éclairage LED haute qualité
                  </p>
                </Link>
                <Link
                  href="/produits/lettres-decoupees-pvc"
                  className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <h3 className="font-bold text-blue-700">
                    Lettres Découpées PVC
                  </h3>
                  <p className="text-sm text-gray-600">
                    Solution économique et durable
                  </p>
                </Link>
                <Link
                  href="/produits/panneau-dibond"
                  className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <h3 className="font-bold text-blue-700">Panneau Dibond</h3>
                  <p className="text-sm text-gray-600">
                    Composite aluminium résistant
                  </p>
                </Link>
                <Link
                  href="/produits/totem-lumineux"
                  className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <h3 className="font-bold text-blue-700">Totem Lumineux</h3>
                  <p className="text-sm text-gray-600">
                    Signalétique de grande visibilité
                  </p>
                </Link>
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <Link href="/produits">
                <Button className="bg-blue-600 hover:bg-blue-500 text-white">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voir tous les produits
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!selectedMaterial && product.materials.length > 0) {
    setSelectedMaterial(product.materials[0].id);
  }

  const selectedMaterialData = product.materials.find(
    (m) => m.id === selectedMaterial
  );

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Bestseller":
        return "bg-blue-600";
      case "Nouveau":
        return "bg-green-600";
      case "Premium":
        return "bg-purple-600";
      case "Pro":
        return "bg-yellow-600";
      case "Économique":
        return "bg-blue-800";
      case "Résistant":
        return "bg-gray-800";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <div className="pt-20 px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <nav className="mb-4 md:mb-8 text-sm text-blue-700">
            <Link href="/" className="hover:text-blue-800">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <Link href="/produits" className="hover:text-blue-800">
              Produits
            </Link>
            <span className="mx-2">/</span>
            <span className="text-blue-900 font-medium">{product.name}</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Image Gallery */}
            <div>
              <div className="relative mb-4">
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src={product.images[currentImage] || "/placeholder.svg"}
                    alt={product.name}
                    width={800}
                    height={600}
                    className="w-full h-auto max-h-[400px] md:max-h-[500px] object-cover rounded-lg shadow-lg"
                  />
                </div>
                <button
                  onClick={() =>
                    setCurrentImage(
                      currentImage > 0
                        ? currentImage - 1
                        : product.images.length - 1
                    )
                  }
                  className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 md:p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                </button>
                <button
                  onClick={() =>
                    setCurrentImage(
                      currentImage < product.images.length - 1
                        ? currentImage + 1
                        : 0
                    )
                  }
                  className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 md:p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`aspect-square border-2 rounded-lg overflow-hidden transition-colors ${
                      currentImage === index
                        ? "border-blue-500"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      width={200}
                      height={200}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <Badge
                  className={`mb-2 ${getBadgeColor(product.badge)} text-white`}
                >
                  {product.badge}
                </Badge>
                <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
                  {product.name}
                </h1>
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-blue-500 text-blue-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-blue-700 text-sm md:text-base">
                    ({product.reviewCount} avis)
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4 md:mb-6">{product.description}</p>
              
              {/* Material Selection */}
              {product.materials.length > 0 && (
                <div className="mb-4 md:mb-6">
                  <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 text-gray-800">
                    Matériau / Options
                  </h3>
                  <Select
                    value={selectedMaterial}
                    onValueChange={setSelectedMaterial}
                  >
                    <SelectTrigger className="bg-white border-gray-300 text-gray-900 hover:border-blue-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-300">
                      {product.materials.map((material) => (
                        <SelectItem key={material.id} value={material.id}>
                          <div className="flex flex-col">
                            <span className="font-medium">{material.name}</span>
                            <span className="text-sm text-gray-600">
                              {material.price}€ - {material.description}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Price */}
              <div className="mb-4 md:mb-6">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">
                  {selectedMaterialData?.price || product.basePrice}€{" "}
                  <span className="text-base md:text-lg text-gray-600">HT</span>
                </div>
                <p className="text-sm md:text-base text-gray-600">
                  Prix pour lettres de 20cm de hauteur
                </p>
              </div>

              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4 md:mb-6">
                <div className="flex items-center border border-gray-300 rounded-lg w-full sm:w-auto">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors text-gray-700"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300 text-gray-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors text-gray-700"
                  >
                    +
                  </button>
                </div>
                <Button
                  className="w-full sm:flex-1 bg-blue-600 hover:bg-blue-500 text-white"
                  onClick={() =>
                    addToCart({
                      id: `product-${product.id}-${selectedMaterial}`,
                      name: `${product.name} - ${
                        selectedMaterialData?.name || "Standard"
                      }`,
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

              {/* Features Icons */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
                <div className="text-center p-2">
                  <Truck className="h-6 w-6 md:h-8 md:w-8 text-blue-500 mx-auto mb-1 md:mb-2" />
                  <p className="text-xs md:text-sm text-gray-600">Livraison 5-7j</p>
                </div>
                <div className="text-center p-2">
                  <Shield className="h-6 w-6 md:h-8 md:w-8 text-blue-500 mx-auto mb-1 md:mb-2" />
                  <p className="text-xs md:text-sm text-gray-600">Garantie 2 ans</p>
                </div>
                <div className="text-center p-2">
                  <Zap className="h-6 w-6 md:h-8 md:w-8 text-blue-500 mx-auto mb-1 md:mb-2" />
                  <p className="text-xs md:text-sm text-gray-600">Qualité pro</p>
                </div>
              </div>

              {/* Quote Button */}
              <Link href="/contact" className="block mb-6 md:mb-8">
                <Button
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                >
                  Demander un devis personnalisé
                </Button>
              </Link>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-8 md:mt-16">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-blue-50 h-auto">
                <TabsTrigger
                  value="description"
                  className="text-sm md:text-base text-blue-800 data-[state=active]:bg-blue-600 data-[state=active]:text-white py-2 px-1"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger
                  value="specifications"
                  className="text-sm md:text-base text-blue-800 data-[state=active]:bg-blue-600 data-[state=active]:text-white py-2 px-1"
                >
                  Spécifications
                </TabsTrigger>
                <TabsTrigger
                  value="delivery"
                  className="text-sm md:text-base text-blue-800 data-[state=active]:bg-blue-600 data-[state=active]:text-white py-2 px-1"
                >
                  Livraison
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-4 md:mt-8">
                <Card className="bg-white border-gray-200 shadow-sm">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-900">
                      Description détaillée
                    </h3>
                    <div className="space-y-3 md:space-y-4 text-gray-600 text-sm md:text-base">
                      <p>{product.description}</p>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900">
                        Caractéristiques principales :
                      </h4>
                      <ul className="list-disc list-inside space-y-1 md:space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="specifications" className="mt-4 md:mt-8">
                <Card className="bg-white border-gray-200 shadow-sm">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-900">
                      Spécifications techniques
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                      {Object.entries(product.specifications).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between border-b border-gray-100 pb-2"
                          >
                            <span className="font-medium text-gray-900 text-sm md:text-base">
                              {key}:
                            </span>
                            <span className="text-gray-600 text-sm md:text-base">{value}</span>
                          </div>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="delivery" className="mt-4 md:mt-8">
                <Card className="bg-white border-gray-200 shadow-sm">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-900">
                      Informations de livraison
                    </h3>
                    <div className="space-y-3 md:space-y-4 text-gray-600 text-sm md:text-base">
                      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                        <div>
                          <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
                            Délais de livraison
                          </h4>
                          <ul className="space-y-1">
                            <li>• France métropolitaine : 5-7 jours ouvrés</li>
                            <li>• Corse et DOM-TOM : 10-15 jours ouvrés</li>
                            <li>• Europe : 7-10 jours ouvrés</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
                            Frais de port
                          </h4>
                          <ul className="space-y-1">
                            <li>• Gratuit à partir de 200€</li>
                            <li>• Standard : 15€</li>
                            <li>• Express : 25€</li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        Toutes nos enseignes sont soigneusement emballées dans
                        un carton renforcé avec protection mousse pour éviter
                        tout dommage pendant le transport.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Back Button */}
          <div className="mt-6 md:mt-12">
            <Link href="/produits">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux produits
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}