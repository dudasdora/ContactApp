import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  SvgIcon
} from '@mui/material'
import { Contact, ContactFormData } from '../types'
import { useMemo } from 'react'
import NestedActions from '../ui/NestedActions'
import { ReactComponent as FavouriteIcon } from '../assets/icons/Favourite.svg'
import { ReactComponent as SettingsIcon } from '../assets/icons/Settings.svg'
import { ReactComponent as DeleteIcon } from '../assets/icons/Delete.svg'
import { ReactComponent as MoreIcon } from '../assets/icons/More.svg'
import { ReactComponent as MuteIcon } from '../assets/icons/Mute.svg'
import { ReactComponent as CallIcon } from '../assets/icons/Call.svg'
import { useMutation, useQueryClient } from 'react-query'
import { deleteContact } from '../utils/deleteContat'
import { updateContact } from '../utils/updateContact'
import ContactForm from './ContactForm'
import { useModalStore } from '../stores/ModalStore'

interface IContactListItem {
  contact: Contact
}

const ContactListItem: React.FC<IContactListItem> = ({ contact }) => {
  const queryClient = useQueryClient()
  const { openModal, closeModal } = useModalStore()

  const src = useMemo(() => {
    return contact.pictureUrl
      ? require(contact.pictureUrl)
      : require('../assets/contactImages/Default.png')
  }, [contact])

  const deleteContactmutation = useMutation(async (id: number) =>
    deleteContact(id)
  )

  const handleDelete = async (id: number) => {
    await deleteContactmutation.mutateAsync(id)
    queryClient.invalidateQueries({ queryKey: ['contact', 'getAll'] })
  }

  const updateContactmutation = useMutation(async (contact: ContactFormData) =>
    updateContact(contact)
  )

  const handleUpdate = async (contact: ContactFormData) => {
    await updateContactmutation.mutateAsync(contact)
    queryClient.invalidateQueries({ queryKey: ['contact', 'getAll'] })
    closeModal()
  }

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={src} />
      </ListItemAvatar>
      <ListItemText primary={contact.name} secondary={contact.phone} />
      <ListItemSecondaryAction>
        <IconButton>
          <SvgIcon component={MuteIcon} />
        </IconButton>
        <IconButton>
          <SvgIcon component={CallIcon} />
        </IconButton>
        <NestedActions
          toggleActionsIcon={MoreIcon}
          actions={[
            {
              icon: SettingsIcon,
              onClick: () =>
                openModal(
                  <ContactForm
                    contact={contact}
                    onClose={closeModal}
                    onSubmit={handleUpdate}
                    title="Add contact"
                  />
                ),
              text: 'Edit'
            },
            {
              icon: FavouriteIcon,
              onClick: () => {},
              text: 'Favourite'
            },
            {
              icon: DeleteIcon,
              onClick: () => handleDelete(contact.id),
              text: 'Remove'
            }
          ]}
        ></NestedActions>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

ContactListItem.displayName = 'ContactListItem'
export default ContactListItem
