import { api } from "@/api";
import { OfferApi } from "./offerTypes";

async function getAllOffers(): Promise<OfferApi[]> {
  const response = await api.get<OfferApi[]>("/offer");

  return response.data;
}

export const offerApi = {
  getAllOffers,
};
