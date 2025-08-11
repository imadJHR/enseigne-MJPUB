"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  HardHat,
  CheckCircle,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import img1 from "@/public/decoupes.jpg";
import img2 from "@/public/lumineuses.jpg";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";
import Link from "next/link";

// Import material images
import materialPlexi from "@/public/img1.jpg";
import materialPvc from "@/public/img2.jpg";
import materialDibond from "@/public/img13.jpg";
import materialAlu from "@/public/img8.jpg";

// Import example images for cut-out signs
import exCutOut1 from "@/public/decoupes.jpg";
import exCutOut2 from "@/public/img17.jpg";
import exCutOut3 from "@/public/img14.jpg";

// Import example images for lighted signs
import exLighted1 from "@/public/img15.jpg";
import exLighted2 from "@/public/img10.jpg";
import exLighted3 from "@/public/img16.jpg";

// Import fixation images
import fixationNone from "@/public/img17.jpg";
import fixationStandoffs from "@/public/img10.jpg";
import fixationWallMount from "@/public/img11.jpg";
import fixationSuspended from "@/public/img15.jpg";
import fixationFloor from "@/public/img10.jpg";

type SignStyle = "cut-out" | "lighted";
type Material = "plexiglas" | "pvc" | "dibond" | "aluminium";
type Thickness = "3mm" | "5mm" | "10mm" | "15mm" | "20mm";
type FixationType =
  | "sans"
  | "gabarit-entretoises"
  | "murale"
  | "suspendue"
  | "sur-pied";
type LedColor =
  | "blanc-froid"
  | "blanc-chaud"
  | "rouge"
  | "bleu"
  | "vert"
  | "rgb";

interface FontOption {
  value: string;
  label: string;
}

interface FixationOption {
  value: FixationType;
  label: string;
  image: StaticImageData;
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
  const [font, setFont] = useState("Montserrat, sans-serif");
  const [height, setHeight] = useState(30);
  const [material, setMaterial] = useState<Material>("plexiglas");
  const [thickness, setThickness] = useState<Thickness>("5mm");
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [ledColor, setLedColor] = useState<LedColor>("blanc-froid");
  const [intensity, setIntensity] = useState(50);
  const [neonEffect, setNeonEffect] = useState(false);
  const [fixationType, setFixationType] = useState<FixationType>(
    "gabarit-entretoises"
  );
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

  const materialOptions = [
    { name: "Plexiglas", value: "plexiglas", image: materialPlexi },
    { name: "PVC", value: "pvc", image: materialPvc },
    { name: "Dibond", value: "dibond", image: materialDibond },
    { name: "Aluminium", value: "aluminium", image: materialAlu },
  ];

  const thicknessOptions: Thickness[] = ["3mm", "5mm", "10mm", "15mm", "20mm"];

  const fixationOptions: FixationOption[] = [
    { value: "sans", label: "Sans (gabarit seul)", image: fixationNone },
    {
      value: "gabarit-entretoises",
      label: "Gabarit de perçage + Entretoises",
      image: fixationStandoffs,
    },
    {
      value: "murale",
      label: "Murale (vis et chevilles)",
      image: fixationWallMount,
    },
    {
      value: "suspendue",
      label: "Suspendue (câbles)",
      image: fixationSuspended,
    },
    { value: "sur-pied", label: "Sur Pied (socle)", image: fixationFloor },
  ];

  const examples = {
    "cut-out": [
      { id: 1, img: exCutOut1, alt: "Exemple de lettre découpée 1" },
      { id: 2, img: exCutOut2, alt: "Exemple de lettre découpée 2" },
      { id: 3, img: exCutOut3, alt: "Exemple de lettre découpée 3" },
    ],
    lighted: [
      { id: 1, img: exLighted1, alt: "Exemple de lettre lumineuse 1" },
      { id: 2, img: exLighted2, alt: "Exemple de lettre lumineuse 2" },
      { id: 3, img: exLighted3, alt: "Exemple de lettre lumineuse 3" },
    ],
  };

  const basePrices = {
    "cut-out": 0.8,
    lighted: 50,
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
      price =
        basePrices[signStyle] *
        surfaceAreaCm2 *
        materialMultipliers[material] *
        thicknessMultipliers[thickness];
    } else {
      price =
        basePrices[signStyle] *
        surfaceAreaM2 *
        materialMultipliers[material] *
        thicknessMultipliers[thickness];
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
        fixationType:
          fixationOptions.find((f) => f.value === fixationType)?.label ||
          fixationType,
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
      const response = await fetch(
        "https://enseigne-mjpub-api.vercel.app/api/configurator-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(configuredItem),
        }
      );
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Demande de devis envoyée !
            </h2>
            <p className="text-base sm:text-lg mb-6 text-gray-700">
              Merci pour votre demande. Un de nos experts vous contactera
              bientôt pour discuter de votre projet.
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
    <div className="min-h-screen bg-gray-50 text-black">
      <div className="pt-16 sm:pt-20 px-4 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Configurez Votre Enseigne
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Créez votre enseigne lumineuse ou signalétique sur mesure et
              obtenez un devis instantané.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Configuration Options */}
            <div className="lg:col-span-2 bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border border-gray-200 space-y-6 sm:space-y-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">
                Options de Configuration
              </h2>
              {/* Sign Text Input */}
              <div className="space-y-2">
                <Label
                  htmlFor="signText"
                  className="text-base sm:text-lg font-semibold flex items-center text-gray-800"
                >
                  <TextCursorInput className="mr-2 h-5 w-5 text-blue-600" />
                  Texte de l&apos;Enseigne
                </Label>
                <Input
                  id="signText"
                  type="text"
                  placeholder="Votre texte ici..."
                  value={signText}
                  onChange={(e) => setSignText(e.target.value)}
                  maxLength={50}
                  className="w-full bg-gray-100 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 rounded-md p-2"
                />
                <p className="text-xs sm:text-sm text-gray-500">
                  Max 50 caractères. Restants: {50 - signText.length}
                </p>
              </div>
              {/* Font Selection */}
              <div className="space-y-2">
                <Label
                  htmlFor="font"
                  className="text-base sm:text-lg font-semibold flex items-center text-gray-800"
                >
                  <Type className="mr-2 h-5 w-5 text-blue-600" />
                  Police
                </Label>
                <Select value={font} onValueChange={setFont}>
                  <SelectTrigger className="w-full bg-gray-100 border-gray-300 text-gray-900 focus:ring-blue-500">
                    <SelectValue placeholder="Sélectionnez une police" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-gray-900 border-gray-300 max-h-60 overflow-y-auto">
                    {fontOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        <span style={{ fontFamily: option.value }}>
                          {option.label}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Text Size (Height) */}
              <div className="space-y-2">
                <Label
                  htmlFor="height"
                  className="text-base sm:text-lg font-semibold flex items-center text-gray-800"
                >
                  <Ruler className="mr-2 h-5 w-5 text-blue-600" />
                  Hauteur du Texte:{" "}
                  <span className="font-bold ml-2">{height} cm</span>
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
                <p className="text-xs sm:text-sm text-gray-500">
                  Largeur estimée: {estimatedWidth.toFixed(0)} cm
                </p>
              </div>
              {/* Style Selection (Cut-out vs Lighted) */}
              <div className="space-y-2">
                <Label className="text-base sm:text-lg font-semibold flex items-center text-gray-800">
                  <Layers className="mr-2 h-5 w-5 text-blue-600" />
                  Type de Support
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card
                    className={`cursor-pointer border-2 ${
                      signStyle === "cut-out"
                        ? "border-blue-600 ring-2 ring-blue-500"
                        : "border-gray-300"
                    } hover:border-blue-500 transition-all duration-200 rounded-lg bg-gray-100 text-black`}
                    onClick={() => setSignStyle("cut-out")}
                  >
                    <CardContent className="p-4 flex flex-col items-center">
                      <Image
                        src={img1}
                        alt="Lettres découpées"
                        className="w-24 h-24 sm:w-32 sm:h-32 object-contain mb-2"
                        width={128}
                        height={128}
                      />
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 text-center">
                        Lettres découpées
                      </h3>
                    </CardContent>
                  </Card>
                  <Card
                    className={`cursor-pointer border-2 ${
                      signStyle === "lighted"
                        ? "border-blue-600 ring-2 ring-blue-500"
                        : "border-gray-300"
                    } hover:border-blue-500 transition-all duration-200 rounded-lg bg-gray-100 text-black`}
                    onClick={() => setSignStyle("lighted")}
                  >
                    <CardContent className="p-4 flex flex-col items-center">
                      <Image
                        src={img2}
                        alt="Lettres lumineuses"
                        className="w-24 h-24 sm:w-32 sm:h-32 object-contain mb-2"
                        width={128}
                        height={128}
                      />
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 text-center">
                        Lettres lumineuses
                      </h3>
                    </CardContent>
                  </Card>
                </div>
              </div>
              {/* Material Selection with Images */}
              <div className="space-y-2">
                <Label className="text-base sm:text-lg font-semibold flex items-center text-gray-800">
                  <Ruler className="mr-2 h-5 w-5 text-blue-600" />
                  Matériau
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {materialOptions.map((mat) => (
                    <Card
                      key={mat.value}
                      className={`cursor-pointer border-2 ${
                        material === mat.value
                          ? "border-blue-600 ring-2 ring-blue-500"
                          : "border-gray-300"
                      } hover:border-blue-500 transition-all duration-200 rounded-lg bg-gray-100 text-black`}
                      onClick={() => setMaterial(mat.value as Material)}
                    >
                      <CardContent className="p-2 sm:p-3 flex flex-col items-center">
                        <div className="relative w-full h-20 sm:h-24 mb-2 overflow-hidden rounded-md">
                          <Image
                            src={mat.image}
                            alt={mat.name}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <h3 className="text-sm sm:text-base font-semibold text-center">
                          {mat.name}
                        </h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              {/* Thickness Selection */}
              <div className="space-y-2">
                <Label
                  htmlFor="thickness"
                  className="text-base sm:text-lg font-semibold flex items-center text-gray-800"
                >
                  <Ruler className="mr-2 h-5 w-5 text-blue-600" />
                  Épaisseur
                </Label>
                <Select
                  value={thickness}
                  onValueChange={(value: Thickness) => setThickness(value)}
                >
                  <SelectTrigger className="w-full bg-gray-100 border-gray-300 text-gray-900 focus:ring-blue-500">
                    <SelectValue placeholder="Sélectionnez l'épaisseur" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-gray-900 border-gray-300">
                    {thicknessOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Text Color & Background Color */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="textColor"
                    className="text-base sm:text-lg font-semibold flex items-center text-gray-800"
                  >
                    <Palette className="mr-2 h-5 w-5 text-blue-600" />
                    Couleur du Texte
                  </Label>
                  <div className="flex items-center gap-3">
                    <Input
                      id="textColor"
                      type="color"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="w-12 h-12 p-1 border-gray-300 rounded-md cursor-pointer"
                    />
                    <span className="text-sm sm:text-base font-mono">
                      {textColor.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="backgroundColor"
                    className="text-base sm:text-lg font-semibold flex items-center text-gray-800"
                  >
                    <div className="h-5 w-5 rounded-full mr-2 bg-blue-600 flex items-center justify-center text-white">
                      <span className="text-xs font-bold">B</span>
                    </div>
                    Couleur de Fond
                  </Label>
                  <div className="flex items-center gap-3">
                    <Input
                      id="backgroundColor"
                      type="color"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="w-12 h-12 p-1 border-gray-300 rounded-md cursor-pointer"
                    />
                    <span className="text-sm sm:text-base font-mono">
                      {backgroundColor.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
              {/* Lighting Options (Conditional) */}
              {signStyle === "lighted" && (
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center">
                    <Lightbulb className="mr-2 h-5 w-5 text-blue-600" />
                    Options d&apos;Éclairage
                  </h3>
                  <div className="space-y-2">
                    <Label
                      htmlFor="ledColor"
                      className="text-base sm:text-lg font-semibold flex items-center text-gray-800"
                    >
                      Couleur de la LED
                    </Label>
                    <Select
                      value={ledColor}
                      onValueChange={(value: LedColor) => setLedColor(value)}
                    >
                      <SelectTrigger className="w-full bg-gray-100 border-gray-300 text-gray-900 focus:ring-blue-500">
                        <SelectValue placeholder="Sélectionnez la couleur" />
                      </SelectTrigger>
                      <SelectContent className="bg-white text-gray-900 border-gray-300">
                        <SelectItem value="blanc-froid">Blanc Froid</SelectItem>
                        <SelectItem value="blanc-chaud">Blanc Chaud</SelectItem>
                        <SelectItem value="rouge">Rouge</SelectItem>
                        <SelectItem value="bleu">Bleu</SelectItem>
                        <SelectItem value="vert">Vert</SelectItem>
                        <SelectItem value="rgb">
                          RGB (Couleur changeante)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="intensity"
                      className="text-base sm:text-lg font-semibold flex items-center text-gray-800"
                    >
                      Intensité Lumineuse:{" "}
                      <span className="font-bold ml-2">{intensity}%</span>
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
                    <label
                      htmlFor="neonEffect"
                      className="text-sm sm:text-base font-medium text-gray-800"
                    >
                      Effet Néon (+{optionCosts.neonEffect}€)
                    </label>
                  </div>
                </div>
              )}
              {/* Fixation Options with Images */}
              <div className="space-y-2">
                <Label className="text-base sm:text-lg font-semibold flex items-center text-gray-800">
                  <HardHat className="mr-2 h-5 w-5 text-blue-600" />
                  Type de Fixation
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {fixationOptions.map((fix) => (
                    <Card
                      key={fix.value}
                      className={`cursor-pointer border-2 ${
                        fixationType === fix.value
                          ? "border-blue-600 ring-2 ring-blue-500"
                          : "border-gray-300"
                      } hover:border-blue-500 transition-all duration-200 rounded-lg bg-gray-100 text-black`}
                      onClick={() => setFixationType(fix.value)}
                    >
                      <CardContent className="p-2 sm:p-3 flex flex-col items-center">
                        <div className="relative w-full h-20 sm:h-24 mb-2 overflow-hidden rounded-md">
                          <Image
                            src={fix.image}
                            alt={fix.label}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <h3 className="text-sm sm:text-base font-semibold text-center">
                          {fix.label}
                        </h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              {/* General Additional Options */}
              <div className="space-y-2">
                <Label className="text-base sm:text-lg font-semibold flex items-center text-gray-800">
                  <Settings className="mr-2 h-5 w-5 text-blue-600" />
                  Options Supplémentaires
                </Label>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="installationKit"
                      checked={options.installationKit}
                      onCheckedChange={(checked) =>
                        setOptions((prev) => ({
                          ...prev,
                          installationKit: !!checked,
                        }))
                      }
                      className="border-gray-400 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
                    />
                    <label
                      htmlFor="installationKit"
                      className="text-sm sm:text-base text-gray-700 font-medium"
                    >
                      Kit d&apos;installation (+{optionCosts.installationKit}€)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="dimmer"
                      checked={options.dimmer}
                      onCheckedChange={(checked) =>
                        setOptions((prev) => ({ ...prev, dimmer: !!checked }))
                      }
                      className="border-gray-400 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
                    />
                    <label
                      htmlFor="dimmer"
                      className="text-sm sm:text-base text-gray-700 font-medium"
                    >
                      Variateur de luminosité (+{optionCosts.dimmer}€)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="customDesign"
                      checked={options.customDesign}
                      onCheckedChange={(checked) =>
                        setOptions((prev) => ({
                          ...prev,
                          customDesign: !!checked,
                        }))
                      }
                      className="border-gray-400 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
                    />
                    <label
                      htmlFor="customDesign"
                      className="text-sm sm:text-base font-medium text-gray-700"
                    >
                      Design personnalisé par un expert (+
                      {optionCosts.customDesign}€)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* Visual Preview and Order Summary */}
            <div className="lg:sticky lg:top-4 h-fit">
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader className="border-b border-gray-200 p-4 sm:p-6">
                  <CardTitle className="flex items-center text-xl sm:text-2xl font-bold text-gray-900">
                    <ImageIcon className="mr-2 h-6 w-6 text-blue-600" />
                    Aperçu & Récapitulatif
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 space-y-4">
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
                        textShadow:
                          signStyle === "lighted"
                            ? `0 0 ${intensity / 10}px ${ledColor}`
                            : "none",
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
                  {/* Examples Section */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-gray-800">
                      Exemples de réalisations
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {examples[signStyle].map((example) => (
                        <div
                          key={example.id}
                          className="relative w-full h-32 overflow-hidden rounded-md"
                        >
                          <Image
                            src={example.img}
                            alt={example.alt}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Summary Details */}
                  <div className="space-y-2 text-gray-700 text-sm sm:text-base border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Texte:</span>
                      <span className="font-semibold text-right">
                        {signText || "Non défini"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Style:</span>
                      <span className="capitalize font-semibold text-right">
                        {signStyle === "cut-out"
                          ? "Lettres découpées"
                          : "Lettres lumineuses"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Matériau:</span>
                      <span className="capitalize font-semibold text-right">
                        {material} ({thickness})
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Dimensions:</span>
                      <span className="font-semibold text-right">
                        {estimatedWidth.toFixed(0)} x {height} cm
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Options:</span>
                      <span className="font-semibold text-right max-w-[60%]">
                        {Object.values(options).some(Boolean)
                          ? Object.keys(options)
                              .filter((key) => options[key as keyof Options])
                              .map((key) =>
                                key.replace(/([A-Z])/g, " $1").toLowerCase()
                              )
                              .join(", ")
                          : "Aucune"}
                        {signStyle === "lighted" &&
                          neonEffect &&
                          ", effet néon"}
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-gray-300 pt-4 space-y-2">
                    <div className="flex justify-between items-center text-lg font-bold text-gray-900">
                      <span>Prix Estimé HT:</span>
                      <span className="text-blue-600 text-xl sm:text-2xl">
                        {calculatePrice()} €
                      </span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base text-gray-600">
                      <span>TVA (20%):</span>
                      <span className="font-medium">
                        {(Number.parseFloat(calculatePrice()) * 0.2).toFixed(2)}{" "}
                        €
                      </span>
                    </div>
                    <div className="flex justify-between text-base sm:text-lg font-bold text-gray-900">
                      <span>Total TTC:</span>
                      <span className="font-bold text-xl text-blue-800">
                        {(Number.parseFloat(calculatePrice()) * 1.2).toFixed(2)}{" "}
                        €
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-3 pt-4">
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg py-3 rounded-md transition-colors"
                      onClick={handleSendEmail}
                      disabled={isLoading}
                    >
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      {isLoading
                        ? "Envoi en cours..."
                        : "Envoyer ma configuration"}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 bg-transparent py-3 rounded-md transition-colors"
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
