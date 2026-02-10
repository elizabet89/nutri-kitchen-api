import Button from "./Button"

export default function Banner() {
  return (
    <div className="bg-greenfood-dark text-white py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">🌱 Green Food</h1>
      <p className="text-xl mb-6">Frescura y salud en cada ensalada</p>
      <Button>Explora el menú</Button>
    </div>
  )
}
