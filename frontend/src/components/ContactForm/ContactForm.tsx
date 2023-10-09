import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Contact, ContactFormData } from '../../types'
import { contactFormSchema } from '../../utils/contactFormSchema'
import PictureUpload from './PictureUpload'
import CustomTextField from '../../ui/CustomTextField'
import CustomButton from '../../ui/CustomButton'

interface IContactForm {
  contact?: Contact
  title: string
  onClose: () => void
  onSubmit: (
    contact: ContactFormData,
    file: Blob | null,
    pictureUrl: string | null,
    originalContact?: Contact
  ) => Promise<void>
}

const ContactForm: React.FC<IContactForm> = ({
  title,
  onClose,
  onSubmit,
  contact
}) => {
  const defaultValues = contactFormSchema.cast(contact)

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const [file, setFile] = useState<Blob | null>(null)
  const [pictureUrl, setPictureUrl] = useState<string | null>(
    defaultValues.pictureUrl
  )

  const { handleSubmit, control, setValue, getValues } =
    useForm<ContactFormData>({
      defaultValues,
      resolver: yupResolver(contactFormSchema)
    })

  const submit = () => {
    setIsSubmitting(true)
    onSubmit(getValues(), file, pictureUrl, contact).then(() =>
      setIsSubmitting(false)
    )
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Typography variant="h2">{title}</Typography>
        </Grid>
        <Grid item>
          <PictureUpload
            setFile={setFile}
            pictureUrl={pictureUrl}
            setValue={setValue}
            setPictureUrl={setPictureUrl}
          />
        </Grid>
        <Grid item>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <CustomTextField
                {...field}
                label="Name"
                placeholder="Jamie Wright"
                ref={control.register('name').ref}
              />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <CustomTextField
                {...field}
                label="Phone number"
                placeholder="+01 234 5678"
              />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <CustomTextField
                {...field}
                label="Email address"
                placeholder="jamie.wright@mail.com"
              />
            )}
          />
        </Grid>
        <Grid item>
          <Box display="flex" justifyContent="right" paddingTop={3} gap={1}>
            <CustomButton
              variant="secondary"
              content="label"
              onClick={onClose}
              label="Cancel"
            />
            <CustomButton
              loading={isSubmitting}
              variant="primary"
              content="label"
              type="submit"
              label="Done"
            />
          </Box>
        </Grid>
      </Grid>
    </form>
  )
}

ContactForm.displayName = 'ContactForm'
export default ContactForm
