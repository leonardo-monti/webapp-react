import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.jsx'
import { LoaderContextProvider } from './context/LoaderContext.jsx'

createRoot(document.getElementById('root')).render(
  <LoaderContextProvider>
    <App />
  </LoaderContextProvider>,
)
