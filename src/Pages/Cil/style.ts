import styled from 'styled-components';

import theme from '@/Styles/theme';

export const CilContainer = styled.div`
  display: block;
  ${theme.common.componentBox}
  padding : 0;
  margin: 2rem 0;
  max-width: ${theme.layout.maxWidth};
`;

export const CilWrapper = styled.div`
  display: flex;
`;
