import { ReactElement } from 'react';
import { HeaderButton } from '../Button';
import { HeaderContainer } from './style';

const Header = (): ReactElement => (
  <HeaderContainer>
    <HeaderButton url="/">홈</HeaderButton>
    <HeaderButton url="/media">미디어학과</HeaderButton>
    <HeaderButton url="/talk">게시판</HeaderButton>
    <HeaderButton url="/cil">CIL</HeaderButton>
    <HeaderButton url="/login">로그인</HeaderButton>
    <HeaderButton url="/signup">회원가입</HeaderButton>
  </HeaderContainer>
);

export default Header;
