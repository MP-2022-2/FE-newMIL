import { ReactElement } from 'react';
import { HeaderButton } from '../Button';
import { HeaderContainer } from './style';

const Header = (): ReactElement => (
  <HeaderContainer>
    <HeaderButton url="/">홈</HeaderButton>
    <HeaderButton url="/cil">CIL</HeaderButton>
    <HeaderButton url="/talk">소통</HeaderButton>
    <HeaderButton url="/professor">교수님</HeaderButton>
    <HeaderButton url="/Login">로그인</HeaderButton>
  </HeaderContainer>
);

export default Header;
