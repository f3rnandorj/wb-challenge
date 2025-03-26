function formatCreditCardInput(input: string): string {
  if (input.length > 0 && /\D$/.test(input)) {
    return input.replace(/\D/g, "");
  }

  const digitsOnly = input.replace(/\D/g, "");
  const chunks = [];

  for (let i = 0; i < digitsOnly.length; i += 4) {
    chunks.push(digitsOnly.substring(i, i + 4));
  }

  return chunks.join(" ");
}

function formatExpiryDate(input: string): string {
  if (input.length > 0 && /\D$/.test(input)) {
    return input.replace(/\D/g, "");
  }

  let digits = input.replace(/\D/g, "");

  if (digits.length > 2) {
    digits = `${digits.substring(0, 2)}/${digits.substring(2)}`;
  }

  return digits.substring(0, 5);
}

function formatCpf(input: string): string {
  const digits = input.replace(/\D/g, "");

  return digits
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4")
    .replace(/(-\d{2})\d+?$/, "$1");
}

export const maskUtils = {
  formatCreditCardInput,
  formatExpiryDate,
  formatCpf,
};
