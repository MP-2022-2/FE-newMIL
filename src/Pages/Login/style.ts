import styled from 'styled-components';
import theme from '@/Styles/theme';

export const Logo = styled.img`
  display: block;
`;

export const LoginContainer = styled.section`
  ${theme.common.flexCenterColumn};
  padding-top: 3rem;

  @media ${theme.layout.mobile} {
    ${theme.common.mobileLayout}
  }
`;

export const LoginWrapper = styled.div`
  background-color: #efefef;
  width: 100vw;
  min-height: 100vh;
  height: auto;
`;
