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
import { useToast } from "@/services";

export default function Home() {
  const { spacing } = useTheme();

  const offerListData = useOfferGetAll();

  const { showToast } = useToast();

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>();

  useEffect(() => {
    if (offerListData.offers) {
      setSelectedOffer(offerListData.offers[0]);

      showToast({
        message: "Seja muito bem-vindo(a)!",
      });
    }
  }, [offerListData.isSuccess]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page>
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
              alt="credit-cards-image"
              src={creditCards}
              width={215}
              height={50}
              style={{ paddingBottom: spacing.s32, height: 70, width: 215 }}
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
