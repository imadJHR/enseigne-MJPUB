export type SignStyle = "cut-out" | "lighted" | "lighted-box";
export const signStyles = [
  {
    id: "cut-out" as const,
    label: "Lettres en relief",
    description: "PVC ou composite aluminium",
    configurationDescription:
      "Lettres sans éclairage : choisissez le matériau, son épaisseur et sa finition.",
    image: "/img8.jpg",
  },
  {
    id: "lighted" as const,
    label: "Lettres rétroéclairées",
    description: "PVC avec éclairage LED arrière",
    configurationDescription:
      "Face en PVC et éclairage à l’arrière des lettres : choisissez l’épaisseur et la couleur du halo.",
    image: "/img13.jpg",
  },
  {
    id: "lighted-box" as const,
    label: "Lettres boîtier aluminium",
    description: "Face lumineuse en plexiglas",
    configurationDescription:
      "Chants en aluminium et face lumineuse en plexiglas : choisissez la finition du chant et la couleur de l’éclairage.",
    image: "/img2.jpg",
  },
];
export interface ConfigMaterial {
  id: string;
  label: string;
  price: number;
  unit: "area" | "fixed";
  color: string;
}
export const configurationMaterials: Record<SignStyle, ConfigMaterial[]> = {
  "cut-out": [
    ...Object.entries({
      blanc: { "5 mm": 110, "10 mm": 140, "15 mm": 160, "19 mm": 180 },
      noir: { "10 mm": 160, "15 mm": 180, "19 mm": 200 },
    }).flatMap(([color, thicknesses]) =>
      Object.entries(thicknesses).map(([thickness, price]) => ({
        id: "pvc-" + color + "-" + thickness,
        label: "PVC " + color + " · " + thickness,
        price,
        unit: "area" as const,
        color: color === "blanc" ? "#fafafa" : "#20252b",
      })),
    ),
    ...Object.entries({
      Noir: 180,
      Rouge: 180,
      Blanc: 160,
      "Miroir argenté": 230,
      "Miroir doré": 230,
      "Brossé argenté": 230,
      "Brossé doré": 230,
    }).map(([finish, price]) => ({
      id: "alu-" + finish,
      label: "Composite aluminium " + finish.toLowerCase() + " · 3 mm",
      price,
      unit: "area" as const,
      color:
        finish === "Noir"
          ? "#20252b"
          : finish === "Rouge"
            ? "#b82e2e"
            : finish === "Blanc"
              ? "#fafafa"
              : finish.includes("doré")
                ? "#ae9254"
                : "#999fa3",
    })),
  ],
  lighted: [
    {
      id: "retro-blanc-15",
      label: "PVC blanc · 15 mm",
      price: 500,
      unit: "fixed",
      color: "#fafafa",
    },
    {
      id: "retro-blanc-19",
      label: "PVC blanc · 19 mm",
      price: 600,
      unit: "fixed",
      color: "#fafafa",
    },
    {
      id: "retro-noir-15",
      label: "PVC noir · 15 mm",
      price: 560,
      unit: "fixed",
      color: "#20252b",
    },
    {
      id: "retro-noir-19",
      label: "PVC noir · 19 mm",
      price: 660,
      unit: "fixed",
      color: "#20252b",
    },
  ],
  "lighted-box": [
    {
      id: "box-noir",
      label: "Chant aluminium noir · face plexiglas blanc",
      price: 950,
      unit: "area",
      color: "#fafafa",
    },
    {
      id: "box-blanc",
      label: "Chant aluminium blanc · face plexiglas blanc",
      price: 950,
      unit: "area",
      color: "#fafafa",
    },
  ],
};
export const ledColors = [
  { value: "#dceaff", label: "Blanc froid" },
  { value: "#ffe2b4", label: "Blanc chaud" },
  { value: "#f65b56", label: "Rouge" },
  { value: "#68aaff", label: "Bleu" },
  { value: "#83dca0", label: "Vert" },
  { value: "rgb", label: "RGB (couleur à définir)" },
];
export const extraPrices = {
  standoffs: 12,
  glue: 8,
  wago: 15,
  fireman: 25,
  module: 30,
  power100: 45,
  power150: 65,
  power200: 85,
};

export function createStyleConfiguration(style: SignStyle) {
  return {
    materialId: configurationMaterials[style][0].id,
    led: ledColors[0].value,
    intensity: 70,
    fixation: false,
    standoffs: 0,
    glue: false,
    wago: false,
    fireman: false,
    power: "0",
    moduleCount: 0,
    moduleColor: "Blanc",
  };
}
export type StyleConfiguration = ReturnType<typeof createStyleConfiguration>;
