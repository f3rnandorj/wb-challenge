import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Button } from "..";

const queryClient = new QueryClient();
describe("() => <Button />", () => {
  it("renders a button", () => {
    render(
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Button title="teste" />
        </QueryClientProvider>
      </ThemeProvider>
    );

    const button = screen.getByRole("button", { name: "teste" });
    expect(button).toBeInTheDocument();
  });
});
