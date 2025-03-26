import { TextInput, Button } from "@/components";
import { useTheme } from "styled-components";
import { SelectInstallments } from "./components/SelectInstallments";
import { useRefService } from "@/services";

export function CheckoutForm() {
  const { spacing } = useTheme();

  const { homeRadioGroupFirstElement } = useRefService();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Tab" && !event.shiftKey) {
      event.preventDefault();
      homeRadioGroupFirstElement.current?.focus();
    }
  };
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: spacing.s32,
        alignSelf: "baseline",
      }}
    >
      <TextInput
        label="Número do cartão"
        width="100%"
        placeholder="0000 0000 0000 0000"
        alt="Input para inserir número do cartão"
      />

      <div style={{ display: "flex", gap: spacing.s10 }}>
        <TextInput
          label="Validade"
          width="100%"
          placeholder="MM/AA"
          alt="Input para inserir validade do cartão"
        />
        <TextInput
          label="CVV"
          width="100%"
          placeholder="000"
          alt="Input para inserir o CVV do cartão"
        />
      </div>

      <TextInput
        label="Nome impresso no cartão"
        width="100%"
        placeholder="Seu nome"
        alt="Input para inserir o nome impresso no cartão"
      />

      <TextInput
        label="CPF"
        width="100%"
        placeholder="000.000.000-00"
        alt="Input para inserir o CPF"
      />

      <TextInput
        label="Cupom"
        width="100%"
        placeholder="Insira aqui"
        alt="Input para inserir cupom de desconto"
      />

      <SelectInstallments />

      <Button
        onKeyDown={handleKeyDown}
        title="Finalizar pagamento"
        textColor="grayWhite"
        disabled={false}
      />
    </form>
  );
}
