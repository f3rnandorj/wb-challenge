import { setupServer } from "msw/node";
import { offerHandlers } from "./Offer";

export const server = setupServer(...offerHandlers);
