import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: block;
  text-align: center;

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

  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: #eee;
    font-weight: bold;
  }
`;
