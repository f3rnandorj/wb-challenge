import { TextInput, Button } from "@/components";
import { useTheme } from "styled-components";
import { SelectInstallments } from "./components/SelectInstallments";

export function CheckoutForm() {
  const { spacing } = useTheme();

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: spacing.s32,
      }}
    >
      <TextInput
        label="Número do cartão"
        width="20rem"
        placeholder="0000 0000 0000 0000"
      />

      <div style={{ display: "flex" }}>
        <TextInput label="Validade" width="10rem" placeholder="MM/AA" />
        <TextInput label="CVV" width="10rem" placeholder="000" />
      </div>

      <TextInput
        label="Nome impresso no cartão"
        width="20rem"
        placeholder="Seu nome"
      />

      <TextInput label="CPF" width="20rem" placeholder="000.000.000-00" />

      <TextInput label="Cupom" width="20rem" placeholder="Insira aqui" />

      <SelectInstallments />

      <Button
        title="Finalizar pagamento"
        textColor="grayWhite"
        disabled={false}
      />
    </form>
  );
}
