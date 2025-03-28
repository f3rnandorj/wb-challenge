import { Checkout, CheckoutCreateParams, Offer } from "@/domain";
import { SuccessCheckoutInfo } from "@/services";

const offers: Offer[] = [
  {
    id: 32,
    discountCouponCode: null,
    discountedPrice: 540,
    gateway: "iugu",
    payment: "monthly",
    price: "De R$ 600,00 | Por R$ 540,00",
    paymentMethod: "Anual | Parcelado",
    discountPercentage: "-10%",
    installments: "12x de R$ 45.00/mês",
  },
  {
    id: 33,
    discountCouponCode: null,
    discountedPrice: 6480,
    gateway: "iugu",
    payment: "yearly",
    price: "De R$ 7200,00 | Por R$ 6480,00",
    paymentMethod: "Anual | À Vista",
    discountPercentage: "-10%",
    installments: "1x de R$ 6480.00",
  },
];

const lastSuccessCheckout: SuccessCheckoutInfo = {
  id: 32,
  discountCouponCode: null,
  discountedPrice: 540,
  gateway: "iugu",
  payment: "monthly",
  price: "De R$ 600,00  |  Por R$ 540,00",
  paymentMethod: "Anual  |  Parcelado",
  discountPercentage: "-10%",
  installments: "12x de R$ 45.00/mês",
  couponCode: null,
  creditCardCPF: "15977732716",
  creditCardCVV: "123",
  creditCardExplorationDate: "10/28",
  creditCardHolder: "Asdasdas Dasdasdasd",
  creditCardNumber: "0000000000222202",
  offerId: 32,
  userId: 1,
};

const checkout: Checkout = {
  cpf: "98765432100",
  installments: 1,
};

const checkoutCreateParams: CheckoutCreateParams = {
  couponCode: null,
  creditCardCPF: "98765432100",
  creditCardCVV: "345",
  creditCardExplorationDate: "10/25",
  creditCardHolder: "Fernando Henrique",
  creditCardNumber: "0000000000000000",
  gateway: "iugu",
  installments: 1,
  offerId: 32,
  userId: 1,
};

export const mockUtils = {
  offers,
  lastSuccessCheckout,
  checkout,
  checkoutCreateParams,
};
