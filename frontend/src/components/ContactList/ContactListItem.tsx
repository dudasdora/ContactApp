import {
  Box,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText
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
import CustomAvatar from '../../ui/CustomAvatar'
import { uploadPicture } from '../../utils/uploadPicture'
import { deletePicture } from '../../utils/deletePicture'

interface IContactListItem {
  contact: Contact
}

const ContactListItem: React.FC<IContactListItem> = ({ contact }) => {
  const [active, setActive] = useState<boolean>(false)

  const queryClient = useQueryClient()

  const { openModal, closeModal } = useModalStore()

  const avatarSrc = useGetAvatarSource(contact.pictureUrl)

  const { mutateAsync: mutatedelete } = useMutation(async (id: number) =>
    deleteContact(id)
  )

  const handleDelete = async (contact: Contact) => {
    if (contact.pictureUrl) {
      await mutateDelete(contact.pictureUrl).catch((error) => {
        console.error('Error:', error)
      })
    }
    await mutatedelete(contact.id)
      .then(() => {
        queryClient.invalidateQueries({ queryKey: ['contact', 'list'] })
      })
      .catch((error) => {
        console.error('Error', error)
      })
  }

  const { mutateAsync: mutateUpdate } = useMutation(
    async (contact: ContactFormData) => updateContact(contact)
  )

  const { mutateAsync: mutateDelete } = useMutation(
    async (pictureUrl: string) => deletePicture(pictureUrl)
  )

  const { mutateAsync: upload } = useMutation(uploadPicture)

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

  const handleUpdate = async (
    contact: ContactFormData,
    file: Blob | null,
    pictureUrl: string | null,
    originalContact?: Contact
  ) => {
    console.log('originalContact?.pictureUrl', originalContact?.pictureUrl)

    if (file !== null && originalContact?.pictureUrl) {
      await mutateDelete(originalContact.pictureUrl).catch((error) => {
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
