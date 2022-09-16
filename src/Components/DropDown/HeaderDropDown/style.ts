import styled from 'styled-components';
import { ButtonContainer } from '@/Components/Button/HeaderButton/style';

export const DropDownContainer = styled(ButtonContainer)`
  a,
  span {
    z-index: 2;
  }

  a {
    :hover::before {
      width: 0%;
    }
  }

  span {
    :hover {
      cursor: pointer;
    }
  }

  ul {
    position: absolute;
    left: 1rem;
    right: 1rem;
    top: 3rem;

    li {
      background-color: ${(props) => props.theme.darkBlue};
      margin-bottom: 0.2rem;
      list-style-type: none;
      padding: 0.8rem 0.2rem;
    }
  }

  div {
    z-index: 1;
    position: absolute;
    display: block;
    top: -25%;
    left: 0;
    width: 100%;
    height: 125%;
  }
`;
