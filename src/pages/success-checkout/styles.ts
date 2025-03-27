import styled, { css } from "styled-components";

interface IconContainerProps {
  size?: "large" | "small";
}

export const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 21.5rem;

  text-align: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: ${({ theme }) => theme.spacing.s24};
  padding: ${({ theme }) => theme.spacing.s16};
  padding-bottom: ${({ theme }) => theme.spacing.s24};
  margin-bottom: ${({ theme }) => theme.spacing.s72};

  box-shadow: 0 4px 20px 0 ${({ theme }) => theme.colors.gray5};
  border-radius: ${({ theme }) => theme.borderRadius.s15};
`;

export const CheckoutInfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.gray6};

  padding: ${({ theme }) => theme.spacing.s20};
  padding-bottom: ${({ theme }) => theme.spacing.s16};
  border-radius: ${({ theme }) => theme.borderRadius.s15};
`;

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${({ theme }) => theme.spacing.s40};
  width: ${({ theme }) => theme.spacing.s40};

  border-radius: ${({ theme }) => theme.borderRadius.s50};
  background-color: ${({ theme }) => theme.colors.gray5};

  ${({ size }) =>
    size === "large" &&
    css`
      height: ${({ theme }) => theme.spacing.s68};
      width: ${({ theme }) => theme.spacing.s68};

      border: 3px solid ${({ theme }) => theme.colors.gray6};
      border-radius: ${({ theme }) => theme.borderRadius.s50};
      background-color: ${({ theme }) => theme.colors.background};
    `}
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.s24};

  padding: 0 ${({ theme }) => theme.spacing.s10};
`;
