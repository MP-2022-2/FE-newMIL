import styled from 'styled-components';
import theme from '@/Styles/theme';

export const LoginFormContainer = styled.form`
  display: flex;
  width: 22rem;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 3rem;
  background-color: white;
  padding: 3rem 4rem 5rem;
  border-radius: 10px;

  button {
    margin-top: 1rem;
  }

  @media ${theme.layout.mobile} {
    max-width: 90%;
    width: 50vw;
  }
`;

export const IDCheckBoxContainer = styled.div`
  input[type='checkbox'] {
    margin-right: 0.4rem;
    vertical-align: middle;
  }

  input[type='checkbox'],
  label {
    cursor: pointer;
  }
`;

export const SignUpContainer = styled.div`
  display: flex;
  margin: 1.5rem auto 0;
`;

export const SignUpLink = styled.p`
  padding-left: 0.8rem;
  text-decoration: underline;
  color: ${theme.color.ajouBlue};
`;
