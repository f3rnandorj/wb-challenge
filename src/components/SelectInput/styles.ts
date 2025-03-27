import styled, { css } from "styled-components";

export const SelectWrapper = styled.div<{ width: string }>`
  position: relative;
  width: ${({ width }) => width || "100%"};
  margin-bottom: 1.5rem;
`;

export const SelectDropdown = styled.ul<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;

  max-height: 16rem;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  list-style: none;

  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.gray6};
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export const SelectOption = styled.li`
  padding: ${({ theme }) => `${theme.spacing.s12} ${theme.spacing.s16}`};
  font-size: 16px;
  color: ${({ theme }) => theme.font.colors.text};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray6};
  }
`;

export const CustomSelect = styled.div<{
  isDefaultItem: boolean;
  isOpen: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${({ theme }) => theme.spacing.s10} 0;

  background-color: ${({ theme }) => theme.colors.background};

  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray6};
  cursor: pointer;

  ${({ isOpen, theme }) =>
    isOpen &&
    css`
      border-color: ${theme.colors.secondary};
    `}

  ${({ isDefaultItem, theme }) =>
    isDefaultItem &&
    css`
      color: ${theme.font.colors.placeholder};
    `}
`;
