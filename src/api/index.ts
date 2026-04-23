import type User from './types.d'

async function api<T>(url: string): Promise<T> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return (await response.json()) as T
}

async function getUsers(): Array<User> {
  try {
    return await api<Array<User>>(import.meta.env.VITE_API_URL)
  } catch (error) {
    console.error(error)
  }
}

async function findUsersById(id: string): User {
  const users = await getUsers()
  return users.find((user) => user.id === id)
}

export { getUsers, findUsersById }
