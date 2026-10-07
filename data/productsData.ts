import type { ProductsData } from "@/types";
export const productsData: ProductsData = {
  "panneau-dibond": {
    id: 1,
    name: "Panneau personnalisé Dibond ou PVC",
    slug: "panneau-dibond",
    category: "panneaux",
    basePrice: 129,
    price: 159,
    image: "/img1.jpg",
    description:
      "Affichez votre identité sur un panneau personnalisé. Choisissez le composite aluminium Dibond ou le PVC expansé selon votre emplacement et votre besoin de signalétique.",
    materials: [
      {
        id: "dibond",
        name: "Dibond 3 mm",
        price: 159,
        description: "Composite aluminium pour une signalétique rigide.",
      },
      {
        id: "pvc",
        name: "PVC expansé 10 mm",
        price: 129,
        description: "Un support léger pour votre panneau personnalisé.",
      },
    ],
    features: [
      "Impression de votre identité visuelle",
      "Choix du support selon l’usage",
      "Finition et format à préciser avec notre équipe",
    ],
    specifications: {
      Matériaux: "Dibond 3 mm ou PVC 10 mm",
      Personnalisation: "Votre logo et votre fichier d’impression",
      Format: "À confirmer avant fabrication",
      Finition: "À définir selon votre projet",
    },
  },
};
