import styled, { css } from 'styled-components';

export const CilNavigationContainer = styled.nav``;

export const Navigation = styled.div<{ isSelect: boolean }>`
  ${(props) => props.isSelect && css``}
`;
