import { Checkout, CheckoutApi } from "./checkoutTypes";

function toCheckout(checkout: CheckoutApi): Checkout {
  return {
    cpf: checkout.creditCardCPF,
    installments: checkout.installments,
  };
}

export const checkoutAdapter = {
  toCheckout,
};
