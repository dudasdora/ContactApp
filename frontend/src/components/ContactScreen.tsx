import React from 'react'
import ContactBar from './ContactBar/ContactBar'
import ContactList from './ContactList/ContactList'
import { Paper } from '@mui/material'
import useStyles from '../hooks/useStyles'

const ContactScreen: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <Paper className={classes.root} elevation={0}>
        <ContactBar />
        <ContactList />
      </Paper>
    </>
  )
}

ContactScreen.displayName = 'ContactScreen'
export default ContactScreen
