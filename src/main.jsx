import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Estilos de la App
import './styles/index.css'

// Importaciones de componentes y rutas
import { AuthProvider } from './context/AuthContext.jsx'
import { RouterApp } from './router/RouterApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterApp />
    </AuthProvider>
  </StrictMode>,
)
