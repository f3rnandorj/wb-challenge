import { api } from "@/api";
import { CheckoutApi, CheckoutCreateParams } from "./checkoutTypes";

async function createCheckout(
  params: CheckoutCreateParams
): Promise<CheckoutApi> {
  const response = await api.post<CheckoutApi>("/subscription", params);

  return response.data;
}

export const checkoutApi = {
  createCheckout,
};
