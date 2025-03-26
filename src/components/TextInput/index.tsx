// CardNumberInput.tsx
import React from "react";
import { InputField, InputWrapper } from "./styles";
import { Text } from "@/components";
import { useTheme } from "styled-components";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  width?: string;
  errorMessage?: string;
}

export function TextInput({
  label,
  width = "100%",
  errorMessage,
  ...textInputProps
}: TextInputProps) {
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

      <Text preset="body2" color="danger">
        {errorMessage}
      </Text>
    </InputWrapper>
  );
}
