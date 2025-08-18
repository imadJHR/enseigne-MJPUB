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
import { Input } from "@/components/ui/input";
import { useState, useMemo, useEffect } from "react";
import {
  Ruler,
  Palette,
  Type,
  ShoppingCart,
  TextCursorInput,
  ImageIcon,
  Layers,
  Lightbulb,
  HardHat,
  CheckCircle,
  Zap,
} from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

// --- IMPORT IMAGES ---
import imgCutOut from "@/public/imgCutOut.png";
import imgLighted from "@/public/imgLightedt.png";
import imgLightedBox from "@/public/imgLightedBoxx.png";
import exCutOut1 from "@/public/exCutOut1.png";
import exCutOut2 from "@/public/exCutOut2.png";
import exCutOut3 from "@/public/exCutOut3.png";
import exLighted1 from "@/public/exLighted1.png";
import exLighted2 from "@/public/exLighted2.png";
import exLighted3 from "@/public/exLighted3.png";
import exLightedBox1 from "@/public/exLightedBox1.png";
import pvcBlancImg from "@/public/pvcBlancImg.png";
import pvcNoirImg from "@/public/pvcNoirImg.png";
import aluBlancImg from "@/public/aluBlancImg.png";
import aluNoirImg from "@/public/aluNoirImg.png";
import aluRougeImg from "@/public/aluRougeImg.png";
import aluMiroirImg from "@/public/aluMiroirImg.png";
import aluBrosseImg from "@/public/aluBrosseImg.png";
import fixationNone from "@/public/fixationNone.png";
import fixationStandoffs from "@/public/fixationStandoffs.png";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

// --- TYPES ---
type SignStyle = "cut-out" | "lighted" | "lighted-box";
type Material = "pvc" | "aluminium-composite";
type ThicknessRelief = "3mm" | "5mm" | "10mm" | "15mm" | "19mm";
type ThicknessLighted = "15mm" | "19mm";
type FixationType = "sans" | "gabarit-entretoises" | "boitier-lumineux";
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
type BoitierLumineuxOption =
  | "chant-alu-noir-plexi-blanc"
  | "chant-alu-blanc-plexi-blanc";

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
  standoffs: number;
  glue: boolean;
  wagoConnectors: boolean;
  powerSupply: PowerSupplyWattage | null;
  firemanSwitch: boolean;
  ledModules: {
    color: LedModuleColor;
    quantity: number;
  } | null;
}

interface MaterialOption {
  id: string;
  label: string;
  image: StaticImageData;
  material: Material;
  thickness: ThicknessRelief | ThicknessLighted;
  color: PvcColor | AluFinition | AluChant;
}

// --- Font Options ---
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

// --- Fixation Options ---
const fixationOptions: FixationOption[] = [
  { value: "sans", label: "Sans fixation", image: fixationNone },
  {
    value: "gabarit-entretoises",
    label: "Gabarit + Entretoises",
    image: fixationStandoffs,
  },
];

// --- ACCESSOIRES PRICES ---
const ACCESSOIRES_PRICES = {
  standoffs: 12,
  glue: 8,
  wagoConnectors: 15,
  powerSupply: { "100w": 45, "150w": 65, "200w": 85 },
  firemanSwitch: 25,
  ledModules: 30,
};

// --- PRIX ---
const PRIX_RELIEF = {
  pvc: {
    blanc: { "5mm": 110, "10mm": 140, "15mm": 160, "19mm": 180 },
    noir: { "10mm": 160, "15mm": 180, "19mm": 200 },
  },
  "aluminium-composite": {
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
    blanc: { "15mm": 500, "19mm": 600 },
    noir: { "15mm": 560, "19mm": 660 },
  },
};

const PRIX_LUMINEUX_BOX = {
  "aluminium-composite": {
    noir: 950,
    blanc: 950,
  },
};

const PRIX_FIXATION_ENTRETOISES = 88;
const PRIX_BOITIER_LUMINEUX = {
  "chant-alu-noir-plexi-blanc": 950,
  "chant-alu-blanc-plexi-blanc": 950,
};

export default function ConfigurateurPage() {
  const [signText, setSignText] = useState("Votre Enseigne");
  const [signStyle, setSignStyle] = useState<SignStyle>("cut-out");
  const [font, setFont] = useState("Montserrat, sans-serif");
  const [height, setHeight] = useState(30);
  const [selectedMaterialId, setSelectedMaterialId] = useState("pvc-5mm-blanc");
  const [material, setMaterial] = useState<Material>("pvc");
  const [thickness, setThickness] = useState<ThicknessRelief | ThicknessLighted>("5mm");
  const [pvcColor, setPvcColor] = useState<PvcColor>("blanc");
  const [aluFinition, setAluFinition] = useState<AluFinition>("blanc");
  const [aluChant, setAluChant] = useState<AluChant>("blanc");
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [ledColor, setLedColor] = useState<LedColor>("blanc-froid");
  const [intensity, setIntensity] = useState(50);
  const [fixationType, setFixationType] = useState<FixationType>("sans");
  const [options] = useState<Options>({
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

  // --- Material Image Mapping ---
  const materialImageMap: Record<string, StaticImageData> = {
    "pvc-blanc": pvcBlancImg,
    "pvc-noir": pvcNoirImg,
    "alu-blanc": aluBlancImg,
    "alu-noir": aluNoirImg,
    "alu-rouge": aluRougeImg,
    "alu-miroir_argente": aluMiroirImg,
    "alu-miroir_dore": aluMiroirImg,
    "alu-brosse_argente": aluBrosseImg,
    "alu-brosse_dore": aluBrosseImg,
  };

  // --- Material Options ---
  const allMaterialOptions = useMemo((): MaterialOption[] => {
    const options: MaterialOption[] = [];
    if (signStyle === "cut-out") {
      (Object.keys(PRIX_RELIEF.pvc) as PvcColor[]).forEach((color) => {
        (Object.keys(PRIX_RELIEF.pvc[color]) as ThicknessRelief[]).forEach((thick) => {
          options.push({
            id: `pvc-${thick}-${color}`,
            label: `PVC ${thick} ${color}`,
            image: materialImageMap[`pvc-${color}`] || pvcBlancImg,
            material: "pvc",
            thickness: thick,
            color: color,
          });
        });
      });
      (Object.keys(PRIX_RELIEF["aluminium-composite"]) as AluFinition[]).forEach((finition) => {
        options.push({
          id: `aluminium-composite-3mm-${finition}`,
          label: `Alu Dibond 3mm ${finition.replace(/_/g, " ")}`,
          image: materialImageMap[`alu-${finition}`] || aluBlancImg,
          material: "aluminium-composite",
          thickness: "3mm",
          color: finition,
        });
      });
    } else if (signStyle === "lighted") {
      (Object.keys(PRIX_LUMINEUX.pvc) as PvcColor[]).forEach((color) => {
        (Object.keys(PRIX_LUMINEUX.pvc[color]) as ThicknessLighted[]).forEach((thick) => {
          options.push({
            id: `pvc-${thick}-${color}`,
            label: `PVC Lumineux ${thick} ${color}`,
            image: materialImageMap[`pvc-${color}`] || pvcBlancImg,
            material: "pvc",
            thickness: thick,
            color: color,
          });
        });
      });
    } else if (signStyle === "lighted-box") {
      (Object.keys(PRIX_LUMINEUX_BOX["aluminium-composite"]) as AluChant[]).forEach((chant) => {
        options.push({
          id: `aluminium-composite-6cm-${chant}`,
          label: `Alu Boîtier Chant ${chant}`,
          image: materialImageMap[`alu-${chant}`] || aluBlancImg,
          material: "aluminium-composite",
          thickness: "19mm",
          color: chant,
        });
      });
    }
    return options;
  }, [signStyle, materialImageMap]);

  // --- Update Material Selection ---
  useEffect(() => {
    const selectedOption = allMaterialOptions.find((opt) => opt.id === selectedMaterialId);
    if (selectedOption) {
      setMaterial(selectedOption.material);
      setThickness(selectedOption.thickness);
      if (selectedOption.material === "pvc") {
        setPvcColor(selectedOption.color as PvcColor);
      } else {
        if (signStyle === "cut-out") {
          setAluFinition(selectedOption.color as AluFinition);
        } else {
          setAluChant(selectedOption.color as AluChant);
        }
      }
    } else if (allMaterialOptions.length > 0) {
      setSelectedMaterialId(allMaterialOptions[0].id);
    }
  }, [selectedMaterialId, allMaterialOptions, signStyle]);

  // --- Example Images ---
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
    "lighted-box": [
      { id: 1, img: exLightedBox1, alt: "Exemple de lettre lumineuse boîtier 1" },
    ],
  };

  // --- Estimated Width ---
  const estimatedWidth = useMemo(() => {
    const charWidthFactor = 0.6;
    return Math.max(10, signText.length * height * charWidthFactor);
  }, [signText, height]);

  // --- Price Calculation ---
  const calculatePrice = (): string => {
    try {
      let price = 0;
      const surfaceAreaM2 = (estimatedWidth * height) / 10000;
      if (signStyle === "cut-out") {
        if (material === "pvc") {
          const prixM2 = PRIX_RELIEF.pvc[pvcColor]?.[thickness as ThicknessRelief];
          if (!prixM2) throw new Error("Combinaison non disponible");
          price = surfaceAreaM2 * prixM2;
        } else if (material === "aluminium-composite") {
          const prixM2 = PRIX_RELIEF["aluminium-composite"][aluFinition];
          price = surfaceAreaM2 * prixM2;
        }
        if (fixationType === "gabarit-entretoises") {
          price += PRIX_FIXATION_ENTRETOISES;
        }
      } else if (signStyle === "lighted") {
        if (material === "pvc") {
          const prixParLettre = PRIX_LUMINEUX.pvc[pvcColor]?.[thickness as ThicknessLighted];
          if (!prixParLettre) throw new Error("Combinaison non disponible");
          price = prixParLettre * (signText.length || 1);
        }
        if (fixationType === "gabarit-entretoises") {
          price += PRIX_FIXATION_ENTRETOISES;
        }
      } else if (signStyle === "lighted-box") {
        const prixM2 = PRIX_LUMINEUX_BOX["aluminium-composite"][aluChant];
        price = surfaceAreaM2 * prixM2;
        if (fixationType === "boitier-lumineux") {
          const boitierOption: BoitierLumineuxOption =
            aluChant === "noir" ? "chant-alu-noir-plexi-blanc" : "chant-alu-blanc-plexi-blanc";
          price += PRIX_BOITIER_LUMINEUX[boitierOption];
        }
      }
      if (options.standoffs > 0) price += options.standoffs * ACCESSOIRES_PRICES.standoffs;
      if (options.glue) price += ACCESSOIRES_PRICES.glue;
      if (options.wagoConnectors) price += ACCESSOIRES_PRICES.wagoConnectors;
      if (options.powerSupply) price += ACCESSOIRES_PRICES.powerSupply[options.powerSupply];
      if (options.firemanSwitch) price += ACCESSOIRES_PRICES.firemanSwitch;
      if (options.ledModules) price += options.ledModules.quantity * ACCESSOIRES_PRICES.ledModules;
      return price > 0 ? price.toFixed(2) : "0.00";
    } catch {
      return "Sur devis";
    }
  };

  const finalPrice = calculatePrice();
  const isPriceOnQuote = finalPrice === "Sur devis";

  // --- Configured Item ---
  const configuredItem = useMemo(() => {
    const selectedOption = allMaterialOptions.find((opt) => opt.id === selectedMaterialId);
    return {
      name: `Enseigne personnalisée: '${signText}'`,
      price: isPriceOnQuote ? 0 : Number.parseFloat(finalPrice),
      material: selectedOption?.label || "Non défini",
      details: {
        font: fontOptions.find((f) => f.value === font)?.label || font,
        height: `${height}cm`,
        estimatedWidth: `${estimatedWidth.toFixed(0)}cm`,
        textColor: textColor.toUpperCase(),
        backgroundColor: backgroundColor.toUpperCase(),
        ...(signStyle === "lighted" || signStyle === "lighted-box"
          ? {
              ledColor: ledColor.replace("-", " "),
              intensity: `${intensity}%`,
            }
          : {}),
        fixationType:
          fixationType === "boitier-lumineux"
            ? `Boîtier lumineux ${aluChant} + Plexi Blanc`
            : fixationOptions.find((f) => f.value === fixationType)?.label || fixationType,
        additionalOptions: Object.keys(options)
          .filter((key) => {
            const value = options[key as keyof Options];
            if (key === "ledModules" || key === "powerSupply") return value !== null;
            return value !== false && value !== 0;
          })
          .map((key) => {
            if (key === "standoffs") return `${options.standoffs} lot(s) d'entretoises`;
            if (key === "ledModules") return `${options.ledModules?.quantity} bande(s) LED ${options.ledModules?.color}`;
            if (key === "powerSupply") return `Alimentation ${options.powerSupply}`;
            return key.replace(/([A-Z])/g, " $1").toLowerCase();
          })
          .join(", "),
      },
    };
  }, [
    signText,
    finalPrice,
    isPriceOnQuote,
    selectedMaterialId,
    allMaterialOptions,
    font,
    height,
    estimatedWidth,
    textColor,
    backgroundColor,
    signStyle,
    ledColor,
    intensity,
    fixationType,
    aluChant,
    options,
  ]);

  // --- Send Email ---
  const handleSendEmail = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/configurator-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(configuredItem),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erreur serveur");
      }
      const data = await response.json();
      if (data.success) setIsSuccessPage(true);
      else alert(`Erreur: ${data.message}`);
    } catch (error: unknown) {
      console.error("Détails de l'erreur de fetch:", error);
      let message = "Une erreur de réseau est survenue.";
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        message = `La connexion au serveur a échoué. Vérifiez que le serveur backend est démarré sur ${API_BASE_URL}.`;
      } else if (error instanceof Error) {
        message = error.message;
      }
      alert(`Erreur: ${message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // --- Success Page ---
  if (isSuccessPage) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 flex items-center justify-center px-4 py-8 sm:py-12">
          <div className="bg-white text-green-800 p-4 sm:p-6 rounded-lg shadow-lg text-center max-w-md w-full mx-4">
            <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-600 mx-auto mb-3" />
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              Demande de devis envoyée !
            </h2>
            <p className="text-sm sm:text-base mb-4 text-gray-700">
              Merci pour votre demande. Un de nos experts vous contactera bientôt.
            </p>
            <Link href="/">
              <Button className="mt-4 sm:mt-6 bg-blue-600 hover:bg-blue-700 text-sm sm:text-base">
                Retour à l&apos;accueil
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // --- Main Render ---
  return (
    <div className="min-h-screen bg-gray-50 text-black flex flex-col">
      <main className="flex-1 pt-12 sm:pt-16 px-2 sm:px-4 py-4 sm:py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4 sm:mb-8 px-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase mt-16 font-bold mb-2 sm:mb-4 bg-gradient-to-r from-black to-blue-500 bg-clip-text text-transparent">
              Créez vos lettres découpées
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
              Créez votre enseigne lumineuse ou signalétique sur mesure et obtenez un devis instantané.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Configuration Options */}
            <div className="lg:col-span-2 bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-lg border border-gray-200 space-y-4 sm:space-y-6">
              {/* Sign Text */}
              <div className="space-y-1">
                <Label
                  htmlFor="signText"
                  className="text-xs sm:text-sm md:text-base font-semibold flex items-center text-gray-800"
                >
                  <TextCursorInput className="mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-blue-600" />
                  Texte de l&apos;Enseigne
                </Label>
                <Input
                  id="signText"
                  type="text"
                  placeholder="Votre texte ici..."
                  value={signText}
                  onChange={(e) => setSignText(e.target.value)}
                  maxLength={50}
                  className="w-full bg-gray-100 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 rounded-md p-2 text-xs sm:text-sm md:text-base"
                />
                <p className="text-xs text-gray-500">
                  Max 50 caractères. Restants: {50 - signText.length}
                </p>
              </div>
              
              {/* Font */}
              <div className="space-y-1">
                <Label
                  htmlFor="font"
                  className="text-xs sm:text-sm md:text-base font-semibold flex items-center text-gray-800"
                >
                  <Type className="mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-blue-600" />
                  Police
                </Label>
                <Select value={font} onValueChange={setFont}>
                  <SelectTrigger className="w-full bg-gray-100 border-gray-300 text-gray-900 focus:ring-blue-500 text-xs sm:text-sm md:text-base">
                    <SelectValue placeholder="Sélectionnez une police" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-gray-900 border-gray-300 max-h-60 overflow-y-auto text-xs sm:text-sm md:text-base">
                    {fontOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        <span style={{ fontFamily: option.value }}>{option.label}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Height */}
              <div className="space-y-1">
                <Label
                  htmlFor="height"
                  className="text-xs sm:text-sm md:text-base font-semibold flex items-center text-gray-800"
                >
                  <Ruler className="mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-blue-600" />
                  Hauteur du Texte:{" "}
                  <span className="font-bold ml-1">{height} cm</span>
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
                <p className="text-xs text-gray-500">
                  Largeur estimée: {estimatedWidth.toFixed(0)} cm
                </p>
              </div>
              
              {/* Sign Style */}
              <div className="space-y-1">
                <Label className="text-xs sm:text-sm md:text-base font-semibold flex items-center text-gray-800">
                  <Layers className="mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-blue-600" />
                  Type d&apos;Enseigne
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                  <Card
                    className={`cursor-pointer border-2 ${
                      signStyle === "cut-out" ? "border-blue-600 ring-2 ring-blue-500" : "border-gray-300"
                    } hover:border-blue-500 transition-all duration-200 rounded-lg bg-gray-100 text-black`}
                    onClick={() => setSignStyle("cut-out")}
                  >
                    <CardContent className="p-2 sm:p-3 flex flex-col items-center">
                      <Image
                        src={imgCutOut}
                        alt="Lettres en relief"
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain mb-1 sm:mb-2"
                        width={80}
                        height={80}
                      />
                      <h3 className="text-xs sm:text-sm font-bold text-gray-900 text-center">
                        Lettres en relief
                      </h3>
                    </CardContent>
                  </Card>
                  <Card
                    className={`cursor-pointer border-2 ${
                      signStyle === "lighted" ? "border-blue-600 ring-2 ring-blue-500" : "border-gray-300"
                    } hover:border-blue-500 transition-all duration-200 rounded-lg bg-gray-100 text-black`}
                    onClick={() => setSignStyle("lighted")}
                  >
                    <CardContent className="p-2 sm:p-3 flex flex-col items-center">
                      <Image
                        src={imgLighted}
                        alt="Lettres lumineuses"
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain mb-1 sm:mb-2"
                        width={80}
                        height={80}
                      />
                      <h3 className="text-xs sm:text-sm font-bold text-gray-900 text-center">
                        Lettres lumineuses rétroéclairées
                      </h3>
                    </CardContent>
                  </Card>
                  <Card
                    className={`cursor-pointer border-2 ${
                      signStyle === "lighted-box" ? "border-blue-600 ring-2 ring-blue-500" : "border-gray-300"
                    } hover:border-blue-500 transition-all duration-200 rounded-lg bg-gray-100 text-black`}
                    onClick={() => setSignStyle("lighted-box")}
                  >
                    <CardContent className="p-2 sm:p-3 flex flex-col items-center">
                      <Image
                        src={imgLightedBox}
                        alt="Lettres lumineuses boîtier alu"
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain mb-1 sm:mb-2"
                        width={80}
                        height={80}
                      />
                      <h3 className="text-xs sm:text-sm font-bold text-gray-900 text-center">
                        Lettres lumineuses boîtier alu
                      </h3>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Materials */}
              <div className="space-y-1">
                <Label className="text-xs sm:text-sm md:text-base font-semibold flex items-center text-gray-800">
                  <Ruler className="mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-blue-600" />
                  Matériaux
                </Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                  {allMaterialOptions.map((opt) => (
                    <Card
                      key={opt.id}
                      className={`cursor-pointer border-2 ${
                        selectedMaterialId === opt.id ? "border-blue-600 ring-2 ring-blue-500" : "border-gray-300"
                      } hover:border-blue-500 transition-all duration-200 rounded-lg bg-gray-100 text-black`}
                      onClick={() => setSelectedMaterialId(opt.id)}
                    >
                      <CardContent className="p-1 sm:p-2 flex flex-col items-center">
                        <div className="relative w-full h-10 sm:h-12 md:h-16 mb-1 overflow-hidden rounded-md">
                          <Image src={opt.image} alt={opt.label} layout="fill" objectFit="cover" />
                        </div>
                        <h3 className="text-xxs sm:text-xs md:text-sm capitalize font-semibold text-center h-8 flex items-center justify-center">
                          {opt.label}
                        </h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Text Color & Background Color */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="space-y-1">
                  <Label className="text-xs sm:text-sm md:text-base font-semibold flex items-center text-gray-800">
                    <Palette className="mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-blue-600" />
                    Couleur du Texte
                  </Label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="color"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="w-10 h-10 p-0 border-none rounded-md overflow-hidden"
                    />
                    <span className="text-xs sm:text-sm">{textColor.toUpperCase()}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label className="text-xs sm:text-sm md:text-base font-semibold flex items-center text-gray-800">
                    <Palette className="mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-blue-600" />
                    Couleur de Fond
                  </Label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="color"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="w-10 h-10 p-0 border-none rounded-md overflow-hidden"
                    />
                    <span className="text-xs sm:text-sm">{backgroundColor.toUpperCase()}</span>
                  </div>
                </div>
              </div>
              
              {/* Lighting Options (if lighted or lighted-box) */}
              {(signStyle === "lighted" || signStyle === "lighted-box") && (
                <div className="space-y-2 sm:space-y-3">
                  <div className="space-y-1">
                    <Label className="text-xs sm:text-sm md:text-base font-semibold flex items-center text-gray-800">
                      <Lightbulb className="mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-blue-600" />
                      Couleur des LEDs
                    </Label>
                    <Select value={ledColor} onValueChange={(value: LedColor) => setLedColor(value)}>
                      <SelectTrigger className="w-full bg-gray-100 border-gray-300 text-gray-900 focus:ring-blue-500 text-xs sm:text-sm md:text-base">
                        <SelectValue placeholder="Sélectionnez une couleur" />
                      </SelectTrigger>
                      <SelectContent className="bg-white text-gray-900 border-gray-300 text-xs sm:text-sm md:text-base">
                        <SelectItem value="blanc-froid">Blanc Froid</SelectItem>
                        <SelectItem value="blanc-chaud">Blanc Chaud</SelectItem>
                        <SelectItem value="rouge">Rouge</SelectItem>
                        <SelectItem value="bleu">Bleu</SelectItem>
                        <SelectItem value="vert">Vert</SelectItem>
                        <SelectItem value="rgb">RGB</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs sm:text-sm md:text-base font-semibold flex items-center text-gray-800">
                      <Zap className="mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-blue-600" />
                      Intensité: {intensity}%
                    </Label>
                    <Slider
                      min={10}
                      max={100}
                      step={10}
                      value={[intensity]}
                      onValueChange={(val) => setIntensity(val[0])}
                      className="mt-2 [&>span:first-child]:bg-blue-600 [&>span:first-child]:border-blue-600"
                    />
                  </div>
                </div>
              )}
              
              {/* Fixation (for all sign types) */}
              <div className="space-y-1">
                <Label className="text-xs sm:text-sm md:text-base font-semibold flex items-center text-gray-800">
                  <HardHat className="mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-blue-600" />
                  Fixation
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {fixationOptions.map((option) => (
                    <Card
                      key={option.value}
                      className={`cursor-pointer border-2 ${
                        fixationType === option.value ? "border-blue-600 ring-2 ring-blue-500" : "border-gray-300"
                      } hover:border-blue-500 transition-all duration-200 rounded-lg bg-gray-100 text-black`}
                      onClick={() => setFixationType(option.value)}
                    >
                      <CardContent className="p-2 sm:p-3 flex flex-col items-center">
                        <div className="relative w-full h-12 sm:h-16 md:h-20 mb-1 sm:mb-2 overflow-hidden rounded-md">
                          <Image src={option.image} alt={option.label} layout="fill" objectFit="cover" />
                        </div>
                        <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-900 text-center">
                          {option.label}
                        </h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Preview and Summary */}
            <div className="lg:sticky lg:top-4 h-fit self-start">
              <Card className="bg-white border-gray-200 shadow-lg w-full">
                <CardHeader className="border-b border-gray-200 p-2 sm:p-3 md:p-4">
                  <CardTitle className="flex items-center text-sm sm:text-base md:text-lg font-bold text-gray-900">
                    <ImageIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                    Aperçu & Récapitulatif
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2 sm:p-3 md:p-4 space-y-2 sm:space-y-3">
                  <div
                    className="relative w-full h-20 sm:h-24 md:h-32 rounded-lg flex items-center justify-center overflow-hidden border border-gray-300"
                    style={{ backgroundColor: backgroundColor }}
                  >
                    <p
                      className="font-extrabold break-words leading-tight text-center px-1 sm:px-2"
                      style={{
                        fontFamily: font,
                        color: textColor,
                        fontSize: `${Math.min(1.5, height / 25)}rem`,
                        lineHeight: 1,
                        textShadow:
                          signStyle === "lighted" || signStyle === "lighted-box"
                            ? `0 0 ${intensity / 10}px ${ledColor}`
                            : "none",
                      }}
                    >
                      {signText || "Votre Enseigne"}
                    </p>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <h4 className="text-xs sm:text-sm md:text-base font-bold text-gray-800">
                      Exemples de réalisations
                    </h4>
                    <div className="grid grid-cols-2 gap-1 sm:gap-2">
                      {examples[signStyle].map((example) => (
                        <div key={example.id} className="relative w-full h-12 sm:h-16 md:h-20 overflow-hidden rounded-md">
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
                  <div className="space-y-1 sm:space-y-2 text-gray-700 text-xxs sm:text-xs md:text-sm border-t border-gray-200 pt-2 sm:pt-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Texte:</span>
                      <span className="font-semibold text-right">{signText || "Non défini"}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Style:</span>
                      <span className="capitalize font-semibold text-right">
                        {signStyle === "cut-out"
                          ? "Lettres en relief"
                          : signStyle === "lighted"
                          ? "Lettres lumineuses rétroéclairées"
                          : "Lettres lumineuses boîtier alu"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Matériau:</span>
                      <span className="capitalize font-semibold text-right">
                        {allMaterialOptions.find((opt) => opt.id === selectedMaterialId)?.label || "N/A"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Fixation:</span>
                      <span className="font-semibold text-right">
                        {fixationType === "boitier-lumineux"
                          ? `Boîtier lumineux ${aluChant} + Plexi Blanc`
                          : fixationOptions.find((f) => f.value === fixationType)?.label || fixationType}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Dimensions:</span>
                      <span className="font-semibold text-right">
                        {estimatedWidth.toFixed(0)} x {height} cm
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-gray-300 pt-2 sm:pt-3 space-y-1 sm:space-y-2">
                    {!isPriceOnQuote && (
                      <div className="flex justify-between text-xs sm:text-sm md:text-base font-bold text-gray-900">
                        <span>Total TTC:</span>
                        <span className="font-bold text-sm sm:text-base md:text-lg text-blue-800">
                          {(Number.parseFloat(finalPrice) * 1.2).toFixed(2)} €
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-1 sm:space-y-2 pt-2 sm:pt-3">
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm md:text-base py-1 sm:py-2 rounded-md transition-colors"
                      onClick={handleSendEmail}
                      disabled={isLoading}
                    >
                      <ShoppingCart className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      {isLoading ? "Envoi en cours..." : "Envoyer ma configuration"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}