import Button from "./Button"

export default function ProductCard({ name, description, price }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center">
      <h2 className="text-2xl font-bold text-greenfood-dark mb-2">{name}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <span className="block text-lg font-semibold text-sunshine-dark mb-4">${price}</span>
      <Button>Ordenar</Button>
    </div>
  )
}
