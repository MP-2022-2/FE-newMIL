import { ReactElement, useState } from 'react';
import { HeaderButton } from '@/Components/Button';
import GridSection from '@/Components/Section';
import HeaderDropDown from '@/Components/DropDown/HeaderDropDown';
import { Mobile, PC } from '@/Components/MediaQuery';
import {
  NaviContainer,
  NaviWrapper,
  HeaderContainer,
  HeaderMobileContainer,
  LoginContainer,
} from './style';

const mediaItems = [
  {
    id: 1,
    value: '교수님 소개',
    url: 'media/professor',
  },
  {
    id: 2,
    value: '졸업 요건',
    url: 'media/graduate',
  },
  {
    id: 3,
    value: '졸업생 인터뷰',
    url: 'media/interview',
  },
];

const Header = (): ReactElement => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <PC>
        <HeaderContainer>
          <GridSection col6>
            <GridSection col2>
              <img src="pictures/MIL.png" />
            </GridSection>
            <GridSection col4>
              <HeaderButton url="/">홈</HeaderButton>
              <HeaderDropDown title="미디어학과" items={mediaItems} />
              <HeaderButton url="/talk">게시판</HeaderButton>
              <HeaderButton url="/cil">CIL</HeaderButton>
            </GridSection>
          </GridSection>
          <GridSection col2>
            <LoginContainer>
              <HeaderButton url="/login" regular>
                로그인
              </HeaderButton>
              <HeaderButton url="/signup" regular>
                회원가입
              </HeaderButton>
            </LoginContainer>
          </GridSection>
        </HeaderContainer>
      </PC>

      <Mobile>
        <HeaderMobileContainer>
          <NaviWrapper>
            <img id="naviBut" onClick={() => setOpen(!open)} src="pictures/menu.png" />
            <NaviContainer className={open ? 'Open' : 'Close'}>
              <img id="naviCancelBut" onClick={() => setOpen(!open)} src="pictures/Cancel.png" />
            </NaviContainer>
            <div className="dim" />
          </NaviWrapper>
          <img src="pictures/MIL.png" />
          <img src="pictures/profile.png" />
        </HeaderMobileContainer>
      </Mobile>
    </>
  );
};

export default Header;
