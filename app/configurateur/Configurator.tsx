"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import { formatPrice } from "@/lib/site";
import {
  configurationMaterials,
  signStyles,
  ledColors,
  extraPrices,
  createStyleConfiguration,
  type StyleConfiguration,
  type SignStyle,
} from "@/lib/configurator";
import {
  ArrowUpRight,
  ShoppingBag,
  Layers,
  Lightbulb,
  Box,
} from "@/components/Icons";
import { configurationFonts as fonts, fontGroups } from "./fonts";
export default function Configurator({
  initialStyle = "cut-out",
}: {
  initialStyle?: SignStyle;
}) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [text, setText] = useState("Votre enseigne");
  const [style, setStyle] = useState<SignStyle>(initialStyle);
  const [configurations, setConfigurations] = useState(() => ({
    "cut-out": createStyleConfiguration("cut-out"),
    lighted: createStyleConfiguration("lighted"),
    "lighted-box": createStyleConfiguration("lighted-box"),
  }));
  const {
    materialId,
    led,
    intensity,
    fixation,
    standoffs,
    glue,
    wago,
    fireman,
    power,
    moduleCount,
    moduleColor,
  } = configurations[style];
  const [height, setHeight] = useState(30);
  const [heightDraft, setHeightDraft] = useState("30");
  const [font, setFont] = useState(fonts[0].value);
  const selectedFont = fonts.find((item) => item.value === font)!;
  const [background, setBackground] = useState("#d9ded8");
  const [error, setError] = useState("");
  const material = configurationMaterials[style].find(
    (item) => item.id === materialId,
  )!;
  const selectedStyle = signStyles.find((item) => item.id === style)!;
  const lit = style !== "cut-out";
  const lightColor = led === "rgb" ? "#b989d5" : led;
  const previewShadow =
    style === "lighted"
      ? `0 0 ${intensity / 6}px ${lightColor}, 0 0 ${intensity / 3}px ${lightColor}, 1px 2px 1px #45535c`
      : style === "lighted-box"
        ? `0 0 ${intensity / 12}px ${lightColor}, 1px 2px 1px #45535c`
        : "1px 2px 0 #657279";
  const width = Math.round(text.trim().length * height * 0.6 * 10) / 10;
  const area = (width * height) / 10000;
  const accessories =
    standoffs * extraPrices.standoffs +
    (glue ? extraPrices.glue : 0) +
    (lit
      ? (wago ? extraPrices.wago : 0) +
        (fireman ? extraPrices.fireman : 0) +
        Number(power) +
        moduleCount * extraPrices.module
      : 0);
  const base =
    material.unit === "fixed" ? material.price : area * material.price;
  const price =
    Math.round((base + (fixation ? 88 : 0) + accessories) * 100) / 100;
  const details = [
    selectedStyle.label,
    'Texte : "' + text.trim() + '"',
    "Matériau : " + material.label,
    "Police : " + fonts.find((f) => f.value === font)?.name,
    "Hauteur : " + height + " cm",
    "Largeur indicative : " + width + " cm",
    "Fixation : " +
      (fixation ? "gabarit et entretoises (+88 € HT)" : "sans fixation"),
    ...(lit
      ? [
          "LED : " + ledColors.find((c) => c.value === led)?.label,
          "Intensité de l’aperçu : " + intensity + " %",
          "Alimentation : " +
            (power === "0"
              ? "aucune"
              : power === "45"
                ? "100 W"
                : power === "65"
                  ? "150 W"
                  : "200 W"),
          "Connecteurs Wago : " + (wago ? "oui" : "non"),
          "Interrupteur pompier : " + (fireman ? "oui" : "non"),
          "Modules LED : " + moduleCount + " · " + moduleColor,
        ]
      : []),
    "Entretoises supplémentaires : " + standoffs,
    "Colle : " + (glue ? "oui" : "non"),
    "Estimation : " + formatPrice(price) + " HT, hors pose et livraison.",
  ].join("\n");
  function changeStyle(value: SignStyle) {
    setStyle(value);
    setError("");
  }
  function updateOptions(patch: Partial<StyleConfiguration>) {
    setConfigurations((previous) => ({
      ...previous,
      [style]: { ...previous[style], ...patch },
    }));
  }
  function quote() {
    if (!text.trim()) {
      setError("Indiquez le texte de votre enseigne.");
      return;
    }
    try {
      sessionStorage.setItem("mjpubConfiguration", details);
      router.push("/demande-devis?configuration=1");
    } catch {
      setError(
        "Le stockage est indisponible. Contactez-nous avec vos choix ou ouvrez le formulaire de devis.",
      );
    }
  }
  return (
    <div className="config-layout">
      <div className="config-mobile-summary">
        <span>
          <small>Estimation HT</small>
          <strong>{formatPrice(price)}</strong>
        </span>
        <button
          className="button button-primary"
          onClick={quote}
          disabled={!text.trim()}
        >
          Obtenir mon devis <ArrowUpRight size={17} />
        </button>
      </div>
      <div className="config-controls">
        <fieldset className="config-section">
          <legend>
            <span>01</span> Le type d’enseigne
          </legend>
          <div className="config-options">
            {signStyles.map((item, index) => {
              const Icon = [Layers, Lightbulb, Box][index];
              return (
                <label
                  className={
                    "config-option" + (style === item.id ? " selected" : "")
                  }
                  key={item.id}
                >
                  <input
                    type="radio"
                    name="sign-style"
                    value={item.id}
                    checked={style === item.id}
                    onChange={() => changeStyle(item.id)}
                  />
                  <Icon size={23} />
                  <strong>{item.label}</strong>
                  <span>{item.description}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
        <fieldset className="config-section">
          <legend>
            <span>02</span> Votre texte & ses dimensions
          </legend>
          <div className="form-grid">
            <div className="form-field form-field-full">
              <label htmlFor="sign-text">Texte de l’enseigne</label>
              <input
                id="sign-text"
                className="field-input"
                maxLength={50}
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  setError("");
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="sign-font">Typographie</label>
              <select
                id="sign-font"
                className="field-input"
                value={font}
                aria-describedby="font-choice-help"
                onChange={(e) => setFont(e.target.value)}
              >
                {fontGroups.map((group) => (
                  <optgroup label={group} key={group}>
                    {fonts
                      .filter((item) => item.group === group)
                      .map((item) => (
                        <option value={item.value} key={item.name}>
                          {item.name}
                        </option>
                      ))}
                  </optgroup>
                ))}
              </select>
              <p id="font-choice-help" className="font-choice-help">
                {fonts.length} typographies, classées par style.
              </p>
              <div
                className="font-choice-sample"
                aria-label="Aperçu de la typographie"
              >
                <span className="font-choice-name">{selectedFont.name}</span>
                <span
                  className="font-choice-text"
                  style={{ fontFamily: font, fontWeight: selectedFont.weight }}
                >
                  {text.trim() || "Votre enseigne"}
                </span>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="sign-height">Hauteur des lettres (cm)</label>
              <input
                id="sign-height"
                className="field-input"
                type="number"
                min={10}
                max={100}
                value={heightDraft}
                onChange={(e) => {
                  setHeightDraft(e.target.value);
                  const value = Number(e.target.value);
                  if (Number.isFinite(value) && value >= 10 && value <= 100) {
                    setHeight(value);
                  }
                }}
                onBlur={() => {
                  const value = Math.min(
                    100,
                    Math.max(10, Number(heightDraft) || 30),
                  );
                  setHeight(value);
                  setHeightDraft(String(value));
                }}
              />
            </div>
          </div>
          <p className="form-note">
            Largeur indicative : {width.toLocaleString("fr-FR")} cm. Le tracé
            réel sera vérifié avant fabrication.
          </p>
        </fieldset>
        <fieldset className="config-section">
          <legend>
            <span>03</span> Matériau & finition
          </legend>
          <p className="form-note">{selectedStyle.configurationDescription}</p>
          <div className="form-field">
            <label htmlFor="sign-material">
              Options compatibles avec votre enseigne
            </label>
            <select
              className="field-input"
              id="sign-material"
              value={materialId}
              onChange={(e) => updateOptions({ materialId: e.target.value })}
            >
              {configurationMaterials[style].map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
          {lit && (
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="led-color">Couleur de l’éclairage</label>
                <select
                  id="led-color"
                  className="field-input"
                  value={led}
                  onChange={(e) => updateOptions({ led: e.target.value })}
                >
                  {ledColors.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="led-intensity">
                  Intensité de l’aperçu : {intensity} %
                </label>
                <input
                  type="range"
                  id="led-intensity"
                  min="10"
                  max="100"
                  value={intensity}
                  onChange={(e) =>
                    updateOptions({ intensity: Number(e.target.value) })
                  }
                />
              </div>
            </div>
          )}
        </fieldset>
        <fieldset className="config-section">
          <legend>
            <span>04</span> Fixation & accessoires
          </legend>
          <label className="form-checkbox">
            <input
              type="checkbox"
              checked={fixation}
              onChange={(e) => updateOptions({ fixation: e.target.checked })}
            />{" "}
            Gabarit et entretoises · 88 € HT
          </label>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="standoffs">
                Entretoises supplémentaires · 12 € HT / unité
              </label>
              <input
                type="number"
                id="standoffs"
                className="field-input"
                min={0}
                max={99}
                value={standoffs}
                onChange={(e) =>
                  updateOptions({
                    standoffs: Math.min(
                      99,
                      Math.max(0, Math.floor(Number(e.target.value) || 0)),
                    ),
                  })
                }
              />
            </div>
            {lit && (
              <div className="form-field">
                <label htmlFor="power-supply">Alimentation LED</label>
                <select
                  id="power-supply"
                  className="field-input"
                  value={power}
                  onChange={(e) => updateOptions({ power: e.target.value })}
                >
                  <option value="0">Sans alimentation</option>
                  <option value="45">100 W · 45 € HT</option>
                  <option value="65">150 W · 65 € HT</option>
                  <option value="85">200 W · 85 € HT</option>
                </select>
              </div>
            )}
          </div>
          <label className="form-checkbox">
            <input
              type="checkbox"
              checked={glue}
              onChange={(e) => updateOptions({ glue: e.target.checked })}
            />{" "}
            Colle · 8 € HT
          </label>
          {lit && (
            <>
              <label className="form-checkbox">
                <input
                  type="checkbox"
                  checked={wago}
                  onChange={(e) => updateOptions({ wago: e.target.checked })}
                />{" "}
                Connecteurs Wago · 15 € HT
              </label>
              <label className="form-checkbox">
                <input
                  type="checkbox"
                  checked={fireman}
                  onChange={(e) => updateOptions({ fireman: e.target.checked })}
                />{" "}
                Interrupteur pompier · 25 € HT
              </label>
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="modules-count">
                    Modules LED · 30 € HT / unité
                  </label>
                  <input
                    id="modules-count"
                    type="number"
                    className="field-input"
                    min={0}
                    max={99}
                    value={moduleCount}
                    onChange={(e) =>
                      updateOptions({
                        moduleCount: Math.min(
                          99,
                          Math.max(0, Math.floor(Number(e.target.value) || 0)),
                        ),
                      })
                    }
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="modules-color">Couleur des modules</label>
                  <select
                    id="modules-color"
                    className="field-input"
                    value={moduleColor}
                    onChange={(e) =>
                      updateOptions({ moduleColor: e.target.value })
                    }
                  >
                    {["Blanc", "Rouge", "Bleu", "Vert", "Jaune"].map(
                      (color) => (
                        <option key={color}>{color}</option>
                      ),
                    )}
                  </select>
                </div>
              </div>
            </>
          )}
        </fieldset>
      </div>
      <aside className="config-preview">
        <div className="preview-heading">
          <span className="section-index">Votre aperçu</span>
          <span>{selectedStyle.label}</span>
        </div>
        <div className="preview-canvas" style={{ backgroundColor: background }}>
          <span
            className="preview-text"
            style={{
              fontFamily: font,
              fontWeight: selectedFont.weight,
              color: style === "lighted-box" ? lightColor : material.color,
              fontSize: Math.max(
                15,
                Math.min(58, 450 / Math.max(text.length, 1)),
              ),
              textShadow: previewShadow,
            }}
          >
            {text.trim() || "Votre texte"}
          </span>
          <span className="preview-dimensions">
            {width.toLocaleString("fr-FR")} × {height} cm · dimensions
            indicatives
          </span>
        </div>
        <div className="color-fields">
          <label htmlFor="preview-background">
            Couleur du mur pour l’aperçu
          </label>
          <input
            id="preview-background"
            type="color"
            value={background}
            onChange={(e) => setBackground(e.target.value)}
          />
        </div>
        <p className="preview-disclaimer">
          Simulation visuelle. Les proportions, couleurs et l’éclairage seront
          validés sur le projet final.
        </p>
        <div className="config-summary">
          <Image
            src={selectedStyle.image}
            alt={"Exemple de " + selectedStyle.label.toLowerCase()}
            width={105}
            height={75}
          />
          <div>
            <strong>{material.label}</strong>
            <p>
              {height} cm de hauteur ·{" "}
              {fixation ? "gabarit inclus" : "sans fixation"}
            </p>
          </div>
        </div>
        <div className="config-price">
          <span>Estimation HT</span>
          <strong>{formatPrice(price)}</strong>
          <small>
            {formatPrice(price * 1.2)} TTC estimés · hors pose et livraison
          </small>
        </div>
        <button className="button button-primary" onClick={quote}>
          Demander un devis <ArrowUpRight size={18} />
        </button>
        <button
          className="button button-secondary"
          disabled={!text.trim()}
          onClick={() =>
            addToCart(
              {
                id:
                  "configuration-" +
                  JSON.stringify({
                    text: text.trim(),
                    style,
                    materialId,
                    height,
                    font,
                    led: lit ? led : null,
                    fixation,
                    standoffs,
                    glue,
                    power: lit ? power : null,
                    wago: lit ? wago : null,
                    fireman: lit ? fireman : null,
                    moduleCount: lit ? moduleCount : 0,
                    moduleColor: lit ? moduleColor : null,
                  }),
                name: "Enseigne personnalisée · " + text.trim(),
                material: details,
                price,
                image: selectedStyle.image,
                type: "product",
              },
              1,
            )
          }
        >
          Ajouter au panier <ShoppingBag size={18} />
        </button>
        {error && (
          <p className="feedback feedback-error" role="alert">
            {error}
          </p>
        )}
        <p className="form-note">
          Vous pourrez joindre votre logo et vos coordonnées à l’étape suivante.
        </p>
      </aside>
    </div>
  );
}
