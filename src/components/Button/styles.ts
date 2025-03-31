import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3.3rem;

  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `${theme.spacing.s16} ${theme.spacing.s40}`};

  border-radius: ${({ theme }) => theme.borderRadius.s50};
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4d3a6d;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray3};
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;

  gap: ${({ theme }) => theme.spacing.s10};
`;

export const Spinner = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.font.colors.grayWhite};
  width: ${({ theme }) => theme.spacing.s20};
  height: ${({ theme }) => theme.spacing.s20};
  animation: ${spin} 1s ease-in-out infinite;
  margin: 0 auto;
`;
Spinner.displayName = "Spinner";
