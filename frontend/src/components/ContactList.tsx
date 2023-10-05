import { List } from '@mui/material'
import React, { useMemo } from 'react'
import { useGetContacts } from '../hooks/useGetContacts'
import { Contact } from '../types'
import ErrorDisplay from '../ui/ErrorDisplay'
import LoadingDisplay from '../ui/LoadingDisplay'
import ContactListItem from './ContactListItem'
import { deleteContact } from '../utils/deleteContat'
import { useMutation } from 'react-query'

const ContactList: React.FC = () => {
  const { data, error, isLoading, refetch } = useGetContacts()

  const contacts: Contact[] = useMemo(() => data ?? [], [data])

  const deleteContactmutation = useMutation(async (id: number) =>
    deleteContact(id)
  )

  const handleDelete = async (id: number) => {
    await deleteContactmutation.mutateAsync(id)
    refetch()
  }

  return !isLoading ? (
    !error ? (
      <List>
        {contacts.map((contact: Contact) => (
          <ContactListItem
            contact={contact}
            key={contact.id}
            handleDelete={handleDelete}
          />
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
