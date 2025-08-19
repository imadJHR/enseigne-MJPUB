// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Providers } from "./providers"; // IMPORTER le nouveau composant

const inter = Inter({ subsets: ["latin"] });

// --- Métadonnées Corrigées ---
export const metadata: Metadata = {
  // BONNE PRATIQUE: Utiliser un modèle pour les titres pour la cohérence
  title: {
    template: "%s | MJ PUB",
    default: "MJ PUB - Enseignes Lumineuses & Signalétique sur Mesure",
  },
  description:
    "Spécialiste de la fabrication et installation d'enseignes LED, lettres découpées et panneaux personnalisés en France. Devis gratuit et rapide.",
  keywords: [
    "enseigne LED", "lettres découpées", "enseigne lumineuse", "signalétique", "PVC", "Dibond", "Plexiglas", "fabrication française", "devis enseigne"
  ],
  authors: [{ name: "MJ PUB Team" }],
  creator: "MJ PUB",
  publisher: "MJ PUB",
  icons: {
    icon: "/favicon.ico", // Le chemin standard pour l'icône
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  // CORRECTION: L'URL doit être absolue pour les réseaux sociaux
  metadataBase: new URL("https://mjpub.fr"), // REMPLACEZ par votre vrai domaine
  openGraph: {
    title: "MJ PUB - Enseignes Lumineuses & Signalétique sur Mesure",
    description: "Découvrez nos solutions d'enseignes et signalétique sur mesure pour valoriser votre image de marque.",
    url: "/", // Sera combiné avec metadataBase
    siteName: "MJ PUB",
    images: [
      {
        // REMPLACEZ par une vraie image de prévisualisation
        url: "/og-image.png", // ex: https://mjpub.fr/og-image.png
        width: 1200,
        height: 630,
        alt: "Présentation des enseignes lumineuses de MJ PUB",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MJ PUB - Enseignes Lumineuses & Signalétique sur Mesure",
    description: "Découvrez nos solutions d'enseignes et signalétique sur mesure pour valoriser votre image de marque.",
    images: ["/twitter-image.png"], // ex: https://mjpub.fr/twitter-image.png
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // BONNE PRATIQUE: Ajouter suppressHydrationWarning pour éviter les erreurs liées aux extensions navigateur
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        {/* On enveloppe les composants clients dans notre nouveau Provider */}
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}