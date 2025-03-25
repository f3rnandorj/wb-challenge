import { ResetCss, theme } from "@/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ResetCss />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
