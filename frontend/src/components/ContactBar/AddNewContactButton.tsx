import { SvgIcon, Typography } from '@mui/material'
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
    <CustomButton
      variant="primary"
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
      <SvgIcon component={AddIcon} />
      {/* remove text for mobile size */}
      <Typography
        sx={{
          display: { xs: 'none', sm: 'inline-block' }
        }}
        variant="body1"
      >
        Add new
      </Typography>
    </CustomButton>
  )
}
AddNewContactButton.displayName = 'AddNewContactButton'
export default AddNewContactButton
