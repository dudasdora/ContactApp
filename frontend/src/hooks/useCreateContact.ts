import { useMutation, useQueryClient } from 'react-query'
import { ContactFormData } from '../types'
import { createContact } from '../utils/createContact'
import { uploadPicture } from '../utils/uploadPicture'
import { useModalStore } from '../stores/ModalStore'
import { useCallback } from 'react'

export const useCreateContact = () => {
  const { closeModal } = useModalStore()
  const queryClient = useQueryClient()

  const { mutateAsync: mutateCreate } = useMutation(
    async (contact: ContactFormData) => createContact(contact)
  )

  const { mutateAsync: upload } = useMutation(uploadPicture)

  const create = useCallback(
    (contact: ContactFormData) => {
      mutateCreate(contact)
        .then(() => {
          queryClient.invalidateQueries({ queryKey: ['contact', 'list'] })
          closeModal()
        })
        .catch((error) => {
          console.error('Error', error)
        })
    },
    [closeModal, mutateCreate, queryClient]
  )

  return useCallback(
    async (
      contact: ContactFormData,
      file: Blob | null,
      pictureUrl: string | null
    ) => {
      if (file !== null && process.env.NODE_ENV === 'production') {
        upload(file)
          .then((response) => response.data.pictureUrl)
          .then((response) => create({ ...contact, pictureUrl: response }))
          .catch((error) => {
            console.error('Error:', error)
          })
      } else {
        create({ ...contact, pictureUrl: pictureUrl })
      }
    },
    [create, upload]
  )
}
