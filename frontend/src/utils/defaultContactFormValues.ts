import { Contact, ContactFormData } from '../types'

export const defaultContactFormValues = (
  contact?: Contact
): ContactFormData => {
  return {
    name: contact ? contact.name || '' : '',
    id: contact?.id,
    email: contact ? contact.email || '' : '',
    phone: contact ? contact.phone || '' : ''
  }
}
