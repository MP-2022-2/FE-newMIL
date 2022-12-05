import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '@/Styles/theme';
import { ButtonHeirarchy } from './types';

export const ButtonWrapper = styled(Link)``;

export const ButtonContainer = styled.button<ButtonHeirarchy>`
  text-align: center;
  font-weight: 500;
  width: 100%;
  color: #fefeff;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  border: 0;

  padding: 0.8rem 0;
  border-radius: 5px;
  background-color: ${theme.color.ajouBlue};

  transition: 0.15s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.025);
  }

  &:active {
    transform: scale(0.965);
  }

  &:disabled,
  [disalbed] {
    background-color: ${theme.color.disabled};
    cursor: not-allowed;

    &:hover,
    &:active {
      transform: scale(1);
    }
  }

  ${(props) =>
    props.secondary &&
    css`
      background-color: ${theme.color.white};
      border: 1px solid ${theme.color.ajouBlue};
      color: ${theme.color.ajouBlue};
    `}

  ${(props) =>
    props.third &&
    css`
      background-color: ${theme.color.white};
      border: 1px solid ${theme.color.ajouSilver};
      color: ${theme.color.ajouSilver};
    `}

  ${(props) =>
    props.fourth &&
    css`
      background-color: ${theme.color.white};
      color : ${theme.color.ajouBlue};}
      font-size : 1rem;
      padding : 0;
    `}

  ${(props) =>
    props.fifth &&
    css`
      background-color: ${theme.color.white};
      color : ${theme.color.ajouSilver};}
      font-size : 1rem;
      padding : 0;
    `}

  ${(props) =>
    props.sm &&
    css`
      padding: 0.2rem;
      font-size: 1rem;
      width: 5rem;
      font-weight: 300;
    `}
`;
