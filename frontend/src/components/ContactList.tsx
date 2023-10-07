import { Grid, List } from '@mui/material'
import React, { useMemo } from 'react'
import { useGetContacts } from '../hooks/useGetContacts'
import ErrorDisplay from '../ui/ErrorDisplay'
import LoadingDisplay from '../ui/LoadingDisplay'
import ContactListItem from './ContactListItem'

const ContactList: React.FC = () => {
  const { data, error, isLoading } = useGetContacts()

  const contacts = useMemo(() => data ?? [], [data])

  return (
    <Grid container spacing={0}>
      <Grid item xs></Grid>
      <Grid item xs={10}>
        {isLoading ? (
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
        )}
      </Grid>
      <Grid item xs></Grid>
    </Grid>
  )
}

ContactList.displayName = 'ContactList'
export default ContactList
