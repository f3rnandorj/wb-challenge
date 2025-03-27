import { ReactNode } from "react";
import { Container } from "../Container";
import { MainHeader } from "./components/MainHeader";
import { useTheme } from "styled-components";

interface Props {
  children: ReactNode;
  goBackFn?: () => void;
}
export function Page({ children, goBackFn }: Props) {
  const { spacing } = useTheme();

  return (
    <Container>
      <MainHeader goBackFn={goBackFn} />

      <div style={{ paddingTop: spacing.s72 }}>{children}</div>
    </Container>
  );
}
