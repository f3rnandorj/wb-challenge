import isPropValid from "@emotion/is-prop-valid";
import { theme } from "../theme/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, RenderOptions } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { StyleSheetManager, ThemeProvider } from "styled-components";

const AllProviders = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <StyleSheetManager
        shouldForwardProp={(propName) => isPropValid(propName)}
      >
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </StyleSheetManager>
    </ThemeProvider>
  );
};

const customRender = (
  component: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(component, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";
export * from "@testing-library/user-event";

export { customRender as render };
