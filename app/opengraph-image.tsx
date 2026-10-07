import { ImageResponse } from "next/og";
export const alt = "MJ PUB : enseignes et signalétique à Saint-Amand-les-Eaux";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function SocialImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: "#111214",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: -3,
          }}
        >
          <span style={{ color: "#ED118D" }}>M</span>
          <span style={{ color: "#32B0E3" }}>J</span>
          <span style={{ color: "#FDDD00" }}>P</span>
          <span style={{ color: "#83B93F" }}>U</span>
          <span>B</span>
        </div>
        <div
          style={{
            display: "flex",
            background: "#FDDD00",
            color: "#111214",
            padding: "12px 20px",
            borderRadius: 0,
            fontSize: 20,
          }}
        >
          Enseignes sur mesure
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 800,
            letterSpacing: -3,
          }}
        >
          Votre enseigne, à votre image.
        </div>
        <div style={{ display: "flex", fontSize: 27, color: "#B5BAC3" }}>
          Lettres 3D · Enseignes LED · Signalétique
        </div>
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "3px solid #32B0E3",
          paddingTop: 24,
          fontSize: 25,
        }}
      >
        Saint-Amand-les-Eaux · Valenciennes & environs
      </div>
    </div>,
    size,
  );
}
