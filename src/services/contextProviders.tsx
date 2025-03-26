import { ReactNode } from "react";
import { RefProvider } from "./ref/useRefService";

interface Props {
  children: ReactNode;
}

export function ContextProviders({ children }: Props) {
  return <RefProvider>{children}</RefProvider>;
}
