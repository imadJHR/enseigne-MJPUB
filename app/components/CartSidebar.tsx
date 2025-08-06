"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "../context/CartContext";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CartSidebar() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    isOpen,
    setIsOpen,
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-96 bg-white border-l border-gray-200 shadow-lg z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-blue-600" />
            <h2 className="text-lg font-bold text-gray-900">
              Panier ({getTotalItems()})
            </h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-900"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">Votre panier est vide</p>
              <Button
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Continuer les achats
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <Card
                  key={item.id}
                  className="bg-white border-gray-200 shadow-sm"
                >
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={400} 
                        height={300}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 text-sm line-clamp-2">
                          {item.name}
                        </h3>
                        {item.material && (
                          <Badge
                            variant="outline"
                            className="text-xs mt-1 border-gray-300"
                          >
                            {item.material}
                          </Badge>
                        )}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="h-6 w-6 p-0 border-gray-300"
                            >
                              <Minus className="h-3 w-3 text-gray-700" />
                            </Button>
                            <span className="text-sm text-gray-900 w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="h-6 w-6 p-0 border-gray-300"
                            >
                              <Plus className="h-3 w-3 text-gray-700" />
                            </Button>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 hover:text-red-700 h-6 w-6 p-0"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="text-right mt-1">
                          <span className="text-blue-600 font-bold">
                            {(item.price * item.quantity).toFixed(2)}€
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">Total:</span>
              <span className="text-blue-600 text-xl font-bold">
                {getTotalPrice().toFixed(2)}€ HT
              </span>
            </div>
            <div className="space-y-2">
              <Link href="/panier" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Voir le panier
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 bg-white"
                onClick={() => setIsOpen(false)}
              >
                Continuer les achats
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
