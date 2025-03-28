import { BASE_URL } from "@/api";
import { http, HttpResponse } from "msw";

import { OFFER_PATH, OfferApi } from "@/domain";
import { offerMocks } from "./offerMocks";

const FULL_URL = `${BASE_URL}${OFFER_PATH}`;

export const offerHandlers = [
  http.get(FULL_URL, async () => {
    const response: OfferApi[] = offerMocks.offer1;

    return HttpResponse.json(response, { status: 200 });
  }),
];
