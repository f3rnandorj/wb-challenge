import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;

      primary: string;
      secondary: string;

      grayBlack: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      gray6: string;
      grayWhite: string;

      success: string;
      danger: string;
    };
    font: {
      colors: {
        title: string;
        text: string;
        placeholder: string;
        grayWhite: string;
        primary: string;
        secondary: string;
        success: string;
        danger: string;
      };
    };
    spacing: {
      s4: string;
      s8: string;
      s10: string;
      s12: string;
      s14: string;
      s16: string;
      s20: string;
      s24: string;
      s32: string;
      s38: string;
      s40: string;
      s48: string;
      s56: string;
      s68: string;
      s72: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    borderRadius: {
      s15: string;
      s25: string;
      s50: string;
    };
  }
}
