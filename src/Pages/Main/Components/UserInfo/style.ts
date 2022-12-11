import styled, { css } from 'styled-components';
import theme from '@/Styles/theme';

export const UserInfoContainer = styled.div<{ isBlur: boolean }>`
  display: flex;
  justify-content: space-between;
  ${theme.common.componentBox}
  margin : 2rem 0;

  h3 {
    text-align: left;
    font-size: 400;

    span {
      font-size: inherit;
      font-weight: bold;
      color: ${theme.color.ajouBlue};
    }
  }

  p,
  caption {
    color: #333;
  }

  background: rgba(254, 254, 254, 0.45);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(254, 254, 254, 0.225);
`;

export const InfoContainer = styled.div`
  padding-top: 1rem;
  text-align: left;
`;

export const Area = styled.div`
  div {
    margin: 0;
    border: 0;
  }
`;

export const MainLoginButton = styled.button`
  display: flex;
  align-items: center;
  color: ${theme.color.lightYellow};
`;
