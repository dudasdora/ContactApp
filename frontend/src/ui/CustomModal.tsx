import { Fade, Modal, Paper } from '@mui/material'
import React, { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const CustomModal: React.FC<{
  children: ReactNode
  isOpen: boolean
  closeModal: () => void
}> = ({ children, isOpen, closeModal }) => {
  return (
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
                {children}
              </Paper>
            </Fade>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  )
}
CustomModal.displayName = 'CustomModal'
export default CustomModal
