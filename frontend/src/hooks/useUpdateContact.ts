import { useMutation, useQueryClient } from 'react-query'
import { updateContact } from '../utils/updateContact'
import { Contact, ContactFormData } from '../types'
import { uploadPicture } from '../utils/uploadPicture'
import { useModalStore } from '../stores/ModalStore'
import { deletePicture } from '../utils/deletePicture'

export const useUpdateContact = () => {
  const queryClient = useQueryClient()
  const { closeModal } = useModalStore()

  const { mutateAsync: mutateUpdate } = useMutation(
    async (contact: ContactFormData) => updateContact(contact)
  )
  const { mutateAsync: upload } = useMutation(uploadPicture)

  const { mutateAsync: mutateDeletePicture } = useMutation(
    async (pictureUrl: string) => deletePicture(pictureUrl)
  )

  const update = async (contact: ContactFormData) => {
    await mutateUpdate(contact)
      .then(() => {
        queryClient.invalidateQueries({ queryKey: ['contact', 'list'] })
        closeModal()
      })
      .catch((error) => {
        console.error('Error', error)
      })
  }

  return async (
    contact: ContactFormData,
    file: Blob | null,
    pictureUrl: string | null,
    originalContact?: Contact
  ) => {
    if (file !== null && originalContact?.pictureUrl) {
      await mutateDeletePicture(originalContact.pictureUrl).catch((error) => {
        console.error('Error:', error)
      })
    }
    if (file !== null && process.env.NODE_ENV === 'production') {
      await upload(file)
        .then((response) => response.data.pictureUrl)
        .then((response) => update({ ...contact, pictureUrl: response }))
        .catch((error) => {
          console.error('Error:', error)
        })
    } else {
      await update({ ...contact, pictureUrl })
    }
  }
}
