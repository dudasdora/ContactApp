import React from 'react'
import ContactHeader from './ContactHeader'
import ContactList from './ContactList'

const ContactScreen: React.FC = () => {
  return (
    <>
      <ContactHeader />
      <ContactList />
    </>
  )
}

ContactScreen.displayName = 'ContactScreen'
export default ContactScreen
