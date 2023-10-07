import { Button, InputLabel, TextField } from '@mui/material'
import React, { useEffect, useRef } from 'react'
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
      <h2>{title}</h2>
      <PictureUpload
        setValue={setValue}
        defaultPictureUrl={defaultValues.pictureUrl}
      />

      <InputLabel>Name</InputLabel>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField {...field} ref={control.register('name').ref} />
        )}
      />

      <InputLabel>Phone number</InputLabel>
      <Controller
        name="phone"
        control={control}
        render={({ field }) => <TextField {...field} />}
      />

      <InputLabel>Email address</InputLabel>
      <Controller
        name="email"
        control={control}
        render={({ field }) => <TextField {...field} />}
      />
      <Button variant="contained" color="primary" onClick={onClose}>
        Cancel
      </Button>
      <Button type="submit">Done</Button>
    </form>
  )
}

ContactForm.displayName = 'ContactForm'
export default ContactForm
