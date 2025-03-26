import React from "react";
import { UseControllerProps, FieldValues, Controller } from "react-hook-form";
import { TextInput, TextInputProps } from "../TextInput";
import { maskUtils } from "@/utils";

export type MaskType = "cardNumber" | "expiryDate" | "cpf";

type FormTextInputProps<FormType extends FieldValues> = {
  mask?: MaskType;
} & TextInputProps &
  UseControllerProps<FormType>;

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  errorMessage,
  mask,
  ...textInputProps
}: FormTextInputProps<FormType>) {
  const { formatCreditCardInput, formatExpiryDate, formatCpf } = maskUtils;

  const maskStrategies: Record<MaskType, (text: string) => string> = {
    cardNumber: formatCreditCardInput,
    expiryDate: formatExpiryDate,
    cpf: formatCpf,
  };

  function applyMask(text: string, mask?: MaskType): string {
    if (!mask) return text;

    const maskFunction = maskStrategies[mask];
    return maskFunction ? maskFunction(text) : text;
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextInput
          {...textInputProps}
          value={field.value}
          onChange={(e) => field.onChange(applyMask(e.target.value))}
          errorMessage={fieldState.error?.message || errorMessage}
        />
      )}
    ></Controller>
  );
}
