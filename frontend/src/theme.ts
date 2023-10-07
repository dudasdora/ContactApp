import { alpha, createTheme } from '@mui/material/styles'

const textBase = '#FFFFFF'

const theme = createTheme({
  palette: {
    background: {
      default: '#141414',
      paper: '#2D2D2D'
    },
    text: {
      primary: textBase,
      secondary: alpha(textBase, 0.56),
      disabled: alpha(textBase, 0.32)
    }
  },

  components: {}
})

export default theme
