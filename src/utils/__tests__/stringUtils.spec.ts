import { stringUtils } from "../stringUtils";

describe("stringUtils", () => {
  describe("capitalizeFirstLetter", () => {
    it("should capitalize the first letter of each word", () => {
      expect(stringUtils.capitalizeFirstLetter("Ana maria")).toBe("Ana Maria");
      expect(stringUtils.capitalizeFirstLetter("ANA MARIA")).toBe("Ana Maria");
      expect(stringUtils.capitalizeFirstLetter("maria")).toBe("Maria");
      expect(stringUtils.capitalizeFirstLetter("MARIA")).toBe("Maria");
      expect(stringUtils.capitalizeFirstLetter("ana maria")).toBe("Ana Maria");
    });

    it("should remove leading/trailing spaces", () => {
      expect(stringUtils.capitalizeFirstLetter(" Ana maria")).toBe("Ana Maria");
      expect(stringUtils.capitalizeFirstLetter("Ana maria ")).toBe("Ana Maria");
    });
  });

  describe("formatInstallments", () => {
    it("should remove 'de' and '/' of the expression '${times}x de R$ ${value}/mês'", () => {
      expect(stringUtils.formatInstallments("12x de R$ 45.00/mês")).toBe(
        "12x R$ 45.00"
      );
    });

    it("should return the main expression when it is different from '${times}x de R$ ${value}/mês'", () => {
      expect(stringUtils.formatInstallments("Ana Maria da Conceição")).toBe(
        "Ana Maria da Conceição"
      );
    });
  });
});
