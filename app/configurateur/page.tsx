"use client";
import Link from "next/link";
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
} from "lucide-react";
import Image from "next/image";
import img1 from "@/public/decoupes.jpg";
import img2 from "@/public/lumineuses.jpg";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";

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

  const handleAddToCart = () => {
    const configuredItem = {
      id: Date.now().toString(),
      name: `Enseigne personnalisée: '${signText}'`,
      price: Number.parseFloat(calculatePrice()),
      quantity: 1,
      image: signStyle === "cut-out" ? "/decoupes.jpg" : "/lumineuses.jpg",
      material: `${material} (${thickness})`,
      type: "product" as const,
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
    addToCart(configuredItem);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-black">
      <div className="pt-20 px-4 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-blue-500 bg-clip-text text-transparent">
              Configurez Votre Enseigne
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Créez votre enseigne lumineuse ou signalétique sur mesure et obtenez un devis instantané.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Configuration Options */}
            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg border border-gray-200 space-y-8">
              <h2 className="text-2xl font-bold mb-6 text-black">Options de Configuration</h2>
              {/* Sign Text Input */}
              <div>
                <Label htmlFor="signText" className="text-lg font-medium flex items-center mb-3 text-gray-800">
                  <TextCursorInput className="mr-2 h-5 w-5 text-blue-600" /> Texte de l&apos;Enseigne
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
                <p className="text-sm text-gray-500 mt-1">
                  Max 50 caractères. Caractères restants: {50 - signText.length}
                </p>
              </div>
              {/* Font Selection */}
              <div>
                <Label htmlFor="font" className="text-lg font-medium flex items-center mb-3 text-gray-800">
                  <Type className="mr-2 h-5 w-5 text-blue-600" /> Choix de la Police
                </Label>
                <Select value={font} onValueChange={setFont}>
                  <SelectTrigger className="w-full bg-gray-50 border-gray-300 text-black focus:ring-blue-500">
                    <SelectValue placeholder="Sélectionnez une police" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-black border-gray-300">
                    {fontOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-sm text-gray-500 mt-1">
                  Pour des polices Google Fonts, elles doivent être importées globalement (ex: dans globals.css).
                </p>
              </div>
              {/* Text Size (Height) */}
              <div>
                <Label htmlFor="height" className="text-lg font-medium flex items-center mb-3 text-gray-800">
                  <Ruler className="mr-2 h-5 w-5 text-blue-600" /> Hauteur du Texte (cm)
                </Label>
                <Label htmlFor="height" className="text-sm text-gray-600">
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
                <p className="text-sm text-gray-500 mt-1">Largeur estimée: {estimatedWidth.toFixed(0)} cm</p>
              </div>
              {/* Style Selection (Cut-out vs Lighted) */}
              <div>
                <Label className="text-lg font-medium flex items-center mb-3 text-gray-800">
                  <Layers className="mr-2 h-5 w-5 text-blue-600" /> Type de Support
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card
                    className={`cursor-pointer border-2 ${
                      signStyle === "cut-out" ? "border-blue-600" : "border-gray-300"
                    } hover:border-blue-500 transition-all duration-200 rounded-lg bg-white text-black`}
                    onClick={() => setSignStyle("cut-out")}
                  >
                    <CardContent className="p-4 text-center flex flex-col items-center">
                      <Image
                        src={img1}
                        alt="Lettres découpées"
                        className="w-32 h-32 object-contain mb-2"
                        width={128}
                        height={128}
                      />
                      <h3 className="text-lg font-bold text-black">Lettres découpées</h3>
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
                    <CardContent className="p-4 text-center flex flex-col items-center">
                      <Image
                        src={img2}
                        alt="Lettres lumineuses"
                        className="w-32 h-32 object-contain mb-2"
                        width={128}
                        height={128}
                      />
                      <h3 className="text-lg font-bold text-black">Lettres lumineuses</h3>
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
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="material" className="text-lg font-medium flex items-center mb-3 text-gray-800">
                    <Type className="mr-2 h-5 w-5 text-blue-600" /> Matériau
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
                  <Label htmlFor="thickness" className="text-lg font-medium flex items-center mb-3 text-gray-800">
                    <Ruler className="mr-2 h-5 w-5 text-blue-600" /> Épaisseur
                  </Label>
                  <Select value={thickness} onValueChange={(value: Thickness) => setThickness(value)}>
                    <SelectTrigger className="w-full bg-gray-50 border-gray-300 text-black focus:ring-blue-500">
                      <SelectValue placeholder="Sélectionnez l&apos;épaisseur" />
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
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="textColor" className="text-lg font-medium flex items-center mb-3 text-gray-800">
                    <Palette className="mr-2 h-5 w-5 text-blue-600" /> Couleur du Texte
                  </Label>
                  <Input
                    id="textColor"
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-full h-10 p-1 border-gray-300 rounded-md cursor-pointer"
                  />
                  <p className="text-sm text-gray-500 mt-1">Code Hex: {textColor.toUpperCase()}</p>
                </div>
                <div>
                  <Label htmlFor="backgroundColor" className="text-lg font-medium flex items-center mb-3 text-gray-800">
                    <Paintbrush className="mr-2 h-5 w-5 text-blue-600" /> Couleur de Fond
                  </Label>
                  <Input
                    id="backgroundColor"
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="w-full h-10 p-1 border-gray-300 rounded-md cursor-pointer"
                  />
                  <p className="text-sm text-gray-500 mt-1">Code Hex: {backgroundColor.toUpperCase()}</p>
                </div>
              </div>
              {/* Lighting Options (Conditional) */}
              {signStyle === "lighted" && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-black flex items-center">
                    <Lightbulb className="mr-2 h-5 w-5 text-blue-600" /> Options d&apos;Éclairage
                  </h3>
                  <div>
                    <Label htmlFor="ledColor" className="text-lg font-medium flex items-center mb-3 text-gray-800">
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
                    <Label htmlFor="intensity" className="text-lg font-medium flex items-center mb-3 text-gray-800">
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
                    <label htmlFor="neonEffect" className="text-sm font-medium text-gray-800">
                      Effet Néon (+{optionCosts.neonEffect}MAD)
                    </label>
                  </div>
                </div>
              )}
              {/* Fixation */}
              <div>
                <Label htmlFor="fixationType" className="text-lg font-medium flex items-center mb-3 text-gray-800">
                  <HardHat className="mr-2 h-5 w-5 text-blue-600" /> Type de Fixation
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
                <p className="text-sm text-gray-500 mt-1">
                  Des illustrations des méthodes de fixation peuvent être ajoutées ici.
                </p>
              </div>
              {/* General Additional Options */}
              <div>
                <Label className="text-lg font-medium flex items-center mb-3 text-gray-800">
                  <Settings className="mr-2 h-5 w-5 text-blue-600" /> Options Supplémentaires
                </Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="installationKit"
                      checked={options.installationKit}
                      onCheckedChange={(checked) => setOptions((prev) => ({ ...prev, installationKit: !!checked }))}
                      className="border-gray-400 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
                    />
                    <label htmlFor="installationKit" className="text-gray-700">
                      Kit d&apos;installation (+{optionCosts.installationKit}MAD)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="dimmer"
                      checked={options.dimmer}
                      onCheckedChange={(checked) => setOptions((prev) => ({ ...prev, dimmer: !!checked }))}
                      className="border-gray-400 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
                    />
                    <label htmlFor="dimmer" className="text-gray-700">
                      Variateur de luminosité (+{optionCosts.dimmer}MAD)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="customDesign"
                      checked={options.customDesign}
                      onCheckedChange={(checked) => setOptions((prev) => ({ ...prev, customDesign: !!checked }))}
                      className="border-gray-400 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
                    />
                    <label htmlFor="customDesign" className="text-sm font-medium text-gray-800">
                      Design personnalisé par un expert (+{optionCosts.customDesign}MAD)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* Visual Preview and Order Summary */}
            <div>
              <Card className="bg-white border-gray-200 shadow-lg sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-bold text-black">
                    <ImageIcon className="mr-2 h-6 w-6 text-blue-600" /> Aperçu & Récapitulatif
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Visual Preview */}
                  <div
                    className="relative w-full h-48 rounded-lg flex items-center justify-center overflow-hidden border border-gray-300"
                    style={{ backgroundColor: backgroundColor }}
                  >
                    <p
                      className="font-extrabold break-words leading-tight text-center px-2"
                      style={{
                        fontFamily: font,
                        color: textColor,
                        fontSize: `${Math.min(4, (height / 30) * 2)}rem`,
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
                  <div className="space-y-2 text-gray-800">
                    <div className="flex justify-between text-lg">
                      <span>Texte:</span>
                      <span className="font-semibold">{signText || "Non défini"}</span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span>Style:</span>
                      <span className="capitalize font-semibold">
                        {signStyle === "cut-out" ? "Lettres découpées" : "Lettres lumineuses"}
                      </span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span>Police:</span>
                      <span className="font-semibold">{fontOptions.find((f) => f.value === font)?.label || font}</span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span>Hauteur:</span>
                      <span className="font-semibold">{height} cm</span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span>Largeur Estimée:</span>
                      <span className="font-semibold">{estimatedWidth.toFixed(0)} cm</span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span>Matériau:</span>
                      <span className="capitalize font-semibold">{material}</span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span>Épaisseur:</span>
                      <span className="font-semibold">{thickness}</span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span>Couleur Texte:</span>
                      <span className="font-semibold">{textColor.toUpperCase()}</span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span>Couleur Fond:</span>
                      <span className="font-semibold">{backgroundColor.toUpperCase()}</span>
                    </div>
                    {signStyle === "lighted" && (
                      <>
                        <div className="flex justify-between text-lg">
                          <span>Couleur LED:</span>
                          <span className="capitalize font-semibold">{ledColor.replace("-", " ")}</span>
                        </div>
                        <div className="flex justify-between text-lg">
                          <span>Intensité:</span>
                          <span className="font-semibold">{intensity}%</span>
                        </div>
                        <div className="flex justify-between text-lg">
                          <span>Effet Néon:</span>
                          <span className="font-semibold">{neonEffect ? "Oui" : "Non"}</span>
                        </div>
                      </>
                    )}
                    <div className="flex justify-between text-lg">
                      <span>Fixation:</span>
                      <span className="capitalize font-semibold">
                        {fixationOptions.find((f) => f.value === fixationType)?.label || fixationType}
                      </span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span>Options:</span>
                      <span className="font-semibold">
                        {Object.values(options).some(Boolean)
                          ? Object.keys(options)
                              .filter((key) => options[key as keyof Options])
                              .map((key) => key.replace(/([A-Z])/g, " $1").toLowerCase())
                              .join(", ")
                          : "Aucune"}
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-gray-300 pt-4">
                    <div className="flex justify-between text-lg font-bold text-black">
                      <span>Prix Estimé HT:</span>
                      <span className="text-blue-600 text-2xl">{calculatePrice()} MAD</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      TVA (20%): {(Number.parseFloat(calculatePrice()) * 0.2).toFixed(2)} MAD
                    </p>
                    <p className="text-sm font-medium text-black mt-1">
                      Total TTC: {(Number.parseFloat(calculatePrice()) * 1.2).toFixed(2)} MAD
                    </p>
                  </div>
                  <div className="space-y-3 pt-4">
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3"
                      onClick={handleAddToCart}
                    >
                      <ShoppingCart className="mr-2 h-5 w-5" /> Ajouter au panier
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 bg-transparent"
                    >
                      Demander un devis détaillé
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