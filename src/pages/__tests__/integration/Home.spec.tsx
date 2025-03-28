import Home from "@/pages";
import { fireEvent, render, screen, server, waitFor } from "@/test";

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
  jest.resetAllMocks();
  jest.useRealTimers();
});

describe("Home Page", () => {
  it("should render home page", () => {
    render(<Home />);
    const homeContainerElement = screen.getByTestId("home-page");
    expect(homeContainerElement).toBeInTheDocument();
  });

  it("should show the first offer  when offers are loaded", async () => {
    render(<Home />);

    await waitFor(() => {
      expect(screen.getByTestId("offer-1")).toBeInTheDocument();
    });
  });

  it("should allow selecting a different offer", async () => {
    render(<Home />);

    const offerButtons = await screen.findAllByTestId(/^offer-button-\d+$/);
    expect(offerButtons.length).toBeGreaterThanOrEqual(2);

    const [firstOfferElement, secondOfferElement] = offerButtons;

    expect(firstOfferElement).toBeInTheDocument();
    expect(secondOfferElement).toBeInTheDocument();

    fireEvent.click(secondOfferElement);

    expect(secondOfferElement).toHaveAttribute("data-is-selected", "true");
    expect(firstOfferElement).toHaveAttribute("data-is-selected", "false");
  });

  it("should change selected offer and pass offer to CheckoutForm", async () => {
    render(<Home />);

    const installmentsSelectInputElement = screen.getByTestId(
      "select-input-button"
    );

    expect(installmentsSelectInputElement).toBeInTheDocument();

    expect(installmentsSelectInputElement).toHaveAttribute(
      "data-is-select-open",
      "false"
    );

    fireEvent.click(installmentsSelectInputElement);

    expect(installmentsSelectInputElement).toHaveAttribute(
      "data-is-select-open",
      "true"
    );
  });
});
