import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import ContactScreen from './components/ContactScreen'
import { ModalProvider } from './stores/ModalStore'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <ContactScreen />
        </ModalProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
