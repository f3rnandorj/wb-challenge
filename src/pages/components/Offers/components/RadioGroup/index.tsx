import { CSSProperties } from "react";
import { RadioButtonSelector } from "./components/RadioButtonSelector";
import { Offer, UseOfferGetAllReturn } from "@/domain";
import { EmptyRadioGroup } from "./components/EmptyRadioGroup";
import { RadioGroupContainer } from "./styles";

interface Props {
  style?: CSSProperties | undefined;
  offerListData: UseOfferGetAllReturn;
  selectedOffer: Offer | undefined;
  setSelectedOffer: (offer: Offer) => void;
}

export function RadioGroup({
  style,
  offerListData,
  selectedOffer,
  setSelectedOffer,
}: Props) {
  const { isError, isLoading, offers, refetch } = offerListData;

  if (isError || isLoading || !offers) {
    return (
      <EmptyRadioGroup
        refetch={refetch}
        isError={isError && !offers}
        isLoading={isLoading}
      />
    );
  }

  return (
    <RadioGroupContainer style={style}>
      <RadioButtonSelector
        items={offers}
        onSelect={(item) => setSelectedOffer(item)}
        selectedItem={selectedOffer}
        paymentKey="payment"
        discountPercentageKey="discountPercentage"
        installmentsKey="installments"
        priceKey="price"
        paymentMethodKey="paymentMethod"
      />
    </RadioGroupContainer>
  );
}
