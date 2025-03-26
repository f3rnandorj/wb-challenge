import styled, { css } from "styled-components";

export const SelectWrapper = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || "100%"};
`;

export const SelectField = styled.select`
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

export const Option = styled.option<{ isDefaultItem: boolean }>`
  ${({ isDefaultItem }) =>
    isDefaultItem &&
    css`
      display: none;
    `}

  font-size: 16px;
  color: ${({ theme }) => theme.font.colors.text};

  &::placeholder {
    color: ${({ theme }) => theme.font.colors.placeholder};
    font-size: 16px;
    opacity: 1;
    line-height: 100%;
  }
`;
