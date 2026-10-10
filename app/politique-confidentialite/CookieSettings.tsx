"use client";
import { consentEvent, consentKey } from "@/app/components/GoogleAnalytics";

export default function CookieSettings() {
  function review() {
    try {
      localStorage.removeItem(consentKey);
    } catch {
      /* Le bandeau se réaffiche même si le stockage est indisponible. */
    }
    window.dispatchEvent(new Event(consentEvent));
  }
  return (
    <button className="button button-secondary" onClick={review}>
      Revoir mon choix cookies
    </button>
  );
}
