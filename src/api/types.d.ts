interface SecteurSousSecteur {
  idEtablissementSecteur: number
  prefixedIdEtablissementSecteur: string
  libelleEtablissementSecteur: string
  idEtablissementSousSecteur: number
  prefixedIdEtablissementSousSecteur: string
  libelleEtablissementSousSecteur: string
  libelleComplet: string
}

interface Chambre {
  idEtablissementChambre: number
  prefixedIdEtablissementChambre: string
  libelleEtablissementChambre: string
}

interface SituationAdministrative {
  idSituationAdministrative: number
  prefixedIdSituationAdministrative: string
  texte: string
  couleur: string
}

interface User {
  id: string
  prefixedId: string
  nomComplet: string
  nomNaissance: string
  age: number
  ageTexte: string
  dateNaissance: string
  ins: string
  secteurSousSecteur: SecteurSousSecteur
  chambre: Chambre
  situationAdministrative: SituationAdministrative
  isFavorite: boolean
}

export type { User }
