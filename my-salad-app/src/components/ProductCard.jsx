import { useState } from "react";
import Button from "./Button";

export default function ProductCard({ name, description }) {
  const [size, setSize] = useState("individual");

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const calculatedPrice = size === "grande" ? 159 : 120;

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
            name={`${name}-size`}   // 👈 cada producto tiene su propio grupo
            value="individual"
            checked={size === "individual"}
            onChange={handleSizeChange}
            className="form-radio text-sunshine-dark"
          />
          <span className="ml-2 text-sunshine-dark">Individual - $120</span>
        </label>

        <label className="inline-flex items-center">
          <input
            type="radio"
            name={`${name}-size`}   // 👈 mismo grupo, pero único por producto
            value="grande"
            checked={size === "grande"}
            onChange={handleSizeChange}
            className="form-radio text-sunshine-dark"
          />
          <span className="ml-2">Grande - $159</span>
        </label>
      </div>

      <span className="block text-lg font-semibold text-sunshine-dark mb-4">
        ${calculatedPrice}
      </span>

      <Button className=" text-bold ">Ordenar</Button>
    </div>
  );
}