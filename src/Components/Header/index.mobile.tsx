import { ReactElement, useState } from 'react';
import { UseMobile } from '@/Utils/Hooks/useMediaQuery';
import {
  NaviContainer,
  NaviWrapper,
  HeaderMobileContainer,
  Navigation,
  Cancel,
  Logo,
  Profile,
  Dim,
} from './style';

const HeaderMobile = (): ReactElement => {
  const [open, setOpen] = useState(false);

  return (
    <UseMobile>
      <HeaderMobileContainer>
        <NaviWrapper>
          <Navigation onClick={() => setOpen(!open)} src="/pictures/menu.png" />
          <NaviContainer open={open}>
            <Cancel onClick={() => setOpen(!open)} src="/pictures/Cancel.png" />
          </NaviContainer>
          <Dim />
        </NaviWrapper>
        <Logo src="/pictures/MIL.png" />
        <Profile src="/pictures/profile.png" />
      </HeaderMobileContainer>
    </UseMobile>
  );
};

export default HeaderMobile;
