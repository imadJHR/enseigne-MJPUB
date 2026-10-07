export interface Material {
  id: string;
  name: string;
  price: number;
  description: string;
}
export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  basePrice: number;
  price: number;
  description: string;
  image: string;
  materials: Material[];
  features: string[];
  specifications: Record<string, string>;
}
export type ProductsData = Record<string, Product>;
