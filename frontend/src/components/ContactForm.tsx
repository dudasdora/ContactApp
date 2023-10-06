import { Button, InputLabel, TextField } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Contact, ContactFormData } from '../types'
import { contactFormSchema } from '../utils/contactFormSchema'
import { defaultContactFormValues } from '../utils/defaultContactFormValues'

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
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<ContactFormData>({
    defaultValues: defaultContactFormValues(contact),
    resolver: yupResolver(contactFormSchema)
  })

  const nameInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (nameInputRef.current && errors.name) {
      nameInputRef.current.focus()
    }
  }, [errors.name])

  return (
    <div style={{ background: 'grey' }}>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputLabel>Name</InputLabel>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField {...field} inputRef={nameInputRef} />
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
        <Button onClick={onClose}> Cancel</Button>
        <Button type="submit">Done</Button>
      </form>
    </div>
  )
}

ContactForm.displayName = 'ContactForm'
export default ContactForm
