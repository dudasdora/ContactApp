import config from '../config'

const apiUrl = config.apiUrl

export const getContacts = async () => {
  const response = await fetch(`${apiUrl}/contact`)
  return await response.json()
}
