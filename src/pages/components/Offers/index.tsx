import { Column, EmailBox } from "../../styles";
import { Text } from "@/components";
import { RadioGroup } from "./components/RadioGroup";
import { useTheme } from "styled-components";
import { Offer, UseOfferGetAllReturn } from "@/domain";

interface Props {
  offerListData: UseOfferGetAllReturn;
  selectedOffer: Offer | undefined;
  setSelectedOffer: (offer: Offer) => void;
}
export function Offers({
  offerListData,
  selectedOffer,
  setSelectedOffer,
}: Props) {
  const { spacing } = useTheme();

  return (
    <Column>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "baseline",
        }}
      >
        <Text
          preset="h4"
          as="h1"
          color="title"
          style={{ paddingBottom: spacing.s10 }}
        >
          Confira o seu plano:
        </Text>

        <EmailBox>
          <Text as="span" color="title" preset="footnote">
            fulano@cicrano.com.br
          </Text>
        </EmailBox>
      </div>

      <RadioGroup
        offerListData={offerListData}
        selectedOffer={selectedOffer}
        setSelectedOffer={setSelectedOffer}
      />
    </Column>
  );
}
