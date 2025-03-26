import { styled } from "styled-components";

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 22rem 22rem;
  height: 100vh;
  width: 100%;

  justify-content: center;

  gap: 16.75rem;

  @media (max-width: ${({ theme }) => theme?.breakpoints?.xxl}) {
    gap: 10rem;
  }
  @media (max-width: ${({ theme }) => theme?.breakpoints?.xl}) {
    gap: ${({ theme }) => theme.spacing.s72};
  }

  @media (max-width: ${({ theme }) => theme?.breakpoints?.lg}) {
    gap: ${({ theme }) => theme.spacing.s48};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.md}) {
    grid-template-columns: 22rem;
  }
`;

export const Column = styled.div`
  display: flex;
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
