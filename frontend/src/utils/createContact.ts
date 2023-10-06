import config from '../config'
import { ContactFormData } from '../types'

const apiUrl = config.apiUrl

export const createContact = async (contact: ContactFormData) => {
  const res = await fetch(`${apiUrl}/contact`, {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return res.json()
}
