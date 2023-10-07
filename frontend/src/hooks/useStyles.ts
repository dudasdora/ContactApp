import { Theme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingLeft: 0,
    paddingRight: 0,
    height: '100vh'
  }
}))

export default useStyles
