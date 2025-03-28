import { mockUtils, renderHook, waitFor } from "@/test";
import { checkoutService } from "../../checkoutService";
import { useCheckoutCreate } from "../useCheckoutCreate";

describe("useCheckoutCreate", () => {
  it("should send form data to the external api and call onSuccess function", async () => {
    jest
      .spyOn(checkoutService, "createCheckout")
      .mockResolvedValueOnce(mockUtils.checkout);

    const mockedOnSuccess = jest.fn();
    const mockedOnError = jest.fn();
    const { result } = renderHook(() =>
      useCheckoutCreate({
        onSuccess: mockedOnSuccess,
        onError: mockedOnError,
      })
    );

    result.current.createCheckout(mockUtils.checkoutCreateParams);

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(mockedOnSuccess).toHaveBeenCalledTimes(1);
    expect(mockedOnError).toHaveBeenCalledTimes(0);
  });
});
