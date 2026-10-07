"use client";
import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { useCart } from "@/app/context/CartContext";
import { requestAPI } from "@/lib/api";
import { formatPrice } from "@/lib/site";
import { ArrowUpRight, CheckCircle } from "@/components/Icons";
export default function CheckoutForm() {
  const { items, isLoaded, getTotalPrice, clearCart } = useCart();
  const lock = useRef(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  if (!isLoaded) return <p role="status">Chargement du panier…</p>;
  if (submitted)
    return (
      <div className="empty-state">
        <CheckCircle size={40} />
        <h2>Votre demande de commande est envoyée.</h2>
        <p>MJ PUB vous contactera pour confirmer les détails.</p>
        <Link className="button button-secondary" href="/">
          Retour à l’accueil
        </Link>
      </div>
    );
  if (!items.length)
    return (
      <div className="empty-state">
        <h2>Votre panier est vide.</h2>
        <Link className="button button-primary" href="/produits">
          Découvrir nos solutions
        </Link>
      </div>
    );
  const subtotal = getTotalPrice();
  const shipping = subtotal >= 200 ? 0 : 15;
  const total = (subtotal + shipping) * 1.2;
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (lock.current) return;
    lock.current = true;
    setBusy(true);
    setError("");
    const values = new FormData(event.currentTarget);
    const formData = Object.fromEntries(
      ["name", "phone", "email", "postalCode", "address"].map((key) => [
        key,
        String(values.get(key) || "").trim(),
      ]),
    );
    try {
      await requestAPI("/api/checkout", {
        formData,
        orderSummary: { items, totalTTC: total.toFixed(2) },
      });
      setSubmitted(true);
      clearCart();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "L’envoi a échoué. Réessayez.",
      );
    } finally {
      lock.current = false;
      setBusy(false);
    }
  }
  return (
    <div className="form-layout">
      <form className="form-panel" onSubmit={submit}>
        <h2>Vos coordonnées</h2>
        <div className="form-grid">
          {[
            { name: "name", label: "Nom complet", type: "text", auto: "name" },
            { name: "phone", label: "Téléphone", type: "tel", auto: "tel" },
            {
              name: "email",
              label: "Adresse e-mail",
              type: "email",
              auto: "email",
            },
            {
              name: "postalCode",
              label: "Code postal",
              type: "text",
              auto: "postal-code",
            },
          ].map((field) => (
            <div className="form-field" key={field.name}>
              <label htmlFor={field.name}>{field.label} *</label>
              <input
                className="field-input"
                id={field.name}
                name={field.name}
                type={field.type}
                autoComplete={field.auto}
                required
                maxLength={field.name === "postalCode" ? 5 : 150}
                pattern={field.name === "postalCode" ? "[0-9]{5}" : undefined}
                inputMode={field.name === "postalCode" ? "numeric" : undefined}
              />
            </div>
          ))}
          <div className="form-field form-field-full">
            <label htmlFor="address">Adresse de livraison *</label>
            <textarea
              className="field-input"
              id="address"
              name="address"
              autoComplete="street-address"
              required
              maxLength={500}
              rows={3}
            />
          </div>
        </div>
        <label className="form-checkbox">
          <input type="checkbox" required /> J’ai lu la{" "}
          <Link className="inline-link" href="/politique-confidentialite">
            politique de confidentialité
          </Link>
          .
        </label>
        {error && (
          <p className="feedback feedback-error" role="alert">
            {error}
          </p>
        )}
        <button className="button button-primary" disabled={busy}>
          {busy ? "Envoi en cours…" : "Transmettre ma commande"}
          <ArrowUpRight size={18} />
        </button>
        <p className="form-note">
          Aucun paiement en ligne n’est demandé à cette étape.
        </p>
      </form>
      <aside className="summary-panel">
        <h2>Votre commande</h2>
        {items.map((item) => (
          <div className="summary-line" key={item.id}>
            <span>
              {item.quantity} × {item.name}
              {item.material && <small> · {item.material}</small>}
            </span>
            <strong>{formatPrice(item.price * item.quantity)} HT</strong>
          </div>
        ))}
        <div className="summary-line">
          <span>Livraison HT</span>
          <span>{formatPrice(shipping)}</span>
        </div>
        <div className="summary-total">
          <span>Total TTC estimé</span>
          <strong>{formatPrice(total)}</strong>
        </div>
        <p className="form-note">
          Prix et modalités à confirmer avec notre équipe avant fabrication.
        </p>
      </aside>
    </div>
  );
}
