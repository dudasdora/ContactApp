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
  },
  modalContent: {
    width: '365px',
    height: 'fit-content',
    padding: theme.spacing(3),
    borderRadius: `8px !important`
  }
}))

export default useStyles
