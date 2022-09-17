import { ReactElement } from 'react';

export default interface HeaderButtonProps {
  url: string;
  children: string | ReactElement;
  regular?: boolean;
}
