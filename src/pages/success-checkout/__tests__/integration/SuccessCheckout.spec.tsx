import { mockUtils, render, screen } from "@/test";
import SuccessCheckout from "../..";
import { useCheckoutService } from "@/services";

jest.mock("../../../../services/checkout/useCheckout", () => ({
  useCheckoutService: jest.fn(),
}));

jest.mock("../../../../services/toast", () => ({
  useToast: () => ({
    showToast: jest.fn(),
    hideToast: jest.fn(),
  }),
}));

describe("SuccessCheckout Page", () => {
  it("should render success checkout page with all elements when lastSuccessCheckout exists", async () => {
    (useCheckoutService as jest.Mock).mockReturnValue({
      lastSuccessCheckout: mockUtils.lastSuccessCheckout,
      setLastSuccessCheckout: jest.fn(),
    });

    render(<SuccessCheckout />);

    expect(screen.getByTestId("success-checkout-page")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /Ir para a home/i })
    ).toBeInTheDocument();
  });

  it("should not render anything when lastSuccessCheckout doesn't exist", async () => {
    (useCheckoutService as jest.Mock).mockReturnValue({
      lastSuccessCheckout: null,
      setLastSuccessCheckout: jest.fn(),
    });

    const { container } = render(<SuccessCheckout />);

    expect(container).toBeEmptyDOMElement();
  });
});
