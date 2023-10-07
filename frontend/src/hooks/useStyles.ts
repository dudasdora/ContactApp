import { Theme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    padding: '0 !important',
    height: '100vh',
    overflow: 'scroll'
  },
  toolBar: {
    backgroundColor: theme.palette.background.default,
    padding: '0 !important'
  }
}))

export default useStyles
