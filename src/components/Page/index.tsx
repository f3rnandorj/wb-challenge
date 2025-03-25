import { ReactNode } from "react";
import { Container } from "../Container";
import { MainHeader } from "./components/MainHeader";
import { useTheme } from "styled-components";

interface Props {
  children: ReactNode;
  canGoBack?: boolean;
}
export function Page({ children, canGoBack = false }: Props) {
  const { spacing } = useTheme();

  return (
    <Container>
      <MainHeader canGoBack={canGoBack} />

      <div style={{ paddingTop: spacing.s72 }}>{children}</div>
    </Container>
  );
}
