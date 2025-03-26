import { styled } from "styled-components";

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100%;

  @media (max-width: ${({ theme }) => theme?.breakpoints?.xxl}) {
    gap: ${({ theme }) => theme.spacing.s20};
  }
`;

export const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const EmailBox = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.s4} ${theme.spacing.s8}`};
  margin-bottom: ${({ theme }) => theme.spacing.s32};

  border: 1px solid ${({ theme }) => theme.colors.gray5};

  border-radius: ${({ theme }) => theme.borderRadius.s15};
`;
