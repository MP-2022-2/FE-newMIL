import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonWrapper = styled(Link)``;

export const ButtonContainer = styled.button`
  ${({ theme }) => theme.common.h3}
  color: #eee;
  font-weight: 500;

  display: block;
  text-align: center;
  ${({ theme }) => theme.PC.h4};
  width: 100%;
  color: #fefeff;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  border: 0;

  padding: 0.8rem 0;
  border-radius: 5px;
  background-color: #0099ff;

  :hover {
    cursor: pointer;
  }
`;
