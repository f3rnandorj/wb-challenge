import React, { useEffect, useRef } from "react";
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

  const firstOptionRef = useRef<HTMLLIElement>(null);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleSelect(selectedValue: string | number) {
    if (onChange) {
      const event = {
        target: { value: selectedValue },
      } as React.ChangeEvent<HTMLSelectElement>;
      onChange(event);
    }
    setIsOpen(false);
  }

  function handleOnClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    if (onClick) {
      onClick(event);
    } else {
      setIsOpen(!isOpen);
    }
  }

  function handleListItemKeyDown(
    e: React.KeyboardEvent<HTMLLIElement>,
    optionValue: string | number,
    index: number
  ) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSelect(optionValue);
    }

    if (e.key === "Tab") {
      if (
        (!e.shiftKey && options.length - 1 === index) ||
        (e.shiftKey && index === 0)
      ) {
        e.preventDefault();
        setIsOpen(false);
        selectRef.current?.focus();
      }
    }

    if (e.key === "ArrowDown" && index < options.length - 1) {
      e.preventDefault();
      const nextOption = document.querySelector<HTMLLIElement>(
        `[data-option-index="${index + 1}"]`
      );
      nextOption?.focus();
    }

    if (e.key === "ArrowUp" && index > 0) {
      e.preventDefault();
      const prevOption = document.querySelector<HTMLLIElement>(
        `[data-option-index="${index - 1}"]`
      );
      prevOption?.focus();
    }

    if (e.key === "Escape") {
      e.preventDefault();
      setIsOpen(false);
    }
  }

  useEffect(() => {
    if (isOpen && firstOptionRef.current) {
      firstOptionRef.current.focus();
    }
  }, [isOpen]);

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
      onClick={handleOnClick}
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
        {options.map((option, index) => (
          <SelectOption
            key={option.value.toString()}
            onClick={() => handleSelect(option.value)}
            onKeyDown={(e) => handleListItemKeyDown(e, option.value, index)}
            ref={index === 0 ? firstOptionRef : null}
            tabIndex={isOpen ? 0 : -1}
            role="option"
            aria-selected={option.value === value}
            data-option-index={index}
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
