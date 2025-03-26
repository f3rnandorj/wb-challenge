import { create } from "zustand";
import { CheckoutService } from "./checkoutTypes";

const useCheckoutStore = create<CheckoutService>()((set) => ({
  lastCheckout: null,

  setLastCheckout: (checkout) => {
    set({ lastCheckout: checkout });
  },
}));

export function useCheckoutService(): CheckoutService {
  const lastCheckout = useCheckoutStore((state) => state.lastCheckout);
  const setLastCheckout = useCheckoutStore((state) => state.setLastCheckout);

  return {
    lastCheckout,
    setLastCheckout,
  };
}
