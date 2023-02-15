import styled from 'styled-components';
import { LoginWrapper, LoginContainer } from '@/Pages/Login/style';
import { IDCheckBoxContainer, LoginFormContainer } from '@/Pages/Login/Components/LoginForm/style';
import theme from '@/Styles/theme';

export const Wrapper = styled(LoginWrapper)`
  padding: 3rem 0;
`;

export const InfoFormContainer = styled.form`
  ${theme.common.flexCenterColumn};
  max-width: ${theme.layout.maxWidth};
  margin: 0 auto;

  @media ${theme.layout.mobile} {
    ${theme.common.mobileLayout}
  }
`;

export const ButtonContainer = styled.div`
  ${theme.common.flexCenter};
  gap: 1rem;
  width: 100%;
  a {
    width: 50%;
    button {
      padding: 1rem;
    }
  }
`;

export const CheckBoxContainer = styled(IDCheckBoxContainer)`
  padding-bottom: 1rem;
  align-self: end;
`;

export const PersonalContainer = styled(LoginContainer)`
  max-width: ${theme.layout.maxWidth};
  margin: 0 auto;

  @media ${theme.layout.mobile} {
    ${theme.common.mobileLayout}
  }
`;

export const InfoContainer = styled.article`
  border: 1px solid white;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 3rem;

  text-align: justify;
  background-color: white;
`;

/// SignUpPage.tsx

export const SignUpFormContainer = styled(LoginFormContainer)`
  margin: 0 auto;
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
