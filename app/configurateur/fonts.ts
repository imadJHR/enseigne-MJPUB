import {
  Montserrat,
  Poppins,
  Outfit,
  Oswald,
  Bebas_Neue,
  Anton,
  Archivo_Black,
  Roboto_Condensed,
  Playfair_Display,
  DM_Serif_Display,
  Cormorant_Garamond,
  Cinzel,
  Lora,
  Merriweather,
  Pacifico,
  Lobster,
  Dancing_Script,
  Caveat,
  Satisfy,
  Great_Vibes,
} from "next/font/google";

const signFont0 = Montserrat({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sign-montserrat",
  display: "swap",
  preload: false,
});
const signFont1 = Poppins({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sign-poppins",
  display: "swap",
  preload: false,
});
const signFont2 = Outfit({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sign-outfit",
  display: "swap",
  preload: false,
});
const signFont3 = Oswald({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sign-oswald",
  display: "swap",
  preload: false,
});
const signFont4 = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sign-bebas-neue",
  display: "swap",
  preload: false,
});
const signFont5 = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sign-anton",
  display: "swap",
  preload: false,
});
const signFont6 = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sign-archivo-black",
  display: "swap",
  preload: false,
});
const signFont7 = Roboto_Condensed({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sign-roboto-condensed",
  display: "swap",
  preload: false,
});
const signFont8 = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sign-playfair-display",
  display: "swap",
  preload: false,
});
const signFont9 = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sign-dm-serif-display",
  display: "swap",
  preload: false,
});
const signFont10 = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sign-cormorant-garamond",
  display: "swap",
  preload: false,
});
const signFont11 = Cinzel({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sign-cinzel",
  display: "swap",
  preload: false,
});
const signFont12 = Lora({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sign-lora",
  display: "swap",
  preload: false,
});
const signFont13 = Merriweather({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sign-merriweather",
  display: "swap",
  preload: false,
});
const signFont14 = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sign-pacifico",
  display: "swap",
  preload: false,
});
const signFont15 = Lobster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sign-lobster",
  display: "swap",
  preload: false,
});
const signFont16 = Dancing_Script({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sign-dancing-script",
  display: "swap",
  preload: false,
});
const signFont17 = Caveat({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sign-caveat",
  display: "swap",
  preload: false,
});
const signFont18 = Satisfy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sign-satisfy",
  display: "swap",
  preload: false,
});
const signFont19 = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sign-great-vibes",
  display: "swap",
  preload: false,
});

// Route-scoped faces: only the selected face is requested by the browser.
export const configurationFontVariables = [
  signFont0.variable,
  signFont1.variable,
  signFont2.variable,
  signFont3.variable,
  signFont4.variable,
  signFont5.variable,
  signFont6.variable,
  signFont7.variable,
  signFont8.variable,
  signFont9.variable,
  signFont10.variable,
  signFont11.variable,
  signFont12.variable,
  signFont13.variable,
  signFont14.variable,
  signFont15.variable,
  signFont16.variable,
  signFont17.variable,
  signFont18.variable,
  signFont19.variable,
].join(" ");

export const fontGroups = [
  "Modernes",
  "Condensées & impact",
  "Élégantes & classiques",
  "Manuscrites & rétro",
  "Polices système",
] as const;

export const configurationFonts = [
  {
    name: "Barlow",
    value: "var(--font-barlow), Arial, sans-serif",
    weight: 700,
    group: "Modernes",
  },
  {
    name: "Barlow Condensed",
    value: "var(--font-barlow-condensed), Arial, sans-serif",
    weight: 700,
    group: "Condensées & impact",
  },
  {
    name: "Montserrat",
    value: "var(--font-sign-montserrat), Arial, sans-serif",
    weight: 700,
    group: "Modernes",
  },
  {
    name: "Poppins",
    value: "var(--font-sign-poppins), Arial, sans-serif",
    weight: 700,
    group: "Modernes",
  },
  {
    name: "Outfit",
    value: "var(--font-sign-outfit), Arial, sans-serif",
    weight: 700,
    group: "Modernes",
  },
  {
    name: "Oswald",
    value: "var(--font-sign-oswald), Arial, sans-serif",
    weight: 700,
    group: "Condensées & impact",
  },
  {
    name: "Bebas Neue",
    value: "var(--font-sign-bebas-neue), Arial, sans-serif",
    weight: 400,
    group: "Condensées & impact",
  },
  {
    name: "Anton",
    value: "var(--font-sign-anton), Arial, sans-serif",
    weight: 400,
    group: "Condensées & impact",
  },
  {
    name: "Archivo Black",
    value: "var(--font-sign-archivo-black), Arial, sans-serif",
    weight: 400,
    group: "Condensées & impact",
  },
  {
    name: "Roboto Condensed",
    value: "var(--font-sign-roboto-condensed), Arial, sans-serif",
    weight: 700,
    group: "Condensées & impact",
  },
  {
    name: "Playfair Display",
    value: "var(--font-sign-playfair-display), Georgia, serif",
    weight: 700,
    group: "Élégantes & classiques",
  },
  {
    name: "DM Serif Display",
    value: "var(--font-sign-dm-serif-display), Georgia, serif",
    weight: 400,
    group: "Élégantes & classiques",
  },
  {
    name: "Cormorant Garamond",
    value: "var(--font-sign-cormorant-garamond), Georgia, serif",
    weight: 700,
    group: "Élégantes & classiques",
  },
  {
    name: "Cinzel",
    value: "var(--font-sign-cinzel), Georgia, serif",
    weight: 700,
    group: "Élégantes & classiques",
  },
  {
    name: "Lora",
    value: "var(--font-sign-lora), Georgia, serif",
    weight: 700,
    group: "Élégantes & classiques",
  },
  {
    name: "Merriweather",
    value: "var(--font-sign-merriweather), Georgia, serif",
    weight: 700,
    group: "Élégantes & classiques",
  },
  {
    name: "Pacifico",
    value: "var(--font-sign-pacifico), cursive",
    weight: 400,
    group: "Manuscrites & rétro",
  },
  {
    name: "Lobster",
    value: "var(--font-sign-lobster), cursive",
    weight: 400,
    group: "Manuscrites & rétro",
  },
  {
    name: "Dancing Script",
    value: "var(--font-sign-dancing-script), cursive",
    weight: 700,
    group: "Manuscrites & rétro",
  },
  {
    name: "Caveat",
    value: "var(--font-sign-caveat), cursive",
    weight: 700,
    group: "Manuscrites & rétro",
  },
  {
    name: "Satisfy",
    value: "var(--font-sign-satisfy), cursive",
    weight: 400,
    group: "Manuscrites & rétro",
  },
  {
    name: "Great Vibes",
    value: "var(--font-sign-great-vibes), cursive",
    weight: 400,
    group: "Manuscrites & rétro",
  },
  {
    name: "Arial",
    value: "Arial, sans-serif",
    weight: 700,
    group: "Polices système",
  },
  {
    name: "Georgia",
    value: "Georgia, serif",
    weight: 700,
    group: "Polices système",
  },
  {
    name: "Verdana",
    value: "Verdana, sans-serif",
    weight: 700,
    group: "Polices système",
  },
  {
    name: "Impact",
    value: "Impact, sans-serif",
    weight: 700,
    group: "Polices système",
  },
  {
    name: "Trebuchet MS",
    value: '"Trebuchet MS", sans-serif',
    weight: 700,
    group: "Polices système",
  },
  {
    name: "Courier New",
    value: '"Courier New", monospace',
    weight: 700,
    group: "Polices système",
  },
];
