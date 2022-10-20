import React, { ReactElement } from 'react';

export default interface DefaultButtonProps {
  children: string | ReactElement;
  url?: string | undefined;
  disabled?: React.ButtonHTMLAttributes<HTMLButtonElement>['disabled'];
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: () => void;
}
