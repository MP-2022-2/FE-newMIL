import styled from 'styled-components';

export const ButtonContainer = styled.span`
  position: relative;
  display: block;
  text-align: center;
  padding: 0.4rem 2rem;

  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 0;

  a,
  span {
    position: relative;
    font-size: 1.2rem;
    text-decoration: none;
    color: ${(props) => props.theme.black};
    font-weight: 500;

    ::before {
      content: '';
      height: 5px;
      width: 0;
      background-color: #fff;
      border-radius: 10px;
      transition: 0.3s;
      position: absolute;
      bottom: -0.5rem;
      left: 0;
    }

    :hover {
      color: ${(props) => props.theme.ajouSky};
      transition: 0.2s;

      ::before {
        width: 100%;
        background-color: ${(props) => props.theme.ajouYellow};
      }
    }
  }
`;
