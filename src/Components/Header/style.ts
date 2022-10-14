import styled, { css } from 'styled-components';
import { pixelToRem } from '@/Utils/Libs/layoutFunc';

// 공통 이미지
export const Logo = styled.img`
  display: block;
`;

// 웹
export const HeaderContainer = styled.header`
  ${({ theme }) => theme.common.flexCenter};

  width: 90%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  height: ${pixelToRem(80)};
  line-height: ${pixelToRem(80)};
  justify-content: space-between;

  margin: 0 auto;
  vertical-align: middle;
  background-color: ${({ theme }) => theme.color.lightBlue};
`;

export const LoginedInfo = styled.div`
  display: flex;

  h4,
  p {
    line-height: 5rem;
  }
`;

// 모바일
export const HeaderMobileContainer = styled(HeaderContainer)`
  width: 100%;
  max-width: calc(100% - 2rem);
  height: ${pixelToRem(50)};
  line-height: ${pixelToRem(50)};
`;

export const NaviWrapper = styled.aside`
  display: block;
`;

export const NaviContainer = styled.nav<{ open: boolean }>`
  position: absolute;
  top: 0;
  left: 0;

  // Navi 열렸을 때
  ${(props) =>
    props.open === true &&
    css`
      width: 50%;
      height: 100%;
      background-color: white;
      z-index: 2;

      + div {
        display: block;
      }
    `}

  // Navi 닫혔을 때
  ${(props) =>
    props.open === false &&
    css`
      display: none;

      + div {
        display: none;
      }
    `}
`;

// Navi 흐릿한 배경
export const Dim = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #555;
  opacity: 0.5;
  z-index: 1;
`;

// 모바일 아이콘
export const Navigation = styled.img`
  vertical-align: sub;

  :hover {
    cursor: pointer;
  }
`;

export const Cancel = styled.img`
  z-index: 3;
  float: right;
  margin: 1rem;

  :hover {
    cursor: pointer;
  }
`;

export const Profile = styled(Logo)``;

// 가독성 논의

// ${(props) =>
// props.open === false &&

// ${(props) =>
// !props.open &&
