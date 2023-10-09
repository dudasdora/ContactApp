import ContactForm from '../ContactForm/ContactForm'
import { useModalStore } from '../../stores/ModalStore'
import { ReactComponent as AddIcon } from '../../assets/icons/Add.svg'
import CustomButton from '../../ui/CustomButton'
import { useCreateContact } from '../../hooks/useCreateContact'

const AddNewContactButton: React.FC = () => {
  const { openModal, closeModal } = useModalStore()

  const handlecreate = useCreateContact()

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
