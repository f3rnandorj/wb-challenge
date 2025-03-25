const formatCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
  let formattedValue = e.target.value.replace(/\D/g, ""); // Remove qualquer caractere não numérico
  formattedValue = formattedValue.replace(/(\d{4})(\d{1,4})/, "$1 $2"); // Adiciona um espaço a cada 4 dígitos
  formattedValue = formattedValue.replace(
    /(\d{4} \d{4} \d{4})(\d{1,4})/,
    "$1 $2"
  ); // Para o próximo grupo de 4 dígitos

  return formattedValue;
  // onChange({ ...e, target: { ...e.target, value: formattedValue } });
};

export const masks = { formatCardNumber };
