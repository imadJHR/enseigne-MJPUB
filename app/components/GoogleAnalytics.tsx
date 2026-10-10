"use client";
import Script from "next/script";
import { useEffect, useState } from "react";

export const consentKey = "mjpub-consent";
export const consentEvent = "mjpub-consent-change";

// GA4 ne charge que si : ID configuré ET visiteur ayant accepté.
// Sans consentement, aucune requête vers Google n'est émise.
export default function GoogleAnalytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const [granted, setGranted] = useState(false);
  useEffect(() => {
    const read = () => {
      try {
        setGranted(localStorage.getItem(consentKey) === "accepted");
      } catch {
        setGranted(false);
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
  if (!GA_ID || !granted) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            anonymize_ip: true,
          });
        `}
      </Script>
    </>
  );
}
