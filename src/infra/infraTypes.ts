export enum QueryKeys {
  OfferList = "OfferList",
}

export interface MutationOptions<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
}
