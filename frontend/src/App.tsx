import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import ContactScreen from './components/ContactScreen'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContactScreen />
    </QueryClientProvider>
  )
}

export default App
