import {
  Box,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText
} from '@mui/material'
import { Contact } from '../../types'
import IconMenu from '../../ui/IconMenu'
import { ReactComponent as FavouriteIcon } from '../../assets/icons/Favourite.svg'
import { ReactComponent as SettingsIcon } from '../../assets/icons/Settings.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/Delete.svg'
import { ReactComponent as MoreIcon } from '../../assets/icons/More.svg'
import { ReactComponent as MuteIcon } from '../../assets/icons/Mute.svg'
import { ReactComponent as CallIcon } from '../../assets/icons/Call.svg'
import ContactForm from '../ContactForm/ContactForm'
import { useModalStore } from '../../stores/ModalStore'
import { useGetAvatarSource } from '../../hooks/useGetAvatarSource'
import CustomButton from '../../ui/CustomButton'
import { useState } from 'react'
import CustomAvatar from '../../ui/CustomAvatar'
import { useDeleteContact } from '../../hooks/useDeleteContact'
import { useUpdateContact } from '../../hooks/useUpdateContact'

interface IContactListItem {
  contact: Contact
}

const ContactListItem: React.FC<IContactListItem> = ({ contact }) => {
  const [active, setActive] = useState<boolean>(false)

  const { openModal, closeModal } = useModalStore()

  const avatarSrc = useGetAvatarSource(contact.pictureUrl)

  const handleDelete = useDeleteContact()
  const handleUpdate = useUpdateContact()

  return (
    <ListItem
      sx={{
        ':hover ': {
          '& .secondaryActionsFocus': {
            opacity: 100
          }
        },
        padding: '12px 0'
      }}
    >
      <ListItemAvatar>
        <CustomAvatar src={avatarSrc} />
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
                onClick: () => handleDelete(contact),
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
