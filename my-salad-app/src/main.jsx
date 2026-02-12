import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'   // ✅ Importa Tailwind aquí
import { CartProvider } from "./context/CartContext";

import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <CartProvider>
    <App />
    </CartProvider>
  </StrictMode>,
)
