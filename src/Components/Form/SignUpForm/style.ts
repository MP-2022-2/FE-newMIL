import styled from 'styled-components';

export const SignUpFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin: 0 auto;
  margin-top: 3rem;

  input {
    padding: 0.8rem 2rem 0.6rem 0.4rem;
    border-radius: 5px;
    border: 0;
  }

  input + input {
    margin-top: 0.3rem;
  }

  button {
    margin-top: 3rem;
  }

  button + button {
    margin-top: 1rem;
  }
`;
