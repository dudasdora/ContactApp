import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { Contact } from '../types'
import { useMemo } from 'react'

const ContactListItem: React.FC<{ contact: Contact }> = ({ contact }) => {
  const src = useMemo(() => {
    return contact.pictureUrl
      ? require(contact.pictureUrl)
      : require('../assets/Default.png')
  }, [contact])

  return (
    <ListItem key={contact.id}>
      <ListItemAvatar>
        <Avatar src={src} />
      </ListItemAvatar>
      <ListItemText primary={contact.name} secondary={contact.phone} />
    </ListItem>
  )
}

ContactListItem.displayName = 'ContactListItem'
export default ContactListItem
