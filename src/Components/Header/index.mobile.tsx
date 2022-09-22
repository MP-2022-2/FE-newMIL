import { ReactElement, useState } from 'react';
import { UseMobile } from '@/Utils/Hooks/useMediaQuery';
import { NaviContainer, NaviWrapper, HeaderMobileContainer } from './style';

const HeaderMobile = (): ReactElement => {
  const [open, setOpen] = useState(false);

  return (
    <UseMobile>
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
    </UseMobile>
  );
};

export default HeaderMobile;
