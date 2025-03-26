import React from "react";
import { useTheme } from "styled-components";
import { Text } from "@/components";
import { SelectField, SelectWrapper, Option } from "./styles";

interface SelectInputProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  width?: string;
  options: { label: string; value: string | number }[];
  value: string | number;
}

export function SelectInput({
  label,
  width = "100%",
  options,
  value,
  onChange,
}: SelectInputProps) {
  const { spacing } = useTheme();
  console.log(value);
  return (
    <SelectWrapper width={width}>
      {label && (
        <Text
          as="label"
          preset="footnote"
          style={{ paddingBottom: spacing.s4 }}
        >
          {label}
        </Text>
      )}

      <SelectField
        value={value}
        onChange={onChange}
        isDefaultItem={value === 0}
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </SelectField>
    </SelectWrapper>
  );
}
