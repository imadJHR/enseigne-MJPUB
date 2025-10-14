// src/types.ts

// Interface pour une option de matériau
export interface Material {
  id: string;
  name: string;
  price: number;
  description: string;
}

// Interface pour les spécifications techniques
export interface Specifications {
  [key: string]: string;
}

// Interface pour la structure complète d'un produit
export interface Product {
  id: number;
  name: string;
  slug: string; // CLÉ NÉCESSAIRE POUR LES LIENS
  category: string;
  basePrice: number;
  price: number; // Utilisé dans ProductsPage pour l'affichage de base
  description: string;
  rating: number;
  reviewCount: number;
  badge: string;
  image: string; // CLÉ NÉCESSAIRE POUR L'AFFICHAGE DANS PRODUCTS PAGE
  materials: Material[];
  features: string[];
  specifications: Specifications;
}

// Interface pour l'objet de données indexé par le slug
export interface ProductsData {
  [slug: string]: Product;
}