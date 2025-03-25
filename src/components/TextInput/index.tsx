// CardNumberInput.tsx
import React from "react";
import { InputField, InputWrapper } from "./styles";
import { Text } from "@/components";
import { useTheme } from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  width?: string;
}

export function TextInput({
  label,
  width = "100%",
  ...textInputProps
}: InputProps) {
  const { spacing } = useTheme();

  return (
    <InputWrapper width={width}>
      {label && (
        <Text
          as="label"
          preset="footnote"
          style={{ paddingBottom: spacing.s4 }}
        >
          {label}
        </Text>
      )}

      <InputField type="text" {...textInputProps} />
    </InputWrapper>
  );
}
