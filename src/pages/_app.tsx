import { ResetCss, theme } from "@/theme";
import type { AppProps } from "next/app";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { DM_Sans } from "next/font/google";
import isPropValid from "@emotion/is-prop-valid";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <div className={dmSans.className}>
        <ResetCss />
        <StyleSheetManager
          shouldForwardProp={(propName) => isPropValid(propName)}
        >
          <Component {...pageProps} />
        </StyleSheetManager>
      </div>
    </ThemeProvider>
  );
}
