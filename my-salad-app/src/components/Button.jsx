export default function Button({ children, className }) {
  return (
    <button
      className={`px-6 py-3 rounded-lg shadow font-semibold transition  ${className}`}
    >
      {children}
    </button>
  )
}