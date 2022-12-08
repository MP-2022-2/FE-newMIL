import styled from 'styled-components';
import theme from '@/Styles/theme';

export const BoardListWrapper = styled.div``;

export const BoardListContainer = styled.div`
  ${theme.common.shadowDefault}
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  padding: 1rem;

  border-radius: 0.625rem;
  background-color: ${theme.color.lightYellow};
`;

export const Label = styled.h3`
  align-self: baseline;
`;

export const List = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 0.625rem;
`;
