export default function Button({ children, onClick, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-white text-greenfood-dark px-4 py-2 rounded-lg shadow hover:bg-gray-100 ${className}`}
    >
      {children}
    </button>
  );
}