import ContactForm from '../ContactForm/ContactForm'
import { useModalStore } from '../../stores/ModalStore'
import { useMutation, useQueryClient } from 'react-query'
import { ContactFormData } from '../../types'
import { createContact } from '../../utils/createContact'
import { ReactComponent as AddIcon } from '../../assets/icons/Add.svg'
import CustomButton from '../../ui/CustomButton'
import { uploadPicture } from '../../utils/uploadPicture'

const AddNewContactButton: React.FC = () => {
  const { openModal, closeModal } = useModalStore()
  const queryClient = useQueryClient()

  const { mutateAsync: mutateCreate } = useMutation(
    async (contact: ContactFormData) => createContact(contact)
  )

  const { mutateAsync: upload } = useMutation(uploadPicture)

  const create = (contact: ContactFormData) => {
    mutateCreate(contact)
      .then(() => {
        queryClient.invalidateQueries({ queryKey: ['contact', 'list'] })
        closeModal()
      })
      .catch((error) => {
        console.error('Error', error)
      })
  }

  const handlecreate = async (
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
  }

  return (
    <CustomButton
      variant="special"
      content="iconlabel"
      icon={AddIcon}
      label={'Add new'}
      onClick={() =>
        openModal(
          <ContactForm
            onClose={closeModal}
            onSubmit={handlecreate}
            title="Add contact"
          />
        )
      }
    />
  )
}
AddNewContactButton.displayName = 'AddNewContactButton'
export default AddNewContactButton
