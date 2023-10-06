import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useModalStore } from '../stores/ModalStore'
import ContactForm from './ContactForm'
import { useMutation, useQueryClient } from 'react-query'
import { createContact } from '../utils/createContact'
import { ContactFormData } from '../types'

const ContactBar: React.FC = () => {
  const { openModal, closeModal } = useModalStore()
  const queryClient = useQueryClient()

  const { mutateAsync: create } = useMutation(
    async (contact: ContactFormData) => createContact(contact)
  )

  const handlecreate = async (contact: ContactFormData) => {
    create(contact)
      .then(() => {
        queryClient.invalidateQueries({ queryKey: ['contact', 'list'] })
        closeModal()
      })
      .catch((error) => {
        console.error('Error', error)
      })
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contacts
          </Typography>
          <Button
            color="inherit"
            onClick={() =>
              openModal(
                <ContactForm
                  onClose={closeModal}
                  onSubmit={handlecreate}
                  title="Add contact"
                />
              )
            }
          >
            + Add new
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

ContactBar.displayName = 'ContactBar'
export default ContactBar
