# Refonte MJ PUB — palette du logo et visibilité locale

## Direction retenue
Les composants utilisent des angles droits : rayons à zéro pour les boutons, cartes, images, champs, menus, badges et fenêtres. Les composants UI partagés appliquent également ce choix, dans les deux thèmes.

Site destiné aux commerçants et entreprises de Saint-Amand-les-Eaux et du secteur de Valenciennes. Une identité de studio d’enseignes : Barlow Condensed pour les titres, Barlow pour les textes et les formulaires, couleurs du logo, lettres en relief et photos des réalisations existantes. Les polices sont hébergées par Next.js avec `next/font` et restent disponibles dans le configurateur. Fondation : CSS natif, Tailwind 4 et composants Radix existants. Variance 7/10, mouvement 3/10 limité aux interactions, densité 4/10.

| Couleur du logo | Valeur | Usage |
| --- | --- | --- |
| Cyan | #32B0E3 | Actions principales et sélection |
| Magenta | #ED118D | Lettres en relief et accents graphiques |
| Jaune | #FDDD00 | Repères sur mesure et invitation finale |
| Vert | #83B93F | Signalétique et repère local |
| Noir | #111214 | Texte clair, fond sombre |

Les couleurs sont extraites du logo existant. Les accents de texte sur fond clair utilisent des tons plus foncés pour rester lisibles. Contrastes calculés : noir sur cyan 7,55:1 ; texte secondaire clair 6,05:1 ; texte secondaire sombre 9,62:1 ; lien cyan foncé sur blanc 4,83:1.

Clair et sombre sont proposés avec un bouton SVG dans l’en-tête. Le premier affichage est clair, indépendamment du thème de l’appareil ; un choix explicite est conservé sous la clé locale mjpub-theme. Un script avant le premier rendu applique le choix enregistré. Les changements de préférence dans un autre onglet sont suivis ; effacer la préférence rétablit le mode clair. Les SVG personnalisés sont conservés conformément à la demande du propriétaire.

## Structure et conversion
Le logo de l’en-tête utilise son fond transparent d’origine, sans carré blanc. En mode sombre, un filtre SVG remplace l’encre sombre par du blanc tout en conservant les parties colorées et la transparence du fond. Le fichier `public/logo.png` reste la source commune aux deux thèmes.

Le footer reprend le même composant de logo, la même présentation MJ PUB et la mention « Enseignes & signalétique ». Chaque emplacement possède un identifiant de filtre distinct pour éviter les doublons dans la page ; le logo du footer est chargé sans priorité.

1. Hero : présentation de MJ PUB, photographie d’une réalisation, accès aux projets et bouton vers le choix d’enseigne.
2. Section dédiée après le hero : sélection de boîtier LED, rétroéclairage ou lettres 3D. La photographie ou l’illustration, le texte et le lien réagissent au choix, puis le configurateur s’ouvre avec le style présélectionné.
3. Trois étapes concrètes : choisir, personnaliser, demander un devis.
4. Solutions avec accès direct aux configurations LED ou relief ; panneaux dirigés vers leur page dédiée.
5. Réalisations photographiées, coordonnées locales, réponses aux questions et invitation finale.
6. Accès fixe au configurateur sur mobile ; estimation et bouton de devis fixes dans le configurateur.

Les choix, dimensions, accessoires et estimation passent dans la description du devis. Le type d’enseigne est également présélectionné. Le prix reste indicatif, hors pose et livraison. Les contrats des formulaires, le panier et les tarifs existants sont conservés.

## SEO local
- Accueil, trois services, catalogue, devis, contact et journal recentrés sur Saint-Amand-les-Eaux et ses environs.
- Page locale substantielle : /enseigne-saint-amand-les-eaux, reliée à la navigation, au pied de page et à l’accueil.
- Communes citées : Hasnon, Lecelles, Rosult, Raismes, Bruille-Saint-Amand, ainsi que le secteur de Valenciennes.
- Coordonnées cohérentes : 644 route de Lille, 59230 Saint-Amand-les-Eaux ; +33 7 81 54 63 59.
- LocalBusiness et Service utilisent une liste de villes dans areaServed.
- Titres, descriptions et URL canoniques propres. Les paramètres de style du configurateur gardent la canonique /configurateur.
- Nouvelle image sociale 1200 × 630 aux couleurs du logo, rendue par Next.js.
- Sitemap de 31 URL publiques. Panier, commande et brouillons juridiques en noindex.
- Conservation des anciennes URL de réalisations, articles et produit.
- Une seule source de contenu pour les articles et leurs résumés de recherche.

Aucune implantation supplémentaire, durée de trajet, disponibilité de pose ou note client n’est inventée. La livraison et la pose sont à confirmer sur devis. Le ciblage des villes représente les projets étudiés, pas des agences locales supplémentaires.

Repères géographiques consultés : [territoire de La Porte du Hainaut](https://www.agglo-porteduhainaut.fr/agglo/le-territoire/les-communes/), [unité urbaine de Saint-Amand-les-Eaux, INSEE](https://www.insee.fr/fr/metadonnees/geographie/unite-urbaine-2020/59402-saint-amand-les-eaux), [villes partenaires de Saint-Amand-les-Eaux](https://saint-amand-les-eaux.fr/villes-partenaires).

## Images
Les trois visuels du choix d’enseigne s’affichent en entier avec `object-fit: contain`, dans un cadre stable au format 4:3. Les photographies conservent leurs proportions, sur ordinateur et mobile, sans couper le haut de la façade.

Une illustration originale de lettres MJ PUB est générée avec l’outil intégré image_gen et livrée dans public/images/lettres-mjpub.webp, avec transparence. Largeur 1100 px, environ 84 Ko. Elle est identifiée comme illustration d’inspiration. Les réalisations restent les photographies d’origine ; le configurateur utilise également des photographies existantes pour ses exemples. Le prompt et la provenance figurent dans IMAGE-GENERATION.md.

## Vérifications de cette version
- Build de production réussi : 42 entrées, dont la nouvelle page locale et l’image sociale.
- TypeScript et ESLint sans erreur ni avertissement.
- Contrôle HTTP de 35 pages : un H1, un en-tête, un pied de page et une canonique par page ; langue française.
- 31 URL de sitemap, 36 liens internes vérifiés, 78 blocs JSON-LD valides.
- Quatre chemins inconnus retournent HTTP 404.
- Image sociale valide, HTTP 200, 1200 × 630 ; image du hero optimisée par Next.js, HTTP 200.
- Parcours rétroéclairage : texte et fixation transmis au devis, estimation de 588 € HT.
- Parcours boîtier LED : style, matériau et estimation repris ; type « Enseigne LED » présélectionné dans le devis.
- Parcours relief sur mobile : bouton fixe fonctionnel et type « Lettres Découpées » présélectionné dans le devis.
- Paramètre de style invalide : retour au choix lettres en relief.
- Bascule clair/sombre et persistance après rechargement vérifiées ; menu mobile refermé par Échap.
- Sept pages principales vérifiées sans débordement horizontal à 390 px ; accueil vérifié à 320 px. Structure complète contrôlée à 1280 px.
- Aucun message d’erreur console dans la session de production contrôlée.

Les contrôles du navigateur et du HTML ne constituent pas une mesure Lighthouse ou des Core Web Vitals en conditions réelles. Aucun formulaire n’a été envoyé au backend externe pendant les essais.

## Informations à compléter avant publication
Les pages juridiques restent des brouillons en noindex : raison sociale, SIRET, responsable de publication, hébergeur et informations de confidentialité à compléter. Le backend est externe : vérifier le traitement réel des demandes et confirmer les modalités commerciales avant publication.
### Ajustement après retour sur le hero
Le hero présente MJ PUB et une réalisation photographiée. Le choix de style est placé dans une section dédiée juste après. Les trois sélections changent le visuel, le texte alternatif, le descriptif et le lien du configurateur. Vérification navigateur : aucun contrôle de sélection dans le hero, trois états visuels distincts, boîtier LED repris dans le configurateur, aucun débordement à 320 et 390 px. Le mode initial clair est également vérifié avec préférence absente, invalide ou stockage indisponible ; le mode sombre explicitement enregistré reste conservé. Build, types et lint validés.

La typographie Barlow / Barlow Condensed et les images entières sont vérifiées dans le navigateur à 1440, 390 et 320 px. Les titres des pages de services utilisent également Barlow Condensed. Le mode sombre conserve le même affichage des images. La compilation de production, TypeScript, ESLint et le formatage des fichiers modifiés passent.

### Choix typographiques du configurateur
Les réglages de matériau, finition, fixation et accessoires sont indépendants pour les trois types d’enseigne. Le texte, la police et les dimensions restent communs pour faciliter leur comparaison. Le champ de hauteur laisse saisir la valeur puis applique les limites à la sortie du champ. Les résultats des essais de calcul, de changement de type et de transmission figurent dans `VERIFICATION-CONFIGURATEUR.md`.

Le configurateur propose 28 polices en cinq groupes : modernes, condensées et impact, élégantes et classiques, manuscrites et rétro, puis polices système. Un échantillon du texte sous la liste permet de comparer immédiatement les rendus, y compris sur mobile. Les nouvelles familles sont définies avec `next/font`, sans préchargement et dans la portée de la page configurateur. Chaque aperçu utilise la graisse réellement disponible pour la famille sélectionnée. Le nom de la police accompagne le projet dans le devis et le panier.

Vérification navigateur : 28 sélections distinctes au clavier, cohérence des polices entre l’échantillon et la simulation, transmission de « Great Vibes » au devis avec un texte accentué, aucun débordement à 390 px et échantillon à angles droits. Compilation de production et ESLint validés. Aucun formulaire envoyé.
