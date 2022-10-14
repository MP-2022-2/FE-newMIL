import styled from 'styled-components';
import { ButtonContainer } from '@/Components/Button/HeaderButton/style';

export const Title = styled.h4`
  z-index: 2;

  :hover {
    cursor: pointer;
  }
`;

export const ListContent = styled.li`
  background-color: ${({ theme }) => theme.color.darkBlue};
  margin-bottom: 0.2rem;
  list-style-type: none;

  height: 2.5rem;
  line-height: 2.5rem;

  > h4 {
    color: ${({ theme }) => theme.color.white};

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

export const DropDownContainer = styled(ButtonContainer)`
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
