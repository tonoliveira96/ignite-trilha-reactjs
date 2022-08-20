import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2 , h3 , h4 , h5 {
    font-family: 'Nunito', sans-serif;
    color: ${({ theme }) => theme.subtitle};
  }
`;