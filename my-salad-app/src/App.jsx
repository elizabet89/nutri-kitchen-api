import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-greenfood text-sunshine-dark">
      <div className="text-center p-10 rounded-xl shadow-lg bg-white">
        <h1 className="text-5xl font-bold mb-4 text-greenfood-dark">
          🌱 Bienvenido a Green Food
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Frescura y salud en cada ensalada
        </p>
        <button className="px-6 py-3 bg-sunshine-dark text-white font-semibold rounded-lg shadow hover:bg-sunshine">
          Ordena ahora
        </button>
      </div>
    </div>
  );
}
