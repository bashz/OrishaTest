import type { Resident } from '@/api/types'

function getGender(resident: Resident): number {
  let gender = 'male'
  if (resident && resident.nomComplet.match(/\(F\)/)) gender = 'female'
  return gender
}

function getAvatar(resident: Resident): number {
  const number =
    resident.nomComplet.split('').reduce((prev, acc) => prev + acc.charCodeAt(0), 0) % 5
  return `/avatars/${getGender(resident)}_${number + 1}.png`
}

export { getGender, getAvatar }
