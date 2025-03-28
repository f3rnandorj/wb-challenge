import { styled } from "styled-components";

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 22rem 22rem;
  height: 100%;
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
    margin-bottom: ${({ theme }) => theme.spacing.s20};

    & > div:first-child {
      order: 2;
    }

    & > div:last-child {
      order: 1;
    }
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

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;

  padding: ${({ theme }) => theme.spacing.s16};

  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

export const NotFoundCard = styled.div`
  max-width: 28rem;
  width: 100%;

  padding: ${({ theme }) => theme.spacing.s32};
  margin: 0 auto;

  background: ${({ theme }) => theme.colors.grayWhite};

  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  text-align: center;
`;

export const ErrorCode = styled.h1`
  font-size: 72px;
  font-weight: 800;

  color: ${({ theme }) => theme.colors.danger};
  margin: 0;

  line-height: 1;
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 500;

  color: ${({ theme }) => theme.font.colors.primary};
  margin: ${({ theme }) => `${theme.spacing.s16} ${theme.spacing.s8}`};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.font.colors.text};
  margin-bottom: 1.5rem;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.s12};
  margin-top: ${({ theme }) => theme.spacing.s24};
`;

export const FooterNote = styled.p`
  margin-top: ${({ theme }) => theme.spacing.s32};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.font.colors.text};
`;
