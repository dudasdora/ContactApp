import config from '../config'
import { ContactFormData } from '../types'

const apiUrl = config.apiUrl

export const updateContact = async (contact: ContactFormData) => {
  const response = await fetch(`${apiUrl}/contact/${contact.id}`, {
    method: 'PUT',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}
