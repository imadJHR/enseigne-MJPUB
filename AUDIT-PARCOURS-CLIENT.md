# Revue du site avec une vision client

Revue du 6 octobre 2026 sur `http://localhost:3215/`, ordinateur 1280 × 900 et mobile 390 × 844. Simulation du parcours d’un commerçant cherchant une enseigne, avec les textes fictifs « BOULANGERIE MARTIN » et « TEST CLIENT ». Il s’agit d’une observation du parcours, pas d’une étude menée auprès de clients réels.

## Avis général

L’accueil présente maintenant MJ PUB, ses enseignes et son ancrage à Saint-Amand-les-Eaux. Le choix du style après la présentation suit une progression compréhensible. Le principal frein apparaît ensuite : le configurateur demande des décisions techniques à un client qui souhaite surtout expliquer son besoin et savoir combien son projet pourrait coûter.

## Ce qui fonctionne

- La présentation de l’entreprise précède le choix du produit.
- Les trois styles réagissent à la sélection et ouvrent le configurateur correspondant.
- Les photographies de réalisations apportent des exemples concrets. La page MJ Barber explique les éléments du projet.
- Le texte, le style et les options du configurateur sont conservés dans la demande de devis.
- Le téléphone, l’adresse et la zone desservie sont accessibles. Un client ayant déjà son logo dispose d’un accès direct au devis.
- Le bouton de devis et l’estimation restent accessibles sur mobile. Aucun débordement horizontal observé à 390 px.

## Corrections prioritaires

Mise à jour après vérification du configurateur : le défaut de saisie « 20 → 100 » est corrigé. Les matériaux et les accessoires sont également mémorisés séparément pour chaque type d’enseigne. Les observations ci-dessous décrivent la version au moment de l’audit initial.

| Priorité | Observation vérifiée | Conséquence pour le client | Changement conseillé |
| --- | --- | --- | --- |
| 1 | En sélectionnant la hauteur puis en tapant « 20 » au clavier, le champ affiche finalement « 100 ». La valeur est bornée à chaque frappe. | La dimension demandée et l’estimation peuvent changer sans que le client le comprenne. | Laisser saisir la valeur, puis vérifier les limites à la sortie du champ ou à la validation. Vérifier aussi la saisie au clavier mobile. |
| 2 | Des options comme les épaisseurs, les watts, les modules LED, les entretoises et l’interrupteur pompier sont proposées sans guide de choix. Une enseigne lumineuse commence avec « Sans alimentation » et zéro module supplémentaire. | Un commerçant peut se demander si le prix comprend une enseigne utilisable et choisir des accessoires au hasard. | Commencer par style, texte, dimensions et finition. Expliquer les éléments compris, proposer « À définir avec MJ PUB », puis ranger les accessoires dans des options avancées. Faire valider les recommandations techniques par l’entreprise. |
| 2 | Sur mobile, l’aperçu se situe après les quatre groupes de réglages. Lors de la saisie du texte, il se trouve environ 1 410 px plus bas que le champ. | Le client voit le prix réagir mais ne voit pas l’apparence évoluer pendant la personnalisation. | Placer un aperçu compact près du texte et organiser les réglages en étapes courtes. |
| 3 | Le configurateur annonce un prix hors pose et livraison ; le panier affiche « Livraison offerte » dès 200 € HT, puis le formulaire de commande affiche 0 € de livraison. | Le client peut comprendre cette gratuité comme un engagement, malgré la note de confirmation ultérieure. | Confirmer la politique commerciale pour les enseignes sur mesure. Employer le même statut et les mêmes conditions dans le configurateur, le panier et le récapitulatif. |
| 3 | Le configurateur propose à la fois un devis et un panier conduisant à « Transmettre ma commande », sans paiement en ligne et avec confirmation ultérieure. | Deux chemins proches peuvent laisser hésiter sur la différence entre une demande et une commande. | Définir clairement le parcours des enseignes sur mesure : préparation du projet, devis, validation. Préciser le rôle du panier pour les accessoires ou les demandes de commande. |
| 4 | Le devis ne possède qu’un champ de pièce jointe, sans sélection multiple, alors que le contenu invite à préparer le logo et une photo de façade. | Le client ne peut pas joindre ces deux fichiers séparément dans une même demande. | Ajouter des champs distincts « Votre logo » et « Photos de votre façade », avec formats et limites explicites. |
| 4 | Les mentions légales affichent encore un texte demandant de renseigner les informations de publication avant la mise en ligne. | Un client qui vérifie l’entreprise voit une page inachevée. | Compléter la page avec les informations réelles fournies par MJ PUB. |

## Ajustements de présentation

Sur mobile, raccourcir l’introduction de la section de choix aiderait à voir plus rapidement les trois styles et leur bouton. Ajouter une phrase simple à chaque style faciliterait la comparaison : face lumineuse, halo derrière les lettres, ou relief sans éclairage.

Le client doit aussi comprendre ce qui arrive après le devis : examen des dimensions et du logo, proposition, validation avant fabrication. Les délais de réponse, de fabrication et les conditions de pose doivent être affichés uniquement lorsqu’ils sont confirmés par MJ PUB.

Les photographies de réalisations sont utiles ; des dimensions, matériaux ou vues de jour et de nuit documentés rendraient la comparaison plus concrète. Ajouter une commune seulement si l’emplacement du projet est connu.

## Parcours conseillé

Présentation de MJ PUB → choix visuel du style → texte ou logo et dimensions → aperçu et estimation clairement expliquée → coordonnées et photos → validation du projet avec MJ PUB.

## Limites de la vérification

Les parcours devis et panier ont été examinés jusqu’aux formulaires. Aucune demande ni commande n’a été envoyée ; la réception réelle par l’entreprise reste à vérifier. Le seul article fictif ajouté au panier a été retiré. Cette revue n’a modifié aucun fichier de l’application.
