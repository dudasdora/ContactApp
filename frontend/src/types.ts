import { ReactNode } from 'react'

export interface Contact {
  id: number
  name: string
  email?: string
  phone?: string
  pictureUrl?: string
}

export type ModalContent = ReactNode

export interface ModalContextType {
  isOpen: boolean
  openModal: (content: ModalContent) => void
  closeModal: () => void
}

export interface ContactFormData {
  id?: number
  name: string
  email?: string
  phone?: string
}
