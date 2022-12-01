import { createGlobalStyle } from 'styled-components';
import theme from '@/Styles/theme';

const GlobalStyle = createGlobalStyle`
@import url(fonts.googleapis.com/earlyaccess/notosanskr.css);

  * {
    margin: 0;
    padding: 0;
    font-family: "Noto Sans KR", sans-serif;
  }

  html, body {
    width : 100%;
    height : 100%;
  }
  
  ul, li {
    list-style-type : none;
  }

  body {
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    -webkit-tap-highlight-color : transparent;
  }

  a, a:visited {
    text-decoration: none;
    color: #333;
  }

  @keyframes push {
    0% {
      transform : scale(1);
    }
    100% {
      transform : scale(0.955);
    }
  }

  @keyframes pull {
    0% {
      transform : scale(1);
    }
    100% {
      transform : scale(1.035);
    }
  }

  @media ${theme.layout.desktop} {
    h1 {
      ${theme.PC.h1};
    }
      
    h2 {
      ${theme.PC.h2};
    }
    
    h3, button {
      ${theme.PC.h3};
    }
    
    h4, label {
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
    
    h3, button {
      ${theme.Mobile.h3};
    }
    
    h4, label {
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
