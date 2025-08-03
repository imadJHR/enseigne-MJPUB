import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "./context/CartContext"
import { lazy, Suspense } from "react"
import Header from "./components/Header" 
import Footer from "./components/Footer" 

const inter = Inter({ subsets: ["latin"] })

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
    title: "Enseigne42 - Enseignes Lumineuses & Signalétique sur Mesure",
    description:
      "Spécialiste de la fabrication et installation d'enseignes LED, lettres découpées et panneaux personnalisés en France. Devis gratuit et rapide.",
    url: "https://enseigne42.fr",
    siteName: "Enseigne42",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Enseigne42 Open Graph Image",
        width: 1200,
        height: 630,
        alt: "Enseigne42 - Enseignes Lumineuses & Signalétique sur Mesure",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enseigne42 - Enseignes Lumineuses & Signalétique sur Mesure",
    description:
      "Spécialiste de la fabrication et installation d'enseignes LED, lettres découpées et panneaux personnalisés en France. Devis gratuit et rapide.",
    images: ["/placeholder.svg?height=630&width=1200&text=Enseigne42 Twitter Image"],
  },
}

const LazyCartSidebar = lazy(() => import("./components/CartSidebar"))
const LazyScrollToTopButton = lazy(() => import("./components/ScrollToTopButton"))

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <CartProvider>
          <Header /> {/* Place Header inside CartProvider */}
          {children}
          <Footer /> {/* Place Footer inside CartProvider */}
          <Suspense fallback={null}>
            <LazyCartSidebar />
          </Suspense>
          <Suspense fallback={null}>
            <LazyScrollToTopButton />
          </Suspense>
        </CartProvider>
      </body>
    </html>
  )
}
