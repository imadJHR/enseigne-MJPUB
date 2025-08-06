import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MJ PUB - Enseignes Lumineuses & Signalétique sur Mesure",
  description:
    "Spécialiste de la fabrication et installation d'enseignes LED, lettres découpées et panneaux personnalisés en France. Devis gratuit et rapide.",
  keywords:
    "enseigne LED, lettres découpées, enseigne lumineuse, signalétique, PVC, Dibond, Plexiglas, fabrication française, devis enseigne",
  authors: [{ name: "MJ PUB Team" }],
  creator: "MJ PUB",
  publisher: "MJ PUB",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "MJ PUB - Enseignes Lumineuses & Signalétique sur Mesure",
    description:
      "Spécialiste de la fabrication et installation d'enseignes LED, lettres découpées et panneaux personnalisés en France. Devis gratuit et rapide.",
    url: "https://MJ PUB .fr",
    siteName: "MJ PUB ",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=MJ PUB  Open Graph Image",
        width: 1200,
        height: 630,
        alt: "MJ PUB  - Enseignes Lumineuses & Signalétique sur Mesure",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MJ PUB  - Enseignes Lumineuses & Signalétique sur Mesure",
    description:
      "Spécialiste de la fabrication et installation d'enseignes LED, lettres découpées et panneaux personnalisés en France. Devis gratuit et rapide.",
    images: [
      "/placeholder.svg?height=630&width=1200&text=MJ PUB  Twitter Image",
    ],
  },
};

const LazyCartSidebar = lazy(() => import("./components/CartSidebar"));
const LazyScrollToTopButton = lazy(() =>
  import("./components/ScrollToTopButton")
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          {children}

          <Suspense fallback={null}>
            <LazyCartSidebar />
          </Suspense>
          <Suspense fallback={null}>
            <LazyScrollToTopButton />
          </Suspense>
        </CartProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}