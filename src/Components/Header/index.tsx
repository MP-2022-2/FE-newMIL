import { ReactElement } from 'react';
import LinkButton from '../Button';
import { HeaderContainer } from './style';

const Header = (): ReactElement => (
  <HeaderContainer>
    <LinkButton url="/">홈</LinkButton>
    <LinkButton url="/cil">CIL</LinkButton>
    <LinkButton url="/talk">소통</LinkButton>
    <LinkButton url="/professor">교수님</LinkButton>
  </HeaderContainer>
);

export default Header;
