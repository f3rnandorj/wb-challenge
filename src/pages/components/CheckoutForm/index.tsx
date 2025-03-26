import {
  Button,
  FormTextInput,
  FormSelectInput,
  SelectValueProps,
} from "@/components";
import { useTheme } from "styled-components";
import { useRefService } from "@/services";
import { useForm } from "react-hook-form";
import { PaymentFormData, paymentFormSchema } from "./checkoutFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutCreateParams, Offer, useCheckoutCreate } from "@/domain";
import { useEffect, useState } from "react";
import { useCheckoutService } from "@/services";
import { useRouter } from "next/router";

interface Props {
  selectedOffer: Offer | undefined;
}

export function CheckoutForm({ selectedOffer }: Props) {
  const { control, handleSubmit, setValue } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentFormSchema),
    mode: "onSubmit",
    defaultValues: {
      installments: 0,
    },
  });

  const { spacing } = useTheme();
  const { push } = useRouter();
  const { homeRadioGroupFirstElement } = useRefService();

  const { setLastCheckout } = useCheckoutService();

  const { createCheckout } = useCheckoutCreate({
    onSuccess: () => push("/success-checkout"),
    onError: () => setLastCheckout(null),
  });

  const [isInstallmentsInputDisabled, setIsInstallmentsInputDisabled] =
    useState(false);

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Tab" && !event.shiftKey) {
      event.preventDefault();
      homeRadioGroupFirstElement.current?.focus();
    }
  }

  function submitForm(formData: PaymentFormData) {
    if (selectedOffer) {
      const checkout: CheckoutCreateParams = {
        couponCode: formData.coupon || null,
        creditCardCPF: formData.cpf,
        creditCardCVV: formData.cvv,
        creditCardExplorationDate: formData.expiryDate,
        creditCardHolder: formData.name,
        creditCardNumber: formData.cardNumber,
        installments: formData.installments,
        gateway: selectedOffer.gateway,
        offerId: selectedOffer.id,
        userId: 1,
      };

      setLastCheckout(checkout);
      createCheckout(checkout);
    }
  }

  useEffect(() => {
    if (selectedOffer?.payment === "yearly") {
      setValue("installments", 1);
      setIsInstallmentsInputDisabled(true);
    } else {
      setIsInstallmentsInputDisabled(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOffer]);

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: spacing.s32,
        alignSelf: "baseline",
      }}
      onSubmit={handleSubmit(submitForm)}
    >
      <FormTextInput
        control={control}
        name="cardNumber"
        label="Número do cartão*"
        width="100%"
        placeholder="0000 0000 0000 0000"
        alt="Input para inserir número do cartão"
        maxLength={19}
        mask="cardNumber"
      />

      <div style={{ display: "flex", gap: spacing.s10 }}>
        <FormTextInput
          control={control}
          name="expiryDate"
          label="Validade*"
          width="100%"
          placeholder="MM/AA"
          alt="Input para inserir validade do cartão"
          maxLength={5}
          mask="expiryDate"
        />

        <FormTextInput
          control={control}
          name="cvv"
          label="CVV*"
          width="100%"
          placeholder="000"
          alt="Input para inserir o CVV do cartão"
          maxLength={4}
        />
      </div>

      <FormTextInput
        control={control}
        name="name"
        label="Nome impresso no cartão*"
        width="100%"
        placeholder="Seu nome"
        alt="Input para inserir o nome impresso no cartão"
      />

      <FormTextInput
        control={control}
        name="cpf"
        label="CPF*"
        width="100%"
        placeholder="000.000.000-00"
        alt="Input para inserir o CPF"
        mask="cpf"
      />

      <FormTextInput
        control={control}
        name="coupon"
        label="Cupom"
        width="100%"
        placeholder="Insira aqui"
        alt="Input para inserir cupom de desconto"
        maxLength={16}
      />

      <FormSelectInput
        control={control}
        name="installments"
        label="Número de parcelas*"
        options={installments}
        disabled={isInstallmentsInputDisabled}
      />

      <Button
        type="submit"
        onKeyDown={handleKeyDown}
        title="Finalizar pagamento"
        textColor="grayWhite"
        disabled={false}
      />
    </form>
  );
}

const installments: SelectValueProps[] = [
  { label: "Selecionar", value: 0 },
  { label: "1x", value: 1 },
  { label: "2x", value: 2 },
  { label: "3x", value: 3 },
  { label: "4x", value: 4 },
  { label: "5x", value: 5 },
  { label: "6x", value: 6 },
  { label: "7x", value: 7 },
  { label: "8x", value: 8 },
  { label: "9x", value: 9 },
  { label: "10x", value: 10 },
  { label: "11x", value: 11 },
  { label: "12x", value: 12 },
];
