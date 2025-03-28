import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.s32}
    ${({ theme }) => theme.spacing.s68} 0;
  margin: 0 auto;
  box-sizing: border-box;

  -webkit-overflow-scrolling: touch;

  transition: padding 0.3s ease;

  @media (min-width: ${({ theme }) => theme?.breakpoints?.xxl}) {
    max-width: 96rem;
  }

  @media (max-width: ${({ theme }) => theme?.breakpoints?.xxl}) {
    max-width: 96rem;
    padding-left: ${({ theme }) => theme.spacing.s48};
    padding-right: ${({ theme }) => theme.spacing.s48};
  }

  @media (max-width: ${({ theme }) => theme?.breakpoints?.xl}) {
    max-width: 80rem;
    padding-left: ${({ theme }) => theme.spacing.s32};
    padding-right: ${({ theme }) => theme.spacing.s32};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.lg}) {
    max-width: 64rem;
    padding-left: ${({ theme }) => theme.spacing.s24};
    padding-right: ${({ theme }) => theme.spacing.s24};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.md}) {
    max-width: 48rem;
    padding-left: ${({ theme }) => theme.spacing.s16};
    padding-right: ${({ theme }) => theme.spacing.s16};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.sm}) {
    max-width: 100%;
    padding-left: ${({ theme }) => theme.spacing.s12};
    padding-right: ${({ theme }) => theme.spacing.s12};
    padding-top: ${({ theme }) => theme.spacing.s24};
    padding-bottom: ${({ theme }) => theme.spacing.s12};
  }

  @media (max-width: 360px) {
    padding-left: ${({ theme }) => theme.spacing.s8};
    padding-right: ${({ theme }) => theme.spacing.s8};
  }
`;
