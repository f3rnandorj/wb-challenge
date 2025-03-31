// CardNumberInput.tsx
import React from "react";
import { Input, InputField, InputWrapper } from "./styles";
import { Icon, IconProps, Text } from "@/components";
import { useTheme } from "styled-components";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  width?: string;
  errorMessage?: string;
  rightIcon?: IconProps;
}

export function TextInput({
  label,
  width = "100%",
  errorMessage,
  rightIcon,
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

      <InputField>
        <Input type="text" {...textInputProps} />

        {rightIcon?.name && <Icon {...rightIcon} />}
      </InputField>

      <Text preset="body2" color="danger">
        {errorMessage}
      </Text>
    </InputWrapper>
  );
}
