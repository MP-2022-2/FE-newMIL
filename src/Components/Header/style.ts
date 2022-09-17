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

  section {
    width: 90%;
    max-width: ${({ theme }) => theme.layout.column};
  }
`;
