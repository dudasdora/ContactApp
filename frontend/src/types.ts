import { ReactNode } from 'react'

export interface Contact {
  id: number
  name: string
  email: string | null
  phone: string | null
  pictureUrl: string | null
}

export type ModalContent = ReactNode

export interface ModalContextType {
  isOpen: boolean
  openModal: (content: ModalContent) => void
  closeModal: () => void
}

export interface ContactFormData extends Omit<Contact, 'id' | 'name'> {
  id?: number | null
  name: string | null
}
