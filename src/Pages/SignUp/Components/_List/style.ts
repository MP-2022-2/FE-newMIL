import styled from 'styled-components';
import theme from '@/Styles/theme';

// default
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
  padding: 0.8rem 0.6rem;
  margin-bottom: 0.6rem;
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.ajouSky};
  border-radius: 10px;
  transition: ease-in-out 0.1s;

  b {
    color: ${theme.color.ajouYellow};
  }

  &:hover {
    background-color: ${theme.color.ajouBlue};
    color: white;
    animation: pull 0.1s ease-out forwards;
    cursor: pointer;
  }

  &:active {
    animation: push 0.2s ease-in-out forwards;
  }
`;

// chip
export const ChipContainer = styled.ul`
  display: flex;
  margin: 0.5rem 0;
  gap: 0.4rem;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 31rem;

  &::-webkit-scrollbar {
    width: 0.1rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.color.ajouBlue};
    border-radius: 0.1rem;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: ${theme.color.ajouSky};
    border-radius: 0.1rem;
    box-shadow: inset 0px 0px 5px white;
  }
`;

export const ChipTag = styled.li`
  display: flex;
  gap: 1rem;
  padding: 0.4rem;
  color: #333;
  margin: 0.2rem 0.4rem;
  background-color: ${theme.color.lightblue};
  border: 1px solid ${theme.color.ajouBlue};
  border-radius: 5px;
  justify-content: space-between;

  &:hover {
    animation: pull 0.1s ease-out forwards;
    cursor: pointer;
  }

  &:active {
    animation: push 0.2s ease-in-out forwards;
  }
`;
