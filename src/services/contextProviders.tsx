import { ReactNode } from "react";
import { RefProvider } from "./ref/useRefService";
import { ToastProvider } from "./toast/useToast";

interface Props {
  children: ReactNode;
}

export function ContextProviders({ children }: Props) {
  return (
    <RefProvider>
      <ToastProvider>{children}</ToastProvider>
    </RefProvider>
  );
}
