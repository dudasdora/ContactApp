import { AppBar, Grid, IconButton, SvgIcon, Toolbar } from '@mui/material'
import React from 'react'
import { ReactComponent as GoBackIcon } from '../../assets/icons/Back arrow.svg'
import { ReactComponent as LightModeIcon } from '../../assets/icons/Light mode.svg'

import useStyles from '../../hooks/useStyles'
import ContactTitle from './ContactTitle'
import ContactBarButtons from './ContactBarButtons'

const ContactBar: React.FC = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolBar}>
        <Grid container>
          <Grid item xs={1} display="flex" justifyContent="right">
            <IconButton>
              <SvgIcon component={GoBackIcon} />
            </IconButton>
          </Grid>
          <Grid item xs={10} display="flex" justifyContent="space-between">
            <ContactTitle />
            <ContactBarButtons />
          </Grid>
          <Grid item xs={1} display="flex" justifyContent="left">
            <IconButton>
              <SvgIcon component={LightModeIcon} />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

ContactBar.displayName = 'ContactBar'
export default ContactBar
