import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '@/Styles/theme';

export const ButtonWrapper = styled(Link)``;

export const ButtonContainer = styled.button`
  display: block;
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
  }
`;
