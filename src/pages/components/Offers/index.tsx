import { Column, EmailBox } from "../../styles";
import { Text } from "@/components";
import { RadioGroup } from "../RadioGroup";
import { useTheme } from "styled-components";

export function Offers() {
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

      <RadioGroup style={{ alignSelf: "baseline" }} />
    </Column>
  );
}
