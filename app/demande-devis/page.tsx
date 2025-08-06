"use client";
import type React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Send, CheckCircle, X, Upload } from "lucide-react";

export default function DemandeDevisPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    postalCode: "",
    address: "",
    manufacturingProcess: "",
    photoMontage: false,
    logoFile: null as File | null,
    projectDescription: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [isLoading, setIsLoading] = useState(false);

  const manufacturingProcesses = [
    "Enseigne LED",
    "Lettres Découpées",
    "Panneau Dibond",
    "Néon Flexible",
    "Totem Lumineux",
    "Signalétique Intérieure",
    "Autre",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      manufacturingProcess: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        logoFile: e.target.files![0],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionStatus("idle");

    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("phone", formData.phone);
    formPayload.append("email", formData.email);
    formPayload.append("postalCode", formData.postalCode);
    formPayload.append("address", formData.address);
    formPayload.append("manufacturingProcess", formData.manufacturingProcess);
    formPayload.append("photoMontage", formData.photoMontage.toString());
    if (formData.logoFile) {
        formPayload.append("logoFile", formData.logoFile);
    }
    formPayload.append("projectDescription", formData.projectDescription);
    
    try {
      const response = await fetch("https://enseigne-mjpub-api.vercel.app/api/devis-request", {
        method: "POST",
        body: formPayload,
      });

      if (response.ok) {
        setSubmissionStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          postalCode: "",
          address: "",
          manufacturingProcess: "",
          photoMontage: false,
          logoFile: null,
          projectDescription: "",
        });
      } else {
        console.error("Échec de l'envoi du formulaire.");
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      setSubmissionStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>
          Demande de Devis | MJ PUB - Création d&apos;enseignes lumineuses
        </title>
        <meta
          name="description"
          content="Obtenez un devis personnalisé pour votre enseigne lumineuse. Notre équipe d'experts vous accompagne dans votre projet de signalétique."
        />
        <meta
          name="keywords"
          content="devis enseigne, création enseigne, signalétique, enseigne lumineuse, lettre découpée"
        />
        <meta property="og:title" content="Demande de Devis | MJ PUB" />
        <meta
          property="og:description"
          content="Obtenez un devis personnalisé pour votre enseigne lumineuse."
        />
      </Head>
      <div className="min-h-screen bg-white text-gray-900">
        <Header />
        <main className="pt-24 px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-blue-500 bg-clip-text text-transparent">
                Demande de Devis Personnalisé Gratuit
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Décrivez votre projet d&apos;enseigne et obtenez une estimation
                détaillée de nos experts.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-800 font-medium">
                      Nom Complet <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-gray-800 font-medium"
                    >
                      Téléphone <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="06 12 34 56 78"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-gray-800 font-medium"
                    >
                      Adresse E-mail <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="postalCode"
                      className="text-gray-800 font-medium"
                    >
                      Code Postal <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="postalCode"
                      type="text"
                      placeholder="75001"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                      className="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="address"
                    className="text-gray-800 font-medium"
                  >
                    Adresse Complète
                  </Label>
                  <Textarea
                    id="address"
                    rows={3}
                    placeholder="Numéro et nom de rue, ville, pays..."
                    value={formData.address}
                    onChange={handleChange}
                    className="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                {/* Project Details */}
                <div className="space-y-2">
                  <Label
                    htmlFor="manufacturingProcess"
                    className="text-gray-800 font-medium"
                  >
                    Type d&apos;enseigne <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.manufacturingProcess}
                    onValueChange={handleSelectChange}
                    required
                  >
                    <SelectTrigger className="w-full bg-gray-50 border-gray-200 text-gray-900 focus:ring-2 focus:ring-blue-100 focus:border-blue-500">
                      <SelectValue placeholder="Sélectionnez un type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-200 shadow-lg">
                      {manufacturingProcesses.map((process) => (
                        <SelectItem
                          key={process}
                          value={process}
                          className="hover:bg-blue-50 focus:bg-blue-50"
                        >
                          {process}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="projectDescription"
                    className="text-gray-800 font-medium"
                  >
                    Description de votre projet
                  </Label>
                  <Textarea
                    id="projectDescription"
                    rows={4}
                    placeholder="Décrivez votre projet (dimensions, couleurs, emplacement, etc.)"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    className="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="photoMontage"
                    checked={formData.photoMontage}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({
                        ...prev,
                        photoMontage: !!checked,
                      }))
                    }
                    className="mt-1 border-gray-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  />
                  <div className="space-y-1">
                    <Label
                      htmlFor="photoMontage"
                      className="text-gray-800 font-medium"
                    >
                      Photo montage souhaité
                    </Label>
                    <p className="text-sm text-gray-500">
                      Nous pouvons créer une simulation visuelle de votre future
                      enseigne.
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="logoFile"
                    className="text-gray-800 font-medium"
                  >
                    Fichier de votre logo (optionnel)
                  </Label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="logoFile"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-3 text-gray-500" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">
                            Cliquez pour uploader
                          </span>{" "}
                          ou glissez-déposez
                        </p>
                        <p className="text-xs text-gray-500">
                          Formats acceptés: SVG, AI, EPS, PDF, PNG (max. 10MB)
                        </p>
                      </div>
                      <input
                        id="logoFile"
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".svg,.ai,.eps,.pdf,.png,.jpg,.jpeg"
                      />
                    </label>
                  </div>
                  {formData.logoFile && (
                    <p className="text-sm text-gray-600 mt-2">
                      <span className="font-medium">Fichier sélectionné:</span>{" "}
                      {formData.logoFile.name}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium transition-colors shadow-sm"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Envoyer ma demande
                    </span>
                  )}
                </Button>
                {submissionStatus === "success" && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg flex items-start gap-3">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">
                        Demande envoyée avec succès !
                      </h3>
                      <p className="text-sm mt-1">
                        Nous avons bien reçu votre demande et vous contacterons
                        dans les plus brefs délais.
                      </p>
                    </div>
                  </div>
                )}
                {submissionStatus === "error" && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg flex items-start gap-3">
                    <X className="flex-shrink-0 h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">
                        Erreur lors de l&apos;envoi
                      </h3>

                      <p className="text-sm mt-1">
                        Une erreur est survenue. Veuillez réessayer ou nous
                        contacter directement.
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}