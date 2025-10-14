// src/types.ts

// Interface for a material option
export interface Material {
  id: string;
  name: string;
  price: number;
  description: string;
}

// Interface for the full product structure
export interface Product {
  id: number;
  name: string;
  category: string;
  basePrice: number;
  description: string;
  rating: number;
  reviewCount: number;
  badge: string;
  images: string[]; // Use string[] for image paths/imports
  materials: Material[];
  features: string[];
  specifications: {
    [key: string]: string;
  };
}

// Interface for the productsData object (slug-indexed)
export interface ProductsData {
  [slug: string]: Product;
}