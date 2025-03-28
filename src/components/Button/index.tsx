import { Icon, IconProps, Text } from "@/components";
import { ButtonContainer, ContentContainer, Spinner } from "./styles";
import { DefaultTheme } from "styled-components";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  textColor?: keyof DefaultTheme["font"]["colors"];
  isLoading?: boolean;
  leftIcon?: IconProps;
  rightIcon?: IconProps;
}

export function Button({
  title,
  textColor = "grayWhite",
  isLoading = false,
  leftIcon,
  rightIcon,
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
        <ContentContainer>
          {leftIcon ? <Icon {...leftIcon} /> : <div style={{ width: 20 }} />}

          <Text preset="body2" color={textColor}>
            {title}
          </Text>

          {rightIcon ? <Icon {...rightIcon} /> : <div style={{ width: 20 }} />}
        </ContentContainer>
      )}
    </ButtonContainer>
  );
}
