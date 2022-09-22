import styled, { css } from 'styled-components';
import { pixelToRem } from '@/Utils/Libs/layoutFunc';

// 웹
export const HeaderContainer = styled.header<{ visible?: boolean }>`
  ${({ theme }) => theme.common.flexCenter};

  ${(props) =>
    props.visible === false &&
    css`
      display: none;
    `}

  width: 90%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  height: ${pixelToRem(80)};
  line-height: ${pixelToRem(80)};
  justify-content: space-between;

  margin: 0 auto;
  vertical-align: middle;
  background-color: ${({ theme }) => theme.color.lightBlue};
`;

// 모바일
export const HeaderMobileContainer = styled(HeaderContainer)`
  width: 100%;
  max-width: calc(100% - 2rem);
  height: ${pixelToRem(50)};
  line-height: ${pixelToRem(50)};
`;

export const NaviWrapper = styled.div`
  #naviBut,
  #naviCancelBut {
    :hover {
      cursor: pointer;
    }
  }

  #naviBut {
    vertical-align: sub;
  }

  #naviCancelBut {
    z-index: 3;
    float: right;
    margin: 1rem;
  }

  // 열렸을 때
  .Open {
    width: 50%;
    height: 100%;
    background-color: white;
    z-index: 2;

    + .dim {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #555;
      opacity: 0.5;
      z-index: 1;
    }
  }

  // 닫혔을 때
  .Close {
    display: none;
  }
`;

export const NaviContainer = styled.section`
  position: absolute;
  top: 0;
  left: 0;
`;
