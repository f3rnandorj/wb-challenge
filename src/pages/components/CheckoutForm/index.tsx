import {
  Button,
  FormTextInput,
  FormSelectInput,
  SelectValueProps,
} from "@/components";
import { useTheme } from "styled-components";
import { useRefService, useToast } from "@/services";
import { useForm } from "react-hook-form";
import { PaymentFormData, paymentFormSchema } from "./checkoutFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutCreateParams, Offer, useCheckoutCreate } from "@/domain";
import { useEffect } from "react";
import { useCheckoutService } from "@/services";
import { useRouter } from "next/router";

interface Props {
  selectedOffer: Offer | undefined;
  setSelectedOffer: (offer: Offer | undefined) => void;
  offerList: Offer[] | undefined;
}

export function CheckoutForm({
  selectedOffer,
  setSelectedOffer,
  offerList,
}: Props) {
  const { control, handleSubmit, setValue, formState, watch, clearErrors } =
    useForm<PaymentFormData>({
      resolver: zodResolver(paymentFormSchema),
      mode: "all",
      defaultValues: {
        installments: 0,
      },
    });

  const { showToast } = useToast();
  const { spacing } = useTheme();
  const { push } = useRouter();
  const { homeRadioGroupFirstElement } = useRefService();

  const { setLastSuccessCheckout } = useCheckoutService();

  const { createCheckout, isLoading } = useCheckoutCreate({
    onSuccess: () => {
      push("/success-checkout");
    },
    onError: () => {
      showToast({
        message:
          "Tivemos um problema em registrar sua compra. Verifique os dados e tente novamente.",
        type: "error",
      });
      setLastSuccessCheckout(null);
    },
  });

  const installmentsInput = watch("installments");

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

      setLastSuccessCheckout({
        ...selectedOffer,
        ...checkout,
        installments: selectedOffer.installments,
      });
      createCheckout(checkout);
    }
  }

  useEffect(() => {
    if (formState.isSubmitted && !formState.isValid) {
      showToast({
        message: `Você não preencheu ${
          Object.keys(formState.errors).length
        } campo(s) do formulário, verifique e tente novamente.`,
        type: "error",
      });
    }
  }, [formState.submitCount]);

  useEffect(() => {
    if (selectedOffer?.payment === "yearly") {
      setValue("installments", 1);
      clearErrors("installments");
    }
  }, [selectedOffer]);

  useEffect(() => {
    if (!offerList || installmentsInput === 0) return;

    const paymentType = installmentsInput === 1 ? "yearly" : "monthly";
    const foundOffer = offerList.find((offer) => offer.payment === paymentType);

    if (foundOffer) {
      setSelectedOffer(foundOffer);
    }
  }, [installmentsInput, offerList]);

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: spacing.s32,
        width: "100%",
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
      />

      <Button
        type="submit"
        onKeyDown={handleKeyDown}
        title="Finalizar pagamento"
        textColor="grayWhite"
        disabled={false}
        isLoading={isLoading}
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
