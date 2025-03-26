import { useState } from "react";
import { RadioButtonSelector } from "./components/RadioButtonSelector";

interface Option {
  payment: "monthly" | "yearly";
  paymentMethod: string;
  price: string;
  discountPercentage: string;
  installments: string;
}

export function RadioGroup() {
  const [selectedItem, setSelectedItem] = useState<Option>(itemsToMap[0]);

  return (
    <RadioButtonSelector
      onSelect={(item) => setSelectedItem(item)}
      items={itemsToMap}
      selectedItem={selectedItem}
      paymentKey="payment"
      discountPercentageKey="discountPercentage"
      installmentsKey="installments"
      priceKey="price"
      paymentMethodKey="paymentMethod"
    />
  );
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
