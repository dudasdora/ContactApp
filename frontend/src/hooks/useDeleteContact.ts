import { useMutation, useQueryClient } from 'react-query'
import { deleteContact } from '../utils/deleteContat'
import { Contact } from '../types'
import { deletePicture } from '../utils/deletePicture'

export const useDeleteContact = () => {
  const queryClient = useQueryClient()
  const { mutateAsync: mutateDeletePicture } = useMutation(
    async (pictureUrl: string) => deletePicture(pictureUrl)
  )

  const { mutateAsync: mutateDeleteContact } = useMutation(async (id: number) =>
    deleteContact(id)
  )

  return async (contact: Contact) => {
    if (contact.pictureUrl) {
      await mutateDeletePicture(contact.pictureUrl).catch((error) => {
        console.error('Error:', error)
      })
    }
    await mutateDeleteContact(contact.id)
      .then(() => {
        queryClient.invalidateQueries({ queryKey: ['contact', 'list'] })
      })
      .catch((error) => {
        console.error('Error', error)
      })
  }
}
