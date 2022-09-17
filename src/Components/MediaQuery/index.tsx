import React from 'react';
import { useMediaQuery } from 'react-responsive';
import theme from '@/Styles/theme';
import MediaQueryProps from './types';

export const Mobile = ({ children }: MediaQueryProps) => {
  const isMobile = useMediaQuery({
    query: `${theme.layout.mobile}`,
  });
  return <React.Fragment>{isMobile && children}</React.Fragment>;
};

export const PC = ({ children }: MediaQueryProps) => {
  const isDesktop = useMediaQuery({
    query: `${theme.layout.desktop}`,
  });
  return <React.Fragment>{isDesktop && children}</React.Fragment>;
};

export default { Mobile, PC };
