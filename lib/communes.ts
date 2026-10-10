export interface Commune {
  slug: string;
  name: string;
  postalCode: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  angleTitle: string;
  angleParagraphs: [string, string];
  faqs: { question: string; answer: string }[];
  nearby: string[];
}

export const communes: Commune[] = [
  {
    slug: "hasnon",
    name: "Hasnon",
    postalCode: "59178",
    title: "Enseigne à Hasnon : lettres 3D & LED pour commerces",
    description:
      "Commerce ou artisan à Hasnon (59178) ? MJ PUB, à Saint-Amand-les-Eaux tout proche, crée votre enseigne lumineuse, vos lettres en relief et vos panneaux. Devis sur mesure.",
    eyebrow: "MJ PUB · Hasnon 59178 · Nord",
    heading: "Votre enseigne à Hasnon.",
    intro:
      "Vous tenez un commerce ou un atelier à Hasnon ? Situés à quelques minutes, à Saint-Amand-les-Eaux, nous concevons des enseignes adaptées aux façades du bourg : lettres en relief pour une devanture de proximité, éclairage LED pour être vu sur l'axe passant, panneau pour signaler votre activité.",
    angleTitle: "Une devanture qui compte dans le bourg.",
    angleParagraphs: [
      "À Hasnon, la plupart des commerces se gagnent par la proximité : on s'arrête parce qu'on a remarqué la vitrine. Une enseigne lisible depuis la rue, avec un nom en relief ou un éclairage discret le soir, fait la différence entre une façade qu'on longe et une adresse qu'on retient.",
      "Envoyez une photo de votre façade et les dimensions disponibles. Nous étudions le rendu, la fixation et les modalités de livraison ou de pose à Hasnon, puis nous chiffrons précisément dans votre devis.",
    ],
    faqs: [
      {
        question: "Intervenez-vous à Hasnon pour la pose ?",
        answer:
          "Oui, Hasnon est une commune voisine de notre atelier. Indiquez l'adresse du commerce, le support et les accès : les possibilités de livraison et de pose sont précisées dans votre devis.",
      },
      {
        question: "Quelle enseigne pour un commerce de centre-bourg ?",
        answer:
          "Les lettres découpées en relief conviennent bien aux devantures de proximité, et un éclairage LED discret prolonge votre visibilité le soir. Le choix dépend de votre façade, de votre activité et du recul des passants.",
      },
      {
        question: "Quelles démarches avant d'installer mon enseigne à Hasnon ?",
        answer:
          "Vérifiez les règles applicables auprès de la mairie d'Hasnon avec un visuel du projet et les dimensions prévues. Si vous êtes locataire, vérifiez aussi les conditions de façade avec le propriétaire.",
      },
    ],
    nearby: ["lecelles", "rosult", "saint-amand-les-eaux", "raismes"],
  },
  {
    slug: "lecelles",
    name: "Lecelles",
    postalCode: "59226",
    title: "Enseigne à Lecelles : signalétique artisans & commerces",
    description:
      "Artisan ou commerce à Lecelles (59226) ? MJ PUB, depuis Saint-Amand-les-Eaux, réalise vos lettres découpées, enseignes LED et panneaux sur mesure. Demandez un devis.",
    eyebrow: "MJ PUB · Lecelles 59226 · Nord",
    heading: "Votre enseigne à Lecelles.",
    intro:
      "Artisan, commerçant ou profession libérale à Lecelles ? Depuis notre atelier de Saint-Amand-les-Eaux, à quelques minutes, nous réalisons des enseignes qui signalent clairement votre activité : lettres en relief sur votre façade ou votre portail, panneau pour votre zone d'accueil, éclairage pour être repéré le soir.",
    angleTitle: "Être trouvé, même hors du village.",
    angleParagraphs: [
      "Dans une commune comme Lecelles, vos clients viennent souvent des alentours : ils vous cherchent avec une adresse, parfois de nuit. Une enseigne lisible et, si besoin, éclairée transforme une adresse difficile à trouver en un lieu qu'on identifie du premier coup d'œil.",
      "Partagez votre logo, une photo de l'emplacement et les dimensions disponibles. Nous vérifions la faisabilité, la fixation adaptée au support et les modalités d'intervention à Lecelles avant de chiffrer votre devis.",
    ],
    faqs: [
      {
        question: "Vous déplacez-vous à Lecelles ?",
        answer:
          "Oui, Lecelles est à quelques minutes de notre atelier de Saint-Amand-les-Eaux. Précisez l'adresse et les accès dans votre demande pour que nous organisions la livraison ou la pose.",
      },
      {
        question: "Je suis artisan : panneau ou lettres en relief ?",
        answer:
          "Les deux se combinent bien : un panneau pour présenter l'activité et les coordonnées, des lettres en relief pour marquer le nom. Tout dépend de votre support et de la distance de lecture.",
      },
      {
        question: "Faut-il une autorisation à Lecelles ?",
        answer:
          "Selon l'emplacement et les caractéristiques de l'enseigne, des règles ou démarches peuvent s'appliquer. Présentez votre projet à la mairie de Lecelles avant de lancer la fabrication.",
      },
    ],
    nearby: ["hasnon", "rosult", "saint-amand-les-eaux", "raismes"],
  },
  {
    slug: "rosult",
    name: "Rosult",
    postalCode: "59230",
    title: "Enseigne à Rosult : lettres relief & panneaux sur mesure",
    description:
      "Commerce à Rosult (59230) ? MJ PUB, commune voisine à Saint-Amand-les-Eaux, conçoit votre enseigne : lettres 3D, LED et signalétique. Devis précis et accompagnement local.",
    eyebrow: "MJ PUB · Rosult 59230 · Nord",
    heading: "Votre enseigne à Rosult.",
    intro:
      "Votre activité est installée à Rosult, commune limitrophe de Saint-Amand-les-Eaux où se trouve notre atelier ? Profitez d'un interlocuteur vraiment proche : nous étudions votre façade sur place ou sur photo, et nous réalisons vos lettres en relief, votre enseigne lumineuse ou vos panneaux.",
    angleTitle: "Le voisin qui soigne votre image.",
    angleParagraphs: [
      "À Rosult comme dans les communes voisines, une enseigne bien proportionnée à la façade inspire confiance : nom lisible, finition propre, fixation durable. C'est souvent le premier contact avec vos futurs clients, avant même la porte d'entrée.",
      "Comme nous sommes à côté, l'échange est simple : photo de façade, dimensions, logo, et nous vous proposons un rendu puis un devis détaillé, livraison ou pose à Rosult incluse dans l'étude.",
    ],
    faqs: [
      {
        question: "Quel délai pour une enseigne à Rosult ?",
        answer:
          "La proximité simplifie les échanges et la logistique. Le délai dépend du type d'enseigne et de la charge de l'atelier : il est confirmé dans votre devis, après étude de votre projet.",
      },
      {
        question: "Lettres PVC ou aluminium composite ?",
        answer:
          "Le PVC donne du relief à moindre format, l'aluminium composite convient aux lettrages fins et aux finitions métalliques. Le choix se fait selon le rendu recherché et l'exposition de votre façade à Rosult.",
      },
      {
        question: "Qui contacter avant l'installation ?",
        answer:
          "La mairie de Rosult pour les règles locales éventuelles, et le propriétaire du local si vous êtes locataire. Préparez un visuel et les dimensions de votre projet.",
      },
    ],
    nearby: ["hasnon", "lecelles", "saint-amand-les-eaux", "raismes"],
  },
  {
    slug: "raismes",
    name: "Raismes",
    postalCode: "59590",
    title: "Enseigne à Raismes : LED, lettres 3D & signalétique",
    description:
      "Commerce ou entreprise à Raismes (59590) ? MJ PUB, depuis Saint-Amand-les-Eaux, étudie votre enseigne lumineuse, vos lettres en relief et vos panneaux. Devis sur mesure.",
    eyebrow: "MJ PUB · Raismes 59590 · Nord",
    heading: "Votre enseigne à Raismes.",
    intro:
      "Vous développez une activité à Raismes, entre centre-ville et zones d'activités ? Depuis Saint-Amand-les-Eaux, nous accompagnons les commerces et entreprises raismoises : enseigne LED pour capter le flux, lettres 3D pour affirmer votre image, panneaux pour vos bâtiments et votre accueil.",
    angleTitle: "Sortir du lot dans une ville qui bouge.",
    angleParagraphs: [
      "À Raismes, les zones de passage concentrent les sollicitations visuelles : votre enseigne doit se lire vite et bien. Contraste du lettrage, taille adaptée au recul, éclairage homogène le soir : ce sont ces détails qui transforment un passant en visiteur.",
      "Indiquez l'adresse de votre établissement, une photo de la façade et vos objectifs (attirer, informer, orienter). Nous étudions la solution puis nous chiffrons fabrication, livraison et pose à Raismes dans un devis clair.",
    ],
    faqs: [
      {
        question: "Travaillez-vous avec les entreprises des zones d'activités ?",
        answer:
          "Oui. Panneaux de bâtiment, signalétique d'entrée et lettres en relief pour les locaux professionnels font partie de nos réalisations. Décrivez vos supports et vos accès dans votre demande.",
      },
      {
        question: "Mon enseigne doit se voir de loin : que prévoir ?",
        answer:
          "La hauteur des lettres, le contraste et, si besoin, l'éclairage LED déterminent la lisibilité à distance. Le configurateur donne un premier aperçu ; nous validons les dimensions réelles avant fabrication.",
      },
      {
        question: "Quelles vérifications à Raismes avant de commander ?",
        answer:
          "Consultez la mairie de Raismes sur les règles locales et les éventuelles autorisations, avec l'adresse et un visuel du projet. Vérifiez aussi les contraintes du bâtiment ou de la zone d'activités.",
      },
    ],
    nearby: ["saint-amand-les-eaux", "hasnon", "valenciennes", "lecelles"],
  },
  {
    slug: "valenciennes",
    name: "Valenciennes",
    postalCode: "59300",
    title: "Enseigne à Valenciennes : LED & lettres pour commerces",
    description:
      "Boutique ou entreprise à Valenciennes (59300) ? MJ PUB, atelier à Saint-Amand-les-Eaux, conçoit des enseignes LED et lettres 3D qui se remarquent. Étude et devis personnalisés.",
    eyebrow: "MJ PUB · Valenciennes 59300 · Nord",
    heading: "Votre enseigne à Valenciennes.",
    intro:
      "Boutique du centre-ville, commerce d'avenue ou entreprise de l'agglomération valenciennoise ? Notre atelier de Saint-Amand-les-Eaux met son savoir-faire au service des projets valenciennois : lettres boîtiers lumineuses, rétroéclairage raffiné, lettres découpées et signalétique complète.",
    angleTitle: "Exister dans une ville très sollicitée.",
    angleParagraphs: [
      "À Valenciennes, votre enseigne dialogue avec des dizaines d'autres : elle doit porter votre identité au premier regard. Typographie soignée, matériaux qualitatifs, éclairage maîtrisé : nous concevons des enseignes pensées pour durer et pour se distinguer, de jour comme de nuit.",
      "Comme pour chaque projet, tout commence par votre logo, une photo de la façade et les dimensions disponibles. Nous étudions le rendu et la faisabilité, puis nous détaillons fabrication, livraison et pose sur Valenciennes dans votre devis.",
    ],
    faqs: [
      {
        question: "Intervenez-vous à Valenciennes malgré la distance ?",
        answer:
          "Oui, Valenciennes fait partie de notre secteur d'intervention depuis Saint-Amand-les-Eaux. Les modalités de livraison et de pose sont étudiées selon votre adresse et vos accès, puis confirmées dans le devis.",
      },
      {
        question: "Centre-ville : quelles contraintes pour mon enseigne ?",
        answer:
          "Les centres-villes appliquent souvent des règles spécifiques sur les enseignes (dimensions, éclairage, intégration). Renseignez-vous auprès des services de la ville de Valenciennes avec un visuel de votre projet avant de commander.",
      },
      {
        question: "Puis-je d'abord visualiser mon projet ?",
        answer:
          "Oui : utilisez le configurateur pour un premier aperçu, puis demandez un devis avec votre logo et une photo de façade. Un photomontage peut être proposé pour valider l'intégration.",
      },
    ],
    nearby: ["raismes", "saint-amand-les-eaux", "hasnon", "lecelles"],
  },
];

export const communeSlugs = communes.map((c) => c.slug);
