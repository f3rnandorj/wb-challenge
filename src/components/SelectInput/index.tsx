import React, { useEffect } from "react";
import { useTheme } from "styled-components";
import { Icon, Text } from "@/components";
import {
  SelectWrapper,
  CustomSelect,
  SelectDropdown,
  SelectOption,
} from "./styles";

export interface SelectValueProps {
  label: string;
  value: number | string;
}

export interface SelectInputProps
  extends Omit<React.InputHTMLAttributes<HTMLSelectElement>, "onClick"> {
  label?: string;
  width?: string;
  options: SelectValueProps[];
  errorMessage?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export function SelectInput({
  label,
  width = "100%",
  options,
  value,
  errorMessage,
  onClick,
  disabled,
  onChange,
}: SelectInputProps) {
  const { spacing } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const selectRef = React.useRef<HTMLButtonElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);
  const displayValue = selectedOption?.label || "";

  const handleToggle = () => setIsOpen(!isOpen);
  const handleSelect = (selectedValue: string | number) => {
    if (onChange) {
      const event = {
        target: { value: selectedValue },
      } as React.ChangeEvent<HTMLSelectElement>;
      onChange(event);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!selectRef?.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <SelectWrapper
      type="button"
      ref={selectRef}
      disabled={disabled}
      width={width}
      data-testid="select-input-button"
      onClick={() => onClick || setIsOpen(!isOpen)}
      data-is-select-open={isOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsOpen(!isOpen);
        }
      }}
    >
      {label && (
        <Text
          as="label"
          preset="footnote"
          style={{ paddingBottom: spacing.s4 }}
        >
          {label}
        </Text>
      )}

      <CustomSelect
        isDefaultItem={!value}
        isOpen={isOpen}
        onClick={handleToggle}
      >
        <Text
          as="p"
          style={{ alignSelf: "baseline" }}
          color={selectedOption?.value === 0 ? "placeholder" : "text"}
        >
          {displayValue || "Selecione"}
        </Text>
        <Icon name={isOpen ? "arrowUp" : "arrowDown"} />
      </CustomSelect>

      <SelectDropdown isOpen={isOpen}>
        {options.map((option) => (
          <SelectOption
            key={option.value.toString()}
            onClick={() => handleSelect(option.value)}
          >
            {option.label}
          </SelectOption>
        ))}
      </SelectDropdown>

      {errorMessage && (
        <Text preset="body2" color="danger">
          {errorMessage}
        </Text>
      )}
    </SelectWrapper>
  );
}
