import Link from "next/link";
export default function NotFound() {
  return (
    <div className="container empty-state">
      <p className="eyebrow">Page introuvable · 404</p>
      <h1>Ce chemin s’arrête ici.</h1>
      <p>
        Retrouvez nos solutions ou contactez-nous pour votre projet d’enseigne.
      </p>
      <Link className="button button-primary" href="/produits">
        Découvrir nos solutions
      </Link>
    </div>
  );
}
