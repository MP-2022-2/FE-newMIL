import { createGlobalStyle } from 'styled-components';

const pixelToRem = (size: number) => `${size / 16}rem`;

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
    font-size : ${pixelToRem(28)};
    font-weight : bold;
  }

  h2 {
    font-size : ${pixelToRem(24)};
    font-weight : bold;
  }

  h3 {
    font-size : ${pixelToRem(18)};
    font-weight : medium;
  }

  h4 {
    font-size : ${pixelToRem(14)};
    font-weight : medium;
  }

  caption {
    font-size : ${pixelToRem(10)};
    font-weight : 300;
  }
`;

export default GlobalStyle;
