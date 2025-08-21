// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Providers } from "./providers";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Le metadataBase est essentiel pour que les URLs relatives (comme /og-image.png) fonctionnent correctement
  metadataBase: new URL("https://lettre3dshop.com/"),

  title: {
    // Le titre par défaut pour la page d'accueil ou les pages sans titre spécifique
    default: "MJ PUB - Enseignes Lumineuses & Signalétique sur Mesure",
    // Le modèle pour les titres des autres pages. `%s` sera remplacé par le titre de la page.
    template: "%s | MJ PUB",
  },
  description:
    "Spécialiste de la fabrication et installation d'enseignes LED, lettres découpées et panneaux personnalisés en France. Devis gratuit et rapide.",
  keywords: [
    "enseigne LED",
    "lettres découpées",
    "enseigne lumineuse",
    "signalétique",
    "PVC",
    "Dibond",
    "Plexiglas",
    "fabrication française",
    "devis enseigne",
  ],
  authors: [{ name: "MJ PUB Team" }],
  creator: "MJ PUB",
  publisher: "MJ PUB",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico", // Corrigé : le chemin doit être valide, par ex. /apple-icon.png
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "MJ PUB - Enseignes Lumineuses & Signalétique sur Mesure",
    description:
      "Découvrez nos solutions d'enseignes et signalétique sur mesure pour valoriser votre image de marque.",
    url: "https://lettre3dshop.com",
    siteName: "MJ PUB",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Présentation des enseignes lumineuses de MJ PUB",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  verification: {
    google: "BLLN9xg6pbYTnR4ICVo_bgTIMQXVZ0Itu_Xo6ySTHgI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Le meta google-site-verification peut être gardé ici ou uniquement dans l'objet metadata.
            Next.js le rendra automatiquement depuis l'objet `verification`. Le garder ici est redondant. */}
      </head>
      <body className={inter.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6T3BMYYDWD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6T3BMYYDWD');
          `}
        </Script>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}