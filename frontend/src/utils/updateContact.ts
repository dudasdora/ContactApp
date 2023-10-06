import config from '../config'
import { ContactFormData } from '../types'

const apiUrl = config.apiUrl

export const updateContact = async (contact: ContactFormData) => {
  console.log(contact)

  const res = await fetch(`${apiUrl}/contact/${contact.id}`, {
    method: 'PUT',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return res.json()
}
