import React from 'react'
import ContactBar from './ContactBar'
import ContactList from './ContactList'
import { Container } from '@mui/material'
import useStyles from '../hooks/useStyles'

const ContactScreen: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <Container className={classes.root}>
        <ContactBar />
        <ContactList />
      </Container>
    </>
  )
}

ContactScreen.displayName = 'ContactScreen'
export default ContactScreen
