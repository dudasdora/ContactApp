import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  SvgIcon
} from '@mui/material'
import { Contact } from '../types'
import { useMemo } from 'react'
import NestedActions from '../ui/NestedActions'
import { ReactComponent as FavouriteIcon } from '../assets/icons/Favourite.svg'
import { ReactComponent as SettingsIcon } from '../assets/icons/Settings.svg'
import { ReactComponent as DeleteIcon } from '../assets/icons/Delete.svg'
import { ReactComponent as MoreIcon } from '../assets/icons/More.svg'
import { ReactComponent as MuteIcon } from '../assets/icons/Mute.svg'
import { ReactComponent as CallIcon } from '../assets/icons/Call.svg'

interface IContactListItem {
  contact: Contact
  handleDelete: (id: number) => Promise<void>
}

const ContactListItem: React.FC<IContactListItem> = ({
  contact,
  handleDelete
}) => {
  const src = useMemo(() => {
    return contact.pictureUrl
      ? require(contact.pictureUrl)
      : require('../assets/contactImages/Default.png')
  }, [contact])

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
              onClick: () => {},
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
