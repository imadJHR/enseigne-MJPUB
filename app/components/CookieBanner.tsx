"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { consentEvent, consentKey } from "./GoogleAnalytics";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const read = () => {
      try {
        setVisible(localStorage.getItem(consentKey) === null);
      } catch {
        setVisible(true);
      }
    };
    read();
    window.addEventListener(consentEvent, read);
    window.addEventListener("storage", read);
    return () => {
      window.removeEventListener(consentEvent, read);
      window.removeEventListener("storage", read);
    };
  }, []);
  function choose(value: "accepted" | "declined") {
    try {
      localStorage.setItem(consentKey, value);
    } catch {
      /* Le choix reste valable pour la session même sans stockage. */
    }
    window.dispatchEvent(new Event(consentEvent));
    setVisible(false);
  }
  if (!visible) return null;
  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-live="polite"
      aria-label="Choix des cookies de mesure d'audience"
    >
      <p>
        <strong>Mesure d&apos;audience.</strong> Nous utilisons Google Analytics
        uniquement si vous acceptez, pour comprendre les visites.{" "}
        <Link href="/politique-confidentialite">En savoir plus</Link>.
      </p>
      <div>
        <button
          className="button button-primary"
          onClick={() => choose("accepted")}
        >
          Accepter
        </button>
        <button
          className="button button-secondary"
          onClick={() => choose("declined")}
        >
          Refuser
        </button>
      </div>
    </div>
  );
}
