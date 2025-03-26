import styled from "styled-components";

export const InputWrapper = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || "100%"};
`;

export const InputField = styled.input`
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray6};
  outline: none;
  background-color: ${({ theme }) => theme.colors.background};
  font-size: 16px;
  color: ${({ theme }) => theme.font.colors.text};

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.font.colors.placeholder};
    font-size: 16px;
    opacity: 1;
    line-height: 100%;
  }
`;
