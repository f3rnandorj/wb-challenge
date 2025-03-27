import { ToastType } from "@/services";
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-20px); }
`;

export const ToastContent = styled.div`
  display: flex;
  flex: 1;

  align-items: center;
  gap: 12px;
`;

export const IconContainer = styled.div<{ type: ToastType }>`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.font.colors.grayWhite};
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  color: ${({ theme }) => theme.font.colors.grayWhite};

  border: none;
  margin-left: 12px;
  padding: 4px;
  cursor: pointer;
`;

export const ToastContainer = styled.div<{
  type: ToastType;
  isExiting: boolean;
}>`
  position: fixed;
  top: 20px;
  right: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  min-width: 200px;
  max-width: 300px;

  padding: 16px;
  border-radius: ${({ theme }) => theme.borderRadius.s50};

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-out;
  z-index: 9999;

  ${({ isExiting }) =>
    isExiting &&
    css`
      animation: ${fadeOut} 1s ease-out forwards;
    `}

  ${({ type, theme }) => {
    switch (type) {
      case "error":
        return css`
          background-color: ${theme.colors.danger};
        `;
      default:
        return css`
          background-color: ${theme.colors.success};
        `;
    }
  }}
`;
