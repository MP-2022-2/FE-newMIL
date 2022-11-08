import styled from 'styled-components';

export const Logo = styled.img`
  display: block;
`;

export const LoginContainer = styled.section`
  ${({ theme }) => theme.common.flexCenterColumn};
  padding-top: 5rem;
`;

export const LoginWrapper = styled.div`
  background-color: #efefef;
  width: 100vw;
  min-height: 100vh;
  height: auto;
`;
