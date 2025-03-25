// src/components/Text/index.tsx
import styled, { DefaultTheme } from "styled-components";

interface TextProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  weight?: "light" | "regular" | "medium" | "bold";
  color?: keyof DefaultTheme["colors"];
  align?: "left" | "center" | "right" | "justify";
  transform?: "none" | "uppercase" | "lowercase" | "capitalize";
}

export const Text = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== "weight",
})<TextProps>`
  font-size: ${({ size }) => {
    switch (size) {
      case "xs":
        return "0.75rem"; // 12px
      case "sm":
        return "0.875rem"; // 14px
      case "md":
        return "1rem"; // 16px
      case "lg":
        return "1.25rem"; // 20px
      case "xl":
        return "4rem"; // 64px
      default:
        return "1rem";
    }
  }};

  font-weight: ${({ weight }) => {
    switch (weight) {
      case "light":
        return 300;
      case "regular":
        return 400;
      case "medium":
        return 500;
      case "bold":
        return 700;
      default:
        return 400;
    }
  }};

  color: ${({ theme, color }) =>
    theme.font.colors[color as keyof typeof theme.font.colors] ||
    theme.font.colors.text};

  text-align: ${({ align }) => align || "left"};
  text-transform: ${({ transform }) => transform || "none"};
`;
