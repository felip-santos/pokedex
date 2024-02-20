import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`;

export const Interface = styled.div`
  width: 100%;
  height: 100%;
  background-color: #F8F8F8;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 1440px;

    @media screen and (max-width: 1480px) {
      max-width: 1200px;
    }
`