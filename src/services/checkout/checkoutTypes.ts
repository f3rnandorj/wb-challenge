import { CheckoutCreateParams, Offer } from "@/domain";

export type SuccessCheckoutInfo = CheckoutCreateParams &
  Omit<Offer, "installments">;
export interface CheckoutService {
  lastSuccessCheckout: SuccessCheckoutInfo | null;
  setLastSuccessCheckout: (checkout: SuccessCheckoutInfo | null) => void;
}
