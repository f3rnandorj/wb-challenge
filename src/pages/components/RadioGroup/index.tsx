import { CSSProperties, useState } from "react";
import { RadioButtonSelector } from "./components/RadioButtonSelector";
import { useOfferGetAll } from "@/domain";
import { EmptyRadioGroup } from "./components/EmptyRadioGroup";

interface Props {
  style?: CSSProperties | undefined;
}

export function RadioGroup({ style }: Props) {
  const [selectedItem, setSelectedItem] = useState<Option>(itemsToMap[0]);

  const { offers, isError, isLoading, refetch } = useOfferGetAll();

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
    <div style={style}>
      <RadioButtonSelector
        onSelect={(item) => setSelectedItem(item)}
        items={offers}
        selectedItem={selectedItem}
        paymentKey="payment"
        discountPercentageKey="discountPercentage"
        installmentsKey="installments"
        priceKey="price"
        paymentMethodKey="paymentMethod"
      />
    </div>
  );
}

interface Option {
  payment: "monthly" | "yearly";
  paymentMethod: string;
  price: string;
  discountPercentage: string;
  installments: string;
}

const itemsToMap: Option[] = [
  {
    payment: "monthly",
    paymentMethod: "Anual  |  À Vista",
    price: "De R$ 514,80  |  Por R$ 436,90",
    discountPercentage: "-15%",
    installments: "10x de R$ 43,69/mês",
  },
  {
    payment: "yearly",
    paymentMethod: "Anual  |  Parcelado",
    price: "De R$ 514,80  |  Por R$ 479,90",
    discountPercentage: "-7%",
    installments: "10x de R$ 47,99/mês",
  },
];
