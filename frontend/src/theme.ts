import { alpha, createTheme } from '@mui/material/styles'

const textBase = '#FFFFFF'

const theme = createTheme({
  palette: {
    background: {
      default: '#141414'
    },
    text: {
      primary: textBase,
      secondary: alpha(textBase, 0.56),
      disabled: alpha(textBase, 0.32)
    }
  },
  spacing: 8,
  components: {
    MuiModal: {
      styleOverrides: {
        root: {
          paddingTop: '100px',
          display: 'flex',
          justifyContent: 'center'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#141414'
        },
        elevation1: { backgroundColor: '#1E1E1E' }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: '12px',
          ':hover': { backgroundColor: '#232323' },
          ':active': { backgroundColor: '#282828' }
        }
      }
    },
    MuiMenu: { styleOverrides: { list: { padding: 0 } } },
    MuiTypography: {
      styleOverrides: {
        //  Glysa - H1 - Medium - Font size: 32px - Line height: 48px - Letter spacing: 0%
        h1: {
          fontFamily: 'Glysa',
          fontSize: '32px',
          lineHeight: '48px',
          letterSpacing: 0
        },
        // Glysa - H2 - Medium - Font size: 24px - Line height: 40px - Letter spacing: 0%
        h2: {
          fontFamily: 'Glysa',
          fontSize: '24px',
          lineHeight: '40px',
          letterSpacing: 0
        },
        //Lexend Deca - Regular - Font size: 16px - Line height: 24px - Letter spacing: 1%
        h3: {
          fontFamily: 'Lexend Deca',
          fontSize: '16px',
          lineHeight: '24px',
          letterSpacing: '.1rem'
        },
        // Lexend Deca - Body - Regular - Font size: 14px - Line height: 20px - Letter spacing: 1%
        body1: {
          fontFamily: 'Lexend Deca',
          fontSize: '14px',
          lineHeight: '20px',
          letterSpacing: '.1rem'
        },
        // Lexend Deca - Body - Regular - Font size: 12px - Line height: 12px - Letter spacing: 1%
        body2: {
          fontFamily: 'Lexend Deca',
          fontSize: '12px',
          lineHeight: '12px',
          letterSpacing: '.1rem'
        }
      }
    }
  }
})

export default theme
