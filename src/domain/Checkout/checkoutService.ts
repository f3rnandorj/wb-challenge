import { checkoutAdapter } from "./checkoutAdapter";
import { checkoutApi } from "./checkoutApi";
import { Checkout, CheckoutCreateParams } from "./checkoutTypes";

async function createCheckout(params: CheckoutCreateParams): Promise<Checkout> {
  const response = await checkoutApi.createCheckout(params);

  return checkoutAdapter.toCheckout(response);
}

export const checkoutService = {
  createCheckout,
};
