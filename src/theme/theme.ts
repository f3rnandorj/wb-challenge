import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    background: "#ffffff",

    primary: "#191847",
    secondary: "#F5850B",

    grayBlack: "#1C1C1C",
    gray1: "#2E2E2E",
    gray2: "#4F4F4F",
    gray3: "#828282",
    gray4: "#BDBDBD",
    gray5: "#E0E0E0",
    gray6: "#F4F3F6",
    grayWhite: "#FFFFFF",

    danger: "#FF6B6B",
  },
  font: {
    colors: {
      title: "#151516",
      text: "#666173",
      placeholder: "#C9C5D4",
      grayWhite: "#FFFFFF",
      primary: "#191847",
      secondary: "#F5850B",
      danger: "#FF6B6B",
    },
  },
  spacing: {
    s4: "0.25rem",
    s8: "0.5rem",
    s10: "0.625rem",
    s12: "0.75rem",
    s14: "0.875rem",
    s16: "1rem",
    s20: "1.25rem",
    s24: "1.5rem",
    s32: "2rem",
    s38: "2,375rem",
    s40: "2.5rem",
    s48: "3rem",
    s56: "3.5rem",
    s68: "4.25rem",
    s72: "4.5rem",
  },
  breakpoints: {
    sm: "40rem", // 640px
    md: "48rem", // 768px
    lg: "64rem", // 1024px
    xl: "80rem", // 1280px
    xxl: "96rem", // 1536px
  },
  borderRadius: {
    s15: "15px",
    s25: "25px",
    s50: "50px",
  },
};

export { theme };
