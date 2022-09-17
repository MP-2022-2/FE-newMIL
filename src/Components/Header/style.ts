import styled from 'styled-components';

export const HeaderContainer = styled.header`
  ${({ theme }) => theme.common.flexCenter};

  width: 90%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  height: 5rem;
  line-height: 5rem;
  justify-content: space-between;

  margin: 0 auto;
  vertical-align: middle;
  background-color: ${({ theme }) => theme.color.lightBlue};
`;

export const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;

  h3:nth-child(2) {
    padding-left: 1.5rem;
  }
`;
