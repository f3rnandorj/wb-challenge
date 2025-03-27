import { Offer, OfferApi } from "./offerTypes";

function formatPrice(value: number): string {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
}

function toOffer(offer: OfferApi): Offer {
  const isInstallment = offer.splittable;
  const fullPrice = offer.fullPrice;
  const discountedPrice = fullPrice - offer.discountAmmount;
  const discountPercentage = `-${(offer.discountPercentage * 100).toFixed(0)}%`;

  return {
    id: offer.id,
    discountCouponCode: offer.discountCouponCode,
    discountedPrice,
    gateway: offer.gateway,
    payment: isInstallment ? "monthly" : "yearly",
    price: `De ${formatPrice(fullPrice)}  |  Por ${formatPrice(
      discountedPrice
    )}`,
    paymentMethod: `Anual  |  ${isInstallment ? "Parcelado" : "À Vista"}`,
    discountPercentage,
    installments: `${offer.installments}x de R$ ${(
      discountedPrice / offer.installments
    ).toFixed(2)}${isInstallment ? "/mês" : ""}`,
  };
}

export const offerAdapter = {
  toOffer,
};
