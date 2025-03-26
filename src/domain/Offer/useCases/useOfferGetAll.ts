import { QueryKeys } from "@/infra";
import {
  QueryObserverResult,
  RefetchOptions,
  useQuery,
} from "@tanstack/react-query";
import { offerService } from "../offerService";
import { Offer } from "../offerTypes";

export interface UseOfferGetAllReturn {
  offers: Offer[] | undefined;
  isLoading: boolean;
  isError: boolean;
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<Offer[], Error>>;
  isSuccess: boolean;
}

export function useOfferGetAll(): UseOfferGetAllReturn {
  const { data, isLoading, isError, refetch, isSuccess } = useQuery({
    queryKey: [QueryKeys.OfferList],
    queryFn: offerService.getAllOffers,
    staleTime: 1000 * 30,
  });

  return {
    offers: data,
    isLoading,
    isError,
    refetch,
    isSuccess,
  };
}
