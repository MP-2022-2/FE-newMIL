import styled from 'styled-components';

export const SignUpContainer = styled.section`
  ${({ theme }) => theme.common.flexCenterColumn};
  text-align: center;
  padding-top: 5rem;

  .select {
    display: flex;
    padding-top: 3rem;
    width: 20rem;
    margin: 0 auto;
    justify-content: center;

    li {
      list-style-type: none;
      padding: 0.6rem 0;
    }

    a {
      font-size: 1.2rem;
      width: 50%;
      color: ${({ theme }) => theme.color.white};
      cursor: pointer;
    }

    .on {
      background-color: ${({ theme }) => theme.color.darkBlue};
    }

    .off {
      background-color: ${({ theme }) => theme.color.ajouBlue};
    }
  }
`;
