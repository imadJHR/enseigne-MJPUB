"use client";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, CheckCircle } from "@/components/Icons";
import { requestAPI } from "@/lib/api";
const processes = [
  "Enseigne LED",
  "Lettres Découpées",
  "Panneau Dibond",
  "Néon Flexible",
  "Totem Lumineux",
  "Signalétique Intérieure",
  "Autre",
];
export default function QuoteForm() {
  const params = useSearchParams();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [description, setDescription] = useState("");
  const [process, setProcess] = useState("");
  const [configuration, setConfiguration] = useState(false);
  const lock = useRef(false);
  useEffect(() => {
    if (params.get("configuration") !== "1") return;
    try {
      const raw = sessionStorage.getItem("mjpubConfiguration");
      if (raw) {
        setDescription(raw.slice(0, 6000));
        setConfiguration(true);
        setProcess(
          raw.startsWith("Lettres en relief")
            ? "Lettres Découpées"
            : "Enseigne LED",
        );
      }
    } catch {
      /* The form remains usable without session storage. */
    }
  }, [params]);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (lock.current) return;
    const form = e.currentTarget;
    const payload = new FormData(form);
    const file = payload.get("logoFile");
    setError("");
    if (file instanceof File && file.size) {
      const extension = file.name.split(".").pop()?.toLowerCase();
      if (file.size > 10 * 1024 * 1024) {
        setError("Le fichier dépasse 10 Mo. Choisissez un fichier plus léger.");
        return;
      }
      if (
        !extension ||
        !["svg", "ai", "eps", "pdf", "png", "jpg", "jpeg"].includes(extension)
      ) {
        setError("Choisissez un fichier SVG, AI, EPS, PDF, PNG ou JPEG.");
        return;
      }
    } else {
      payload.delete("logoFile");
    }
    payload.set(
      "photoMontage",
      payload.get("photoMontage") === "on" ? "true" : "false",
    );
    lock.current = true;
    setBusy(true);
    try {
      await requestAPI("/api/devis-request", payload);
      setSuccess(true);
      try {
        sessionStorage.removeItem("mjpubConfiguration");
      } catch {}
      form.reset();
    } catch {
      setError(
        "Votre demande n’a pas pu être envoyée. Réessayez ou appelez-nous au +33 7 81 54 63 59.",
      );
    } finally {
      lock.current = false;
      setBusy(false);
    }
  }
  if (success)
    return (
      <div className="form-panel empty-state" role="status">
        <CheckCircle size={35} />
        <h2>Votre projet est entre nos mains.</h2>
        <p>
          Votre demande de devis a été envoyée. Nous vous contacterons pour
          préciser les détails de votre enseigne.
        </p>
        <Link className="button button-secondary" href="/realisations">
          Découvrir nos réalisations
        </Link>
      </div>
    );
  return (
    <form className="form-panel" onSubmit={submit}>
      <h2>Décrivez votre projet.</h2>
      {configuration && (
        <p className="feedback">
          Votre configuration a été ajoutée à la description ci-dessous.
        </p>
      )}
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">Nom complet *</label>
          <input
            className="field-input"
            id="name"
            name="name"
            required
            autoComplete="name"
            maxLength={120}
          />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Téléphone *</label>
          <input
            className="field-input"
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            maxLength={30}
          />
        </div>
      </div>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="email">Adresse e-mail *</label>
          <input
            className="field-input"
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={200}
          />
        </div>
        <div className="form-field">
          <label htmlFor="postalCode">Code postal *</label>
          <input
            className="field-input"
            id="postalCode"
            name="postalCode"
            autoComplete="postal-code"
            inputMode="numeric"
            pattern="[0-9]{5}"
            title="Code postal français à 5 chiffres"
            placeholder="59230"
            required
            maxLength={5}
          />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="address">Adresse du projet</label>
        <textarea
          className="field-input"
          id="address"
          name="address"
          autoComplete="street-address"
          placeholder="Adresse et ville de votre commerce"
          maxLength={500}
          style={{ minHeight: 80 }}
        />
      </div>
      <div className="form-field">
        <label htmlFor="manufacturingProcess">Type d’enseigne *</label>
        <select
          className="field-input"
          id="manufacturingProcess"
          name="manufacturingProcess"
          required
          value={process}
          onChange={(event) => setProcess(event.target.value)}
        >
          <option value="" disabled>
            Choisissez votre solution
          </option>
          {processes.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="projectDescription">Description de votre projet</label>
        <textarea
          className="field-input"
          id="projectDescription"
          name="projectDescription"
          placeholder="Dimensions, texte, matériaux, emplacement et besoin de pose…"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={6000}
          rows={configuration ? 8 : 5}
        />
      </div>
      <label className="form-checkbox">
        <input id="photoMontage" name="photoMontage" type="checkbox" />
        <span>
          Je souhaite un photomontage pour visualiser l’enseigne sur ma façade.
        </span>
      </label>
      <div className="form-field">
        <label htmlFor="logoFile">Votre logo ou visuel</label>
        <input
          className="field-input"
          id="logoFile"
          name="logoFile"
          type="file"
          accept=".svg,.ai,.eps,.pdf,.png,.jpg,.jpeg"
        />
        <small>SVG, AI, EPS, PDF, PNG ou JPEG. Taille maximale : 10 Mo.</small>
      </div>
      <p className="small-copy">
        Vos coordonnées servent à préparer votre devis.{" "}
        <Link href="/politique-confidentialite">
          Consulter la politique de confidentialité.
        </Link>
      </p>
      {error && (
        <p className="feedback feedback-error" role="alert">
          {error}
        </p>
      )}
      <button
        className="button button-primary"
        type="submit"
        disabled={busy}
        style={{ marginTop: 24 }}
      >
        {busy ? "Envoi en cours…" : "Demander mon devis"}
        <ArrowUpRight size={18} />
      </button>
    </form>
  );
}
