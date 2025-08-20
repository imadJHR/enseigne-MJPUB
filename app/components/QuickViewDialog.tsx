"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Check,
  Truck,
  Shield,
  ShoppingCart,
  Minus,
  Plus,
  X,
} from "lucide-react";

// Interface pour décrire la structure de données d'un accessoire
export interface Accessory {
  id: number;
  name: string;
  price: number;
  images: string[];
  description: string;
  detailedDescription: string;
  rating: number;
  inStock: number;
  features: string[];
  specifications: { property: string; value: string }[];
  warranty: string;
  shipping: string;
}

// Props attendues par le composant QuickViewDialog
interface QuickViewDialogProps {
  accessory: Accessory | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddToCart: (accessory: Accessory, quantity: number) => void;
}

export function QuickViewDialog({
  accessory,
  open,
  onOpenChange,
  onAddToCart,
}: QuickViewDialogProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (accessory) {
      setSelectedImage(0);
      setQuantity(1);
    }
  }, [accessory]);

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  if (!accessory) return null;

  const isAvailable = accessory.inStock > 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl lg:max-w-5xl p-0 max-h-[90vh] overflow-y-auto rounded-2xl bg-white text-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* --- Colonne de gauche : Galerie d'images --- */}
          <div className="p-4 sm:p-6 flex flex-col gap-4">
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={accessory.images[selectedImage]}
                alt={accessory.name}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
              {accessory.images.map((img, index) => (
                <button
                  key={index}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden transition-all ${
                    selectedImage === index
                      ? "ring-2 ring-blue-600 ring-offset-2"
                      : "ring-1 ring-gray-300"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={img}
                    alt={`Vue ${index + 1}`}
                    fill
                    className="object-contain p-1"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* --- Colonne de droite : Détails du produit --- */}
          <div className="p-4 sm:p-6 flex flex-col space-y-6">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
                {accessory.name}
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <p className="text-lg sm:text-2xl font-semibold text-blue-600">
                {accessory.price.toFixed(2)} €
              </p>
              <Badge
                variant={isAvailable ? "default" : "destructive"}
                className={`self-start sm:self-center px-3 py-1 rounded-full text-sm font-medium ${
                  isAvailable
                    ? "bg-blue-600 text-white"
                    : "bg-black text-white"
                }`}
              >
                {isAvailable ? "En stock" : "Rupture de stock"}
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(accessory.rating)
                        ? "text-blue-600 fill-blue-600"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                ({accessory.rating.toFixed(1)} avis)
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-700">
              {accessory.description}
            </p>
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3 text-sm sm:text-base bg-gray-100 rounded-lg p-1">
                <TabsTrigger value="description" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md">
                  Description
                </TabsTrigger>
                <TabsTrigger value="specifications" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md">
                  Spécifications
                </TabsTrigger>
                <TabsTrigger value="features" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md">
                  Caractéristiques
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-4 text-sm">
                <p>{accessory.detailedDescription}</p>
              </TabsContent>
              <TabsContent value="specifications" className="mt-4 text-sm">
                <ul className="space-y-2">
                  {accessory.specifications.map((spec, index) => (
                    <li key={index} className="flex justify-between gap-4 text-sm sm:text-base">
                      <span className="text-gray-500">{spec.property}</span>
                      <span className="font-medium">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="features" className="mt-4 text-sm">
                <ul className="space-y-2">
                  {accessory.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
            <div className="space-y-4 pt-4 border-t">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Truck className="h-4 w-4 mr-2 text-blue-600" />
                  <span>{accessory.shipping}</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-blue-600" />
                  <span>{accessory.warranty}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center justify-center border rounded-md w-full sm:w-auto bg-gray-50">
                  <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(-1)} className="text-blue-600 hover:bg-blue-50">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-semibold text-black">{quantity}</span>
                  <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(1)} className="text-blue-600 hover:bg-blue-50">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  size="lg"
                  onClick={() => {
                    onAddToCart(accessory, quantity);
                    if (typeof onOpenChange === 'function') {
                      onOpenChange(false);
                    }
                  }}
                  disabled={!isAvailable}
                  className={` ${isAvailable ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-black text-white cursor-not-allowed"}`}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {isAvailable ? "Ajouter au panier" : "Indisponible"}
                </Button>
              </div>
            </div>
          </div>
        </div>

       
      </DialogContent>
    </Dialog>
  );
}