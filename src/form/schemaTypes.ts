import { stringUtils } from "@/utils";
import { z } from "zod";

const name = z
  .string()
  .min(5, "Nome muito curto")
  .max(50, "Nome muito longo")
  .refine((name) => name.split(" ").length >= 2, "Insira nome e sobrenome")
  .transform(stringUtils.capitalizeFirstLetter);

const cardNumber = z
  .string()
  .min(19, "Número do cartão é obrigatório")
  .transform((value) => value.replace(/\D/g, ""));

const expiryDate = z
  .string()
  .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Formato inválido (MM/AA)")
  .refine((val) => {
    const [month, year] = val.split("/");
    const now = new Date();
    const currentYear = now.getFullYear() % 100;
    const currentMonth = now.getMonth() + 1;

    return (
      parseInt(year) > currentYear ||
      (parseInt(year) === currentYear && parseInt(month) >= currentMonth)
    );
  }, "Cartão expirado ou data inválida");

const cvv = z
  .string()
  .min(3, "CVV deve ter no mínimo 3 dígitos")
  .max(4, "CVV deve ter 4 dígitos")
  .regex(/^\d+$/, "Apenas números são permitidos");

const cpf = z
  .string()
  .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "Formato inválido (000.000.000-00)")
  .transform((val) => val.replace(/\D/g, ""))
  .refine((val) => {
    if (val.length !== 11 || /^(\d)\1{10}$/.test(val)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) sum += parseInt(val.charAt(i)) * (10 - i);
    let rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(val.charAt(9))) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) sum += parseInt(val.charAt(i)) * (11 - i);
    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    return rest === parseInt(val.charAt(10));
  }, "CPF inválido");

const coupon = z.string().max(15, "Cupom muito longo").optional();

const installments = z.number();

export const schemaTypes = {
  name,
  cardNumber,
  expiryDate,
  cvv,
  cpf,
  coupon,
  installments,
};
