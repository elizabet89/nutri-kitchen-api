import { useState } from "react";
import { useCart } from "../context/useCart";
import { useToast } from "../context/ToastContext";

export default function ProductCard({ name, description }) {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const [size, setSize] = useState("individual");
  const [loading, setLoading] = useState(false);

  const price = size === "grande" ? 159 : 120;

  const handleAdd = () => {
    if (loading) return;

    setLoading(true);

    setTimeout(() => {
      addToCart({
        name,
        size,
        price,
        quantity: 1,
      });
 showToast("Producto agregado al carrito 🥗");
      setLoading(false);
    }, 500);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center">
      <h2 className="text-2xl font-bold text-greenfood-dark mb-2">
        {name}
      </h2>

      <p className="text-gray-600 mb-4">{description}</p>

      {/* Selector de tamaño */}
      <div className="mb-4">
        <p className="font-semibold mb-2">Selecciona tamaño:</p>

        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            name={`${name}-size`}
            value="individual"
            checked={size === "individual"}
            onChange={(e) => setSize(e.target.value)}
          />
          <span className="ml-2">Individual ($120)</span>
        </label>

        <label className="inline-flex items-center">
          <input
            type="radio"
            name={`${name}-size`}
            value="grande"
            checked={size === "grande"}
            onChange={(e) => setSize(e.target.value)}
          />
          <span className="ml-2">Grande ($159)</span>
        </label>
      </div>

      {/* Precio */}
      <p className="text-lg font-semibold mb-4">
        Total: ${price}
      </p>

      {/* Botón con loader */}
      <button
        onClick={handleAdd}
        disabled={loading}
        className={`w-full py-2 rounded-lg font-semibold transition
          ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700 text-white"
          }
        `}
      >
        {loading ? "Agregando..." : "Agregar al carrito"}
      </button>
    </div>
  );
}