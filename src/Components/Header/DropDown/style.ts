import styled from 'styled-components';
import { NaviContainer } from '../Navigation/style';

export const Title = styled.h4`
  z-index: 2;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const ListContent = styled.li`
  background-color: ${({ theme }) => theme.color.ajouBlue};
  margin-bottom: 0.375rem;
  list-style-type: none;

  border-radius: 0.625rem;
  height: 2.5rem;

  > h4 {
    color: ${({ theme }) => theme.color.white};
    line-height: 2.375rem;

    :before {
      height: 0px;
    }

    :hover {
      :before {
        width: 0%;
      }
    }
  }
`;

export const DropDownContainer = styled(NaviContainer)`
  z-index: 1000;

  a,
  h4 {
    z-index: 2;
    :hover {
      :before {
        width: 0%;
      }
    }
  }
`;

export const DropDownList = styled.ul`
  position: absolute;
  top: 2.5rem;
  min-width: 8rem;
  transform: translateX(-20%);
`;

export const Dim = styled.div`
  z-index: 1;
  position: absolute;
  display: block;
  top: -25%;
  left: 0;
  width: 100%;
  height: 125%;
`;
