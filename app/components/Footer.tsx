import Link from "next/link";
import { ArrowUpRight } from "@/components/Icons";
import { site } from "@/lib/site";
import BrandLogo from "./BrandLogo";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link
            href="/"
            className="brand"
            aria-label="MJ PUB, revenir à l’accueil"
          >
            <BrandLogo priority={false} filterId="mjpub-footer-logo-dark" />
            <span>
              <b>
                MJ<span className="brand-light">PUB</span>
              </b>
              <small>Enseignes & signalétique</small>
            </span>
          </Link>
          <p>
            Donner du relief à votre identité.
            <br />
            Et de la visibilité à votre activité.
          </p>
          <span>Saint-Amand-les-Eaux · Valenciennes & environs</span>
        </div>
        <div>
          <h2>Nos solutions</h2>
          <Link href="/enseignes-lumineuses">Enseignes lumineuses</Link>
          <Link href="/lettres-decoupees">Lettres découpées</Link>
          <Link href="/signaletique">Panneaux & signalétique</Link>
          <Link href="/accessoires">Accessoires de fixation</Link>
        </div>
        <div>
          <h2>Votre projet</h2>
          <Link href="/realisations">Nos réalisations</Link>
          <Link href="/configurateur">Configurer une enseigne</Link>
          <Link href="/blog">Conseils & inspiration</Link>
          <Link href="/enseigne-saint-amand-les-eaux">
            Votre partenaire local
          </Link>
          <Link href="/contact">Nous contacter</Link>
        </div>
        <div>
          <h2>Parlons-en</h2>
          <a className="footer-phone" href={site.phoneHref}>
            {site.phone}
            <ArrowUpRight size={16} />
          </a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>
            {site.address}
            <br />
            {site.postalCode} {site.city}
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} MJ PUB</p>
        <div>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/politique-confidentialite">Confidentialité</Link>
        </div>
        <span>De l’idée à l’enseigne.</span>
      </div>
    </footer>
  );
}
