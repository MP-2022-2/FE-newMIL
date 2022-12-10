import styled from 'styled-components';
import theme from '@/Styles/theme';

export const SubMenuListContainer = styled.div`
  display: block;
  width: 100%;

  border-radius: 0.625rem;
  border: 1px solid ${theme.color.ajouSky};
  ${theme.common.shadowDefault};

  h2 {
    text-align: left;
    padding: 1rem;
  }
`;
