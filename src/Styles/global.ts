import { createGlobalStyle } from 'styled-components';
import theme from '@/Styles/theme';

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
    ${theme.common.h1};
  }
    
  h2 {
    ${theme.common.h2};
  }
  
  h3 {
    ${theme.common.h3};
  }
  
  h4 {
    ${theme.common.h4};
  }
  
  caption {
    ${theme.common.caption};
  }
`;

export default GlobalStyle;
