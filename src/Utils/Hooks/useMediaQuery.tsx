import { ReactElement } from 'react';
import { useMediaQuery } from 'react-responsive';
import theme from '@/Styles/theme';

interface MediaQueryProps {
  children: string | ReactElement;
}

export const UseMobile = ({ children }: MediaQueryProps) => {
  const isMobile = useMediaQuery({
    query: `${theme.layout.mobile}`,
  });
  return <>{isMobile && children}</>;
};

export const UsePc = ({ children }: MediaQueryProps) => {
  const isDesktop = useMediaQuery({
    query: `${theme.layout.desktop}`,
  });
  return <>{isDesktop && children}</>;
};

export default { UseMobile, UsePc };
