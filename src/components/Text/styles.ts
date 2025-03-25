import styled, { DefaultTheme } from "styled-components";
import { $fonts, TextVariants } from ".";

export const StyledText = styled.p<{
  preset: TextVariants;
  color: keyof DefaultTheme["font"]["colors"];
}>`
  font-size: ${({ preset }) => $fonts[preset]?.fontSize}px;
  line-height: ${({ preset }) => $fonts[preset]?.lineHeight};
  font-weight: ${({ preset }) => $fonts[preset]?.fontWeight};
  color: ${({ theme, color }) => theme.font.colors[color]};
`;
