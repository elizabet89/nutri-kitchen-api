import { useCart } from "../context/useCart";

export default function CartPanel() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <aside className="fixed top-0 right-0 w-80 h-full bg-white shadow-xl p-5 z-40">
      <h2 className="text-xl font-bold mb-4">🛒 Tu carrito</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">El carrito está vacío</p>
      ) : (
        <>
          <ul className="space-y-3">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.size} · ${item.price}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Quitar
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4 border-t pt-4">
            <p className="font-bold text-lg">Total: ${total}</p>

            <button
              onClick={clearCart}
              className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
            >
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </aside>
  );
}