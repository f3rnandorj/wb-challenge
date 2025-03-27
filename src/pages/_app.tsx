import { ResetCss, theme } from "@/theme";
import type { AppProps } from "next/app";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { DM_Sans } from "next/font/google";
import isPropValid from "@emotion/is-prop-valid";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  ContextProviders,
  initializeStorage,
  localStorageImplementation,
} from "@/services";
import { Toast } from "@/components";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

initializeStorage(localStorageImplementation);
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <div className={dmSans.className}>
        <ResetCss />
        <StyleSheetManager
          shouldForwardProp={(propName) => isPropValid(propName)}
        >
          <QueryClientProvider client={queryClient}>
            <ContextProviders>
              <Component {...pageProps} />

              <Toast />
            </ContextProviders>
          </QueryClientProvider>
        </StyleSheetManager>
      </div>
    </ThemeProvider>
  );
}
