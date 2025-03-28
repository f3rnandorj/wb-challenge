import {
  ActionsContainer,
  Description,
  ErrorCode,
  FooterNote,
  NotFoundCard,
  NotFoundContainer,
  Title,
} from "./styles";
import { Button } from "@/components";

export default function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundCard>
        <ErrorCode>404</ErrorCode>
        <Title>Página não encontrada</Title>
        <Description>
          Oops! Parece que você se perdeu no espaço. A página que você está
          procurando não existe ou foi movida.
        </Description>

        <ActionsContainer>
          <a href="/" style={{ width: "100%" }}>
            <Button
              leftIcon={{ name: "rocket", color: "grayWhite" }}
              title="Voltar para o Dashboard"
              style={{ width: "100%" }}
            />
          </a>
        </ActionsContainer>
      </NotFoundCard>

      <FooterNote>Erro 404 • Página não encontrada</FooterNote>
    </NotFoundContainer>
  );
}
