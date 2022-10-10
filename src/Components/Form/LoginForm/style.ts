import styled from 'styled-components';

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin: 0 auto;
  margin-top: 3rem;

  span {
    + a,
    + button {
      margin-top: 3rem;
    }
  }

  button {
    margin-top: 1rem;
  }
`;
