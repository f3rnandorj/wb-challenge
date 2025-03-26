import { Text, Button, Loading } from "@/components";
import { useTheme } from "styled-components";

interface Props {
  isError: boolean;
  isLoading: boolean;
  refetch: () => void;
}

export function EmptyRadioGroup({ isError, isLoading, refetch }: Props) {
  const { spacing } = useTheme();

  if (isError) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: spacing.s10,
        }}
      >
        <Text preset="h4" style={{ textAlign: "center" }}>
          Aconteceu um erro inesperado
        </Text>
        <Button title="Tentar novamente" onClick={() => refetch()} />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div style={{ paddingTop: spacing.s72 }}>
        <Loading />
      </div>
    );
  }

  return null;
}
