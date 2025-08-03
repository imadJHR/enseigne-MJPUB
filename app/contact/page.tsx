"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      <div className="pt-20 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Une question ? Un projet ? Notre équipe est là pour vous accompagner
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  Envoyez-nous un message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white mb-2 block">
                        Nom *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-gray-700 border-gray-600 text-white"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white mb-2 block">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-gray-700 border-gray-600 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-white mb-2 block">
                        Téléphone
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-white mb-2 block">
                        Sujet *
                      </Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="bg-gray-700 border-gray-600 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-gray-700 border-gray-600 text-white min-h-32"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Info */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle>Informations de contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Téléphone</h3>
                      <p className="text-gray-400">01 23 45 67 89</p>
                      <p className="text-sm text-gray-500">Lun-Ven: 8h-18h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-gray-400">contact@enseigne42.fr</p>
                      <p className="text-sm text-gray-500">Réponse sous 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Adresse</h3>
                      <p className="text-gray-400">123 Rue de l'Industrie</p>
                      <p className="text-gray-400">75001 Paris, France</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Horaires d'ouverture</h3>
                      <p className="text-gray-400">Lundi - Vendredi: 8h00 - 18h00</p>
                      <p className="text-gray-400">Samedi: 9h00 - 12h00</p>
                      <p className="text-gray-400">Dimanche: Fermé</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle>Notre atelier</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-gray-400">Carte Google Maps</p>
                      <p className="text-sm text-gray-500">123 Rue de l'Industrie, Paris</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://wa.me/33123456789"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
                <a
                  href="mailto:contact@enseigne42.fr"
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white p-4 rounded-lg transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Questions fréquentes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Quel est le délai de fabrication ?</h3>
                  <p className="text-gray-400">
                    Nos enseignes sont fabriquées sous 5 à 7 jours ouvrés selon la complexité du projet.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Proposez-vous l'installation ?</h3>
                  <p className="text-gray-400">
                    Oui, nous proposons un service d'installation par nos techniciens qualifiés sur toute la France.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Quelle est la garantie ?</h3>
                  <p className="text-gray-400">Toutes nos enseignes sont garanties 2 ans pièces et main d'œuvre.</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Puis-je avoir un devis gratuit ?</h3>
                  <p className="text-gray-400">
                    Bien sûr ! Utilisez notre configurateur en ligne ou contactez-nous directement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
