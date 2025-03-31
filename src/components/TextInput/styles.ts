import styled from "styled-components";

export const InputWrapper = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || "100%"};
`;

export const InputField = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray6};

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Input = styled.input`
  display: flex;
  flex: 1;

  padding: ${({ theme }) => theme.spacing.s10} 0;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.background};
  font-size: 16px;
  color: ${({ theme }) => theme.font.colors.text};

  &::placeholder {
    color: ${({ theme }) => theme.font.colors.placeholder};
    font-size: 16px;
    opacity: 1;
    line-height: 100%;
  }
`;
