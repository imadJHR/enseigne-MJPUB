# MJ PUB : site d’enseignes et de signalétique

Site Next.js en français : enseignes lumineuses LED, lettres découpées, panneaux et accessoires. Refonte de l’interface et des contenus aux couleurs du logo, avec modes clair et sombre et un parcours vers le configurateur. Contenus locaux pour Saint-Amand-les-Eaux et le secteur de Valenciennes.

## Démarrer

Node.js 20.9 ou supérieur et npm sont nécessaires.

```sh
npm ci
npm run dev
```

Le site est disponible sur http://localhost:3000.

```sh
npm run typecheck
npm run lint
npm run build
npm start
```

## Configuration

- `NEXT_PUBLIC_SITE_URL` : URL publique définitive, sans barre oblique finale. Valeur par défaut : https://lettre.enseigne-mjpub.fr.
- `NEXT_PUBLIC_API_URL` : serveur des formulaires. Valeur par défaut : https://enseigne-mjpub-api.vercel.app.

Ces variables doivent être définies **avant le build**. Ce dépôt contient le frontend ; le traitement des demandes dépend du serveur externe.

## Modifier le site

- `lib/site.ts` : coordonnées, communes ciblées, URL et métadonnées communes.
- `lib/services.ts` : trois pages de services.
- `lib/realisations.ts` : projets, photos et anciennes URL conservées.
- `lib/blogPosts.ts` : articles et liens associés.
- `lib/blogSummaries.ts` : type des résumés ; le journal les extrait automatiquement des articles.
- `data/productsData.ts` : panneau et variantes.
- `lib/configurator.ts` : matériaux, tarifs indicatifs et accessoires.
- `app/globals.css` : structure et composants communs.
- `app/brand.css` : palette du logo, thèmes, nouvelle identité et responsive.
- `app/context/ThemeContext.tsx` et `lib/theme.ts` : préférence de thème et application avant le premier rendu.
- `app/components/ConfigurationEntry.tsx` : choix d’enseigne sur l’accueil.
- `app/enseigne-saint-amand-les-eaux/page.tsx` : page locale.
- `app/opengraph-image.tsx` : image de partage aux couleurs du logo.
- `components/Icons.tsx` : icônes SVG personnalisées, sans bibliothèque d’icônes.

Le sitemap et robots.txt sont générés par Next.js. Les anciennes pages publiques restent accessibles. Le panier, la commande et les pages juridiques sont en noindex.

## Formulaires

Les contrats de l’API existante sont conservés :
- Contact : `POST /api/contact`, JSON.
- Devis : `POST /api/devis-request`, multipart avec fichier facultatif.
- Commande : `POST /api/checkout`, JSON contenant `formData` et `orderSummary`.

Les erreurs sont affichées, les doublons de soumission sont bloqués et le délai réseau est limité à 20 secondes. Le configurateur accepte ?style=cut-out, ?style=lighted ou ?style=lighted-box et passe ses choix au formulaire de devis via le stockage de session. Le panier est conservé dans le stockage local.

Les prix sont affichés en HT et TTC estimés. La validation du prix, des quantités, des fichiers et des disponibilités doit également exister côté serveur. Une demande de commande ne déclenche aucun paiement en ligne.

## Avant publication

Compléter les mentions légales avec la raison sociale, le SIRET, le responsable de publication et l’hébergeur. Préciser les durées de conservation et les prestataires dans la politique de confidentialité. Confirmer les tarifs et modalités commerciales, puis vérifier le traitement réel des demandes par le backend.

Voir `DESIGN-SEO.md` pour les choix de refonte et les vérifications.
