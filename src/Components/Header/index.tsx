import { ReactElement } from 'react';
import { HeaderButton } from '@/Components/Button';
import HeaderDropDown from '@/Components/DropDown/HeaderDropDown';
import { HeaderContainer } from './style';

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
  <HeaderContainer>
    <HeaderButton url="/">홈</HeaderButton>
    <HeaderDropDown title="미디어학과" items={mediaItems} />
    <HeaderButton url="/talk">게시판</HeaderButton>
    <HeaderButton url="/cil">CIL</HeaderButton>
    <HeaderButton url="/login">로그인</HeaderButton>
    <HeaderButton url="/signup">회원가입</HeaderButton>
  </HeaderContainer>
);

export default Header;
