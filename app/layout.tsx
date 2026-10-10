import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import "./brand.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Providers } from "./providers";
import { JsonLd } from "./components/SiteUI";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { businessSchema, site } from "@/lib/site";
import { themeBootstrap } from "@/lib/theme";
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-barlow-condensed",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Enseignes à Saint-Amand-les-Eaux | MJ PUB",
    template: "%s | MJ PUB",
  },
  description:
    "MJ PUB à Saint-Amand-les-Eaux : enseignes lumineuses LED, lettres 3D et panneaux pour commerces du secteur de Valenciennes. Configurez votre enseigne sur mesure.",
  authors: [{ name: "MJ PUB" }],
  creator: "MJ PUB",
  publisher: "MJ PUB",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    locale: "fr_FR",
    siteName: "MJ PUB",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
  verification: { google: "mxv0pEZo-6OydhrKmsfNSx11PFbnL3VzDC6MLJQ4xs0" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        <GoogleAnalytics />
      </head>
      <body className={`${barlow.variable} ${barlowCondensed.variable}`}>
        <a className="skip-link" href="#contenu">
          Aller au contenu
        </a>
        <Providers>
          <Header />
          <main id="contenu" className="site-main">
            {children}
          </main>
          <Footer />
        </Providers>
        <JsonLd data={businessSchema} />
      </body>
    </html>
  );
}
