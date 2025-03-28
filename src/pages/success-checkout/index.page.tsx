import { Button, Icon, Page, Text } from "@/components";
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
import { maskUtils } from "@/utils";
import Head from "next/head";

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

  const anualPrice =
    lastSuccessCheckout.payment === "monthly"
      ? lastSuccessCheckout.discountedPrice * 12
      : lastSuccessCheckout.discountedPrice;

  const installmentsCount = lastSuccessCheckout.installments;

  const formattedPrice = `
  R$ ${anualPrice.toFixed(2)} | ${installmentsCount} 
  x ${(anualPrice / installmentsCount).toFixed(2)}`;

  const userInfo: InfoRowProps[] = [
    { label: " E-mail", value: "fulano@cicrano.com.br" },
    {
      label: "CPF",
      value: maskUtils.formatCpf(lastSuccessCheckout?.creditCardCPF),
    },
  ];

  return (
    <>
      <Head>
        <title>Sucesso | Parabéns pela aquisição do seu plano!</title>
        <meta
          name="description"
          content="Compra efetuada com sucesso, aproveite!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="checkout, ofertas, planos, whitebook, Afya"
        />
      </Head>

      <Page goBackFn={goBack}>
        <div
          data-testid="success-checkout-page"
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

                  <Text preset="body2">{formattedPrice}</Text>
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
      </Page>
    </>
  );
}
