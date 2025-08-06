"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useCart } from "../context/CartContext"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Plus, Minus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart()

  const shippingCost = getTotalPrice() >= 200 ? 0 : 15
  const totalWithShipping = getTotalPrice() + shippingCost

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <div className="pt-20 px-4 sm:px-6 py-8 sm:py-26">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 sm:mb-8">
            <Link href="/produits" className="self-start sm:self-auto">
              <Button variant="outline" className="border-gray-200 bg-white hover:bg-gray-50 shadow-sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Continuer les achats</span>
                <span className="sm:hidden">Retour</span>
              </Button>
            </Link>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-blue-500 bg-clip-text text-transparent">Mon Panier</h1>
              <p className="text-gray-500 text-sm sm:text-base">
                {items.length} article{items.length > 1 ? "s" : ""}
              </p>
            </div>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-12 sm:py-16">
              <div className="mx-auto w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">Votre panier est vide</h2>
              <p className="text-gray-500 max-w-md mx-auto mb-6 sm:mb-8">
                Découvrez nos produits et accessoires pour créer votre enseigne parfaite
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/produits">
                  <Button className="bg-blue-600 hover:bg-blue-700 shadow-md">
                    Voir nos produits
                  </Button>
                </Link>
                <Link href="/accessoires">
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-white shadow-sm">
                    Voir les accessoires
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <Card key={item.id} className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative w-full sm:w-24 h-24 sm:h-24 rounded-lg overflow-hidden bg-gray-100">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-bold text-base sm:text-lg text-gray-900">{item.name}</h3>
                              {item.material && (
                                <p className="text-xs sm:text-sm text-gray-500">
                                  Matériau: {item.material}
                                </p>
                              )}
                              <p className="text-xs sm:text-sm text-gray-500 capitalize">
                                Type: {item.type === "product" ? "Produit" : "Accessoire"}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-600 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
                            <div className="flex items-center gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="h-8 w-8 p-0 border-gray-300 hover:bg-gray-50"
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <Input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 1)}
                                className="w-16 text-center bg-white border-gray-300"
                                min="1"
                              />
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="h-8 w-8 p-0 border-gray-300 hover:bg-gray-50"
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            <div className="text-right">
                              <p className="text-xs sm:text-sm text-gray-500">
                                {item.price}€ × {item.quantity}
                              </p>
                              <p className="text-lg sm:text-xl font-bold text-blue-600">
                                {(item.price * item.quantity).toFixed(2)}€
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Clear Cart */}
                <div className="flex justify-end">
                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700 bg-white shadow-sm"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Vider le panier
                  </Button>
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <Card className="bg-white border-gray-200 shadow-sm sticky top-24">
                  <CardHeader className="border-b border-gray-200">
                    <CardTitle className="text-lg">Récapitulatif</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sous-total:</span>
                        <span className="font-medium">{getTotalPrice().toFixed(2)}€ HT</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Livraison:</span>
                        <span className={shippingCost === 0 ? "text-green-600 font-medium" : "font-medium"}>
                          {shippingCost === 0 ? "Gratuite" : `${shippingCost}€`}
                        </span>
                      </div>
                      {shippingCost > 0 && (
                        <p className="text-xs text-gray-500 text-right">
                          Livraison gratuite à partir de 200€
                        </p>
                      )}
                    </div>

                    <div className="border-t border-gray-200 pt-4 space-y-2">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total:</span>
                        <span className="text-blue-600">{totalWithShipping.toFixed(2)}€ HT</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>TVA:</span>
                        <span>{(totalWithShipping * 0.2).toFixed(2)}€</span>
                      </div>
                      <div className="flex justify-between text-sm font-medium text-gray-700">
                        <span>Total TTC:</span>
                        <span>{(totalWithShipping * 1.2).toFixed(2)}€</span>
                      </div>
                    </div>

                    <div className="space-y-3 pt-4">
                      <Link href="/checkout">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-base py-3 shadow-md">
                          Procéder au paiement
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-white shadow-sm"
                      >
                        Demander un devis
                      </Button>
                    </div>

                    <div className="text-center text-xs sm:text-sm text-gray-500 pt-4 border-t border-gray-200 space-y-1">
                      <p className="flex items-center justify-center gap-1">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Paiement sécurisé
                      </p>
                      <p className="flex items-center justify-center gap-1">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Livraison 5-7 jours
                      </p>
                      <p className="flex items-center justify-center gap-1">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Garantie 2 ans
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}