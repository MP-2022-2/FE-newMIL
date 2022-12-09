import styled, { css } from 'styled-components';
import theme from '@/Styles/theme';

// default
export const ListContainer = styled.ul<{ sm: boolean }>`
  display: block;
  padding: 0 0.4rem;
  height: 18.5rem;
  overflow-x: hidden;
  overflow-y: scroll;

  ${(props) =>
    props.sm &&
    css`
      height: 11.5rem;
    `}

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
    margin-top: 0.4rem;
    background-color: ${theme.color.ajouSky};
    border-radius: 0.5rem;
    box-shadow: inset 0px 0px 5px white;
  }
`;

export const ListTag = styled.li<{ isMajor: boolean }>`
  padding: 0.8rem 0.6rem;
  margin: 0.6rem 0;
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.ajouSky};
  border-radius: 10px;
  transition: ease-in-out 0.1s;
  display: flex;
  justify-content: space-between;

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

  ${(props) =>
    props.isMajor
      ? css`
          &:before {
            content: '전공';
            color: ${theme.color.ajouBlue};
            font-weight: 600;
          }

          :hover:before {
            color: ${theme.color.ajouYellow};
          }
        `
      : css`
          &:before {
            content: '교양';
            color: ${theme.color.ajouSilver};
            font-weight: 600;
          }
        `}
`;
