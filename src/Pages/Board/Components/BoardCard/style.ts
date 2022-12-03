import styled from 'styled-components';
import theme from '@/Styles/theme';

export const Article = styled.article`
  display: flex;
  flex-direction: column;

  text-align: left;

  max-width: calc(${theme.layout.maxWidth} / 2);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border: 1px solid ${theme.color.ajouSky};
  background-color: #fff;
  padding: 2rem;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  transition: 0.2s ease-in-out;

  h2 {
    padding-bottom: 1rem;
  }

  p {
    padding-bottom: 4rem;
  }

  &:hover {
    cursor: pointer;
    border: 1px solid ${theme.color.ajouBlue};
  }

  &:active {
    transform: scale(0.965);
  }
`;

export const BoardContainer = styled.section`
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
  max-width: ${theme.layout.maxWidth};
  margin: 3rem auto;

  a {
    display: block;
    width: 100%;
  }
`;
