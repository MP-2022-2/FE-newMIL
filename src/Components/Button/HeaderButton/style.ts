import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: block;
  text-align: center;
  padding: 0.4rem 2rem;

  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 0;

  a {
    font-size: 1.2rem;
    text-decoration: none;
    color: ${(props) => props.theme.white};
    font-weight: 500;

    :hover {
      color: ${(props) => props.theme.ajouSky};
      transition: 0.2s;
    }
  }
`;
