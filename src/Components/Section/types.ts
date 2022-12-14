import React, { ReactElement, ReactNode } from 'react';

export interface GridSectionStyleProps {
  col2?: boolean;
  col3?: boolean;
  col4?: boolean;
  col5?: boolean;
  col6?: boolean;
  col7?: boolean;
  col8?: boolean;
  col9?: boolean;
  col12?: boolean;
  gap8?: boolean;
  gap16?: boolean;
  gap20?: boolean;
  gap24?: boolean;
  gap28?: boolean;
  gap32?: boolean;
  left?: boolean;
  right?: boolean;
  center?: boolean;
  wrap?: boolean;
  alignColumn?: boolean;
  mobile?: boolean;
  baseline?: boolean;
  flexStart?: boolean;
  flexEnd?: boolean;
  ref?: (node?: Element | null | undefined) => void;
}

export default interface GridSectionProps extends GridSectionStyleProps {
  children: string | ReactElement | ReactElement[] | ReactNode;
}
