import React from "react";
import { useTheme } from "styled-components";
import { Text } from "@/components";
import { SelectField, SelectWrapper, Option } from "./styles";

export interface SelectValueProps {
  label: string;
  value: number | string | number;
}
export interface SelectInputProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  width?: string;
  options: SelectValueProps[];
  errorMessage?: string;
}

export function SelectInput({
  label,
  width = "100%",
  options,
  value,
  errorMessage,
  ...selectInputProps
}: SelectInputProps) {
  const { spacing } = useTheme();

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
        isDefaultItem={value === 0}
        value={value}
        {...selectInputProps}
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </SelectField>

      <Text color="danger">{errorMessage}</Text>
    </SelectWrapper>
  );
}
