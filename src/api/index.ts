import { type Resident, type sectors } from './types.d'

async function api<T>(url: string): Promise<T> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return (await response.json()) as T
}

async function getResidents(): Promise<Array<Resident>> {
  try {
    return await api<Array<Resident>>(import.meta.env.VITE_API_URL)
  } catch (error) {
    console.error(error)
  }
}

async function findResidentById(id: string): Promise<Resident> {
  const residents = await getResidents()
  return residents.find((resident) => resident.id === id)
}

async function findResidentsBySectors(sectors: Array<string>): Promise<Array<Resident>> {
  const residents = await getResidents()
  if (!sectors.length) return residents
  return residents.filter((resident) => {
    return sectors.includes(resident.secteurSousSecteur.libelleEtablissementSousSecteur)
  })
}

async function getSectors(): Promise<sectors> {
  const residents = await getResidents()
  const sectors: sectors = {}
  residents.forEach((resident) => {
    const sector = resident.secteurSousSecteur.libelleEtablissementSecteur
    const subSector = resident.secteurSousSecteur.libelleEtablissementSousSecteur

    if (!sectors[sector]) {
      sectors[sector] = []
    }
    if (!sectors[sector].includes(subSector)) {
      sectors[sector].push(subSector)
    }
  })

  return sectors
}

export { getResidents, findResidentById, findResidentsBySectors, getSectors }
