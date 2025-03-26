import { offerAdapter } from "./offerAdapter";
import { offerApi } from "./offerApi";
import { Offer } from "./offerTypes";

async function getAllOffers(): Promise<Offer[]> {
  const response = await offerApi.getAllOffers();

  return response.map((offer) => offerAdapter.toOffer(offer));
}

export const offerService = {
  getAllOffers,
};
