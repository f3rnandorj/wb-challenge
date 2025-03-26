// components/SelectInstallments.tsx
import React, { useState } from "react";
import { SelectInput } from "@/components";

export function SelectInstallments() {
  const [selectedValue, setSelectedValue] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(Number(e.target.value));
  };

  return (
    <SelectInput
      label="Número de parcelas"
      options={installments}
      value={selectedValue}
      onChange={handleChange}
    />
  );
}

const installments = [
  { label: "Selecionar", value: 0 },
  { label: "1x", value: 1 },
  { label: "2x", value: 2 },
  { label: "3x", value: 3 },
  { label: "4x", value: 4 },
  { label: "5x", value: 5 },
  { label: "6x", value: 6 },
  { label: "7x", value: 7 },
  { label: "8x", value: 8 },
  { label: "9x", value: 9 },
  { label: "10x", value: 10 },
  { label: "11x", value: 11 },
  { label: "12x", value: 12 },
];
