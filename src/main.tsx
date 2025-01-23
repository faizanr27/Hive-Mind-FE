import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import axios from 'axios'
import { AuthProvider } from './context/AuthContext';

axios.defaults.withCredentials = true;

createRoot(document.getElementById('root')!).render(
  <StrictMode>

<AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
