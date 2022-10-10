import styled from 'styled-components';
import { LoginContainer } from '@/Pages/Login/style';

export const SignUpContainer = styled(LoginContainer)`
  text-align: center;

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
