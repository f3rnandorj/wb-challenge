import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Checkout, CheckoutCreateParams } from "../checkoutTypes";
import { checkoutService } from "../checkoutService";
import { MutationOptions, QueryKeys } from "@/infra";

export function useCheckoutCreate(options?: MutationOptions<Checkout>) {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError, isSuccess } = useMutation<
    Checkout,
    unknown,
    CheckoutCreateParams
  >({
    mutationFn: (params) => checkoutService.createCheckout(params),

    onSuccess: (checkout) => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.OfferList] });

      if (options?.onSuccess) {
        options.onSuccess(checkout);
      }
    },

    onError: () => {
      if (options?.onError) {
        options.onError(options?.errorMessage || "Erro ao fazer pagamento");
      }
    },
  });

  return {
    createCheckout: mutate,
    isLoading: isPending,
    isError,
    isSuccess,
  };
}
