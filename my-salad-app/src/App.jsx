import './App.css';
import './index.css';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage'; // Importa ProductPage
import Button from './components/Button'; // Importa Button

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para la página principal con el botón */}
        <Route path="/" element={
          <div className="min-h-screen flex items-center justify-center bg-greenfood text-sunshine-dark">
            <div className="text-center p-10 rounded-xl shadow-lg bg-white">
              <h1 className="text-5xl font-bold mb-4 text-greenfood-dark">
                🌱 Bienvenido a Green Food
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                Frescura y salud en cada ensalada
              </p>
       

       

              <Button>
                <a href="/products">Ordena ahora</a>
              </Button>
            </div>
          </div>
        } />
        
        {/* Ruta para la página de productos */}
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}
