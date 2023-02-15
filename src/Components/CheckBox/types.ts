import { ReactElement, MouseEventHandler } from 'react';

export default interface CheckBoxProps {
  checked: boolean;
  children: string | ReactElement;
  // eslint-disable-next-line no-unused-vars
  handleClick?: MouseEventHandler<HTMLInputElement>;
}
