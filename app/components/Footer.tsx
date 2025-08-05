"use client"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import logo from "@/public/logo.png"
import Image from "next/image"

export default function Footer() {
  const handleLinkClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <footer className="bg-gray-9zzz00 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" onClick={handleLinkClick} className="flex items-center space-x-2">
              <Image
                src={logo}
                alt="Enseigne42 Logo"
                className="h-10 w-auto"
                width={120}
                height={40}
                priority
              />
            </Link>
            <p className="text-gray-300">
              Spécialiste des enseignes lumineuses et lettres découpées sur mesure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-indigo-400">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" onClick={handleLinkClick} className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/configurateur" onClick={handleLinkClick} className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Configurateur
                </Link>
              </li>
              <li>
                <Link href="/produits" onClick={handleLinkClick} className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Nos Produits
                </Link>
              </li>
              <li>
                <Link href="/accessoires" onClick={handleLinkClick} className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Accessoires
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={handleLinkClick} className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={handleLinkClick} className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-indigo-400">Nos Produits</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/produits/enseigne-led-premium" onClick={handleLinkClick} className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Enseignes LED
                </Link>
              </li>
              <li>
                <Link href="/produits/lettres-decoupees-pvc" onClick={handleLinkClick} className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Lettres Découpées
                </Link>
              </li>
              <li>
                <Link href="/produits/panneau-dibond" onClick={handleLinkClick} className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Panneaux Dibond
                </Link>
              </li>
              <li>
                <Link href="/produits" onClick={handleLinkClick} className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Voir tous les produits
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-indigo-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-indigo-400" />
                <span className="text-gray-300">01 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-indigo-400" />
                <span className="text-gray-300">contact@enseigne42.fr</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-indigo-400" />
                <span className="text-gray-300">
                  123 Rue de l'Industrie
                  <br />
                  75001 Paris, France
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Enseigne42. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/mentions-legales" onClick={handleLinkClick} className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
              Mentions Légales
            </Link>
            <Link href="/cgv" onClick={handleLinkClick} className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
              CGV
            </Link>
            <Link href="/politique-confidentialite" onClick={handleLinkClick} className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
              Politique de Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
