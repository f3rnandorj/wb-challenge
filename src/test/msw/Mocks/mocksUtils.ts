import { Offer } from "@/domain";

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

export const mocksUtils = {
  offers,
};
