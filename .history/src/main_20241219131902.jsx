import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import routes from './Router/route.jsx';
export routes


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)