import userEvent from "@testing-library/user-event";
import { theme } from "@/theme";
import { Button, ButtonProps } from "..";
import { render, screen } from "@/test";

function renderComponent(props?: Partial<ButtonProps>) {
  render(<Button title="button title" {...props} />);

  const buttonElement = screen.getByRole("button");
  const titleElement = screen.queryByText(/button title/i);
  const spinnerElement = screen.queryByTestId("spinner-testId");

  return {
    titleElement,
    buttonElement,
    spinnerElement,
  };
}

describe("() => <Button />", () => {
  it("should render the button with correct text", () => {
    renderComponent({ title: "Click me" });

    expect(
      screen.getByRole("button", { name: "Click me" })
    ).toBeInTheDocument();
  });

  it("should show spinner when isLoading is true", () => {
    const { buttonElement, spinnerElement } = renderComponent({
      isLoading: true,
    });

    expect(buttonElement).toBeDisabled();
    expect(spinnerElement).toBeInTheDocument();
  });

  it("should be disabled when disabled prop is true", () => {
    const { buttonElement } = renderComponent({ disabled: true });

    expect(buttonElement).toBeDisabled();
  });

  it("should be disabled when isLoading is true", () => {
    const { buttonElement } = renderComponent({ isLoading: true });

    expect(buttonElement).toBeDisabled();
  });

  it("should apply correct text color from theme", () => {
    const { titleElement } = renderComponent({ textColor: "primary" });

    expect(titleElement).toHaveStyle(`color: ${theme.font.colors.primary}`);
  });

  it("should apply default styles correctly", () => {
    const { buttonElement } = renderComponent();

    const button = buttonElement;

    expect(button).toHaveStyle(`background-color: ${theme.colors.primary}`);
    expect(button).toHaveStyle(`border-radius: ${theme.borderRadius.s50}`);
  });

  it("should apply disabled styles correctly", () => {
    const { buttonElement } = renderComponent({ disabled: true });

    const button = buttonElement;

    expect(button).toHaveStyle(`background-color: ${theme.colors.gray3}`);
    expect(button).toHaveStyle("cursor: not-allowed");
  });

  it("should call onClick handler when clicked", async () => {
    const onClick = jest.fn();

    const { buttonElement } = renderComponent({ onClick });

    await userEvent.click(buttonElement);
    await userEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it("should not call onClick when disabled", async () => {
    const onClick = jest.fn();

    const { buttonElement } = renderComponent({ disabled: true, onClick });

    await userEvent.click(buttonElement);

    expect(onClick).not.toHaveBeenCalled();
  });

  it("should forward all button HTML attributes", () => {
    const { buttonElement } = renderComponent({
      type: "submit",
      "aria-label": "Custom label",
    });

    expect(buttonElement).toHaveAttribute("type", "submit");
    expect(buttonElement).toHaveAttribute("aria-label", "Custom label");
  });
});
