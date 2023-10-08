import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Fade, Modal, Paper } from '@mui/material'
import { ModalContent, ModalContextType } from '../types'

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<ModalContent | null>(null)

  const openModal = (content: ModalContent) => {
    setIsOpen(true)
    setModalContent(content)
  }

  const closeModal = () => {
    setIsOpen(false)
    setModalContent(null)
  }

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      {isOpen && (
        <Modal open={isOpen} onClose={closeModal}>
          <Fade in={isOpen}>
            <Paper
              elevation={0}
              sx={{
                width: '316px',
                height: 'fit-content',
                padding: '24px',
                borderRadius: `8px`
              }}
            >
              {modalContent}
            </Paper>
          </Fade>
        </Modal>
      )}
    </ModalContext.Provider>
  )
}

export const useModalStore = (): ModalContextType => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('missing provider')
  }
  return context
}
