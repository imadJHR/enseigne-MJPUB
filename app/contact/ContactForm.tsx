"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle } from "@/components/Icons";
import { requestAPI } from "@/lib/api";
export default function ContactForm() {
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);
  const lock = useRef(false);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (lock.current) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    lock.current = true;
    setBusy(true);
    setStatus("");
    try {
      await requestAPI("/api/contact", {
        name: data.get("name"),
        email: data.get("email"),
        phone: data.get("phone"),
        subject: data.get("subject"),
        message: data.get("message"),
      });
      setSuccess(true);
      form.reset();
    } catch {
      setStatus(
        "Votre message n’a pas pu être envoyé. Réessayez ou appelez-nous au +33 7 81 54 63 59.",
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
        <h2>Votre message est envoyé.</h2>
        <p>
          Merci de nous avoir contactés. Nous reviendrons vers vous pour
          échanger sur votre projet.
        </p>
        <button
          className="button button-secondary"
          onClick={() => setSuccess(false)}
        >
          Envoyer un autre message
        </button>
      </div>
    );
  return (
    <form className="form-panel" onSubmit={submit}>
      <h2>Écrivez-nous.</h2>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">Nom complet *</label>
          <input
            className="field-input"
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Votre nom"
            required
            maxLength={120}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Adresse e-mail *</label>
          <input
            className="field-input"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="vous@entreprise.fr"
            required
            maxLength={200}
          />
        </div>
      </div>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="phone">Téléphone</label>
          <input
            className="field-input"
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Votre numéro"
            maxLength={30}
          />
        </div>
        <div className="form-field">
          <label htmlFor="subject">Sujet *</label>
          <input
            className="field-input"
            id="subject"
            name="subject"
            placeholder="Votre projet d’enseigne"
            required
            maxLength={200}
          />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="message">Votre message *</label>
        <textarea
          className="field-input"
          id="message"
          name="message"
          placeholder="Parlez-nous de votre besoin, de l’emplacement et de vos dimensions…"
          required
          maxLength={6000}
        />
      </div>
      <p className="small-copy">
        Vos coordonnées servent à traiter votre demande.{" "}
        <Link href="/politique-confidentialite">
          En savoir plus sur vos données.
        </Link>
      </p>
      {status && (
        <p role="alert" className="feedback feedback-error">
          {status}
        </p>
      )}
      <button
        className="button button-primary"
        type="submit"
        disabled={busy}
        style={{ marginTop: 24 }}
      >
        {busy ? "Envoi en cours…" : "Envoyer mon message"}
        <ArrowUpRight size={18} />
      </button>
    </form>
  );
}
