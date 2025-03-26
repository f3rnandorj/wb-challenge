import React from "react";

import { Text } from "@/components";
import {
  Details,
  DiscountPercentageContainer,
  PriceContainer,
  RadioButtonItemContainer,
} from "../styles";
import { Radio, RadioProps } from "./Radio";

export type RadioButtonItemProps = RadioProps & {
  paymentMethod: string;
  discountPercentage: string;
  installments: string;
  price: string;
};
export function RadioButtonItem({
  discountPercentage,
  installments,
  price,
  paymentMethod,
  ...radioProps
}: RadioButtonItemProps) {
  return (
    <RadioButtonItemContainer>
      <Details>
        <Text preset="body2Alternative" color="primary">
          {paymentMethod}
        </Text>

        <PriceContainer>
          <Text preset="footnote" color="primary">
            {price}
          </Text>

          <DiscountPercentageContainer>
            <Text preset="exceptions" color="grayWhite">
              {discountPercentage}
            </Text>
          </DiscountPercentageContainer>
        </PriceContainer>

        <Text preset="exceptions" color="secondary">
          {installments}
        </Text>
      </Details>

      <Radio {...radioProps} />
    </RadioButtonItemContainer>
  );
}
