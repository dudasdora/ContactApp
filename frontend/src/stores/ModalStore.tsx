import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Fade, Modal, Paper } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
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
      <AnimatePresence>
        {isOpen && (
          <Modal open={isOpen} onClose={closeModal} sx={{ overflow: 'scroll' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.2,
                ease: [0.17, 0.67, 0.83, 0.67],
                scale: {
                  restDelta: 0.5
                }
              }}
            >
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
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
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
