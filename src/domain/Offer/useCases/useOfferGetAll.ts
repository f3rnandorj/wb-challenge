import { QueryKeys } from "@/infra";
import { useQuery } from "@tanstack/react-query";
import { offerService } from "../offerService";

export function useOfferGetAll() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [QueryKeys.OfferList],
    queryFn: offerService.getAllOffers,
    staleTime: 1000 * 30,
  });

  return {
    offers: data,
    isLoading,
    isError,
    refetch,
  };
}
