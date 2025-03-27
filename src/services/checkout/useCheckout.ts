import { create } from "zustand";
import { CheckoutService } from "./checkoutTypes";

const useCheckoutStore = create<CheckoutService>()((set) => ({
  lastSuccessCheckout: null,

  setLastSuccessCheckout: (checkout) => {
    set({ lastSuccessCheckout: checkout });
  },
}));

export function useCheckoutService(): CheckoutService {
  const lastSuccessCheckout = useCheckoutStore(
    (state) => state.lastSuccessCheckout
  );
  const setLastSuccessCheckout = useCheckoutStore(
    (state) => state.setLastSuccessCheckout
  );

  return {
    lastSuccessCheckout,
    setLastSuccessCheckout,
  };
}
