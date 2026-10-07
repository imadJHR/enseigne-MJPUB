"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  ArrowUpRight,
  Menu,
  ShoppingBag,
  X,
  Phone,
  MapPin,
} from "@/components/Icons";
import { useCart } from "../context/CartContext";
import { site } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";
import BrandLogo from "./BrandLogo";
const links = [
  { href: "/produits", label: "Nos enseignes" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/enseigne-saint-amand-les-eaux", label: "Votre atelier local" },
  { href: "/contact", label: "Contact" },
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { getTotalItems, setIsOpen } = useCart();
  useEffect(() => {
    if (!open) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);
  const close = () => setOpen(false);
  const showMobileCTA = ![
    "/configurateur",
    "/demande-devis",
    "/checkout",
  ].includes(pathname);
  return (
    <>
      <div className="local-topbar">
        <div className="container">
          <Link href="/enseigne-saint-amand-les-eaux">
            <MapPin size={13} />
            Saint-Amand-les-Eaux & ses environs
          </Link>
          <a href={site.phoneHref}>
            <Phone size={13} />
            {site.phone}
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link
            href="/"
            className="brand"
            aria-label="MJ PUB, accueil"
            onClick={close}
          >
            <BrandLogo />
            <span>
              <b>
                MJ<span className="brand-light">PUB</span>
              </b>
              <small>Enseignes & signalétique</small>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Navigation principale">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={
                  pathname.startsWith(link.href) ? "page" : undefined
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <ThemeToggle />
            <button
              className="icon-button cart-trigger"
              aria-label={`Ouvrir le panier, ${getTotalItems()} articles`}
              onClick={() => {
                close();
                setIsOpen(true);
              }}
            >
              <ShoppingBag size={20} />
              {getTotalItems() > 0 && (
                <span className="cart-count">{getTotalItems()}</span>
              )}
            </button>
            <Link
              href="/configurateur"
              className="button button-primary header-configure"
            >
              Configurer mon enseigne
              <ArrowUpRight size={17} />
            </Link>
            <button
              className="icon-button menu-trigger"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              aria-controls="navigation-mobile"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <nav
            id="navigation-mobile"
            className="mobile-nav container"
            aria-label="Navigation mobile"
          >
            {links.map((link) => (
              <Link onClick={close} key={link.href} href={link.href}>
                {link.label}
                <ArrowUpRight size={18} />
              </Link>
            ))}
            <Link onClick={close} href="/accessoires">
              Accessoires
              <ArrowUpRight size={18} />
            </Link>
            <Link onClick={close} href="/blog">
              Conseils pour votre projet
              <ArrowUpRight size={18} />
            </Link>
            <Link onClick={close} href="/demande-devis">
              Demander un devis
              <ArrowUpRight size={18} />
            </Link>
            <Link
              onClick={close}
              href="/configurateur"
              className="button button-primary"
            >
              Configurer mon enseigne
              <ArrowUpRight size={18} />
            </Link>
          </nav>
        )}
      </header>
      {showMobileCTA && (
        <div className="mobile-configure">
          <Link
            className="button button-primary"
            href="/configurateur"
            onClick={close}
          >
            Configurer mon enseigne
            <ArrowUpRight size={18} />
          </Link>
        </div>
      )}
    </>
  );
}
