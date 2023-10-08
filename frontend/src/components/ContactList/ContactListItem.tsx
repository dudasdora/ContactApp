import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  SvgIcon
} from '@mui/material'
import { Contact, ContactFormData } from '../../types'
import IconMenu from '../../ui/IconMenu'
import { ReactComponent as FavouriteIcon } from '../../assets/icons/Favourite.svg'
import { ReactComponent as SettingsIcon } from '../../assets/icons/Settings.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/Delete.svg'
import { ReactComponent as MoreIcon } from '../../assets/icons/More.svg'
import { ReactComponent as MuteIcon } from '../../assets/icons/Mute.svg'
import { ReactComponent as CallIcon } from '../../assets/icons/Call.svg'
import { useMutation, useQueryClient } from 'react-query'
import { deleteContact } from '../../utils/deleteContat'
import { updateContact } from '../../utils/updateContact'
import ContactForm from '../ContactForm/ContactForm'
import { useModalStore } from '../../stores/ModalStore'
import { useGetAvatarSource } from '../../hooks/useGetAvatarSource'
import CustomButton from '../../ui/CustomButton'
import { useState } from 'react'

interface IContactListItem {
  contact: Contact
}

const ContactListItem: React.FC<IContactListItem> = ({ contact }) => {
  const [active, setActive] = useState<boolean>(false)

  const queryClient = useQueryClient()

  const { openModal, closeModal } = useModalStore()

  const src = useGetAvatarSource(contact.pictureUrl)

  const deleteContactmutation = useMutation(async (id: number) =>
    deleteContact(id)
  )

  const handleDelete = async (id: number) => {
    await deleteContactmutation
      .mutateAsync(id)
      .then(() => {
        queryClient.invalidateQueries({ queryKey: ['contact', 'list'] })
      })
      .catch((error) => {
        console.error('Error', error)
      })
  }

  const updateContactmutation = useMutation(async (contact: ContactFormData) =>
    updateContact(contact)
  )

  const handleUpdate = async (contact: ContactFormData) => {
    await updateContactmutation
      .mutateAsync(contact)
      .then(() => {
        queryClient.invalidateQueries({ queryKey: ['contact', 'list'] })
        closeModal()
      })
      .catch((error) => {
        console.error('Error', error)
      })
  }

  return (
    <ListItem
      sx={{
        ':hover ': {
          '& .secondaryActionsFocus': {
            opacity: 100
          }
        }
      }}
    >
      <ListItemAvatar>
        <Avatar src={src} />
      </ListItemAvatar>
      <ListItemText primary={contact.name} secondary={contact.phone} />
      <Box
        className="secondaryActionsFocus"
        sx={{
          opacity: active ? 100 : 0,
          ':focus': {
            opacity: 100
          }
        }}
      >
        <ListItemSecondaryAction>
          <CustomButton content="icon" variant="secondary" icon={MuteIcon} />
          <CustomButton content="icon" variant="secondary" icon={CallIcon} />
          <IconMenu
            onClick={() => setActive(true)}
            onClose={() => {
              setActive(false)
            }}
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
                      title="Edit contact"
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
          ></IconMenu>
        </ListItemSecondaryAction>
      </Box>
    </ListItem>
  )
}

ContactListItem.displayName = 'ContactListItem'
export default ContactListItem
