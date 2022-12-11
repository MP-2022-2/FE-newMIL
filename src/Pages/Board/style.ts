import styled from 'styled-components';

export const BoardWrapper = styled.div`
  display: block;
`;

export const BoardContainer = styled.section`
  display: block;
  margin-top: 1rem;
`;

export const NaviContainer = styled.nav`
  display: flex;
  width: 90%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  margin-bottom: 2rem;
  vertical-align: middle;

  a {
    width: 100%;
  }

  @media ${({ theme }) => theme.layout.mobile} {
    flex-direction: row;
  }
`;
