import { Button, Icon, Page, Text, Toast } from "@/components";
import { useCheckoutService, useToast } from "@/services";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  Box,
  CheckoutInfoBox,
  IconContainer,
  MainColumn,
  UserInfoBox,
} from "./styles";
import { useTheme } from "styled-components";
import { InfoRowProps, UserInfoRow } from "./components/UserInfoRow";
import { maskUtils, stringUtils } from "@/utils";

export default function SuccessCheckout() {
  const { setLastSuccessCheckout, lastSuccessCheckout } = useCheckoutService();
  const { push } = useRouter();
  const { spacing } = useTheme();
  const { showToast, hideToast } = useToast();

  function goBack() {
    push("/");
    setLastSuccessCheckout(null);
  }

  useEffect(() => {
    if (!lastSuccessCheckout) {
      hideToast();
      push("/");
    } else {
      showToast({
        message:
          "Pagamento aprovado! Seu pedido foi confirmado com sucesso. 🎉",
      });
    }
  }, [lastSuccessCheckout]);

  if (!lastSuccessCheckout) return null;

  const userInfo: InfoRowProps[] = [
    { label: " E-mail", value: "fulano@cicrano.com.br" },
    {
      label: "CPF",
      value: maskUtils.formatCpf(lastSuccessCheckout?.creditCardNumber),
    },
  ];

  return (
    <Page goBackFn={goBack}>
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <MainColumn>
          <IconContainer size="large" style={{ marginBottom: spacing.s16 }}>
            <Icon name="check" size={40} />
          </IconContainer>

          <Text
            style={{ marginBottom: spacing.s10 }}
            preset="h4"
            color="primary"
          >
            Parabéns!
          </Text>

          <Text style={{ marginBottom: spacing.s56 }} color="placeholder">
            Sua assinatura foi realizada
            <br />
            com sucesso.
          </Text>

          <Box>
            <CheckoutInfoBox>
              <IconContainer>
                <Icon name="star" />
              </IconContainer>

              <div style={{ textAlign: "end" }}>
                <Text style={{ paddingBottom: spacing.s8 }}>
                  {lastSuccessCheckout.paymentMethod}
                </Text>

                <Text preset="body2">
                  {`R$ ${lastSuccessCheckout.discountedPrice.toFixed(2)} | 
                  ${stringUtils.formatInstallments(
                    lastSuccessCheckout.installments
                  )}`}
                </Text>
              </div>
            </CheckoutInfoBox>

            <UserInfoBox>
              {userInfo.map((item) => (
                <UserInfoRow key={item.label} {...item} />
              ))}
            </UserInfoBox>
          </Box>

          <Text
            style={{ marginBottom: spacing.s24 }}
            preset="ctaText"
            color="primary"
          >
            Gerenciar assinatura
          </Text>

          <Button
            onClick={goBack}
            title="Ir para a home"
            style={{ width: "100%" }}
          />
        </MainColumn>
      </div>

      <Toast />
    </Page>
  );
}
