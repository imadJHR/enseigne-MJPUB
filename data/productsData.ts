// data/productsData.ts (or wherever you prefer)


import { ProductsData } from "@/types";

export const productsData: ProductsData = {
  "panneau-dibond": {
    id: 1,
    name: "Panneau Dibond",
    category: "panneaux",
    basePrice: 159,
    description:
      "Panneau en Dibond avec impression haute définition. Idéal pour une signalétique extérieure durable, résistant aux UV et aux intempéries pour une visibilité maximale.",
    rating: 4.9,
    reviewCount: 65,
    badge: "Résistant",
    // Use the actual path/src from the Next.js static import
    images: [
     "/img4/jpg", // Assuming img1 is the object resulting from 'import img1 from ...'
    ],
    materials: [
      {
        id: "dibond",
        name: "Dibond (3mm)",
        price: 159,
        description: "Matériau composite aluminium, haute durabilité.",
      },
      {
        id: "pvc",
        name: "PVC expansé (10mm)",
        price: 129,
        description: "Léger, pour usage intérieur ou extérieur court terme.",
      },
    ],
    features: [
      "Impression numérique haute résolution",
      "Résistant aux UV et aux intempéries",
      "Usage intérieur/extérieur",
      "Facile à installer",
    ],
    specifications: {
      "Épaisseur": "3mm (Dibond), 10mm (PVC)",
      "Finition": "Mate ou brillante",
      "Méthode d'impression": "Impression directe UV",
      "Format": "Sur mesure",
    },
  },
};