"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Lightbulb, ShoppingCart, ChevronDown } from "lucide-react"
import { useCart } from "../context/CartContext"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import logo from "@/public/logo.png"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
  const { getTotalItems, setIsOpen } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    setIsProductsDropdownOpen(false)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200' : 'bg-white/90 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={handleLinkClick}
            className="flex items-center space-x-2 group"
          >
            <Image
              src={logo}
              alt="Enseigne42 Logo"
              className="h-10 w-auto"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              href="/"
              onClick={handleLinkClick}
              className="text-gray-900 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base"
            >
              Accueil
            </Link>
            <Link
              href="/configurateur"
              onClick={handleLinkClick}
              className="text-gray-900 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base"
            >
              Configurateur
            </Link>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={toggleProductsDropdown}
                className="flex items-center space-x-1 text-gray-900 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base"
              >
                <span>Produits</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProductsDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden animate-in fade-in zoom-in-95"
                  onMouseLeave={() => setIsProductsDropdownOpen(false)}
                >
                  <Link
                    href="/produits"
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-gray-900 hover:bg-blue-50 font-medium border-b border-gray-200"
                  >
                    Tous les produits
                  </Link>
                  <Link
                    href="/produits/enseigne-led-premium"
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-gray-900 hover:bg-blue-50"
                  >
                    Enseignes LED
                  </Link>
                  <Link
                    href="/produits/lettres-decoupees-pvc"
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-gray-900 hover:bg-blue-50"
                  >
                    Lettres Découpées
                  </Link>
                  <Link
                    href="/produits/panneau-dibond"
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-gray-900 hover:bg-blue-50"
                  >
                    Panneaux Dibond
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/accessoires"
              onClick={handleLinkClick}
              className="text-gray-900 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base"
            >
              Accessoires
            </Link>
            <Link
              href="/realisations"
              onClick={handleLinkClick}
              className="text-gray-900 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base"
            >
              Réalisations
            </Link>
            <Link
              href="/blog"
              onClick={handleLinkClick}
              className="text-gray-900 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base"
            >
              Blog
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={() => setIsOpen(true)}
              variant="outline"
              className="border-gray-300 hover:border-blue-600 text-gray-900 hover:text-blue-600 hover:bg-blue-50 bg-transparent relative group"
            >
              <ShoppingCart className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              Panier
              {getTotalItems() > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center p-0">
                  {getTotalItems()}
                </Badge>
              )}
            </Button>

            <Button asChild className="hidden lg:flex bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/contact" onClick={handleLinkClick}>
                <Phone className="h-4 w-4 mr-2" />
                Contactez-nous
              </Link>
            </Button>

            <Button asChild className="hidden lg:flex bg-green-600 hover:bg-green-700 text-white">
              <Link href="/demande-devis" onClick={handleLinkClick}>
                <Lightbulb className="h-4 w-4 mr-2" />
                Demande Devis Gratuit
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 p-1 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <>
                <Menu className="h-6 w-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg mt-2 mb-4 p-4 space-y-3 animate-in fade-in slide-in-from-top-4 border border-gray-200 shadow-lg">
            <Link
              href="/"
              onClick={handleLinkClick}
              className="block py-2 px-3 text-gray-900 hover:bg-blue-50 rounded-md transition-colors font-medium"
            >
              Accueil
            </Link>
            <Link
              href="/configurateur"
              onClick={handleLinkClick}
              className="block py-2 px-3 text-gray-900 hover:bg-blue-50 rounded-md transition-colors font-medium"
            >
              Configurateur
            </Link>

            <div className="space-y-1">
              <button
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                className="w-full flex justify-between items-center py-2 px-3 text-gray-900 hover:bg-blue-50 rounded-md transition-colors font-medium"
              >
                <span>Produits</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProductsDropdownOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link
                    href="/produits"
                    onClick={handleLinkClick}
                    className="block py-2 px-3 text-gray-900 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    Tous les produits
                  </Link>
                  <Link
                    href="/produits/enseigne-led-premium"
                    onClick={handleLinkClick}
                    className="block py-2 px-3 text-gray-900 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    Enseignes LED
                  </Link>
                  <Link
                    href="/produits/lettres-decoupees-pvc"
                    onClick={handleLinkClick}
                    className="block py-2 px-3 text-gray-900 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    Lettres Découpées
                  </Link>
                  <Link
                    href="/produits/panneau-dibond"
                    onClick={handleLinkClick}
                    className="block py-2 px-3 text-gray-900 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    Panneaux Dibond
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/accessoires"
              onClick={handleLinkClick}
              className="block py-2 px-3 text-gray-900 hover:bg-blue-50 rounded-md transition-colors font-medium"
            >
              Accessoires
            </Link>
            <Link
              href="/realisations"
              onClick={handleLinkClick}
              className="block py-2 px-3 text-gray-900 hover:bg-blue-50 rounded-md transition-colors font-medium"
            >
              Réalisations
            </Link>
            <Link
              href="/blog"
              onClick={handleLinkClick}
              className="block py-2 px-3 text-gray-900 hover:bg-blue-50 rounded-md transition-colors font-medium"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="block py-2 px-3 text-gray-900 hover:bg-blue-50 rounded-md transition-colors font-medium"
            >
              Contact
            </Link>
            <Link
              href="/demande-devis"
              onClick={handleLinkClick}
              className="block py-2 px-3 text-gray-900 hover:bg-blue-50 rounded-md transition-colors font-medium"
            >
              Demande Devis Gratuit
            </Link>

            <div className="pt-3 border-t border-gray-200 space-y-3">
              <Button
                onClick={() => {
                  setIsOpen(true)
                  setIsMenuOpen(false)
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Panier ({getTotalItems()})
              </Button>

              <Button asChild variant="outline" className="w-full border-gray-300 text-gray-900 hover:bg-blue-50">
                <a href="tel:+33123456789">
                  <Phone className="h-4 w-4 mr-2" />
                  Appelez-nous
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
