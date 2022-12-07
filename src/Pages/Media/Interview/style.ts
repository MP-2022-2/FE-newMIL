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
  vertical-align: middle;
`;
