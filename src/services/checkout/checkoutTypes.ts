import { CheckoutCreateParams, Offer } from "@/domain";

export type SuccessCheckoutInfo = Offer &
  Omit<CheckoutCreateParams, "installments">;
export interface CheckoutService {
  lastSuccessCheckout: SuccessCheckoutInfo | null;
  setLastSuccessCheckout: (checkout: SuccessCheckoutInfo | null) => void;
}
