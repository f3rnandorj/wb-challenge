import styled from "styled-components";

export const RadioContainer = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 20px;
  width: 20px;

  border: ${({ isSelected, theme }) =>
    `1px solid ${isSelected ? theme.colors.gray4 : theme.colors.gray5}`};

  border-radius: ${({ theme }) => theme.borderRadius.s50};
`;

export const RadioCircle = styled.div<{ isSelected: boolean }>`
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.primary : "transparent"};
  height: 11px;
  width: 11px;
  border-radius: ${({ theme }) => theme.borderRadius.s50};
`;

export const RadioButtonItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 19.5rem;
  height: 6.25rem;

  padding: ${({ theme }) => theme.spacing.s20};

  border: 1px solid ${({ theme }) => theme.colors.primary};

  border-radius: ${({ theme }) => theme.borderRadius.s15};

  &:focus-visible {
    outline: none;
    border: 3px solid ${({ theme }) => theme.colors.secondary};
  }

  &:focus:not(:focus-visible) {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.md}) {
    width: 100%;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s8};
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.s8};
`;

export const DiscountPercentageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 2px 3px;

  border-radius: ${({ theme }) => theme.borderRadius.s15};
`;

export const RadioButtonSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s12};
`;

export const RadioButtonSelectorItemWrapper = styled.button`
  display: flex;
  flex-direction: column;
  all: unset;
  cursor: pointer;
`;

export const RadioGroupContainer = styled.div`
  align-self: baseline;

  @media (max-width: ${({ theme }) => theme.breakpoints?.md}) {
    align-self: center;
    width: 100%;
  }
`;
