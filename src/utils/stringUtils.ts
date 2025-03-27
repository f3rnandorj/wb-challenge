function capitalizeFirstLetter(value: string): string {
  return value
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
    .trim();
}

//input: 12x de R$ 45.00/mês
//output: 12x R$ 45.00
export const formatInstallments = (value: string): string => {
  return value.replace(/x de R\$/, "x R$").replace(/\/mês$/, "");
};

export const stringUtils = {
  capitalizeFirstLetter,
  formatInstallments,
};
