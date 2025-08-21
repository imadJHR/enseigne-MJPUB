"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Échec de l'envoi du message. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur réseau:", error);
      alert("Erreur réseau. Veuillez vérifier votre connexion.");
    }
  };

  const siteUrl = "https://lettre3dshop.com";

  // DONNÉES STRUCTURÉES (JSON-LD) POUR LES RICH SNIPPETS
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MJ PUB",
    description:
      "Fabrication et installation d'enseignes lumineuses et signalétique sur mesure.",
    url: siteUrl,
    telephone: "+33781546359",
    email: "mjpub59@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "644 route de Lille",
      addressLocality: "Saint-Amand-les-Eaux",
      postalCode: "59230",
      addressCountry: "FR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "19:00",
      },
    ],
    image: `${siteUrl}/og-image.png`,
    priceRange: "€€",
  };


  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-20 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-blue-500 bg-clip-text text-transparent">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une question ? Un projet ? Notre équipe est là pour vous accompagner
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Send className="h-5 w-5 text-blue-600" />
                  Envoyez-nous un message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="bg-green-50 text-green-800 p-8 rounded-lg text-center">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-2">
                      Message envoyé !
                    </h2>
                    <p className="text-lg text-gray-700">
                      Merci de nous avoir contacté. Nous vous répondrons dans
                      les plus brefs délais.
                    </p>
                    <Link href="/">
                      <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
                        Retour à l&apos;accueil
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="name"
                          className="text-gray-700 mb-2 block"
                        >
                          Nom *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-white border-gray-300 text-gray-900"
                          required
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="email"
                          className="text-gray-700 mb-2 block"
                        >
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-white border-gray-300 text-gray-900"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="phone"
                          className="text-gray-700 mb-2 block"
                        >
                          Téléphone
                        </Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="bg-white border-gray-300 text-gray-900"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="subject"
                          className="text-gray-700 mb-2 block"
                        >
                          Sujet *
                        </Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="bg-white border-gray-300 text-gray-900"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="text-gray-700 mb-2 block"
                      >
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-white border-gray-300 text-gray-900 min-h-32"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Envoyer le message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Info */}
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900">
                    Informations de contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1 text-gray-900">
                        Téléphone
                      </h3>
                      <p className="text-gray-600">+33 7 81 54 63 59</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1 text-gray-900">Email</h3>
                      <p className="text-gray-600">mjpub59@gmail.com</p>
                      <p className="text-sm text-gray-500">Réponse sous 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1 text-gray-900">Adresse</h3>
                      <p className="text-gray-600">644 route de Lille</p>
                      <p className="text-gray-600">59230 Saint-Amand-les-Eaux</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1 text-gray-900">
                        Horaires d&apos;ouverture
                      </h3>
                      <p className="text-gray-600">
                        Lundi - Vendredi: 8h30 - 19h
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900">Notre atelier</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-64 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.991620862744!2d3.4172926156749917!3d50.45837367928741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd2b1a2a4a4a4a%3A0x4b18d8f9f9f9f9f9!2s644+Route+de+Lille%2C+59230+Saint-Amand-les-Eaux!5e0!3m2!1sfr!2sfr!4v1724251200000!5m2!1sfr!2sfr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://wa.me/33781546359"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
                <a
                  href="mailto:mjpub59@gmail.com"
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Questions fréquentes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2 text-gray-900">
                    Quel est le délai de fabrication ?
                  </h3>
                  <p className="text-gray-600">
                    Nos enseignes sont fabriquées sous 5 à 7 jours ouvrés selon
                    la complexité du projet.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2 text-gray-900">
                    Proposez-vous l&apos;installation ?
                  </h3>
                  <p className="text-gray-600">
                    Oui, nous proposons un service d&apos;installation par nos
                    techniciens qualifiés sur toute la France.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2 text-gray-900">
                    Quelle est la garantie ?
                  </h3>
                  <p className="text-gray-600">
                    Toutes nos enseignes sont garanties 2 ans pièces et main
                    d&apos;œuvre.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2 text-gray-900">
                    Puis-je avoir un devis gratuit ?
                  </h3>
                  <p className="text-gray-600">
                    Bien sûr ! Utilisez notre configurateur en ligne ou
                    contactez-nous directement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
