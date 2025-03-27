export type ToastType = "success" | "error";

export interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
}

export interface ToastService {
  toast: ToastProps | null;
  showToast: (toast: ToastProps) => void;
  hideToast: () => void;
}
