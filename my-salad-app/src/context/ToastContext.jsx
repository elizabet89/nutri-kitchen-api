import { createContext, useContext, useState } from "react";


const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });

    setTimeout(() => {
      setToast(null);
    }, 2500);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && <Toast {...toast} />}
    </ToastContext.Provider>
  );
}

function Toast({ message, type }) {
  return (
    <div
      className={`
        fixed bottom-6 right-6 z-50
        px-4 py-3 rounded-lg shadow-lg text-white
        transition-all duration-300 ease-out
        animate-toast-in
        ${type === "success" ? "bg-green-600" : "bg-red-600"}
      `}
    >
      {message}
    </div>
  );
}

export const useToast = () => useContext(ToastContext);