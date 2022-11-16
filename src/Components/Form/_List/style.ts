import styled from 'styled-components';
import theme from '@/Styles/theme';

export const ListContainer = styled.ul`
  display: block;
  padding: 0 0.4rem;
  height: 18.5rem;
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.color.ajouBlue};
    border-radius: 0.5rem;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: ${theme.color.ajouSky};
    border-radius: 0.5rem;
    box-shadow: inset 0px 0px 5px white;
  }
`;

export const ListTag = styled.li`
  list-style-type: none;
  padding: 0.8rem 0.6rem;
  margin-bottom: 0.6rem;
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.ajouSky};
  border-radius: 10px;
  transition: ease-in-out 0.1s;

  b {
    color: ${theme.color.ajouBlue};
  }

  &:hover {
    background-color: ${theme.color.ajouSky};
    color: white;
    animation: pull 0.1s ease-out forwards;
    cursor: pointer;
  }

  &:active {
    animation: push 0.2s ease-in-out forwards;
  }

  &#selected {
    background-color: ${theme.color.ajouYellow};
    color: white;
  }
`;
