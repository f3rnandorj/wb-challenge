import { Text } from "../Text";
import { LoadingContainer, Spinner } from "./styles";

export function Loading() {
  return (
    <LoadingContainer>
      <Spinner />
      <Text preset="h4">Carregando...</Text>
    </LoadingContainer>
  );
}
