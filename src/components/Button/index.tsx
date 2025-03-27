import { Text } from "@/components";
import { ButtonContainer, Spinner } from "./styles";
import { DefaultTheme } from "styled-components";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  textColor?: keyof DefaultTheme["font"]["colors"];
  isLoading?: boolean;
}

export function Button({
  title,
  textColor = "grayWhite",
  isLoading = false,
  ...buttonProps
}: ButtonProps) {
  return (
    <ButtonContainer
      {...buttonProps}
      disabled={isLoading || buttonProps.disabled}
    >
      {isLoading ? (
        <Spinner data-testid={"spinner-testId"} />
      ) : (
        <Text preset="body2" color={textColor}>
          {title}
        </Text>
      )}
    </ButtonContainer>
  );
}
