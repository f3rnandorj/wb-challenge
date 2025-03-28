import { api } from "@/api";
import { OfferApi } from "./offerTypes";

export const OFFER_PATH = "/offer";
async function getAllOffers(): Promise<OfferApi[]> {
  const response = await api.get<OfferApi[]>(OFFER_PATH);

  return response.data;
}

export const offerApi = {
  getAllOffers,
};
