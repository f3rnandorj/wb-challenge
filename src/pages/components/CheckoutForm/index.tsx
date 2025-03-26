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
        alignSelf: "baseline",
      }}
    >
      <TextInput
        label="Número do cartão"
        width="100%"
        placeholder="0000 0000 0000 0000"
      />

      <div style={{ display: "flex", gap: spacing.s10 }}>
        <TextInput label="Validade" width="100%" placeholder="MM/AA" />
        <TextInput label="CVV" width="100%" placeholder="000" />
      </div>

      <TextInput
        label="Nome impresso no cartão"
        width="100%"
        placeholder="Seu nome"
      />

      <TextInput label="CPF" width="100%" placeholder="000.000.000-00" />

      <TextInput label="Cupom" width="100%" placeholder="Insira aqui" />

      <SelectInstallments />

      <Button
        title="Finalizar pagamento"
        textColor="grayWhite"
        disabled={false}
      />
    </form>
  );
}
