import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`;

export const Interface = styled.div`
  width: 100%;
  height: 100%;
  background-color: #F8F8F8;
`;