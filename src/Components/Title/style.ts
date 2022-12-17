import styled from 'styled-components';

import theme from '@/Styles/theme';

export const TitleWrapper = styled.div`
  display: block;
  width: 100%;
  margin-top: 4rem;
  text-align: left;
  max-width: ${theme.layout.maxWidth};

  h1 {
    padding-bottom: 1rem;
  }

  @media ${theme.layout.mobile} {
    ${theme.common.mobileLayout}
  }
`;
