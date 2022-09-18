import styled from 'styled-components';
import { LoginFormContainer } from '@/Components/Form/LoginForm/style';

export const SignUpFormContainer = styled(LoginFormContainer)`
  margin-top: 1rem;

  .email {
    ${({ theme }) => theme.common.flexCenter};
    justify-content: space-between;

    span {
      ${({ theme }) => theme.common.h4};
    }

    + label {
      margin-top: 1rem;
    }
  }
`;
