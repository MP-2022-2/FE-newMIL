import styled from 'styled-components';
import theme from '@/Styles/theme';

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 22rem;
  margin: 0 auto;
  margin-top: 3rem;
  background-color: white;
  padding: 3rem 5rem 8rem;
  border-radius: 10px;

  button {
    margin-top: 1rem;
  }

  @media ${theme.layout.mobile} {
    padding: 2rem 4rem 6rem;
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
