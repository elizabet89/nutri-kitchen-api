import { useState } from "react";
import Button from "./Button";

export default function ProductCard({ name, description, price }) {
  // Estado para el tamaño seleccionado (individual o grande)
  const [size, setSize] = useState('individual'); // El valor inicial es 'individual'

  // Manejar el cambio de tamaño
  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  // Calcular el precio basado en el tamaño seleccionado
  const calculatedPrice = size === 'grande' ? 159 : 120;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center">
      <h2 className="text-2xl font-bold text-greenfood-dark mb-2">{name}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
     <span className="block text-lg font-semibold text-sunshine-dark mb-4">${price}</span>

      
      {/* Radio buttons para elegir el tamaño */}
      <div className="mb-4">
        <p className="text-lg font-semibold text-sunshine-dark">Selecciona el tamaño:</p>
        
       <label className="inline-flex items-center mr-6">
  <input
    type="radio"
    name="size"
    value="individual"
    checked={size === 'individual'}
    onChange={handleSizeChange}
    className="form-radio text-sunshine-dark"
  />
  <span className="ml-2 text-sunshine-dark">Individual - $120</span>
</label>

        <label className="inline-flex items-center">
          <input
            type="radio"
            name="size"
            value="grande"
            checked={size === 'grande'}
            onChange={handleSizeChange}
            className="form-radio text-sunshine-dark"
          />
          <span className="ml-2">Grande - $159</span>
        </label>
      </div>

      {/* Mostrar el precio calculado */}
      <span className="block text-lg font-semibold text-sunshine-dark mb-4">
        ${calculatedPrice}
      </span>

      <Button>Ordenar</Button>
    </div>
  );
}