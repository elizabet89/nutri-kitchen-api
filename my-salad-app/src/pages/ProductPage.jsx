// src/pages/ProductPage.jsx
import ProductCard from '../components/ProductCard'; // Importa ProductCard
import { useCart } from "../context/useCart";
import CartPanel from "../components/CartPanel";

export default function ProductPage() {
  const products = [
    {
      name: 'Ensalada Veggie',
      description: 'Una deliciosa ensalada de vegetales frescos y saludables.',
      price: 120,
    },
    {
      name: 'Ensalada César',
      description: 'Ensalada clásica con pollo, lechuga y aderezo César.',
      price: 159,
    },
    {
      name: 'Ensalada Mediterránea',
      description: 'Con tomate, pepino, aceitunas y queso feta.',
      price: 149,
    },
  ];

const { cart } = useCart();

  console.log("Carrito:", cart);

  return (
    <div className="bg-greenfood min-h-screen bg-greenfood text-sunshine-dark p-6">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Nuestras Ensaladas</h1>
<h1>Productos</h1>
      <p>Items en carrito: {cart.length}</p>
      {/* Contenedor para las tarjetas usando Grid */}
      <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Mapeo de los productos */}
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            description={product.description}
            price={product.price}
          />
          
        ))}
         <CartPanel />
      </div>
    </div>
  );
}


