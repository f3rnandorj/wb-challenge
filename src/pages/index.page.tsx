import { Page, Text } from "@/components";
import Head from "next/head";
import { Column, MainGrid } from "./styles";
import { useTheme } from "styled-components";
import Image from "next/image";
import creditCards from "../assets/creditCards.png";
import { CheckoutForm } from "./components/CheckoutForm";

import { Offers } from "./components/Offers";
import { useEffect, useState } from "react";
import { Offer, useOfferGetAll } from "@/domain";

export default function Home() {
  const { spacing } = useTheme();

  const offerListData = useOfferGetAll();

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>();

  useEffect(() => {
    if (offerListData.offers) {
      setSelectedOffer(offerListData.offers[0]);
    }
  }, [offerListData.isSuccess]);

  return (
    <>
      <Head>
        <title>Home | Adquira já o seu plano</title>
        <meta name="description" content="Finalize sua compra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="checkout, ofertas, planos, whitebook, afya "
        />
      </Head>

      <Page testId="home-page">
        <MainGrid>
          <Column>
            <div style={{ alignSelf: "baseline" }}>
              <Text
                preset="h4"
                as="h1"
                color="title"
                style={{ paddingBottom: spacing.s10 }}
              >
                Estamos quase lá!
              </Text>

              <Text
                as="h2"
                color="title"
                style={{ paddingBottom: spacing.s32 }}
              >
                Insira seus dados de pagamento abaixo:
              </Text>
            </div>

            <Image
              alt="Imagem com as bandeiras dos cartões de credito"
              src={creditCards}
              width={215}
              height={85}
              style={{ paddingBottom: spacing.s32 }}
            />

            <CheckoutForm selectedOffer={selectedOffer} />
          </Column>

          <Offers
            offerListData={offerListData}
            selectedOffer={selectedOffer}
            setSelectedOffer={setSelectedOffer}
          />
        </MainGrid>
      </Page>
    </>
  );
}
