export interface CheckoutCreateParams {
  couponCode: string | null;
  creditCardCPF: string;
  creditCardCVV: string;
  creditCardExplorationDate: string;
  creditCardHolder: string;
  creditCardNumber: string;
  gateway: string;
  installments: number;
  offerId: number;
  userId: number;
}

export interface CheckoutApi {
  id: number;
  couponCode: string | null;
  creditCardCPF: string;
  creditCardCVV: string;
  creditCardExplorationDate: string;
  creditCardHolder: string;
  creditCardNumber: string;
  gateway: string;
  installments: number;
  offerId: number;
  userId: number;
}

export interface Checkout {
  cpf: string;
  installments: number;
}
