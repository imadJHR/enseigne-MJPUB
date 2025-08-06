"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useState, useMemo } from "react";
import {
  Ruler,
  Palette,
  Type,
  ShoppingCart,
  Settings,
  TextCursorInput,
  ImageIcon,
  Layers,
  Lightbulb,
  Paintbrush,
  HardHat,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import img1 from "@/public/decoupes.jpg";
import img2 from "@/public/lumineuses.jpg";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";
import Link from "next/link";

type SignStyle = "cut-out" | "lighted";
type Material = "plexiglas" | "pvc" | "dibond" | "aluminium";
type Thickness = "3mm" | "5mm" | "10mm" | "15mm" | "20mm";
type FixationType = "murale" | "suspendue" | "sur-pied" | "entretoises";
type LedColor = "blanc-froid" | "blanc-chaud" | "rouge" | "bleu" | "vert" | "rgb";

interface FontOption {
  value: string;
  label: string;
}

interface FixationOption {
  value: FixationType;
  label: string;
}

interface Options {
  installationKit: boolean;
  dimmer: boolean;
  customDesign: boolean;
}

export default function ConfigurateurPage() {
  const { addToCart } = useCart();
  const [signText, setSignText] = useState("Votre Enseigne");
  const [signStyle, setSignStyle] = useState<SignStyle>("lighted");
  const [font, setFont] = useState("Arial, sans-serif");
  const [height, setHeight] = useState(30);
  const [material, setMaterial] = useState<Material>("plexiglas");
  const [thickness, setThickness] = useState<Thickness>("5mm");
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [ledColor, setLedColor] = useState<LedColor>("blanc-froid");
  const [intensity, setIntensity] = useState(50);
  const [neonEffect, setNeonEffect] = useState(false);
  const [fixationType, setFixationType] = useState<FixationType>("murale");
  const [options, setOptions] = useState<Options>({
    installationKit: false,
    dimmer: false,
    customDesign: false,
  });
  const [isSuccessPage, setIsSuccessPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fontOptions: FontOption[] = [
    { value: "Arial, sans-serif", label: "Arial" },
    { value: "Verdana, sans-serif", label: "Verdana" },
    { value: "Georgia, serif", label: "Georgia" },
    { value: "Times New Roman, serif", label: "Times New Roman" },
    { value: "Courier New, monospace", label: "Courier New" },
    { value: "Impact, sans-serif", label: "Impact" },
    { value: "Pacifico, cursive", label: "Pacifico (Script)" },
    { value: "Lobster, cursive", label: "Lobster (Bold Script)" },
    { value: "Bebas Neue, sans-serif", label: "Bebas Neue (Condensed)" },
    { value: "Montserrat, sans-serif", label: "Montserrat (Modern)" },
    { value: "Playfair Display, serif", label: "Playfair Display (Elegant)" },
    { value: "Dancing Script, cursive", label: "Dancing Script" },
    { value: "Oswald, sans-serif", label: "Oswald (Strong)" },
    { value: "Lato, sans-serif", label: "Lato (Clean)" },
  ];

  const thicknessOptions: Thickness[] = ["3mm", "5mm", "10mm", "15mm", "20mm"];

  const fixationOptions: FixationOption[] = [
    { value: "murale", label: "Murale (vis et chevilles)" },
    { value: "suspendue", label: "Suspendue (câbles)" },
    { value: "sur-pied", label: "Sur Pied (socle)" },
    { value: "entretoises", label: "Entretoises (déport mural)" },
  ];

  const basePrices = {
    "cut-out": 0.8,
    "lighted": 50,
  };

  const materialMultipliers: Record<Material, number> = {
    plexiglas: 1.2,
    pvc: 0.8,
    dibond: 1.0,
    aluminium: 1.5,
  };

  const thicknessMultipliers: Record<Thickness, number> = {
    "3mm": 0.9,
    "5mm": 1.0,
    "10mm": 1.2,
    "15mm": 1.4,
    "20mm": 1.6,
  };

  const optionCosts = {
    installationKit: 50,
    dimmer: 30,
    customDesign: 100,
    neonEffect: 75,
  };

  const estimatedWidth = useMemo(() => {
    const charWidthFactor = 0.6;
    return Math.max(10, signText.length * height * charWidthFactor);
  }, [signText, height]);

  const calculatePrice = (): string => {
    let price = 0;
    const surfaceAreaCm2 = estimatedWidth * height;
    const surfaceAreaM2 = surfaceAreaCm2 / 10000;

    if (signStyle === "cut-out") {
      price = basePrices[signStyle] * surfaceAreaCm2 * materialMultipliers[material] * thicknessMultipliers[thickness];
    } else {
      price = basePrices[signStyle] * surfaceAreaM2 * materialMultipliers[material] * thicknessMultipliers[thickness];
      price += (intensity / 100) * 50;
      if (neonEffect) price += optionCosts.neonEffect;
    }

    if (options.installationKit) price += optionCosts.installationKit;
    if (options.dimmer) price += optionCosts.dimmer;
    if (options.customDesign) price += optionCosts.customDesign;

    return price > 0 ? price.toFixed(2) : "0.00";
  };

  const configuredItem = useMemo(() => {
    return {
      name: `Enseigne personnalisée: '${signText}'`,
      price: Number.parseFloat(calculatePrice()),
      material: `${material} (${thickness})`,
      details: {
        font: fontOptions.find((f) => f.value === font)?.label || font,
        height: `${height}cm`,
        estimatedWidth: `${estimatedWidth.toFixed(0)}cm`,
        textColor: textColor.toUpperCase(),
        backgroundColor: backgroundColor.toUpperCase(),
        ...(signStyle === "lighted" && {
          ledColor: ledColor.replace("-", " "),
          intensity: `${intensity}%`,
          neonEffect: neonEffect ? "Oui" : "Non",
        }),
        fixationType: fixationOptions.find((f) => f.value === fixationType)?.label || fixationType,
        additionalOptions: Object.keys(options)
          .filter((key) => options[key as keyof Options])
          .map((key) => key.replace(/([A-Z])/g, " $1").toLowerCase())
          .join(", "),
      },
    };
  }, [
    signText,
    calculatePrice,
    material,
    thickness,
    font,
    height,
    estimatedWidth,
    textColor,
    backgroundColor,
    signStyle,
    ledColor,
    intensity,
    neonEffect,
    fixationType,
    options,
    fontOptions,
    fixationOptions,
  ]);

  const handleSendEmail = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://enseigne-mjpub-api.vercel.app/api/configurator-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(configuredItem),
      });

      if (response.ok) {
        setIsSuccessPage(true);
      } else {
        alert("Échec de l'envoi des informations. Veuillez réessayer.");
      }
    } catch (error) {
      alert("Erreur réseau. Veuillez vérifier votre connexion.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToCart = () => {
    addToCart(configuredItem);
    alert("Votre enseigne a été ajoutée au panier !");
  };

  if (isSuccessPage) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="bg-white text-green-800 p-6 sm:p-8 rounded-lg shadow-lg text-center max-w-md w-full mx-4">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Demande de devis envoyée !</h2>
            <p className="text-base sm:text-lg mb-6 text-gray-700">
              Merci pour votre demande. Un de nos experts vous contactera bientôt pour discuter de votre projet.
            </p>
            <Link href="/">
              <Button className="mt-6 sm:mt-8 bg-blue-600 hover:bg-blue-700">
                Retour à l&apos;accueil
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
      <div className="pt-16 sm:pt-20 px-4 py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-black to-blue-500 bg-clip-text text-transparent">
              Configurez Votre Enseigne
            </h1>
            <p className="text-base sm:text-xl text-gray-700 max-w-2xl mx-auto">
              Créez votre enseigne lumineuse ou signalétique sur mesure et obtenez un devis instantané.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Configuration Options */}
            <div className="lg:col-span-2 bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border border-gray-200 space-y-6 sm:space-y-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-black">Options de Configuration</h2>
              
              {/* Sign Text Input */}
              <div>
                <Label htmlFor="signText" className="text-base sm:text-lg font-medium flex items-center mb-2 sm:mb-3 text-gray-800">
                  <TextCursorInput className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-600" /> Texte de l&apos;Enseigne
                </Label>
                <Input
                  id="signText"
                  type="text"
                  placeholder="Votre texte ici..."
                  value={signText}
                  onChange={(e) => setSignText(e.target.value)}
                  maxLength={50}
                  className="w-full bg-gray-50 border-gray-300 text-black focus:border-blue-500 focus:ring-blue-500"
                />
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Max 50 caractères. Caractères restants: {50 - signText.length}
                </p>
              </div>
              
              {/* Font Selection */}
              <div>
                <Label htmlFor="font" className="text-base sm:text-lg font-medium flex items-center mb-2 sm:mb-3 text-gray-800">
                  <Type className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-600" /> Choix de la Police
                </Label>
                <Select value={font} onValueChange={setFont}>
                  <SelectTrigger className="w-full bg-gray-50 border-gray-300 text-black focus:ring-blue-500">
                    <SelectValue placeholder="Sélectionnez une police" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-black border-gray-300 max-h-60 overflow-y-auto">
                    {fontOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Pour des polices Google Fonts, elles doivent être importées globalement (ex: dans globals.css).
                </p>
              </div>
              
              {/* Text Size (Height) */}
              <div>
                <Label htmlFor="height" className="text-base sm:text-lg font-medium flex items-center mb-2 sm:mb-3 text-gray-800">
                  <Ruler className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-600" /> Hauteur du Texte (cm)
                </Label>
                <Label htmlFor="height" className="text-xs sm:text-sm text-gray-600">
                  Hauteur: {height} cm
                </Label>
                <Slider
                  id="height"
                  min={10}
                  max={100}
                  step={1}
                  value={[height]}
                  onValueChange={(val) => setHeight(val[0])}
                  className="mt-2 [&>span:first-child]:bg-blue-600 [&>span:first-child]:border-blue-600"
                />
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Largeur estimée: {estimatedWidth.toFixed(0)} cm</p>
              </div>
              
              {/* Style Selection (Cut-out vs Lighted) */}
              <div>
                <Label className="text-base sm:text-lg font-medium flex items-center mb-2 sm:mb-3 text-gray-800">
                  <Layers className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-600" /> Type de Support
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <Card
                    className={`cursor-pointer border-2 ${
                      signStyle === "cut-out" ? "border-blue-600" : "border-gray-300"
                    } hover:border-blue-500 transition-all duration-200 rounded-lg bg-white text-black`}
                    onClick={() => setSignStyle("cut-out")}
                  >
                    <CardContent className="p-3 sm:p-4 text-center flex flex-col items-center">
                      <Image
                        src={img1}
                        alt="Lettres découpées"
                        className="w-24 h-24 sm:w-32 sm:h-32 object-contain mb-2"
                        width={128}
                        height={128}
                      />
                      <h3 className="text-base sm:text-lg font-bold text-black">Lettres découpées</h3>
                      <input
                        type="radio"
                        name="signStyle"
                        value="cut-out"
                        checked={signStyle === "cut-out"}
                        onChange={() => setSignStyle("cut-out")}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 mt-2"
                      />
                    </CardContent>
                  </Card>
                  <Card
                    className={`cursor-pointer border-2 ${
                      signStyle === "lighted" ? "border-blue-600" : "border-gray-300"
                    } hover:border-blue-500 transition-all duration-200 rounded-lg bg-white text-black`}
                    onClick={() => setSignStyle("lighted")}
                  >
                    <CardContent className="p-3 sm:p-4 text-center flex flex-col items-center">
                      <Image
                        src={img2}
                        alt="Lettres lumineuses"
                        className="w-24 h-24 sm:w-32 sm:h-32 object-contain mb-2"
                        width={128}
                        height={128}
                      />
                      <h3 className="text-base sm:text-lg font-bold text-black">Lettres lumineuses</h3>
                      <input
                        type="radio"
                        name="signStyle"
                        value="lighted"
                        checked={signStyle === "lighted"}
                        onChange={() => setSignStyle("lighted")}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 mt-2"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Material & Thickness */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <Label htmlFor="material" className="text-base sm:text-lg font-medium flex items-center mb-2 sm:mb-3 text-gray-800">
                    <Type className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-600" /> Matériau
                  </Label>
                  <Select value={material} onValueChange={(value: Material) => setMaterial(value)}>
                    <SelectTrigger className="w-full bg-gray-50 border-gray-300 text-black focus:ring-blue-500">
                      <SelectValue placeholder="Sélectionnez le matériau" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-black border-gray-300">
                      <SelectItem value="plexiglas">Plexiglas</SelectItem>
                      <SelectItem value="pvc">PVC</SelectItem>
                      <SelectItem value="dibond">Dibond</SelectItem>
                      <SelectItem value="aluminium">Aluminium</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="thickness" className="text-base sm:text-lg font-medium flex items-center mb-2 sm:mb-3 text-gray-800">
                    <Ruler className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-600" /> Épaisseur
                  </Label>
                  <Select value={thickness} onValueChange={(value: Thickness) => setThickness(value)}>
                    <SelectTrigger className="w-full bg-gray-50 border-gray-300 text-black focus:ring-blue-500">
                      <SelectValue placeholder="Sélectionnez l'épaisseur" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-black border-gray-300">
                      {thicknessOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Text Color & Background Color */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <Label htmlFor="textColor" className="text-base sm:text-lg font-medium flex items-center mb-2 sm:mb-3 text-gray-800">
                    <Palette className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-600" /> Couleur du Texte
                  </Label>
                  <div className="flex items-center gap-3">
                    <Input
                      id="textColor"
                      type="color"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="w-12 h-12 p-1 border-gray-300 rounded-md cursor-pointer"
                    />
                    <span className="text-sm sm:text-base font-mono">{textColor.toUpperCase()}</span>
                  </div>
                </div>
                <div>
                  <Label htmlFor="backgroundColor" className="text-base sm:text-lg font-medium flex items-center mb-2 sm:mb-3 text-gray-800">
                    <Paintbrush className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-600" /> Couleur de Fond
                  </Label>
                  <div className="flex items-center gap-3">
                    <Input
                      id="backgroundColor"
                      type="color"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="w-12 h-12 p-1 border-gray-300 rounded-md cursor-pointer"
                    />
                    <span className="text-sm sm:text-base font-mono">{backgroundColor.toUpperCase()}</span>
                  </div>
                </div>
              </div>
              
              {/* Lighting Options (Conditional) */}
              {signStyle === "lighted" && (
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-lg sm:text-xl font-bold text-black flex items-center">
                    <Lightbulb className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-600" /> Options d&apos;Éclairage
                  </h3>
                  <div>
                    <Label htmlFor="ledColor" className="text-base sm:text-lg font-medium flex items-center mb-2 sm:mb-3 text-gray-800">
                      Couleur de la LED
                    </Label>
                    <Select value={ledColor} onValueChange={(value: LedColor) => setLedColor(value)}>
                      <SelectTrigger className="w-full bg-gray-50 border-gray-300 text-black focus:ring-blue-500">
                        <SelectValue placeholder="Sélectionnez la couleur" />
                      </SelectTrigger>
                      <SelectContent className="bg-white text-black border-gray-300">
                        <SelectItem value="blanc-froid">Blanc Froid</SelectItem>
                        <SelectItem value="blanc-chaud">Blanc Chaud</SelectItem>
                        <SelectItem value="rouge">Rouge</SelectItem>
                        <SelectItem value="bleu">Bleu</SelectItem>
                        <SelectItem value="vert">Vert</SelectItem>
                        <SelectItem value="rgb">RGB (Couleur changeante)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="intensity" className="text-base sm:text-lg font-medium flex items-center mb-2 sm:mb-3 text-gray-800">
                      Intensité Lumineuse: {intensity}%
                    </Label>
                    <Slider
                      id="intensity"
                      min={0}
                      max={100}
                      step={1}
                      value={[intensity]}
                      onValueChange={(val) => setIntensity(val[0])}
                      className="mt-2 [&>span:first-child]:bg-blue-600 [&>span:first-child]:border-blue-600"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="neonEffect"
                      checked={neonEffect}
                      onCheckedChange={(checked) => setNeonEffect(!!checked)}
                      className="border-gray-400 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
                    />
                    <label htmlFor="neonEffect" className="text-sm sm:text-base font-medium text-gray-800">
                      Effet Néon (+{optionCosts.neonEffect}€)
                    </label>
                  </div>
                </div>
              )}
              
              {/* Fixation */}
              <div>
                <Label htmlFor="fixationType" className="text-base sm:text-lg font-medium flex items-center mb-2 sm:mb-3 text-gray-800">
                  <HardHat className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-600" /> Type de Fixation
                </Label>
                <Select value={fixationType} onValueChange={(value: FixationType) => setFixationType(value)}>
                  <SelectTrigger className="w-full bg-gray-50 border-gray-300 text-black focus:ring-blue-500">
                    <SelectValue placeholder="Sélectionnez le type de fixation" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-black border-gray-300">
                    {fixationOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Des illustrations des méthodes de fixation peuvent être ajoutées ici.
                </p>
              </div>
              
              {/* General Additional Options */}
              <div>
                <Label className="text-base sm:text-lg font-medium flex items-center mb-2 sm:mb-3 text-gray-800">
                  <Settings className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-600" /> Options Supplémentaires
                </Label>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="installationKit"
                      checked={options.installationKit}
                      onCheckedChange={(checked) => setOptions((prev) => ({ ...prev, installationKit: !!checked }))}
                      className="border-gray-400 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
                    />
                    <label htmlFor="installationKit" className="text-sm sm:text-base text-gray-700">
                      Kit d&apos;installation (+{optionCosts.installationKit}€)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="dimmer"
                      checked={options.dimmer}
                      onCheckedChange={(checked) => setOptions((prev) => ({ ...prev, dimmer: !!checked }))}
                      className="border-gray-400 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
                    />
                    <label htmlFor="dimmer" className="text-sm sm:text-base text-gray-700">
                      Variateur de luminosité (+{optionCosts.dimmer}€)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="customDesign"
                      checked={options.customDesign}
                      onCheckedChange={(checked) => setOptions((prev) => ({ ...prev, customDesign: !!checked }))}
                      className="border-gray-400 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
                    />
                    <label htmlFor="customDesign" className="text-sm sm:text-base font-medium text-gray-800">
                      Design personnalisé par un expert (+{optionCosts.customDesign}€)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual Preview and Order Summary */}
            <div className="lg:sticky lg:top-4">
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl sm:text-2xl font-bold text-black">
                    <ImageIcon className="mr-2 h-5 w-5 sm:h-6 sm:w-6 text-blue-600" /> Aperçu & Récapitulatif
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  {/* Visual Preview */}
                  <div
                    className="relative w-full h-40 sm:h-48 rounded-lg flex items-center justify-center overflow-hidden border border-gray-300"
                    style={{ backgroundColor: backgroundColor }}
                  >
                    <p
                      className="font-extrabold break-words leading-tight text-center px-2"
                      style={{
                        fontFamily: font,
                        color: textColor,
                        fontSize: `${Math.min(3, (height / 30) * 1.5)}rem`,
                        lineHeight: 1,
                        textShadow: signStyle === "lighted" ? `0 0 ${intensity / 10}px ${ledColor}` : "none",
                        ...(neonEffect &&
                          signStyle === "lighted" && {
                            boxShadow: `0 0 10px ${ledColor}, 0 0 20px ${ledColor}, 0 0 30px ${ledColor}`,
                            textShadow: `0 0 5px ${ledColor}, 0 0 10px ${ledColor}`,
                          }),
                      }}
                    >
                      {signText || "Votre Enseigne"}
                    </p>
                  </div>
                  
                  {/* Summary Details */}
                  <div className="space-y-1 sm:space-y-2 text-gray-800 text-sm sm:text-base">
                    <div className="flex justify-between">
                      <span>Texte:</span>
                      <span className="font-semibold">{signText || "Non défini"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Style:</span>
                      <span className="capitalize font-semibold">
                        {signStyle === "cut-out" ? "Lettres découpées" : "Lettres lumineuses"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Police:</span>
                      <span className="font-semibold">{fontOptions.find((f) => f.value === font)?.label || font}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hauteur:</span>
                      <span className="font-semibold">{height} cm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Largeur Estimée:</span>
                      <span className="font-semibold">{estimatedWidth.toFixed(0)} cm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Matériau:</span>
                      <span className="capitalize font-semibold">{material}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Épaisseur:</span>
                      <span className="font-semibold">{thickness}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Couleur Texte:</span>
                      <span className="font-semibold">{textColor.toUpperCase()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Couleur Fond:</span>
                      <span className="font-semibold">{backgroundColor.toUpperCase()}</span>
                    </div>
                    {signStyle === "lighted" && (
                      <>
                        <div className="flex justify-between">
                          <span>Couleur LED:</span>
                          <span className="capitalize font-semibold">{ledColor.replace("-", " ")}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Intensité:</span>
                          <span className="font-semibold">{intensity}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Effet Néon:</span>
                          <span className="font-semibold">{neonEffect ? "Oui" : "Non"}</span>
                        </div>
                      </>
                    )}
                    <div className="flex justify-between">
                      <span>Fixation:</span>
                      <span className="capitalize font-semibold">
                        {fixationOptions.find((f) => f.value === fixationType)?.label || fixationType}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Options:</span>
                      <span className="font-semibold text-right">
                        {Object.values(options).some(Boolean)
                          ? Object.keys(options)
                              .filter((key) => options[key as keyof Options])
                              .map((key) => key.replace(/([A-Z])/g, " $1").toLowerCase())
                              .join(", ")
                          : "Aucune"}
                      </span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-300 pt-3 sm:pt-4">
                    <div className="flex justify-between text-lg font-bold text-black">
                      <span>Prix Estimé HT:</span>
                      <span className="text-blue-600 text-xl sm:text-2xl">{calculatePrice()} €</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      TVA (20%): {(Number.parseFloat(calculatePrice()) * 0.2).toFixed(2)} €
                    </p>
                    <p className="text-sm sm:text-base font-medium text-black mt-1">
                      Total TTC: {(Number.parseFloat(calculatePrice()) * 1.2).toFixed(2)} €
                    </p>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4">
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg py-2 sm:py-3"
                      onClick={handleSendEmail}
                      disabled={isLoading}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> 
                      {isLoading ? "Envoi en cours..." : "Envoyer votre enseigne sur mesure"}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 bg-transparent"
                      onClick={handleAddToCart}
                    >
                      Ajouter au panier
                    </Button>
                  </div>
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