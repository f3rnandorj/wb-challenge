import { CheckoutCreateParams } from "@/domain";

export interface CheckoutService {
  lastCheckout: CheckoutCreateParams | null;
  setLastCheckout: (checkout: CheckoutCreateParams | null) => void;
}
