import React from "react";

import { RadioButtonItem } from "./RadioButtonItem";
import {
  RadioButtonSelectorContainer,
  RadioButtonSelectorItemWrapper,
} from "../styles";
import { useRefService } from "@/services";

type ItemTConstraint = Record<string, any>;
export type RadioButtonSelectorProps<ItemT extends ItemTConstraint> = {
  onSelect: (_item: ItemT) => void;
  items: ItemT[];
  selectedItem?: ItemT;
  paymentKey: keyof ItemT;
  discountPercentageKey: keyof ItemT;
  installmentsKey: keyof ItemT;
  priceKey: keyof ItemT;
  paymentMethodKey: keyof ItemT;
};
export function RadioButtonSelector<ItemT extends ItemTConstraint>({
  items,
  selectedItem,
  onSelect,
  discountPercentageKey,
  installmentsKey,
  paymentMethodKey,
  paymentKey,
  priceKey,
}: RadioButtonSelectorProps<ItemT>) {
  const { homeRadioGroupFirstElement, homeRadioGroupSecondElement } =
    useRefService();

  return (
    <RadioButtonSelectorContainer>
      {items.map((item, index) => (
        <RadioButtonSelectorItemWrapper
          id="firstOfferRef"
          key={item[paymentKey]}
          onClick={() => onSelect(item)}
        >
          <RadioButtonItem
            ref={
              index === 0
                ? homeRadioGroupFirstElement
                : index === 1
                ? homeRadioGroupSecondElement
                : null
            }
            discountPercentage={item[discountPercentageKey]}
            installments={item[installmentsKey]}
            price={item[priceKey]}
            paymentMethod={item[paymentMethodKey]}
            onClick={() => onSelect(item)}
            isSelected={
              !!selectedItem && selectedItem[paymentKey] === item[paymentKey]
            }
          />
        </RadioButtonSelectorItemWrapper>
      ))}
    </RadioButtonSelectorContainer>
  );
}
