import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from '@/Styles/theme';
import GlobalStyle from '@/Styles/global';
import { RecoilRoot } from 'recoil';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </>,
);
