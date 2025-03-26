import { Text } from "@/components";
import { ButtonContainer } from "./styles";
import { DefaultTheme } from "styled-components";
import { Ref } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  textColor?: keyof DefaultTheme["font"]["colors"];
  ref?: Ref<HTMLButtonElement> | undefined;
}

export function Button({
  title,
  textColor = "grayWhite",
  ref,
  ...buttonProps
}: ButtonProps) {
  return (
    <ButtonContainer ref={ref} {...buttonProps}>
      <Text preset="body2" color={textColor}>
        {title}
      </Text>
    </ButtonContainer>
  );
}
