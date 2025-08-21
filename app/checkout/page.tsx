"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useCart, CartItem } from "../context/CartContext";
import { CheckCircle, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  postalCode: string;
  address: string;
}

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart();
  const shippingCost = getTotalPrice() >= 200 ? 0 : 15;
  const totalWithShipping = getTotalPrice() + shippingCost;
  const totalTTC = (totalWithShipping * 1.2).toFixed(2);
  const [orderSubmitted, setOrderSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    postalCode: "",
    address: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const orderSummary = {
      items,
      totalTTC,
    };

    try {
      const response = await fetch("https://enseigne-mjpub-api.vercel.app/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData, orderSummary }),
      });

      if (response.ok) {
        setOrderSubmitted(true);
        clearCart();
      } else {
        console.error("Échec de la soumission de la commande.");
        // You can display an error message to the user here
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
    }
  };

  // Display if the cart is empty and the order has not been submitted yet
  if (items.length === 0 && !orderSubmitted) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="text-center py-16">
            <ShoppingBag className="h-24 w-24 text-gray-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">Votre panier est vide</h2>
            <p className="text-gray-400 mb-8">
              Ajoutez des produits pour procéder à la commande.
            </p>
            <Link href="/produits">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Voir nos produits
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-black">
      <Header />
      <div className="pt-20 px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-blue-500 bg-clip-text text-transparent">
              Finaliser Votre Commande
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Veuillez remplir vos coordonnées pour le paiement à la livraison.
            </p>
          </div>

          {orderSubmitted ? (
            <div className="bg-green-100 text-green-800 p-8 rounded-lg shadow-lg text-center">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Commande Reçue !</h2>
              <p className="text-lg mb-6">
                Votre commande a été soumise avec succès. Nous vous contacterons
                bientôt pour confirmer les détails de la livraison.
              </p>
              
              <Link href="/">
                <Button className="mt-8 bg-blue-600 hover:bg-blue-700">
                  Retour à l&apos;accueil
                </Button>
              </Link>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Vos Coordonnées */}
                <h2 className="text-2xl font-bold mb-4 text-black">
                  Vos Coordonnées
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-2">
                      Nom Complet <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-50 border-gray-300 text-black focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-2">
                      Téléphone <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="06 12 34 56 78"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-50 border-gray-300 text-black focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">
                      Adresse E-mail <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-50 border-gray-300 text-black focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode" className="block text-sm font-medium text-gray-800 mb-2">
                      Code Postal <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      type="text"
                      placeholder="75001"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-50 border-gray-300 text-black focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" className="block text-sm font-medium text-gray-800 mb-2">
                    Adresse Complète <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="address"
                    name="address"
                    rows={3}
                    placeholder="Numéro et nom de rue, ville, pays..."
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-50 border-gray-300 text-black focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                {/* Votre Commande */}
                <h2 className="text-2xl font-bold mb-4 text-black pt-6 border-t border-gray-200">
                  Votre Commande
                </h2>
                <div className="space-y-3">
                  {items.map((item: CartItem) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center text-gray-800"
                    >
                      <span className="text-sm">
                        {item.name} ({item.quantity}x)
                      </span>
                      <span className="font-semibold">
                        {(item.price * item.quantity).toFixed(2)}€
                      </span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center text-gray-800 pt-2 border-t border-gray-200">
                    <span>Sous-total HT:</span>
                    <span className="font-semibold">
                      {getTotalPrice().toFixed(2)}€
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-gray-800">
                    <span>Livraison:</span>
                    <span
                      className={`font-semibold ${
                        shippingCost === 0 ? "text-green-600" : ""
                      }`}
                    >
                      {shippingCost === 0
                        ? "Gratuite"
                        : `${shippingCost.toFixed(2)}€`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold text-black pt-2 border-t border-gray-300">
                    <span>Total HT:</span>
                    <span className="text-blue-600">
                      {totalWithShipping.toFixed(2)}€
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold text-black">
                    <span>Total TTC:</span>
                    <span className="text-blue-600">{totalTTC}€</span>
                  </div>
                </div>

                {/* Méthode de Paiement */}
                <h2 className="text-2xl font-bold mb-4 text-black pt-6 border-t border-gray-200">
                  Méthode de Paiement
                </h2>
                <div className="flex items-center space-x-2">
                  <Input
                    id="cashOnDelivery"
                    name="paymentMethod"
                    type="radio"
                    value="cashOnDelivery"
                    checked
                    readOnly
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <Label htmlFor="cashOnDelivery" className="text-sm font-medium text-gray-800">
                    Paiement à la livraison
                  </Label>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Vous paierez le montant total de {totalTTC}€ à la réception de
                  votre commande.
                </p>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3"
                  disabled={items.length === 0}
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Confirmer la commande
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}