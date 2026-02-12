import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'   // ✅ Importa Tailwind aquí
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastContext";

import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <CartProvider>
        <ToastProvider>
    <App />
    </ToastProvider>
    </CartProvider>
  </StrictMode>,
)
