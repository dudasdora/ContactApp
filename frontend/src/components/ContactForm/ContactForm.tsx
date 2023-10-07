import {
  Box,
  Button,
  Grid,
  InputLabel,
  TextField,
  Typography
} from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Contact, ContactFormData } from '../../types'
import { contactFormSchema } from '../../utils/contactFormSchema'
import PictureUpload from './PictureUpload'

interface IContactForm {
  contact?: Contact
  title: string
  onClose: () => void
  onSubmit: (contact: ContactFormData) => void
}

const ContactForm: React.FC<IContactForm> = ({
  title,
  onClose,
  onSubmit,
  contact
}) => {
  const defaultValues = contactFormSchema.cast(contact)

  const { handleSubmit, control, setValue } = useForm<ContactFormData>({
    defaultValues,
    resolver: yupResolver(contactFormSchema)
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Typography variant="h2">{title}</Typography>
        </Grid>
        <Grid item>
          <PictureUpload
            setValue={setValue}
            defaultPictureUrl={defaultValues.pictureUrl}
          />
        </Grid>
        <Grid item>
          <InputLabel>Name</InputLabel>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField {...field} ref={control.register('name').ref} />
            )}
          />
        </Grid>
        <Grid item>
          <InputLabel>Phone number</InputLabel>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => <TextField {...field} />}
          />
        </Grid>

        <Grid item>
          <InputLabel>Email address</InputLabel>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <TextField {...field} />}
          />
        </Grid>
        <Grid item>
          <Box display="flex" justifyContent="right" paddingTop={3} gap={1}>
            <Button variant="contained" color="primary" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Done</Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  )
}

ContactForm.displayName = 'ContactForm'
export default ContactForm
