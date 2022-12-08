import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: block;
  width: 100%;
  height: 2.5rem;
  margin-top: 4rem;
  text-align: left;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  border: 1px solid;
`;
