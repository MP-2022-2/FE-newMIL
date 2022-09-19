import React, { ReactElement } from 'react';

export default interface DefaultButtonProps {
  children: string | ReactElement;
  url?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: () => void;
}
