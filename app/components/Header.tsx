"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Lightbulb, ShoppingCart, ChevronDown } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const { getTotalItems, setIsOpen } = useCart();

  // Gestion du scroll pour l'effet de fond
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu et le dropdown après clic sur un lien
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsProductsDropdownOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  // Toggle du dropdown "Produits"
  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={handleLinkClick}
            className="flex items-center space-x-2 group"
            aria-label="Accueil - Enseigne42"
          >
            <Image
              src={logo}
              alt="Enseigne42 Logo"
              className="h-8 sm:h-10 w-auto"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-4">
            <Link
              href="/"
              onClick={handleLinkClick}
              className="text-gray-900 hover:text-blue-600 transition-colors font-medium text-xs lg:text-sm px-2 py-1"
            >
              Accueil
            </Link>
            <Link
              href="/configurateur"
              onClick={handleLinkClick}
              className="text-gray-900 hover:text-blue-600 transition-colors font-medium text-xs lg:text-sm px-2 py-1"
            >
              Configurateur
            </Link>

           <Link
              href="/produits"
              onClick={handleLinkClick}
              className="text-gray-900 hover:text-blue-600 transition-colors font-medium text-xs lg:text-sm px-2 py-1"
            >
              Produits
            </Link>

            <Link
              href="/accessoires"
              onClick={handleLinkClick}
              className="text-gray-900 hover:text-blue-600 transition-colors font-medium text-xs lg:text-sm px-2 py-1"
            >
              Accessoires
            </Link>
            <Link
              href="/realisations"
              onClick={handleLinkClick}
              className="text-gray-900 hover:text-blue-600 transition-colors font-medium text-xs lg:text-sm px-2 py-1"
            >
              Réalisations
            </Link>
            <Link
              href="/blog"
              onClick={handleLinkClick}
              className="text-gray-900 hover:text-blue-600 transition-colors font-medium text-xs lg:text-sm px-2 py-1"
            >
              Blog
            </Link>
          </nav>

          {/* Boutons CTA (Desktop) */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Button
              onClick={() => setIsOpen(true)}
              variant="outline"
              size="sm"
              className="border-gray-300 hover:border-blue-600 text-gray-900 hover:text-blue-600 hover:bg-blue-50 bg-transparent relative group h-8 sm:h-9 px-2 sm:px-3"
            >
              <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm">Panier</span>
              {getTotalItems() > 0 && (
                <Badge className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-[10px] h-4 w-4 rounded-full flex items-center justify-center p-0">
                  {getTotalItems()}
                </Badge>
              )}
            </Button>

            <Button
              asChild
              size="sm"
              className="hidden lg:inline-flex bg-blue-600 hover:bg-blue-700 text-white h-8 sm:h-9 px-2 sm:px-3"
            >
              <Link href="/contact" onClick={handleLinkClick} className="flex items-center">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                <span className="text-xs sm:text-sm">Contact</span>
              </Link>
            </Button>

            <Button
              asChild
              size="sm"
              className="hidden xl:inline-flex bg-green-600 hover:bg-green-700 text-white h-8 sm:h-9 px-2 sm:px-3"
            >
              <Link href="/demande-devis" onClick={handleLinkClick} className="flex items-center">
                <Lightbulb className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                <span className="text-xs sm:text-sm">Devis Gratuit</span>
              </Link>
            </Button>
          </div>

          {/* Bouton Menu Mobile */}
          <button
            className="md:hidden text-gray-900 p-1.5 rounded-md hover:bg-gray-100 transition-colors relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <>
                <Menu className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] h-4 w-4 rounded-full flex items-center justify-center -mt-1 -mr-1">
                    {getTotalItems()}
                  </span>
                )}
              </>
            )}
          </button>
        </div>

        {/* Menu Mobile (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-b-lg shadow-lg border-x border-b border-gray-200 px-3 pb-3 pt-2">
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                onClick={handleLinkClick}
                className="py-2 px-3 text-gray-900 hover:bg-blue-50 rounded-md transition-colors font-medium text-sm"
              >
                Accueil
              </Link>
              <Link
                href="/configurateur"
                onClick={handleLinkClick}
                className="py-2 px-3 text-gray-900 hover:bg-blue-50 rounded-md transition-colors font-medium text-sm"
              >
                Configurateur
              </Link>

              <Link
                href="/produits"
                onClick={handleLinkClick}
                className="py-2 px-3 text-gray-900 hover:bg-blue-50 rounded-md transition-colors font-medium text-sm"
              >
                Produits
              </Link>
              <Link
                href="/accessoires"
                onClick={handleLinkClick}
                className="py-2 px-3 text-gray-900 hover:bg-blue-50 rounded-md transition-colors font-medium text-sm"
              >
                Accessoires
              </Link>
              <Link
                href="/realisations"
                onClick={handleLinkClick}
                className="py-2 px-3 text-gray-900 hover:bg-blue-50 rounded-md transition-colors font-medium text-sm"
              >
                Réalisations
              </Link>
              <Link
                href="/blog"
                onClick={handleLinkClick}
                className="py-2 px-3 text-gray-900 hover:bg-blue-50 rounded-md transition-colors font-medium text-sm"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="py-2 px-3 text-gray-900 hover:bg-blue-50 rounded-md transition-colors font-medium text-sm"
              >
                Contact
              </Link>
              <Link
                href="/demande-devis"
                onClick={handleLinkClick}
                className="py-2 px-3 text-gray-900 hover:bg-blue-50 rounded-md transition-colors font-medium text-sm"
              >
                Demande Devis Gratuit
              </Link>
            </div>

            {/* Boutons Mobile */}
            <div className="pt-3 mt-2 border-t border-gray-200 space-y-2">
              <Button
                onClick={() => {
                  setIsOpen(true);
                  setIsMenuOpen(false);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-9 text-sm"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Panier ({getTotalItems()})
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full border-gray-300 text-gray-900 hover:bg-blue-50 h-9 text-sm"
              >
                <a href="tel:+33123456789" className="flex items-center justify-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Appelez-nous
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
