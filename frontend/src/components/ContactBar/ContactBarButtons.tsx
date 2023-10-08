import { Box, Grid, SvgIcon } from '@mui/material'
import { ReactComponent as SettingsIcon } from '../../assets/icons/Settings.svg'
import { ReactComponent as ProfileIcon } from '../../assets/icons/Profile pic.svg'
import AddNewContactButton from './AddNewContactButton'
import CustomButton from '../../ui/CustomButton'

const ContactBarButtons: React.FC = () => {
  return (
    <Box display="flex">
      <Grid container alignContent="center" spacing={1} padding={2}>
        <Grid item>
          <CustomButton variant="secondary" content="icon">
            <SvgIcon component={SettingsIcon} />
          </CustomButton>
        </Grid>
        <Grid item>
          <CustomButton variant="secondary" content="icon">
            <SvgIcon component={ProfileIcon} />
          </CustomButton>
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
