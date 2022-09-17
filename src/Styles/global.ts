import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url(fonts.googleapis.com/earlyaccess/notosanskr.css);

  * {
    margin: 0;
    padding: 0;  
    font-family: "Noto Sans KR", sans-serif;
  }

  body {
    box-sizing: border-box;
  }

  h1 {
    font-size : 28px;
    font-weight : bold;
  }

  h2 {
    font-size : 24px;
    font-weight : bold;
  }

  h3 {
    font-size : 18px;
    font-weight : medium;
  }

  h4 {
    font-size : 14px;
    font-weight : medium;
  }

  caption {
    font-size : 10px;
    font-weight : 300;
  }
`;

export default GlobalStyle;
