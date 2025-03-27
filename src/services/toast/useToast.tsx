import { createContext, useContext, useState } from "react";
import { ToastService } from "./toastTypes";

const ToastContext = createContext<ToastService>({
  toast: null,
  hideToast: () => {},
  showToast: () => {},
});

export function ToastProvider({ children }: React.PropsWithChildren) {
  const [toast, setToast] = useState<ToastService["toast"]>(null);

  function showToast(_toast: ToastService["toast"]) {
    setToast(_toast);
  }

  function hideToast() {
    setToast(null);
  }

  return (
    <ToastContext.Provider
      value={{
        toast,
        showToast,
        hideToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export function useToast(): ToastService {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("Toast must be used within a ToastProvider");
  }

  return context;
}
