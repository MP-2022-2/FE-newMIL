import { ReactElement } from 'react';
import { HeaderButton } from '@/Components/Button';
import GridSection from '@/Components/Section';
import HeaderDropDown from '@/Components/DropDown/HeaderDropDown';
import { UsePc } from '@/Utils/Hooks/useMediaQuery';
import { HeaderContainer, Logo } from './style';
import HeaderMobile from './index.mobile';

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

const Header = (): ReactElement => (
  <>
    <UsePc>
      <HeaderContainer>
        <GridSection col4>
          <GridSection>
            <Logo src="/pictures/MIL.png" />
          </GridSection>
          <GridSection col3>
            <HeaderButton url="/">홈</HeaderButton>
            <HeaderDropDown title="미디어학과" items={mediaItems} />
            <HeaderButton url="/talk">게시판</HeaderButton>
            <HeaderButton url="/cil">CIL</HeaderButton>
          </GridSection>
        </GridSection>
        <GridSection>
          <HeaderButton url="/user/login" regular>
            로그인
          </HeaderButton>
        </GridSection>
      </HeaderContainer>
    </UsePc>
    <HeaderMobile />
  </>
);

export default Header;
