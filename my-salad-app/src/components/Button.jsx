export default function Button({ children }) {
  return (
    <button className="px-6 py-3 bg-sunshine-dark text-white font-semibold rounded-lg shadow hover:bg-sunshine transition">
      {children}
    </button>
  )
}