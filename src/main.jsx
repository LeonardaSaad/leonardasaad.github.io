import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'

// i18n translations
import "./i18n.js";

createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <App />
  </BrowserRouter>,
)
