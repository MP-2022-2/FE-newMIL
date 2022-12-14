import styled from 'styled-components';
import theme from '@/Styles/theme';
import { LoginFormContainer } from '../../../Login/Components/LoginForm/style';

export const SignUpFormContainer = styled(LoginFormContainer)`
  margin: 1rem 0 5rem;

  button {
    &#email {
      margin: 0;
    }

    &#signup {
      margin-top: 3rem;
    }
  }
`;

export const Title = styled.h2`
  text-align: center;
  padding-bottom: 2rem;
`;

export const DivideBar = styled.div`
  border-top: 2px solid ${theme.color.ajouSky};

  margin: 1.5rem auto;
  width: 10%;
`;
