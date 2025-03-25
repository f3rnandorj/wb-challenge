import { createGlobalStyle } from "styled-components";

export const ResetCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.font.colors.text}; 
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`;
