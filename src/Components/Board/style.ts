import styled from 'styled-components';
import theme from '@/Styles/theme';

export const Article = styled.article`
  display: flex;
  flex-direction: column;

  text-align: left;

  width: calc(50% - 4rem - ${theme.layout.gutter}px / 2);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border: 1px solid #232323;
  background-color: #ededed;
  padding: 2rem;
  margin-bottom: 1.5rem;
  border-radius: 10px;

  h2 {
    padding-bottom: 1rem;
  }

  p {
    padding-bottom: 4rem;
  }
`;

export const BoardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 3rem auto;
  max-width: ${theme.layout.maxWidth};
`;
