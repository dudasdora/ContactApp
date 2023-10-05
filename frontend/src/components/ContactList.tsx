import { List } from '@mui/material'
import React from 'react'
import { useGetContacts } from '../hooks/useGetContacts'
import { Contact } from '../types'
import ErrorDisplay from '../ui/ErrorDisplay'
import LoadingDisplay from '../ui/LoadingDisplay'
import ContactListItem from './ContactListItem'

const ContactList: React.FC = () => {
  const { data, error, isLoading } = useGetContacts()

  return !isLoading ? (
    !error ? (
      <List>
        {data.map((contact: Contact) => (
          <ContactListItem contact={contact} key={contact.id} />
        ))}
      </List>
    ) : (
      <div>
        <ErrorDisplay />
      </div>
    )
  ) : (
    <div>
      <LoadingDisplay />
    </div>
  )
}

ContactList.displayName = 'ContactList'
export default ContactList
