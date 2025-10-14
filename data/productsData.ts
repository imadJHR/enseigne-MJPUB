// src/data/productsData.ts

import { ProductsData } from "@/types";

// NOTE IMPORTANTE : Assurez-vous que le fichier img1.jpg est dans votre dossier /public
const productImage = "/img1.jpg"; 

export const productsData: ProductsData = {
  "panneau-dibond": {
    id: 1,
    name: "Panneau Dibond",
    slug: "panneau-dibond", // Correction: Ajout du slug pour le lien
    category: "panneaux",
    basePrice: 159,
    price: 159, // Ajout de 'price' pour la page produit
    description:
      "Panneau en Dibond avec impression haute définition. Idéal pour une signalétique extérieure durable, résistant aux UV et aux intempéries pour une visibilité maximale.",
    rating: 4.9,
    reviewCount: 65,
    badge: "Résistant",
    image: productImage, // Correction: Utilisation du chemin public pour le background-image
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
  // Ajoutez d'autres produits ici
};