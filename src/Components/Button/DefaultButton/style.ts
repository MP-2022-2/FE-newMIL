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

  :hover {
    cursor: pointer;
  }

  :disabled,
  [disalbed] {
    background-color: ${theme.color.disabled};
    cursor: not-allowed;
  }

  ${(props) =>
    props.secondary &&
    css`
      background-color: ${theme.color.ajouSilver};
    `}

  ${(props) =>
    props.third &&
    css`
      background-color: ${theme.color.white};
      color : ${theme.color.ajouBlue};}
      font-size : 1rem;
      padding : 0;
    `}

  ${(props) =>
    props.fourth &&
    css`
      background-color: ${theme.color.white};
      color : ${theme.color.ajouSilver};}
      font-size : 1rem;
      padding : 0;
    `}
`;
