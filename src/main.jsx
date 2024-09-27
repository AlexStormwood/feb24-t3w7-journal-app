import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import JournalEntriesProvider from './contexts/EntriesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JournalEntriesProvider>
      <App />
    </JournalEntriesProvider>
    
  </StrictMode>,
)
