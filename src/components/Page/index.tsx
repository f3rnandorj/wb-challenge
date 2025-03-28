import { ReactNode } from "react";
import { Container } from "../Container";
import { MainHeader } from "./components/MainHeader";
import { useTheme } from "styled-components";

interface Props {
  testId?: string;
  children: ReactNode;
  goBackFn?: () => void;
}
export function Page({ testId, children, goBackFn }: Props) {
  const { spacing } = useTheme();

  return (
    <Container data-testid={testId}>
      <MainHeader goBackFn={goBackFn} />

      <div style={{ paddingTop: spacing.s72 }}>{children}</div>
    </Container>
  );
}
