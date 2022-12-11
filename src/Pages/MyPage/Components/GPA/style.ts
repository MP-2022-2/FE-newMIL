import styled from 'styled-components';
import theme from '@/Styles/theme';

export const GPAContainer = styled.div`
  ${theme.common.flexCenterColumn}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 0.625rem;
  border: 1px solid ${theme.color.gray};
  margin: 2rem 0;

  #progress {
    appearance: none;
    margin-bottom: 2rem;
  }
  #progress::-webkit-progress-bar {
    background: #f0f0f0;
    border-radius: 0.625rem;
    box-shadow: inset 0.25rem 0.25rem 0.625rem #ccc;
  }
  #progress::-webkit-progress-value {
    border-radius: 0.625rem;
    background: ${theme.color.ajouBlue};
    background: -webkit-linear-gradient(
      to right,
      ${theme.color.ajouYellow},
      ${theme.color.ajouGold}
    );
    background: linear-gradient(to right, ${theme.color.ajouYellow}, ${theme.color.ajouGold});
  }
`;

export const GPAInfo = styled.span`
  display: flex;
  align-items: baseline;

  h1 {
    color: ${theme.color.ajouBlue};
  }

  h4 {
    padding-left: 0.5rem;
  }
`;
