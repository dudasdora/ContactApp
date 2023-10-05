import config from '../config'

const apiUrl = config.apiUrl

export const deleteContact = async (contactId: number) => {
  const response = await fetch(`${apiUrl}/contact/${contactId}`, {
    method: 'DELETE'
  })
  if (!response.ok) {
    throw new Error('Failed to delete contact')
  }

  return contactId
}
