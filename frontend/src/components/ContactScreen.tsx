import React from 'react'
import ContactBar from './ContactBar/ContactBar'
import ContactList from './ContactList/ContactList'
import { Paper } from '@mui/material'

const ContactScreen: React.FC = () => {
  return (
    <>
      <Paper
        sx={{
          padding: '0',
          height: '100vh',
          overflow: 'scroll'
        }}
        elevation={0}
      >
        <ContactBar />
        <ContactList />
      </Paper>
    </>
  )
}

ContactScreen.displayName = 'ContactScreen'
export default ContactScreen
