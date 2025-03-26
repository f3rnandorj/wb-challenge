// TextInputController.tsx
import React from "react";
import { UseControllerProps, FieldValues, Controller } from "react-hook-form";
import { TextInput, TextInputProps } from "../TextInput";

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  errorMessage,
  ...textInputProps
}: TextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextInput
          value={field.value}
          onChange={field.onChange}
          errorMessage={fieldState.error?.message || errorMessage}
          {...textInputProps}
        />
      )}
    ></Controller>
  );
}
