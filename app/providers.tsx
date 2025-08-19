// app/providers.tsx
"use client";

import { CartProvider } from "./context/CartContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { lazy, Suspense } from "react";

// On déplace les composants qui dépendent du contexte client ici
const LazyCartSidebar = lazy(() => import("./components/CartSidebar"));
const LazyScrollToTopButton = lazy(() => import("./components/ScrollToTopButton"));

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      
      {/* Les composants "lazy" qui ont besoin du contexte peuvent rester ici */}
      <Suspense fallback={null}>
        <LazyCartSidebar />
      </Suspense>
      <Suspense fallback={null}>
        <LazyScrollToTopButton />
      </Suspense>
      
      {/* SpeedInsights est un composant client, il est bien ici */}
      <SpeedInsights />
    </CartProvider>
  );
}