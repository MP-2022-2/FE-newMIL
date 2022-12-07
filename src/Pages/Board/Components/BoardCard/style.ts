import styled from 'styled-components';
import theme from '@/Styles/theme';

export const Article = styled.article`
  display: flex;
  flex-direction: column;

  text-align: left;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border: 1px solid ${theme.color.ajouSky};
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  transition: 0.2s ease-in-out;
  color: ${theme.color.black};

  h2 {
    padding-bottom: 1rem;
  }

  p {
    padding-bottom: 4rem;
  }

  span {
    color: ${theme.color.ajouSilver};
  }

  &:hover {
    cursor: pointer;
    border: 1px solid ${theme.color.ajouBlue};
  }

  &:active {
    transform: scale(0.965);
  }
`;

export const ArticleInfo = styled.div`
  display: flex;
  gap: 0.625rem;
  padding-top: 0.375rem;

  svg {
    padding-right: 0.125rem;
  }

  span {
    color: ${theme.color.black};
    font-weight: 500;
    font-size: 1rem;
    align-items: baseline;
  }
`;

export const BoardContainer = styled.section`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  align-self: center;
  justify-content: center;
  max-width: ${theme.layout.maxWidth};
  margin: 3rem auto;

  a {
    display: block;
    width: 100%;
  }

  @media ${theme.layout.full} {
    justify-content: space-between;
  }
`;

export const IsEmptyMsg = styled.h3`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
