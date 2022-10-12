import styled from 'styled-components';
import theme from '@/Styles/theme';

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin: 0 auto;
  margin-top: 3rem;
  background-color: white;
  padding: 3rem 5rem 8rem;
  border-radius: 10px;

  span {
    + a,
    + button {
      margin-top: 3rem;
    }
  }

  button {
    margin-top: 1rem;
  }

  input[type='checkbox'] {
    margin-right: 0.4rem;
    vertical-align: middle;
  }

  @media ${theme.layout.mobile} {
    padding: 2rem 4rem 6rem;
  }
`;
