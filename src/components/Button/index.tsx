import { Text } from "@/components";
import { ButtonContainer } from "./styles";
import { DefaultTheme } from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  textColor?: keyof DefaultTheme["font"]["colors"];
}

export function Button({
  title,
  textColor = "grayWhite",
  ...buttonProps
}: ButtonProps) {
  return (
    <ButtonContainer {...buttonProps}>
      <Text preset="body2" color={textColor}>
        {title}
      </Text>
    </ButtonContainer>
  );
}
