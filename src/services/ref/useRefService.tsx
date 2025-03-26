import { useContext, useRef } from "react";

import React, { createContext, PropsWithChildren } from "react";
import { RefService } from "./refTypes";

export const RefProviderContext = createContext<RefService>({} as RefService);

export function RefProvider({ children }: PropsWithChildren) {
  const homeRadioGroupFirstElement = useRef<HTMLDivElement | null>(null);
  const homeRadioGroupSecondElement = useRef<HTMLDivElement | null>(null);

  return (
    <RefProviderContext.Provider
      value={{
        homeRadioGroupFirstElement,
        homeRadioGroupSecondElement,
      }}
    >
      {children}
    </RefProviderContext.Provider>
  );
}

export function useRefService(): RefService {
  const context = useContext(RefProviderContext);

  if (!context) {
    throw new Error("You must use a context provider on app");
  }

  return context;
}
