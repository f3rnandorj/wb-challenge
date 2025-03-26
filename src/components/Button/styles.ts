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

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.secondary};
  }

  &:active {
    background-color: #291a42;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray3};
    cursor: not-allowed;
    box-shadow: none;
  }
`;
