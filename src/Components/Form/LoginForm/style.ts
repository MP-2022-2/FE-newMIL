import styled from 'styled-components';

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin: 0 auto;
  margin-top: 3rem;

  label {
    text-align: left;
    padding-bottom: 0.4rem;
    ${({ theme }) => theme.common.h4}
  }

  input {
    padding: 0.8rem 0.8rem 0.6rem;
    border-radius: 5px;
    outline: none;
    border: solid 1px #bcbcbc;

    :focus {
      border-color: #0982f0;
    }

    + label {
      margin-top: 1rem;
    }
  }

  a {
    margin-top: 3rem;
    + a {
      margin-top: 1rem;
    }
  }
`;
