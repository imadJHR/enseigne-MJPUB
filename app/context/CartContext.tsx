"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useCallback } from "react"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image?: string
  material?: string
  type: "product" | "accessory"
}

interface CartContextType {
  items: CartItem[]
  addToCart: (item: Omit<CartItem, "quantity">, quantity?: number) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  // Load cart from localStorage on initial mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems")
    if (storedCart) {
      setItems(JSON.parse(storedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items))
  }, [items])

  const addToCart = useCallback((item: Omit<CartItem, "quantity">, quantityToAdd = 1) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id)
      if (existingItem) {
        return prevItems.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + quantityToAdd } : i))
      } else {
        return [...prevItems, { ...item, quantity: quantityToAdd }]
      }
    })
    setIsOpen(true) // Open sidebar when item is added
  }, [])

  const removeFromCart = useCallback((id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }, [])

  const updateQuantity = useCallback((id: number, quantity: number) => {
    setItems((prevItems) => {
      if (quantity <= 0) {
        return prevItems.filter((item) => item.id !== id)
      }
      return prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    })
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const getTotalPrice = useCallback(() => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }, [items])

  const getTotalItems = useCallback(() => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }, [items])

  return (
    <CartContext.Provider
      value={{
        items,
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
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
