import { Contact } from '../types'

export const defaultContactFormValues = (contact?: Contact) => {
  return {
    name: contact ? contact.name || '' : '',
    id: contact?.id,
    email: contact ? contact.email || '' : '',
    phone: contact ? contact.phone || '' : '',
    pictureUrl: contact ? contact.pictureUrl || '' : ''
  }
}
