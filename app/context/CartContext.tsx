"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  material?: string;
  type: "product" | "accessory";
}
interface CartContextType {
  items: CartItem[];
  isLoaded: boolean;
  addToCart: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}
const CartContext = createContext<CartContextType | undefined>(undefined);
const validQuantity = (value: number) =>
  Math.min(99, Math.max(1, Math.floor(Number.isFinite(value) ? value : 1)));
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("cartItems") || "[]");
      if (Array.isArray(stored))
        setItems(
          stored
            .filter(
              (item) =>
                item &&
                (typeof item.id === "string" || typeof item.id === "number") &&
                typeof item.name === "string" &&
                Number.isFinite(item.price) &&
                item.price >= 0 &&
                Number.isInteger(item.quantity) &&
                item.quantity > 0 &&
                (item.type === "product" || item.type === "accessory"),
            )
            .map((item) => ({
              ...item,
              id: String(item.id),
              image:
                typeof item.image === "string" ? item.image : item.image?.src,
              quantity: validQuantity(item.quantity),
            })),
        );
    } catch {
      setItems([]);
    } finally {
      setIsLoaded(true);
    }
  }, []);
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("cartItems", JSON.stringify(items));
    } catch {
      /* Shopping remains available if persistent storage is disabled. */
    }
  }, [items, isLoaded]);
  const addToCart = useCallback(
    (item: Omit<CartItem, "quantity">, quantity = 1) => {
      if (!Number.isFinite(item.price) || item.price < 0) return;
      setItems((prev) => {
        const existing = prev.find((i) => i.id === item.id);
        return existing
          ? prev.map((i) =>
              i.id === item.id
                ? {
                    ...i,
                    quantity: validQuantity(
                      i.quantity + validQuantity(quantity),
                    ),
                  }
                : i,
            )
          : [...prev, { ...item, quantity: validQuantity(quantity) }];
      });
      setIsOpen(true);
    },
    [],
  );
  const removeFromCart = useCallback(
    (id: string) => setItems((prev) => prev.filter((i) => i.id !== id)),
    [],
  );
  const updateQuantity = useCallback(
    (id: string, quantity: number) =>
      setItems((prev) =>
        quantity <= 0
          ? prev.filter((i) => i.id !== id)
          : prev.map((i) =>
              i.id === id ? { ...i, quantity: validQuantity(quantity) } : i,
            ),
      ),
    [],
  );
  const clearCart = useCallback(() => setItems([]), []);
  const getTotalPrice = useCallback(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );
  const getTotalItems = useCallback(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );
  return (
    <CartContext.Provider
      value={{
        items,
        isLoaded,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getTotalItems,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
