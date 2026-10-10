export interface Avis {
  auteur: string;
  commune: string;
  texte: string;
  note: number;
}

// Renseigne ici UNIQUEMENT des avis réels de clients
// (nom du commerce ou prénom + commune + leur phrase, avec leur accord).
// Tant que la liste est vide, la section ne s'affiche pas sur le site.
export const avis: Avis[] = [];
