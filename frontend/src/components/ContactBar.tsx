import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const ContactBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contacts
          </Typography>
          <Button color="inherit">+ Add new</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

ContactBar.displayName = 'ContactBar'
export default ContactBar
