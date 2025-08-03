"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Calculator,
  Eye,
  Download,
  Palette,
  Settings,
  Lightbulb,
  Shield,
  Truck,
  Star,
  Info,
  HelpCircle,
  Sparkles,
  Box,
  Ruler,
  Droplets,
  Layers,
  Wand2,
  Clock,
  Calendar,
  MapPin,
  HardDrive,
  Image,
  Type,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  ChevronDown,
  ChevronUp,
  Move3D,
  MoveHorizontal,
  MoveVertical,
  RotateCw,
  GalleryThumbnails,
  FlipHorizontal,
  FlipVertical,
  PaintBucket,
  Gauge,
  Contrast,
  Sun,
  Moon,
  Monitor,
} from "lucide-react";
import Link from "next/link";

// Load fonts dynamically
const loadFont = (fontFamily: string) => {
  const fontMap: Record<string, string> = {
    bebas: "Bebas Neue",
    arial: "Arial, sans-serif",
    helvetica: "Helvetica, sans-serif",
    times: "Times New Roman, serif",
    impact: "Impact, sans-serif",
    roboto: "Roboto, sans-serif",
    montserrat: "Montserrat, sans-serif",
    poppins: "Poppins, sans-serif",
    playfair: "Playfair Display, serif",
    opensans: "Open Sans, sans-serif",
    lato: "Lato, sans-serif",
    raleway: "Raleway, sans-serif",
    nunito: "Nunito, sans-serif",
    fjalla: "Fjalla One, sans-serif",
    anton: "Anton, sans-serif",
    oswald: "Oswald, sans-serif",
  };
  return fontMap[fontFamily] || "sans-serif";
};

export default function ConfiguratorPage() {
  const [config, setConfig] = useState({
    text: "VOTRE TEXTE",
    font: "bebas",
    material: "pvc",
    height: [50],
    width: [150],
    thickness: "3mm",
    ledLighting: false,
    ledType: "white",
    ledDensity: "standard",
    ledColor: "#ffffff",
    backLighting: false,
    mounting: "wall",
    weatherResistance: "ip65",
    color: "#000000",
    backgroundColor: "#ffffff",
    borderRadius: [0],
    letterSpacing: [0],
    lineHeight: [100],
    textShadow: false,
    shadowColor: "#000000",
    shadowBlur: [5],
    shadowOffsetX: [0],
    shadowOffsetY: [0],
    gradient: false,
    gradientType: "linear",
    gradientColors: ["#ff0000", "#00ff00"],
    installation: false,
    warranty: "2years",
    quantity: 1,
    urgentDelivery: false,
    customDesign: false,
    designNotes: "",
    finish: "matte",
    edgeType: "standard",
    hangingSystem: "none",
    powerSupply: "none",
    remoteControl: false,
    fontWeight: "normal",
    fontStyle: "normal",
    textDecoration: "none",
    textAlign: "center",
    textTransform: "none",
    opacity: [100],
    borderWidth: [0],
    borderColor: "#000000",
    borderStyle: "solid",
    padding: [10],
    margin: [0],
    backgroundImage: "",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    textStroke: false,
    textStrokeWidth: [1],
    textStrokeColor: "#000000",
    innerShadow: false,
    innerShadowColor: "#000000",
    innerShadowBlur: [5],
    innerShadowOffsetX: [0],
    innerShadowOffsetY: [0],
    reflection: false,
    reflectionOpacity: [30],
    reflectionDistance: [10],
    perspective: [1000],
    transformOrigin: "center",
    animation: "none",
    animationDuration: [5],
    animationDelay: [0],
    animationIteration: "infinite",
    animationTiming: "ease",
    hoverEffect: "none",
    hoverColor: "#000000",
    hoverScale: [1],
    hoverRotate: [0],
    hoverTranslateX: [0],
    hoverTranslateY: [0],
    patternOverlay: "none",
    patternColor: "#000000",
    patternOpacity: [20],
    noiseOverlay: false,
    noiseOpacity: [10],
    glowEffect: false,
    glowColor: "#0000ff",
    glowBlur: [10],
    glowSpread: [0],
    embossEffect: false,
    embossDepth: [5],
    embossHighlight: "#ffffff",
    embossShadow: "#000000",
    outlineEffect: false,
    outlineColor: "#000000",
    outlineWidth: [2],
    outlineOffset: [0],
    skewX: [0],
    skewY: [0],
    rotate: [0],
    scale: [100],
    contrast: [100],
    brightness: [100],
    saturation: [100],
    hueRotate: [0],
    invert: [0],
    sepia: [0],
    grayscale: [0],
    blur: [0],
    dropShadow: false,
    dropShadowColor: "#000000",
    dropShadowBlur: [5],
    dropShadowOffsetX: [0],
    dropShadowOffsetY: [0],
    responsiveBehavior: "scale",
    mobileFontSize: [80],
    tabletFontSize: [90],
    darkModeColor: "#ffffff",
    darkModeBackground: "#121212",
    darkModeEnabled: false,
    parallaxEffect: false,
    parallaxIntensity: [50],
    customCSS: "",
    accessibilityMode: false,
    highContrastMode: false,
    printOptimized: false,
    seoOptimized: false,
    lazyLoading: false,
    performanceMode: false,
  });

  const [activeTab, setActiveTab] = useState("text");
  const [price, setPrice] = useState(0);
  const [priceBreakdown, setPriceBreakdown] = useState({
    base: 0,
    material: 0,
    led: 0,
    size: 0,
    options: 0,
    installation: 0,
    total: 0,
  });
  const [isPreview3D, setIsPreview3D] = useState(false);
  const [previewRotation, setPreviewRotation] = useState({ x: 20, y: 20 });
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [showDesignOptions, setShowDesignOptions] = useState(false);
  const [showEffectsOptions, setShowEffectsOptions] = useState(false);
  const [showResponsiveOptions, setShowResponsiveOptions] = useState(false);

  useEffect(() => {
    const basePrice = 50;
    const textLength = Math.max(config.text.length, 1);
    const heightMultiplier = config.height[0] / 10;
    const widthMultiplier = config.width[0] / 50;
    const sizeMultiplier = heightMultiplier * widthMultiplier;
    const materialMultipliers = {
      pvc: 1,
      dibond: 1.5,
      plexiglas: 2,
      aluminum: 2.5,
      steel: 3,
      wood: 1.8,
      acrylic: 2.2,
    };
    const ledMultipliers = {
      none: 0,
      white: 2,
      rgb: 3.5,
      neon: 4,
      color: 3,
    };
    const densityMultipliers = {
      low: 0.8,
      standard: 1,
      high: 1.3,
      ultra: 1.6,
    };
    const finishMultipliers = {
      matte: 1,
      glossy: 1.2,
      metallic: 1.5,
      textured: 1.3,
    };
    const edgeMultipliers = {
      standard: 1,
      polished: 1.2,
      brushed: 1.3,
      rounded: 1.1,
    };
    const baseCost = basePrice * textLength * sizeMultiplier;
    const materialCost =
      baseCost *
      (materialMultipliers[
        config.material as keyof typeof materialMultipliers
      ] -
        1);
    let ledCost = 0;
    let optionsCost = 0;
    let installationCost = 0;
    if (config.ledLighting) {
      ledCost =
        baseCost *
        ledMultipliers[config.ledType as keyof typeof ledMultipliers] *
        densityMultipliers[
          config.ledDensity as keyof typeof densityMultipliers
        ];
    }
    optionsCost +=
      baseCost *
      (finishMultipliers[config.finish as keyof typeof finishMultipliers] - 1);
    optionsCost +=
      baseCost *
      (edgeMultipliers[config.edgeType as keyof typeof edgeMultipliers] - 1);

    if (config.backLighting) optionsCost += baseCost * 0.5;
    if (config.weatherResistance === "ip67") optionsCost += baseCost * 0.2;
    if (config.urgentDelivery) optionsCost += baseCost * 0.3;
    if (config.customDesign) optionsCost += 150;
    if (config.remoteControl) optionsCost += 50;
    if (config.hangingSystem !== "none") optionsCost += 30;
    if (config.powerSupply !== "none") optionsCost += 40;
    if (config.textShadow) optionsCost += baseCost * 0.1;
    if (config.gradient) optionsCost += baseCost * 0.15;
    if (config.textStroke) optionsCost += baseCost * 0.1;
    if (config.innerShadow) optionsCost += baseCost * 0.1;
    if (config.reflection) optionsCost += baseCost * 0.2;
    if (config.glowEffect) optionsCost += baseCost * 0.15;
    if (config.embossEffect) optionsCost += baseCost * 0.2;
    if (config.outlineEffect) optionsCost += baseCost * 0.1;
    if (config.dropShadow) optionsCost += baseCost * 0.1;
    if (config.patternOverlay !== "none") optionsCost += baseCost * 0.1;
    if (config.noiseOverlay) optionsCost += baseCost * 0.05;
    if (config.backgroundImage) optionsCost += 75;
    if (config.animation !== "none") optionsCost += baseCost * 0.3;
    if (config.hoverEffect !== "none") optionsCost += baseCost * 0.2;
    if (config.parallaxEffect) optionsCost += baseCost * 0.25;
    if (config.darkModeEnabled) optionsCost += baseCost * 0.15;
    if (config.accessibilityMode) optionsCost += baseCost * 0.1;
    if (config.highContrastMode) optionsCost += baseCost * 0.1;
    if (config.printOptimized) optionsCost += baseCost * 0.1;
    if (config.seoOptimized) optionsCost += baseCost * 0.2;
    if (config.lazyLoading) optionsCost += baseCost * 0.1;
    if (config.performanceMode) optionsCost += baseCost * 0.15;
    if (config.installation) {
      installationCost = (baseCost + materialCost + ledCost) * 0.4;
    }
    const totalCost =
      (baseCost + materialCost + ledCost + optionsCost + installationCost) *
      config.quantity;
    setPriceBreakdown({
      base: Math.round(baseCost),
      material: Math.round(materialCost),
      led: Math.round(ledCost),
      size: Math.round(sizeMultiplier * 10),
      options: Math.round(optionsCost),
      installation: Math.round(installationCost),
      total: Math.round(totalCost),
    });
    setPrice(Math.round(totalCost));
  }, [config]);

  const materials = [
    {
      id: "pvc",
      name: "PVC",
      description: "Économique et résistant",
      icon: "💰",
      durability: 3,
      weight: 1,
    },
    {
      id: "dibond",
      name: "Dibond",
      description: "Composite aluminium",
      icon: "🛡️",
      durability: 4,
      weight: 2,
    },
    {
      id: "plexiglas",
      name: "Plexiglas",
      description: "Finition premium",
      icon: "✨",
      durability: 4,
      weight: 2,
    },
    {
      id: "aluminum",
      name: "Aluminium",
      description: "Haute résistance",
      icon: "🔧",
      durability: 5,
      weight: 3,
    },
    {
      id: "steel",
      name: "Acier",
      description: "Ultra résistant",
      icon: "⚡",
      durability: 5,
      weight: 4,
    },
    {
      id: "wood",
      name: "Bois",
      description: "Style naturel",
      icon: "🌲",
      durability: 3,
      weight: 3,
    },
    {
      id: "acrylic",
      name: "Acrylique",
      description: "Transparent/coloré",
      icon: "🔮",
      durability: 4,
      weight: 2,
    },
  ];

  const fonts = [
    { id: "arial", name: "Arial", preview: "Arial" },
    { id: "helvetica", name: "Helvetica", preview: "Helvetica" },
    { id: "times", name: "Times New Roman", preview: "Times" },
    { id: "impact", name: "Impact", preview: "Impact" },
    { id: "bebas", name: "Bebas Neue", preview: "Bebas", recommended: true },
    { id: "roboto", name: "Roboto", preview: "Roboto" },
    { id: "montserrat", name: "Montserrat", preview: "Montserrat" },
    { id: "poppins", name: "Poppins", preview: "Poppins" },
    { id: "playfair", name: "Playfair Display", preview: "Playfair Display" },
    { id: "opensans", name: "Open Sans", preview: "Open Sans" },
    { id: "lato", name: "Lato", preview: "Lato" },
    { id: "raleway", name: "Raleway", preview: "Raleway" },
    { id: "nunito", name: "Nunito", preview: "Nunito" },
    { id: "fjalla", name: "Fjalla One", preview: "Fjalla One" },
    { id: "anton", name: "Anton", preview: "Anton" },
    { id: "oswald", name: "Oswald", preview: "Oswald" },
  ];

  const ledTypes = [
    {
      id: "white",
      name: "LED Blanc",
      description: "Éclairage blanc froid",
      color: "#ffffff",
    },
    {
      id: "warm",
      name: "LED Chaud",
      description: "Éclairage blanc chaud",
      color: "#fff8dc",
    },
    {
      id: "rgb",
      name: "LED RGB",
      description: "16 millions de couleurs",
      color: "linear-gradient(45deg, #ff0000, #00ff00, #0000ff)",
    },
    {
      id: "neon",
      name: "LED Néon",
      description: "Effet néon continu",
      color: "#00ffff",
    },
    {
      id: "color",
      name: "LED Colorée",
      description: "Couleur personnalisée",
      color: config.ledColor,
    },
  ];

  const finishes = [
    { id: "matte", name: "Mat", description: "Finition non réfléchissante" },
    { id: "glossy", name: "Brillant", description: "Surface réfléchissante" },
    { id: "metallic", name: "Métallisé", description: "Effet métallique" },
    { id: "textured", name: "Texturé", description: "Surface avec texture" },
  ];

  const edgeTypes = [
    { id: "standard", name: "Standard", description: "Bords droits" },
    { id: "polished", name: "Poli", description: "Bords lisses et brillants" },
    { id: "brushed", name: "Brossé", description: "Effet brossé métallique" },
    { id: "rounded", name: "Arrondi", description: "Bords arrondis" },
  ];

  const hangingSystems = [
    { id: "none", name: "Aucun", description: "À déterminer plus tard" },
    { id: "hooks", name: "Crochets", description: "Crochets intégrés" },
    {
      id: "standoffs",
      name: "Écarteurs",
      description: "Fixation avec écarteurs",
    },
    { id: "channel", name: "Rail", description: "Système de rail" },
    { id: "stand", name: "Pied", description: "Support intégré" },
  ];

  const powerSupplies = [
    { id: "none", name: "Non inclus", description: "À fournir par le client" },
    {
      id: "standard",
      name: "Standard",
      description: "Alimentation 12V incluse",
    },
    { id: "waterproof", name: "Étanche", description: "Alimentation IP67" },
    {
      id: "remote",
      name: "Avec télécommande",
      description: "Inclut télécommande",
    },
  ];

  const gradientTypes = [
    { id: "linear", name: "Linéaire" },
    { id: "radial", name: "Radial" },
    { id: "conic", name: "Conique" },
  ];

  const textTransforms = [
    { id: "none", name: "Normal" },
    { id: "uppercase", name: "Majuscules" },
    { id: "lowercase", name: "Minuscules" },
    { id: "capitalize", name: "Capitales" },
  ];

  const borderStyles = [
    { id: "solid", name: "Plein" },
    { id: "dashed", name: "Tirets" },
    { id: "dotted", name: "Pointillés" },
    { id: "double", name: "Double" },
    { id: "groove", name: "Rainuré" },
    { id: "ridge", name: "Crête" },
    { id: "inset", name: "Enfoncé" },
    { id: "outset", name: "En relief" },
  ];

  const backgroundSizes = [
    { id: "cover", name: "Couvrir" },
    { id: "contain", name: "Contenir" },
    { id: "auto", name: "Automatique" },
  ];

  const backgroundPositions = [
    { id: "center", name: "Centre" },
    { id: "top", name: "Haut" },
    { id: "bottom", name: "Bas" },
    { id: "left", name: "Gauche" },
    { id: "right", name: "Droite" },
  ];

  const backgroundRepeats = [
    { id: "no-repeat", name: "Ne pas répéter" },
    { id: "repeat", name: "Répéter" },
    { id: "repeat-x", name: "Répéter horizontalement" },
    { id: "repeat-y", name: "Répéter verticalement" },
  ];

  const animations = [
    { id: "none", name: "Aucune" },
    { id: "fade", name: "Fondu" },
    { id: "slide", name: "Glissement" },
    { id: "pulse", name: "Pulsation" },
    { id: "bounce", name: "Rebond" },
    { id: "spin", name: "Rotation" },
    { id: "float", name: "Flottement" },
  ];

  const hoverEffects = [
    { id: "none", name: "Aucun" },
    { id: "color", name: "Changement de couleur" },
    { id: "scale", name: "Agrandissement" },
    { id: "rotate", name: "Rotation" },
    { id: "translate", name: "Déplacement" },
    { id: "shadow", name: "Ombre" },
  ];

  const patternOverlays = [
    { id: "none", name: "Aucun" },
    { id: "dots", name: "Points" },
    { id: "lines", name: "Lignes" },
    { id: "grid", name: "Grille" },
    { id: "diagonal", name: "Diagonales" },
    { id: "zigzag", name: "Zigzag" },
  ];

  const responsiveBehaviors = [
    { id: "scale", name: "Redimensionner" },
    { id: "stack", name: "Empiler" },
    { id: "hide", name: "Masquer" },
    { id: "custom", name: "Personnalisé" },
  ];

  const animationIterations = [
    { id: "infinite", name: "Infinie" },
    { id: "once", name: "Une fois" },
    { id: "twice", name: "Deux fois" },
    { id: "thrice", name: "Trois fois" },
  ];

  const animationTimings = [
    { id: "ease", name: "Ease" },
    { id: "linear", name: "Linéaire" },
    { id: "ease-in", name: "Ease-in" },
    { id: "ease-out", name: "Ease-out" },
    { id: "ease-in-out", name: "Ease-in-out" },
    { id: "step-start", name: "Step-start" },
    { id: "step-end", name: "Step-end" },
  ];

  const getTextStyle = () => {
    let background = config.backgroundColor;
    if (config.gradient) {
      if (config.gradientType === "linear") {
        background = `linear-gradient(90deg, ${config.gradientColors.join(
          ", "
        )})`;
      } else if (config.gradientType === "radial") {
        background = `radial-gradient(circle, ${config.gradientColors.join(
          ", "
        )})`;
      } else {
        background = `conic-gradient(from 90deg, ${config.gradientColors.join(
          ", "
        )})`;
      }
    }
    if (config.backgroundImage) {
      background = `url(${config.backgroundImage}) ${background}`;
    }
    let textShadow = "none";
    if (config.textShadow) {
      textShadow = `${config.shadowOffsetX[0]}px ${config.shadowOffsetY[0]}px ${config.shadowBlur[0]}px ${config.shadowColor}`;
    }
    let innerShadow = "none";
    if (config.innerShadow) {
      innerShadow = `inset ${config.innerShadowOffsetX[0]}px ${config.innerShadowOffsetY[0]}px ${config.innerShadowBlur[0]}px ${config.innerShadowColor}`;
    }
    let textStroke = "none";
    if (config.textStroke) {
      textStroke = `${config.textStrokeWidth[0]}px ${config.textStrokeColor}`;
    }
    let dropShadow = "none";
    if (config.dropShadow) {
      dropShadow = `${config.dropShadowOffsetX[0]}px ${config.dropShadowOffsetY[0]}px ${config.dropShadowBlur[0]}px ${config.dropShadowColor}`;
    }
    let reflection = "none";
    if (config.reflection) {
      reflection = `linear-gradient(to bottom, rgba(255,255,255,${
        config.reflectionOpacity[0] / 100
      }) 0%, transparent ${config.reflectionDistance[0]}px)`;
    }
    let glow = "none";
    if (config.glowEffect) {
      glow = `0 0 ${config.glowBlur[0]}px ${config.glowSpread[0]}px ${config.glowColor}`;
    }
    let outline = "none";
    if (config.outlineEffect) {
      outline = `${config.outlineWidth[0]}px ${config.outlineColor}`;
    }
    return {
      fontFamily: loadFont(config.font),
      fontSize: `${Math.max(config.height[0] * 0.8, 24)}px`,
      color: config.color,
      letterSpacing: `${config.letterSpacing[0]}px`,
      lineHeight: `${config.lineHeight[0]}%`,
      borderRadius: `${config.borderRadius[0]}px`,
      textShadow: config.ledLighting
        ? `0 0 20px ${config.color}`
        : `${textShadow}, ${innerShadow}`,
      maxWidth: "100%",
      wordBreak: "break-word",
      background,
      padding: `${config.padding[0]}px`,
      margin: `${config.margin[0]}px`,
      display: "inline-block",
      transform: isPreview3D
        ? `rotateX(${previewRotation.x}deg) rotateY(${previewRotation.y}deg)`
        : "none",
      transition: "transform 0.5s ease, box-shadow 0.3s ease",
      boxShadow: isPreview3D ? "20px 20px 30px rgba(0,0,0,0.3)" : "none",
      fontWeight: config.fontWeight,
      fontStyle: config.fontStyle,
      textDecoration: config.textDecoration,
      textAlign: config.textAlign,
      textTransform: config.textTransform,
      opacity: `${config.opacity[0] / 100}`,
      borderWidth: `${config.borderWidth[0]}px`,
      borderColor: config.borderColor,
      borderStyle: config.borderStyle,
      backgroundSize: config.backgroundSize,
      backgroundPosition: config.backgroundPosition,
      backgroundRepeat: config.backgroundRepeat,
      WebkitTextStroke: textStroke,
      textReflection: reflection,
      boxShadow: `${glow}, ${dropShadow}`,
      outline: outline,
      outlineOffset: `${config.outlineOffset[0]}px`,
      transform: `skewX(${config.skewX[0]}deg) skewY(${
        config.skewY[0]
      }deg) rotate(${config.rotate[0]}deg) scale(${config.scale[0] / 100})`,
      filter: `
        contrast(${config.contrast[0]}%)
        brightness(${config.brightness[0]}%)
        saturate(${config.saturation[0]}%)
        hue-rotate(${config.hueRotate[0]}deg)
        invert(${config.invert[0]}%)
        sepia(${config.sepia[0]}%)
        grayscale(${config.grayscale[0]}%)
        blur(${config.blur[0]}px)
      `,
      perspective: `${config.perspective[0]}px`,
      transformOrigin: config.transformOrigin,
      animation:
        config.animation !== "none"
          ? `${config.animation} ${config.animationDuration[0]}s ${config.animationTiming} ${config.animationDelay[0]}s ${config.animationIteration}`
          : "none",
      ":hover":
        config.hoverEffect !== "none"
          ? {
              color:
                config.hoverEffect === "color" ? config.hoverColor : undefined,
              transform: `
          ${
            config.hoverEffect === "scale"
              ? `scale(${config.hoverScale[0]})`
              : ""
          }
          ${
            config.hoverEffect === "rotate"
              ? `rotate(${config.hoverRotate[0]}deg)`
              : ""
          }
          ${
            config.hoverEffect === "translate"
              ? `translate(${config.hoverTranslateX[0]}px, ${config.hoverTranslateY[0]}px)`
              : ""
          }
        `,
              boxShadow:
                config.hoverEffect === "shadow"
                  ? `0 10px 20px rgba(0,0,0,0.2)`
                  : undefined,
              transition: "all 0.3s ease",
            }
          : undefined,
    };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPreview3D) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setPreviewRotation({
      x: ((y - centerY) / centerY) * 20,
      y: ((centerX - x) / centerX) * 20,
    });
  };

  const resetPreviewRotation = () => {
    setPreviewRotation({ x: 20, y: 20 });
  };

  const handleBackgroundImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setConfig({
          ...config,
          backgroundImage: event.target?.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleAdvancedOptions = () => {
    setShowAdvancedOptions(!showAdvancedOptions);
  };

  const toggleDesignOptions = () => {
    setShowDesignOptions(!showDesignOptions);
  };

  const toggleEffectsOptions = () => {
    setShowEffectsOptions(!showEffectsOptions);
  };

  const toggleResponsiveOptions = () => {
    setShowResponsiveOptions(!showResponsiveOptions);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <div className="pt-20 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-blue-500 bg-clip-text text-transparent">
              Configurateur d'Enseigne
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Créez votre enseigne personnalisée avec notre configurateur avancé
              et obtenez un devis instantané
            </p>
          </div>
          <div className="grid xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2">
              <Card className="bg-white border-gray-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-blue-500" />
                    Configuration
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Personnalisez chaque aspect de votre enseigne lumineuse
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                  >
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-gray-200">
                      <TabsTrigger value="text" className="text-xs md:text-sm">
                        <Palette className="h-4 w-4 mr-1 md:mr-2" />
                        <span className="hidden sm:inline">Texte</span>
                      </TabsTrigger>
                      <TabsTrigger
                        value="material"
                        className="text-xs md:text-sm"
                      >
                        <Box className="h-4 w-4 mr-1 md:mr-2" />
                        <span className="hidden sm:inline">Matériau</span>
                      </TabsTrigger>
                      <TabsTrigger
                        value="lighting"
                        className="text-xs md:text-sm"
                      >
                        <Lightbulb className="h-4 w-4 mr-1 md:mr-2" />
                        <span className="hidden sm:inline">Éclairage</span>
                      </TabsTrigger>
                      <TabsTrigger
                        value="options"
                        className="text-xs md:text-sm"
                      >
                        <Wand2 className="h-4 w-4 mr-1 md:mr-2" />
                        <span className="hidden sm:inline">Options</span>
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="text" className="space-y-6 mt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <Label
                              htmlFor="text"
                              className="text-black font-medium"
                            >
                              Votre texte *
                            </Label>
                            <span className="text-xs text-gray-600">
                              {config.text.length}/50 caractères
                            </span>
                          </div>
                          <Input
                            id="text"
                            value={config.text}
                            onChange={(e) =>
                              setConfig({ ...config, text: e.target.value })
                            }
                            className="bg-gray-100 border-gray-300 text-black text-lg h-12"
                            placeholder="Entrez votre texte"
                            maxLength={50}
                          />
                        </div>
                        <div>
                          <Label className="text-black mb-2 block font-medium">
                            Police
                          </Label>
                          <Select
                            value={config.font}
                            onValueChange={(value) =>
                              setConfig({ ...config, font: value })
                            }
                          >
                            <SelectTrigger className="bg-gray-100 border-gray-300 text-black h-12">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-gray-300 max-h-60">
                              {fonts.map((font) => (
                                <SelectItem
                                  key={font.id}
                                  value={font.id}
                                  className="flex items-center"
                                >
                                  <span
                                    style={{
                                      fontFamily: loadFont(font.id),
                                      fontSize: "16px",
                                      lineHeight: "1.5",
                                    }}
                                    className="flex-1"
                                  >
                                    {font.name}
                                  </span>
                                  {font.recommended && (
                                    <Badge
                                      variant="secondary"
                                      className="ml-2 text-xs"
                                    >
                                      Recommandé
                                    </Badge>
                                  )}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label className="text-black mb-2 block font-medium">
                            Style de texte
                          </Label>
                          <div className="flex gap-2">
                            <Button
                              variant={
                                config.fontWeight === "bold"
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              onClick={() =>
                                setConfig({
                                  ...config,
                                  fontWeight:
                                    config.fontWeight === "bold"
                                      ? "normal"
                                      : "bold",
                                })
                              }
                              className="border-gray-300"
                            >
                              <Bold className="h-4 w-4" />
                            </Button>
                            <Button
                              variant={
                                config.fontStyle === "italic"
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              onClick={() =>
                                setConfig({
                                  ...config,
                                  fontStyle:
                                    config.fontStyle === "italic"
                                      ? "normal"
                                      : "italic",
                                })
                              }
                              className="border-gray-300"
                            >
                              <Italic className="h-4 w-4" />
                            </Button>
                            <Button
                              variant={
                                config.textDecoration === "underline"
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              onClick={() =>
                                setConfig({
                                  ...config,
                                  textDecoration:
                                    config.textDecoration === "underline"
                                      ? "none"
                                      : "underline",
                                })
                              }
                              className="border-gray-300"
                            >
                              <Underline className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div>
                          <Label className="text-black mb-2 block font-medium">
                            Alignement
                          </Label>
                          <div className="flex gap-2">
                            <Button
                              variant={
                                config.textAlign === "left"
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              onClick={() =>
                                setConfig({ ...config, textAlign: "left" })
                              }
                              className="border-gray-300"
                            >
                              <AlignLeft className="h-4 w-4" />
                            </Button>
                            <Button
                              variant={
                                config.textAlign === "center"
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              onClick={() =>
                                setConfig({ ...config, textAlign: "center" })
                              }
                              className="border-gray-300"
                            >
                              <AlignCenter className="h-4 w-4" />
                            </Button>
                            <Button
                              variant={
                                config.textAlign === "right"
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              onClick={() =>
                                setConfig({ ...config, textAlign: "right" })
                              }
                              className="border-gray-300"
                            >
                              <AlignRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label className="text-black mb-2 block font-medium">
                            Transformation
                          </Label>
                          <Select
                            value={config.textTransform}
                            onValueChange={(value) =>
                              setConfig({ ...config, textTransform: value })
                            }
                          >
                            <SelectTrigger className="bg-gray-100 border-gray-300 text-black">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-gray-300">
                              {textTransforms.map((transform) => (
                                <SelectItem
                                  key={transform.id}
                                  value={transform.id}
                                >
                                  {transform.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label className="text-black mb-2 block font-medium">
                            Opacité: {config.opacity[0]}%
                          </Label>
                          <Slider
                            value={config.opacity}
                            onValueChange={(value) =>
                              setConfig({ ...config, opacity: value })
                            }
                            max={100}
                            min={0}
                            step={5}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label className="text-black mb-2 block font-medium">
                            Couleur du texte
                          </Label>
                          <div className="flex gap-2">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <input
                                  type="color"
                                  value={config.color}
                                  onChange={(e) =>
                                    setConfig({
                                      ...config,
                                      color: e.target.value,
                                    })
                                  }
                                  className="w-12 h-10 rounded border border-gray-300 bg-gray-100 cursor-pointer"
                                />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Sélectionnez une couleur</p>
                              </TooltipContent>
                            </Tooltip>
                            <Input
                              value={config.color}
                              onChange={(e) =>
                                setConfig({ ...config, color: e.target.value })
                              }
                              className="bg-gray-100 border-gray-300 text-black flex-1"
                              placeholder="#000000"
                            />
                          </div>
                        </div>
                        <div>
                          <Label className="text-black mb-2 block font-medium">
                            Espacement des lettres: {config.letterSpacing[0]}px
                          </Label>
                          <Slider
                            value={config.letterSpacing}
                            onValueChange={(value) =>
                              setConfig({ ...config, letterSpacing: value })
                            }
                            max={20}
                            min={-5}
                            step={1}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label className="text-black mb-2 block font-medium">
                            Interligne: {config.lineHeight[0]}%
                          </Label>
                          <Slider
                            value={config.lineHeight}
                            onValueChange={(value) =>
                              setConfig({ ...config, lineHeight: value })
                            }
                            max={200}
                            min={80}
                            step={5}
                            className="w-full"
                          />
                        </div>
                        <div>
                          <Label className="text-black mb-2 block font-medium">
                            Arrondi des angles: {config.borderRadius[0]}px
                          </Label>
                          <Slider
                            value={config.borderRadius}
                            onValueChange={(value) =>
                              setConfig({ ...config, borderRadius: value })
                            }
                            max={50}
                            min={0}
                            step={5}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <Button
                          variant="ghost"
                          className="w-full flex items-center justify-between text-gray-600 hover:text-black"
                          onClick={toggleDesignOptions}
                        >
                          <span className="flex items-center gap-2">
                            <Type className="h-4 w-4" />
                            Options de design avancées
                          </span>
                          {showDesignOptions ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </Button>

                        {showDesignOptions && (
                          <div className="space-y-6 p-4 bg-gray-100 rounded-lg">
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Fond
                                </Label>
                                <div className="flex gap-2">
                                  <input
                                    type="color"
                                    value={config.backgroundColor}
                                    onChange={(e) =>
                                      setConfig({
                                        ...config,
                                        backgroundColor: e.target.value,
                                      })
                                    }
                                    className="w-12 h-10 rounded border border-gray-300 bg-gray-100 cursor-pointer"
                                  />
                                  <Input
                                    value={config.backgroundColor}
                                    onChange={(e) =>
                                      setConfig({
                                        ...config,
                                        backgroundColor: e.target.value,
                                      })
                                    }
                                    className="bg-gray-100 border-gray-300 text-black flex-1"
                                    placeholder="#ffffff"
                                  />
                                </div>
                              </div>
                              <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                                <div>
                                  <Label
                                    htmlFor="gradient"
                                    className="text-black font-medium"
                                  >
                                    Dégradé de couleur
                                  </Label>
                                  <p className="text-sm text-gray-600">
                                    Appliquer un dégradé au fond
                                  </p>
                                </div>
                                <Switch
                                  id="gradient"
                                  checked={config.gradient}
                                  onCheckedChange={(checked) =>
                                    setConfig({ ...config, gradient: checked })
                                  }
                                />
                              </div>
                            </div>

                            {config.gradient && (
                              <div className="space-y-4">
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Type de dégradé
                                  </Label>
                                  <Select
                                    value={config.gradientType}
                                    onValueChange={(value) =>
                                      setConfig({
                                        ...config,
                                        gradientType: value,
                                      })
                                    }
                                  >
                                    <SelectTrigger className="bg-gray-100 border-gray-300 text-black">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white border-gray-300">
                                      {gradientTypes.map((type) => (
                                        <SelectItem
                                          key={type.id}
                                          value={type.id}
                                        >
                                          {type.name}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                  {config.gradientColors.map((color, index) => (
                                    <div key={index}>
                                      <Label className="text-black mb-2 block font-medium">
                                        Couleur {index + 1}
                                      </Label>
                                      <div className="flex gap-2">
                                        <input
                                          type="color"
                                          value={color}
                                          onChange={(e) => {
                                            const newColors = [
                                              ...config.gradientColors,
                                            ];
                                            newColors[index] = e.target.value;
                                            setConfig({
                                              ...config,
                                              gradientColors: newColors,
                                            });
                                          }}
                                          className="w-12 h-10 rounded border border-gray-300 bg-gray-100 cursor-pointer"
                                        />
                                        <Input
                                          value={color}
                                          onChange={(e) => {
                                            const newColors = [
                                              ...config.gradientColors,
                                            ];
                                            newColors[index] = e.target.value;
                                            setConfig({
                                              ...config,
                                              gradientColors: newColors,
                                            });
                                          }}
                                          className="bg-gray-100 border-gray-300 text-black flex-1"
                                        />
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                <Button
                                  variant="outline"
                                  className="border-gray-300"
                                  onClick={() => {
                                    if (config.gradientColors.length < 4) {
                                      setConfig({
                                        ...config,
                                        gradientColors: [
                                          ...config.gradientColors,
                                          "#0000ff",
                                        ],
                                      });
                                    }
                                  }}
                                  disabled={config.gradientColors.length >= 4}
                                >
                                  Ajouter une couleur
                                </Button>
                              </div>
                            )}

                            <div>
                              <Label className="text-black mb-2 block font-medium">
                                Image de fond
                              </Label>
                              <Input
                                type="file"
                                accept="image/*"
                                onChange={handleBackgroundImageUpload}
                                className="bg-gray-100 border-gray-300 text-black"
                              />
                              {config.backgroundImage && (
                                <div className="mt-2 flex items-center gap-2">
                                  <span className="text-sm text-gray-600">
                                    Image sélectionnée
                                  </span>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() =>
                                      setConfig({
                                        ...config,
                                        backgroundImage: "",
                                      })
                                    }
                                    className="text-red-500 hover:text-red-400"
                                  >
                                    Supprimer
                                  </Button>
                                </div>
                              )}
                            </div>

                            {config.backgroundImage && (
                              <div className="grid md:grid-cols-3 gap-4">
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Taille
                                  </Label>
                                  <Select
                                    value={config.backgroundSize}
                                    onValueChange={(value) =>
                                      setConfig({
                                        ...config,
                                        backgroundSize: value,
                                      })
                                    }
                                  >
                                    <SelectTrigger className="bg-gray-100 border-gray-300 text-black">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white border-gray-300">
                                      {backgroundSizes.map((size) => (
                                        <SelectItem
                                          key={size.id}
                                          value={size.id}
                                        >
                                          {size.name}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Position
                                  </Label>
                                  <Select
                                    value={config.backgroundPosition}
                                    onValueChange={(value) =>
                                      setConfig({
                                        ...config,
                                        backgroundPosition: value,
                                      })
                                    }
                                  >
                                    <SelectTrigger className="bg-gray-100 border-gray-300 text-black">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white border-gray-300">
                                      {backgroundPositions.map((position) => (
                                        <SelectItem
                                          key={position.id}
                                          value={position.id}
                                        >
                                          {position.name}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Répétition
                                  </Label>
                                  <Select
                                    value={config.backgroundRepeat}
                                    onValueChange={(value) =>
                                      setConfig({
                                        ...config,
                                        backgroundRepeat: value,
                                      })
                                    }
                                  >
                                    <SelectTrigger className="bg-gray-100 border-gray-300 text-black">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white border-gray-300">
                                      {backgroundRepeats.map((repeat) => (
                                        <SelectItem
                                          key={repeat.id}
                                          value={repeat.id}
                                        >
                                          {repeat.name}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Bordure: {config.borderWidth[0]}px
                                </Label>
                                <Slider
                                  value={config.borderWidth}
                                  onValueChange={(value) =>
                                    setConfig({ ...config, borderWidth: value })
                                  }
                                  max={20}
                                  min={0}
                                  step={1}
                                  className="w-full"
                                />
                              </div>
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Style de bordure
                                </Label>
                                <Select
                                  value={config.borderStyle}
                                  onValueChange={(value) =>
                                    setConfig({ ...config, borderStyle: value })
                                  }
                                >
                                  <SelectTrigger className="bg-gray-100 border-gray-300 text-black">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent className="bg-white border-gray-300">
                                    {borderStyles.map((style) => (
                                      <SelectItem
                                        key={style.id}
                                        value={style.id}
                                      >
                                        {style.name}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Couleur de bordure
                                </Label>
                                <div className="flex gap-2">
                                  <input
                                    type="color"
                                    value={config.borderColor}
                                    onChange={(e) =>
                                      setConfig({
                                        ...config,
                                        borderColor: e.target.value,
                                      })
                                    }
                                    className="w-12 h-10 rounded border border-gray-300 bg-gray-100 cursor-pointer"
                                  />
                                  <Input
                                    value={config.borderColor}
                                    onChange={(e) =>
                                      setConfig({
                                        ...config,
                                        borderColor: e.target.value,
                                      })
                                    }
                                    className="bg-gray-100 border-gray-300 text-black flex-1"
                                    placeholder="#000000"
                                  />
                                </div>
                              </div>
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Marge intérieure: {config.padding[0]}px
                                </Label>
                                <Slider
                                  value={config.padding}
                                  onValueChange={(value) =>
                                    setConfig({ ...config, padding: value })
                                  }
                                  max={50}
                                  min={0}
                                  step={1}
                                  className="w-full"
                                />
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Marge extérieure: {config.margin[0]}px
                                </Label>
                                <Slider
                                  value={config.margin}
                                  onValueChange={(value) =>
                                    setConfig({ ...config, margin: value })
                                  }
                                  max={50}
                                  min={0}
                                  step={1}
                                  className="w-full"
                                />
                              </div>
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Rotation: {config.rotate[0]}°
                                </Label>
                                <Slider
                                  value={config.rotate}
                                  onValueChange={(value) =>
                                    setConfig({ ...config, rotate: value })
                                  }
                                  max={360}
                                  min={-360}
                                  step={1}
                                  className="w-full"
                                />
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Inclinaison X: {config.skewX[0]}°
                                </Label>
                                <Slider
                                  value={config.skewX}
                                  onValueChange={(value) =>
                                    setConfig({ ...config, skewX: value })
                                  }
                                  max={45}
                                  min={-45}
                                  step={1}
                                  className="w-full"
                                />
                              </div>
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Inclinaison Y: {config.skewY[0]}°
                                </Label>
                                <Slider
                                  value={config.skewY}
                                  onValueChange={(value) =>
                                    setConfig({ ...config, skewY: value })
                                  }
                                  max={45}
                                  min={-45}
                                  step={1}
                                  className="w-full"
                                />
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Échelle: {config.scale[0]}%
                                </Label>
                                <Slider
                                  value={config.scale}
                                  onValueChange={(value) =>
                                    setConfig({ ...config, scale: value })
                                  }
                                  max={200}
                                  min={50}
                                  step={5}
                                  className="w-full"
                                />
                              </div>
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Perspective: {config.perspective[0]}px
                                </Label>
                                <Slider
                                  value={config.perspective}
                                  onValueChange={(value) =>
                                    setConfig({ ...config, perspective: value })
                                  }
                                  max={2000}
                                  min={0}
                                  step={50}
                                  className="w-full"
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        <Button
                          variant="ghost"
                          className="w-full flex items-center justify-between text-gray-600 hover:text-black"
                          onClick={toggleEffectsOptions}
                        >
                          <span className="flex items-center gap-2">
                            <Sparkles className="h-4 w-4" />
                            Effets spéciaux
                          </span>
                          {showEffectsOptions ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </Button>

                        {showEffectsOptions && (
                          <div className="space-y-6 p-4 bg-gray-100 rounded-lg">
                            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                              <div>
                                <Label
                                  htmlFor="textShadow"
                                  className="text-black font-medium"
                                >
                                  Ombre du texte
                                </Label>
                                <p className="text-sm text-gray-600">
                                  Ajouter une ombre portée au texte
                                </p>
                              </div>
                              <Switch
                                id="textShadow"
                                checked={config.textShadow}
                                onCheckedChange={(checked) =>
                                  setConfig({ ...config, textShadow: checked })
                                }
                              />
                            </div>

                            {config.textShadow && (
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Couleur de l'ombre
                                  </Label>
                                  <div className="flex gap-2">
                                    <input
                                      type="color"
                                      value={config.shadowColor}
                                      onChange={(e) =>
                                        setConfig({
                                          ...config,
                                          shadowColor: e.target.value,
                                        })
                                      }
                                      className="w-12 h-10 rounded border border-gray-300 bg-gray-100 cursor-pointer"
                                    />
                                    <Input
                                      value={config.shadowColor}
                                      onChange={(e) =>
                                        setConfig({
                                          ...config,
                                          shadowColor: e.target.value,
                                        })
                                      }
                                      className="bg-gray-100 border-gray-300 text-black flex-1"
                                      placeholder="#000000"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Flou de l'ombre: {config.shadowBlur[0]}px
                                  </Label>
                                  <Slider
                                    value={config.shadowBlur}
                                    onValueChange={(value) =>
                                      setConfig({
                                        ...config,
                                        shadowBlur: value,
                                      })
                                    }
                                    max={20}
                                    min={0}
                                    step={1}
                                    className="w-full"
                                  />
                                </div>
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Décalage X: {config.shadowOffsetX[0]}px
                                  </Label>
                                  <Slider
                                    value={config.shadowOffsetX}
                                    onValueChange={(value) =>
                                      setConfig({
                                        ...config,
                                        shadowOffsetX: value,
                                      })
                                    }
                                    max={20}
                                    min={-20}
                                    step={1}
                                    className="w-full"
                                  />
                                </div>
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Décalage Y: {config.shadowOffsetY[0]}px
                                  </Label>
                                  <Slider
                                    value={config.shadowOffsetY}
                                    onValueChange={(value) =>
                                      setConfig({
                                        ...config,
                                        shadowOffsetY: value,
                                      })
                                    }
                                    max={20}
                                    min={-20}
                                    step={1}
                                    className="w-full"
                                  />
                                </div>
                              </div>
                            )}

                            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                              <div>
                                <Label
                                  htmlFor="innerShadow"
                                  className="text-black font-medium"
                                >
                                  Ombre intérieure
                                </Label>
                                <p className="text-sm text-gray-600">
                                  Ajouter une ombre intérieure au texte
                                </p>
                              </div>
                              <Switch
                                id="innerShadow"
                                checked={config.innerShadow}
                                onCheckedChange={(checked) =>
                                  setConfig({ ...config, innerShadow: checked })
                                }
                              />
                            </div>

                            {config.innerShadow && (
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Couleur ombre int.
                                  </Label>
                                  <div className="flex gap-2">
                                    <input
                                      type="color"
                                      value={config.innerShadowColor}
                                      onChange={(e) =>
                                        setConfig({
                                          ...config,
                                          innerShadowColor: e.target.value,
                                        })
                                      }
                                      className="w-12 h-10 rounded border border-gray-300 bg-gray-100 cursor-pointer"
                                    />
                                    <Input
                                      value={config.innerShadowColor}
                                      onChange={(e) =>
                                        setConfig({
                                          ...config,
                                          innerShadowColor: e.target.value,
                                        })
                                      }
                                      className="bg-gray-100 border-gray-300 text-black flex-1"
                                      placeholder="#000000"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Flou ombre int.: {config.innerShadowBlur[0]}
                                    px
                                  </Label>
                                  <Slider
                                    value={config.innerShadowBlur}
                                    onValueChange={(value) =>
                                      setConfig({
                                        ...config,
                                        innerShadowBlur: value,
                                      })
                                    }
                                    max={20}
                                    min={0}
                                    step={1}
                                    className="w-full"
                                  />
                                </div>
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Décalage X: {config.innerShadowOffsetX[0]}px
                                  </Label>
                                  <Slider
                                    value={config.innerShadowOffsetX}
                                    onValueChange={(value) =>
                                      setConfig({
                                        ...config,
                                        innerShadowOffsetX: value,
                                      })
                                    }
                                    max={20}
                                    min={-20}
                                    step={1}
                                    className="w-full"
                                  />
                                </div>
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Décalage Y: {config.innerShadowOffsetY[0]}px
                                  </Label>
                                  <Slider
                                    value={config.innerShadowOffsetY}
                                    onValueChange={(value) =>
                                      setConfig({
                                        ...config,
                                        innerShadowOffsetY: value,
                                      })
                                    }
                                    max={20}
                                    min={-20}
                                    step={1}
                                    className="w-full"
                                  />
                                </div>
                              </div>
                            )}

                            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                              <div>
                                <Label
                                  htmlFor="textStroke"
                                  className="text-black font-medium"
                                >
                                  Contour du texte
                                </Label>
                                <p className="text-sm text-gray-600">
                                  Ajouter un contour autour du texte
                                </p>
                              </div>
                              <Switch
                                id="textStroke"
                                checked={config.textStroke}
                                onCheckedChange={(checked) =>
                                  setConfig({ ...config, textStroke: checked })
                                }
                              />
                            </div>

                            {config.textStroke && (
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Couleur du contour
                                  </Label>
                                  <div className="flex gap-2">
                                    <input
                                      type="color"
                                      value={config.textStrokeColor}
                                      onChange={(e) =>
                                        setConfig({
                                          ...config,
                                          textStrokeColor: e.target.value,
                                        })
                                      }
                                      className="w-12 h-10 rounded border border-gray-300 bg-gray-100 cursor-pointer"
                                    />
                                    <Input
                                      value={config.textStrokeColor}
                                      onChange={(e) =>
                                        setConfig({
                                          ...config,
                                          textStrokeColor: e.target.value,
                                        })
                                      }
                                      className="bg-gray-100 border-gray-300 text-black flex-1"
                                      placeholder="#000000"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Épaisseur contour:{" "}
                                    {config.textStrokeWidth[0]}px
                                  </Label>
                                  <Slider
                                    value={config.textStrokeWidth}
                                    onValueChange={(value) =>
                                      setConfig({
                                        ...config,
                                        textStrokeWidth: value,
                                      })
                                    }
                                    max={10}
                                    min={1}
                                    step={1}
                                    className="w-full"
                                  />
                                </div>
                              </div>
                            )}

                            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                              <div>
                                <Label
                                  htmlFor="reflection"
                                  className="text-black font-medium"
                                >
                                  Réflexion
                                </Label>
                                <p className="text-sm text-gray-600">
                                  Ajouter un effet de réflexion
                                </p>
                              </div>
                              <Switch
                                id="reflection"
                                checked={config.reflection}
                                onCheckedChange={(checked) =>
                                  setConfig({ ...config, reflection: checked })
                                }
                              />
                            </div>

                            {config.reflection && (
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Opacité réflexion:{" "}
                                    {config.reflectionOpacity[0]}%
                                  </Label>
                                  <Slider
                                    value={config.reflectionOpacity}
                                    onValueChange={(value) =>
                                      setConfig({
                                        ...config,
                                        reflectionOpacity: value,
                                      })
                                    }
                                    max={100}
                                    min={0}
                                    step={5}
                                    className="w-full"
                                  />
                                </div>
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Distance réflexion:{" "}
                                    {config.reflectionDistance[0]}px
                                  </Label>
                                  <Slider
                                    value={config.reflectionDistance}
                                    onValueChange={(value) =>
                                      setConfig({
                                        ...config,
                                        reflectionDistance: value,
                                      })
                                    }
                                    max={50}
                                    min={0}
                                    step={1}
                                    className="w-full"
                                  />
                                </div>
                              </div>
                            )}

                            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                              <div>
                                <Label
                                  htmlFor="glowEffect"
                                  className="text-black font-medium"
                                >
                                  Effet de lueur
                                </Label>
                                <p className="text-sm text-gray-600">
                                  Ajouter une lueur autour du texte
                                </p>
                              </div>
                              <Switch
                                id="glowEffect"
                                checked={config.glowEffect}
                                onCheckedChange={(checked) =>
                                  setConfig({ ...config, glowEffect: checked })
                                }
                              />
                            </div>

                            {config.glowEffect && (
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Couleur de lueur
                                  </Label>
                                  <div className="flex gap-2">
                                    <input
                                      type="color"
                                      value={config.glowColor}
                                      onChange={(e) =>
                                        setConfig({
                                          ...config,
                                          glowColor: e.target.value,
                                        })
                                      }
                                      className="w-12 h-10 rounded border border-gray-300 bg-gray-100 cursor-pointer"
                                    />
                                    <Input
                                      value={config.glowColor}
                                      onChange={(e) =>
                                        setConfig({
                                          ...config,
                                          glowColor: e.target.value,
                                        })
                                      }
                                      className="bg-gray-100 border-gray-300 text-black flex-1"
                                      placeholder="#0000ff"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Flou lueur: {config.glowBlur[0]}px
                                  </Label>
                                  <Slider
                                    value={config.glowBlur}
                                    onValueChange={(value) =>
                                      setConfig({ ...config, glowBlur: value })
                                    }
                                    max={50}
                                    min={0}
                                    step={1}
                                    className="w-full"
                                  />
                                </div>
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Étendue lueur: {config.glowSpread[0]}px
                                  </Label>
                                  <Slider
                                    value={config.glowSpread}
                                    onValueChange={(value) =>
                                      setConfig({
                                        ...config,
                                        glowSpread: value,
                                      })
                                    }
                                    max={20}
                                    min={0}
                                    step={1}
                                    className="w-full"
                                  />
                                </div>
                              </div>
                            )}

                            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                              <div>
                                <Label
                                  htmlFor="embossEffect"
                                  className="text-black font-medium"
                                >
                                  Effet embossé
                                </Label>
                                <p className="text-sm text-gray-600">
                                  Ajouter un effet 3D embossé
                                </p>
                              </div>
                              <Switch
                                id="embossEffect"
                                checked={config.embossEffect}
                                onCheckedChange={(checked) =>
                                  setConfig({
                                    ...config,
                                    embossEffect: checked,
                                  })
                                }
                              />
                            </div>

                            {config.embossEffect && (
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Profondeur: {config.embossDepth[0]}px
                                  </Label>
                                  <Slider
                                    value={config.embossDepth}
                                    onValueChange={(value) =>
                                      setConfig({
                                        ...config,
                                        embossDepth: value,
                                      })
                                    }
                                    max={20}
                                    min={1}
                                    step={1}
                                    className="w-full"
                                  />
                                </div>
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Couleur lumière
                                  </Label>
                                  <div className="flex gap-2">
                                    <input
                                      type="color"
                                      value={config.embossHighlight}
                                      onChange={(e) =>
                                        setConfig({
                                          ...config,
                                          embossHighlight: e.target.value,
                                        })
                                      }
                                      className="w-12 h-10 rounded border border-gray-300 bg-gray-100 cursor-pointer"
                                    />
                                    <Input
                                      value={config.embossHighlight}
                                      onChange={(e) =>
                                        setConfig({
                                          ...config,
                                          embossHighlight: e.target.value,
                                        })
                                      }
                                      className="bg-gray-100 border-gray-300 text-black flex-1"
                                      placeholder="#ffffff"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Couleur ombre
                                  </Label>
                                  <div className="flex gap-2">
                                    <input
                                      type="color"
                                      value={config.embossShadow}
                                      onChange={(e) =>
                                        setConfig({
                                          ...config,
                                          embossShadow: e.target.value,
                                        })
                                      }
                                      className="w-12 h-10 rounded border border-gray-300 bg-gray-100 cursor-pointer"
                                    />
                                    <Input
                                      value={config.embossShadow}
                                      onChange={(e) =>
                                        setConfig({
                                          ...config,
                                          embossShadow: e.target.value,
                                        })
                                      }
                                      className="bg-gray-100 border-gray-300 text-black flex-1"
                                      placeholder="#000000"
                                    />
                                  </div>
                                </div>
                              </div>
                            )}

                            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                              <div>
                                <Label
                                  htmlFor="outlineEffect"
                                  className="text-black font-medium"
                                >
                                  Contour extérieur
                                </Label>
                                <p className="text-sm text-gray-600">
                                  Ajouter un contour autour de l'enseigne
                                </p>
                              </div>
                              <Switch
                                id="outlineEffect"
                                checked={config.outlineEffect}
                                onCheckedChange={(checked) =>
                                  setConfig({
                                    ...config,
                                    outlineEffect: checked,
                                  })
                                }
                              />
                            </div>

                            {config.outlineEffect && (
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Couleur contour
                                  </Label>
                                  <div className="flex gap-2">
                                    <input
                                      type="color"
                                      value={config.outlineColor}
                                      onChange={(e) =>
                                        setConfig({
                                          ...config,
                                          outlineColor: e.target.value,
                                        })
                                      }
                                      className="w-12 h-10 rounded border border-gray-300 bg-gray-100 cursor-pointer"
                                    />
                                    <Input
                                      value={config.outlineColor}
                                      onChange={(e) =>
                                        setConfig({
                                          ...config,
                                          outlineColor: e.target.value,
                                        })
                                      }
                                      className="bg-gray-100 border-gray-300 text-black flex-1"
                                      placeholder="#000000"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Épaisseur: {config.outlineWidth[0]}px
                                  </Label>
                                  <Slider
                                    value={config.outlineWidth}
                                    onValueChange={(value) =>
                                      setConfig({
                                        ...config,
                                        outlineWidth: value,
                                      })
                                    }
                                    max={10}
                                    min={1}
                                    step={1}
                                    className="w-full"
                                  />
                                </div>
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Décalage: {config.outlineOffset[0]}px
                                  </Label>
                                  <Slider
                                    value={config.outlineOffset}
                                    onValueChange={(value) =>
                                      setConfig({
                                        ...config,
                                        outlineOffset: value,
                                      })
                                    }
                                    max={20}
                                    min={0}
                                    step={1}
                                    className="w-full"
                                  />
                                </div>
                              </div>
                            )}

                            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                              <div>
                                <Label
                                  htmlFor="dropShadow"
                                  className="text-black font-medium"
                                >
                                  Ombre portée
                                </Label>
                                <p className="text-sm text-gray-600">
                                  Ajouter une ombre sous l'enseigne
                                </p>
                              </div>
                              <Switch
                                id="dropShadow"
                                checked={config.dropShadow}
                                onCheckedChange={(checked) =>
                                  setConfig({ ...config, dropShadow: checked })
                                }
                              />
                            </div>

                            {config.dropShadow && (
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Couleur ombre
                                  </Label>
                                  <div className="flex gap-2">
                                    <input
                                      type="color"
                                      value={config.dropShadowColor}
                                      onChange={(e) =>
                                        setConfig({
                                          ...config,
                                          dropShadowColor: e.target.value,
                                        })
                                      }
                                      className="w-12 h-10 rounded border border-gray-300 bg-gray-100 cursor-pointer"
                                    />
                                    <Input
                                      value={config.dropShadowColor}
                                      onChange={(e) =>
                                        setConfig({
                                          ...config,
                                          dropShadowColor: e.target.value,
                                        })
                                      }
                                      className="bg-gray-100 border-gray-300 text-black flex-1"
                                      placeholder="#000000"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Flou: {config.dropShadowBlur[0]}px
                                  </Label>
                                  <Slider
                                    value={config.dropShadowBlur}
                                    onValueChange={(value) =>
                                      setConfig({
                                        ...config,
                                        dropShadowBlur: value,
                                      })
                                    }
                                    max={50}
                                    min={0}
                                    step={1}
                                    className="w-full"
                                  />
                                </div>
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Décalage X: {config.dropShadowOffsetX[0]}px
                                  </Label>
                                  <Slider
                                    value={config.dropShadowOffsetX}
                                    onValueChange={(value) =>
                                      setConfig({
                                        ...config,
                                        dropShadowOffsetX: value,
                                      })
                                    }
                                    max={50}
                                    min={-50}
                                    step={1}
                                    className="w-full"
                                  />
                                </div>
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Décalage Y: {config.dropShadowOffsetY[0]}px
                                  </Label>
                                  <Slider
                                    value={config.dropShadowOffsetY}
                                    onValueChange={(value) =>
                                      setConfig({
                                        ...config,
                                        dropShadowOffsetY: value,
                                      })
                                    }
                                    max={50}
                                    min={-50}
                                    step={1}
                                    className="w-full"
                                  />
                                </div>
                              </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Motif de fond
                                </Label>
                                <Select
                                  value={config.patternOverlay}
                                  onValueChange={(value) =>
                                    setConfig({
                                      ...config,
                                      patternOverlay: value,
                                    })
                                  }
                                >
                                  <SelectTrigger className="bg-gray-100 border-gray-300 text-black">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent className="bg-white border-gray-300">
                                    {patternOverlays.map((pattern) => (
                                      <SelectItem
                                        key={pattern.id}
                                        value={pattern.id}
                                      >
                                        {pattern.name}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                              {config.patternOverlay !== "none" && (
                                <>
                                  <div>
                                    <Label className="text-black mb-2 block font-medium">
                                      Couleur motif
                                    </Label>
                                    <div className="flex gap-2">
                                      <input
                                        type="color"
                                        value={config.patternColor}
                                        onChange={(e) =>
                                          setConfig({
                                            ...config,
                                            patternColor: e.target.value,
                                          })
                                        }
                                        className="w-12 h-10 rounded border border-gray-300 bg-gray-100 cursor-pointer"
                                      />
                                      <Input
                                        value={config.patternColor}
                                        onChange={(e) =>
                                          setConfig({
                                            ...config,
                                            patternColor: e.target.value,
                                          })
                                        }
                                        className="bg-gray-100 border-gray-300 text-black flex-1"
                                        placeholder="#000000"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <Label className="text-black mb-2 block font-medium">
                                      Opacité motif: {config.patternOpacity[0]}%
                                    </Label>
                                    <Slider
                                      value={config.patternOpacity}
                                      onValueChange={(value) =>
                                        setConfig({
                                          ...config,
                                          patternOpacity: value,
                                        })
                                      }
                                      max={100}
                                      min={0}
                                      step={5}
                                      className="w-full"
                                    />
                                  </div>
                                </>
                              )}
                            </div>

                            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                              <div>
                                <Label
                                  htmlFor="noiseOverlay"
                                  className="text-black font-medium"
                                >
                                  Bruit numérique
                                </Label>
                                <p className="text-sm text-gray-600">
                                  Ajouter un effet de grain
                                </p>
                              </div>
                              <Switch
                                id="noiseOverlay"
                                checked={config.noiseOverlay}
                                onCheckedChange={(checked) =>
                                  setConfig({
                                    ...config,
                                    noiseOverlay: checked,
                                  })
                                }
                              />
                            </div>

                            {config.noiseOverlay && (
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Intensité: {config.noiseOpacity[0]}%
                                </Label>
                                <Slider
                                  value={config.noiseOpacity}
                                  onValueChange={(value) =>
                                    setConfig({
                                      ...config,
                                      noiseOpacity: value,
                                    })
                                  }
                                  max={30}
                                  min={0}
                                  step={1}
                                  className="w-full"
                                />
                              </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Contraste: {config.contrast[0]}%
                                </Label>
                                <Slider
                                  value={config.contrast}
                                  onValueChange={(value) =>
                                    setConfig({ ...config, contrast: value })
                                  }
                                  max={200}
                                  min={0}
                                  step={5}
                                  className="w-full"
                                />
                              </div>
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Luminosité: {config.brightness[0]}%
                                </Label>
                                <Slider
                                  value={config.brightness}
                                  onValueChange={(value) =>
                                    setConfig({ ...config, brightness: value })
                                  }
                                  max={200}
                                  min={0}
                                  step={5}
                                  className="w-full"
                                />
                              </div>
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Saturation: {config.saturation[0]}%
                                </Label>
                                <Slider
                                  value={config.saturation}
                                  onValueChange={(value) =>
                                    setConfig({ ...config, saturation: value })
                                  }
                                  max={200}
                                  min={0}
                                  step={5}
                                  className="w-full"
                                />
                              </div>
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Teinte: {config.hueRotate[0]}°
                                </Label>
                                <Slider
                                  value={config.hueRotate}
                                  onValueChange={(value) =>
                                    setConfig({ ...config, hueRotate: value })
                                  }
                                  max={360}
                                  min={0}
                                  step={5}
                                  className="w-full"
                                />
                              </div>
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Inversion: {config.invert[0]}%
                                </Label>
                                <Slider
                                  value={config.invert}
                                  onValueChange={(value) =>
                                    setConfig({ ...config, invert: value })
                                  }
                                  max={100}
                                  min={0}
                                  step={5}
                                  className="w-full"
                                />
                              </div>
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Sépia: {config.sepia[0]}%
                                </Label>
                                <Slider
                                  value={config.sepia}
                                  onValueChange={(value) =>
                                    setConfig({ ...config, sepia: value })
                                  }
                                  max={100}
                                  min={0}
                                  step={5}
                                  className="w-full"
                                />
                              </div>
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Niveau de gris: {config.grayscale[0]}%
                                </Label>
                                <Slider
                                  value={config.grayscale}
                                  onValueChange={(value) =>
                                    setConfig({ ...config, grayscale: value })
                                  }
                                  max={100}
                                  min={0}
                                  step={5}
                                  className="w-full"
                                />
                              </div>
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Flou: {config.blur[0]}px
                                </Label>
                                <Slider
                                  value={config.blur}
                                  onValueChange={(value) =>
                                    setConfig({ ...config, blur: value })
                                  }
                                  max={20}
                                  min={0}
                                  step={1}
                                  className="w-full"
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="space-y-6">
                          <div>
                            <Label className="text-black mb-2 block font-medium">
                              Animation
                            </Label>
                            <Select
                              value={config.animation}
                              onValueChange={(value) =>
                                setConfig({ ...config, animation: value })
                              }
                            >
                              <SelectTrigger className="bg-gray-100 border-gray-300 text-black">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className="bg-white border-gray-300">
                                {animations.map((animation) => (
                                  <SelectItem
                                    key={animation.id}
                                    value={animation.id}
                                  >
                                    {animation.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          {config.animation !== "none" && (
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Durée: {config.animationDuration[0]}s
                                </Label>
                                <Slider
                                  value={config.animationDuration}
                                  onValueChange={(value) =>
                                    setConfig({
                                      ...config,
                                      animationDuration: value,
                                    })
                                  }
                                  max={10}
                                  min={0.5}
                                  step={0.5}
                                  className="w-full"
                                />
                              </div>
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Délai: {config.animationDelay[0]}s
                                </Label>
                                <Slider
                                  value={config.animationDelay}
                                  onValueChange={(value) =>
                                    setConfig({
                                      ...config,
                                      animationDelay: value,
                                    })
                                  }
                                  max={5}
                                  min={0}
                                  step={0.5}
                                  className="w-full"
                                />
                              </div>
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Répétition
                                </Label>
                                <Select
                                  value={config.animationIteration}
                                  onValueChange={(value) =>
                                    setConfig({
                                      ...config,
                                      animationIteration: value,
                                    })
                                  }
                                >
                                  <SelectTrigger className="bg-gray-100 border-gray-300 text-black">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent className="bg-white border-gray-300">
                                    {animationIterations.map((iteration) => (
                                      <SelectItem
                                        key={iteration.id}
                                        value={iteration.id}
                                      >
                                        {iteration.name}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Interpolation
                                </Label>
                                <Select
                                  value={config.animationTiming}
                                  onValueChange={(value) =>
                                    setConfig({
                                      ...config,
                                      animationTiming: value,
                                    })
                                  }
                                >
                                  <SelectTrigger className="bg-gray-100 border-gray-300 text-black">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent className="bg-white border-gray-300">
                                    {animationTimings.map((timing) => (
                                      <SelectItem
                                        key={timing.id}
                                        value={timing.id}
                                      >
                                        {timing.name}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="space-y-6">
                          <div>
                            <Label className="text-black mb-2 block font-medium">
                              Effet au survol
                            </Label>
                            <Select
                              value={config.hoverEffect}
                              onValueChange={(value) =>
                                setConfig({ ...config, hoverEffect: value })
                              }
                            >
                              <SelectTrigger className="bg-gray-100 border-gray-300 text-black">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className="bg-white border-gray-300">
                                {hoverEffects.map((effect) => (
                                  <SelectItem key={effect.id} value={effect.id}>
                                    {effect.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          {config.hoverEffect !== "none" && (
                            <div className="grid md:grid-cols-2 gap-6">
                              {config.hoverEffect === "color" && (
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Couleur survol
                                  </Label>
                                  <div className="flex gap-2">
                                    <input
                                      type="color"
                                      value={config.hoverColor}
                                      onChange={(e) =>
                                        setConfig({
                                          ...config,
                                          hoverColor: e.target.value,
                                        })
                                      }
                                      className="w-12 h-10 rounded border border-gray-300 bg-gray-100 cursor-pointer"
                                    />
                                    <Input
                                      value={config.hoverColor}
                                      onChange={(e) =>
                                        setConfig({
                                          ...config,
                                          hoverColor: e.target.value,
                                        })
                                      }
                                      className="bg-gray-100 border-gray-300 text-black flex-1"
                                      placeholder="#000000"
                                    />
                                  </div>
                                </div>
                              )}
                              {config.hoverEffect === "scale" && (
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Échelle: {config.hoverScale[0]}x
                                  </Label>
                                  <Slider
                                    value={config.hoverScale}
                                    onValueChange={(value) =>
                                      setConfig({
                                        ...config,
                                        hoverScale: value,
                                      })
                                    }
                                    max={2}
                                    min={1}
                                    step={0.1}
                                    className="w-full"
                                  />
                                </div>
                              )}
                              {config.hoverEffect === "rotate" && (
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Rotation: {config.hoverRotate[0]}°
                                  </Label>
                                  <Slider
                                    value={config.hoverRotate}
                                    onValueChange={(value) =>
                                      setConfig({
                                        ...config,
                                        hoverRotate: value,
                                      })
                                    }
                                    max={360}
                                    min={-360}
                                    step={5}
                                    className="w-full"
                                  />
                                </div>
                              )}
                              {config.hoverEffect === "translate" && (
                                <>
                                  <div>
                                    <Label className="text-black mb-2 block font-medium">
                                      Déplacement X: {config.hoverTranslateX[0]}
                                      px
                                    </Label>
                                    <Slider
                                      value={config.hoverTranslateX}
                                      onValueChange={(value) =>
                                        setConfig({
                                          ...config,
                                          hoverTranslateX: value,
                                        })
                                      }
                                      max={50}
                                      min={-50}
                                      step={1}
                                      className="w-full"
                                    />
                                  </div>
                                  <div>
                                    <Label className="text-black mb-2 block font-medium">
                                      Déplacement Y: {config.hoverTranslateY[0]}
                                      px
                                    </Label>
                                    <Slider
                                      value={config.hoverTranslateY}
                                      onValueChange={(value) =>
                                        setConfig({
                                          ...config,
                                          hoverTranslateY: value,
                                        })
                                      }
                                      max={50}
                                      min={-50}
                                      step={1}
                                      className="w-full"
                                    />
                                  </div>
                                </>
                              )}
                            </div>
                          )}
                        </div>

                        <Button
                          variant="ghost"
                          className="w-full flex items-center justify-between text-gray-600 hover:text-black"
                          onClick={toggleResponsiveOptions}
                        >
                          <span className="flex items-center gap-2">
                            <Monitor className="h-4 w-4" />
                            Options responsives
                          </span>
                          {showResponsiveOptions ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </Button>

                        {showResponsiveOptions && (
                          <div className="space-y-6 p-4 bg-gray-100 rounded-lg">
                            <div>
                              <Label className="text-black mb-2 block font-medium">
                                Comportement responsive
                              </Label>
                              <Select
                                value={config.responsiveBehavior}
                                onValueChange={(value) =>
                                  setConfig({
                                    ...config,
                                    responsiveBehavior: value,
                                  })
                                }
                              >
                                <SelectTrigger className="bg-gray-100 border-gray-300 text-black">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-white border-gray-300">
                                  {responsiveBehaviors.map((behavior) => (
                                    <SelectItem
                                      key={behavior.id}
                                      value={behavior.id}
                                    >
                                      {behavior.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Taille mobile: {config.mobileFontSize[0]}%
                                </Label>
                                <Slider
                                  value={config.mobileFontSize}
                                  onValueChange={(value) =>
                                    setConfig({
                                      ...config,
                                      mobileFontSize: value,
                                    })
                                  }
                                  max={100}
                                  min={50}
                                  step={5}
                                  className="w-full"
                                />
                              </div>
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Taille tablette: {config.tabletFontSize[0]}%
                                </Label>
                                <Slider
                                  value={config.tabletFontSize}
                                  onValueChange={(value) =>
                                    setConfig({
                                      ...config,
                                      tabletFontSize: value,
                                    })
                                  }
                                  max={100}
                                  min={50}
                                  step={5}
                                  className="w-full"
                                />
                              </div>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                              <div>
                                <Label
                                  htmlFor="darkMode"
                                  className="text-black font-medium"
                                >
                                  Mode sombre
                                </Label>
                                <p className="text-sm text-gray-600">
                                  Activer le support du mode sombre
                                </p>
                              </div>
                              <Switch
                                id="darkMode"
                                checked={config.darkModeEnabled}
                                onCheckedChange={(checked) =>
                                  setConfig({
                                    ...config,
                                    darkModeEnabled: checked,
                                  })
                                }
                              />
                            </div>

                            {config.darkModeEnabled && (
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Couleur texte (sombre)
                                  </Label>
                                  <div className="flex gap-2">
                                    <input
                                      type="color"
                                      value={config.darkModeColor}
                                      onChange={(e) =>
                                        setConfig({
                                          ...config,
                                          darkModeColor: e.target.value,
                                        })
                                      }
                                      className="w-12 h-10 rounded border border-gray-300 bg-gray-100 cursor-pointer"
                                    />
                                    <Input
                                      value={config.darkModeColor}
                                      onChange={(e) =>
                                        setConfig({
                                          ...config,
                                          darkModeColor: e.target.value,
                                        })
                                      }
                                      className="bg-gray-100 border-gray-300 text-black flex-1"
                                      placeholder="#ffffff"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <Label className="text-black mb-2 block font-medium">
                                    Fond (sombre)
                                  </Label>
                                  <div className="flex gap-2">
                                    <input
                                      type="color"
                                      value={config.darkModeBackground}
                                      onChange={(e) =>
                                        setConfig({
                                          ...config,
                                          darkModeBackground: e.target.value,
                                        })
                                      }
                                      className="w-12 h-10 rounded border border-gray-300 bg-gray-100 cursor-pointer"
                                    />
                                    <Input
                                      value={config.darkModeBackground}
                                      onChange={(e) =>
                                        setConfig({
                                          ...config,
                                          darkModeBackground: e.target.value,
                                        })
                                      }
                                      className="bg-gray-100 border-gray-300 text-black flex-1"
                                      placeholder="#121212"
                                    />
                                  </div>
                                </div>
                              </div>
                            )}

                            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                              <div>
                                <Label
                                  htmlFor="parallax"
                                  className="text-black font-medium"
                                >
                                  Effet parallaxe
                                </Label>
                                <p className="text-sm text-gray-600">
                                  Ajouter un effet de déplacement au scroll
                                </p>
                              </div>
                              <Switch
                                id="parallax"
                                checked={config.parallaxEffect}
                                onCheckedChange={(checked) =>
                                  setConfig({
                                    ...config,
                                    parallaxEffect: checked,
                                  })
                                }
                              />
                            </div>

                            {config.parallaxEffect && (
                              <div>
                                <Label className="text-black mb-2 block font-medium">
                                  Intensité: {config.parallaxIntensity[0]}%
                                </Label>
                                <Slider
                                  value={config.parallaxIntensity}
                                  onValueChange={(value) =>
                                    setConfig({
                                      ...config,
                                      parallaxIntensity: value,
                                    })
                                  }
                                  max={100}
                                  min={0}
                                  step={5}
                                  className="w-full"
                                />
                              </div>
                            )}

                            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                              <div>
                                <Label
                                  htmlFor="accessibility"
                                  className="text-black font-medium"
                                >
                                  Mode accessibilité
                                </Label>
                                <p className="text-sm text-gray-600">
                                  Optimiser pour les lecteurs d'écran
                                </p>
                              </div>
                              <Switch
                                id="accessibility"
                                checked={config.accessibilityMode}
                                onCheckedChange={(checked) =>
                                  setConfig({
                                    ...config,
                                    accessibilityMode: checked,
                                  })
                                }
                              />
                            </div>

                            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                              <div>
                                <Label
                                  htmlFor="highContrast"
                                  className="text-black font-medium"
                                >
                                  Haut contraste
                                </Label>
                                <p className="text-sm text-gray-600">
                                  Améliorer la lisibilité
                                </p>
                              </div>
                              <Switch
                                id="highContrast"
                                checked={config.highContrastMode}
                                onCheckedChange={(checked) =>
                                  setConfig({
                                    ...config,
                                    highContrastMode: checked,
                                  })
                                }
                              />
                            </div>

                            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                              <div>
                                <Label
                                  htmlFor="print"
                                  className="text-black font-medium"
                                >
                                  Optimisé impression
                                </Label>
                                <p className="text-sm text-gray-600">
                                  Adapter pour l'impression
                                </p>
                              </div>
                              <Switch
                                id="print"
                                checked={config.printOptimized}
                                onCheckedChange={(checked) =>
                                  setConfig({
                                    ...config,
                                    printOptimized: checked,
                                  })
                                }
                              />
                            </div>

                            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                              <div>
                                <Label
                                  htmlFor="seo"
                                  className="text-black font-medium"
                                >
                                  Optimisé SEO
                                </Label>
                                <p className="text-sm text-gray-600">
                                  Améliorer le référencement
                                </p>
                              </div>
                              <Switch
                                id="seo"
                                checked={config.seoOptimized}
                                onCheckedChange={(checked) =>
                                  setConfig({
                                    ...config,
                                    seoOptimized: checked,
                                  })
                                }
                              />
                            </div>

                            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                              <div>
                                <Label
                                  htmlFor="lazy"
                                  className="text-black font-medium"
                                >
                                  Chargement différé
                                </Label>
                                <p className="text-sm text-gray-600">
                                  Charger l'enseigne en dernier
                                </p>
                              </div>
                              <Switch
                                id="lazy"
                                checked={config.lazyLoading}
                                onCheckedChange={(checked) =>
                                  setConfig({ ...config, lazyLoading: checked })
                                }
                              />
                            </div>

                            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                              <div>
                                <Label
                                  htmlFor="performance"
                                  className="text-black font-medium"
                                >
                                  Mode performance
                                </Label>
                                <p className="text-sm text-gray-600">
                                  Optimiser pour les performances
                                </p>
                              </div>
                              <Switch
                                id="performance"
                                checked={config.performanceMode}
                                onCheckedChange={(checked) =>
                                  setConfig({
                                    ...config,
                                    performanceMode: checked,
                                  })
                                }
                              />
                            </div>

                            <div>
                              <Label className="text-black mb-2 block font-medium">
                                CSS personnalisé
                              </Label>
                              <Textarea
                                value={config.customCSS}
                                onChange={(e) =>
                                  setConfig({
                                    ...config,
                                    customCSS: e.target.value,
                                  })
                                }
                                className="bg-gray-100 border-gray-300 text-black font-mono text-sm h-32"
                                placeholder="Ajoutez votre CSS personnalisé ici..."
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </TabsContent>

                    <TabsContent value="material" className="space-y-6 mt-6">
                      <div>
                        <Label className="text-black mb-3 block font-medium">
                          Matériau
                        </Label>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {materials.map((material) => (
                            <Card
                              key={material.id}
                              className={`cursor-pointer transition-all duration-200 ${
                                config.material === material.id
                                  ? "bg-blue-500/20 border-blue-500"
                                  : "bg-gray-100 border-gray-300 hover:border-gray-400"
                              }`}
                              onClick={() =>
                                setConfig({ ...config, material: material.id })
                              }
                            >
                              <CardContent className="p-4">
                                <div className="flex items-start gap-3">
                                  <div className="text-2xl mt-1">
                                    {material.icon}
                                  </div>
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <h3 className="font-bold text-black">
                                        {material.name}
                                      </h3>
                                      {material.id === "pvc" && (
                                        <Badge
                                          variant="secondary"
                                          className="text-xs"
                                        >
                                          Populaire
                                        </Badge>
                                      )}
                                    </div>
                                    <p className="text-xs text-gray-600 mb-2">
                                      {material.description}
                                    </p>
                                    <div className="flex gap-4 text-xs">
                                      <div className="flex items-center gap-1">
                                        <Shield className="h-3 w-3" />
                                        <span>
                                          Durabilité:{" "}
                                          {"★".repeat(material.durability)}
                                        </span>
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <Box className="h-3 w-3" />
                                        <span>
                                          Poids: {"⚖️".repeat(material.weight)}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label className="text-black mb-2 block font-medium">
                            Hauteur: {config.height[0]}cm
                          </Label>
                          <Slider
                            value={config.height}
                            onValueChange={(value) =>
                              setConfig({ ...config, height: value })
                            }
                            max={300}
                            min={5}
                            step={5}
                            className="w-full"
                          />
                        </div>
                        <div>
                          <Label className="text-black mb-2 block font-medium">
                            Largeur: {config.width[0]}cm
                          </Label>
                          <Slider
                            value={config.width}
                            onValueChange={(value) =>
                              setConfig({ ...config, width: value })
                            }
                            max={600}
                            min={10}
                            step={10}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label className="text-black mb-2 block font-medium">
                            Épaisseur
                          </Label>
                          <Select
                            value={config.thickness}
                            onValueChange={(value) =>
                              setConfig({ ...config, thickness: value })
                            }
                          >
                            <SelectTrigger className="bg-gray-100 border-gray-300 text-black">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-gray-300">
                              <SelectItem value="3mm">
                                3mm - Standard
                              </SelectItem>
                              <SelectItem value="5mm">
                                5mm - Renforcé
                              </SelectItem>
                              <SelectItem value="10mm">
                                10mm - Premium
                              </SelectItem>
                              <SelectItem value="20mm">20mm - Ultra</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label className="text-black mb-2 block font-medium">
                            Finition
                          </Label>
                          <Select
                            value={config.finish}
                            onValueChange={(value) =>
                              setConfig({ ...config, finish: value })
                            }
                          >
                            <SelectTrigger className="bg-gray-100 border-gray-300 text-black">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-gray-300">
                              {finishes.map((finish) => (
                                <SelectItem key={finish.id} value={finish.id}>
                                  {finish.name} - {finish.description}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label className="text-black mb-2 block font-medium">
                            Traitement des bords
                          </Label>
                          <Select
                            value={config.edgeType}
                            onValueChange={(value) =>
                              setConfig({ ...config, edgeType: value })
                            }
                          >
                            <SelectTrigger className="bg-gray-100 border-gray-300 text-black">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-gray-300">
                              {edgeTypes.map((edge) => (
                                <SelectItem key={edge.id} value={edge.id}>
                                  {edge.name} - {edge.description}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label className="text-black mb-2 block font-medium">
                            Système de fixation
                          </Label>
                          <Select
                            value={config.hangingSystem}
                            onValueChange={(value) =>
                              setConfig({ ...config, hangingSystem: value })
                            }
                          >
                            <SelectTrigger className="bg-gray-100 border-gray-300 text-black">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-gray-300">
                              {hangingSystems.map((system) => (
                                <SelectItem key={system.id} value={system.id}>
                                  {system.name} - {system.description}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="lighting" className="space-y-6 mt-6">
                      <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                        <div>
                          <Label
                            htmlFor="led"
                            className="text-black font-medium"
                          >
                            Éclairage LED
                          </Label>
                          <p className="text-sm text-gray-600">
                            Ajouter un éclairage à votre enseigne
                          </p>
                        </div>
                        <Switch
                          id="led"
                          checked={config.ledLighting}
                          onCheckedChange={(checked) =>
                            setConfig({ ...config, ledLighting: checked })
                          }
                        />
                      </div>

                      {config.ledLighting && (
                        <>
                          <div>
                            <Label className="text-black mb-3 block font-medium">
                              Type d'éclairage
                            </Label>
                            <div className="grid sm:grid-cols-2 gap-3">
                              {ledTypes.map((led) => (
                                <Card
                                  key={led.id}
                                  className={`cursor-pointer transition-all duration-200 ${
                                    config.ledType === led.id
                                      ? "bg-blue-500/20 border-blue-500"
                                      : "bg-gray-100 border-gray-300 hover:border-gray-400"
                                  }`}
                                  onClick={() =>
                                    setConfig({ ...config, ledType: led.id })
                                  }
                                >
                                  <CardContent className="p-4">
                                    <div className="flex items-center gap-3">
                                      <div
                                        className="w-6 h-6 rounded-full border-2 border-gray-300 flex-shrink-0"
                                        style={{
                                          background:
                                            led.id === "color"
                                              ? config.ledColor
                                              : led.color,
                                        }}
                                      />
                                      <div>
                                        <h3 className="font-bold text-black text-sm">
                                          {led.name}
                                        </h3>
                                        <p className="text-xs text-gray-600">
                                          {led.description}
                                        </p>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>

                          {config.ledType === "color" && (
                            <div>
                              <Label className="text-black mb-2 block font-medium">
                                Couleur LED
                              </Label>
                              <div className="flex gap-2">
                                <input
                                  type="color"
                                  value={config.ledColor}
                                  onChange={(e) =>
                                    setConfig({
                                      ...config,
                                      ledColor: e.target.value,
                                    })
                                  }
                                  className="w-12 h-10 rounded border border-gray-300 bg-gray-100 cursor-pointer"
                                />
                                <Input
                                  value={config.ledColor}
                                  onChange={(e) =>
                                    setConfig({
                                      ...config,
                                      ledColor: e.target.value,
                                    })
                                  }
                                  className="bg-gray-100 border-gray-300 text-black flex-1"
                                  placeholder="#ff0000"
                                />
                              </div>
                            </div>
                          )}

                          <div>
                            <Label className="text-black mb-2 block font-medium">
                              Densité LED
                            </Label>
                            <Select
                              value={config.ledDensity}
                              onValueChange={(value) =>
                                setConfig({ ...config, ledDensity: value })
                              }
                            >
                              <SelectTrigger className="bg-gray-100 border-gray-300 text-black">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className="bg-white border-gray-300">
                                <SelectItem value="low">
                                  Faible - Économique (30 LEDs/m)
                                </SelectItem>
                                <SelectItem value="standard">
                                  Standard - Recommandé (60 LEDs/m)
                                </SelectItem>
                                <SelectItem value="high">
                                  Élevée - Très lumineux (120 LEDs/m)
                                </SelectItem>
                                <SelectItem value="ultra">
                                  Ultra - Maximum (240 LEDs/m)
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                              <div>
                                <Label
                                  htmlFor="backlight"
                                  className="text-black font-medium"
                                >
                                  Rétro-éclairage
                                </Label>
                                <p className="text-sm text-gray-600">
                                  Éclairage arrière pour effet halo
                                </p>
                              </div>
                              <Switch
                                id="backlight"
                                checked={config.backLighting}
                                onCheckedChange={(checked) =>
                                  setConfig({
                                    ...config,
                                    backLighting: checked,
                                  })
                                }
                              />
                            </div>
                            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                              <div>
                                <Label
                                  htmlFor="remote"
                                  className="text-black font-medium"
                                >
                                  Télécommande
                                </Label>
                                <p className="text-sm text-gray-600">
                                  Contrôle à distance des LEDs
                                </p>
                              </div>
                              <Switch
                                id="remote"
                                checked={config.remoteControl}
                                onCheckedChange={(checked) =>
                                  setConfig({
                                    ...config,
                                    remoteControl: checked,
                                  })
                                }
                              />
                            </div>
                          </div>

                          <div>
                            <Label className="text-black mb-2 block font-medium">
                              Alimentation
                            </Label>
                            <Select
                              value={config.powerSupply}
                              onValueChange={(value) =>
                                setConfig({ ...config, powerSupply: value })
                              }
                            >
                              <SelectTrigger className="bg-gray-100 border-gray-300 text-black">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className="bg-white border-gray-300">
                                {powerSupplies.map((power) => (
                                  <SelectItem key={power.id} value={power.id}>
                                    {power.name} - {power.description}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </>
                      )}
                    </TabsContent>

                    <TabsContent value="options" className="space-y-6 mt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label className="text-black mb-2 block font-medium">
                            Fixation
                          </Label>
                          <Select
                            value={config.mounting}
                            onValueChange={(value) =>
                              setConfig({ ...config, mounting: value })
                            }
                          >
                            <SelectTrigger className="bg-gray-100 border-gray-300 text-black">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-gray-300">
                              <SelectItem value="wall">Murale</SelectItem>
                              <SelectItem value="ceiling">Plafond</SelectItem>
                              <SelectItem value="post">Sur poteau</SelectItem>
                              <SelectItem value="window">Vitrine</SelectItem>
                              <SelectItem value="freestanding">
                                Autoportante
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label className="text-black mb-2 block font-medium">
                            Résistance aux intempéries
                          </Label>
                          <Select
                            value={config.weatherResistance}
                            onValueChange={(value) =>
                              setConfig({ ...config, weatherResistance: value })
                            }
                          >
                            <SelectTrigger className="bg-gray-100 border-gray-300 text-black">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-gray-300">
                              <SelectItem value="ip44">
                                IP44 - Intérieur seulement
                              </SelectItem>
                              <SelectItem value="ip65">
                                IP65 - Extérieur standard
                              </SelectItem>
                              <SelectItem value="ip67">
                                IP67 - Extérieur renforcé
                              </SelectItem>
                              <SelectItem value="ip68">
                                IP68 - Immersion possible
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label className="text-black mb-2 block font-medium">
                          Quantité: {config.quantity}
                        </Label>
                        <Slider
                          value={[config.quantity]}
                          onValueChange={(value) =>
                            setConfig({ ...config, quantity: value[0] })
                          }
                          max={20}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                          <div>
                            <Label
                              htmlFor="installation"
                              className="text-black font-medium"
                            >
                              Installation incluse
                            </Label>
                            <p className="text-sm text-gray-600">
                              Par nos techniciens qualifiés
                            </p>
                          </div>
                          <Switch
                            id="installation"
                            checked={config.installation}
                            onCheckedChange={(checked) =>
                              setConfig({ ...config, installation: checked })
                            }
                          />
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                          <div>
                            <Label
                              htmlFor="urgent"
                              className="text-black font-medium"
                            >
                              Livraison express
                            </Label>
                            <p className="text-sm text-gray-600">
                              Livraison en 2-3 jours ouvrables
                            </p>
                          </div>
                          <Switch
                            id="urgent"
                            checked={config.urgentDelivery}
                            onCheckedChange={(checked) =>
                              setConfig({ ...config, urgentDelivery: checked })
                            }
                          />
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                          <div>
                            <Label
                              htmlFor="custom"
                              className="text-black font-medium"
                            >
                              Design personnalisé
                            </Label>
                            <p className="text-sm text-gray-600">
                              Création graphique sur mesure
                            </p>
                          </div>
                          <Switch
                            id="custom"
                            checked={config.customDesign}
                            onCheckedChange={(checked) =>
                              setConfig({ ...config, customDesign: checked })
                            }
                          />
                        </div>
                      </div>

                      {config.customDesign && (
                        <div>
                          <Label className="text-black mb-2 block font-medium">
                            Notes de design
                          </Label>
                          <Textarea
                            value={config.designNotes}
                            onChange={(e) =>
                              setConfig({
                                ...config,
                                designNotes: e.target.value,
                              })
                            }
                            className="bg-gray-100 border-gray-300 text-black"
                            placeholder="Décrivez vos besoins spécifiques, logos à intégrer, styles particuliers..."
                            rows={4}
                          />
                        </div>
                      )}

                      <div>
                        <Label className="text-black mb-2 block font-medium">
                          Garantie
                        </Label>
                        <Select
                          value={config.warranty}
                          onValueChange={(value) =>
                            setConfig({ ...config, warranty: value })
                          }
                        >
                          <SelectTrigger className="bg-gray-100 border-gray-300 text-black">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-white border-gray-300">
                            <SelectItem value="1year">
                              1 an - Standard
                            </SelectItem>
                            <SelectItem value="2years">
                              2 ans - Recommandé
                            </SelectItem>
                            <SelectItem value="3years">
                              3 ans - Premium
                            </SelectItem>
                            <SelectItem value="5years">
                              5 ans - Professionnel
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-white border-gray-300">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="h-5 w-5 text-blue-500" />
                      Aperçu
                    </CardTitle>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsPreview3D(!isPreview3D)}
                        className="border-gray-300"
                      >
                        {isPreview3D ? "2D" : "3D"}
                      </Button>
                      {isPreview3D && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={resetPreviewRotation}
                          className="border-gray-300"
                        >
                          Réinitialiser
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent
                  className="flex items-center justify-center min-h-64 bg-gray-100 rounded-lg relative overflow-hidden"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={resetPreviewRotation}
                >
                  {isPreview3D && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-50"></div>
                  )}

                  <div className="relative z-10 text-center p-6">
                    <div
                      className={`font-bold mb-4 transition-all duration-300 ${
                        config.ledLighting
                          ? "drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
                          : ""
                      }`}
                      style={getTextStyle()}
                    >
                      {config.text}
                    </div>

                    <div className="text-sm text-gray-600 space-y-1 mt-6">
                      <div className="flex justify-between max-w-xs mx-auto">
                        <span>Dimensions:</span>
                        <span className="text-black">
                          {config.width[0]}×{config.height[0]}cm
                        </span>
                      </div>
                      <div className="flex justify-between max-w-xs mx-auto">
                        <span>Matériau:</span>
                        <span className="text-black">
                          {
                            materials.find((m) => m.id === config.material)
                              ?.name
                          }
                        </span>
                      </div>
                      {config.ledLighting && (
                        <div className="flex justify-between max-w-xs mx-auto">
                          <span>Éclairage:</span>
                          <span className="text-blue-500">
                            {
                              ledTypes.find((l) => l.id === config.ledType)
                                ?.name
                            }
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between max-w-xs mx-auto">
                        <span>Finition:</span>
                        <span className="text-black">
                          {finishes.find((f) => f.id === config.finish)?.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/20 to-blue-500/30 border-blue-500/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-blue-500" />
                    Devis Détaillé
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Base:</span>
                      <span>{priceBreakdown.base}MAD</span>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        Matériau (
                        {materials.find((m) => m.id === config.material)?.name}
                        ):
                      </span>
                      <span>{priceBreakdown.material}MAD</span>
                    </div>
                    {config.ledLighting && (
                      <div className="flex justify-between">
                        <span>
                          Éclairage (
                          {ledTypes.find((l) => l.id === config.ledType)?.name}
                          ):
                        </span>
                        <span>{priceBreakdown.led}MAD</span>
                      </div>
                    )}
                    {priceBreakdown.options > 0 && (
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span>Options:</span>
                          <span>{priceBreakdown.options}MAD</span>
                        </div>
                        <div className="text-xs text-gray-600 pl-4">
                          {config.finish !== "matte" && (
                            <div>
                              • Finition{" "}
                              {
                                finishes.find((f) => f.id === config.finish)
                                  ?.name
                              }
                            </div>
                          )}
                          {config.edgeType !== "standard" && (
                            <div>
                              • Bords{" "}
                              {
                                edgeTypes.find((e) => e.id === config.edgeType)
                                  ?.name
                              }
                            </div>
                          )}
                          {config.backLighting && <div>• Rétro-éclairage</div>}
                          {config.weatherResistance === "ip67" && (
                            <div>• Résistance IP67</div>
                          )}
                          {config.urgentDelivery && (
                            <div>• Livraison express</div>
                          )}
                          {config.customDesign && (
                            <div>• Design personnalisé</div>
                          )}
                          {config.remoteControl && <div>• Télécommande</div>}
                          {config.hangingSystem !== "none" && (
                            <div>
                              • Système de fixation:{" "}
                              {
                                hangingSystems.find(
                                  (h) => h.id === config.hangingSystem
                                )?.name
                              }
                            </div>
                          )}
                          {config.powerSupply !== "none" && (
                            <div>
                              • Alimentation:{" "}
                              {
                                powerSupplies.find(
                                  (p) => p.id === config.powerSupply
                                )?.name
                              }
                            </div>
                          )}
                          {config.textShadow && <div>• Ombre du texte</div>}
                          {config.gradient && <div>• Dégradé de couleur</div>}
                          {config.textStroke && <div>• Contour du texte</div>}
                          {config.innerShadow && <div>• Ombre intérieure</div>}
                          {config.reflection && <div>• Réflexion</div>}
                          {config.glowEffect && <div>• Effet de lueur</div>}
                          {config.embossEffect && <div>• Effet embossé</div>}
                          {config.outlineEffect && (
                            <div>• Contour extérieur</div>
                          )}
                          {config.dropShadow && <div>• Ombre portée</div>}
                          {config.patternOverlay !== "none" && (
                            <div>• Motif de fond</div>
                          )}
                          {config.noiseOverlay && <div>• Bruit numérique</div>}
                          {config.backgroundImage && <div>• Image de fond</div>}
                          {config.animation !== "none" && (
                            <div>• Animation</div>
                          )}
                          {config.hoverEffect !== "none" && (
                            <div>• Effet au survol</div>
                          )}
                          {config.parallaxEffect && (
                            <div>• Effet parallaxe</div>
                          )}
                          {config.darkModeEnabled && <div>• Mode sombre</div>}
                          {config.accessibilityMode && (
                            <div>• Mode accessibilité</div>
                          )}
                          {config.highContrastMode && (
                            <div>• Haut contraste</div>
                          )}
                          {config.printOptimized && (
                            <div>• Optimisé impression</div>
                          )}
                          {config.seoOptimized && <div>• Optimisé SEO</div>}
                          {config.lazyLoading && (
                            <div>• Chargement différé</div>
                          )}
                          {config.performanceMode && (
                            <div>• Mode performance</div>
                          )}
                        </div>
                      </div>
                    )}
                    {config.installation && (
                      <div className="flex justify-between">
                        <span>Installation:</span>
                        <span>{priceBreakdown.installation} MAD</span>
                      </div>
                    )}
                    {config.quantity > 1 && (
                      <div className="flex justify-between">
                        <span>Quantité:</span>
                        <span>×{config.quantity}</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-blue-500/30 pt-4">
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>Total HT:</span>
                      <span className="text-blue-500">{price} MAD</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      TVA (20%): {Math.round(price * 0.2)} MAD
                    </p>
                    <p className="text-lg font-bold text-black mt-1">
                      Total TTC: {Math.round(price * 1.2)} MAD
                    </p>
                  </div>

                  <div className="space-y-2 pt-4">
                    <Button className="w-full bg-blue-500 hover:bg-blue-500/90 text-lg py-3">
                      <Download className="mr-2 h-4 w-4" />
                      Télécharger le devis
                    </Button>
                    <Link href={"/demande-devis"}>
                      <Button
                        variant="outline"
                        className="w-full border-blue-500 text-blue-500/80 hover:bg-blue-500 hover:text-white bg-transparent"
                      >
                        Demander un devis détaillé
                      </Button>
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-300">
                    <div className="text-center">
                      <Truck className="h-6 w-6 text-blue-500 mx-auto mb-1" />
                      <p className="text-xs">Livraison</p>
                      <p className="text-xs text-gray-600">
                        {config.urgentDelivery ? "2-3 jours" : "5-7 jours"}
                      </p>
                    </div>
                    <div className="text-center">
                      <Shield className="h-6 w-6 text-blue-500 mx-auto mb-1" />
                      <p className="text-xs">Garantie</p>
                      <p className="text-xs text-gray-600">
                        {config.warranty === "1year"
                          ? "1 an"
                          : config.warranty === "2years"
                          ? "2 ans"
                          : config.warranty === "3years"
                          ? "3 ans"
                          : "5 ans"}
                      </p>
                    </div>
                    <div className="text-center">
                      <Star className="h-6 w-6 text-blue-500 mx-auto mb-1" />
                      <p className="text-xs">Qualité</p>
                      <p className="text-xs text-gray-600">Professionnelle</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-100 border-gray-300">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/20 p-2 rounded-full">
                      <Info className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-black mb-1">
                        Besoin d'aide ?
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Notre équipe est là pour vous conseiller
                      </p>
                      <div className="space-y-2">
                        <a
                          href="tel:+33123456789"
                          className="flex items-center gap-2 text-blue-500 hover:text-blue-500/70 transition-colors"
                        >
                          <span className="bg-gray-200 p-2 rounded-full">
                            <Sparkles className="h-4 w-4" />
                          </span>
                          <span>01 23 45 67 89</span>
                        </a>
                        <a
                          href="mailto:contact@enseigne42.fr"
                          className="flex items-center gap-2 text-blue-500 hover:text-blue-500/70 transition-colors"
                        >
                          <span className="bg-gray-200 p-2 rounded-full">
                            <Calendar className="h-4 w-4" />
                          </span>
                          <span>contact@enseigne42.fr</span>
                        </a>
                      </div>
                    </div>
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
