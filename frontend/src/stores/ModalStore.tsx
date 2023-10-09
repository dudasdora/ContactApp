import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  useCallback
} from 'react'
import { ModalContent, ModalContextType } from '../types'
import CustomModal from '../ui/CustomModal'

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<ModalContent | null>(null)

  const openModal = useCallback((content: ModalContent) => {
    setIsOpen(true)
    setModalContent(content)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    setModalContent(null)
  }, [])

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <CustomModal isOpen={isOpen} closeModal={closeModal}>
        {modalContent}
      </CustomModal>
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
