import { AppBar, Box, Button, Grid, Toolbar, Typography } from '@mui/material'
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
          <Grid container spacing={3}>
            <Grid item xs></Grid>
            <Grid item xs={10}>
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
            </Grid>
            <Grid item xs></Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

ContactBar.displayName = 'ContactBar'
export default ContactBar
