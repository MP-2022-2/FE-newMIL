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

  a {
    text-decoration: none;
  }

  @media ${theme.layout.desktop} {
    h1 {
      ${theme.PC.h1};
    }
      
    h2 {
      ${theme.PC.h2};
    }
    
    h3 {
      ${theme.PC.h3};
    }
    
    h4, button {
      ${theme.PC.h4};
    }

    p {
      ${theme.PC.body};
    }
    
    span, caption {
      ${theme.PC.caption};
    }
  }

  @media ${theme.layout.mobile} {
    h1 {
      ${theme.Mobile.h1};
    }
      
    h2 {
      ${theme.Mobile.h2};
    }
    
    h3 {
      ${theme.Mobile.h3};
    }
    
    h4, button {
      ${theme.Mobile.h4};
    }
    
    p {
      ${theme.Mobile.body};
    }

    span, caption {
      ${theme.Mobile.caption};
    }
  }
`;

export default GlobalStyle;
