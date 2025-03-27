import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.s68};
  padding-top: ${({ theme }) => theme.spacing.s32};

  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 ${({ theme }) => theme.spacing.s68};

  @media (min-width: ${({ theme }) => theme?.breakpoints?.xxl}) {
    max-width: 96rem; // 1536px
    padding: 40px 25px 0px 25px;
  }
  @media (max-width: ${({ theme }) => theme?.breakpoints?.xxl}) {
    max-width: 96rem; // 1536px
    padding: 40px 25px 0px 25px;
  }

  @media (max-width: ${({ theme }) => theme?.breakpoints?.xl}) {
    max-width: 80rem; // 1280px
    padding: 40px 25px 0px 25px;
  }

  @media (max-width: ${({ theme }) => theme?.breakpoints?.lg}) {
    max-width: 64rem; // 1024px
    padding-top: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.md}) {
    max-width: 48rem; // 768px
    padding: 40px 15px 0px 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.sm}) {
    max-width: 100%;
    padding-top: 40px;
  }
`;
