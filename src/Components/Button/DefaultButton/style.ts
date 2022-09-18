import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonContainer = styled(Link)`
  ${({ theme }) => theme.common.h3}
  text-decoration: none;
  color: #eee;
  font-weight: 500;

  button {
    display: block;
    text-align: center;
    ${({ theme }) => theme.common.h3};
    width: 100%;
    color: #fefeff;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
    border: 0;

    padding: 1rem 3rem;
    border-radius: 5px;
    background-color: #0099ff;

    :hover {
      cursor: pointer;
    }
  }
`;
