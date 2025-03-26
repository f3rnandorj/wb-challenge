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
  gateway: string;
  payment: "monthly" | "yearly";
  price: string;
  discountPercentage: string;
  paymentMethod: string;
  installments: string;
}
