import { useState } from "react";
import Button from "./Button";
import { useCart } from "../context/useCart";

export default function ProductCard({ name, description }) {
  const [size, setSize] = useState("individual");
  const { addToCart } = useCart();

  const calculatedPrice = size === "grande" ? 159 : 120;

  const handleOrder = () => {
      console.log("AGREGANDO AL CARRITO");
    addToCart({
      name,
      size,
      price: calculatedPrice,
      quantity: 1,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center">
      <h2 className="text-2xl font-bold text-greenfood-dark mb-2">{name}</h2>
      <p className="text-gray-600 mb-4">{description}</p>

      <div className="mb-4">
        <p className="text-lg font-semibold text-sunshine-dark">
          Selecciona el tamaño:
        </p>

        <label className="inline-flex items-center mr-6">
          <input
            type="radio"
            name={`${name}-size`}
            value="individual"
            checked={size === "individual"}
            onChange={(e) => setSize(e.target.value)}
          />
          <span className="ml-2">Individual - $120</span>
        </label>

        <label className="inline-flex items-center">
          <input
            type="radio"
            name={`${name}-size`}
            value="grande"
            checked={size === "grande"}
            onChange={(e) => setSize(e.target.value)}
          />
          <span className="ml-2">Grande - $159</span>
        </label>
      </div>

      <span className="block text-lg font-semibold mb-4">
        ${calculatedPrice}
      </span>

      <Button className="text-bold" onClick={handleOrder}>Ordenar</Button>
    </div>
  );
}