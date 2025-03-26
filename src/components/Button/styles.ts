import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 18px 40px;
  border-radius: ${({ theme }) => theme.borderRadius.s50};
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3e2a5d;
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
