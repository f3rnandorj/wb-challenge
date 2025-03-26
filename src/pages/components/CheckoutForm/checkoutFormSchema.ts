import { z } from "zod";
import { schemaTypes } from "@/form";

const { cardNumber, expiryDate, cvv, cpf, coupon, installments, name } =
  schemaTypes;

export type PaymentFormData = z.infer<typeof paymentFormSchema>;
export const paymentFormSchema = z.object({
  cardNumber,
  expiryDate,
  cvv,
  name,
  cpf,
  coupon,
  installments,
});
