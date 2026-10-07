> Ce rapport décrit le code avant la refonte du 6 octobre 2026. Plusieurs constats ont été corrigés depuis. Le résultat actuel et les validations figurent dans DESIGN-SEO.md.

# Analyse du code MJ PUB

Audit du 6 octobre 2026. Analyse du dépôt local, des parcours métier, des configurations et des dépendances verrouillées. Le code applicatif n'a pas été corrigé pendant cet audit.

**Diagnostic :** le projet possède une base exploitable pour un site commercial, mais plusieurs défauts empêchent de considérer les commandes, les devis et le déploiement comme fiables. La mise à jour de sécurité et la réparation du panier passent avant les améliorations visuelles.

**Périmètre et architecture**

Le dépôt utilise Next.js App Router, React, TypeScript, Tailwind CSS, des composants Radix/shadcn et Framer Motion. Le verrouillage npm fixe Next.js à 15.4.5, React/React DOM à 19.1.0, TypeScript à 5.8.3 et Tailwind à 4.1.11.

Les 13 fichiers de pages couvrent l'accueil, le catalogue, la fiche produit, les accessoires, le blog et ses articles, les réalisations et leurs détails, le configurateur, le contact, la demande de devis, le panier et la commande. Les répertoires app/components et components/ui séparent composants métier et primitives d'interface. Le panier est partagé par un contexte React et enregistré dans localStorage. Les catalogues et contenus sont codés en dur.

Les formulaires contact, checkout, devis-request et configurator-email appellent un service externe : le code de ce backend n'est pas dans ce dépôt. Aucune base de données, administration ou intégration de paiement en ligne n'est implémentée ici. La commande proposée est un paiement à la livraison.

Le layout racine fournit la langue française, les métadonnées générales, la police Inter, les scripts Analytics, les providers et le Header. Le Footer est placé par les pages.

**Points solides**

- Une séparation entre interface réutilisable, contexte et certaines données existe déjà.
- Les filtres du catalogue et du blog sont simples et compréhensibles.
- Les mises à jour du panier utilisent des fonctions de mise à jour d'état, ce qui évite les lectures d'état périmées dans ces opérations.
- La demande de devis possède un indicateur d'envoi et des retours de succès et d'échec.
- Plusieurs images utilisent next/image et des dimensions ou des tailles adaptatives.
- La configuration TypeScript active strict, même si son contrôle est contourné pendant le build.
- Les écouteurs de scroll sont retirés lors du démontage.
- Les composants de dialogue et de sélection réutilisent Radix, qui fournit des mécanismes utiles de navigation au clavier.

**Priorités**

| Niveau | Signification | Corrections principales |
|---|---|---|
| P0 | Sécurité prioritaire | Mettre à jour la version vulnérable de Next.js |
| P1 | Fonctionnement ou fiabilité fortement affectés | Quantités, types, coordonnées du configurateur, envoi de commande, stockage du panier |
| P2 | Référencement, accessibilité et maintenance | Métadonnées, liens absents, dates, interface clavier, poids des images |
| P3 | Nettoyage et finition | Imports inutilisés, placeholders, états de chargement, documentation |

**Constats détaillés**

1. **P0 — Version de Next.js concernée par une faille critique.** Le package-lock fixe Next.js à 15.4.5. L'avis officiel CVE-2025-66478 concerne les applications App Router utilisant les versions touchées ; le correctif initial de la branche 15.4 est 15.4.8. Des avis ultérieurs ont ajouté d'autres correctifs. Il faut choisir une version actuellement maintenue et corrigée, aligner React, React DOM et eslint-config-next, puis reconstruire et redéployer. Le dépôt correspond au périmètre technique concerné ; la version réellement déployée n'a pas été inspectée et aucune exploitation n'a été testée. [Avis officiel Next.js](https://nextjs.org/blog/CVE-2025-66478), [correctifs complémentaires](https://nextjs.org/blog/security-update-2025-12-11).

2. **P1 — Quantité sélectionnée ignorée lors de l'ajout au panier.** Dans [CartContext.tsx](C:/Users/imadj/Desktop/enseigne-MJPUB/app/context/CartContext.tsx:47), la quantité est le deuxième argument de addToCart, avec une valeur par défaut de 1. Les [accessoires](C:/Users/imadj/Desktop/enseigne-MJPUB/app/accessoires/page.tsx:150) et la [fiche produit](C:/Users/imadj/Desktop/enseigne-MJPUB/app/produits/[slug]/page.tsx:351) mettent quantity dans le premier argument. La construction `{ ...item, quantity: quantityToAdd }` remplace donc la quantité choisie par 1. Reproduction exécutée sur la fonction extraite du code : sélectionner 5 accessoires à 20 € produit une ligne de quantité 1 et de total 20 €. Correction : transmettre la quantité en deuxième argument et unifier le contrat.

3. **P1 — Types du panier incompatibles entre les fichiers.** CartContext déclare id:number et image?:string, mais les producteurs transmettent des identifiants string et, sur la fiche produit, une image StaticImageData. L'interface CartItem du contexte n'est pas exportée alors que checkout l'importe. lib/CartItem.ts définit une autre version du type. Centraliser un type exporté, conserver des identifiants de variantes stables et normaliser les images. Les identifiants string actuels distinguent bien produits, accessoires et matériaux : aucune fusion erronée de variantes n'a été reproduite.

4. **P1 — Configuration Tailwind syntaxiquement invalide.** Dans [tailwind.config.ts](C:/Users/imadj/Desktop/enseigne-MJPUB/tailwind.config.ts:79), l'objet config n'est pas fermé avant export default. TypeScript et ESLint signalent l'erreur. Cela bloque le contrôle global des types. La configuration ne semble pas chargée par le CSS Tailwind 4 actuel ; il faut distinguer cette erreur du résultat de compilation de l'application.

5. **P1 — Erreurs TypeScript volontairement masquées au build.** [next.config.ts](C:/Users/imadj/Desktop/enseigne-MJPUB/next.config.ts:5) active ignoreBuildErrors:true. Des erreurs concrètes sont présentes : import Product depuis un module qui ne l'exporte pas, CartItem non exporté, Metadata non importé dans les détails des réalisations, paramètres implicitement any, lectures de .src sur des strings, types divergents d'accessoires, indexation du tarif PVC et type des variantes d'animation. Réparer ces contrats et remettre le contrôle TypeScript dans les vérifications obligatoires.

6. **P1 — Modèles d'accessoires divergents.** La [page accessoires](C:/Users/imadj/Desktop/enseigne-MJPUB/app/accessoires/page.tsx:31) utilise inStock:boolean, des images locales ou distantes et specifications.name. [QuickViewDialog](C:/Users/imadj/Desktop/enseigne-MJPUB/app/components/QuickViewDialog.tsx:27) attend inStock:number, images:string[] et specifications.property. L'effet visible est l'absence du nom des spécifications dans le dialogue. Le test `true > 0` fonctionne actuellement par coercition JavaScript, mais le contrat reste incorrect. Partager un seul type Accessory.

7. **P1 — Le configurateur promet un rappel sans recueillir de coordonnées.** [configuredItem](C:/Users/imadj/Desktop/enseigne-MJPUB/app/configurateur/page.tsx:543) et handleSendEmail transmettent la configuration seule. Il n'existe pas de champ nom, email ou téléphone dans ce parcours. Le succès annonce pourtant qu'un expert contactera le visiteur. Ajouter les coordonnées avant l'envoi ou transférer la configuration vers un formulaire de devis prérempli. Le backend externe pourrait disposer d'autres mécanismes, mais aucun identifiant client ou contact n'est fourni par ce code.

8. **P1 — Échecs de commande invisibles et soumissions multiples possibles.** Dans [checkout](C:/Users/imadj/Desktop/enseigne-MJPUB/app/checkout/page.tsx:44), les erreurs sont seulement envoyées à console.error. Aucun état d'envoi ne bloque le bouton pendant la requête. Un double clic peut envoyer deux commandes. Afficher un message d'erreur, désactiver l'envoi en cours et prévoir une clé d'idempotence vérifiée par le backend. Le formulaire contact ne bloque pas non plus les doubles soumissions.

9. **P1 — Chargement et sauvegarde du panier non protégés.** [CartContext](C:/Users/imadj/Desktop/enseigne-MJPUB/app/context/CartContext.tsx:35) parse directement localStorage sans try/catch ni validation. Un JSON corrompu, un accès au stockage refusé ou une mauvaise structure peuvent provoquer une erreur. La sauvegarde initiale écrit également le panier vide avant que l'état chargé soit appliqué ; les doubles exécutions des effets en développement Strict Mode rendent cet ordre fragile. Introduire un état de chargement terminé, une validation de structure et un traitement des erreurs de stockage. La perte du panier n'a pas été testée dans un navigateur pendant cet audit.

10. **P1 — Prix et quantités de commande fournis par le navigateur.** checkout envoie les items avec leurs prix et un totalTTC calculé côté client. Le même navigateur contrôle localStorage. Le serveur doit reconstruire les prix à partir des références et options autorisées, valider les quantités et recalculer livraison et taxes. Le dépôt ne permet pas de vérifier si cette protection existe déjà dans l'API ; il ne permet donc pas d'affirmer qu'une fraude est acceptée.

11. **P2 — Contrat des paramètres dynamiques à mettre en conformité avec Next.js 15.** Les pages [blog](C:/Users/imadj/Desktop/enseigne-MJPUB/app/blog/[slug]/page.tsx:28) et [réalisations](C:/Users/imadj/Desktop/enseigne-MJPUB/app/realisations/[slug]/page.tsx:274) déclarent params comme un objet synchrone. Next.js 15 prévoit une Promise à attendre dans les composants serveur et generateMetadata. L'accès synchrone bénéficie encore d'une compatibilité de transition dans cette version : ce n'est pas une preuve que toutes les routes échouent actuellement. La fiche produit utilise déjà use(params), mais ne type pas ses props. [Guide officiel Next.js 15](https://nextjs.org/docs/app/guides/upgrading/version-15).

12. **P2 — Métadonnées de trois pages non raccordées.** Les fichiers app/accessoires/metadata.ts, app/blog/metadata.ts et app/realisations/metadata.ts exportent des objets sans être importés par un layout ou une page serveur. Next.js ne les utilise pas simplement grâce à leur nom. De plus, demande-devis et configurateur utilisent next/head dans App Router. Migrer vers un export metadata ou generateMetadata dans un composant serveur et déplacer les interactions dans un composant client. [Documentation officielle des métadonnées](https://nextjs.org/docs/app/api-reference/functions/generate-metadata).

13. **P2 — URLs et ressources SEO de démonstration.** Le configurateur contient www.votresite.com/configurateur-enseigne et des images fictives. Les images og-blog.png, og-accessoires.png, og-realisations.png et og-image.png ne sont pas présentes dans public. Les favicons additionnels, apple-touch-icon.png et site.webmanifest référencés par le configurateur sont également absents. Remplacer ces références par des ressources existantes et des URLs du domaine réel.

14. **P2 — Images du blog incorrectes dans les métadonnées.** Les données de lib/blogPosts.ts définissent image comme une URL string. La [page article](C:/Users/imadj/Desktop/enseigne-MJPUB/app/blog/[slug]/page.tsx:62) utilise post.image.src, qui vaut undefined. Open Graph/Twitter basculent donc sur un fallback absent ; le JSON-LD fait de même. L'image visible utilise directement post.image et suit, elle, le bon contrat. Corriger les trois lectures de .src.

15. **P2 — Sitemap incomplet et domaine en HTTP.** [next-sitemap.config.js](C:/Users/imadj/Desktop/enseigne-MJPUB/next-sitemap.config.js:3) et les fichiers publics déclarent HTTP alors que les métadonnées utilisent HTTPS. Le sitemap présent contient les routes générales mais aucun article, produit ou détail de réalisation. Aucun generateStaticParams ni additionalPaths ne fournit actuellement ces URLs. Le panier et checkout sont inclus et héritent de robots index:true. Générer les URLs métier, utiliser HTTPS et définir une politique d'indexation adaptée aux pages transactionnelles.

16. **P2 — Deux en-têtes sur la majorité des pages.** Le [layout](C:/Users/imadj/Desktop/enseigne-MJPUB/app/layout.tsx:91) rend Header ; onze fichiers de pages le rendent également. Les deux en-têtes fixed se superposent et conservent des états indépendants. Cela ajoute des navigations accessibles en double et des écouteurs de scroll. Conserver l'en-tête commun dans le layout.

17. **P2 — Liens internes menant vers des contenus absents.** Le Footer référence /mentions-legales, /cgv et /politique-confidentialite, sans pages correspondantes. Il référence aussi enseigne-led-premium et lettres-decoupees-pvc, alors que seul panneau-dibond existe. La page produit non trouvé recommande également totem-lumineux, absent. Créer les contenus attendus ou retirer les liens concernés.

18. **P2 — Faux états 404.** Les trois pages dynamiques affichent une interface « non trouvé » mais n'appellent pas notFound(). Les lectures HTTP locales ont confirmé le statut 200 pour /produits/inexistant et /blog/inexistant. À l'inverse, /mentions-legales renvoie réellement 404. Utiliser notFound() côté serveur et un composant not-found adapté pour que le statut reflète l'absence de ressource.

19. **P2 — Dates des réalisations ambiguës et parfois incorrectes.** Les données utilisent des libellés français comme « Février 2024 » et les passent à new Date(...).toISOString() dans le JSON-LD. Leur parsing n'est pas portable. Sur Node 26.3.0 utilisé ici, « Février 2024 », « Avril 2024 » et « Août 2024 » sont interprétés comme janvier 2024, puis convertis en UTC. Selon le moteur, une date invalide peut aussi faire échouer toISOString. Stocker une date ISO explicite et formater son affichage séparément.

20. **P2 — Tarification du configurateur à clarifier et rendre cohérente.** Les lettres en relief et les boîtiers sont calculés selon une surface estimée ; les lettres rétroéclairées ont un forfait indépendant du texte et de la hauteur. Cette différence peut être voulue, mais aucun contrat métier ne la formalise. Pour lighted-box, la fixation « Gabarit + Entretoises » reste sélectionnable mais n'ajoute pas les 88 € appliqués aux autres styles. La branche boitier-lumineux n'est jamais proposée dans fixationOptions. Valider les règles avec le métier et couvrir chaque option disponible.

21. **P2 — Dimensions et aperçu approximatifs.** La largeur est signText.length × height × 0.6, indépendamment de la police et des glyphes. Des lettres étroites ou larges, espaces et caractères complexes modifient donc le prix sans mesure réelle de la composition. Avec 50 caractères et 100 cm de hauteur, la largeur estimée atteint 30 mètres. Le texte vide reste envoyable. Définir les limites de fabrication, refuser un texte vide et indiquer clairement la nature estimative du devis.

22. **P2 — États du configurateur redondants et calculs inutiles.** materialImageMap est recréé à chaque rendu et fait varier une dépendance de useMemo ; l'effet de synchronisation des matériaux se réexécute donc inutilement. Le choix sélectionné est dupliqué entre selectedMaterialId, material, thickness et couleurs. options ne possède pas de setter et reste figé sur ses valeurs initiales. Extraire les constantes et déduire les attributs d'une sélection unique ; retirer ou implémenter les options inactives.

23. **P2 — Catalogue et réalisations dupliqués.** Le catalogue existe dans data/productsData.ts et une autre copie dans produits/[slug]/page.tsx. Les réalisations sont définies séparément dans liste et détail. Certaines images principales et galleryImages divergent, notamment Time Shop, La Renaissance, L'Atelier et Sidi Bou Said. Centraliser les données et vérifier l'association entre projets et photographies. Le catalogue annonce 159 € « à partir de » alors qu'une option PVC est disponible à 129 € sur la fiche.

24. **P2 — Accessibilité des contrôles personnalisés.** CartSidebar n'utilise pas un dialogue accessible : absence de gestion explicite du focus, d'Escape et de verrouillage du scroll. Plusieurs boutons composés uniquement d'une icône n'ont pas de nom accessible. Les sections repliables du configurateur et les cartes sélectionnables utilisent des div/Card avec onClick sans équivalent clavier. Le menu mobile ne fournit pas aria-expanded. Utiliser des éléments button, des noms accessibles et les primitives de dialogue disponibles.

25. **P2 — Largeur fixe du panier latéral sur mobile.** CartSidebar utilise w-96, soit 384 px, sans limite à la largeur de l'écran. Sur un viewport de 320 ou 360 px, une partie du panneau peut sortir de l'écran. Utiliser une largeur bornée par 100vw et tester le parcours sur un petit écran.

26. **P2 — Liens englobant des boutons.** Plusieurs `<Link><Button>...</Button></Link>` produisent des contrôles interactifs imbriqués. Le composant Button supporte déjà asChild, utilisé correctement dans certaines parties du Header. Généraliser `<Button asChild><Link ... /></Button>` pour les navigations.

27. **P2 — Poids et rendu client trop importants pour du contenu statique.** public contient environ 116,8 Mio ; plusieurs PNG dépassent 5 Mio, avec un maximum voisin de 7,8 Mo. next/image peut réduire le transfert visible, mais les fichiers originaux et les coûts de traitement restent importants. La plupart des pages sont entièrement client ; l'accueil et la liste blog importent tous les articles avec leur contenu HTML alors qu'ils n'affichent que des résumés. Extraire les composants interactifs, conserver le contenu statique côté serveur, séparer résumés et articles, compresser les images et compléter sizes pour les images fill.

28. **P2 — Configuration Tailwind 3 et 4 mélangée.** Le CSS utilise le système @theme de Tailwind 4 et des couleurs oklch. Le fichier config conserve des définitions `hsl(var(--...))` et les animations d'accordéon, sans directive @config. Tailwind 4 ne détecte plus automatiquement les anciennes configurations JavaScript. Les classes animate-accordion-up/down risquent donc de ne pas recevoir les définitions prévues ; font-inter et text-xxs ne sont pas définies dans le thème montré. Choisir une configuration cohérente, idéalement CSS pour cette base Tailwind 4. Les polices du configurateur comme Pacifico et Montserrat ne sont pas chargées dans le projet : le navigateur utilise leurs fallbacks. [Guide officiel Tailwind 4](https://tailwindcss.com/docs/upgrade-guide).

29. **P2 — Formulaire de fichier sans limite réelle.** Le devis affiche « max. 10MB » mais handleFileChange ne vérifie ni taille ni type de manière explicite. accept est seulement une aide de sélection. L'interface annonce aussi un glisser-déposer sans gestionnaire de dépôt. Valider le fichier côté client pour un retour immédiat et côté serveur pour la protection réelle ; aligner le texte sur les interactions offertes.

30. **P2 — URLs d'API réparties dans les pages.** Le configurateur possède NEXT_PUBLIC_API_URL, mais contact, checkout et demande-devis contiennent une URL de production codée en dur. Cela complique les environnements de développement et de recette. Centraliser le client API, la configuration, les délais de requêtes et les erreurs. La disponibilité, CORS, la validation, l'anti-spam et l'envoi effectif des emails restent à vérifier dans le backend externe.

31. **P3 — Actions et coordonnées de démonstration.** « Demander un devis » dans panier n'a ni lien ni gestionnaire. Le bouton d'appel mobile du Header utilise +33123456789 alors que le site affiche +33781546359. Les réseaux sociaux du Footer pointent sur #, et les liens #contact des articles n'ont pas de cible correspondante sur la page article. Les textes alternatifs mentionnent Enseigne42, le copyright reste à 2025 et certains contenus mélangent France et Maroc. Harmoniser les informations et rendre chaque action effective.

32. **P3 — États de chargement et récupération d'erreurs incomplets.** Trois loading.tsx retournent null et aucune limite error.tsx n'est définie. Une erreur réseau ou de rendu peut donc laisser un parcours peu explicite. Prévoir des états utiles pour les parcours critiques ; leur absence n'implique pas que toutes les pages chargent lentement.

33. **P3 — Entretien du projet.** ESLint remonte 18 avertissements, surtout des imports inutilisés et la dépendance instable du configurateur. Le README est celui de create-next-app, sans documentation du backend, de la configuration ni des règles de prix. Aucun script de tests ou workflow CI n'est présent dans les fichiers examinés. Des bibliothèques comme nodemailer, dotenv et jspdf-html2canvas ne sont pas utilisées par le code local examiné. Documenter le projet, retirer les dépendances inutiles et ajouter quelques contrôles métier pertinents.

34. **P1 — Exports supplémentaires interdits dans les modules de pages.** Les validateurs générés par le build signalent HomePageJsonLd dans app/page.tsx, productsData dans produits/[slug]/page.tsx et realisations dans realisations/[slug]/page.tsx. Next.js impose un ensemble défini d'exports aux modules de pages. Déplacer les données et composants partagés vers des modules ordinaires, ou rendre les helpers privés à la page. Ces erreurs sont actuellement masquées par ignoreBuildErrors.

35. **P2 — Marque ajoutée deux fois aux titres.** Le layout applique le template `%s | MJ PUB`, alors que generateMetadata ajoute déjà `| MJ PUB` aux titres d'articles et de réalisations. Les réponses HTTP locales contiennent effectivement « … | MJ PUB | MJ PUB ». Fournir uniquement le titre du contenu au template ou définir un titre absolu lorsque nécessaire.

**Sécurité et données : limites de l'analyse**

Le HTML des articles est injecté avec dangerouslySetInnerHTML, mais il provient actuellement de fichiers locaux sous contrôle du dépôt : ce constat seul ne démontre pas une XSS exploitable. Si les articles viennent ensuite d'un CMS ou d'utilisateurs, il faudra assainir le HTML avant rendu. Les identifiants Analytics et de vérification Google visibles ne sont pas des mots de passe.

Analytics est chargé directement dans le layout et la carte Google est embarquée dans contact. Aucun mécanisme de consentement n'est visible. Les pages de confidentialité et de conditions liées depuis le Footer sont absentes. Ce sont des constats techniques ; la conformité juridique du service n'a pas été auditée.

Le backend doit être examiné séparément pour la validation des coordonnées et des fichiers, les prix, les limites de requêtes, l'idempotence des commandes, la délivrabilité et le stockage des données personnelles. Aucun formulaire réel n'a été envoyé pendant cet audit.

**Vérifications exécutées**

- Installation des 536 dépendances du verrouillage avec npm ci --ignore-scripts, sans changement de versions.
- Contrôle TypeScript standard : 3 erreurs de syntaxe dans tailwind.config.ts, empêchant la poursuite du contrôle complet.
- Contrôle complémentaire via l'API TypeScript, avec la même configuration, en excluant uniquement tailwind.config.ts et en ajoutant les déclarations d'images Next.js : 17 diagnostics supplémentaires dans les sources. Après le build, les validateurs de routes générés ajoutent 7 diagnostics sur les paramètres Promise et les exports de pages, pour un total de 24 diagnostics hors erreur de syntaxe Tailwind.
- ESLint sur app, components, data, lib et les configurations/types principaux : 1 erreur et 18 avertissements.
- Reproduction isolée de la quantité ignorée avec le corps de la fonction réellement extraite du contexte.
- Vérification des dates françaises : plusieurs mois sont interprétés comme janvier dans le moteur local.
- Vérification du motif d'image encrypted-tbn?.gstatic.com avec le matcher de Next.js 15.4.5 : le domaine encrypted-tbn0.gstatic.com correspond. Ce motif n'a donc pas été retenu comme un défaut confirmé.
- Build direct avec Next.js local 15.4.5 : premier essai arrêté par le refus réseau de télécharger Inter ; second essai avec accès réseau réussi. Le build affiche explicitement « Skipping validation of types ». Son succès ne signifie donc pas que TypeScript est valide. La commande directe ne lance pas le postbuild next-sitemap et ne modifie pas les sitemaps publics suivis par Git.
- Le build mesure environ 180 kB de JavaScript initial pour l'accueil et 203 kB pour le configurateur. Ces tailles ne constituent pas une mesure de vitesse réelle ou de Core Web Vitals.
- Serveur de production local démarré temporairement : 8 routes lues en HTTP sans soumettre de formulaire. Confirmation des deux Header sur accessoires, produits, articles et réalisations ; du titre générique de la page accessoires ; du fallback d'image sociale du blog ; des faux 404 et de la duplication de la marque dans les titres. Ces lectures vérifient le HTML serveur, pas les interactions après hydratation.

La version locale de Node est 26.3.0. Les interactions dans un navigateur, le rendu sur appareils réels, les métriques de performance et le serveur API externe n'ont pas été validés par ces contrôles.

**Ordre de remise en état proposé**

1. Mettre à jour la pile concernée par les avis de sécurité et vérifier le verrouillage réellement déployé.
2. Réparer la syntaxe et les types ; réactiver le contrôle TypeScript du build.
3. Corriger quantité et persistance du panier ; protéger les envois de commandes.
4. Ajouter les coordonnées au configurateur et formaliser les règles de tarification.
5. Centraliser catalogues, réalisations et accès API.
6. Raccorder les métadonnées, compléter les routes attendues et générer le sitemap métier.
7. Corriger navigation clavier et petit écran ; alléger images et frontières client.
8. Documenter et automatiser les contrôles de quantité, variantes, calculs de prix et échecs d'envoi.
