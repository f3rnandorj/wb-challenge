export type CardBrand = "visa" | "mastercard" | "elo" | "dinners" | "AMEX";

function detectCardBrand(cardNumber: string): CardBrand | undefined {
  if (!cardNumber) return;

  const cleaned = cardNumber.replace(/\D/g, "");

  const patterns = [
    { brand: "visa" as const, pattern: /^4[0-9]{15}$/ },
    {
      brand: "mastercard" as const,
      pattern: /^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)/,
    },
    { brand: "AMEX" as const, pattern: /^3[47][0-9]{13}$/ },
    { brand: "dinners" as const, pattern: /^(36|38|30[0-5])/ },
    {
      brand: "elo" as const,
      pattern:
        /^4011(78|79)|^43(1274|8935)|^45(1416|7393|763(1|2))|^50(4175|6699|67[0-6][0-9]|677[0-8]|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9])|^627780|^63(6297|6368|6369)|^65(0(0(3([1-3]|[5-9])|4([0-9])|5[0-1])|4(0[5-9]|[1-3][0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8]|4[1-9]|[5-8][0-9]|9[0-8])|7(0[0-9]|1[0-8]|2[0-7])|9(0[1-9]|[1-6][0-9]|7[0-8]))|16(5[2-9]|[6-7][0-9])|50(0[0-9]|1[0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/,
    },
  ];

  for (const { brand, pattern } of patterns) {
    if (pattern.test(cleaned)) {
      return brand;
    }
  }
}

export const cardTypeDetectorUtils = { detectCardBrand };
