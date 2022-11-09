import styled from 'styled-components';
import theme from '@/Styles/theme';

export const ListContainer = styled.div`
  display: block;
`;

export const ListTag = styled.li`
  list-style-type: none;
  padding: 0.6rem;
  margin-bottom: 0.6rem;
  background-color: ${theme.color.ajouSilver};
  border-radius: 10px;
`;
