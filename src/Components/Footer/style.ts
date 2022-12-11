import styled from 'styled-components';
import theme from '@/Styles/theme';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  margin: 0 auto;

  max-width: ${theme.layout.maxWidth};
  color: ${theme.color.ajouSilver};
`;

export const FooterWrapper = styled.footer`
  background-color: ${theme.color.gray};
  width: 100%;
`;
