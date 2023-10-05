import React from 'react'
import ContactBar from './ContactBar'
import ContactList from './ContactList'

const ContactScreen: React.FC = () => {
  return (
    <>
      <ContactBar />
      <ContactList />
    </>
  )
}

ContactScreen.displayName = 'ContactScreen'
export default ContactScreen
