# Configurations par type d’enseigne

Vérification du 6 octobre 2026 sur la version de production locale, sur ordinateur et mobile.

## Options proposées

| Type | Matériaux et finitions | Éclairage | Calcul de base existant |
| --- | --- | --- | --- |
| Lettres en relief | 14 variantes : PVC blanc/noir et composite aluminium | Aucun réglage LED ou alimentation | Surface indicative × tarif du matériau |
| Lettres rétroéclairées | 4 variantes : PVC blanc/noir, 15 ou 19 mm | Halo arrière, couleur et intensité d’aperçu, accessoires électriques | Forfait du matériau sélectionné |
| Lettres boîtier aluminium | 2 variantes : chant noir/blanc, face plexiglas blanc | Face lumineuse, couleur et intensité d’aperçu, accessoires électriques | Surface indicative × tarif du boîtier |

Le texte, la police, la hauteur et le fond d’aperçu sont communs pour comparer le même projet. Chaque type conserve séparément son matériau, son éclairage, sa fixation, ses entretoises, sa colle et ses accessoires électriques pendant la session du configurateur. Un changement de type ne transfère plus les accessoires d’un autre type et ne réinitialise plus le matériau déjà choisi pour ce type.

## Corrections

- Les réglages spécifiques sont stockés séparément pour les trois types.
- Le rétroéclairage conserve la couleur de la face et ajoute un halo arrière. Le boîtier utilise la couleur lumineuse sur la face et un effet lumineux plus localisé.
- Le champ de hauteur accepte la saisie progressive : taper « 20 » donne 20 cm. Les bornes de 10 à 100 cm sont appliquées à la sortie du champ.
- Le type demandé dans l’URL initialise une nouvelle configuration lorsque ce paramètre change.
- Une explication propre à chaque type accompagne les matériaux.

## Essais dans le navigateur

Avec le texte « TEST », hauteur 20 cm et largeur indicative 48 cm :

| Configuration d’essai | Estimation HT attendue et observée |
| --- | --- |
| Boîtier blanc, éclairage rouge, alimentation 100 W, Wago, 2 modules, gabarit, 2 entretoises supplémentaires et colle | 331,20 € |
| Rétroéclairage PVC noir 19 mm, éclairage bleu, alimentation 150 W, interrupteur pompier et 1 module | 780,00 € |
| Lettres en relief composite aluminium brossé doré, gabarit, 3 entretoises supplémentaires et colle | 154,08 € |

Les trois configurations retrouvent ces réglages et ces estimations après plusieurs changements de type. Le premier passage du boîtier modifié au rétroéclairage ouvre bien le rétroéclairage avec ses valeurs propres : forfait 500 €, aucune alimentation, aucun module et aucun accessoire coché.

Les lettres en relief n’affichent aucun champ d’éclairage. Leur description dans le panier et dans le formulaire de devis ne contient aucune option LED. L’article fictif ajouté au panier a été retiré ; aucun formulaire n’a été envoyé.

Les liens directs des trois types affichent les matériaux correspondants. Aucun débordement horizontal observé à 390 px. La saisie de 9 cm est bornée à 10 cm et celle de 120 cm à 100 cm à la sortie du champ.

Compilation de production, vérification TypeScript intégrée et ESLint réussis. Les tarifs et les gammes proposés ont été conservés ; ces essais vérifient le comportement du configurateur et ses calculs, sans valider un dimensionnement électrique ou un devis de fabrication réel.
