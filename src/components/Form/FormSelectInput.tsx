import React from "react";
import { UseControllerProps, FieldValues, Controller } from "react-hook-form";
import { SelectInput } from "../SelectInput";
import { SelectInputProps } from "../SelectInput";

type FormSelectInputProps<FormType extends FieldValues> =
  {} & SelectInputProps & UseControllerProps<FormType>;

export function FormSelectInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  errorMessage,
  ...selectInputProps
}: FormSelectInputProps<FormType>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <SelectInput
          {...selectInputProps}
          value={field.value}
          onChange={(e) => field.onChange(Number(e.target.value))}
          errorMessage={fieldState.error?.message || errorMessage}
        />
      )}
    ></Controller>
  );
}
