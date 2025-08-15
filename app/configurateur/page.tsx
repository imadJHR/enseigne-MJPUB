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
import { useState, useMemo, useEffect } from "react";
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
  Zap,
  Droplets,
  Plug,
  Power,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import img1 from "@/public/decoupes.jpg";
import img2 from "@/public/lumineuses.jpg";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";
import Link from "next/link";

// Import material images
import materialPvc from "@/public/img2.jpg";
import materialAlu from "@/public/img8.jpg";

// Import example images
import exCutOut1 from "@/public/decoupes.jpg";
import exCutOut2 from "@/public/img17.jpg";
import exCutOut3 from "@/public/img14.jpg";
import exLighted1 from "@/public/img15.jpg";
import exLighted2 from "@/public/img10.jpg";
import exLighted3 from "@/public/img16.jpg";

// Import fixation images
import fixationNone from "@/public/img17.jpg";
import fixationStandoffs from "@/public/img10.jpg";

// --- Configuration for API URL ---
// This uses an environment variable for production and falls back to localhost for development.
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

// Types mis à jour pour correspondre aux nouvelles options
type SignStyle = "cut-out" | "lighted";
type Material = "pvc" | "aluminium-composite";
type ThicknessRelief = "5mm" | "10mm" | "15mm" | "19mm";
type ThicknessLighted = "15mm" | "19mm";
type FixationType = "sans" | "gabarit-entretoises";
type PvcColor = "blanc" | "noir";
type AluFinition =
  | "noir"
  | "rouge"
  | "blanc"
  | "miroir_argente"
  | "miroir_dore"
  | "brosse_argente"
  | "brosse_dore";
type AluChant = "noir" | "blanc";

type LedColor =
  | "blanc-froid"
  | "blanc-chaud"
  | "rouge"
  | "bleu"
  | "vert"
  | "rgb";

type PowerSupplyWattage = "100w" | "150w" | "200w";
type LedModuleColor = "blanc" | "rouge" | "bleu" | "vert" | "jaune";

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
  standoffs: number; // nombre de lots de 50 entretoises
  glue: boolean;
  wagoConnectors: boolean;
  powerSupply: PowerSupplyWattage | null;
  firemanSwitch: boolean;
  ledModules: {
    color: LedModuleColor;
    quantity: number; // nombre de bandes de 90 modules
  } | null;
}

export default function ConfigurateurPage() {
  const { addToCart } = useCart();
  const [signText, setSignText] = useState("Votre Enseigne");
  const [signStyle, setSignStyle] = useState<SignStyle>("cut-out");
  const [font, setFont] = useState("Montserrat, sans-serif");
  const [height, setHeight] = useState(30);
  const [material, setMaterial] = useState<Material>("pvc");
  const [thickness, setThickness] = useState<
    ThicknessRelief | ThicknessLighted
  >("5mm");
  const [pvcColor, setPvcColor] = useState<PvcColor>("blanc");
  const [aluFinition, setAluFinition] = useState<AluFinition>("noir");
  const [aluChant, setAluChant] = useState<AluChant>("noir");
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [ledColor, setLedColor] = useState<LedColor>("blanc-froid");
  const [intensity, setIntensity] = useState(50);
  const [fixationType, setFixationType] = useState<FixationType>("sans");
  const [options, setOptions] = useState<Options>({
    installationKit: false,
    dimmer: false,
    customDesign: false,
    standoffs: 0,
    glue: false,
    wagoConnectors: false,
    powerSupply: null,
    firemanSwitch: false,
    ledModules: null,
  });
  const [isSuccessPage, setIsSuccessPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Prix des accessoires
  const ACCESSOIRES_PRICES = {
    standoffs: 20, // par lot de 50 pièces
    glue: 15,
    wagoConnectors: 10, // prix supposé non fourni dans la fiche
    powerSupply: {
      "100w": 45,
      "150w": 55,
      "200w": 65,
    },
    firemanSwitch: 60,
    ledModules: 13.5, // par bande de 90 modules
  };

  // --- Section de définition des prix ---
  const PRIX_RELIEF = {
    pvc: {
      blanc: { "5mm": 110, "10mm": 140, "15mm": 160, "19mm": 180 },
      noir: { "10mm": 160, "15mm": 180, "19mm": 200 },
    },
    "aluminium-composite": {
      // Epaisseur 3mm fixe
      noir: 180,
      rouge: 180,
      blanc: 160,
      miroir_argente: 230,
      miroir_dore: 230,
      brosse_argente: 230,
      brosse_dore: 230,
    },
  };

  const PRIX_LUMINEUX = {
    pvc: {
      // Prix par lettre
      blanc: { "15mm": 500, "19mm": 600 },
      noir: { "15mm": 560, "19mm": 660 },
    },
    "aluminium-composite": {
      // Prix au m² pour boitier alu 6cm
      noir: 950,
      blanc: 950,
    },
  };

  const PRIX_FIXATION_ENTRETOISES = 88;
  // --- Fin de la section de prix ---

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
    { name: "PVC", value: "pvc", image: materialPvc },
    {
      name: "Aluminium Composite",
      value: "aluminium-composite",
      image: materialAlu,
    },
  ];

  const aluFinitionOptions: { value: AluFinition; label: string }[] = [
    { value: "noir", label: "Noir" },
    { value: "rouge", label: "Rouge" },
    { value: "blanc", label: "Blanc" },
    { value: "miroir_argente", label: "Miroir Argenté" },
    { value: "miroir_dore", label: "Miroir Doré" },
    { value: "brosse_argente", label: "Brossé Argenté" },
    { value: "brosse_dore", label: "Brossé Doré" },
  ];

  const thicknessOptions = useMemo(() => {
    if (signStyle === "lighted") {
      return ["15mm", "19mm"];
    }
    // signStyle === 'cut-out' (lettres en relief)
    if (material === "pvc") {
      return pvcColor === "blanc"
        ? ["5mm", "10mm", "15mm", "19mm"]
        : ["10mm", "15mm", "19mm"];
    }
    if (material === "aluminium-composite") {
      return ["3mm"]; // L'épaisseur est fixe à 3mm sur votre fiche pour l'alu composite
    }
    return [];
  }, [signStyle, material, pvcColor]);

  useEffect(() => {
    if (!thicknessOptions.includes(thickness as any)) {
      setThickness(thicknessOptions[0] as any);
    }
  }, [thicknessOptions, thickness]);

  const fixationOptions: FixationOption[] = [
    { value: "sans", label: "Sans fixation", image: fixationNone },
    {
      value: "gabarit-entretoises",
      label: "Gabarit + Entretoises",
      image: fixationStandoffs,
    },
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

  const estimatedWidth = useMemo(() => {
    const charWidthFactor = 0.6;
    return Math.max(10, signText.length * height * charWidthFactor);
  }, [signText, height]);

  const calculatePrice = (): string => {
    try {
      let price = 0;
      const surfaceAreaM2 = (estimatedWidth * height) / 10000;

      if (signStyle === "cut-out") {
        // Lettres en relief
        if (material === "pvc") {
          const prixM2 =
            PRIX_RELIEF.pvc[pvcColor][thickness as ThicknessRelief];
          if (!prixM2) throw new Error("Combinaison non disponible");
          price = surfaceAreaM2 * prixM2;
        } else if (material === "aluminium-composite") {
          const prixM2 = PRIX_RELIEF["aluminium-composite"][aluFinition];
          price = surfaceAreaM2 * prixM2;
        }
        // Ajout du coût de fixation
        if (fixationType === "gabarit-entretoises") {
          price += PRIX_FIXATION_ENTRETOISES;
        }
      } else if (signStyle === "lighted") {
        // Lettres lumineuses
        if (material === "pvc") {
          const prixParLettre =
            PRIX_LUMINEUX.pvc[pvcColor][thickness as ThicknessLighted];
          if (!prixParLettre) throw new Error("Combinaison non disponible");
          price = prixParLettre * (signText.length || 1);
        } else if (material === "aluminium-composite") {
          const prixM2 = PRIX_LUMINEUX["aluminium-composite"][aluChant];
          price = surfaceAreaM2 * prixM2;
        }
      }

      // Ajout des accessoires
      if (options.standoffs > 0) {
        price += options.standoffs * ACCESSOIRES_PRICES.standoffs;
      }
      if (options.glue) {
        price += ACCESSOIRES_PRICES.glue;
      }
      if (options.wagoConnectors) {
        price += ACCESSOIRES_PRICES.wagoConnectors;
      }
      if (options.powerSupply) {
        price += ACCESSOIRES_PRICES.powerSupply[options.powerSupply];
      }
      if (options.firemanSwitch) {
        price += ACCESSOIRES_PRICES.firemanSwitch;
      }
      if (options.ledModules) {
        price += options.ledModules.quantity * ACCESSOIRES_PRICES.ledModules;
      }

      return price > 0 ? price.toFixed(2) : "0.00";
    } catch (error) {
      return "Sur devis";
    }
  };

  const finalPrice = calculatePrice();
  const isPriceOnQuote = finalPrice === "Sur devis";

  const configuredItem = useMemo(() => {
    return {
      name: `Enseigne personnalisée: '${signText}'`,
      price: isPriceOnQuote ? 0 : Number.parseFloat(finalPrice),
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
        }),
        fixationType:
          fixationOptions.find((f) => f.value === fixationType)?.label ||
          fixationType,
        additionalOptions: Object.keys(options)
          .filter((key) => {
            if (key === "ledModules") return options.ledModules !== null;
            if (key === "powerSupply") return options.powerSupply !== null;
            return (
              options[key as keyof Options] !== false &&
              options[key as keyof Options] !== 0
            );
          })
          .map((key) => {
            if (key === "standoffs")
              return `${options.standoffs} lot(s) d'entretoises`;
            if (key === "ledModules")
              return `${options.ledModules?.quantity} bande(s) LED ${options.ledModules?.color}`;
            if (key === "powerSupply")
              return `Alimentation ${options.powerSupply}`;
            return key.replace(/([A-Z])/g, " $1").toLowerCase();
          })
          .join(", "),
      },
    };
  }, [
    signText,
    finalPrice,
    isPriceOnQuote,
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
    fixationType,
    options,
    fontOptions,
    fixationOptions,
  ]);

  const handleSendEmail = async () => {
    setIsLoading(true);
    try {
      // ✅ FIXED: Use the API_BASE_URL constant to build the full URL
      const response = await fetch(`${API_BASE_URL}/api/configurator-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(configuredItem),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erreur serveur");
      }

      const data = await response.json();
      if (data.success) {
        setIsSuccessPage(true);
      } else {
        alert(`Erreur: ${data.message}`);
      }
    } catch (error: any) {
      // Explicitly type error as any
      console.error("Détails de l'erreur:", error);
      alert(`Erreur: ${error.message || "Problème de connexion au serveur"}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToCart = () => {
    addToCart(configuredItem);
    alert("Votre enseigne a été ajoutée au panier !");
  };

  // The rest of your component's JSX remains exactly the same.
  // ... (pasting the full JSX below for completeness) ...
  if (isSuccessPage) {
    return (
      <div className="min-h-screen mt-26 bg-white text-white flex flex-col">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-blue-500 bg-clip-text text-transparent">
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
              {/* Style Selection */}
              <div className="space-y-2">
                <Label className="text-base sm:text-lg font-semibold flex items-center text-gray-800">
                  <Layers className="mr-2 h-5 w-5 text-blue-600" />
                  Type d'Enseigne
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
                        alt="Lettres en relief"
                        className="w-24 h-24 sm:w-32 sm:h-32 object-contain mb-2"
                        width={128}
                        height={128}
                      />
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 text-center">
                        Lettres en relief
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
              {/* Conditional Options for PVC and Aluminium */}
              {material === "pvc" && (
                <div className="space-y-2">
                  <Label
                    htmlFor="pvcColor"
                    className="text-base sm:text-lg font-semibold flex items-center text-gray-800"
                  >
                    <Palette className="mr-2 h-5 w-5 text-blue-600" />
                    Couleur du PVC
                  </Label>
                  <Select
                    value={pvcColor}
                    onValueChange={(v) => setPvcColor(v as PvcColor)}
                  >
                    <SelectTrigger className="w-full bg-gray-100 border-gray-300 text-gray-900 focus:ring-blue-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-gray-900 border-gray-300">
                      <SelectItem value="blanc">Blanc</SelectItem>
                      <SelectItem value="noir">Noir</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
              {material === "aluminium-composite" &&
                signStyle === "cut-out" && (
                  <div className="space-y-2">
                    <Label
                      htmlFor="aluFinition"
                      className="text-base sm:text-lg font-semibold flex items-center text-gray-800"
                    >
                      <Palette className="mr-2 h-5 w-5 text-blue-600" />
                      Finition Aluminium
                    </Label>
                    <Select
                      value={aluFinition}
                      onValueChange={(v) => setAluFinition(v as AluFinition)}
                    >
                      <SelectTrigger className="w-full bg-gray-100 border-gray-300 text-gray-900 focus:ring-blue-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white text-gray-900 border-gray-300">
                        {aluFinitionOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              {material === "aluminium-composite" &&
                signStyle === "lighted" && (
                  <div className="space-y-2">
                    <Label
                      htmlFor="aluChant"
                      className="text-base sm:text-lg font-semibold flex items-center text-gray-800"
                    >
                      <Palette className="mr-2 h-5 w-5 text-blue-600" />
                      Couleur du Chant (Bordure)
                    </Label>
                    <Select
                      value={aluChant}
                      onValueChange={(v) => setAluChant(v as AluChant)}
                    >
                      <SelectTrigger className="w-full bg-gray-100 border-gray-300 text-gray-900 focus:ring-blue-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white text-gray-900 border-gray-300">
                        <SelectItem value="noir">Noir</SelectItem>
                        <SelectItem value="blanc">Blanc</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
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
                  onValueChange={(value) => setThickness(value as any)}
                  disabled={thicknessOptions.length <= 1}
                >
                  <SelectTrigger className="w-full bg-gray-100 border-gray-300 text-gray-900 focus:ring-blue-500">
                    <SelectValue placeholder="Sélectionnez l'épaisseur" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-gray-900 border-gray-300">
                    {thicknessOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                        {material === "aluminium-composite" &&
                        signStyle === "cut-out"
                          ? " (fixe)"
                          : ""}
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
              {/* Nouvelle section pour les accessoires */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-blue-600" />
                  Accessoires
                </h3>
                {/* Entretoises de fixation */}
                <div className="space-y-2">
                  <Label className="text-base sm:text-lg font-semibold flex items-center text-gray-800">
                    <HardHat className="mr-2 h-5 w-5 text-blue-600" />
                    Entretoises de fixation
                  </Label>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">
                      Lot de 50 pièces - 20 €
                    </p>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setOptions((prev) => ({
                            ...prev,
                            standoffs: Math.max(0, prev.standoffs - 1),
                          }))
                        }
                        disabled={options.standoffs <= 0}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">
                        {options.standoffs}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setOptions((prev) => ({
                            ...prev,
                            standoffs: prev.standoffs + 1,
                          }))
                        }
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
                {/* Colle */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="glue"
                    checked={options.glue}
                    onCheckedChange={(checked) =>
                      setOptions((prev) => ({ ...prev, glue: !!checked }))
                    }
                    className="border-gray-400 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
                  />
                  <label
                    htmlFor="glue"
                    className="text-sm sm:text-base text-gray-700 font-medium"
                  >
                    Colle (15 €)
                  </label>
                </div>
                {/* Connecteurs Wago */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="wagoConnectors"
                    checked={options.wagoConnectors}
                    onCheckedChange={(checked) =>
                      setOptions((prev) => ({
                        ...prev,
                        wagoConnectors: !!checked,
                      }))
                    }
                    className="border-gray-400 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
                  />
                  <label
                    htmlFor="wagoConnectors"
                    className="text-sm sm:text-base text-gray-700 font-medium"
                  >
                    Connecteurs Wago (10 €)
                  </label>
                </div>
                {/* Alimentation */}
                <div className="space-y-2">
                  <Label className="text-base sm:text-lg font-semibold flex items-center text-gray-800">
                    <Power className="mr-2 h-5 w-5 text-blue-600" />
                    Alimentation 12V
                  </Label>
                  <Select
                    value={options.powerSupply || ""}
                    onValueChange={(value) =>
                      setOptions((prev) => ({
                        ...prev,
                        powerSupply: value as PowerSupplyWattage,
                      }))
                    }
                  >
                    <SelectTrigger className="w-full bg-gray-100 border-gray-300 text-gray-900 focus:ring-blue-500">
                      <SelectValue placeholder="Sélectionnez une alimentation" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-gray-900 border-gray-300">
                      <SelectItem value="100w">100W - 45 €</SelectItem>
                      <SelectItem value="150w">150W - 55 €</SelectItem>
                      <SelectItem value="200w">200W - 65 €</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* Interrupteur pompiers */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="firemanSwitch"
                    checked={options.firemanSwitch}
                    onCheckedChange={(checked) =>
                      setOptions((prev) => ({
                        ...prev,
                        firemanSwitch: !!checked,
                      }))
                    }
                    className="border-gray-400 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
                  />
                  <label
                    htmlFor="firemanSwitch"
                    className="text-sm sm:text-base text-gray-700 font-medium"
                  >
                    Interrupteur pompiers (60 €)
                  </label>
                </div>
                {/* Modules LED */}
                <div className="space-y-2">
                  <Label className="text-base sm:text-lg font-semibold flex items-center text-gray-800">
                    <Droplets className="mr-2 h-5 w-5 text-blue-600" />
                    Modules LED (13,50 € par bande de 90 modules)
                  </Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Select
                      value={options.ledModules?.color || ""}
                      onValueChange={(color) =>
                        setOptions((prev) => ({
                          ...prev,
                          ledModules: {
                            color: color as LedModuleColor,
                            quantity: prev.ledModules?.quantity || 1,
                          },
                        }))
                      }
                    >
                      <SelectTrigger className="w-full bg-gray-100 border-gray-300 text-gray-900 focus:ring-blue-500">
                        <SelectValue placeholder="Couleur" />
                      </SelectTrigger>
                      <SelectContent className="bg-white text-gray-900 border-gray-300">
                        <SelectItem value="blanc">Blanc</SelectItem>
                        <SelectItem value="rouge">Rouge</SelectItem>
                        <SelectItem value="bleu">Bleu</SelectItem>
                        <SelectItem value="vert">Vert</SelectItem>
                        <SelectItem value="jaune">Jaune</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setOptions((prev) => ({
                            ...prev,
                            ledModules: {
                              color: prev.ledModules?.color || "blanc",
                              quantity: Math.max(
                                1,
                                (prev.ledModules?.quantity || 1) - 1
                              ),
                            },
                          }))
                        }
                        disabled={
                          !options.ledModules ||
                          options.ledModules.quantity <= 1
                        }
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">
                        {options.ledModules?.quantity || 0}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setOptions((prev) => ({
                            ...prev,
                            ledModules: {
                              color: prev.ledModules?.color || "blanc",
                              quantity: (prev.ledModules?.quantity || 0) + 1,
                            },
                          }))
                        }
                      >
                        +
                      </Button>
                    </div>
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
                          ? "Lettres en relief"
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
                  </div>
                  <div className="border-t border-gray-300 pt-4 space-y-2">
                    <div className="flex justify-between items-center text-lg font-bold text-gray-900">
                      <span>Prix Estimé HT:</span>
                      <span className="text-blue-600 text-xl sm:text-2xl">
                        {isPriceOnQuote ? finalPrice : `${finalPrice} €`}
                      </span>
                    </div>
                    {!isPriceOnQuote && (
                      <>
                        <div className="flex justify-between text-sm sm:text-base text-gray-600">
                          <span>TVA (20%):</span>
                          <span className="font-medium">
                            {(Number.parseFloat(finalPrice) * 0.2).toFixed(2)} €
                          </span>
                        </div>
                        <div className="flex justify-between text-base sm:text-lg font-bold text-gray-900">
                          <span>Total TTC:</span>
                          <span className="font-bold text-xl text-blue-800">
                            {(Number.parseFloat(finalPrice) * 1.2).toFixed(2)} €
                          </span>
                        </div>
                      </>
                    )}
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
                      className="w-full hidden border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 bg-transparent py-3 rounded-md transition-colors"
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
