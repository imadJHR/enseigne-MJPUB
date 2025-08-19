// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

// --- Métadonnées Corrigées ---
export const metadata: Metadata = {
  title: {
    template: "MJ PUB",
    default: "MJ PUB - Enseignes Lumineuses & Signalétique sur Mesure",
  },
  description:
    "Spécialiste de la fabrication et installation d'enseignes LED, lettres découpées et panneaux personnalisés en France. Devis gratuit et rapide.",
  keywords: [
    "enseigne LED", "lettres découpées", "enseigne lumineuse", "signalétique",
    "PVC", "Dibond", "Plexiglas", "fabrication française", "devis enseigne"
  ],
  authors: [{ name: "MJ PUB Team" }],
  creator: "MJ PUB",
  publisher: "MJ PUB",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://mjpub.fr"),
  openGraph: {
    title: "MJ PUB - Enseignes Lumineuses & Signalétique sur Mesure",
    description:
      "Découvrez nos solutions d'enseignes et signalétique sur mesure pour valoriser votre image de marque.",
    url: "/",
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
  twitter: {
    card: "summary_large_image",
    title: "MJ PUB - Enseignes Lumineuses & Signalétique sur Mesure",
    description:
      "Découvrez nos solutions d'enseignes et signalétique sur mesure pour valoriser votre image de marque.",
    images: ["/twitter-image.png"],
  },

  // 🔑 Ajout Google Search Console
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
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
