"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Plus, Minus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } =
    useCart();

  const shippingCost = getTotalPrice() >= 200 ? 0 : 15;
  const totalWithShipping = getTotalPrice() + shippingCost;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <div className="pt-20 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link href="/produits">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continuer les achats
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-black">Mon Panier</h1>
              <p className="text-gray-600">
                {items.length} article{items.length > 1 ? "s" : ""}
              </p>
            </div>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4 text-black">
                Votre panier est vide
              </h2>
              <p className="text-gray-600 mb-8">
                Découvrez nos produits et accessoires pour créer votre enseigne
                parfaite
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/produits">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Voir nos produits
                  </Button>
                </Link>
                <Link href="/accessoires">
                  <Button
                    variant="outline"
                    className="border-gray-900 text-gray-900 hover:bg-gray-100"
                  >
                    Voir les accessoires
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <Card
                    key={item.id}
                    className="bg-white border border-gray-200 shadow-sm"
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          width={400}
                          height={300}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-bold text-lg text-black">
                                {item.name}
                              </h3>
                              {item.material && (
                                <p className="text-sm text-gray-600">
                                  Matériau: {item.material}
                                </p>
                              )}
                              <p className="text-sm text-gray-600 capitalize">
                                Type:{" "}
                                {item.type === "product"
                                  ? "Produit"
                                  : "Accessoire"}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFromCart(item.id)}
                              className="text-pink-600 hover:text-pink-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="h-8 w-8 p-0 border-gray-300"
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <Input
                                type="number"
                                value={item.quantity}
                                onChange={(e) =>
                                  updateQuantity(
                                    item.id,
                                    Number.parseInt(e.target.value) || 1
                                  )
                                }
                                className="w-16 text-center bg-white border-gray-300"
                                min="1"
                              />
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="h-8 w-8 p-0 border-gray-300"
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-600">
                                {item.price}MAD × {item.quantity}
                              </p>
                              <p className="text-xl font-bold text-blue-600">
                                {(item.price * item.quantity).toFixed(2)}MAD
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Clear Cart */}
                <div className="text-right">
                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Vider le panier
                  </Button>
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <Card className="bg-white border border-gray-200 shadow-sm sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-black">Récapitulatif</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Sous-total:</span>
                      <span className="text-gray-900">
                        {getTotalPrice().toFixed(2)}MAD HT
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Livraison:</span>
                      <span
                        className={
                          shippingCost === 0
                            ? "text-yellow-600 font-medium"
                            : "text-gray-900"
                        }
                      >
                        {shippingCost === 0 ? "Gratuite" : `${shippingCost}MAD`}
                      </span>
                    </div>
                    {shippingCost > 0 && (
                      <p className="text-xs text-gray-500">
                        Livraison gratuite à partir de 200MAD
                      </p>
                    )}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between text-lg font-bold">
                        <span className="text-gray-900">Total:</span>
                        <span className="text-blue-600">
                          {totalWithShipping.toFixed(2)}MAD HT
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        TVA: {(totalWithShipping * 0.2).toFixed(2)}MAD
                      </p>
                      <p className="text-sm font-medium mt-1 text-black">
                        Total TTC: {(totalWithShipping * 1.2).toFixed(2)}MAD
                      </p>
                    </div>

                    <div className="space-y-3 pt-4">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3">
                        Procéder au paiement
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-gray-900 text-gray-900 hover:bg-gray-100"
                      >
                        Demander un devis
                      </Button>
                    </div>

                    <div className="text-center text-sm text-gray-500 pt-4 border-t border-gray-200">
                      <p>✓ Paiement sécurisé</p>
                      <p>✓ Livraison 5-7 jours</p>
                      <p>✓ Garantie 2 ans</p>
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
  );
}
