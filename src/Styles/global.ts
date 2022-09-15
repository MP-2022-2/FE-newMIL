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
`;

export default GlobalStyle;
