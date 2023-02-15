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

export const TrackFormContainer = styled.section`
  display: block;
  width: 22rem;

  @media ${theme.layout.mobile} {
    max-width: 90%;
    flex-direction: column;

    max-width: 50vw;
    width: 50vw;
  }
`;

export const SubLink = styled.caption`
  display: block;
  padding: 2rem 0 0.5rem;
  text-decoration: underline;
  color: ${theme.color.ajouSilver};
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

export const SubTitle = styled.h4`
  text-align: center;
  font-weight: 300;
  color: ${theme.color.ajouSilver};
  padding-bottom: 2rem;
`;

export const TrackFormWrapper = styled(LoginFormContainer)`
  display: flex;
  width: 40rem;
  justify-content: space-between;
  flex-direction: row;

  @media ${theme.layout.mobile} {
    max-width: 90%;
    flex-direction: column;

    max-width: 50vw;
    width: 50vw;
    margin-bottom: 7rem;
  }
`;

export const SelectContainer = styled.aside`
  width: 16rem;
  margin-left: 2rem;

  @media ${theme.layout.mobile} {
    max-width: 90%;
    flex-direction: column;

    max-width: 50vw;
    width: 50vw;
    margin: 1rem 0;
  }
`;

export const TrackContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const Track = styled.button`
  width: 4rem;
  height: 3rem;
  border-radius: 10px;
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.ajouGold};
`;
