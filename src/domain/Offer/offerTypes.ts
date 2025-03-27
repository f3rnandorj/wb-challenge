export interface OfferApi {
  id: number;
  storeId: string;
  title: string;
  description: string;
  caption: string;
  fullPrice: number;
  discountAmmount: number;
  discountPercentage: number;
  periodLabel: string;
  period: string;
  discountCouponCode: string | null;
  order: number;
  priority: number;
  gateway: string;
  splittable: boolean;
  installments: number;
  acceptsCoupon: boolean;
}

export interface Offer {
  id: number;
  discountCouponCode: string | null;
  gateway: string; // "iugu"
  payment: "monthly" | "yearly";
  price: string; // "De R$ 600,00  |  Por R$ 540,00"
  discountPercentage: string; // '-10%'
  paymentMethod: string; // "Anual  |  Parcelado"
  installments: string; // "12x de R$ 45.00/mês"
  discountedPrice: number;
}
