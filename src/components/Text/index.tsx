import { CSSProperties, ReactNode } from "react";
import { DefaultTheme } from "styled-components";
import { StyledText } from "./styles";

export type TextVariants =
  | "h4"
  | "body"
  | "body2"
  | "body2Alternative"
  | "exceptions"
  | "ctaText";

export interface TextProps {
  as?: React.ElementType;
  preset?: TextVariants;
  color?: keyof DefaultTheme["font"]["colors"];
  children: ReactNode;
  style?: CSSProperties | undefined;
}

export function Text({
  children,
  preset = "body",
  color = "text",
  style,
  ...sRTextProps
}: TextProps) {
  return (
    <StyledText preset={preset} color={color} {...sRTextProps} style={style}>
      {children}
    </StyledText>
  );
}

export const $fonts: Record<TextVariants, CSSProperties | undefined> = {
  h4: { fontSize: 20, lineHeight: "100%", fontWeight: 400 },
  body: { fontSize: 16, lineHeight: "100%", fontWeight: 400 },
  body2: { fontSize: 14, lineHeight: "100%", fontWeight: 400 },
  body2Alternative: { fontSize: 14, lineHeight: "100%", fontWeight: 700 },
  ctaText: { fontSize: 12, lineHeight: "100%", fontWeight: 700 },
  exceptions: { fontSize: 10, lineHeight: "100%", fontWeight: 400 },
};
