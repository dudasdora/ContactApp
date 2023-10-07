import { Box, Grid, IconButton, SvgIcon } from '@mui/material'
import { ReactComponent as SettingsIcon } from '../../assets/icons/Settings.svg'
import { ReactComponent as ProfileIcon } from '../../assets/icons/Profile pic.svg'
import AddNewContactButton from './AddNewContactButton'

const ContactBarButtons: React.FC = () => {
  return (
    <Box display="flex">
      <Grid container alignContent="center" spacing={1} padding={2}>
        <Grid item>
          <IconButton>
            <SvgIcon component={SettingsIcon} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <SvgIcon component={ProfileIcon} />
          </IconButton>
        </Grid>
        <Grid item>
          <AddNewContactButton />
        </Grid>
      </Grid>
    </Box>
  )
}
ContactBarButtons.displayName = 'ContactBarButtons'
export default ContactBarButtons
