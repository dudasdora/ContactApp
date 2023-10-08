import { Box } from '@mui/material'
import ContactForm from '../ContactForm/ContactForm'
import { useModalStore } from '../../stores/ModalStore'
import { useMutation, useQueryClient } from 'react-query'
import { ContactFormData } from '../../types'
import { createContact } from '../../utils/createContact'
import { ReactComponent as AddIcon } from '../../assets/icons/Add.svg'
import CustomButton from '../../ui/CustomButton'

const AddNewContactButton: React.FC = () => {
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
    <>
      <Box sx={{ display: { xs: 'inline-block', sm: 'none' } }}>
        <CustomButton
          variant="special"
          content="iconlabel"
          icon={AddIcon}
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
      </Box>
      {/* remove text for mobile size */}
      <Box sx={{ display: { xs: 'none', sm: 'inline-block' } }}>
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
      </Box>
    </>
  )
}
AddNewContactButton.displayName = 'AddNewContactButton'
export default AddNewContactButton
