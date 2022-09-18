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
    top: 5rem;
    right: -2.5rem;
    min-width: 10rem;

    li {
      background-color: ${({ theme }) => theme.color.darkBlue};
      margin-bottom: 0.2rem;
      list-style-type: none;

      height: 2.5rem;
      line-height: 2.5rem;

      > span {
        color: ${({ theme }) => theme.color.white};
        ::before {
          height: 0px;
        }

        :hover {
          ::before {
            width: 0%;
          }
        }
      }
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
