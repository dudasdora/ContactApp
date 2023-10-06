import { List } from '@mui/material'
import React, { useMemo } from 'react'
import { useGetContacts } from '../hooks/useGetContacts'
import ErrorDisplay from '../ui/ErrorDisplay'
import LoadingDisplay from '../ui/LoadingDisplay'
import ContactListItem from './ContactListItem'

const ContactList: React.FC = () => {
  const { data, error, isLoading } = useGetContacts()

  const contacts = useMemo(() => data ?? [], [data])

  return isLoading ? (
    <div>
      <LoadingDisplay />
    </div>
  ) : error ? (
    <div>
      <ErrorDisplay />
    </div>
  ) : (
    <List>
      {contacts.map((contact) => (
        <ContactListItem contact={contact} key={contact.id} />
      ))}
    </List>
  )
}

ContactList.displayName = 'ContactList'
export default ContactList
