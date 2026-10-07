"use client";
import { CartProvider } from "./context/CartContext";
import CartSidebar from "./components/CartSidebar";
import { ThemeProvider } from "./context/ThemeContext";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <CartProvider>
        {children}
        <CartSidebar />
      </CartProvider>
    </ThemeProvider>
  );
}
